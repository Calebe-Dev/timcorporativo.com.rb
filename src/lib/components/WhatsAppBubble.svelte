<script>
	import { onMount } from 'svelte';
	import { contact, whatsappLink, turnstileSiteKey } from '$lib/site.js';

	// Painel de contato rápido: 3 campos (mínimo que /api/lead aceita — nome,
	// celular e e-mail são obrigatórios no servidor, ver worker/validate.js).
	// O clique no botão abre o painel em vez de ir direto ao wa.me; quem preferir
	// pular o formulário tem o atalho "ir direto" dentro do painel. Sem JS, o
	// botão continua sendo um <a> normal para o WhatsApp.
	let aberto = $state(false);
	let nome = $state('');
	let celular = $state('');
	let email = $state('');
	let website = $state(''); // honeypot — humano nunca vê nem preenche
	let enviando = $state(false);
	/** @type {'' | 'ok' | 'zap' | 'erro'} — mesma semântica do ContactForm. */
	let status = $state('');

	let pagina = $state('/');
	let utm = $state({});
	/** @type {HTMLInputElement | undefined} */
	let campoNome;

	// Turnstile: mesmo padrão lazy do ContactForm — nada é carregado até o
	// visitante abrir o painel (o widget custa ~470 KB + cookies de terceiro).
	let turnstileToken = $state('');
	let caixaTurnstile = $state(null);
	let turnstileIniciado = false;
	/** @type {Promise<string> | null} */
	let tokenPronto = null;
	/** @type {((t: string) => void) | null} */
	let resolverToken = null;
	const ESPERA_TOKEN_MS = 4000;

	const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

	onMount(() => {
		pagina = window.location.pathname;
		try {
			// Primeiro toque da sessão — gravado pelo ContactForm sob a mesma chave.
			utm = JSON.parse(sessionStorage.getItem('tim_utm') || '{}');
			const params = new URLSearchParams(window.location.search);
			for (const k of UTM_KEYS) {
				const v = params.get(k);
				if (v && !utm[k]) utm[k] = v;
			}
		} catch {
			utm = {};
		}
	});

	function alternar(e) {
		e.preventDefault();
		aberto = !aberto;
		if (aberto) {
			iniciarTurnstile();
			// Foco no primeiro campo quando o painel terminar de montar.
			setTimeout(() => campoNome?.focus(), 50);
		}
	}

	function fechar() {
		aberto = false;
	}

	function aoTeclar(e) {
		if (e.key === 'Escape' && aberto) fechar();
	}

	function iniciarTurnstile() {
		if (turnstileIniciado || !turnstileSiteKey) return;
		turnstileIniciado = true;
		tokenPronto = new Promise((resolve) => (resolverToken = resolve));

		const render = () => {
			if (!window.turnstile || !caixaTurnstile) return;
			window.turnstile.render(caixaTurnstile, {
				sitekey: turnstileSiteKey,
				callback: (t) => {
					turnstileToken = t;
					resolverToken?.(t);
				},
				'expired-callback': () => (turnstileToken = ''),
				'error-callback': () => {
					turnstileToken = '';
					resolverToken?.('');
				}
			});
		};

		// O script pode já estar na página (carregado pelo ContactForm).
		if (window.turnstile) return render();
		const existente = document.querySelector('script[src^="https://challenges.cloudflare.com/turnstile"]');
		if (existente) {
			existente.addEventListener('load', render);
			return;
		}
		const s = document.createElement('script');
		s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
		s.async = true;
		s.defer = true;
		s.onload = render;
		s.onerror = () => resolverToken?.('');
		document.head.appendChild(s);
	}

	function resumo() {
		return [
			'Olá! Quero falar com um consultor TIM Empresas.',
			`Nome: ${nome}`,
			`Celular: ${celular}`,
			`E-mail: ${email}`
		].join('\n');
	}

	async function enviar(e) {
		e.preventDefault();
		if (enviando) return;
		enviando = true;
		status = '';

		// WhatsApp abre PRIMEIRO, de forma síncrona — depois de um await o browser
		// deixa de tratar como gesto do usuário e bloqueia o popup (ver ContactForm).
		const janela = window.open(whatsappLink(resumo()), '_blank', 'noopener');

		if (tokenPronto && !turnstileToken) {
			await Promise.race([tokenPronto, new Promise((r) => setTimeout(r, ESPERA_TOKEN_MS))]);
		}

		try {
			const res = await fetch('/api/lead', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					nome,
					email,
					celular,
					mensagem: 'Contato rápido pelo botão flutuante do WhatsApp',
					website,
					pagina,
					'cf-turnstile-response': turnstileToken,
					...utm
				}),
				keepalive: true
			});
			if (!res.ok) throw new Error(`api ${res.status}`);
			status = 'ok';
		} catch {
			status = janela ? 'zap' : 'erro';
		} finally {
			enviando = false;
		}
	}

	const field =
		'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-tim-500 focus:ring-2 focus:ring-tim-200';
</script>

<svelte:window onkeydown={aoTeclar} />

