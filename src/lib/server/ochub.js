// Configuração do OC Hub — SOMENTE build/servidor.
// O prefixo `$lib/server` faz o SvelteKit BLOQUEAR qualquer import acidental
// no cliente, garantindo que o OCHUB_API_TOKEN nunca vaze para o bundle do browser.
import { OCHUB_DIRECTUS_URL, OCHUB_API_TOKEN, OCHUB_SITE_UUID } from '$env/static/private';
import { site } from '$lib/site.js';

/**
 * Config do cliente OcHub. Passada explicitamente aos helpers do SDK para não
 * depender de `process.env` estar populado durante `vite build`.
 */
export const ochubConfig = {
	directusUrl: OCHUB_DIRECTUS_URL,
	apiToken: OCHUB_API_TOKEN,
	siteUuid: OCHUB_SITE_UUID,
	logLevel: 'silent'
};

// URL base das rotas do blog. O SDK monta o canonical como `${siteUrl}/${slug}`,
// então incluímos `/blog` aqui para o canonical/JSON-LD apontarem para /blog/<slug>.
export const blogBaseUrl = `${site.url}/blog`;
