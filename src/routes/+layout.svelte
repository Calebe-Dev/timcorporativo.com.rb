<script>
	import '../app.css';
	import WhatsAppBubble from '$lib/components/WhatsAppBubble.svelte';
	import CookieConsent from '$lib/components/CookieConsent.svelte';

	let { children } = $props();
</script>

{@render children()}

<!-- Bolha do WhatsApp: no layout raiz para existir em toda página sem repetição. -->
<WhatsAppBubble />

<!-- Banner LGPD: enquanto não houver resposta, o GA4 não carrega (ver app.html). -->
<CookieConsent />
