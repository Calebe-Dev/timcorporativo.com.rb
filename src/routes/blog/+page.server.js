import { OcHubCMS } from '@grupooc/ochub-sdk';
import { ochubConfig } from '$lib/server/ochub.js';

// Listagem do blog — roda apenas no build (SSG).
export async function load() {
	const cms = new OcHubCMS({ config: ochubConfig });
	const articles = await cms.getAllArticles();

	// A listagem não precisa do `html_content` (~8 KB por artigo). Descartamos
	// para não inflar o HTML pré-renderizado de /blog com ~700 KB de conteúdo.
	const mapped = articles
		.map(({ id, title, slug, meta_description, keywords, published_at, created_at }) => ({
			id,
			title,
			slug,
			meta_description,
			keywords,
			date: published_at ?? created_at
		}))
		.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

	// Alguns artigos do CMS compartilham o mesmo slug; a rota /<slug> só
	// pode renderizar um deles. Deduplicamos por slug (mantendo o mais recente)
	// para não exibir cards repetidos apontando para a mesma URL.
	const seen = new Set();
	const items = mapped.filter((p) => {
		if (!p.slug || seen.has(p.slug)) return false;
		seen.add(p.slug);
		return true;
	});

	return { items };
}
