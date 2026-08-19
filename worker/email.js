// Aviso interno por e-mail via Grupo OC Mail Service (mail-api.grupooc.com.br).
// Contrato: https://mail-api.grupooc.com.br/docs/integracao-email.md
//
// Trocar de provedor = mexer só neste arquivo. `enviarAvisoInterno` mantém a
// mesma assinatura de antes, então `lead.js` não muda.
//
// Três particularidades do serviço que moldam este arquivo:
//
//  1. O corpo do e-mail vem de um template `.hbs` que vive na imagem Docker do
//     serviço. Não dá para mandar HTML próprio. Usamos o template genérico
//     `lead-notification`, que expõe apenas name/email/phone/company/message/
//     source/timestamp — por isso todo o resto do lead é empacotado em `message`.
//  2. O destinatário é FIXO no servidor (marketing.grupooc@gmail.com e
//     contato@grupooc.com.br). O campo `to` é obrigatório na validação mas
//     descartado. `cc` e `bcc`, esses sim, são respeitados — é por `cc` que
//     LEAD_TO continua recebendo.
//  3. A validação recusa qualquer chave fora de to/subject/template/data/cc/bcc
//     com 400. Não acrescente campos ao corpo sem conferir a doc.

import { origemTrafego } from './validate.js';

const TEMPLATE = 'lead-notification';

// `to` é obrigatório na validação e descartado pelo servidor. Um endereço
// sintaticamente válido e obviamente inerte deixa claro que não é destino real.
const DESTINO_IGNORADO = 'lead@nao-usado.com';

// A doc mede 1,5 s a 4 s por envio (SMTP síncrono) e recomenda ao menos 15 s.
const TIMEOUT_MS = 15000;

const URL_PADRAO = 'https://mail-api.grupooc.com.br/api/email/send';

const MAX_ASSUNTO = 200;

/** Formata o celular só para exibição (o CRM guarda os dígitos crus). */
function telefoneLegivel(d) {
	const m = d.match(/^(\d{2})(\d{4,5})(\d{4})$/);
	return m ? `(${m[1]}) ${m[2]}-${m[3]}` : d;
}

/** CNPJ em 00.000.000/0000-00 quando vier completo; senão devolve como está. */
function cnpjLegivel(d) {
	if (!d) return '';
	const m = d.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
	return m ? `${m[1]}.${m[2]}.${m[3]}/${m[4]}-${m[5]}` : d;
}

/** Linhas "Rótulo: valor" do lead, sem as vazias. Usado nos dois e-mails. */
function detalhes(lead) {
	return [
		['CNPJ', cnpjLegivel(lead.cnpj)],
		['No de linhas', lead.linhas],
		['Operadora atual', lead.operadora],
		['Origem do trafego', origemTrafego(lead)],
		['Pagina', lead.pagina],
		// Mesmo id gravado em `observacoes` no CRM — é o que liga os dois registros.
		['ID do lead', lead.id]
	]
		.filter(([, v]) => v)
		.map(([k, v]) => `${k}: ${v}`);
}

/**
 * O template só tem um campo livre (`message`), então tudo que não cabe em
 * name/email/phone/company entra aqui — senão o comercial recebe um e-mail sem
 * nº de linhas, operadora nem origem da campanha, que é o que qualifica o lead.
 */
function montarMensagem(lead, verificado, suspeito) {
	const blocos = [];

	if (!verificado) {
		blocos.push(
			'[ATENCAO] O anti-spam estava indisponivel no momento do envio — ' +
				'este lead NAO foi verificado. Confira antes de tratar.'
		);
	}

	if (suspeito) {
		blocos.push(
			'[SUSPEITO] O campo-armadilha do formulario veio preenchido. Costuma ser ' +
				'bot, mas gerenciador de senha e autofill do browser tambem preenchem ' +
				'campo escondido — por isso o lead chegou a voce em vez de ser descartado. ' +
				'Ele NAO foi gravado no CRM: se for gente, cadastre a mao.'
		);
	}

	if (lead.mensagem) blocos.push(lead.mensagem);

	const linhas = detalhes(lead);
	if (linhas.length) blocos.push(linhas.join('\n'));

	// O serviço não suporta Reply-To, então o e-mail do lead precisa estar
	// visível no corpo para responder sem ter que procurar.
	blocos.push(`Responder para: ${lead.email}`);

	return blocos.join('\n\n');
}

/** Lista de e-mails separada por vírgula -> array limpo. */
function listaEmails(valor) {
	return String(valor || '')
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);
}

