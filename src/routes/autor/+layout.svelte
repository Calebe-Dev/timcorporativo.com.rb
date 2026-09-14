<script>
	import BlogShell from '$lib/components/BlogShell.svelte';

	// Mesma moldura dos artigos e do índice do blog; `data` vem do
	// +layout.server.js da raiz (lista memoizada de artigos e soluções).
	let { children, data } = $props();
</script>

<BlogShell
	subtitulo="Quem escreve"
	artigos={data.artigosRecentes}
	total={data.totalArtigos}
	tituloArtigos={data.tituloMapaArtigos ?? 'Últimos artigos'}
	solucoes={data.solucoes}
>
	{@render children()}
</BlogShell>
