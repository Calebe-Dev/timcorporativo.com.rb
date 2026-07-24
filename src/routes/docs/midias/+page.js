import { imagesByDir, fonts, counts } from '$lib/media.js';

export function load() {
	return { groups: imagesByDir(), fonts, counts };
}
