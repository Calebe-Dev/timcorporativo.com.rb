<script>
	import { site, whatsappLink } from '$lib/site.js';

	let { data } = $props();
	const { article, seo } = data;

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

<nav class="mb-6 text-sm">
	<a href="/blog" class="font-medium text-tim-600 hover:text-tim-700">← Todos os artigos</a>
</nav>

{#if dateLabel}
	<p class="mb-4 text-sm font-medium text-slate-500">
		Publicado em <time datetime={date}>{dateLabel}</time>
	</p>
{/if}

<!-- O html_content do OC Hub já contém o <h1> do título. -->
<article
	class="prose prose-slate max-w-none
	       prose-headings:text-tim-900 prose-headings:scroll-mt-24
	       prose-a:text-tim-700 hover:prose-a:text-tim-800
	       prose-img:rounded-lg
	       prose-table:block prose-table:overflow-x-auto"
>
	{@html article.html_content}
</article>

<!-- Chamada para ação — consultoria via WhatsApp. -->
<aside class="mt-12 rounded-xl border border-tim-100 bg-tim-50 p-6">
	<h2 class="text-lg font-semibold text-tim-900">Precisa de ajuda para escolher o plano ideal?</h2>
	<p class="mt-1 text-sm text-slate-600">
		Fale com um consultor TIM Empresa e receba uma proposta alinhada à sua operação.
	</p>
	<a
		href={whatsappLink()}
		target="_blank"
		rel="noopener"
		class="mt-4 inline-flex rounded-full bg-tim-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-tim-700"
	>
		Falar no WhatsApp
	</a>
</aside>
