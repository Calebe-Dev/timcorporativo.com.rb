<script>
	import { contact, whatsappLink } from '$lib/site.js';
</script>

<!--
	Botão flutuante de WhatsApp, presente em todas as páginas.

	Detalhes que não são estéticos:
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
	class="bolha fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
	aria-label="Falar com um consultor no WhatsApp — {contact.whatsappLabel}"
>
	<svg class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
		<path
			d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.24 8.24 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"
		/>
	</svg>
</a>

<style>
	.bolha {
		bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
		animation: entrar 0.3s ease-out both;
	}

	@keyframes entrar {
		from {
			opacity: 0;
			transform: translateY(0.75rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bolha {
			animation: none;
		}
	}
</style>
