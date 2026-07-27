<script>
	let { tabela } = $props();
</script>

<!--
	Tabela comparativa. O wrapper tem overflow-x-auto próprio porque o corpo da
	página nunca pode rolar na horizontal no mobile — a tabela rola dentro da
	própria caixa. tabindex=0 no wrapper para quem navega por teclado conseguir
	rolar a região; sem ele o conteúdo cortado fica inalcançável.
-->
<figure class="mt-8">
	<!--
		svelte-ignore a11y_no_noninteractive_tabindex

		O aviso está errado neste caso específico. Container com rolagem precisa ser
		alcançável por teclado, senão quem não usa mouse não consegue ver a parte
		cortada da tabela — é o critério "scrollable region must have keyboard
		access" (WCAG 2.1.1), e o padrão para atendê-lo é exatamente tabindex="0"
		num elemento com role de região e nome acessível. A regra do Svelte proíbe
		tabindex em elemento não interativo sem abrir exceção para esse caso.
	-->
	<div
		class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-tim-500"
		tabindex="0"
		role="region"
		aria-labelledby="tabela-legenda"
	>
		<table class="w-full min-w-[34rem] border-collapse text-left text-sm">
			<thead>
				<tr class="bg-tim-800 text-white">
					{#each tabela.head as h, i}
						<th
							scope="col"
							class="px-4 py-3.5 font-semibold {i === 0 ? 'rounded-tl-2xl' : ''} {i ===
							tabela.head.length - 1
								? 'rounded-tr-2xl'
								: ''}"
						>
							{h}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-200">
				{#each tabela.rows as row}
					<tr class="bg-white transition even:bg-slate-50/70 hover:bg-tim-50/60">
						{#each row as cell, i}
							{#if i === 0}
								<!-- Primeira coluna é o rótulo da linha: th com scope=row dá a
								     leitores de tela o contexto de cada célula. -->
								<th scope="row" class="px-4 py-3.5 font-semibold text-slate-900">{cell}</th>
							{:else}
								<td class="px-4 py-3.5 text-slate-600">{cell}</td>
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<figcaption id="tabela-legenda" class="mt-3 text-xs leading-relaxed text-slate-500">
		{tabela.caption}
	</figcaption>
</figure>
