import { error } from '@sveltejs/kit';
import { todosArtigos, listarArtigos } from '$lib/server/artigos.js';
import { site } from '$lib/site.js';
// ENTIDADE-OC-TEL 2026-09-10 — a página de artigo era a única do site sem nenhum
// nó Organization: o Article repetia dois objetos parciais em author/publisher.
// Agora o grafo traz a entidade completa uma vez e os dois apontam para o @id.
import { organizationNode, personNode, breadcrumbNode, ORG_ID, PERSON_ID } from '$lib/schema.js';
import { EDITORIAL } from '$lib/blog/editorial.js';
import { ARTIGO_PARA_LP, ANCORAS, FALLBACK } from '$lib/solucoes/links-artigos.js';
import { bannersPara } from '$lib/banners.js';

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

// ---------------------------------------------------------------------------
// Bloco de SEO do <head>, gerado aqui (antes vinha do SDK do OC Hub). Emite as
// MESMAS tags que o SDK emitia — title, description, keywords, canonical,
// og:title/description/type/url — e o JSON-LD Article já completo (author,
// publisher, image, mainEntityOfPage), que antes era remendado num replace.
// Nada muda para o Google: mesmas URLs com barra final, mesmo conteúdo de tag.
// ---------------------------------------------------------------------------

/** Escapa texto para atributo/conteúdo de tag HTML. */
function esc(s) {
	return String(s ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function gerarSeoHtml(artigo) {
	const url = `${site.url}/${artigo.slug}/`;
	const kw = Array.isArray(artigo.keywords) ? artigo.keywords.join(', ') : (artigo.keywords ?? '');
	const desc = artigo.meta_description ?? '';

	// ENTIDADE-OC-TEL 2026-09-10 — anterior: `ld` era só o objeto Article abaixo,
	// com author e publisher repetindo Organization parcial (sem @id, sem razão
	// social, sem CNPJ).
	//	author: { '@type': 'Organization', name: site.name, url: `${site.url}/` },
	//	publisher: {
	//		'@type': 'Organization',
	//		name: site.name,
	//		logo: { '@type': 'ImageObject', url: `${site.url}${site.logo}` }
	//	},
	const ld = {
		'@context': 'https://schema.org',
		'@graph': [
			// Entidade única do site (mesma função que alimenta home e /solucoes/):
			// traz name, legalName, taxID e identifier de uma fonte só.
			organizationNode(),
			// AUTOR-PESSOA 2026-09-14 — o autor vira entidade própria (mesmo @id da
			// página /autor/…) e o artigo ganha a trilha Início › Blog › título,
			// que as landing pages já tinham.
			personNode(),
			breadcrumbNode(url, [
				{ name: 'Blog', item: `${site.url}/blog` },
				{ name: artigo.title, item: url }
			]),
			{
				'@type': 'Article',
				'@id': `${url}#article`,
				headline: artigo.title,
				description: desc,
				keywords: kw,
				url,
				datePublished: artigo.published_at ?? artigo.created_at,
				dateModified: artigo.date_updated ?? artigo.published_at ?? artigo.created_at,
				image: [`${site.url}${site.ogImage}`],
				// AUTOR-PESSOA 2026-09-14 — anterior: author: { '@id': ORG_ID },
				author: { '@id': PERSON_ID },
				publisher: { '@id': ORG_ID },
				mainEntityOfPage: { '@type': 'WebPage', '@id': url }
			}
		]
	};

	return [
		`<title>${esc(artigo.title)}</title>`,
		`<meta name="description" content="${esc(desc)}" />`,
		kw && `<meta name="keywords" content="${esc(kw)}" />`,
		`<link rel="canonical" href="${url}" />`,
		`<meta property="og:title" content="${esc(artigo.title)}" />`,
		`<meta property="og:description" content="${esc(desc)}" />`,
		`<meta property="og:type" content="article" />`,
		`<meta property="og:url" content="${url}" />`,
		// `<` escapado no JSON: impede que um "</script>" vindo do CMS feche o bloco.
		`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`
	]
		.filter(Boolean)
		.join('\n\t');
}

// ---------------------------------------------------------------------------
// Correção de links mortos no corpo dos artigos (no build, sem tocar no CMS).
// Nenhum redirect é criado: o href errado é trocado pelo destino certo direto
// no HTML servido. A auditoria de 2026-07-25 achou 7 quebrados + 3 âncoras
// mortas; o mapa abaixo cobre esses casos e a regra genérica pega qualquer
// slug que deixar de existir no futuro (vira /blog, com aviso no build).
// ---------------------------------------------------------------------------

const CORRECOES = new Map([
	// páginas do WordPress antigo que não existem mais neste site
	['/conteudos/', '/blog'],
	['/conteudos', '/blog'],
	['/tag/tim-corporativo/', '/blog'],
	['/solucoes-corporativas', '/#solucoes'],
	['/solucoes-corporativas/', '/#solucoes'],
	// artigos apagados → artigo vivo do mesmo assunto
	['/tim-corporativo-a-solucao-empresarial-para-2025/', '/a-tim-empresa-vai-transformar-seus-negocios-em-2025/'],
	['/corporativo-tim-cuidado-com-os-custos-com-roaming/', '/consultor-tim-explica-roaming-nacional-e-internacional/'],
	['/viaje-conectado-com-o-roaming-tim-empresa/', '/consultor-tim-explica-roaming-nacional-e-internacional/'],
	// âncoras da home que mudaram de nome
	['/#formulario', '/#contato'],
	['/#form', '/#contato'],
	['/#planostim', '/#planos'],
	['/#autorizado', '/#topo']
]);

// Rotas de um segmento que não são artigo — nunca reescrever.
const RESERVADOS = new Set(['blog', 'politica-de-privacidade', 'sitemap.xml']);

/** Forma canônica de um id/âncora para casamento tolerante: só letras e números. */
function chaveAncora(s) {
	return s
		.toLowerCase()
		// NFKD em vez de NFD: decompoe tambem por compatibilidade ("2a" ordinal
		// vira "2a" comum), que e como as ancoras antigas do WordPress grafavam.
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]/g, '');
}

