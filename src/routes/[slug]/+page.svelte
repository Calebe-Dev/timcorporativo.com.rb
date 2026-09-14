<script>
	import Banner from '$lib/components/Banner.svelte';
	import ArtigoSumario from '$lib/components/ArtigoSumario.svelte';
	import { site, author } from '$lib/site.js';

	let { data } = $props();
	const { article, seo, banners } = data;

	const ogImageAbs = site.url + site.ogImage;

	const formatar = (iso) =>
		new Date(iso).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

	const date = article.published_at ?? article.created_at;
	const dateLabel = date ? formatar(date) : '';
	// "Atualizado em" só quando a revisão é posterior à publicação — a data vem
	// de date_updated (CMS ou camada editorial do repo) e casa com o
	// dateModified do JSON-LD.
	const updated = article.date_updated;
	const updatedLabel =
		updated && date && updated.slice(0, 10) > date.slice(0, 10) ? formatar(updated) : '';
</script>

<svelte:head>
	<!-- Bloco de SEO gerado pelo SDK: title, meta description, keywords, OG e JSON-LD (Article). -->
	{@html seo.html}
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<meta name="author" content={author.name} />
	<meta name="publisher" content="TIM Corporativo" />
	<meta property="og:site_name" content="TIM Corporativo" />
	<meta property="og:locale" content="pt_BR" />
	<!-- O SDK não emite imagem nem Twitter Card — sem isso o artigo compartilhado
	     sai como link pelado no WhatsApp/LinkedIn/X. -->
	<meta property="og:image" content={ogImageAbs} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content={String(site.ogImageWidth)} />
	<meta property="og:image:height" content={String(site.ogImageHeight)} />
	<meta property="og:image:alt" content={site.ogImageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={ogImageAbs} />
	<meta name="twitter:image:alt" content={site.ogImageAlt} />
</svelte:head>

<!-- Trilha visível espelhando o BreadcrumbList do JSON-LD (mesma da LP, em
     cores do blog). Rotulada porque o cabeçalho do BlogShell também é um <nav>. -->
<nav aria-label="Trilha de navegação" class="mb-6 text-xs text-slate-500">
	<ol class="flex flex-wrap items-center gap-1.5">
		<li><a href="/" class="hover:text-tim-700 hover:underline">Início</a></li>
		<li aria-hidden="true">›</li>
		<li><a href="/blog" class="hover:text-tim-700 hover:underline">Blog</a></li>
		<li aria-hidden="true">›</li>
		<li class="max-w-[60ch] truncate text-slate-700" aria-current="page">{article.title}</li>
	</ol>
</nav>

{#if dateLabel}
	<!-- Byline visível casada com o author (Person) e as datas do JSON-LD — sinal E-E-A-T. -->
	<p class="mb-4 text-sm font-medium text-slate-500">
		Por
		<a href="/autor/{author.slug}/" rel="author" class="text-slate-700 hover:text-tim-700 hover:underline">
			{author.name}
		</a>
		· Publicado em <time datetime={date}>{dateLabel}</time>
		{#if updatedLabel}
			· Atualizado em <time datetime={updated}>{updatedLabel}</time>
		{/if}
	</p>
{/if}

<!-- O html_content do OC Hub já contém o <h1> do título. O servidor o entrega em
     fatias — ver fatiarArtigo() em +page.server.js — e a ordem aqui é fixa:
     h1 → resposta direta → intro → sumário → parte1 → banner do meio → parte2.
     Artigo sem ponto de corte seguro chega com a parte2 vazia e fica só com o
     banner do rodapé. -->
<article
	class="prose prose-slate max-w-none
	       prose-headings:text-tim-900 prose-headings:scroll-mt-24
	       prose-a:text-tim-700 hover:prose-a:text-tim-800
	       prose-img:rounded-lg
	       prose-table:block prose-table:overflow-x-auto"
>
	{@html article.html_h1}
	{#if data.resposta}
		<!-- Resposta direta antes de qualquer subtítulo: o trecho citável (mesmo
		     papel do `resumo` das landing pages). Texto em $lib/blog/editorial.js. -->
		<p
			class="not-prose my-6 border-l-4 border-tim-500 bg-tim-50/70 px-6 py-5 text-lg leading-relaxed font-medium text-slate-800"
		>
			{data.resposta}
		</p>
	{/if}
	{@html article.html_intro}
	{#if data.sumario?.length}
		<ArtigoSumario secoes={data.sumario} />
	{/if}
	{@html article.html_parte1}
	{#if article.html_parte2}
		<Banner banner={banners.meio} formato="meio" pagina={article.slug} cluster={banners.cluster} />
		{@html article.html_parte2}
	{/if}
</article>

<!-- A oferta vem ANTES do "Leia também": quem chega ao fim do texto recebe o
     convite antes das quatro rotas de saída, não depois. A peça muda conforme o
     assunto do artigo — quem lê sobre chip e fatura já é cliente com contrato,
     e recebe auditoria/renovação, não "escolha seu plano". -->
<Banner banner={banners.rodape} formato="rodape" pagina={article.slug} cluster={banners.cluster} />

{#if data.relacionados?.length}
	<!-- Linkagem interna contextual, calculada no build por afinidade de
	     título/keywords — ver leiaTambem() em +page.server.js. -->
	<nav aria-labelledby="leia-tambem" class="mt-12 border-t border-slate-200 pt-8">
		<h2 id="leia-tambem" class="text-lg font-bold text-tim-900">Leia também</h2>
		<ul class="mt-4 grid gap-3 sm:grid-cols-2">
			{#each data.relacionados as r}
				<li>
					<a
						href="/{r.slug}/"
						class="block h-full rounded-lg border border-slate-200 p-4 text-sm font-medium text-slate-700 transition hover:border-tim-300 hover:bg-tim-50/50 hover:text-tim-700"
					>
						{r.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
