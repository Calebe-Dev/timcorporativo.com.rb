import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Rotas que existem no repositório (as demais são artigos vindos do CMS).
const PAGINAS_PROPRIAS = new Set([
	'/',
	'/blog',
	'/sitemap.xml',
	'/politica-de-privacidade'
]);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Site 100% estático (SSG): tudo é pré-renderizado em build.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		// CSS abaixo deste tamanho (bruto, em bytes) é embutido no <head> em vez de
		// virar <link>: some uma requisição bloqueante do caminho crítico de TODA
		// página.
		//
		// Era o gargalo real do LCP da home — a imagem do hero terminava de baixar
		// aos 304ms mas só pintava aos 482ms, esperando este CSS chegar e ser
		// parseado (172ms de elementRenderDelay + 159ms de bloqueio no Lighthouse).
		//
		// O aviso que este comentário dava já tinha acontecido sem ninguém ver: em
		// 27/07/2026 o CSS de produção media 50.343 bytes — 343 acima do limite de
		// 50.000 então configurado. O SvelteKit voltou ao <link> bloqueante em
		// silêncio e a otimização inteira estava perdida havia tempo, por 0,7% de
		// estouro. Com as 20 landing pages de /solucoes/ o bundle foi a ~61 KB
		// (10,3 KB gzipado), daí o limite novo com folga real.
		//
		// A folga não é infinita: inline embute o CSS em cada um dos ~213 HTMLs, e
		// a partir de certo tamanho o custo de repetir supera o de uma requisição
		// cacheável. Se passar de ~120 KB brutos, refaça a conta em vez de subir
		// este número de novo.
		//
		// Para conferir: `grep -c 'rel="stylesheet"' build/index.html` — 0 é inline.
		inlineStyleThreshold: 100000,

		prerender: {
			// Páginas que nós escrevemos. Os artigos ficam na raiz (/<slug>), então
			// "veio de um artigo" = a referrer não é nenhuma destas.
			handleHttpError: ({ path, referrer, message }) => {
				// Links quebrados DENTRO do conteúdo dos artigos (vindos do OC Hub)
				// não devem derrubar o build — apenas avisamos, para correção no CMS.
				// Links quebrados em páginas que nós controlamos continuam sendo fatais.
				if (referrer && !PAGINAS_PROPRIAS.has(referrer)) {
					console.warn(`⚠️  [artigo] link aponta para rota inexistente: ${path} (em ${referrer})`);
					return;
				}
				throw new Error(message);
			},
			// Mesma regra para âncoras internas: artigos recuperados do site antigo
			// trazem índices apontando para ids que nem sempre sobreviveram.
			handleMissingId: ({ path, id, referrers, message }) => {
				if (referrers.every((r) => !PAGINAS_PROPRIAS.has(r))) {
					console.warn(`⚠️  [artigo] âncora não encontrada: ${path}#${id}`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
