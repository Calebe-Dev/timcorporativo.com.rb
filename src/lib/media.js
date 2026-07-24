import manifest from './media.json';

/** Todos os itens de mídia importados do site original (wp-content/uploads). */
export const media = manifest;

export const images = manifest.filter((m) => m.mime.startsWith('image/'));
export const fonts = manifest.filter((m) => m.mime.startsWith('font/') || m.mime.includes('font'));

/** Agrupa por pasta de upload (ex.: 2026/05) para exibição. */
export function imagesByDir() {
	const groups = new Map();
	for (const m of images) {
		if (!groups.has(m.dir)) groups.set(m.dir, []);
		groups.get(m.dir).push(m);
	}
	return [...groups.entries()]
		.sort(([a], [b]) => b.localeCompare(a)) // mais recentes primeiro
		.map(([dir, items]) => ({ dir, items }));
}

export const counts = {
	total: manifest.length,
	images: images.length,
	fonts: fonts.length
};
