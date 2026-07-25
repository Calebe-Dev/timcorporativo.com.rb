import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// Remove os @property do Tailwind 4 e destrava o fallback universal que ele
// próprio embute (semântica do Tailwind v3). Motivo: o validador CSS do W3C
// não implementa @property e acusava 61 "erros" falsos. Roda como PostCSS,
// ANTES do hash do arquivo — assim conteúdo novo = nome novo, e o cache
// imutável da borda nunca serve versão velha (um pós-build que reescrevia o
// arquivo pronto manteve o nome e deixou PoPs com a versão antiga por 1 ano).
// Seguro aqui: @layer properties é a primeira camada (utilities vencem) e o
// site não anima gradiente, único recurso que dependeria de tipo registrado.
const removerAtProperty = {
	postcssPlugin: 'remover-at-property',
	AtRule: {
		property(rule) {
			rule.remove();
		},
		supports(rule) {
			// Condição que o Tailwind usa para detectar navegador sem @property;
			// sem os @property, o fallback passa a valer para todos.
			if (rule.params.includes('margin-trim')) rule.replaceWith(rule.nodes);
		}
	}
};

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	css: { postcss: { plugins: [removerAtProperty] } },
	server: {
		fs: {
			// Permite que o import.meta.glob leia os .md em /docs (fora de src/).
			allow: ['..', '.']
		}
	}
});
