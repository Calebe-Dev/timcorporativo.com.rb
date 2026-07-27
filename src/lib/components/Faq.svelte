<script>
	import { faq as faqPadrao } from '$lib/site.js';

	// `items` permite FAQ próprio por landing page. Sem prop, cai no FAQ da home.
	let { items = faqPadrao, aberturaInicial = 0 } = $props();
</script>

<!--
	<details> e não accordion em JS de propósito.

	A versão anterior renderizava a resposta dentro de {#if openIndex === i}, então
	no HTML pré-renderizado (SSG) existia UMA resposta — a aberta por padrão. As
	outras nove só nasciam depois de um clique, que crawler nenhum dá. Mas o
	FAQPage do Seo.svelte publicava as dez: marcação de conteúdo ausente da
	página, que é o que a diretriz de dados estruturados do Google proíbe e o que
	rende ação manual.

	Com <details>, toda resposta está no HTML desde o primeiro byte — apenas
	recolhida. Conteúdo em seção expansível é explicitamente aceito pelo Google.
	O atributo `name` faz o accordion exclusivo (abrir um fecha o outro) sem uma
	linha de JS; navegador que não suporta apenas deixa abrir vários.
-->
<div class="mx-auto max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
	{#each items as item, i (item.q)}
		<details name="faq" open={i === aberturaInicial} class="group">
			<!-- h3 envolve o summary para o item entrar no outline do documento; o
			     marker nativo sai porque o chevron abaixo já indica o estado. -->
			<h3>
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900 transition hover:bg-tim-50/60 [&::-webkit-details-marker]:hidden"
				>
					<span>{item.q}</span>
					<svg
						class="h-5 w-5 shrink-0 text-tim-600 transition-transform group-open:rotate-180"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"
					>
						<path stroke-linecap="round" d="M6 9l6 6 6-6" />
					</svg>
				</summary>
			</h3>
			<div class="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">{item.a}</div>
		</details>
	{/each}
</div>