{#if aberto}
	<!-- Painel de contato rápido, ancorado acima do botão. -->
	<div
		class="painel fixed right-4 z-50 w-[min(21rem,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
		role="dialog"
		aria-label="Fale com um consultor no WhatsApp"
	>
		<div class="flex items-start justify-between gap-2">
			<p class="text-sm font-semibold text-slate-900">
				Fale com um consultor
				<span class="block text-xs font-normal text-slate-500">
					Deixe seus dados e siga direto para o WhatsApp.
				</span>
			</p>
			<button
				type="button"
				class="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
				aria-label="Fechar"
				onclick={fechar}
			>
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" d="M6 6l12 12M6 18L18 6" />
				</svg>
			</button>
		</div>

		<form class="mt-3 space-y-2.5" onsubmit={enviar}>
			<input
				class={field}
				bind:this={campoNome}
				bind:value={nome}
				placeholder="Nome*"
				aria-label="Nome"
				required
				autocomplete="name"
			/>
			<input
				class={field}
				bind:value={celular}
				type="tel"
				placeholder="Celular / WhatsApp*"
				aria-label="Celular ou WhatsApp"
				required
				autocomplete="tel"
			/>
			<input
				class={field}
				bind:value={email}
				type="email"
				placeholder="E-mail*"
				aria-label="E-mail"
				required
				autocomplete="email"
			/>

			<!-- Honeypot: fora da tela e da navegação por teclado/leitor de tela. -->
			<div class="absolute left-[-9999px]" aria-hidden="true">
				<label>
					Não preencha este campo
					<input bind:value={website} name="website" tabindex="-1" autocomplete="off" />
				</label>
			</div>

			{#if turnstileSiteKey}
				<div bind:this={caixaTurnstile}></div>
			{/if}

			<button
				type="submit"
				disabled={enviando}
				class="w-full rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe5b] disabled:opacity-70"
			>
				{enviando ? 'Enviando…' : 'Continuar no WhatsApp'}
			</button>

			{#if status === 'ok'}
				<p class="text-xs font-medium text-green-700" role="status">
					Recebemos seus dados! Se o WhatsApp não abriu, chame em
					<a class="underline" href={whatsappLink(resumo())} target="_blank" rel="noopener">nosso número</a>.
				</p>
			{:else if status === 'zap'}
				<p class="text-xs font-medium text-slate-600" role="status">
					Continue pelo WhatsApp que abrimos para você. Se a janela não abriu, chame em
					<a class="underline" href={whatsappLink(resumo())} target="_blank" rel="noopener">nosso número</a>.
				</p>
			{:else if status === 'erro'}
				<p class="text-xs font-medium text-red-700" role="alert">
					Não conseguimos enviar. Fale direto pelo
					<a class="underline" href={whatsappLink(resumo())} target="_blank" rel="noopener">WhatsApp</a>.
				</p>
			{/if}

			<p class="text-center text-xs text-slate-500">
				<a
					class="underline hover:text-tim-600"
					href={whatsappLink()}
					target="_blank"
					rel="noopener"
					onclick={fechar}
				>
					Prefiro ir direto ao WhatsApp
				</a>
			</p>
		</form>
	</div>
{/if}

<!--
	Botão flutuante de WhatsApp, presente em todas as páginas.

	Detalhes que não são estéticos:
	- continua sendo <a> (fallback sem JS vai direto ao wa.me); com JS o clique
	  abre o painel de contato rápido acima.
	- `aria-label` explícito: o conteúdo é só um ícone, sem ele o leitor de tela
	  anuncia apenas "link".
	- `focus-visible` com anel: é um alvo alcançável por teclado e precisa de
	  indicação de foco visível.
	- `bottom` usa `env(safe-area-inset-bottom)` para não ficar sob a barra de
	  gestos do iPhone.
	- a animação de entrada respeita `prefers-reduced-motion`.
-->
<a
	href={whatsappLink()}
	target="_blank"
	rel="noopener"
	class="bolha fixed right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5b] active:scale-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:h-14 sm:w-14"
	aria-label="Falar com um consultor no WhatsApp — {contact.whatsappLabel}"
	aria-expanded={aberto}
	aria-haspopup="dialog"
	onclick={alternar}
>
	<!-- Anel de pulso: filho com z-index negativo fica atrás do fundo do próprio
	     link (o `fixed` + z-50 cria o contexto de empilhamento). Não intercepta
	     toques (pointer-events) nem é anunciado (aria-hidden). -->
	<span class="anel absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true"></span>
	<svg
		class="h-8 w-8 sm:h-7 sm:w-7"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
		focusable="false"
	>
		<path
			d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.24 8.24 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"
		/>
	</svg>
</a>

<style>
	.bolha {
		bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
		/* Entra com leve overshoot (curva com y > 1) depois de ~0.9s, para não
		   disputar atenção com o hero durante o carregamento. `both` mantém o
		   botão invisível durante o atraso. */
		animation: entrar 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s both;
	}

	@keyframes entrar {
		from {
			opacity: 0;
			transform: scale(0.4) translateY(1rem);
		}
	}

	.painel {
		/* Acima do botão (4rem de altura no mobile + 1rem de vão). */
		bottom: calc(6rem + env(safe-area-inset-bottom, 0px));
		animation: subir 0.2s ease-out both;
	}

	@keyframes subir {
		from {
			opacity: 0;
			transform: translateY(0.5rem);
		}
	}

	.anel {
		z-index: -1;
		pointer-events: none;
		/* Pulso lento e translúcido: chama o olho sem virar propaganda piscante.
		   70% do ciclo é pausa (frame 70%–100% idêntico). */
		animation: pulsar 3s ease-out 1.8s infinite;
		opacity: 0;
	}

	@keyframes pulsar {
		0% {
			transform: scale(1);
			opacity: 0.5;
		}
		70%,
		100% {
			transform: scale(1.65);
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bolha,
		.anel,
		.painel {
			animation: none;
		}
	}
</style>
