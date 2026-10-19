<script>
	import { redesSociais } from '$lib/redes.js';

	// `cor`: classes de cor do ícone — o rodapé do site é escuro, o do blog é claro.
	// slate-500 e não 400 no fundo claro: ícone clicável precisa de 3:1 (WCAG 1.4.11).
	let { class: classe = '', cor = 'text-slate-500 hover:text-tim-600' } = $props();
</script>

<!-- `rel="me"` declara que o perfil é desta entidade, o mesmo vínculo que o sameAs
     do JSON-LD faz. Sem nenhuma rede configurada, nada é renderizado. -->
{#if redesSociais.length}
	<ul class="flex gap-3 {classe}">
		{#each redesSociais as rede (rede.nome)}
			<li>
				<a
					href={rede.href}
					target="_blank"
					rel="me noopener"
					aria-label="{rede.nome} da TIM Corporativo"
					class={cor}
				>
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
						><path d={rede.icone} /></svg
					>
				</a>
			</li>
		{/each}
	</ul>
{/if}
