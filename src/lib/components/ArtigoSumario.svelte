<script>
	/** @type {{ secoes: Array<{ id: string, texto: string }> }} */
	let { secoes } = $props();

	// No celular o sumário passava de uma tela inteira (até ~20 seções) antes do
	// primeiro parágrafo de conteúdo. Lá ele mostra VISIVEIS itens e um botão
	// para o resto. O resto some só por CSS (max-sm:hidden), e nada muda depois da
	// hidratação: sem salto de layout, e todos os links continuam no HTML. No
	// desktop, em duas colunas, a lista inteira cabe e aparece sempre.
	const VISIVEIS = 6;
	let aberto = $state(false);
	const uid = $props.id();
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
	<ol id="{uid}-lista" class="mt-2 grid gap-x-8 text-sm sm:mt-3 sm:grid-cols-2 sm:gap-y-1.5">
		{#each secoes as s, i (s.id)}
			<li class={i >= VISIVEIS && !aberto ? 'max-sm:hidden' : ''}>
				<!-- py-1.5 no celular: alvo de toque de ~32 px em vez de 19 px. -->
				<a
					href="#{s.id}"
					class="block border-l-2 border-transparent py-1.5 pl-3 leading-snug text-slate-700 transition hover:border-tim-500 hover:text-tim-700 sm:py-0"
				>
					{s.texto}
				</a>
			</li>
		{/each}
	</ol>
	{#if secoes.length > VISIVEIS}
		<button
			type="button"
			class="mt-2 pl-3 text-sm font-semibold text-tim-700 hover:underline sm:hidden"
			aria-expanded={aberto}
			aria-controls="{uid}-lista"
			onclick={() => (aberto = !aberto)}
		>
			{aberto ? 'Mostrar menos' : `Ver todas as ${secoes.length} seções`}
		</button>
	{/if}
</nav>
