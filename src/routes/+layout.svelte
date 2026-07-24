<script>
	import '../app.css';
	import WhatsAppBubble from '$lib/components/WhatsAppBubble.svelte';

	let { children } = $props();
</script>

{@render children()}

<!-- Bolha do WhatsApp: no layout raiz para existir em toda página sem repetição. -->
<WhatsAppBubble />
