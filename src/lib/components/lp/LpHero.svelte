<script>
	import { whatsappLink } from '$lib/site.js';

	let { lp } = $props();

	// Cada cluster tem sua paleta de hero. É o que dá identidade visual própria a
	// cada landing page sem multiplicar componentes: a página de link dedicado não
	// abre igual à de PABX em nuvem, mas as duas seguem a marca.
	const temas = {
		conectividade: {
			fundo: 'from-tim-950 via-tim-800 to-tim-600',
			brilho: 'bg-tim-400/25',
			selo: 'bg-tim-400'
		},
		mobilidade: {
			fundo: 'from-tim-950 via-tim-700 to-accent-700',
			brilho: 'bg-accent-400/25',
			selo: 'bg-accent-400'
		},
		voz: {
			fundo: 'from-slate-950 via-tim-800 to-tim-500',
			brilho: 'bg-tim-300/25',
			selo: 'bg-tim-300'
		},
		local: {
			fundo: 'from-tim-900 via-tim-700 to-slate-800',
			brilho: 'bg-amber-300/20',
			selo: 'bg-amber-300'
		}
	};
	const t = temas[lp.cluster] ?? temas.conectividade;
</script>

<section class="relative isolate overflow-hidden bg-gradient-to-br {t.fundo} text-white">
	<!-- Textura em SVG inline: dá profundidade sem uma requisição de imagem, então
	     não disputa banda com o LCP. aria-hidden porque é puramente decorativa. -->
	<svg
		class="absolute inset-0 h-full w-full opacity-[0.07]"
		aria-hidden="true"
		focusable="false"
	>
		<defs>
			<pattern id="lp-grade" width="40" height="40" patternUnits="userSpaceOnUse">
				<path d="M40 0H0v40" fill="none" stroke="currentColor" stroke-width="1" />
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#lp-grade)" />
	</svg>
	<div
		class="absolute -top-24 -right-24 h-96 w-96 rounded-full {t.brilho} blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
		<div class="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
			<div>
				<!-- Trilha visível espelhando o BreadcrumbList do JSON-LD. -->
				<nav aria-label="Trilha de navegação" class="mb-5 text-xs text-white/70">
					<ol class="flex flex-wrap items-center gap-1.5">
						<li><a href="/" class="hover:text-white hover:underline">Início</a></li>
						<li aria-hidden="true">›</li>
						<li><a href="/solucoes/" class="hover:text-white hover:underline">Soluções</a></li>
						<li aria-hidden="true">›</li>
						<li class="text-white/90" aria-current="page">{lp.hero.eyebrow}</li>
					</ol>
				</nav>

				<span
					class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/25"
				>
					<span class="h-2 w-2 rounded-full {t.selo}"></span>
					{lp.hero.eyebrow}
				</span>

				<h1 class="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
					{lp.h1}
				</h1>

				<p class="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
					{lp.hero.sub}
				</p>

				<ul class="mt-7 grid gap-2.5 sm:grid-cols-2">
					{#each lp.hero.bullets as b}
						<li class="flex items-start gap-2.5 text-sm text-white/90">
							<svg
								class="mt-0.5 h-5 w-5 shrink-0 text-white"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
							</svg>
							<span>{b}</span>
						</li>
					{/each}
				</ul>

				<div class="mt-9 flex flex-col gap-3 sm:flex-row">
					<a
						href="#proposta"
						class="rounded-full bg-accent-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-accent-700 sm:text-base"
					>
						{lp.hero.ctaPrimario}
					</a>
					<a
						href={whatsappLink(lp.hero.whatsapp)}
						target="_blank"
						rel="noopener"
						class="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-tim-800 transition hover:bg-tim-50 sm:text-base"
					>
						Tirar dúvida no WhatsApp
					</a>
				</div>
			</div>

			<!-- Cartão de dados: o gancho de E-E-A-T aparece acima da dobra, não
			     enterrado no rodapé. Números concretos, nada de adjetivo solto. -->
			<div class="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm sm:p-8">
				<h2 class="text-sm font-semibold tracking-wide text-white/70 uppercase">
					{lp.hero.cartaoTitulo}
				</h2>
				<dl class="mt-5 space-y-5">
					{#each lp.keyFacts as f}
						<div class="border-b border-white/15 pb-4 last:border-0 last:pb-0">
							<dt class="text-xs font-medium tracking-wide text-white/60 uppercase">{f.label}</dt>
							<dd class="mt-1 text-lg font-bold text-white sm:text-xl">{f.value}</dd>
							{#if f.nota}
								<dd class="mt-0.5 text-xs leading-relaxed text-white/60">{f.nota}</dd>
							{/if}
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</section>
