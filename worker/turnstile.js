// Verificação server-side do Cloudflare Turnstile.
//
// Duas políticas deliberadas, ambas privilegiando não perder lead legítimo:
//
// 1. NÃO CONFIGURADO → pula a verificação. O widget ainda não existe nesta conta
//    (ver docs/leads/README.md §"pendências"). Enquanto TURNSTILE_SECRET_KEY não
//    estiver gravada, o formulário segue protegido só por honeypot + validação
//    server-side. Basta gravar a secret para a verificação passar a valer, sem
//    novo deploy de código.
// 2. SERVIÇO FORA DO AR → fail-open, marcando o lead como não verificado. Perder
//    um lead legítimo é pior que aceitar um spam raro; o e-mail interno avisa.
//    Token ausente ou explicitamente inválido continua sendo rejeitado.

const TIMEOUT_MS = 5000;
const SITEVERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * @returns {Promise<{ ok: boolean, verificado: boolean }>}
 *   `ok` = pode seguir · `verificado` = o veredito veio mesmo do serviço
 */
export async function verificarTurnstile(secret, token, ip) {
	if (!secret) return { ok: true, verificado: false }; // política 1
	if (!token) return { ok: false, verificado: true };

	const body = new FormData();
	body.append('secret', secret);
	body.append('response', token);
	if (ip) body.append('remoteip', ip);

	try {
		const res = await fetch(SITEVERIFY, { method: 'POST', body, signal: AbortSignal.timeout(TIMEOUT_MS) });
		// HTTP não-2xx (429/500/…) é serviço degradado, não veredito de bot → política 2.
		if (!res.ok) return { ok: true, verificado: false };
		const dados = await res.json();
		return { ok: dados.success === true, verificado: true };
	} catch {
		return { ok: true, verificado: false }; // política 2
	}
}
