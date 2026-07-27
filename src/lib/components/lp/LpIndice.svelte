<script>
	let { secoes } = $props();
</script>

<!--
	Índice da página. Vale por três motivos: dá ao leitor um mapa de uma página
	longa, cria links internos para as âncoras (que o Google usa para os sitelinks
	de trecho na SERP) e melhora a chance de a página ser citada por trecho em
	resposta de IA, porque expõe a estrutura do documento logo no topo.

	Sticky só no desktop: no mobile viraria uma barra ocupando meia tela.
-->
<nav aria-labelledby="indice-titulo" class="lg:sticky lg:top-24">
	<h2 id="indice-titulo" class="text-xs font-semibold tracking-wide text-slate-500 uppercase">
		Nesta página
	</h2>
	<ol class="mt-4 space-y-2.5 border-l border-slate-200 text-sm">
		{#each secoes as s}
			<li>
				<a
					href="#{s.id}"
					class="-ml-px block border-l-2 border-transparent pl-4 text-slate-600 transition hover:border-tim-500 hover:text-tim-700"
				>
					{s.h2}
				</a>
			</li>
		{/each}
	</ol>
</nav>
