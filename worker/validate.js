// Validação server-side do formulário de contato. O cliente também valida, mas
// o servidor nunca confia no cliente: qualquer um pode fazer POST direto em
// /api/lead. Também normaliza os campos antes de irem para o CRM e o e-mail.

/** Campos sem os quais o lead não tem valor comercial (não dá pra retornar contato). */
const OBRIGATORIOS = ['nome', 'email', 'celular'];

/** Limites por campo — corta payload abusivo antes de gravar/enviar. */
const MAX = {
	nome: 120,
	email: 254,
	celular: 40,
	cnpj: 25,
	linhas: 60,
	operadora: 60,
	mensagem: 4000,
	pagina: 300,
	utm: 200
};

/**
 * Formato básico de e-mail sem regex (evita backtracking em input adversarial):
 * exatamente um "@", parte local não-vazia, domínio com um "." que não seja o
 * primeiro nem o último caractere.
 */
function emailValido(email) {
	if (!email || email.length > MAX.email || /\s/.test(email)) return false;
	const at = email.indexOf('@');
	if (at < 1 || email.indexOf('@', at + 1) !== -1) return false;
	const dominio = email.slice(at + 1);
	const ponto = dominio.indexOf('.');
	return ponto > 0 && ponto < dominio.length - 1;
}

/** Sobra só dígito — o CRM recebe telefone limpo, mais fácil de deduplicar. */
function soDigitos(s) {
	return s.replace(/\D/g, '');
}

/**
 * `pagina` vem do cliente e vai parar no e-mail interno. Aceita apenas um path
 * relativo do próprio site — não é usado em redirect, mas evita injetar URL de
 * terceiro num e-mail que a equipe comercial vai clicar.
 */
function paginaSegura(raw) {
	if (typeof raw !== 'string' || !raw.startsWith('/')) return '/';
	const limpa = raw
		.split(/[?#]/)[0]
		.replace(/[^\w\-/]/g, '')
		.replace(/^\/+/, '');
	return limpa ? '/' + limpa.slice(0, MAX.pagina) : '/';
}

/**
 * Lê o corpo do request aceitando JSON (caminho normal, via fetch) ou
 * multipart/urlencoded (fallback de <form> sem JS). Devolve um objeto plano.
 */
export async function lerCorpo(request) {
	const tipo = request.headers.get('content-type') || '';
	if (tipo.includes('application/json')) {
		const dados = await request.json();
		return dados && typeof dados === 'object' ? dados : {};
	}
	const form = await request.formData();
	return Object.fromEntries([...form.entries()].map(([k, v]) => [k, typeof v === 'string' ? v : '']));
}

/**
 * Valida e normaliza. Retorna `{ ok, lead }` ou `{ ok: false, erro }`.
 * `honeypot: true` sinaliza bot — o chamador responde sucesso falso.
 */
export function validar(dados) {
	// Honeypot: campo invisível no formulário. Humano nunca preenche.
	const armadilha = dados.website;
	if (typeof armadilha === 'string' && armadilha.trim() !== '') {
		return { ok: false, honeypot: true };
	}

	const get = (k, limite) => {
		const v = dados[k];
		return typeof v === 'string' ? v.trim().slice(0, limite) : '';
	};

	for (const campo of OBRIGATORIOS) {
		if (!get(campo, MAX[campo])) return { ok: false, erro: 'validacao' };
	}

	const email = get('email', MAX.email);
	if (!emailValido(email)) return { ok: false, erro: 'validacao' };

	const celular = soDigitos(get('celular', MAX.celular));
	// DDD (2) + número (8 ou 9). Menos que isso não é telefone brasileiro válido.
	if (celular.length < 10 || celular.length > 13) return { ok: false, erro: 'validacao' };

	return {
		ok: true,
		lead: {
			nome: get('nome', MAX.nome),
			email,
			celular,
			cnpj: soDigitos(get('cnpj', MAX.cnpj)),
			linhas: get('linhas', MAX.linhas),
			operadora: get('operadora', MAX.operadora),
			mensagem: get('mensagem', MAX.mensagem),
			pagina: paginaSegura(dados.pagina),
			recebidoEm: new Date().toISOString(),
			// Atribuição de campanha — vazio quando é acesso direto/orgânico.
			utm_source: get('utm_source', MAX.utm),
			utm_medium: get('utm_medium', MAX.utm),
			utm_campaign: get('utm_campaign', MAX.utm),
			utm_term: get('utm_term', MAX.utm),
			utm_content: get('utm_content', MAX.utm)
		}
	};
}

/** Resume a origem do tráfego para o e-mail interno e para o campo do CRM. */
export function origemTrafego(lead) {
	if (!lead.utm_source) return 'Acesso direto ou busca orgânica';
	const canal = [lead.utm_source, lead.utm_medium].filter(Boolean).join(' / ');
	return canal + (lead.utm_campaign ? ` — campanha "${lead.utm_campaign}"` : '');
}
