<script>
	let { titulo, subtitulo = '', passos } = $props();
</script>

<!--
	Passos visíveis do HowTo emitido em SeoSolucao.svelte. Os ids #passo-N casam
	com o campo `url` de cada HowToStep — o dado estruturado aponta para a âncora
	real do conteúdo, não para uma seção inventada.
-->
<section aria-labelledby="como-funciona" class="bg-slate-50 py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-4">
		<h2
			id="como-funciona"
			class="text-balance text-center text-2xl font-bold text-slate-900 sm:text-3xl"
		>
			{titulo}
		</h2>
		{#if subtitulo}
			<p class="mx-auto mt-3 max-w-2xl text-center leading-relaxed text-slate-600">{subtitulo}</p>
		{/if}

		<ol class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each passos as passo, i}
				<li
					id="passo-{i + 1}"
					class="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-tim-300 hover:shadow-md"
				>
					<span
						class="flex h-11 w-11 items-center justify-center rounded-full bg-tim-600 text-base font-bold text-white"
						aria-hidden="true">{i + 1}</span
					>
					<h3 class="mt-4 font-bold text-tim-800 sm:text-lg">{passo.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{passo.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
