<script>
	import Banner from '$lib/components/Banner.svelte';
	import { site } from '$lib/site.js';

	let { data } = $props();
	const { article, seo, banners } = data;

	const ogImageAbs = site.url + site.ogImage;

	const date = article.published_at ?? article.created_at;
	const dateLabel = date
		? new Date(date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })
		: '';
</script>

<svelte:head>
	<!-- Bloco de SEO gerado pelo SDK: title, meta description, keywords, OG e JSON-LD (Article). -->
	{@html seo.html}
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<meta name="author" content="{site.name}" />
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

<!-- Rotulado porque o cabeçalho do BlogShell também é um <nav>: dois landmarks
     de mesma role sem nome ficam indistinguíveis na lista do leitor de tela. -->
<nav aria-label="Voltar ao blog" class="mb-6 text-sm">
	<a href="/blog" class="font-medium text-tim-600 hover:text-tim-700">← Todos os artigos</a>
</nav>

{#if dateLabel}
	<!-- Byline visível casada com o author do JSON-LD (sinal E-E-A-T). -->
	<p class="mb-4 text-sm font-medium text-slate-500">
		Por <span class="text-slate-700">{site.name}</span> · Publicado em
		<time datetime={date}>{dateLabel}</time>
	</p>
{/if}

<!-- O html_content do OC Hub já contém o <h1> do título. O servidor o entrega
     em duas partes, cortado antes de uma seção — ver dividirParaBanner() em
     +page.server.js — para o banner do meio entrar entre elas. Artigo sem
     ponto de corte seguro chega com a segunda parte vazia e fica só com o
     banner do rodapé. -->
<article
	class="prose prose-slate max-w-none
	       prose-headings:text-tim-900 prose-headings:scroll-mt-24
	       prose-a:text-tim-700 hover:prose-a:text-tim-800
	       prose-img:rounded-lg
	       prose-table:block prose-table:overflow-x-auto"
>
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
