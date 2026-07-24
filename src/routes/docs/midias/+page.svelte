<script>
	let { data } = $props();
	const { groups, fonts, counts } = data;
</script>

<svelte:head>
	<title>Mídias importadas · Docs</title>
</svelte:head>

<section class="mb-8">
	<h1 class="text-3xl font-bold tracking-tight">Mídias do site original</h1>
	<p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
		Todos os {counts.total} assets da biblioteca de mídia de
		<code class="rounded bg-slate-200 px-1 dark:bg-slate-800">timcorporativo.com.br</code>, importados
		para <code class="rounded bg-slate-200 px-1 dark:bg-slate-800">static/wp-content/uploads/</code>.
		Cada arquivo é servido no mesmo caminho do site original ({counts.images} imagens · {counts.fonts}
		fontes).
	</p>
</section>

{#each groups as { dir, items }}
	<section class="mb-10">
		<h2 class="mb-3 font-mono text-sm text-slate-500">/{dir}/ · {items.length} arquivos</h2>
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
			{#each items as m}
				<figure
					class="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
				>
					<a href={m.url} target="_blank" rel="noopener" class="block">
						<div
							class="flex aspect-square items-center justify-center bg-[repeating-conic-gradient(#eee_0_25%,#fff_0_50%)] bg-[length:20px_20px] p-2 dark:bg-[repeating-conic-gradient(#1e293b_0_25%,#0f172a_0_50%)]"
						>
							<img
								src={m.url}
								alt={m.file}
								loading="lazy"
								class="max-h-full max-w-full object-contain"
							/>
						</div>
					</a>
					<figcaption class="truncate px-2 py-1 text-[11px] text-slate-500" title={m.file}>
						{m.file}
					</figcaption>
				</figure>
			{/each}
		</div>
	</section>
{/each}

{#if fonts.length}
	<section class="mb-10">
		<h2 class="mb-3 text-lg font-semibold text-slate-700 dark:text-slate-300">
			Fontes ({fonts.length})
		</h2>
		<ul class="space-y-1 font-mono text-sm">
			{#each fonts as f}
				<li>
					<a href={f.url} class="text-blue-700 hover:underline dark:text-blue-400">{f.url}</a>
					<span class="text-slate-400">· {f.mime}</span>
				</li>
			{/each}
		</ul>
	</section>
{/if}
