import { todosArtigos } from '$lib/server/artigos.js';
import { fatiar } from '$lib/blog/paginacao.js';

// Listagem do blog — roda apenas no build (SSG). A fonte é a mesclagem
// snapshot local + CMS (ver $lib/server/artigos.js), já deduplicada por slug
// e ordenada do mais novo ao mais velho.
export async function load() {
	const artigos = await todosArtigos();

	// A listagem não precisa do `html_content` (~8 KB por artigo). Descartamos
	// para não inflar o HTML pré-renderizado de /blog com ~700 KB de conteúdo.
	const items = artigos.map(({ id, title, slug, meta_description, keywords, published_at, created_at }) => ({
		id,
		title,
		slug,
		meta_description,
		keywords,
		date: published_at ?? created_at
	}));

	// Só a primeira fatia; as demais vivem em /blog/pagina/[n]. Ver o comentário
	// em $lib/blog/paginacao.js: os 189 cartões numa página só estouravam o LCP.
	return fatiar(items, 1);
}
