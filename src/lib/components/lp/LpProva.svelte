<script>
	import { contact } from '$lib/site.js';

	// Prova verificável, logo abaixo do hero. Sem JSON-LD de AggregateRating: nota
	// da própria empresa marcada no próprio site é self-serving, o Google ignora
	// e pode penalizar. O link para o perfil real resolve — quem quiser confere.
	const avaliacao = { nota: '4,9', total: 110, url: 'https://share.google/cjTKDhFjkYiTJCAx8' };
</script>

<div class="border-b border-slate-200 bg-white">
	<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-5 sm:justify-between">
		<a
			href={avaliacao.url}
			target="_blank"
			rel="noopener"
			class="flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-tim-700"
		>
			<span class="flex" aria-hidden="true">
				{#each Array(5) as _}
					<svg class="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
						<path
							d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 0 0 .95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 0 0-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 0 0-1.18 0l-2.8 2.03c-.78.57-1.83-.2-1.54-1.12l1.07-3.29a1 1 0 0 0-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.6-1.81h3.45a1 1 0 0 0 .95-.69l1.07-3.3z"
						/>
					</svg>
				{/each}
			</span>
			{avaliacao.nota} no Google · {avaliacao.total} avaliações
		</a>

		<p class="text-sm text-slate-600">
			<strong class="font-semibold text-tim-800">+{contact.yearsExperience} anos</strong> em telecom empresarial
		</p>
		<p class="text-sm text-slate-600">
			<strong class="font-semibold text-tim-800">Representante autorizado</strong> TIM
		</p>
		<p class="text-sm text-slate-600">
			Atende de MEI a <strong class="font-semibold text-tim-800">BYD</strong>
		</p>
	</div>
</div>
