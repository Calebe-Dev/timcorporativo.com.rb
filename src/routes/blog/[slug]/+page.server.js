import { createArticleEntries, createArticleLoad } from '@grupooc/ochub-sdk/ssg/sveltekit';
import { ochubConfig, blogBaseUrl } from '$lib/server/ochub.js';

// Gera uma rota estática para cada artigo publicado do site (no build).
export const entries = createArticleEntries(ochubConfig);

// Busca o artigo pelo slug e monta o bloco de SEO (title/meta/OG/JSON-LD).
// `siteUrl: blogBaseUrl` faz o canonical apontar para /blog/<slug>.
export const load = createArticleLoad({ config: ochubConfig, siteUrl: blogBaseUrl });
