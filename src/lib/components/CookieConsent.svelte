<script>
	import { onMount } from 'svelte';

	// Só decide DEPOIS de montar: no SSG não existe localStorage, e renderizar o
	// banner no HTML estático causaria flash para quem já respondeu.
	let visivel = $state(false);

	onMount(() => {
		visivel = !localStorage.getItem('consentimento-cookies');
	});

	function decidir(aceito) {
		localStorage.setItem('consentimento-cookies', aceito ? 'aceito' : 'recusado');
		if (aceito) {
			// O carregador vive no app.html — único lugar que conhece as tags.
			window.carregarAnalytics?.();
		} else {
			// Apaga cookies _ga* já existentes — visitantes antigos os receberam
			// antes do banner existir; recusar deve limpar, não só parar de coletar.
			const expira = 'expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
			for (const c of document.cookie.split('; ')) {
				const nome = c.split('=')[0];
				if (nome.startsWith('_ga') || nome.startsWith('_gid') || nome.startsWith('_gat')) {
					document.cookie = `${nome}=;${expira}`;
					document.cookie = `${nome}=;${expira};domain=.${location.hostname}`;
				}
			}
		}
		visivel = false;
	}
</script>

{#if visivel}
	<div
		role="region"
		aria-label="Aviso de cookies"
		class="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
	>
		<div
			class="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
		>
			<p class="text-sm leading-relaxed text-slate-700">
				Usamos cookies de análise (Google Analytics) para entender como o site é usado. Você pode
				aceitar ou recusar — o site funciona do mesmo jeito.
				<a href="/politica-de-privacidade" class="font-semibold text-tim-700 hover:underline">
					Política de Privacidade
				</a>
			</p>
			<!-- Recusar e Aceitar com o mesmo peso visual de clique: recusa fácil é
			     requisito de consentimento livre (LGPD), não gentileza. -->
			<div class="flex shrink-0 gap-2">
				<button
					onclick={() => decidir(false)}
					class="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
				>
					Recusar
				</button>
				<button
					onclick={() => decidir(true)}
					class="rounded-full bg-tim-600 px-5 py-2 text-sm font-semibold text-white hover:bg-tim-700"
				>
					Aceitar
				</button>
			</div>
		</div>
	</div>
{/if}
