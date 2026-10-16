<script>
	import '../app.css';
	import WhatsAppBubble from '$lib/components/WhatsAppBubble.svelte';
	import BotChat from '$lib/components/BotChat.svelte';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import { onMount, tick } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { evento, rastrearCliquesWhatsApp } from '$lib/analytics.js';

	let { children } = $props();

	onMount(rastrearCliquesWhatsApp);

	// O SvelteKit troca de página sem recarregar, e o `config` do gtag só manda o
	// page_view da carga inicial: sem isto o GA4 enxerga apenas a página de
	// entrada de cada sessão. Medido em 16/10/2026 — clique interno, zero hits.
	//
	// Se um dia ligarem no GA4 "Mudanças de página com base em eventos do
	// histórico do navegador" (medição otimizada), este bloco passa a duplicar.
	afterNavigate(async ({ type, from, to }) => {
		if (type === 'enter' || !from || !to) return;
		// Âncora na mesma página (/#como-contratar) não é página nova.
		if (from.url.pathname === to.url.pathname && from.url.search === to.url.search) return;
		// O <title> da página nova é aplicado num efeito; espera ele assentar.
		await tick();
		evento('page_view', {
			page_location: to.url.href,
			page_referrer: from.url.href,
			page_title: document.title
		});
	});

	// Os dois canais flutuantes disputam o mesmo canto: o FAB do bot é fixo em
	// bottom/right 24px e não dá para reposicionar de fora. Então a bolha do
	// WhatsApp passa para a ESQUERDA e sai de cena quando o bot sobe — o bot
	// atende o mesmo objetivo (falar com um consultor) e ainda qualifica antes.
	//
	// Nos ~4s até o bot carregar, e em toda visita em que ele não subir (bot fora
	// do ar, origem não autorizada, script bloqueado), a bolha continua sendo o
	// canal flutuante da página. Por isso o estado começa em `false` e só o DOM do
	// widget o vira — ver BotChat.svelte.
	let botAtivo = $state(false);
</script>

{@render children()}

<!-- Bolha do WhatsApp: no layout raiz para existir em toda página sem repetição. -->
<WhatsAppBubble oculta={botAtivo} />

<!-- Chat da nossa consultoria. Injetado 4s depois do `load` para ficar fora da janela de
     medição das Core Web Vitals. -->
<BotChat onmontar={(subiu) => (botAtivo = subiu)} />

<!-- Banner LGPD: enquanto não houver resposta, o GA4 não carrega (ver app.html). -->
<CookieConsent />
