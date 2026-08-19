// Orquestra o POST /api/lead.
//
// Regra central: o lead tem DOIS destinos independentes (CRM e e-mail) e eles
// não podem derrubar um ao outro. Vão em paralelo, cada um com seu timeout, e
// basta um dar certo para o lead estar salvo. Só quando os dois falham é que o
// visitante recebe erro — e aí o formulário cai no WhatsApp, que sempre funciona.
//
// Três mecanismos aqui existem por causa de uma investigação de 19/08/2026:
// leads chegavam por e-mail e não apareciam no CRM, e ninguém ficava sabendo.
//
//  1. `waitUntil`. O formulário abre o WhatsApp ANTES de concluir o POST, então
//     no celular a aba congela e a conexão do visitante morre no meio da
//     requisição. Sem `waitUntil`, o runtime cancela o request e leva as
//     subrequisições pendentes com ele. O e-mail sobrevivia a isso — o Mail
//     Service já disparou o SMTP quando paramos de esperar a resposta — mas a
//     gravação no CRM não, porque ela precisa CHEGAR. Era essa assimetria que
//     fazia parecer que só o CRM falhava; e de fato só ele falhava.
//  2. Retentativas em segundo plano, quando a falha é de transporte. As
//     medições que justificam os prazos estão em worker/cms.js.
//  3. Aviso de falha por e-mail. Antes, `cms:false` só existia num log sem
//     retenção: ninguém sabia que o lead não entrou. Ver worker/email.js.

import { lerCorpo, validar } from './validate.js';
import { verificarTurnstile } from './turnstile.js';
import { criarLeadNoCms, TIMEOUT_RETENTATIVA_MS } from './cms.js';
import { enviarAvisoInterno, avisarFalhaNoCms } from './email.js';

const HEADERS = {
	'Content-Type': 'application/json; charset=utf-8',
	'X-Content-Type-Options': 'nosniff',
	'Cache-Control': 'no-store',
	'Referrer-Policy': 'strict-origin-when-cross-origin'
};

// Duas retentativas bastam: a cauda de latência do OC Hub é de segundos, não de
// minutos (ver worker/cms.js). Mais que isso só estica a vida da Function.
const ESPERAS_MS = [1000, 3000];

function json(dados, status = 200) {
	return new Response(JSON.stringify(dados), { status, headers: HEADERS });
}

/**
 * Só aceita POST vindo do próprio site. Sem isso o endpoint vira relay de spam
 * para terceiros (o Mail Service e o CRM são nossos, o custo do abuso seria
 * nosso). Requests sem `Origin` passam — é o caso de <form> sem JS em alguns
 * browsers.
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

/**
 * Trabalho que precisa terminar mesmo depois de a resposta ir embora — e ela vai
 * embora antes, porque o visitante já está no WhatsApp. Sem `ctx` (dev fora do
 * Pages) resta o disparo solto: pode ser cancelado, mas não derruba nada.
 */
function segundoPlano(ctx, promessa) {
	const seguro = Promise.resolve(promessa).catch((e) =>
		console.error('[lead] trabalho em segundo plano falhou:', String(e).slice(0, 300))
	);
	if (ctx?.waitUntil) ctx.waitUntil(seguro);
}

/**
 * Insiste no CRM depois de a 1ª tentativa falhar. Só faz sentido em falha
 * recuperável — 4xx é recusa determinística e repetir daria a mesma resposta.
 *
 * @returns {Promise<boolean>} gravou em alguma das tentativas
 */
async function insistirNoCms(env, lead, primeiroErro) {
	let erro = primeiroErro;
	for (const espera of ESPERAS_MS) {
		if (!erro?.recuperavel) return false;
		await new Promise((r) => setTimeout(r, espera));
		try {
			await criarLeadNoCms(env, lead, { timeoutMs: TIMEOUT_RETENTATIVA_MS });
			console.log(`[lead] CRM gravou na retentativa — id ${lead.id}`);
			return true;
		} catch (e) {
			erro = e;
			console.error('[lead] retentativa no CRM falhou:', String(e).slice(0, 300));
		}
	}
	return false;
}

