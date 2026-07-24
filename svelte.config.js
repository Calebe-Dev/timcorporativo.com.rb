import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
		prerender: {
			// Links quebrados DENTRO do conteúdo dos artigos (vindos do OC Hub)
			// não devem derrubar o build — apenas avisamos, para correção no CMS.
			// Links quebrados em páginas que nós controlamos continuam sendo fatais.
			handleHttpError: ({ path, referrer, message }) => {
				if (referrer && referrer.startsWith('/blog/')) {
					console.warn(`⚠️  [blog] link do artigo aponta para rota inexistente: ${path} (em ${referrer})`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
