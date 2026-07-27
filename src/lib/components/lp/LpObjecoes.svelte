<script>
	let { titulo = 'As objeções que ouvimos — e a resposta honesta', objecoes } = $props();
</script>

<!--
	Bloco de objeções. Fica FORA do FAQPage do JSON-LD de propósito: são as dúvidas
	que travam a decisão ("e se a obra atrasar?", "e se eu já tiver contrato?"),
	não perguntas de busca. Marcar tudo como FAQ dilui o rich result e enche a
	SERP de pergunta que ninguém pesquisa.

	<details> mantém a resposta no HTML mesmo recolhida.
-->
<section aria-labelledby="objecoes" class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-4xl px-4">
		<h2 id="objecoes" class="text-balance text-2xl font-bold text-slate-900 sm:text-3xl">
			{titulo}
		</h2>
		<div class="mt-8 space-y-3">
			{#each objecoes as o (o.q)}
				<details class="group rounded-xl border border-slate-200 bg-slate-50/60 transition hover:border-tim-200">
					<summary
						class="flex cursor-pointer list-none items-start justify-between gap-4 p-5 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden"
					>
						<span>{o.q}</span>
						<svg
							class="mt-0.5 h-5 w-5 shrink-0 text-tim-600 transition-transform group-open:rotate-45"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
						>
							<path stroke-linecap="round" d="M12 5v14M5 12h14" />
						</svg>
					</summary>
					<p class="px-5 pb-5 leading-relaxed text-slate-600">{o.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>
