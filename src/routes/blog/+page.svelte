<script>
	import Seo from '$lib/components/Seo.svelte';
	import BlogLista from '$lib/components/BlogLista.svelte';
	import { site } from '$lib/site.js';

	let { data } = $props();

	const pageTitle = `Blog · ${site.name} — TIM Empresa, Fibra e Link Dedicado`;
	const pageDesc =
		'Guias e análises sobre TIM Empresa, TIM Black, TIM Fibra, UltraFibra e link dedicado: como escolher, contratar e otimizar telecom corporativo.';
</script>

<!-- Head completo (canonical, OG com imagem, Twitter Card, JSON-LD com
     breadcrumb) vem do componente central — mesma fonte da home. -->
<Seo title={pageTitle} description={pageDesc} path="/blog" />

<header class="mb-8">
	<h1 class="text-3xl font-bold tracking-tight text-tim-900 sm:text-4xl">Blog TIM Corporativo</h1>
	<p class="mt-2 max-w-2xl text-slate-600">{pageDesc}</p>
	<p class="mt-1 text-sm text-slate-500">{data.totalArtigos} artigos publicados</p>
</header>

<BlogLista
	items={data.items}
	pagina={data.pagina}
	totalPaginas={data.totalPaginas}
	totalArtigos={data.totalArtigos}
/>