/** Texto de titulo para id no padrao que o acervo ja usa (h-slug-do-titulo). */
function idDeTitulo(texto) {
	const slug = texto
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
	return slug ? `h-${slug}` : '';
}

/**
 * Garante id em todo <h2>–<h5> do corpo. Parte do acervo veio do WordPress com
 * sumários que apontam para âncoras (#Secao_Titulo) mas com títulos SEM id —
 * sumário morto desde a migração. Com id em todo título, o religamento de
 * âncoras em corrigirLinks() passa a ter alvo para casar.
 */
function garantirIdsDeTitulos(html) {
	const usados = new Set();
	return html.replace(/<h([2-5])([^>]*)>([\s\S]*?)<\/h\1>/g, (original, nivel, attrs, conteudo) => {
		const jaTem = attrs.match(/id=["']([^"']+)["']/);
		if (jaTem) {
			usados.add(jaTem[1]);
			return original;
		}
		let id = idDeTitulo(conteudo.replace(/<[^>]+>/g, ''));
		if (!id) return original;
		// Titulo repetido no mesmo artigo: sufixo numerico para o id ser unico.
		for (let n = 2; usados.has(id); n++) id = `${idDeTitulo(conteudo.replace(/<[^>]+>/g, ''))}-${n}`;
		usados.add(id);
		return `<h${nivel}${attrs} id="${id}">${conteudo}</h${nivel}>`;
	});
}

/**
 * Chave exata primeiro; senão, id cuja chave começa com a da âncora (ou o
 * inverso), desde que haja UM só candidato — "#Conclusao" acha
 * "h-conclusao-qual-escolher" sem risco de acertar a seção errada.
 */
/** Âncoras antigas vêm URL-encodadas (%E2%80%9C…) — decodifica antes de casar. */
function decodificar(s) {
	try {
		return decodeURIComponent(s);
	} catch {
		return s;
	}
}

