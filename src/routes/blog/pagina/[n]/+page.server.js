import { error } from '@sveltejs/kit';
import { todosArtigos } from '$lib/server/artigos.js';
import { fatiar, POR_PAGINA } from '$lib/blog/paginacao.js';

/** Mesma projeção da página 1 — sem `html_content`, que não aparece na lista. */
async function listagem() {
	const artigos = await todosArtigos();
	return artigos.map(({ id, title, slug, meta_description, keywords, published_at, created_at }) => ({
		id,
		title,
		slug,
		meta_description,
		keywords,
		date: published_at ?? created_at
	}));
}

// A página 1 é /blog, então esta rota começa na 2. Sem `entries()` o crawler do
// SvelteKit ainda acharia tudo pelos links de "Próxima", mas então a construção
// dependeria da paginação estar linkada corretamente — declarar aqui torna o
// build independente do markup.
export async function entries() {
	const total = Math.max(1, Math.ceil((await listagem()).length / POR_PAGINA));
	return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({ n: String(i + 2) }));
}

export async function load({ params }) {
	const items = await listagem();
	const totalPaginas = Math.max(1, Math.ceil(items.length / POR_PAGINA));
	const n = Number(params.n);

	// Só inteiro dentro da faixa. "/blog/pagina/1" cai aqui de propósito: a
	// primeira fatia já mora em /blog, e duas URLs para a mesma lista seria
	// conteúdo duplicado.
	if (!Number.isInteger(n) || n < 2 || n > totalPaginas) {
		error(404, 'Página do blog não encontrada');
	}

	return fatiar(items, n);
}
