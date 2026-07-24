<script>
	import { page } from '$app/state';
	import { getGroupedDocs } from '$lib/docs.js';

	let { children } = $props();
	const grouped = getGroupedDocs();

	const groupLabels = {
		'mapa-do-site': 'Mapa do site',
		'(raiz)': 'Relatórios'
	};

	let open = $state(false);
	const current = $derived(page.url.pathname);

	const linkBase = 'block rounded px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-800';
	const linkActive = 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300';

	function itemClass(href) {
		return current === href ? `${linkBase} ${linkActive}` : linkBase;
	}
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
	<header
		class="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90"
	>
		<div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
			<a href="/docs" class="flex items-center gap-2 font-semibold">
				<span class="rounded bg-blue-600 px-2 py-1 text-sm font-bold text-white">TIM</span>
				<span>Docs · timcorporativo.com.br</span>
			</a>
			<div class="flex items-center gap-3">
				<a href="/" class="hidden text-sm text-blue-700 hover:underline sm:inline dark:text-blue-400"
					>← Ver o site</a
				>
				<button
					class="rounded border border-slate-300 px-3 py-1 text-sm md:hidden dark:border-slate-700"
					onclick={() => (open = !open)}
				>
					Menu
				</button>
			</div>
		</div>
	</header>

	<div class="mx-auto flex max-w-6xl gap-8 px-4 py-8">
		<aside class="{open ? 'block' : 'hidden'} w-full shrink-0 md:block md:w-64">
			<nav class="space-y-6 text-sm md:sticky md:top-20">
				<a href="/" class={itemClass('/')}>← Ver o site</a>
				<a href="/docs" class={itemClass('/docs')}>Início da documentação</a>
				<a href="/docs/midias" class={itemClass('/docs/midias')}>Mídias importadas</a>
				{#each grouped as { group, docs }}
					<div>
						<p class="mb-1 px-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">
							{groupLabels[group] ?? group}
						</p>
						<ul class="space-y-0.5">
							{#each docs as doc}
								<li>
									<a
										href="/docs/{doc.slug}"
										onclick={() => (open = false)}
										class={itemClass(`/docs/${doc.slug}`)}
									>
										{doc.title}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</aside>

		<main class="min-w-0 flex-1">
			{@render children()}
		</main>
	</div>

	<footer
		class="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800"
	>
		Documentação interna · gerada estaticamente com SvelteKit + Tailwind
	</footer>
</div>
