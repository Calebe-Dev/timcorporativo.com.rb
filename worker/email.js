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

/**
 * O template só tem um campo livre (`message`), então tudo que não cabe em
 * name/email/phone/company entra aqui — senão o comercial recebe um e-mail sem
 * nº de linhas, operadora nem origem da campanha, que é o que qualifica o lead.
 */
function montarMensagem(lead, verificado) {
	const blocos = [];

	if (!verificado) {
		blocos.push(
			'[ATENCAO] O anti-spam estava indisponivel no momento do envio — ' +
				'este lead NAO foi verificado. Confira antes de tratar.'
		);
	}

	if (lead.mensagem) blocos.push(lead.mensagem);

	const detalhes = [
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

	if (detalhes.length) blocos.push(detalhes.join('\n'));

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
 * Envia o aviso interno. Lança em caso de falha — quem chama decide (o lead já
 * foi/será gravado no CRM independentemente disso).
 *
 * @param {object} env vars/secrets da Pages Function
 * @param {object} lead saída de `validar()`
 * @param {{ verificado: boolean }} contexto
 */
export async function enviarAvisoInterno(env, lead, { verificado }) {
	if (!env.MAIL_API_KEY) throw new Error('MAIL_API_KEY não configurada');

	const url = (env.MAIL_SERVICE_URL || URL_PADRAO).trim();

	const assunto = `${verificado ? '' : '[verificar] '}Novo lead TIM Corporativo: ${lead.nome}`.slice(
		0,
		MAX_ASSUNTO
	);

	const corpo = {
		to: DESTINO_IGNORADO,
		subject: assunto,
		template: TEMPLATE,
		data: {
			name: lead.nome,
			email: lead.email,
			phone: telefoneLegivel(lead.celular),
			// Não coletamos razão social; o CNPJ é o identificador que temos.
			company: cnpjLegivel(lead.cnpj),
			message: montarMensagem(lead, verificado),
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
