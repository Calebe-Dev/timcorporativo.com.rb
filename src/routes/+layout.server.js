import { listarArtigos } from '$lib/server/artigos.js';

// Roda no build para cada página pré-renderizada, mas `listarArtigos` é
// memoizada — o CMS é consultado uma vez só. Os dados descem para todos os
// layouts e páginas filhas, que é como o mapa do site chega a todas as rotas.
export async function load() {
	const artigos = await listarArtigos();
	// O mapa do site mostra os mais recentes; a lista completa vive em /blog.
	// Só slug/title descem ao cliente — keywords/date ficam no servidor.
	return {
		artigosRecentes: artigos.slice(0, 12).map(({ slug, title }) => ({ slug, title })),
		totalArtigos: artigos.length
	};
}
