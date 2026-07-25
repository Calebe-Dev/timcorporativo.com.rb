import { listarArtigos } from '$lib/server/artigos.js';

// Mapa do site em ANEL nas páginas de artigo. Antes, todas as páginas do site
// linkavam os mesmos 12 artigos mais recentes — a cauda longa (130+ artigos)
// não recebia nenhum link do mapa. Aqui cada artigo linka os 12 SEGUINTES na
// lista ordenada (com volta ao início), então todo artigo recebe link de
// exatamente 12 outros, sem crescer o HTML de página nenhuma e sem tocar na
// estrutura de URLs indexada.
export async function load({ params }) {
	const artigos = await listarArtigos();
	const i = artigos.findIndex((a) => a.slug === params.slug);

	const janela = [];
	const inicio = i === -1 ? 0 : i + 1;
	for (let k = 0; k < artigos.length && janela.length < 12; k++) {
		const a = artigos[(inicio + k) % artigos.length];
		if (a.slug !== params.slug) janela.push({ slug: a.slug, title: a.title });
	}

	// Mesmas chaves do +layout.server.js da raiz: nas rotas de artigo, estes
	// valores prevalecem (merge de dados do SvelteKit — o filho vence).
	return {
		artigosRecentes: janela,
		totalArtigos: artigos.length,
		tituloMapaArtigos: 'Mais artigos do blog'
	};
}
