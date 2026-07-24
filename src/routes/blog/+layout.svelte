<script>
	import { site, contact, whatsappLink } from '$lib/site.js';

	let { children } = $props();
</script>

<div class="min-h-screen bg-white text-slate-800">
	<!-- Cabeçalho enxuto (links absolutos — funciona em qualquer página do blog). -->
	<header class="sticky top-0 z-40 border-b border-tim-100 bg-white/95 backdrop-blur">
		<div class="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3">
			<a href="/" class="flex items-center gap-2">
				<img src={site.logo} alt="TIM" class="h-9 w-9" width="36" height="36" />
				<span class="leading-tight">
					<span class="block text-base font-bold text-tim-800">TIM Corporativo</span>
					<span class="block text-[11px] font-medium text-tim-500">Blog empresarial</span>
				</span>
			</a>
			<nav class="flex items-center gap-4 text-sm font-medium">
				<a href="/" class="hidden text-slate-700 hover:text-tim-600 sm:inline">Site</a>
				<a href="/blog" class="text-slate-700 hover:text-tim-600">Blog</a>
				<a
					href={whatsappLink()}
					target="_blank"
					rel="noopener"
					class="rounded-full bg-tim-600 px-3 py-1.5 font-semibold text-white hover:bg-tim-700"
				>
					Falar com consultor
				</a>
			</nav>
		</div>
	</header>

	<main class="mx-auto max-w-4xl px-4 py-10">
		{@render children()}
	</main>

	<!-- Rodapé enxuto. -->
	<footer class="border-t border-slate-200 bg-slate-50">
		<div
			class="mx-auto flex max-w-4xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>
				© {site.name} · {contact.address}
			</p>
			<p class="flex gap-4">
				<a href="/" class="hover:text-tim-600">Voltar ao site</a>
				<a href={contact.phoneHref} class="hover:text-tim-600">Tel. {contact.phoneLabel}</a>
			</p>
		</div>
	</footer>
</div>
