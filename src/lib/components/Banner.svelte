<script>
	import { whatsappLink } from '$lib/site.js';

	/**
	 * Unidade de mídia nativa — ver $lib/banners.js para as peças e a regra de
	 * onde cada uma entra.
	 *
	 * @type {{
	 *   banner: import('$lib/banners.js').Banner,
	 *   formato?: 'meio' | 'rodape',
	 *   pagina?: string,
	 *   cluster?: string
	 * }}
	 */
	let { banner, formato = 'rodape', pagina = '', cluster = '' } = $props();

	const externo = banner.destino.tipo === 'externo';
	const href =
		banner.destino.tipo === 'whatsapp' ? whatsappLink(banner.destino.assunto) : banner.destino.href;
	const rotulo = banner.parceiro ? `Parceiro · ${banner.marca}` : banner.marca;

	function aoClicar(e) {
		// `gtag` existe desde o app.html e enfileira até o consentimento — chamar
		// antes do GA4 subir não quebra nem vaza nada.
		window.gtag?.('event', 'banner_click', {
			banner_id: banner.id,
			formato,
			cluster,
			pagina,
			destino: href
		});

		if (banner.destino.tipo !== 'whatsapp') return;

		// Em vez de ir direto ao wa.me, pede à bolha do WhatsApp que abra o painel
		// de 3 campos — o lead passa por /api/lead e entra no CRM com assunto e
		// origem. `cancelable` + preventDefault do lado de lá é o "eu atendo": se
		// ninguém atender (bolha ausente), o <a> segue normal para o WhatsApp.
		const pedido = new CustomEvent('abrir-atendimento', {
			cancelable: true,
			detail: { assunto: banner.destino.assunto, origem: `banner:${banner.id}` }
		});
		if (!window.dispatchEvent(pedido)) e.preventDefault();
	}

	const botao =
		'inline-flex shrink-0 items-center justify-center rounded-full bg-accent-600 font-semibold text-white transition hover:bg-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600';
</script>

<!--
	`not-prose` porque o formato "meio" vai dentro do <article class="prose">:
	sem isso a tipografia do plugin reescreve margens e cores do cartão.

	O rótulo "Anúncio" é deliberado — é o que o Google exige de qualquer bloco
	promocional distinguível do conteúdo, e é o que o leitor reconhece.
-->
{#if formato === 'meio'}
	<aside
		class="not-prose my-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
		aria-label="Anúncio: {banner.titulo}"
		data-banner={banner.id}
	>
		<p class="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-slate-400 uppercase">
			<span class="rounded-sm border border-slate-300 px-1.5 py-0.5 text-[10px] tracking-[0.1em] text-slate-500">
				Anúncio
			</span>
			<span>{rotulo}</span>
		</p>

		<div class="mt-3 gap-6 sm:flex sm:items-center">
			<div class="flex items-start gap-4 sm:flex-1">
				<span
					class="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white {banner.parceiro
						? 'bg-slate-800'
						: 'bg-tim-600'}"
					aria-hidden="true"
				>
					{#if banner.parceiro}
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M9 7h8v8" />
						</svg>
					{:else}
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 5h16v10H8l-4 4V5z" />
						</svg>
					{/if}
				</span>
				<div class="min-w-0">
					<p class="text-[11px] font-semibold tracking-wide text-tim-700 uppercase">{banner.eyebrow}</p>
					<p class="mt-1 text-lg leading-snug font-bold text-balance text-slate-900">{banner.titulo}</p>
					<p class="mt-1.5 text-sm leading-relaxed text-slate-600">{banner.texto}</p>
				</div>
			</div>

			<a
				{href}
				target={externo ? '_blank' : undefined}
				rel={externo ? 'noopener' : undefined}
				onclick={aoClicar}
				class="{botao} mt-4 w-full px-6 py-3 text-sm shadow-md sm:mt-0 sm:w-auto"
			>
				{banner.cta}
			</a>
		</div>
	</aside>
{:else}
	<aside
		class="relative mt-12 overflow-hidden rounded-3xl p-7 text-white sm:p-9 {banner.parceiro
			? 'bg-slate-900'
			: 'bg-tim-800'}"
		aria-label="Anúncio: {banner.titulo}"
		data-banner={banner.id}
	>
		<!-- Mesmo brilho do LpHero: liga o banner à linguagem das landing pages. -->
		<div
			class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
			aria-hidden="true"
		></div>

		<p class="relative flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-white/60 uppercase">
			<span class="rounded-sm border border-white/30 px-1.5 py-0.5 text-[10px] tracking-[0.1em]">Anúncio</span>
			<span>{rotulo}</span>
		</p>

		<div class="relative mt-4 gap-8 md:flex md:items-end md:justify-between">
			<div class="max-w-2xl">
				<p class="text-xs font-semibold tracking-wide text-white/70 uppercase">{banner.eyebrow}</p>
				<p class="mt-2 text-2xl leading-tight font-bold text-balance sm:text-3xl">{banner.titulo}</p>
				<p class="mt-3 text-base leading-relaxed text-white/85">{banner.texto}</p>
			</div>

			<a
				{href}
				target={externo ? '_blank' : undefined}
				rel={externo ? 'noopener' : undefined}
				onclick={aoClicar}
				class="{botao} mt-6 w-full px-7 py-3.5 text-base shadow-lg shadow-black/20 md:mt-0 md:w-auto"
			>
				{banner.cta}
			</a>
		</div>

		{#if externo}
			<p class="relative mt-4 text-xs text-white/55">
				Você será levado a {banner.marca}, site parceiro da nossa rede.
			</p>
		{/if}
	</aside>
{/if}
