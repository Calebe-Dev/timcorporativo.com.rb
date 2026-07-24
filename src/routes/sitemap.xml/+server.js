import { OcHubCMS } from '@grupooc/ochub-sdk';
import { ochubConfig } from '$lib/server/ochub.js';
import { site } from '$lib/site.js';

// Gerado no build (SSG). O crawler do SvelteKit inclui rotas sem parâmetros
// automaticamente, então /sitemap.xml é pré-renderizado mesmo sem link.
export const prerender = true;

/** Data mais recente do artigo, em formato YYYY-MM-DD. */
function lastmod(a) {
	const iso = a.date_updated ?? a.published_at ?? a.created_at;
	return iso ? iso.slice(0, 10) : undefined;
}

function xmlEscape(s) {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function GET() {
	const cms = new OcHubCMS({ config: ochubConfig });
	const articles = await cms.getAllArticles();

	// Deduplica por slug (mantendo o mais recente) — igual à listagem.
	const seen = new Set();
	const posts = articles
		.filter((a) => a.slug)
		.sort((a, b) => (lastmod(b) ?? '').localeCompare(lastmod(a) ?? ''))
		.filter((a) => (seen.has(a.slug) ? false : (seen.add(a.slug), true)));

	const urls = [
		{ loc: `${site.url}/`, priority: '1.0' },
		{ loc: `${site.url}/blog`, priority: '0.8' },
		...posts.map((a) => ({
			loc: `${site.url}/blog/${a.slug}`,
			lastmod: lastmod(a),
			priority: '0.7'
		}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) =>
			`  <url>\n    <loc>${xmlEscape(u.loc)}</loc>${
				u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''
			}\n    <priority>${u.priority}</priority>\n  </url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
