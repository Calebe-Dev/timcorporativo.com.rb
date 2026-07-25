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
		// virar <link>. O bundle inteiro tem ~45 KB, então cabe: some uma
		// requisição bloqueante a menos no caminho crítico de TODA página.
		//
		// Era o gargalo real do LCP da home — a imagem do hero terminava de baixar
		// aos 304ms mas só pintava aos 482ms, esperando este CSS chegar e ser
		// parseado (172ms de elementRenderDelay + 159ms de bloqueio no Lighthouse).
		//
		// Se o CSS crescer além do limite o SvelteKit volta a emitir <link> em
		// silêncio — se a nota de performance cair sem motivo aparente, confira
		// aqui primeiro.
		inlineStyleThreshold: 50000,

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
