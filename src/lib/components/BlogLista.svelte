<script>
	import { hrefPagina, janela } from '$lib/blog/paginacao.js';

	// Usado por /blog (página 1) e por /blog/pagina/[n]. Uma fonte só para os
	// dois, para a listagem e a paginação não divergirem entre as rotas.
	let { items = [], pagina = 1, totalPaginas = 1, totalArtigos = 0 } = $props();

	const numeros = $derived(janela(pagina, totalPaginas));
	const anterior = $derived(pagina > 1 ? hrefPagina(pagina - 1) : null);
	const proxima = $derived(pagina < totalPaginas ? hrefPagina(pagina + 1) : null);

	function formatDate(iso) {
		if (!iso) return '';
		return new Date(iso).toLocaleDateString('pt-BR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	// <time> sem `datetime` obriga o TEXTO a ser uma data válida pela spec — e
	// "26 de maio de 2026" não é. Sem este atributo o Nu acusava um erro por
	// artigo e nenhuma máquina conseguia ler a data.
	//
	// Os componentes saem do horário LOCAL, não de toISOString(): o rótulo
	// visível também é local, e converter para UTC mudaria o dia em metade dos
	// fusos — a data legível e a legível por máquina passariam a discordar.
	function isoDate(iso) {
		const d = new Date(iso);
		if (Number.isNaN(d.getTime())) return '';
		const mes = String(d.getMonth() + 1).padStart(2, '0');
		const dia = String(d.getDate()).padStart(2, '0');
		return `${d.getFullYear()}-${mes}-${dia}`;
	}

	const numeroClasse =
		'flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium';
</script>

{#if items.length === 0}
	<p class="rounded-lg border border-slate-200 bg-slate-50 p-6 text-slate-500">
		Nenhum artigo publicado no momento.
	</p>
{:else}
	<ul class="grid gap-5 sm:grid-cols-2">
		{#each items as post (post.id)}
			<li>
				<a
					href="/{post.slug}/"
					class="flex h-full flex-col rounded-xl border border-slate-200 p-5 transition hover:border-tim-300 hover:shadow-md"
				>
					{#if post.date}
						<time datetime={isoDate(post.date)} class="text-xs font-medium text-tim-600">
							{formatDate(post.date)}
						</time>
					{/if}
					<h2 class="mt-1 text-lg font-semibold text-slate-900">{post.title}</h2>
					{#if post.meta_description}
						<p class="mt-2 line-clamp-3 text-sm text-slate-600">{post.meta_description}</p>
					{/if}
					{#if post.keywords?.length}
						<div class="mt-3 flex flex-wrap gap-1.5">
							{#each post.keywords.slice(0, 3) as kw}
								<span class="rounded-full bg-tim-50 px-2 py-0.5 text-[11px] font-medium text-tim-700">
									{kw}
								</span>
							{/each}
						</div>
					{/if}
					<span class="mt-auto pt-4 text-sm font-semibold text-tim-600">Ler artigo →</span>
				</a>
			</li>
		{/each}
	</ul>

	{#if totalPaginas > 1}
		<!-- Rotulado porque o cabeçalho do BlogShell também é <nav>: dois landmarks
		     de mesma role sem nome ficam indistinguíveis no leitor de tela.
		     Links de verdade, não botões: o site é estático e cada fatia precisa
		     de URL própria para o Google rastrear. -->
		<nav aria-label="Paginação do blog" class="mt-10 border-t border-slate-200 pt-6">
			<ul class="flex flex-wrap items-center justify-center gap-2">
				<li>
					{#if anterior}
						<a
							href={anterior}
							rel="prev"
							class="{numeroClasse} border-slate-300 text-slate-700 hover:border-tim-300 hover:text-tim-700"
						>
							← Anterior
						</a>
					{:else}
						<!-- slate-500, não slate-400: o 400 dá 2,6:1 sobre branco e reprova o
						     mínimo de 4,5:1 do WCAG AA. O 500 dá 4,76:1 e continua
						     visivelmente mais claro que o link ativo (slate-700). -->
						<span class="{numeroClasse} border-transparent text-slate-500">← Anterior</span>
					{/if}
				</li>

				{#each numeros as n}
					<li>
						{#if n === null}
							<span class="px-1 text-slate-400" aria-hidden="true">…</span>
						{:else if n === pagina}
							<!-- aria-current identifica a página atual para o leitor de tela;
							     sem ele a única pista seria a cor, que não é anunciada. -->
							<a
								href={hrefPagina(n)}
								aria-current="page"
								class="{numeroClasse} border-tim-600 bg-tim-600 text-white"
							>
								{n}
							</a>
						{:else}
							<a
								href={hrefPagina(n)}
								class="{numeroClasse} border-slate-300 text-slate-700 hover:border-tim-300 hover:text-tim-700"
							>
								{n}
							</a>
						{/if}
					</li>
				{/each}

				<li>
					{#if proxima}
						<a
							href={proxima}
							rel="next"
							class="{numeroClasse} border-slate-300 text-slate-700 hover:border-tim-300 hover:text-tim-700"
						>
							Próxima →
						</a>
					{:else}
						<span class="{numeroClasse} border-transparent text-slate-500">Próxima →</span>
					{/if}
				</li>
			</ul>

			<p class="mt-4 text-center text-sm text-slate-500">
				Página {pagina} de {totalPaginas} · {totalArtigos} artigos publicados
			</p>
		</nav>
	{/if}
{/if}
