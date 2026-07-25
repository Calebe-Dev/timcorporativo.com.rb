// Baixa TODOS os artigos publicados do OC Hub e os grava em content/artigos/
// (um JSON por slug). É o snapshot que torna o site independente do CMS para o
// acervo existente — o CMS pode ser limpo sem o site perder nenhuma página.
//
// Uso:  node scripts/baixar-artigos.mjs
// Lê OCHUB_DIRECTUS_URL / OCHUB_API_TOKEN / OCHUB_SITE_UUID do .env da raiz.
//
// Re-executar é seguro: sobrescreve os JSONs com o estado atual do CMS.
// Depois de limpar o CMS, NÃO rode de novo sem pensar — o snapshot é a única
// cópia do acervo antigo (fora o histórico do git).

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const destino = join(raiz, 'content', 'artigos');

// .env simples (KEY=valor, sem interpolação) — evita dependência de dotenv.
const env = {};
for (const linha of readFileSync(join(raiz, '.env'), 'utf8').split('\n')) {
	const m = linha.match(/^([A-Z_]+)=("?)(.*)\2\s*$/);
	if (m) env[m[1]] = m[3];
}

const { OcHubCMS } = await import('@grupooc/ochub-sdk');
const cms = new OcHubCMS({
	config: {
		directusUrl: env.OCHUB_DIRECTUS_URL,
		apiToken: env.OCHUB_API_TOKEN,
		siteUuid: env.OCHUB_SITE_UUID,
		logLevel: 'silent'
	}
});

const artigos = await cms.getAllArticles();

// Dedup por slug mantendo o mais recente — mesma regra do site (o CMS tem
// slugs duplicados; a rota /<slug> só pode servir um).
const data = (a) => a.date_updated ?? a.published_at ?? a.created_at ?? '';
const porSlug = new Map();
for (const a of artigos) {
	if (!a.slug) continue;
	const atual = porSlug.get(a.slug);
	if (!atual || data(a) > data(atual)) porSlug.set(a.slug, a);
}

mkdirSync(destino, { recursive: true });
for (const a of porSlug.values()) {
	// Só os campos que o site usa — id/site_id ficam para rastreabilidade.
	const registro = {
		id: a.id,
		slug: a.slug,
		title: a.title,
		meta_description: a.meta_description ?? '',
		keywords: a.keywords ?? [],
		published_at: a.published_at ?? null,
		created_at: a.created_at ?? null,
		date_updated: a.date_updated ?? null,
		html_content: a.html_content ?? ''
	};
	writeFileSync(join(destino, `${a.slug}.json`), JSON.stringify(registro, null, '\t') + '\n');
}

console.log(
	`Snapshot: ${porSlug.size} artigos gravados em content/artigos/ ` +
		`(${artigos.length} no CMS, ${artigos.length - porSlug.size} duplicados por slug descartados). ` +
		`Total agora no diretório: ${readdirSync(destino).filter((f) => f.endsWith('.json')).length} arquivos.`
);
