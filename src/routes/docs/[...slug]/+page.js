import { error } from '@sveltejs/kit';
import { getDoc, getSlugs } from '$lib/docs.js';

// Gera uma entrada estática para cada documento markdown.
export function entries() {
	return getSlugs().map((slug) => ({ slug }));
}

export function load({ params }) {
	const doc = getDoc(params.slug);
	if (!doc) throw error(404, `Documento não encontrado: ${params.slug}`);
	return { doc };
}
