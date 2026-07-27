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
 * Organization + LocalBusiness. Endereço e telefone locais reais (Sorocaba/SP)
 * habilitam o entendimento de negócio local sem perder o vínculo nacional.
 */
export function organizationNode() {
	return {
		'@type': ['Organization', 'LocalBusiness'],
		'@id': ORG_ID,
		name: site.name,
		legalName: site.legalName,
		url: `${site.url}/`,
		logo: `${site.url}${site.logo}`,
		image: `${site.url}${site.logo}`,
		description: `Representante autorizado TIM para empresas, operado pelo ${site.legalName}. Venda consultiva de planos TIM Empresa: TIM Black Empresa, TIM Fibra e UltraFibra.`,
		telephone: '+55-15-3500-8940',
		email: contact.emails[0],
		// Sem preço tabelado: a venda é consultiva, por proposta.
		priceRange: 'Sob consulta',
		sameAs: [contact.facebook, contact.instagram, contact.linkedin],
		areaServed: { '@type': 'Country', name: 'Brasil' },
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Rua Tereza Lopes, 677 - Vila Hortência',
			addressLocality: contact.addressLocality,
			addressRegion: contact.addressRegion,
			addressCountry: 'BR'
		},
		identifier: { '@type': 'PropertyValue', propertyID: 'CNPJ', value: contact.cnpj },
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
