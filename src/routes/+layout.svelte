<script>
	import '../app.css';
	import WhatsAppBubble from '$lib/components/WhatsAppBubble.svelte';
	import BotChat from '$lib/components/BotChat.svelte';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import { onMount, tick } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { semConversao } from '$lib/sem-conversao.js';
	import { evento, rastrearCliquesWhatsApp } from '$lib/analytics.js';

	let { children } = $props();

	onMount(rastrearCliquesWhatsApp);

	// Marca as tabelas que de fato transbordam (ver .tabela-rolavel em app.css):
	// só nelas aparecem o aviso "deslize" e as sombras de rolagem.
	function marcarTabelasRolaveis() {
		for (const el of document.querySelectorAll('.tabela-rolavel')) {
			el.toggleAttribute('data-rola', el.scrollWidth > el.clientWidth + 1);
		}
	}
	onMount(() => {
		let quadro = 0;
		const aoRedimensionar = () => {
			cancelAnimationFrame(quadro);
			quadro = requestAnimationFrame(marcarTabelasRolaveis);
		};
		window.addEventListener('resize', aoRedimensionar);
		return () => window.removeEventListener('resize', aoRedimensionar);
	});

	// O SvelteKit troca de página sem recarregar, e o `config` do gtag só manda o
	// page_view da carga inicial: sem isto o GA4 enxerga apenas a página de
	// entrada de cada sessão. Medido em 16/10/2026 — clique interno, zero hits.
	//
	// Se um dia ligarem no GA4 "Mudanças de página com base em eventos do
	// histórico do navegador" (medição otimizada), este bloco passa a duplicar.
	afterNavigate(async ({ type, from, to }) => {
		await tick();
		marcarTabelasRolaveis();
		if (type === 'enter' || !from || !to) return;
		// Âncora na mesma página (/#como-contratar) não é página nova.
		if (from.url.pathname === to.url.pathname && from.url.search === to.url.search) return;
		// O <title> da página nova já assentou: o tick() lá em cima esperou o efeito.
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

	// Páginas sem conversão ($lib/sem-conversao.js): nem bolha nem bot. O bot
	// só é injetado depois que a pessoa passa por uma página comum, e a partir
	// daí fica montado: voltar a uma página sem conversão só o esconde, pelo
	// atributo no <html> (app.css). Desmontar e remontar injetaria o widget duas vezes.
	const semConv = $derived(semConversao(page.url.pathname));
	let botLiberado = $state(false);
	$effect(() => {
		if (!semConv) botLiberado = true;
		document.documentElement.toggleAttribute('data-sem-conversao', semConv);
	});
</script>

{@render children()}

<!-- Bolha do WhatsApp: no layout raiz para existir em toda página sem repetição. -->
{#if !semConv}
	<WhatsAppBubble oculta={botAtivo} />
{/if}

<!-- Chat da nossa consultoria. Injetado 4s depois do `load` para ficar fora da janela de
     medição das Core Web Vitals. -->
{#if botLiberado}
	<BotChat onmontar={(subiu) => (botAtivo = subiu)} />
{/if}

<!-- Banner LGPD: enquanto não houver resposta, o GA4 não carrega (ver app.html). -->
<CookieConsent />
