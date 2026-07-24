<script>
	let { data } = $props();

	const groupLabels = {
		'mapa-do-site': 'Mapa do site — páginas (SEO, estrutura, schema)',
		'(raiz)': 'Relatórios avulsos'
	};
</script>

<svelte:head>
	<title>Docs · timcorporativo.com.br</title>
</svelte:head>

<section class="mb-10">
	<h1 class="text-3xl font-bold tracking-tight">Documentação — timcorporativo.com.br</h1>
	<p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
		Levantamento de conteúdo, estrutura e SEO do site, servido como site estático. Todo o conteúdo
		vem dos arquivos markdown em <code class="rounded bg-slate-200 px-1 dark:bg-slate-800">docs/</code>.
	</p>
</section>

{#each data.grouped as { group, docs }}
	<section class="mb-10">
		<h2 class="mb-4 text-lg font-semibold text-slate-700 dark:text-slate-300">
			{groupLabels[group] ?? group}
		</h2>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each docs as doc}
				<a
					href="/docs/{doc.slug}"
					class="group rounded-lg border border-slate-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900"
				>
					<h3 class="font-medium group-hover:text-blue-700 dark:group-hover:text-blue-400">
						{doc.heading}
					</h3>
					<p class="mt-1 text-xs text-slate-500">
						{doc.slug}.md · {doc.words.toLocaleString('pt-BR')} palavras
					</p>
				</a>
			{/each}
		</div>
	</section>
{/each}
