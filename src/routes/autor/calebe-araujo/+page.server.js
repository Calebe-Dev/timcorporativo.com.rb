// Página de autor (AUTOR-PESSOA 2026-09-14). Existe porque a migração do
// WordPress deixou /author/calebe-araujo/ em 404 e os artigos passaram a ser
// assinados só pela Organization — o Google avalia autoria identificável em
// conteúdo de decisão de compra, e a página é a âncora do @id do Person usado
// em todos os Article. A URL antiga chega aqui por 301 (static/_redirects).

import { listarArtigos } from '$lib/server/artigos.js';
import { site, author } from '$lib/site.js';
import { organizationNode, personNode, breadcrumbNode, PERSON_ID } from '$lib/schema.js';

export const prerender = true;

const esc = (s) =>
	String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function load() {
	const url = `${site.url}/autor/${author.slug}/`;
	const title = `${author.name} — autor do ${site.name}`;
	// Mesma descrição que o snippet do WordPress aplicava à página antiga.
	const description = `Conteúdos de ${author.name} sobre TIM Empresa, TIM Black Empresa, TIM Fibra Empresa, UltraFibra e soluções de telecom para empresas.`;

	const ld = {
		'@context': 'https://schema.org',
		'@graph': [
			organizationNode(),
			personNode(),
			breadcrumbNode(url, [
				{ name: 'Blog', item: `${site.url}/blog` },
				{ name: author.name, item: url }
			]),
			// ProfilePage: o tipo que o Google documenta para página de autor —
			// mainEntity aponta para o mesmo Person dos artigos.
			{
				'@type': 'ProfilePage',
				'@id': url,
				url,
				name: title,
				description,
				mainEntity: { '@id': PERSON_ID }
			}
		]
	};

	const html = [
		`<title>${esc(title)}</title>`,
		`<meta name="description" content="${esc(description)}" />`,
		`<link rel="canonical" href="${url}" />`,
		`<meta name="robots" content="index, follow" />`,
		`<meta property="og:title" content="${esc(title)}" />`,
		`<meta property="og:description" content="${esc(description)}" />`,
		`<meta property="og:type" content="profile" />`,
		`<meta property="og:url" content="${url}" />`,
		`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`
	].join('\n\t');

	const artigos = await listarArtigos();
	return {
		seo: { html },
		artigos: artigos.slice(0, 12).map(({ slug, title, date }) => ({ slug, title, date })),
		total: artigos.length
	};
}
