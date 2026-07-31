<script>
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { nav, whatsappLink } from '$lib/site.js';

	// O site é SSG com `fallback: '404.html'` (svelte.config.js): a Cloudflare
	// Pages devolve esse shell para toda URL sem arquivo, e é o cliente que
	// resolve a rota e renderiza esta página. Sem ela o SvelteKit cai no erro
	// padrão — um <h1>404</h1> solto, sem <title>, sem <main> e sem nenhum
	// caminho de volta. O _redirects deixa claro que 404 é resposta ESPERADA
	// para dezenas de URLs do site antigo, ou seja: é uma página com tráfego.
	const naoEncontrado = $derived(page.status === 404);

	const titulo = $derived(naoEncontrado ? 'Página não encontrada' : 'Erro inesperado');
</script>

<svelte:head>
	<title>{titulo} — TIM Corporativo</title>
	<!-- Página de erro não entra em índice de busca. -->
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<Header />

<main>
	<section class="mx-auto max-w-3xl px-4 py-16 sm:py-24">
		<p class="text-sm font-semibold tracking-wide text-tim-600">Erro {page.status}</p>
		<h1 class="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{titulo}</h1>
		<p class="mt-4 text-lg leading-relaxed text-slate-600">
			{#if naoEncontrado}
				O endereço que você acessou não existe mais ou foi digitado de outra forma. Nada se perdeu:
				os caminhos abaixo levam ao que você provavelmente procurava.
			{:else}
				Algo falhou do nosso lado ao carregar esta página. Tente de novo em instantes ou fale
				direto com um consultor.
			{/if}
		</p>

		<div class="mt-8 flex flex-wrap gap-3">
			<a
				href="/"
				class="rounded-full bg-tim-600 px-6 py-3 text-sm font-semibold text-white hover:bg-tim-700"
			>
				Voltar para a página inicial
			</a>
			<a
				href={whatsappLink()}
				target="_blank"
				rel="noopener"
				class="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
			>
				Falar com um consultor
			</a>
		</div>

		{#if naoEncontrado}
			<nav aria-labelledby="atalhos-erro" class="mt-12 border-t border-slate-200 pt-8">
				<h2 id="atalhos-erro" class="text-lg font-semibold text-slate-900">
					Talvez você procure por
				</h2>
				<!-- Reusa o menu do site: um destino por item, sem lista paralela para
				     manter sincronizada. "Início" fica de fora porque já é o botão acima. -->
				<ul class="mt-4 grid gap-2 sm:grid-cols-2">
					{#each nav.filter((i) => i.href !== '/#topo') as item}
						<li>
							<a href={item.href} class="text-tim-700 hover:underline">{item.label}</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</section>
</main>

<Footer />
