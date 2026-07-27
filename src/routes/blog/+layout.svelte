<script>
	import BlogShell from '$lib/components/BlogShell.svelte';

	// `data` traz o que o +layout.server.js da raiz carregou (memoizado):
	// é assim que o mapa do site recebe a lista de artigos em toda rota.
	let { children, data } = $props();
</script>

<BlogShell artigos={data.artigosRecentes} total={data.totalArtigos} solucoes={data.solucoes}>
	{@render children()}
</BlogShell>
