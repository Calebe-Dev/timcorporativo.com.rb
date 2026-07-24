<script>
	let { data } = $props();
	const { doc } = data;
</script>

<svelte:head>
	<title>{doc.heading} · Docs</title>
</svelte:head>

<article
	class="prose prose-slate max-w-none dark:prose-invert
	       prose-headings:scroll-mt-24
	       prose-a:text-blue-700 dark:prose-a:text-blue-400
	       prose-table:block prose-table:overflow-x-auto
	       prose-pre:bg-slate-900 prose-pre:text-slate-100"
>
	{@html doc.html}
</article>

<p class="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800">
	Fonte: <code>docs/{doc.slug}.md</code> · {doc.words.toLocaleString('pt-BR')} palavras
</p>
