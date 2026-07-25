import { error } from '@sveltejs/kit';
import { createArticleEntries, createArticleLoad } from '@grupooc/ochub-sdk/ssg/sveltekit';
import { ochubConfig, blogBaseUrl } from '$lib/server/ochub.js';
import { site } from '$lib/site.js';

// O JSON-LD Article do SDK vem sem author, publisher e image — o Rich Results
// Test acusa "Author is missing / Publisher is missing" e o artigo perde
// elegibilidade a rich results. Completamos os campos aqui, no build.
function completarArticleLd(html) {
	return html.replace(
		/(<script type="application\/ld\+json">)(.*?)(<\/script>)/s,
		(original, abre, json, fecha) => {
			try {
				const ld = JSON.parse(json);
				if (ld['@type'] === 'Article') {
					ld.image ??= [`${site.url}${site.ogImage}`];
					ld.author ??= { '@type': 'Organization', name: site.name, url: `${site.url}/` };
					ld.publisher ??= {
						'@type': 'Organization',
						name: site.name,
						logo: { '@type': 'ImageObject', url: `${site.url}${site.logo}` }
					};
					ld.mainEntityOfPage ??= { '@type': 'WebPage', '@id': ld.url };
				}
				return abre + JSON.stringify(ld) + fecha;
			} catch {
				return original; // JSON inesperado: melhor manter o bloco do SDK intacto
			}
		}
	);
}

// Gera uma rota estática para cada artigo publicado do site (no build).
export const entries = createArticleEntries(ochubConfig);

// O WordPress servia os artigos com barra no fim (/<slug>/) e é essa a forma
// que o Google tem indexada. Com 'always' o adapter escreve <slug>/index.html,
// então a URL indexada responde 200 direto — sem 301, sem 308, sem salto.
export const trailingSlash = 'always';

// Busca o artigo pelo slug e monta o bloco de SEO (title/meta/OG/JSON-LD).
// `siteUrl: blogBaseUrl` é a raiz do site, então o canonical aponta para
// /<slug> — a mesma URL que o WordPress servia e que o Google tem indexada.
const carregarArtigo = createArticleLoad({ config: ochubConfig, siteUrl: blogBaseUrl });

export async function load(event) {
	let dados;
	try {
		dados = await carregarArtigo(event);
	} catch (e) {
		// Como os artigos vivem na raiz, esta rota captura QUALQUER caminho de um
		// nível. Um link interno quebrado dentro de um artigo cai aqui e o SDK
		// lança "Artigo não encontrado" — que sem tratamento vira 500. Convertemos
		// em 404 real, que é a resposta correta e o que o prerender sabe tolerar.
		if (e?.status) throw e;
		throw error(404, 'Artigo não encontrado');
	}

	// O SDK monta as URLs como `${siteUrl}/${slug}`, sem barra final. Como a
	// página é servida em /<slug>/, acrescentamos a barra no canonical, og:url e
	// no JSON-LD — senão o canonical apontaria para uma URL que só redireciona.
	const semBarra = `${blogBaseUrl}/${event.params.slug}`;
	if (dados?.seo?.html) {
		dados.seo.html = completarArticleLd(
			dados.seo.html.replaceAll(`"${semBarra}"`, `"${semBarra}/"`)
		);
	}
	return dados;
}
