// Gravação do lead no OC Hub (Directus) — collection `oc_crm_lead`.
// É a fonte durável: o e-mail é aviso, o CRM é o registro. Por isso o lead vai
// para cá mesmo que o envio de e-mail falhe (e vice-versa) — ver worker/lead.js.
//
// A política do Directus permite CREATE público nessa collection; o token é
// opcional e só é enviado se estiver configurado (deixa o caminho pronto caso a
// política seja fechada depois, sem mexer no código).

import { origemTrafego } from './validate.js';

const TIMEOUT_MS = 10000;

/** Campos do formulário que não têm coluna própria no CRM — vão em `observacoes`. */
function observacoes(lead) {
	return [
		lead.linhas && `Nº de linhas: ${lead.linhas}`,
		lead.operadora && `Operadora atual: ${lead.operadora}`,
		`Página: ${lead.pagina}`,
		`Origem do tráfego: ${origemTrafego(lead)}`,
		lead.utm_term && `utm_term: ${lead.utm_term}`,
		lead.utm_content && `utm_content: ${lead.utm_content}`,
		`Recebido em: ${lead.recebidoEm}`,
		// Mesmo id que vai no e-mail interno — é o que liga os dois registros.
		lead.id && `ID do lead: ${lead.id}`
	]
		.filter(Boolean)
		.join('\n');
}

/**
 * Cria o lead no CRM. Lança em qualquer falha — quem chama decide o que fazer
 * (não derruba o request nem impede o e-mail).
 *
 * @param {object} env  vars/secrets da Pages Function
 * @param {object} lead saída de `validar()`
 * @returns {Promise<string>} id do lead criado, ou '' quando o Directus responde
 *   204 (sem corpo — acontece quando o papel usado não tem permissão de leitura)
 */
export async function criarLeadNoCms(env, lead) {
	const base = (env.OCHUB_DIRECTUS_URL || '').replace(/\/+$/, '');
	if (!base) throw new Error('OCHUB_DIRECTUS_URL não configurada');
	if (!env.OCHUB_SITE_UUID) throw new Error('OCHUB_SITE_UUID não configurada');

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
	if (lead.cnpj) payload.cpf_cnpj = lead.cnpj;
	if (lead.mensagem) payload.mensagem = lead.mensagem;

	const headers = { 'Content-Type': 'application/json' };
	if (env.OCHUB_LEADS_TOKEN) headers.Authorization = `Bearer ${env.OCHUB_LEADS_TOKEN}`;

	const res = await fetch(`${base}/items/oc_crm_lead`, {
		method: 'POST',
		headers,
		body: JSON.stringify(payload),
		signal: AbortSignal.timeout(TIMEOUT_MS)
	});

	if (!res.ok) {
		const corpo = await res.text().catch(() => '');
		throw new Error(`ochub ${res.status}: ${corpo.slice(0, 200)}`);
	}

	// 204 = criado, sem corpo de retorno (papel sem permissão de leitura).
	if (res.status === 204) return '';
	const json = await res.json().catch(() => null);
	return String(json?.data?.id ?? '');
}
