<script>
	/** @type {{ secoes: Array<{ id: string, texto: string }> }} */
	let { secoes } = $props();
</script>

<!--
	Sumário do artigo — mesma razão de existir do LpIndice: mapa de uma página
	longa, links internos para as âncoras (que o Google usa como link de trecho na
	SERP) e a estrutura exposta no topo, que é o que um motor de resposta cita.
	Em bloco, e não sticky, porque o artigo é coluna única. Só entra em artigo
	longo (SUMARIO_MINIMO em routes/[slug]/+page.server.js).

	O rótulo é <p>, não <h2>: um "Neste artigo" como título de seção entraria no
	sumário de si mesmo e na hierarquia do texto. `not-prose` porque vai dentro do
	<article class="prose">.
-->
<nav
	aria-labelledby="sumario-titulo"
	class="not-prose my-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 sm:px-6"
>
	<p id="sumario-titulo" class="text-xs font-semibold tracking-wide text-slate-500 uppercase">
		Neste artigo
	</p>
	<ol class="mt-3 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
		{#each secoes as s (s.id)}
			<li>
				<a
					href="#{s.id}"
					class="block border-l-2 border-transparent pl-3 leading-snug text-slate-700 transition hover:border-tim-500 hover:text-tim-700"
				>
					{s.texto}
				</a>
			</li>
		{/each}
	</ol>
</nav>
