<script>
	import { site, contact, faq, solutions } from '$lib/site.js';

	let {
		title = `${site.name}: TIM Empresa, Black, Fibra e UltraFibra`,
		description = site.description,
		path = '/',
		image = site.ogImage
	} = $props();

	const canonical = site.url + (path === '/' ? '/' : path);
	const imageAbs = image.startsWith('http') ? image : site.url + image;

	// Grafo JSON-LD consolidado (uma única fonte, sem @id conflitantes).
	const jsonld = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${site.url}/#organization`,
				name: site.name,
				legalName: site.legalName,
				url: `${site.url}/`,
				logo: `${site.url}${site.logo}`,
				description: `Representante autorizado TIM para empresas, operado pelo ${site.legalName}.`,
				telephone: '+55-15-3500-8940',
				email: contact.emails[0],
				sameAs: [contact.facebook],
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
				about: { '@id': `${site.url}/#organization` }
			},
			...solutions.map((s) => ({
				'@type': 'Service',
				name: s.name,
				serviceType: 'Telecomunicações empresariais',
				provider: { '@id': `${site.url}/#organization` },
				areaServed: { '@type': 'Country', name: 'Brasil' },
				description: s.text
			})),
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
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageAbs} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageAbs} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonld)}</` + `script>`}
</svelte:head>
