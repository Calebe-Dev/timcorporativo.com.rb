// Paginação da listagem do blog.
//
// Motivo: /blog renderizava os 189 artigos numa página só — 378 KB de HTML
// (65 KB comprimido) contra 145 KB da home. Medido em produção com throttling
// real (4G moderado, CPU 4×), isso dava ~2.000 ms de long task em todas as
// rodadas e derrubava o LCP para 2.328–2.980 ms, estourando o limite de 2.500
// em metade das medições. Era a única página do site reprovando em Core Web
// Vitals depois da correção da fonte.
//
// 20 por página deixa o HTML na ordem de grandeza da home e mantém a lista
// navegável sem rolagem infinita — que quebraria o rastreio, já que o site é
// 100% estático e o Google precisa de URL para cada fatia.
export const POR_PAGINA = 20;

/** Fatia a lista já ordenada e devolve os metadados que as duas rotas usam. */
export function fatiar(items, pagina) {
	const totalPaginas = Math.max(1, Math.ceil(items.length / POR_PAGINA));
	const inicio = (pagina - 1) * POR_PAGINA;
	return {
		items: items.slice(inicio, inicio + POR_PAGINA),
		pagina,
		totalPaginas,
		totalArtigos: items.length
	};
}

// A página 1 continua em /blog, não em /blog/pagina/1: é a URL que o Google já
// conhece e que está no sitemap. Duas URLs para a mesma lista seria conteúdo
// duplicado de graça.
export const hrefPagina = (n) => (n === 1 ? '/blog' : `/blog/pagina/${n}`);

/**
 * Janela de números a exibir: primeira, última, a atual e as vizinhas.
 * `null` marca onde entra a reticência. Com 10 páginas cabe tudo; a janela
 * existe para o dia em que o blog dobrar de tamanho.
 */
export function janela(pagina, totalPaginas) {
	const mostrar = new Set([1, totalPaginas, pagina - 1, pagina, pagina + 1]);
	const numeros = [...mostrar].filter((n) => n >= 1 && n <= totalPaginas).sort((a, b) => a - b);

	const saida = [];
	let anterior = 0;
	for (const n of numeros) {
		if (anterior && n - anterior > 1) saida.push(null);
		saida.push(n);
		anterior = n;
	}
	return saida;
}
