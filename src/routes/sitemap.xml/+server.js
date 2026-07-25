import { todosArtigos } from '$lib/server/artigos.js';
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
	// Fonte mesclada (snapshot + CMS), já deduplicada por slug.
	const posts = [...(await todosArtigos())].sort((a, b) =>
		(lastmod(b) ?? '').localeCompare(lastmod(a) ?? '')
	);

	const urls = [
		{ loc: `${site.url}/`, priority: '1.0' },
		{ loc: `${site.url}/blog`, priority: '0.8' },
		{ loc: `${site.url}/politica-de-privacidade`, priority: '0.3' },
		...posts.map((a) => ({
			// Barra final: é a URL que o WordPress servia, que o Google indexou e
			// que hoje responde 200 direto (ver trailingSlash em /[slug]).
			loc: `${site.url}/${a.slug}/`,
			lastmod: lastmod(a),
			priority: '0.7'
		}))
	];

	// O xml-stylesheet é só para humanos: navegador abre /sitemap.xml e vê uma
	// página formatada em vez do aviso "no style information". Crawlers ignoram.
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
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
