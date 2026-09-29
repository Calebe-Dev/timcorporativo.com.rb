import { todosArtigos } from '$lib/server/artigos.js';
import { solucoesLp } from '$lib/solucoes/index.js';
import { site, author } from '$lib/site.js';
import { POR_PAGINA } from '$lib/blog/paginacao.js';

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

/**
 * Artigos em DESTAQUE no sitemap: saem logo abaixo da home, acima do hub de
 * soluções, das LPs, do /blog e de todo o resto do acervo.
 *
 * Por que existe: a ordem do sitemap não é fator de ranking, mas é uma dica de
 * prioridade de rastreio — e o acervo aqui tem ~190 artigos, o bastante para
 * conteúdo novo entrar no fim da fila de crawl. Destacar é o que se pode fazer
 * pelo lado do site; o resto é o Google decidir.
 *
 * Manutenção: liste aqui o slug do que acabou de ser publicado e retire quando
 * o artigo já estiver indexado e assentado. Slug que não existir no acervo é
 * ignorado com aviso no build (não quebra o sitemap).
 */
const DESTAQUES = [
	// Lote 29/09/2026 — um artigo novo e três reescritas comerciais no mesmo URL.
	'chip-empresarial-tim-como-pedir-linhas-para-a-equipe',
	'tim-black-empresa-internet-movel-para-seu-negocio',
	'plano-empresarial-tim-comparativo-precos-escolher',
	'internet-tim-empresa',
	// Ainda "Discovered - currently not indexed" ou desconhecidos na inspeção de
	// 29/09/2026. Os demais dos lotes de 18 e 24/09 já indexaram e saíram do topo.
	'plano-de-telefonia-empresarial-como-escolher',
	'pabx-em-nuvem-o-que-e-como-funciona-e-como-contratar',
	'plano-tim-para-mei-como-contratar-no-cnpj',
	'tim-controle-empresa-como-funciona-no-cnpj',
	'tim-fixo-empresa-linha-fixa-empresarial',
	'pabx-virtual-tim-empresas-como-contratar',
	'cadastrar-chip-no-cnpj-linha-tim-empresa',
	'esim-linhas-pj-tim-empresas'
];

export async function GET() {
	// Fonte mesclada (snapshot + CMS), já deduplicada por slug.
	const posts = [...(await todosArtigos())].sort((a, b) =>
		(lastmod(b) ?? '').localeCompare(lastmod(a) ?? '')
	);

	// Separa os destacados do resto, preservando a ordem de DESTAQUES.
	const porSlug = new Map(posts.map((a) => [a.slug, a]));
	const destacados = DESTAQUES.map((slug) => porSlug.get(slug)).filter(Boolean);
	const ausentes = DESTAQUES.filter((slug) => !porSlug.has(slug));
	if (ausentes.length) {
		console.warn(`[sitemap] DESTAQUES sem artigo correspondente: ${ausentes.join(', ')}`);
	}
	const emDestaque = new Set(destacados.map((a) => a.slug));
	const demais = posts.filter((a) => !emDestaque.has(a.slug));

	const urls = [
		{ loc: `${site.url}/`, priority: '1.0' },
		// Destaques: logo abaixo da home, acima de tudo — pedido de 23/09/2026 para
		// acelerar o rastreio do lote novo. Retirar do topo quando indexados.
		...destacados.map((a) => ({
			loc: `${site.url}/${a.slug}/`,
			lastmod: lastmod(a),
			priority: '0.9'
		})),
		// Hub e landing pages de conversão acima do blog na prioridade: são o
		// destino comercial da malha, e os artigos existem para alimentá-las.
		//
		// Sem <lastmod> nas LPs: a alternativa seria carimbar a data do build, que
		// mudaria a cada deploy sem o conteúdo ter mudado — lastmod que "mente"
		// dessa forma é justamente o que faz o Google parar de considerá-lo.
		{ loc: `${site.url}/solucoes/`, priority: '0.9' },
		...solucoesLp.map((lp) => ({ loc: `${site.url}/solucoes/${lp.slug}/`, priority: '0.8' })),
		{ loc: `${site.url}/blog`, priority: '0.8' },
		// Páginas 2..N da listagem. Prioridade baixa porque são navegação, não
		// destino de busca — mas precisam estar aqui: sem elas o rastreio dos
		// artigos mais antigos depende só da cadeia de links "Próxima", que o
		// Google percorre com muito menos frequência.
		...Array.from(
			{ length: Math.max(0, Math.ceil(posts.length / POR_PAGINA) - 1) },
			(_, i) => ({ loc: `${site.url}/blog/pagina/${i + 2}`, priority: '0.4' })
		),
		{ loc: `${site.url}/politica-de-privacidade`, priority: '0.3' },
		// Página de autor: âncora do Person que assina todos os artigos.
		{ loc: `${site.url}/autor/${author.slug}/`, priority: '0.5' },
		...demais.map((a) => ({
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
