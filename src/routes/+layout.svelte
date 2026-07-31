<script>
	import '../app.css';
	import WhatsAppBubble from '$lib/components/WhatsAppBubble.svelte';
	import BotChat from '$lib/components/BotChat.svelte';
	import CookieConsent from '$lib/components/CookieConsent.svelte';

	let { children } = $props();

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

<!-- Chat do Grupo OC. Injetado 4s depois do `load` para ficar fora da janela de
     medição das Core Web Vitals. -->
<BotChat onmontar={(subiu) => (botAtivo = subiu)} />

<!-- Banner LGPD: enquanto não houver resposta, o GA4 não carrega (ver app.html). -->
<CookieConsent />
