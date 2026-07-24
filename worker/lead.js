// Orquestra o POST /api/lead.
//
// Regra central: o lead tem DOIS destinos independentes (CRM e e-mail) e eles
// não podem derrubar um ao outro. Vão em paralelo, cada um com seu timeout, e
// basta um dar certo para o lead estar salvo. Só quando os dois falham é que o
// visitante recebe erro — e aí o formulário cai no WhatsApp, que sempre funciona.

import { lerCorpo, validar } from './validate.js';
import { verificarTurnstile } from './turnstile.js';
import { criarLeadNoCms } from './cms.js';
import { enviarAvisoInterno } from './email.js';

const HEADERS = {
	'Content-Type': 'application/json; charset=utf-8',
	'X-Content-Type-Options': 'nosniff',
	'Cache-Control': 'no-store',
	'Referrer-Policy': 'strict-origin-when-cross-origin'
};

function json(dados, status = 200) {
	return new Response(JSON.stringify(dados), { status, headers: HEADERS });
}

/**
 * Só aceita POST vindo do próprio site. Sem isso o endpoint vira relay de spam
 * para terceiros (o Resend e o CRM são nossos, o custo do abuso seria nosso).
 * Requests sem `Origin` passam — é o caso de <form> sem JS em alguns browsers.
 */
function origemPermitida(request) {
	const origin = request.headers.get('Origin');
	if (!origin) return true;
	try {
		return new URL(origin).host === new URL(request.url).host;
	} catch {
		return false;
	}
}

export async function tratarLead(request, env) {
	if (request.method !== 'POST') return json({ ok: false, erro: 'metodo' }, 405);
	if (!origemPermitida(request)) return json({ ok: false, erro: 'origem' }, 403);

	let dados;
	try {
		dados = await lerCorpo(request);
	} catch {
		return json({ ok: false, erro: 'validacao' }, 400);
	}

	// 1) Anti-spam. Antes da validação: não gastamos trabalho com bot.
	const ts = await verificarTurnstile(
		env.TURNSTILE_SECRET_KEY,
		typeof dados['cf-turnstile-response'] === 'string' ? dados['cf-turnstile-response'] : null,
		request.headers.get('CF-Connecting-IP')
	);
	if (!ts.ok) return json({ ok: false, erro: 'captcha' }, 403);

	// 2) Validação. Honeypot devolve sucesso falso — não avisa o bot que caiu.
	const v = validar(dados);
	if (v.honeypot) return json({ ok: true, cms: false, email: false });
	if (!v.ok) return json({ ok: false, erro: 'validacao' }, 400);
	const lead = v.lead;

	// 3) Destinos em paralelo de verdade — um CRM lento não pode atrasar o
	//    e-mail, e vice-versa. Para não perder a correlação entre os dois sem
	//    sequenciá-los, geramos aqui um id do lead e mandamos o MESMO valor para
	//    os dois lados: o e-mail cita, o CRM guarda em `observacoes`.
	lead.id = crypto.randomUUID();
	const [rCms, rEmail] = await Promise.allSettled([
		criarLeadNoCms(env, lead),
		enviarAvisoInterno(env, lead, { verificado: ts.verificado })
	]);

	const cmsOk = rCms.status === 'fulfilled';
	const emailOk = rEmail.status === 'fulfilled';

	// Logs vão para `wrangler pages deployment tail` — é como se descobre uma
	// integração quebrada sem esperar o comercial reclamar de lead sumido.
	if (!cmsOk) console.error('[lead] falha no CRM:', String(rCms.reason).slice(0, 300));
	if (!emailOk) console.error('[lead] falha no e-mail:', String(rEmail.reason).slice(0, 300));

	if (!cmsOk && !emailOk) {
		// Último recurso: o lead não foi para lugar nenhum. Registra o conteúdo
		// no log para recuperação manual e devolve erro — o cliente cai no WhatsApp.
		console.error('[lead] PERDIDO — nenhum destino aceitou:', JSON.stringify(lead));
		return json({ ok: false, erro: 'indisponivel' }, 502);
	}

	return json({ ok: true, cms: cmsOk, email: emailOk });
}
