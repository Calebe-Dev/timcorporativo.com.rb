import { error } from '@sveltejs/kit';
import { createArticleEntries, createArticleLoad } from '@grupooc/ochub-sdk/ssg/sveltekit';
import { ochubConfig, blogBaseUrl, listarArtigos } from '$lib/server/ochub.js';
import { site } from '$lib/site.js';

// ---------------------------------------------------------------------------
// "Leia também": 4 artigos afins calculados no build por sobreposição de
// palavras do título + keywords do CMS. 130 dos 189 artigos não tinham NENHUM
// link interno no corpo; este bloco dá a todos eles links contextuais sem
// editar nada no OC Hub.
// ---------------------------------------------------------------------------

// Palavras que aparecem em quase todo artigo do site — sem valor para medir
// afinidade (inclui as genéricas de pt-BR e as onipresentes do nicho).
const RUIDO = new Set([
	'de', 'da', 'do', 'das', 'dos', 'para', 'com', 'sem', 'em', 'no', 'na', 'nos',
	'nas', 'por', 'que', 'qual', 'quais', 'um', 'uma', 'os', 'as', 'ao', 'aos',
	'seu', 'sua', 'seus', 'suas', 'como', 'mais', 'sobre', 'entre', 'tudo', 'voce',
	'sao', 'ser', 'tem', 'nao', 'the', 'and',
	'tim', 'empresa', 'empresas', 'empresarial', 'corporativo', 'corporativa',
	'guia', 'completo', 'completa', 'plano', 'planos', '2024', '2025', '2026'
]);

/** Título + keywords → conjunto de termos normalizados (sem acento, ≥3 letras). */
function termos(artigo) {
	return new Set(
		`${artigo.title ?? ''} ${artigo.keywords ?? ''}`
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.split(/[^a-z0-9]+/)
			.filter((t) => t.length >= 3 && !RUIDO.has(t))
	);
}

// Memoiza os conjuntos por slug: são ~190 artigos × ~190 páginas no build.
const cacheTermos = new Map();
function termosDe(artigo) {
	let t = cacheTermos.get(artigo.slug);
	if (!t) {
		t = termos(artigo);
		cacheTermos.set(artigo.slug, t);
	}
	return t;
}

/** Os 4 mais afins ao slug atual; completa com os mais recentes se faltar. */
function leiaTambem(artigos, slugAtual, quantos = 4) {
	const atual = artigos.find((a) => a.slug === slugAtual);
	const base = atual ? termosDe(atual) : new Set();

	const pontuados = artigos
		.filter((a) => a.slug !== slugAtual)
		.map((a) => {
			let pontos = 0;
			for (const t of termosDe(a)) if (base.has(t)) pontos++;
			return { a, pontos };
		})
		.sort((x, y) => y.pontos - x.pontos || (y.a.date ?? '').localeCompare(x.a.date ?? ''));

	// Afinidade real primeiro (≥2 termos em comum); recentes preenchem o resto.
	const afins = pontuados.filter((x) => x.pontos >= 2).slice(0, quantos);
	for (const x of pontuados) {
		if (afins.length >= quantos) break;
		if (!afins.includes(x)) afins.push(x);
	}
	return afins.map(({ a }) => ({ slug: a.slug, title: a.title }));
}

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

	dados.relacionados = leiaTambem(await listarArtigos(), event.params.slug);
	return dados;
}
