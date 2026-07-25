<script>
	import { site, contact, whatsappLink } from '$lib/site.js';

	// `artigos` vem do +layout.server.js (memoizado). Se faltar, o mapa ainda
	// renderiza as demais colunas — nenhuma página quebra por causa do CMS.
	// `tituloArtigos` muda nas páginas de artigo ("Mais artigos do blog"), onde a
	// lista vem em anel e não são necessariamente os mais recentes.
	let { artigos = [], total = 0, tituloArtigos = 'Últimos artigos' } = $props();

	// Âncoras da home: de dentro de um artigo precisam do caminho absoluto,
	// senão "#planos" tentaria uma seção que não existe naquela página.
	const secoes = [
		{ href: '/#solucoes', label: 'Soluções TIM Empresa' },
		{ href: '/#planos', label: 'Planos por porte de empresa' },
		{ href: '/#vantagens', label: 'Vantagens' },
		{ href: '/#conteudo', label: 'TIM Black, Fibra e UltraFibra' },
		{ href: '/#faq', label: 'Dúvidas frequentes' },
		{ href: '/#contato', label: 'Falar com consultor' }
	];
</script>

<section aria-labelledby="mapa-do-site" class="border-t border-slate-200 bg-white py-12">
	<div class="mx-auto max-w-6xl px-4">
		<h2 id="mapa-do-site" class="text-lg font-bold text-slate-900">Mapa do site</h2>

		<div class="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<nav aria-label="Páginas principais">
				<h3 class="text-sm font-semibold text-tim-800">Navegação</h3>
				<ul class="mt-3 space-y-2 text-sm">
					<li><a class="text-slate-600 hover:text-tim-600 hover:underline" href="/">Início</a></li>
					{#each secoes as s}
						<li>
							<a class="text-slate-600 hover:text-tim-600 hover:underline" href={s.href}>
								{s.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav aria-label="Conteúdo" class="lg:col-span-2">
				<h3 class="text-sm font-semibold text-tim-800">
					{tituloArtigos}
					{#if total}<span class="font-normal text-slate-500">({total} no total)</span>{/if}
				</h3>
				{#if artigos.length}
					<ul class="mt-3 grid gap-2 text-sm sm:grid-cols-2">
						{#each artigos as a}
							<li>
								<a class="text-slate-600 hover:text-tim-600 hover:underline" href="/{a.slug}/">
									{a.title}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
				<p class="mt-3 text-sm">
					<a class="font-semibold text-tim-700 hover:underline" href="/blog">
						Ver todos os artigos →
					</a>
				</p>
			</nav>

			<div>
				<h3 class="text-sm font-semibold text-tim-800">Contato</h3>
				<ul class="mt-3 space-y-2 text-sm text-slate-600">
					<li>
						<a class="hover:text-tim-600 hover:underline" href={contact.phoneHref}>
							{contact.phoneLabel}
						</a>
					</li>
					<li>
						<a
							class="hover:text-tim-600 hover:underline"
							href={whatsappLink()}
							target="_blank"
							rel="noopener"
						>
							WhatsApp {contact.whatsappLabel}
						</a>
					</li>
					<li>
						<a class="hover:text-tim-600 hover:underline" href="mailto:{contact.emails[0]}">
							{contact.emails[0]}
						</a>
					</li>
					<li>{contact.address}</li>
				</ul>

				<h3 class="mt-6 text-sm font-semibold text-tim-800">Institucional</h3>
				<ul class="mt-3 space-y-2 text-sm">
					<!-- Sem link para /sitemap.xml aqui: o sitemap é interface de robô
					     (descoberto via robots.txt), não navegação para pessoas. -->
					<li>
						<a class="text-slate-600 hover:text-tim-600 hover:underline" href="/politica-de-privacidade">
							Política de Privacidade
						</a>
					</li>
				</ul>
				<p class="mt-4 text-xs text-slate-500">CNPJ {contact.cnpj} · {site.legalName}</p>
			</div>
		</div>
	</div>
</section>
