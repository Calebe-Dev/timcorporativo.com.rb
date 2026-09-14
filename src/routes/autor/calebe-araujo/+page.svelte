<script>
	import { site, author } from '$lib/site.js';

	let { data } = $props();

	const formatar = (iso) =>
		iso ? new Date(iso).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

	// Rótulo da rede a partir do host: linkedin.com → LinkedIn etc.
	const NOMES = { linkedin: 'LinkedIn', instagram: 'Instagram', facebook: 'Facebook', youtube: 'YouTube' };
	const redes = author.sameAs.map((href) => {
		const chave = new URL(href).hostname.replace(/^www\./, '').split('.')[0];
		return { href, nome: NOMES[chave] ?? chave };
	});
</script>

<svelte:head>
	{@html data.seo.html}
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="pt_BR" />
</svelte:head>

<nav aria-label="Trilha de navegação" class="mb-6 text-xs text-slate-500">
	<ol class="flex flex-wrap items-center gap-1.5">
		<li><a href="/" class="hover:text-tim-700 hover:underline">Início</a></li>
		<li aria-hidden="true">›</li>
		<li><a href="/blog" class="hover:text-tim-700 hover:underline">Blog</a></li>
		<li aria-hidden="true">›</li>
		<li class="text-slate-700" aria-current="page">{author.name}</li>
	</ol>
</nav>

<header class="border-b border-slate-200 pb-8">
	<p class="text-xs font-semibold tracking-wide text-tim-600 uppercase">Quem escreve</p>
	<h1 class="mt-2 text-3xl font-bold tracking-tight text-tim-900 sm:text-4xl">{author.name}</h1>
	<p class="mt-1 text-sm font-medium text-slate-500">{author.jobTitle} · {site.name}</p>
	<p class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">{author.bio}</p>

	<ul class="mt-5 flex flex-wrap gap-2" aria-label="Áreas de atuação">
		{#each author.knowsAbout as area}
			<li class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
				{area}
			</li>
		{/each}
	</ul>

	<!-- rel="me": é o vínculo que liga esta página aos perfis do sameAs. -->
	<ul class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Perfis do autor">
		{#each redes as r}
			<li>
				<a
					href={r.href}
					rel="me noopener"
					target="_blank"
					class="font-medium text-tim-700 underline-offset-4 hover:underline"
				>
					{r.nome}
				</a>
			</li>
		{/each}
	</ul>
</header>

<section aria-labelledby="recentes" class="mt-10">
	<h2 id="recentes" class="text-lg font-bold text-tim-900">Artigos recentes</h2>
	<ol class="mt-4 divide-y divide-slate-100">
		{#each data.artigos as a (a.slug)}
			<li class="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
				<a href="/{a.slug}/" class="font-medium text-slate-800 hover:text-tim-700 hover:underline">
					{a.title}
				</a>
				{#if a.date}
					<time datetime={a.date} class="shrink-0 text-xs text-slate-500">{formatar(a.date)}</time>
				{/if}
			</li>
		{/each}
	</ol>
	<p class="mt-6 text-sm">
		<a href="/blog" class="font-semibold text-tim-700 hover:underline">
			Ver todos os {data.total} artigos →
		</a>
	</p>
</section>
