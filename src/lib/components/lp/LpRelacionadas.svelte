<script>
	let { lps = [], artigos = [] } = $props();
</script>

<!--
	Malha interna da landing page. Duas listas com papéis distintos:

	- "Soluções relacionadas" liga LPs do mesmo cluster (e uma ponte para outro).
	  É o que distribui autoridade dentro do silo sem virar link em anel burro,
	  onde toda página aponta para todas e nenhum link significa nada.
	- "Leia também" desce para os artigos do blog que aprofundam o tema. O sentido
	  é LP -> artigo: a LP é o destino comercial, o artigo é o apoio editorial.
-->
<section aria-labelledby="relacionadas" class="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-4">
		<h2 id="relacionadas" class="text-2xl font-bold text-slate-900 sm:text-3xl">
			Continue por aqui
		</h2>

		{#if lps.length}
			<h3 class="mt-8 text-sm font-semibold tracking-wide text-slate-500 uppercase">
				Soluções relacionadas
			</h3>
			<ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each lps as l}
					<li>
						<a
							href="/solucoes/{l.slug}/"
							class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-tim-300 hover:shadow-md"
						>
							<span class="font-semibold text-tim-800">{l.cardTitulo}</span>
							<span class="mt-1.5 text-sm leading-relaxed text-slate-600">{l.cardTexto}</span>
							<span class="mt-3 text-sm font-semibold text-tim-600">Ver solução →</span>
						</a>
					</li>
				{/each}
			</ul>
		{/if}

		{#if artigos.length}
			<h3 class="mt-10 text-sm font-semibold tracking-wide text-slate-500 uppercase">
				Leia também no blog
			</h3>
			<ul class="mt-4 grid gap-3 sm:grid-cols-2">
				{#each artigos as a}
					<li>
						<a
							href="/{a.slug}/"
							class="block rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 transition hover:border-tim-300 hover:bg-tim-50/50 hover:text-tim-700"
						>
							{a.title}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
