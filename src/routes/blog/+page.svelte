<script>
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site.js';

	let { data } = $props();
	const { items } = data;

	const pageTitle = `Blog · ${site.name} — TIM Empresa, Fibra e Link Dedicado`;
	const pageDesc =
		'Guias e análises sobre TIM Empresa, TIM Black, TIM Fibra, UltraFibra e link dedicado: como escolher, contratar e otimizar telecom corporativo.';

	function formatDate(iso) {
		if (!iso) return '';
		return new Date(iso).toLocaleDateString('pt-BR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<!-- Head completo (canonical, OG com imagem, Twitter Card, JSON-LD com
     breadcrumb) vem do componente central — mesma fonte da home. -->
<Seo title={pageTitle} description={pageDesc} path="/blog" />

<header class="mb-8">
	<h1 class="text-3xl font-bold tracking-tight text-tim-900 sm:text-4xl">Blog TIM Corporativo</h1>
	<p class="mt-2 max-w-2xl text-slate-600">{pageDesc}</p>
	<p class="mt-1 text-sm text-slate-500">{items.length} artigos publicados</p>
</header>

{#if items.length === 0}
	<p class="rounded-lg border border-slate-200 bg-slate-50 p-6 text-slate-500">
		Nenhum artigo publicado no momento.
	</p>
{:else}
	<ul class="grid gap-5 sm:grid-cols-2">
		{#each items as post (post.id)}
			<li>
				<a
					href="/{post.slug}/"
					class="flex h-full flex-col rounded-xl border border-slate-200 p-5 transition hover:border-tim-300 hover:shadow-md"
				>
					{#if post.date}
						<time class="text-xs font-medium text-tim-600">{formatDate(post.date)}</time>
					{/if}
					<h2 class="mt-1 text-lg font-semibold text-slate-900">{post.title}</h2>
					{#if post.meta_description}
						<p class="mt-2 line-clamp-3 text-sm text-slate-600">{post.meta_description}</p>
					{/if}
					{#if post.keywords?.length}
						<div class="mt-3 flex flex-wrap gap-1.5">
							{#each post.keywords.slice(0, 3) as kw}
								<span class="rounded-full bg-tim-50 px-2 py-0.5 text-[11px] font-medium text-tim-700">
									{kw}
								</span>
							{/each}
						</div>
					{/if}
					<span class="mt-auto pt-4 text-sm font-semibold text-tim-600">Ler artigo →</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}
