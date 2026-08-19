// Gravação do lead no OC Hub (Directus) — collection `oc_crm_lead`.
// É a fonte durável: o e-mail é aviso, o CRM é o registro. Por isso o lead vai
// para cá mesmo que o envio de e-mail falhe (e vice-versa) — ver worker/lead.js.
//
// A política do Directus permite CREATE público nessa collection; o token é
// opcional e só é enviado se estiver configurado (deixa o caminho pronto caso a
// política seja fechada depois, sem mexer no código).
//
// Os dois timeouts e o `recuperavel` daqui vêm de medir a produção em 19/08/2026,
// investigando leads que chegavam por e-mail e não apareciam no CRM:
//
//  - Com a conexão já aberta, o Directus responde em 0,256 s — estável nas 12
//    requisições seguidas. O banco não é o gargalo.
//  - Abrir a conexão é que custa: 0,71 s (p50), 2,10 s (p90), 4,19 s (p95) e
//    9,45 s no pior caso de 78 amostras. A demora está no handshake.
//  - Um timeout único de 10 s sem retentativa transformava essa cauda em lead
//    perdido, em silêncio. Daí 1ª tentativa curta (o visitante espera por ela) e
//    retentativas pacientes em segundo plano.
//
// E o que NÃO é o problema, testado contra a produção no mesmo dia: a collection
// aceita payload vazio, `observacoes` com 5.001 chars, `cpf_cnpj` fora de padrão
// e lead duplicado. Não há campo obrigatório, limite de coluna nem índice único
// para tropeçar — se a gravação falha, a causa é transporte, não conteúdo. Não
// gaste tempo procurando validação do lado do CMS.

import { origemTrafego } from './validate.js';

/** 1ª tentativa: o visitante está esperando a resposta, não pode ser longa. */
const TIMEOUT_MS = 10000;

/** Retentativa: roda em `waitUntil`, sem ninguém esperando — pode ser paciente. */
export const TIMEOUT_RETENTATIVA_MS = 25000;

// `observacoes` é coluna `text` (5.001 chars aceitos em teste), então este teto
// não existe para caber no banco: é guarda contra input patológico. O pior lead
// realista mede ~370 chars, então nada de verdade chega perto.
const MAX_OBSERVACOES = 2000;

/**
 * `cpf_cnpj` só recebe o que tem cara de documento. O formulário não valida
 * tamanho e chegam coisas como "17" ou um CPF de 11 dígitos numa coluna de
 * CNPJ; o que não bate vai para `observacoes`, sem contaminar o campo que o
 * comercial usa para procurar a empresa.
 */
function documento(digitos) {
	return digitos.length === 11 || digitos.length === 14 ? digitos : '';
}

/**
 * Campos do formulário que não têm coluna própria no CRM.
 *
 * A ordem é por valor decrescente: o `ID do lead` vem primeiro porque é o que
 * liga este registro ao e-mail interno — se algum dia isto for cortado, é a
 * última linha que se pode perder. `Recebido em` saiu: o Directus já grava
 * `date_created`, era redundância de 40 chars. `Origem do tráfego` só aparece
 * quando há UTM — sem UTM, a ausência da linha já diz que foi acesso direto.
 */
function observacoes(lead) {
	const doc = documento(lead.cnpj);
	const linhas = [
		lead.id && `ID do lead: ${lead.id}`,
		`Página: ${lead.pagina}`,
		lead.utm_source && `Origem do tráfego: ${origemTrafego(lead)}`,
		lead.linhas && `Nº de linhas: ${lead.linhas}`,
		lead.operadora && `Operadora atual: ${lead.operadora}`,
		lead.cnpj && !doc && `CNPJ informado (fora de padrão): ${lead.cnpj}`,
		lead.utm_term && `utm_term: ${lead.utm_term}`,
		lead.utm_content && `utm_content: ${lead.utm_content}`
	].filter(Boolean);

	// Descarta a linha inteira de menor valor, em vez de cortar no meio de um
	// valor e deixar no CRM um UTM pela metade.
	while (linhas.join('\n').length > MAX_OBSERVACOES && linhas.length > 1) linhas.pop();
	return linhas.join('\n');
}

/**
 * Erro carregando o veredito de retentativa, para quem orquestra não precisar
 * entender de HTTP para decidir se insiste.
 */
function falha(mensagem, recuperavel) {
	const erro = new Error(mensagem);
	erro.recuperavel = recuperavel;
	return erro;
}

/**
 * Cria o lead no CRM. Lança em qualquer falha — quem chama decide o que fazer
 * (não derruba o request nem impede o e-mail).
 *
 * @param {object} env  vars/secrets da Pages Function
 * @param {object} lead saída de `validar()`
 * @param {{ timeoutMs?: number }} [opcoes]
 * @returns {Promise<string>} id do lead criado, ou '' quando o Directus responde
 *   204 (sem corpo — acontece quando o papel usado não tem permissão de leitura)
 */
export async function criarLeadNoCms(env, lead, { timeoutMs = TIMEOUT_MS } = {}) {
	const base = (env.OCHUB_DIRECTUS_URL || '').replace(/\/+$/, '');
	// Configuração ausente não se resolve esperando: não é recuperável.
	if (!base) throw falha('OCHUB_DIRECTUS_URL não configurada', false);
	if (!env.OCHUB_SITE_UUID) throw falha('OCHUB_SITE_UUID não configurada', false);

	const payload = {
		nome: lead.nome,
		email: lead.email,
		telefone: lead.celular,
		origem: env.LEAD_ORIGEM || 'Site TIM Corporativo',
		site_origem_id: env.OCHUB_SITE_UUID,
		status: 'novo',
		observacoes: observacoes(lead)
	};
	// Só manda o que existe — evita sobrescrever com string vazia no CRM.
	const doc = documento(lead.cnpj);
	if (doc) payload.cpf_cnpj = doc;
	if (lead.mensagem) payload.mensagem = lead.mensagem;

	const headers = { 'Content-Type': 'application/json' };
	if (env.OCHUB_LEADS_TOKEN) headers.Authorization = `Bearer ${env.OCHUB_LEADS_TOKEN}`;

	let res;
	try {
		res = await fetch(`${base}/items/oc_crm_lead`, {
			method: 'POST',
			headers,
			body: JSON.stringify(payload),
			signal: AbortSignal.timeout(timeoutMs)
		});
	} catch (e) {
		// Timeout do handshake ou rede caída: é exatamente o que a retentativa cobre.
		throw falha(`ochub inalcançável em ${timeoutMs} ms: ${String(e).slice(0, 120)}`, true);
	}

	if (!res.ok) {
		const corpo = await res.text().catch(() => '');
		// 429 e 5xx melhoram sozinhos; 4xx é recusa determinística e insistir só
		// queima o orçamento de tempo sem mudar a resposta.
		throw falha(`ochub ${res.status}: ${corpo.slice(0, 200)}`, res.status === 429 || res.status >= 500);
	}

	// 204 = criado, sem corpo de retorno (papel sem permissão de leitura).
	if (res.status === 204) return '';
	const json = await res.json().catch(() => null);
	return String(json?.data?.id ?? '');
}