function acharId(idsPorChave, fragmento) {
	const chave = chaveAncora(decodificar(fragmento));
	if (!chave) return undefined;
	const exato = idsPorChave.get(chave);
	if (exato) return exato;
	const candidatos = [...idsPorChave.entries()].filter(
		([k]) => k.startsWith(chave) || chave.startsWith(k)
	);
	return candidatos.length === 1 ? candidatos[0][1] : undefined;
}

/**
 * Reescreve os href do corpo do artigo:
 * - aplica o mapa de correções (páginas/artigos que não existem mais);
 * - religa âncoras de sumário no padrão WordPress (#Secao_Titulo) ao id real
 *   gerado no conteúdo (h-secao-titulo) — os sumários estavam mortos em produção;
 * - normaliza links de artigo para a forma com barra final (evita redirect);
 * - remove âncoras inexistentes no artigo de destino;
 * - slug que não existe vira /blog (com aviso no build) em vez de 404.
 */
function corrigirLinks(html, slugAtual, artigos) {
	const porSlug = new Map(artigos.map((a) => [a.slug, a]));

	html = garantirIdsDeTitulos(html);

	// Ids reais DESTE artigo, indexados pela forma canônica. O prefixo `h-` dos
	// ids de título é descartado da chave: a âncora antiga (#Secao_Titulo) não o
	// tem, e mantê-lo impediria o casamento.
	const idsExatos = new Set();
	const idsPorChave = new Map();
	for (const [, id] of html.matchAll(/id=["']([^"']+)["']/g)) {
		idsExatos.add(id);
		idsPorChave.set(chaveAncora(id.replace(/^h-/, '')), id);
	}

	return html.replace(/href=(["'])([^"']+)\1/g, (original, aspas, href) => {
		// Âncora interna do próprio artigo (sumário): religa ao id real.
		if (href.startsWith('#')) {
			const frag = href.slice(1);
			// Gatilho de popup do Elementor (WordPress antigo): o popup era o
			// formulário de contato — aponta para a seção de contato do site.
			if (frag.startsWith('elementor-action')) return `href=${aspas}/#contato${aspas}`;
			if (!frag || idsExatos.has(frag)) return original;
			const idReal = acharId(idsPorChave, frag);
			return idReal ? `href=${aspas}#${idReal}${aspas}` : original;
		}

		// Absoluto para o próprio domínio vira relativo; outros domínios passam.
		if (href.startsWith(site.url + '/')) href = href.slice(site.url.length);
		if (!href.startsWith('/')) return original;

		const corrigido = CORRECOES.get(href);
		if (corrigido) return `href=${aspas}${corrigido}${aspas}`;

		const [caminho, fragmento] = href.split('#');
		const m = caminho.match(/^\/([a-z0-9-]+)\/?$/);
		if (!m || RESERVADOS.has(m[1])) return original;

		const slug = m[1];
		if (!porSlug.has(slug)) {
			console.warn(`[artigo] link morto em /${slugAtual}/: ${href} → /blog`);
			return `href=${aspas}/blog${aspas}`;
		}

		let destino = `/${slug}/`;
		if (fragmento) {
			// Só mantém a âncora se o id (ou equivalente) existir no destino —
			// avaliado APÓS a geração de ids, como o destino será servido.
			const alvo = garantirIdsDeTitulos(porSlug.get(slug)?.html_content ?? '');
			const idsAlvo = new Map();
			for (const [, id] of alvo.matchAll(/id=["']([^"']+)["']/g)) {
				idsAlvo.set(chaveAncora(id.replace(/^h-/, '')), id);
			}
			const idReal = acharId(idsAlvo, fragmento);
			if (idReal) {
				destino += `#${idReal}`;
			} else {
				console.warn(`[artigo] âncora morta em /${slugAtual}/: ${href} → ${destino}`);
			}
		}
		return `href=${aspas}${destino}${aspas}`;
	});
}

// ---------------------------------------------------------------------------
// Link contextual do artigo para a landing page de solução correspondente.
// Ver o mapa e o porquê em $lib/solucoes/links-artigos.js.
// ---------------------------------------------------------------------------

/** Escapa os metacaracteres de regex de uma frase âncora. */
function escaparRegex(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Injeta UM link para a LP na primeira ocorrência de uma das frases candidatas,
 * dentro de um parágrafo comum.
 *
 * O percurso é feito token a token (tag ou texto) em vez de um replace direto no
 * HTML porque um replace ingênuo casaria dentro de atributo, dentro de título ou
 * dentro de um link que já existe — gerando <a> aninhado, que é HTML inválido e
 * o navegador desmonta de formas imprevisíveis.
 *
 * Não achou lugar seguro? Não injeta nada. Um artigo sem o link é perda pequena;
 * um artigo com markup quebrado é problema de verdade.
 */
function linkarSolucao(html, slugArtigo) {
	const lp = ARTIGO_PARA_LP[slugArtigo];
	if (!lp) return html;

	const frases = ANCORAS[lp] ?? [];
	let profundidadeLink = 0;
	let emParagrafo = false;
	let injetado = false;

	const saida = html.replace(/(<[^>]+>)|([^<]+)/g, (token, tag, texto) => {
		if (tag) {
			const t = tag.toLowerCase();
			if (t.startsWith('<a ') || t === '<a>') profundidadeLink++;
			else if (t.startsWith('</a')) profundidadeLink = Math.max(0, profundidadeLink - 1);
			else if (t.startsWith('<p') && !t.startsWith('<pre')) emParagrafo = true;
			else if (t.startsWith('</p')) emParagrafo = false;
			return token;
		}

		// Só texto corrido de parágrafo, fora de qualquer link já existente.
		if (injetado || !emParagrafo || profundidadeLink > 0 || !texto.trim()) return token;

		for (const frase of frases) {
			// \b não funciona com acento em JS sem flag unicode adequada; as frases
			// são específicas o bastante para o casamento simples não gerar falso
			// positivo dentro de outra palavra.
			const re = new RegExp(escaparRegex(frase), 'i');
			const m = texto.match(re);
			if (!m) continue;
			injetado = true;
			return texto.replace(
				re,
				`<a href="/solucoes/${lp}/">${m[0]}</a>`
			);
		}
		return token;
	});

	if (injetado) return saida;

	// Nenhuma frase candidata no texto. Em vez de forçar o link numa palavra
	// genérica, acrescenta uma frase curta ao fim do PRIMEIRO parágrafo, com
	// âncora que descreve o destino. Continua sendo link editorial no corpo, no
	// alto da página — não bloco de rodapé.
	const frase = FALLBACK[lp];
	if (frase) {
		let usado = false;
		const comFrase = html.replace(/<\/p>/i, (fim) => {
			if (usado) return fim;
			usado = true;
			return ` ${frase}</p>`;
		});
		if (usado) return comFrase;
	}

	// Nem parágrafo o artigo tem. Aí não há onde ancorar nada — e o aviso fica
	// visível no log do build em vez de virar um link que ninguém percebeu faltar.
	console.warn(`[solucoes] /${slugArtigo}/: sem <p> para ancorar link de "${lp}".`);
	return saida;
}

// ---------------------------------------------------------------------------
// Fatias do artigo — o template monta, nesta ordem: h1 → resposta direta →
// intro → sumário → parte1 → banner do meio → parte2. As peças de banner estão
// em $lib/banners.js; resposta e data de revisão, em $lib/blog/editorial.js.
//
// Todo corte é em fronteira de nível raiz, nunca dentro de lista, tabela,
// figura ou <div> do WordPress (65 artigos têm <div>, 60 têm <table>):
//   intro   — do fim do <h1> ao 1º <h2> raiz;
//   banner  — antes do 2º <h2> raiz se houver ao menos 3 <p> antes dele; senão
//             antes do 3º; artigo sem duas seções cai depois do 5º parágrafo
//             raiz, desde que haja ao menos 8 no total. O 1º <h2> não serve:
//             o banner apareceria antes de o leitor ter lido qualquer coisa;
//   sumário — só a partir de SUMARIO_MINIMO seções raiz (106 dos 189 artigos):
//             índice de três itens é ruído. Os ids vêm de garantirIdsDeTitulos,
//             já aplicado em corrigirLinks — os mesmos que o Google mostra como
//             link de trecho na SERP.
// Sem ponto seguro para o banner, a parte2 volta vazia e o template mostra só
// o do rodapé.
// ---------------------------------------------------------------------------

const ABRE_CONTAINER = /^<(ul|ol|table|blockquote|figure|div|section|aside|nav|dl)\b/i;
const FECHA_CONTAINER = /^<\/(ul|ol|table|blockquote|figure|div|section|aside|nav|dl)\b/i;
const SUMARIO_MINIMO = 8;

/** Texto visível de um título: sem tags, com as entidades mais comuns decodificadas. */
function textoDeTitulo(html) {
	return html
		.replace(/<[^>]+>/g, '')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#0*39;|&apos;/g, "'")
		.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * Índice do plugin de TOC do WordPress que veio colado no html_content de 38
 * artigos: `<p>Índice de Conteúdo</p> <a href="#">Toggle</a> <ul>…</ul>`. O
 * "Toggle" é um link morto visível, as âncoras são do formato antigo e, nos
 * artigos longos, o bloco duplicaria o sumário gerado aqui. Sai inteiro; o
 * artigo que o tinha ganha o sumário próprio mesmo abaixo de SUMARIO_MINIMO —
 * quem escreveu com índice quis um índice.
 *
 * @returns {{ html: string, tinha: boolean }}
 */
function removerIndiceDoWordPress(html) {
	const rotulo = html.match(/<p>\s*(?:<strong>)?\s*Índice de Conteúdo\s*(?:<\/strong>)?\s*<\/p>/i);
	if (!rotulo) return { html, tinha: false };
	const inicio = rotulo.index;
	let fim = inicio + rotulo[0].length;
	const toggle = html.slice(fim).match(/^\s*<a href="#">\s*Toggle\s*<\/a>/i);
	if (toggle) fim += toggle[0].length;
	// A lista é aninhada: caminha até o </ul> que fecha a primeira.
	const posUl = html.indexOf('<ul', fim);
	if (posUl >= 0 && /^\s*$/.test(html.slice(fim, posUl))) {
		const re = /<(\/?)ul\b[^>]*>/gi;
		re.lastIndex = posUl;
		let profundidade = 0;
		let m;
		while ((m = re.exec(html))) {
			profundidade += m[1] ? -1 : 1;
			if (profundidade === 0) {
				fim = m.index + m[0].length;
				break;
			}
		}
	}
	return { html: html.slice(0, inicio) + html.slice(fim), tinha: true };
}

/**
 * @returns {{ h1: string, intro: string, parte1: string, parte2: string,
 *             sumario: Array<{ id: string, texto: string }> }}
 */
function fatiarArtigo(html, tinhaIndice = false) {
	let profundidade = 0;
	let paragrafos = 0;
	let fechamentosP = 0;
	let posFallback = -1;
	/** @type {Array<{ pos: number, id: string, texto: string, paragrafos: number }>} */
	const h2s = [];

	for (const m of html.matchAll(/<[^>]+>/g)) {
		const tag = m[0];
		if (ABRE_CONTAINER.test(tag)) {
			if (!tag.endsWith('/>')) profundidade++;
		} else if (FECHA_CONTAINER.test(tag)) {
			profundidade = Math.max(0, profundidade - 1);
		} else if (/^<p\b/i.test(tag)) {
			paragrafos++;
		} else if (/^<\/p\b/i.test(tag) && profundidade === 0) {
			fechamentosP++;
			if (fechamentosP === 5) posFallback = m.index + tag.length;
		} else if (/^<h2\b/i.test(tag) && profundidade === 0) {
			const fim = html.indexOf('</h2>', m.index);
			h2s.push({
				pos: m.index,
				id: tag.match(/\sid=["']([^"']+)["']/)?.[1] ?? '',
				texto: fim > 0 ? textoDeTitulo(html.slice(m.index + tag.length, fim)) : '',
				paragrafos
			});
		}
	}

	const h1Match = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/i);
	const fimH1 = h1Match ? h1Match.index + h1Match[0].length : 0;

	let primeiroH2 = h2s[0]?.pos ?? -1;
	let corte =
		(h2s[1]?.paragrafos >= 3 ? h2s[1] : h2s[2])?.pos ??
		(posFallback > 0 && paragrafos >= 8 ? posFallback : -1);
	// Conteúdo herdado às vezes traz título fora de ordem: nada antes do fim do
	// <h1> vira fronteira, senão o trecho sairia duas vezes.
	if (primeiroH2 >= 0 && primeiroH2 < fimH1) primeiroH2 = -1;
	if (corte >= 0 && corte < fimH1) corte = -1;

	let intro;
	let parte1;
	let parte2;
	if (primeiroH2 < 0) {
		intro = corte > 0 ? html.slice(fimH1, corte) : html.slice(fimH1);
		parte1 = '';
		parte2 = corte > 0 ? html.slice(corte) : '';
	} else if (corte > primeiroH2) {
		intro = html.slice(fimH1, primeiroH2);
		parte1 = html.slice(primeiroH2, corte);
		parte2 = html.slice(corte);
	} else if (corte > 0) {
		// Corte por parágrafo antes do único <h2>: a seção inteira vai para depois
		// do banner.
		intro = html.slice(fimH1, corte);
		parte1 = '';
		parte2 = html.slice(corte);
	} else {
		intro = html.slice(fimH1, primeiroH2);
		parte1 = html.slice(primeiroH2);
		parte2 = '';
	}

	const sumario =
		h2s.length >= SUMARIO_MINIMO || tinhaIndice
			? h2s.filter((h) => h.id && h.texto).map(({ id, texto }) => ({ id, texto }))
			: [];

	return { h1: html.slice(0, fimH1), intro, parte1, parte2, sumario };
}

// ---------------------------------------------------------------------------
// Rota
// ---------------------------------------------------------------------------

// Uma rota estática por artigo (no build). Vem da fonte mesclada — snapshot
// local + CMS — então limpar o CMS não derruba nenhuma página existente.
export const entries = async () => (await todosArtigos()).map((a) => ({ slug: a.slug }));

// O WordPress servia os artigos com barra no fim (/<slug>/) e é essa a forma
// que o Google tem indexada. Com 'always' o adapter escreve <slug>/index.html,
// então a URL indexada responde 200 direto — sem 301, sem 308, sem salto.
export const trailingSlash = 'always';

export async function load({ params }) {
	const artigos = await todosArtigos();
	const artigo = artigos.find((a) => a.slug === params.slug);
	// Slug desconhecido = 404 real (o prerender tolera; um 500 derrubaria o build).
	if (!artigo) throw error(404, 'Artigo não encontrado');

	// Ordem importa: corrigirLinks primeiro (mexe em href existente),
	// linkarSolucao depois (cria href novo, que não deve ser reprocessado),
	// e o corte por último, sobre o HTML já pronto.
	// O índice do WordPress sai ANTES dos links: senão o rótulo "Índice de
	// Conteúdo" é o primeiro <p> do artigo e vira a âncora da frase de link
	// para a LP (fallback de linkarSolucao), em vez de um parágrafo de verdade.
	const bruto = removerIndiceDoWordPress(artigo.html_content ?? '');
	const html = linkarSolucao(corrigirLinks(bruto.html, params.slug, artigos), params.slug);
	const { h1, intro, parte1, parte2, sumario } = fatiarArtigo(html, bruto.tinha);

	// `html_content` não vai para a página: o template só usa as fatias, e
	// repetir o HTML inteiro no payload serializado dobraria o peso do artigo.
	const { html_content: _descartado, ...semHtml } = artigo;

	return {
		article: { ...semHtml, html_h1: h1, html_intro: intro, html_parte1: parte1, html_parte2: parte2 },
		resposta: EDITORIAL[params.slug]?.resposta ?? '',
		sumario,
		banners: bannersPara(artigo),
		seo: { html: gerarSeoHtml(artigo) },
		relacionados: leiaTambem(await listarArtigos(), params.slug)
	};
}
