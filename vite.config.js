import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		fs: {
			// Permite que o import.meta.glob leia os .md em /docs (fora de src/).
			allow: ['..', '.']
		}
	}
});
