import { error } from '@sveltejs/kit';
// GRUPO-OC-OCULTO 2026-09-09 — original: import { listarArtigos } from '$lib/server/artigos.js';
import { listarArtigos, SLUGS_OCULTOS_GRUPO_OC } from '$lib/server/artigos.js';
import { solucoesLp, lpPorSlug, cartao } from '$lib/solucoes/index.js';

export const prerender = true;
// Mesma forma canônica das demais URLs do site: a Pages faz 308 de /x para /x/,
// e o sitemap publica a versão com barra.
export const trailingSlash = 'always';

/** Sem isto o crawler do SvelteKit não descobre as LPs — nenhuma tem link fixo. */
export function entries() {
	return solucoesLp.map((lp) => ({ slug: lp.slug }));
}

export async function load({ params }) {
	const lp = lpPorSlug(params.slug);
	if (!lp) throw error(404, 'Solução não encontrada');

	const artigos = await listarArtigos();
	const porSlug = new Map(artigos.map((a) => [a.slug, a]));

	// Link interno morto é erro de build, não aviso. Uma LP que aponta para um
	// artigo inexistente publica 404 na malha inteira, e o custo de descobrir isso
	// em produção é alto demais para um checar-depois.
	// GRUPO-OC-OCULTO 2026-09-09 — original: const artigosRelacionados = (lp.artigos ?? []).map((slug) => {
	// Artigo oculto (TIM Corporativo → 301 para a home) não é link morto de verdade,
	// mas também não pode ser linkado: sai da lista com aviso em vez de derrubar
	// o build. As fichas em $lib/solucoes/paginas/ ficam como estão.
	const artigosRelacionados = (lp.artigos ?? [])
		.filter((slug) => {
			if (!SLUGS_OCULTOS_GRUPO_OC.includes(slug)) return true;
			console.warn(`[solucoes] LP "${lp.slug}": artigo "${slug}" oculto (TIM Corporativo) — fora dos relacionados`);
			return false;
		})
		.map((slug) => {
		const a = porSlug.get(slug);
		if (!a) {
			throw new Error(
				`Landing page "${lp.slug}": artigo relacionado "${slug}" não existe no acervo.`
			);
		}
		return { slug: a.slug, title: a.title };
	});

	const lpsRelacionadas = (lp.relacionadas ?? []).map((slug) => {
		const c = cartao(slug);
		if (!c) {
			throw new Error(`Landing page "${lp.slug}": solução relacionada "${slug}" não existe.`);
		}
		return c;
	});

	return { lp, lpsRelacionadas, artigosRelacionados };
}
