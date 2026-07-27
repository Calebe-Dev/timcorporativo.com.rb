<script>
	import { site } from '$lib/site.js';
	import {
		organizationNode,
		websiteNode,
		breadcrumbNode,
		faqNode,
		jsonLdScript,
		ORG_ID,
		SITE_ID
	} from '$lib/schema.js';

	let {
		title,
		description,
		keywords,
		// Caminho com barra final — é a forma canônica servida pela Pages.
		path,
		image = site.ogImage,
		// { name, serviceType, description, areaServed? } — o serviço que a página
		// vende de fato. Vira o nó Service, referenciado pelo WebPage.
		service,
		faq = []
	} = $props();

	const canonical = site.url + path;
	const imageAbs = image.startsWith('http') ? image : site.url + image;
	const isDefaultImage = image === site.ogImage;
	const serviceIdAbs = `${canonical}#service`;

	// Grafo único por página. Organization e WebSite repetem o @id global de
	// propósito: cada documento precisa ser autossuficiente, e @id igual é o que
	// permite ao Google reconciliar as páginas como a mesma entidade.
	const grafo = [
		organizationNode(),
		websiteNode(),
		{
			'@type': 'WebPage',
			'@id': canonical,
			url: canonical,
			name: title,
			description,
			inLanguage: 'pt-BR',
			isPartOf: { '@id': SITE_ID },
			about: { '@id': serviceIdAbs },
			author: { '@id': ORG_ID },
			publisher: { '@id': ORG_ID },
			primaryImageOfPage: { '@type': 'ImageObject', url: imageAbs },
			// Data do build (SSG): o site é regerado inteiro a cada deploy.
			dateModified: new Date().toISOString().slice(0, 10)
		},
		breadcrumbNode(canonical, [
			{ name: 'Soluções', item: `${site.url}/solucoes/` },
			{ name: service.name, item: canonical }
		]),
		{
			'@type': 'Service',
			'@id': serviceIdAbs,
			name: service.name,
			serviceType: service.serviceType,
			description: service.description,
			provider: { '@id': ORG_ID },
			areaServed: service.areaServed ?? { '@type': 'Country', name: 'Brasil' },
			// Sem Offer com preço: a venda é consultiva e inventar faixa de valor em
			// dado estruturado é motivo de ação manual por spam de rich result.
			availableChannel: {
				'@type': 'ServiceChannel',
				serviceUrl: canonical,
				servicePhone: { '@type': 'ContactPoint', telephone: '+55-15-3500-8940' }
			}
		},
		// Sem HowTo: o Google aposentou o rich result em 2023 e hoje ignora a
		// marcação. Os passos continuam na página porque servem ao leitor — só não
		// há motivo para descrevê-los em dado estruturado que ninguém consome.
		//
		// FAQPage fica, mas como sinal semântico: desde 2023 o rich result de FAQ
		// só aparece para fontes governamentais e de saúde. Não espere estrela na
		// SERP — o valor é a estrutura ficar explícita para motores de resposta.
		...(faq.length ? [faqNode(canonical, faq)] : [])
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="{site.name} — {site.legalName}" />
	<meta name="publisher" content={site.legalName} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageAbs} />
	{#if isDefaultImage}
		<meta property="og:image:type" content="image/jpeg" />
		<meta property="og:image:width" content={String(site.ogImageWidth)} />
		<meta property="og:image:height" content={String(site.ogImageHeight)} />
		<meta property="og:image:alt" content={site.ogImageAlt} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageAbs} />
	{#if isDefaultImage}
		<meta name="twitter:image:alt" content={site.ogImageAlt} />
	{/if}

	{@html jsonLdScript(grafo)}
</svelte:head>
