// Fonte ÚNICA de artigos do site: snapshot local + OC Hub, mesclados por slug.
//
// O acervo (189 artigos) vive em content/artigos/*.json — baixado do CMS por
// scripts/baixar-artigos.mjs. Isso torna o site independente do OC Hub para o
// conteúdo existente: o CMS pode ser limpo sem nenhuma URL indexada sumir.
// O CMS continua sendo consultado no build e PREVALECE sobre o snapshot no
// mesmo slug (artigo editado/novo lá aparece aqui); se estiver vazio ou fora
// do ar, o build segue só com o snapshot.

import { ochubConfig } from './ochub.js';

// GRUPO-OC-REDIRECT 2026-09-09 — conteúdo sobre o Grupo OC → home (reverter: apagar este bloco)
// Artigos com "Grupo OC" no título/slug. Saem da geração (não viram /<slug>/,
// não entram no sitemap, no /blog, no mapa do site nem no "Leia também") para
// que a regra 301 → / em static/_redirects não colida com página viva. Os JSON
// em content/artigos/ ficam intactos. Reverter = apagar este bloco, o filtro em
// todosArtigos(), o desvio em routes/solucoes/[slug]/+page.server.js e as 6
// regras do _redirects.
export const SLUGS_OCULTOS_GRUPO_OC = [
	'tim-black-empresa-descontos-progressivos-grupo-oc',
	'consultoria-tim-black-empresa-solucoes-corporativas-com-grupo-oc',
	'telefone-tim-empresas-consultoria',
	'tim-empresa-mei-microempresas-planos-sorocaba',
	'tim-empresas-planos-corporativos-descontos-progressivos-guia',
	'tim-empresas-telefone-atendimento-2026',
];

// Vite embute os JSONs no bundle do servidor (só existe durante o prerender).
const snapshot = import.meta.glob('/content/artigos/*.json', { eager: true, import: 'default' });

const dataEdicao = (a) => a.date_updated ?? a.published_at ?? a.created_at ?? '';
const dataPublicacao = (a) => a.published_at ?? a.created_at ?? '';

let promessa;

/** Todos os artigos (campos completos, com html_content), do mais novo ao mais velho. */
export function todosArtigos() {
	if (!promessa) {
		promessa = (async () => {
			const porSlug = new Map();
			for (const a of Object.values(snapshot)) {
				if (a?.slug) porSlug.set(a.slug, a);
			}

			try {
				const { OcHubCMS } = await import('@grupooc/ochub-sdk');
				const cms = new OcHubCMS({ config: ochubConfig });
				let novos = 0;
				for (const a of await cms.getAllArticles()) {
					if (!a.slug) continue;
					const local = porSlug.get(a.slug);
					if (!local) novos++;
					// >= : em empate de data o CMS vence — é a cópia "viva".
					if (!local || dataEdicao(a) >= dataEdicao(local)) porSlug.set(a.slug, a);
				}
				console.log(`[artigos] ${porSlug.size} no total (${novos} só no CMS, fora do snapshot)`);
			} catch (e) {
				console.warn(
					'[artigos] OC Hub indisponível — build segue só com o snapshot local:',
					String(e).slice(0, 160)
				);
			}

			// GRUPO-OC-OCULTO 2026-09-09 — original:
			// return [...porSlug.values()].sort((x, y) =>
			// 	dataPublicacao(y).localeCompare(dataPublicacao(x))
			// );
			// Ponto único de origem: listarArtigos() deriva daqui e herda o filtro.
			const visiveis = [...porSlug.values()].filter(
				(a) => !SLUGS_OCULTOS_GRUPO_OC.includes(a.slug)
			);
			if (visiveis.length !== porSlug.size) {
				console.log(`[artigos] ${porSlug.size - visiveis.length} ocultos (Grupo OC → 301 para a home)`);
			}
			return visiveis.sort((x, y) => dataPublicacao(y).localeCompare(dataPublicacao(x)));
		})();
	}
	return promessa;
}

/**
 * Visão leve para mapa do site, "Leia também" e listagens: sem html_content.
 * `keywords` vira string (o CMS entrega array) para a tokenização de afinidade.
 * Herda o filtro SLUGS_OCULTOS_GRUPO_OC de todosArtigos() — não filtra de novo.
 */
export async function listarArtigos() {
	return (await todosArtigos()).map((a) => ({
		slug: a.slug,
		title: a.title,
		keywords: Array.isArray(a.keywords) ? a.keywords.join(' ') : (a.keywords ?? ''),
		date: a.published_at ?? a.created_at
	}));
}
