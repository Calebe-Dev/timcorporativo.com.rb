// Nós JSON-LD compartilhados entre a home (Seo.svelte) e as landing pages de
// solução (SeoSolucao.svelte).
//
// Motivo de existir: os dois emitem a MESMA entidade Organization, com o mesmo
// @id. Duplicar o objeto em dois componentes garante que um dia eles divirjam —
// telefone atualizado num, endereço no outro — e o Google passe a ver a mesma
// @id descrevendo coisas diferentes conforme a página. Aqui a fonte é uma só.

import { site, contact } from '$lib/site.js';

export const ORG_ID = `${site.url}/#organization`;
export const SITE_ID = `${site.url}/#website`;

/**
 * Organization + LocalBusiness.
 * NAP-JUMIRIM 2026-09-10 — anterior: "Endereço e telefone locais reais (Sorocaba/SP)".
 * O endereço local real é o da unidade de Jumirim/SP — a única com perfil no
 * Google. Sorocaba permanece como operação (central online) e como área
 * atendida, sem endereço de rua declarado.
 */
export function organizationNode() {
	// GRUPO-OC-OCULTO 2026-09-09 — perfis sociais ocultos em site.js: entra só o que
	// existir e, sem nenhum, a chave sameAs some (array com null invalidaria o nó).
	// NAP-JUMIRIM 2026-09-10 — anterior: const sameAs = [contact.facebook, contact.instagram, contact.linkedin].filter(Boolean);
	// O perfil no Google da unidade de Jumirim entra no sameAs: é a única
	// referência externa da entidade que sobrou depois da retirada da marca.
	const sameAs = [
		contact.facebook,
		contact.instagram,
		contact.linkedin,
		contact.googleProfile
	].filter(Boolean);
	return {
		'@type': ['Organization', 'LocalBusiness'],
		'@id': ORG_ID,
		name: site.name,
		legalName: site.legalName,
		// ENTIDADE-OC-TEL 2026-09-10 — CNPJ como taxID (campo que o schema.org
		// define para identificação fiscal) e como identifier tipado, que é a
		// forma que os motores de resposta leem sem adivinhar o país.
		taxID: contact.cnpj,
		identifier: { '@type': 'PropertyValue', propertyID: 'CNPJ', value: contact.cnpj },
		url: `${site.url}/`,
		logo: `${site.url}${site.logo}`,
		image: `${site.url}${site.logo}`,
		// ENTIDADE-OC-TEL 2026-09-10 — anterior: description: `Representante autorizado TIM para empresas, operado pelo ${site.legalName}. Venda consultiva de planos TIM Empresa: TIM Black Empresa, TIM Fibra e UltraFibra.`,
		// "pelo" → "pela": a razão social real é feminina (OC Telecomunicações LTDA).
		description: `Representante autorizado TIM para empresas, operado pela ${site.legalName}. Venda consultiva de planos TIM Empresa: TIM Black Empresa, TIM Fibra e UltraFibra.`,
		// NAP-JUMIRIM 2026-09-10 — anterior: telephone: '+55-15-3500-8940',
		telephone: '+55-15-3100-0058',
		email: contact.emails[0],
		// Sem preço tabelado: a venda é consultiva, por proposta.
		priceRange: 'Sob consulta',
		// GRUPO-OC-OCULTO 2026-09-09 — original: sameAs: [contact.facebook, contact.instagram, contact.linkedin],
		...(sameAs.length ? { sameAs } : {}),
		areaServed: { '@type': 'Country', name: 'Brasil' },
		// NAP-JUMIRIM 2026-09-10 — anterior: streetAddress: 'Rua Tereza Lopes, 677 - Vila Hortência',
		// (e sem postalCode). Um endereço só na rede: a unidade de Jumirim/SP.
		address: {
			'@type': 'PostalAddress',
			streetAddress: contact.streetAddress,
			addressLocality: contact.addressLocality,
			addressRegion: contact.addressRegion,
			postalCode: contact.postalCode,
			addressCountry: 'BR'
		},
		// NAP-JUMIRIM 2026-09-10 — coordenadas da unidade e mapa apontando para o
		// perfil no Google, que é o que valida o endereço para o buscador.
		geo: {
			'@type': 'GeoCoordinates',
			latitude: contact.geo.latitude,
			longitude: contact.geo.longitude
		},
		hasMap: contact.googleProfile,
		// CNPJ-REMOVIDO 2026-09-10 — original:
		// identifier: { '@type': 'PropertyValue', propertyID: 'CNPJ', value: contact.cnpj },
		// ENTIDADE-OC-TEL 2026-09-10 — restaurado (com o CNPJ novo) logo após `name`,
		// junto de legalName e taxID: os três campos da entidade ficam lado a lado.
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+55-15-99651-0375',
			contactType: 'sales',
			areaServed: 'BR',
			availableLanguage: ['pt-BR']
		}
	};
}

export function websiteNode() {
	return {
		'@type': 'WebSite',
		'@id': SITE_ID,
		url: `${site.url}/`,
		name: site.name,
		inLanguage: 'pt-BR',
		publisher: { '@id': ORG_ID }
	};
}

/** Trilha Início › Soluções › página. `itens` são os degraus após "Início". */
export function breadcrumbNode(canonical, itens) {
	return {
		'@type': 'BreadcrumbList',
		'@id': `${canonical}#breadcrumb`,
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Início', item: `${site.url}/` },
			...itens.map((i, n) => ({
				'@type': 'ListItem',
				position: n + 2,
				name: i.name,
				item: i.item
			}))
		]
	};
}

/**
 * FAQPage. Só chame quando as perguntas estiverem VISÍVEIS na página — é a
 * diretriz de dados estruturados do Google, e marcar conteúdo ausente rende
 * ação manual. O Faq.svelte usa <details>, então o texto está no HTML mesmo
 * recolhido, que é a forma aceita.
 */
export function faqNode(canonical, faq) {
	return {
		'@type': 'FAQPage',
		'@id': `${canonical}#faq`,
		mainEntity: faq.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};
}

/** Serialização segura para <script type="application/ld+json">. */
export function jsonLdScript(grafo) {
	const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo }).replace(
		/</g,
		'\\u003c'
	);
	return `<script type="application/ld+json">${json}</` + `script>`;
}