/**
 * @param {Request} request
 * @param {object} env vars/secrets da Pages Function
 * @param {{ waitUntil?: (p: Promise<unknown>) => void }} [ctx] contexto da Pages
 *   Function. Sem ele o lead ainda vai, mas perde a proteção contra cancelamento.
 */
export async function tratarLead(request, env, ctx) {
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

	// 2) Validação server-side.
	const v = validar(dados);
	if (!v.ok) return json({ ok: false, erro: 'validacao' }, 400);
	const lead = v.lead;

	// 3) Honeypot. Descartar em silêncio custava lead legítimo: gerenciador de
	//    senha e autofill do browser também preenchem campo escondido, e o
	//    visitante ainda lia "Recebemos seus dados". Agora, quando o Turnstile
	//    confirma que veio gente, o lead vai por e-mail marcado `[suspeito]` e
	//    fica FORA do CRM — bot não suja a base, humano não se perde. Sem
	//    veredito do Turnstile, segue o descarte silencioso de antes (é o caso
	//    em que só o honeypot separa gente de robô).
	const suspeito = v.suspeito;
	if (suspeito && !ts.verificado) return json({ ok: true, cms: false, email: false });

	// 4) Destinos em paralelo de verdade — um CRM lento não pode atrasar o
	//    e-mail, e vice-versa. Para não perder a correlação entre os dois sem
	//    sequenciá-los, geramos aqui um id do lead e mandamos o MESMO valor para
	//    os dois lados: o e-mail cita, o CRM guarda em `observacoes`.
	lead.id = crypto.randomUUID();

	const trabalho = Promise.allSettled([
		suspeito ? Promise.resolve('CRM pulado: honeypot') : criarLeadNoCms(env, lead),
		enviarAvisoInterno(env, lead, { verificado: ts.verificado, suspeito })
	]);
	// A resposta pode ir embora antes disto terminar — e vai, quando o visitante
	// já foi para o WhatsApp. É este registro que mantém as duas gravações vivas.
	segundoPlano(ctx, trabalho);

	const [rCms, rEmail] = await trabalho;
	const cmsOk = !suspeito && rCms.status === 'fulfilled';
	const emailOk = rEmail.status === 'fulfilled';

	// Logs vão para `wrangler pages deployment tail` — é como se descobre uma
	// integração quebrada sem esperar o comercial reclamar de lead sumido.
	if (!suspeito && !cmsOk) console.error('[lead] falha no CRM:', String(rCms.reason).slice(0, 300));
	if (!emailOk) console.error('[lead] falha no e-mail:', String(rEmail.reason).slice(0, 300));

	// 5) CRM falhou: insiste em segundo plano e, se ainda assim não gravar, avisa
	//    por e-mail com os dados para cadastro manual. É o que tira a falha do
	//    silêncio — sem isto, ninguém descobre que este lead não existe no CRM.
	if (!suspeito && !cmsOk) {
		segundoPlano(
			ctx,
			(async () => {
				if (await insistirNoCms(env, lead, rCms.reason)) return;
				console.error(`[lead] CRM não gravou este lead — id ${lead.id}`);
				// Sem e-mail funcionando, o alerta também não sairia: o lead já
				// está no log de PERDIDO abaixo e não há a quem avisar.
				if (emailOk) await avisarFalhaNoCms(env, lead, rCms.reason);
			})()
		);
	}

	if (!cmsOk && !emailOk) {
		// Último recurso: o lead não foi para lugar nenhum. Registra o conteúdo
		// no log para recuperação manual e devolve erro — o cliente cai no WhatsApp.
		console.error('[lead] PERDIDO — nenhum destino aceitou:', JSON.stringify(lead));
		return json({ ok: false, erro: 'indisponivel' }, 502);
	}

	// `cms` é o resultado da PRIMEIRA tentativa: quando vem false, as retentativas
	// ainda podem estar rodando em segundo plano. Quem consome isto é diagnóstico,
	// não o visitante (o formulário só olha o status HTTP).
	return json({ ok: true, cms: cmsOk, email: emailOk });
}