/** Mensagem de erro útil, seguindo a tabela de diagnóstico da doc (§8). */
function explicar(status, corpo) {
	const dicas = {
		400: 'payload invalido (campo faltando ou chave extra)',
		401: 'X-API-Key nao chegou — secret ausente neste ambiente',
		403: 'chave invalida ou revogada',
		429: 'rate limit (100 req/15 min, compartilhado entre todos os sites)',
		500: 'template inexistente ou falha no envio'
	};
	const dica = dicas[status] ? ` — ${dicas[status]}` : '';
	return `mail-service ${status}${dica}: ${corpo.slice(0, 200)}`;
}

/**
 * POST no Mail Service. Os dois e-mails deste arquivo passam por aqui, então
 * chave, timeout, `cc` e tradução de erro moram num lugar só.
 */
async function enviar(env, assunto, lead, mensagem) {
	if (!env.MAIL_API_KEY) throw new Error('MAIL_API_KEY não configurada');

	const url = (env.MAIL_SERVICE_URL || URL_PADRAO).trim();

	const corpo = {
		to: DESTINO_IGNORADO,
		subject: assunto.slice(0, MAX_ASSUNTO),
		template: TEMPLATE,
		data: {
			name: lead.nome,
			email: lead.email,
			phone: telefoneLegivel(lead.celular),
			// Não coletamos razão social; o CNPJ é o identificador que temos.
			company: cnpjLegivel(lead.cnpj),
			message: mensagem,
			source: env.LEAD_ORIGEM || 'timcorporativo.com.br',
			timestamp: lead.recebidoEm
		}
	};

	// O destinatário fixo do serviço não cobre quem estiver em LEAD_TO; `cc` sim.
	const cc = listaEmails(env.LEAD_TO);
	if (cc.length) corpo.cc = cc;

	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-API-Key': env.MAIL_API_KEY.trim()
		},
		body: JSON.stringify(corpo),
		signal: AbortSignal.timeout(TIMEOUT_MS)
	});

	if (!res.ok) {
		const texto = await res.text().catch(() => '');
		throw new Error(explicar(res.status, texto));
	}
}

/**
 * Envia o aviso interno. Lança em caso de falha — quem chama decide (o lead já
 * foi/será gravado no CRM independentemente disso).
 *
 * @param {object} env vars/secrets da Pages Function
 * @param {object} lead saída de `validar()`
 * @param {{ verificado: boolean, suspeito?: boolean }} contexto
 */
export async function enviarAvisoInterno(env, lead, { verificado, suspeito = false }) {
	// Marcas no assunto para o comercial triar sem abrir: quem não passou pelo
	// anti-spam e quem caiu no honeypot chegam identificados.
	const marcas = [!verificado && '[verificar]', suspeito && '[suspeito]'].filter(Boolean).join(' ');
	const assunto = `${marcas ? marcas + ' ' : ''}Novo lead TIM Corporativo: ${lead.nome}`;

	return enviar(env, assunto, lead, montarMensagem(lead, verificado, suspeito));
}

/**
 * Segundo e-mail, disparado só quando o CRM recusou o lead e as retentativas
 * também falharam (ver worker/lead.js).
 *
 * Existe porque a falha do CRM era invisível: o visitante lia "Recebemos seus
 * dados", o comercial recebia o aviso normal, e o lead simplesmente não estava
 * no CRM. A única pista ficava num `console.error` que só aparece em
 * `wrangler pages deployment tail` ao vivo, sem retenção. Este e-mail troca isso
 * por um aviso que chega a quem pode agir, com os dados para cadastrar à mão.
 *
 * @param {object} env
 * @param {object} lead
 * @param {unknown} motivo erro da última tentativa
 */
export async function avisarFalhaNoCms(env, lead, motivo) {
	const blocos = [
		'[CRM FALHOU] O aviso de lead anterior a este NAO foi gravado no CRM: o OC ' +
			'Hub recusou ou nao respondeu, inclusive nas retentativas. Cadastre a mao ' +
			'com os dados abaixo — este e o unico registro que sobrou.',
		`Motivo tecnico: ${String(motivo).slice(0, 300)}`,
		detalhes(lead).join('\n'),
		lead.mensagem && `Mensagem: ${lead.mensagem}`,
		`Responder para: ${lead.email}`
	].filter(Boolean);

	return enviar(env, `[CRM FALHOU] Novo lead TIM Corporativo: ${lead.nome}`, lead, blocos.join('\n\n'));
}
