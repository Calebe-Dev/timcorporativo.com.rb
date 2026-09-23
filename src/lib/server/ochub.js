// Configuração do OC Hub — SOMENTE build/servidor.
// O prefixo `$lib/server` faz o SvelteKit BLOQUEAR qualquer import acidental
// no cliente, garantindo que o OCHUB_API_TOKEN nunca vaze para o bundle do browser.
// `dynamic/private` em vez de `static/private`: o `static` é resolvido pelo
// Vite em tempo de compilação e ABORTA o build inteiro quando a variável não
// existe ("OCHUB_DIRECTUS_URL is not exported by virtual:env/static/private").
// Isso deixava o site refém do CMS para COMPILAR, mesmo com os 191 artigos já
// gravados em content/artigos/ — quem clonasse o repo sem o .env não conseguia
// gerar o site. Com `dynamic`, variável ausente vira `undefined` e o build
// segue com o snapshot local (ver `ochubConfigurado` e artigos.js).
import { env } from '$env/dynamic/private';
import { site } from '$lib/site.js';

/**
 * Config do cliente OcHub. Passada explicitamente aos helpers do SDK para não
 * depender de `process.env` estar populado durante `vite build`.
 */
export const ochubConfig = {
	directusUrl: env.OCHUB_DIRECTUS_URL,
	apiToken: env.OCHUB_API_TOKEN,
	siteUuid: env.OCHUB_SITE_UUID,
	logLevel: 'silent'
};

/**
 * O CMS só é consultado quando as três variáveis existem. Sem elas o build não
 * tenta conexão nenhuma — não há timeout, não há stack trace no log, e o
 * conteúdo vem inteiro do snapshot em content/artigos/.
 */
export const ochubConfigurado = Boolean(
	env.OCHUB_DIRECTUS_URL && env.OCHUB_API_TOKEN && env.OCHUB_SITE_UUID
);

// URL base dos artigos. O SDK monta o canonical como `${siteUrl}/${slug}`.
// Os posts vivem na RAIZ (/<slug>), como no WordPress original: assim cada URL
// já indexada pelo Google responde 200 no próprio endereço, sem redirect.
export const blogBaseUrl = site.url;

// A listagem de artigos saiu daqui: agora vive em $lib/server/artigos.js, que
// mescla o snapshot local (content/artigos/) com o CMS. Este módulo mantém só
// a configuração de conexão.
