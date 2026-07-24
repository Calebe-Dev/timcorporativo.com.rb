import { marked } from 'marked';

// Lê, em tempo de build, todos os .md dentro de /docs (na raiz do repo).
// eager: o conteúdo já vem embutido no bundle — perfeito para SSG.
const rawFiles = import.meta.glob('/docs/**/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

marked.setOptions({ gfm: true, breaks: false });

/** slug a partir do caminho: '/docs/mapa-do-site/README.md' -> 'mapa-do-site/README' */
function toSlug(path) {
	return path.replace(/^\/docs\//, '').replace(/\.md$/, '');
}

/** Extrai o primeiro heading `# ...` como título; senão usa o nome do arquivo. */
function extractTitle(md, slug) {
	const m = md.match(/^\s*#\s+(.+?)\s*$/m);
	if (m) return m[1].replace(/\s*[—-].*$/, '').trim() || m[1].trim();
	const base = slug.split('/').pop();
	return base;
}

function fullTitle(md, slug) {
	const m = md.match(/^\s*#\s+(.+?)\s*$/m);
	return m ? m[1].trim() : slug.split('/').pop();
}

/** Normaliza um caminho relativo tipo dir + '../x' -> resolvido. */
function resolveRelative(dir, target) {
	const parts = (dir ? dir.split('/') : []).concat(target.split('/'));
	const out = [];
	for (const p of parts) {
		if (p === '' || p === '.') continue;
		if (p === '..') out.pop();
		else out.push(p);
	}
	return out.join('/');
}

/** Reescreve links relativos .md para as rotas /docs/... do próprio site. */
function rewriteMdLinks(html, slug) {
	const dir = slug.includes('/') ? slug.slice(0, slug.lastIndexOf('/')) : '';
	return html.replace(/href="([^"]+)"/g, (whole, href) => {
		if (/^(https?:|mailto:|tel:|#|\/)/i.test(href)) return whole;
		const [path, hash] = href.split('#');
		if (!/\.md$/i.test(path)) return whole;
		const resolved = resolveRelative(dir, path.replace(/\.md$/i, ''));
		return `href="/docs/${resolved}${hash ? '#' + hash : ''}"`;
	});
}

// Índice de todos os documentos markdown.
const bySlug = new Map();
for (const [path, md] of Object.entries(rawFiles)) {
	const slug = toSlug(path);
	bySlug.set(slug, {
		slug,
		path,
		md,
		title: extractTitle(md, slug),
		heading: fullTitle(md, slug),
		group: slug.includes('/') ? slug.slice(0, slug.lastIndexOf('/')) : '(raiz)',
		words: md.trim().split(/\s+/).length
	});
}

export function getAllDocs() {
	return [...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug, 'pt-BR'));
}

/** Documentos agrupados por pasta, para a navegação. */
export function getGroupedDocs() {
	const groups = new Map();
	for (const doc of getAllDocs()) {
		if (!groups.has(doc.group)) groups.set(doc.group, []);
		groups.get(doc.group).push(doc);
	}
	// pasta primeiro, raiz por último
	return [...groups.entries()]
		.sort(([a], [b]) => {
			if (a === '(raiz)') return 1;
			if (b === '(raiz)') return -1;
			return a.localeCompare(b, 'pt-BR');
		})
		.map(([group, docs]) => ({ group, docs }));
}

export function getDoc(slug) {
	const doc = bySlug.get(slug);
	if (!doc) return null;
	const html = rewriteMdLinks(marked.parse(doc.md), slug);
	return { ...doc, html };
}

export function getSlugs() {
	return [...bySlug.keys()];
}
