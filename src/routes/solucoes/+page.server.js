import { solucoesLp, CLUSTERS } from '$lib/solucoes/index.js';

export const prerender = true;
export const trailingSlash = 'always';

export function load() {
	// Agrupa na ordem declarada em CLUSTERS — a ordem do objeto é a ordem de
	// negócio (conectividade primeiro, local por último), não alfabética.
	const grupos = Object.entries(CLUSTERS)
		.map(([chave, meta]) => ({
			chave,
			...meta,
			paginas: solucoesLp
				.filter((lp) => lp.cluster === chave)
				.map((lp) => ({
					slug: lp.slug,
					cardTitulo: lp.cardTitulo,
					cardTexto: lp.cardTexto,
					h1: lp.h1
				}))
		}))
		.filter((g) => g.paginas.length);

	return { grupos, total: solucoesLp.length };
}
