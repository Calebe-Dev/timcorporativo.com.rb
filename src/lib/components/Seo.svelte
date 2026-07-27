<script>
	import { site, faq, solutions } from '$lib/site.js';
	import { organizationNode, websiteNode, breadcrumbNode, faqNode, ORG_ID, SITE_ID } from '$lib/schema.js';

	let {
		// Separador "|" (Marca | Tópico): padrão que melhora CTR na SERP.
		title = `${site.name} | TIM Empresa: Black, Fibra e UltraFibra`,
		description = site.description,
		path = '/',
		image = site.ogImage,
		keywords = site.keywords,
		// Service + OfferCatalog só onde os planos aparecem de fato (home).
		// Página legal/blog marca apenas WebPage + Breadcrumb — dado estruturado
		// deve refletir o conteúdo visível da página.
		services = path === '/'
	} = $props();

	const canonical = site.url + (path === '/' ? '/' : path);
	const imageAbs = image.startsWith('http') ? image : site.url + image;
	// Dimensões/alt valem para a imagem padrão do site; quem passa outra imagem
	// não recebe medidas erradas.
	const isDefaultImage = image === site.ogImage;

	// Slug estável para o @id de cada serviço, para o catálogo poder referenciá-los.
	const serviceId = (name) =>
		`${site.url}/#service-${name.toLowerCase().replace(/\s+/g, '-')}`;

	// Grafo JSON-LD consolidado (uma única fonte, sem @id conflitantes).
	// Organization e WebSite vêm de $lib/schema.js, compartilhados com as landing
	// pages de /solucoes/ — mesma entidade, mesmo @id, uma definição só.
	const jsonld = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				...organizationNode(),
				...(services
					? {
							hasOfferCatalog: {
								'@type': 'OfferCatalog',
								name: 'Planos TIM Empresa',
								itemListElement: solutions.map((s) => ({
									'@type': 'Offer',
									itemOffered: { '@id': serviceId(s.name) }
								}))
							}
						}
					: {})
			},
			websiteNode(),
			{
				'@type': 'WebPage',
				'@id': canonical,
				url: canonical,
				name: title,
				description,
				inLanguage: 'pt-BR',
				isPartOf: { '@id': SITE_ID },
				about: { '@id': ORG_ID },
				author: { '@id': ORG_ID },
				primaryImageOfPage: { '@type': 'ImageObject', url: imageAbs },
				// Data do build (SSG): o site inteiro é regerado a cada deploy.
				dateModified: new Date().toISOString().slice(0, 10)
			},
			// Breadcrumb apenas fora da home — na raiz seria um item só, ruído.
			...(path !== '/' ? [breadcrumbNode(canonical, [{ name: title, item: canonical }])] : []),
			...(services
				? solutions.map((s) => ({
						'@type': 'Service',
						'@id': serviceId(s.name),
						name: s.name,
						serviceType: 'Telecomunicações empresariais',
						provider: { '@id': ORG_ID },
						areaServed: { '@type': 'Country', name: 'Brasil' },
						description: s.text
					}))
				: []),
			// FAQPage só na home: é onde o FAQ aparece de fato. Emitir a marcação
			// em páginas sem o conteúdo visível viola a diretriz de dados
			// estruturados do Google e arrisca ação manual.
			...(path === '/' ? [faqNode(canonical, faq)] : [])
		]
	};
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

	{@html `<script type="application/ld+json">${JSON.stringify(jsonld)}</` + `script>`}
</svelte:head>
