<script>
	import Seo from '$lib/components/Seo.svelte';
	import BlogLista from '$lib/components/BlogLista.svelte';
	import { site } from '$lib/site.js';

	let { data } = $props();

	// Título e descrição distintos por página: mesmo title em 10 URLs é
	// duplicação que o Google reporta. O canonical aponta para a própria página
	// (o Seo monta a partir do `path`) — agrupar tudo na página 1 por canonical
	// esconderia 169 artigos do rastreio.
	const pageTitle = $derived(
		`Blog · página ${data.pagina} de ${data.totalPaginas} · ${site.name}`
	);
	const pageDesc = $derived(
		`Página ${data.pagina} dos artigos sobre TIM Empresa, TIM Black, TIM Fibra, UltraFibra e link dedicado: como escolher, contratar e otimizar telecom corporativo.`
	);
</script>

<Seo title={pageTitle} description={pageDesc} path="/blog/pagina/{data.pagina}" />

<header class="mb-8">
	<h1 class="text-3xl font-bold tracking-tight text-tim-900 sm:text-4xl">
		Blog TIM Corporativo
	</h1>
	<p class="mt-2 max-w-2xl text-slate-600">
		Guias e análises sobre telecom corporativo — página {data.pagina} de {data.totalPaginas}.
	</p>
	<p class="mt-1 text-sm text-slate-500">
		<a href="/blog" class="font-medium text-tim-600 hover:text-tim-700">
			← Voltar ao início da listagem
		</a>
	</p>
</header>

<BlogLista
	items={data.items}
	pagina={data.pagina}
	totalPaginas={data.totalPaginas}
	totalArtigos={data.totalArtigos}
/>
