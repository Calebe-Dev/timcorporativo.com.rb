<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SiteMap from '$lib/components/SiteMap.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import LpProva from '$lib/components/lp/LpProva.svelte';
	import { site, whatsappLink } from '$lib/site.js';
	import {
		organizationNode,
		websiteNode,
		breadcrumbNode,
		jsonLdScript,
		ORG_ID,
		SITE_ID
	} from '$lib/schema.js';

	let { data } = $props();

	const canonical = `${site.url}/solucoes/`;
	const title = 'Soluções TIM para empresas | Conectividade, mobilidade e voz';
	const description =
		'Link dedicado, fibra empresarial, PABX em nuvem, SD-WAN, planos móveis e gestão de linhas. Consultoria de um representante autorizado TIM com mais de 15 anos em telecom B2B.';

	// CollectionPage + ItemList: descreve o hub pelo que ele é — uma coleção
	// ordenada de páginas de solução — e dá ao Google a lista completa de uma vez.
	const todas = data.grupos.flatMap((g) => g.paginas);
	const grafo = [
		organizationNode(),
		websiteNode(),
		{
			'@type': 'CollectionPage',
			'@id': canonical,
			url: canonical,
			name: title,
			description,
			inLanguage: 'pt-BR',
			isPartOf: { '@id': SITE_ID },
			about: { '@id': ORG_ID },
			publisher: { '@id': ORG_ID },
			dateModified: new Date().toISOString().slice(0, 10),
			mainEntity: {
				'@type': 'ItemList',
				numberOfItems: todas.length,
				itemListElement: todas.map((lp, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					name: lp.cardTitulo,
					url: `${site.url}/solucoes/${lp.slug}/`
				}))
			}
		},
		breadcrumbNode(canonical, [{ name: 'Soluções', item: canonical }])
	];
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
	<meta property="og:image" content={site.url + site.ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={site.url + site.ogImage} />
	{@html jsonLdScript(grafo)}
</svelte:head>

<Header />

<main>
	<section class="relative isolate overflow-hidden bg-gradient-to-br from-tim-950 via-tim-800 to-tim-600 text-white">
		<div
			class="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-tim-400/20 blur-3xl"
			aria-hidden="true"
		></div>
		<div class="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
			<nav aria-label="Trilha de navegação" class="mb-5 text-xs text-white/70">
				<ol class="flex items-center gap-1.5">
					<li><a href="/" class="hover:text-white hover:underline">Início</a></li>
					<li aria-hidden="true">›</li>
					<li class="text-white/90" aria-current="page">Soluções</li>
				</ol>
			</nav>
			<h1 class="max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
				Soluções TIM para empresas, explicadas por quem implanta
			</h1>
			<p class="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
				{data.total} guias de decisão sobre conectividade, mobilidade e voz corporativa — o critério técnico
				de cada escolha, sem jargão comercial. Escrito pelo time do Grupo OC, representante autorizado
				TIM há mais de 15 anos.
			</p>
			<div class="mt-9 flex flex-col gap-3 sm:flex-row">
				<a
					href="#fale-conosco"
					class="rounded-full bg-accent-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-accent-700 sm:text-base"
				>
					Falar com um consultor
				</a>
				<a
					href={whatsappLink()}
					target="_blank"
					rel="noopener"
					class="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-tim-800 transition hover:bg-tim-50 sm:text-base"
				>
					WhatsApp
				</a>
			</div>
		</div>
	</section>

	<LpProva />

	<div class="bg-white py-16 sm:py-20">
		<div class="mx-auto max-w-6xl space-y-16 px-4">
			{#each data.grupos as grupo (grupo.chave)}
				<section aria-labelledby="cluster-{grupo.chave}">
					<h2 id="cluster-{grupo.chave}" class="text-2xl font-bold text-slate-900 sm:text-3xl">
						{grupo.titulo}
					</h2>
					<p class="mt-2 max-w-3xl leading-relaxed text-slate-600">{grupo.descricao}</p>

					<ul class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{#each grupo.paginas as lp (lp.slug)}
							<li>
								<a
									href="/solucoes/{lp.slug}/"
									class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-tim-300 hover:shadow-lg"
								>
									<h3 class="text-lg font-bold text-tim-800">{lp.cardTitulo}</h3>
									<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{lp.cardTexto}</p>
									<span class="mt-4 text-sm font-semibold text-tim-600">Ver solução →</span>
								</a>
							</li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	</div>

	<ContactSection id="fale-conosco" />
</main>

<SiteMap artigos={data.artigosRecentes} total={data.totalArtigos} solucoes={data.solucoes} />

<Footer />
