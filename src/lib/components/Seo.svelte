<script>
	import { site, contact, faq, solutions } from '$lib/site.js';

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
	const jsonld = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				// LocalBusiness além de Organization: temos endereço físico e
				// telefone locais — habilita o entendimento de negócio local
				// (Sorocaba/SP) sem perder o vínculo de organização nacional.
				'@type': ['Organization', 'LocalBusiness'],
				'@id': `${site.url}/#organization`,
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
				},
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
			{
				'@type': 'WebSite',
				'@id': `${site.url}/#website`,
				url: `${site.url}/`,
				name: site.name,
				inLanguage: 'pt-BR',
				publisher: { '@id': `${site.url}/#organization` }
			},
			{
				'@type': 'WebPage',
				'@id': canonical,
				url: canonical,
				name: title,
				description,
				inLanguage: 'pt-BR',
				isPartOf: { '@id': `${site.url}/#website` },
				about: { '@id': `${site.url}/#organization` },
				author: { '@id': `${site.url}/#organization` },
				primaryImageOfPage: { '@type': 'ImageObject', url: imageAbs },
				// Data do build (SSG): o site inteiro é regerado a cada deploy.
				dateModified: new Date().toISOString().slice(0, 10)
			},
			// Breadcrumb apenas fora da home — na raiz seria um item só, ruído.
			...(path !== '/'
				? [
						{
							'@type': 'BreadcrumbList',
							'@id': `${canonical}#breadcrumb`,
							itemListElement: [
								{ '@type': 'ListItem', position: 1, name: 'Início', item: `${site.url}/` },
								{ '@type': 'ListItem', position: 2, name: title, item: canonical }
							]
						}
					]
				: []),
			...(services
				? solutions.map((s) => ({
						'@type': 'Service',
						'@id': serviceId(s.name),
						name: s.name,
						serviceType: 'Telecomunicações empresariais',
						provider: { '@id': `${site.url}/#organization` },
						areaServed: { '@type': 'Country', name: 'Brasil' },
						description: s.text
					}))
				: []),
			// FAQPage só na home: é onde o FAQ aparece de fato. Emitir a marcação
			// em páginas sem o conteúdo visível viola a diretriz de dados
			// estruturados do Google e arrisca ação manual.
			...(path === '/'
				? [
						{
							'@type': 'FAQPage',
							'@id': `${canonical}#faq`,
							mainEntity: faq.map((f) => ({
								'@type': 'Question',
								name: f.q,
								acceptedAnswer: { '@type': 'Answer', text: f.a }
							}))
						}
					]
				: [])
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
