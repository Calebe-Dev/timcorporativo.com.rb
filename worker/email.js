// Aviso interno por e-mail via API do Resend (HTTP, sem SMTP) — mesmo padrão já
// usado no projeto esquadriasmartins.com.br. Um e-mail por lead, para a equipe
// comercial; `Reply-To` é o e-mail do lead, então responder no cliente de e-mail
// já fala com a empresa interessada.
//
// Trocar de provedor = mexer só neste arquivo.

import { origemTrafego } from './validate.js';

const RESEND_URL = 'https://api.resend.com/emails';
const TIMEOUT_MS = 10000;

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

function esc(s) {
	return String(s).replace(/[&<>"]/g, (c) => ESCAPES[c]);
}

/** Formata o celular só para exibição (o CRM guarda os dígitos crus). */
function telefoneLegivel(d) {
	const m = d.match(/^(\d{2})(\d{4,5})(\d{4})$/);
	return m ? `(${m[1]}) ${m[2]}-${m[3]}` : d;
}

const CAMPOS = [
	['nome', 'Nome'],
	['email', 'E-mail'],
	['celular', 'Celular / WhatsApp'],
	['cnpj', 'CNPJ'],
	['linhas', 'Nº de linhas'],
	['operadora', 'Operadora atual'],
	['mensagem', 'Mensagem']
];

/** Só as linhas preenchidas — e-mail curto é e-mail lido. */
function linhasPreenchidas(lead) {
	return CAMPOS.map(([k, label]) => [label, k === 'celular' ? telefoneLegivel(lead[k]) : lead[k]]).filter(
		([, v]) => v
	);
}

function montarHtml(lead, aviso, rodape) {
	const linhas = linhasPreenchidas(lead)
		.map(
			([label, valor]) =>
				`<tr><td style="padding:6px 12px;font-weight:600;color:#333;white-space:nowrap;vertical-align:top">${esc(
					label
				)}</td><td style="padding:6px 12px;color:#111">${esc(valor).replaceAll('\n', '<br>')}</td></tr>`
		)
		.join('');

	const zap = `https://wa.me/55${esc(lead.celular)}`;

	return `<div style="font-family:Arial,sans-serif;max-width:640px">
<div style="padding:20px 0 14px;border-bottom:3px solid #003B7E;margin-bottom:20px">
	<span style="font-size:20px;font-weight:700;color:#003B7E">TIM Corporativo</span>
</div>
<h2 style="color:#111;margin:0 0 12px">Novo lead pelo site</h2>
${aviso}
<table style="border-collapse:collapse;width:100%">${linhas}</table>
<p style="margin:20px 0 0">
	<a href="${zap}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:10px 18px;border-radius:999px;font-weight:600">Chamar no WhatsApp</a>
	<a href="mailto:${esc(lead.email)}" style="display:inline-block;margin-left:8px;color:#003B7E">Responder por e-mail</a>
</p>
<p style="margin-top:20px;color:#888;font-size:12px">${esc(rodape)}</p>
</div>`;
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
	if (!env.RESEND_API_KEY) throw new Error('RESEND_API_KEY não configurada');
	if (!env.LEAD_FROM || !env.LEAD_TO) throw new Error('LEAD_FROM/LEAD_TO não configurados');

	// `verificado: false` = o anti-spam esteve indisponível (fail-open) e este
	// lead não passou por verificação. A equipe precisa saber antes de tratar.
	const aviso = verificado
		? ''
		: '<p style="margin:0 0 12px;padding:8px 12px;background:#fff4e5;border:1px solid #d98c00;color:#7a4a00;font-size:13px">⚠️ O anti-spam estava indisponível no momento — este lead NÃO foi verificado. Confira antes de tratar.</p>';

	const rodape = [
		`Origem do tráfego: ${origemTrafego(lead)}`,
		`Página: ${lead.pagina}`,
		`Recebido em: ${lead.recebidoEm}`,
		// Mesmo id gravado em `observacoes` no CRM — use para achar o registro lá.
		`ID do lead: ${lead.id}`
	].join(' · ');

	const texto =
		(verificado ? '' : '[NAO VERIFICADO - anti-spam indisponivel]\n\n') +
		linhasPreenchidas(lead)
			.map(([label, valor]) => `${label}: ${valor}`)
			.join('\n') +
		`\n\n${rodape}`;

	const res = await fetch(RESEND_URL, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${env.RESEND_API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			from: env.LEAD_FROM,
			to: env.LEAD_TO.split(',')
				.map((s) => s.trim())
				.filter(Boolean),
			reply_to: lead.email,
			subject: `${verificado ? '' : '[verificar] '}Novo lead TIM Corporativo: ${lead.nome}`,
			html: montarHtml(lead, aviso, rodape),
			text: texto
		}),
		signal: AbortSignal.timeout(TIMEOUT_MS)
	});

	if (!res.ok) {
		const corpo = await res.text().catch(() => '');
		throw new Error(`resend ${res.status}: ${corpo.slice(0, 200)}`);
	}
}
