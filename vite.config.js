import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// NÃO remover os @property do Tailwind para agradar o validador W3C: já foi
// tentado (plugin PostCSS que os apagava e destravava o fallback universal) e
// causou falhas de repintura no Chrome — overlay de gradiente sumindo ao
// alternar guias/extensões. Os "erros" do validador são falso positivo dele,
// que não implementa @property; o CSS do Tailwind fica como o fabricante gera.

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		fs: {
			// Permite que o import.meta.glob leia os .md em /docs (fora de src/).
			allow: ['..', '.']
		}
	}
});
