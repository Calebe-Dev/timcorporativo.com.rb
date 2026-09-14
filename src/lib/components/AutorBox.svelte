<script>
	import { author } from '$lib/site.js';

	// Monograma no lugar da foto: o perfil antigo usava o avatar genérico do
	// Gravatar (sem imagem real). Quando houver foto, trocar este círculo por
	// <img> e acrescentar `image` ao personNode() em $lib/schema.js.
	const monograma = author.name
		.split(' ')
		.map((p) => p[0])
		.slice(0, 2)
		.join('');
</script>

<!--
	Caixa do autor no fim do artigo. Byline no topo, esta caixa no fim e a página
	/autor/… são o trio que o Google descreve para autoria identificável em
	conteúdo de decisão — e o leitor que chegou ao fim é quem mais pergunta
	"quem escreveu isto?".
-->
<aside aria-label="Sobre o autor" class="mt-10 flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
	<span
		class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-tim-600 text-base font-bold text-white"
		aria-hidden="true"
	>
		{monograma}
	</span>
	<div class="min-w-0">
		<p class="text-xs font-semibold tracking-wide text-slate-500 uppercase">Escrito por</p>
		<p class="mt-0.5 text-base font-bold text-slate-900">
			<a href="/autor/{author.slug}/" rel="author" class="hover:text-tim-700 hover:underline">{author.name}</a>
			<span class="font-normal text-slate-500">· {author.jobTitle}</span>
		</p>
		<p class="mt-1.5 text-sm leading-relaxed text-slate-600">{author.bio}</p>
		<a href="/autor/{author.slug}/" class="mt-2 inline-block text-sm font-semibold text-tim-700 hover:underline">
			Perfil e todos os artigos →
		</a>
	</div>
</aside>
