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

// URL base dos artigos. O SDK monta o canonical como `${siteUrl}/${slug}`.
// Os posts vivem na RAIZ (/<slug>), como no WordPress original: assim cada URL
// já indexada pelo Google responde 200 no próprio endereço, sem redirect.
export const blogBaseUrl = site.url;

// Lista de artigos para o mapa do site, que aparece em TODAS as páginas.
// Sem memoização isto viraria uma chamada ao CMS por página pré-renderizada
// (~190 no build). A promise é guardada no módulo: o build roda num processo só,
// então o CMS é consultado uma única vez.
let promessaArtigos;

export function listarArtigos() {
	if (!promessaArtigos) {
		promessaArtigos = (async () => {
			const { OcHubCMS } = await import('@grupooc/ochub-sdk');
			const cms = new OcHubCMS({ config: ochubConfig });
			const artigos = await cms.getAllArticles();
			const vistos = new Set();
			return artigos
				.filter((a) => a.slug && !vistos.has(a.slug) && vistos.add(a.slug))
				.map((a) => ({
					slug: a.slug,
					title: a.title,
					// Usada só no servidor (afinidade do "Leia também") — as loads
					// devolvem ao cliente apenas slug/title, sem este campo.
					keywords: a.keywords ?? '',
					date: a.published_at ?? a.created_at
				}))
				.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
		})();
	}
	return promessaArtigos;
}
