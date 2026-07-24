import { getGroupedDocs } from '$lib/docs.js';

export function load() {
	return { grouped: getGroupedDocs() };
}
