<script>
	import SeoSolucao from '$lib/components/SeoSolucao.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SiteMap from '$lib/components/SiteMap.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ContactChannels from '$lib/components/ContactChannels.svelte';
	import LpHero from '$lib/components/lp/LpHero.svelte';
	import LpProva from '$lib/components/lp/LpProva.svelte';
	import LpIndice from '$lib/components/lp/LpIndice.svelte';
	import LpTabela from '$lib/components/lp/LpTabela.svelte';
	import LpPassos from '$lib/components/lp/LpPassos.svelte';
	import LpObjecoes from '$lib/components/lp/LpObjecoes.svelte';
	import LpRelacionadas from '$lib/components/lp/LpRelacionadas.svelte';

	let { data } = $props();
	const { lp, lpsRelacionadas, artigosRelacionados } = data;
</script>

<SeoSolucao
	title={lp.title}
	description={lp.description}
	keywords={lp.keywords}
	path="/solucoes/{lp.slug}/"
	service={lp.service}
	faq={lp.faq}
	steps={lp.passos?.itens ?? null}
	stepsTitle={lp.passos?.titulo ?? ''}
/>

<Header />

<main>
	<LpHero {lp} />
	<LpProva />

	<!-- RESUMO + CORPO EDITORIAL -->
	<div class="bg-white py-16 sm:py-20">
		<div class="mx-auto max-w-6xl px-4">
			<div class="grid gap-12 lg:grid-cols-[15rem_1fr]">
				<aside class="order-2 lg:order-1">
					<LpIndice secoes={lp.secoes} />
				</aside>

				<div class="order-1 min-w-0 lg:order-2">
					<!-- Resposta direta em até ~50 palavras, antes de qualquer subtítulo.
					     É o trecho que AI Overview e assistentes citam, e o que o leitor
					     apressado precisa para decidir se continua. -->
					<p
						class="border-l-4 border-tim-500 bg-tim-50/70 px-6 py-5 text-lg leading-relaxed font-medium text-slate-800"
					>
						{lp.resumo}
					</p>

					<div class="mt-14 space-y-14">
						{#each lp.secoes as secao (secao.id)}
							<section id={secao.id} class="scroll-mt-24">
								<h2 class="text-balance text-2xl font-bold text-slate-900 sm:text-3xl">
									{secao.h2}
								</h2>

								{#each secao.paragrafos as p}
									<p class="mt-4 leading-relaxed text-slate-600 sm:text-lg">{p}</p>
								{/each}

								{#if secao.lista}
									<ul class="mt-5 space-y-3">
										{#each secao.lista as item}
											<li class="flex items-start gap-3 text-slate-600 sm:text-lg">
												<svg
													class="mt-1.5 h-4 w-4 shrink-0 text-tim-500"
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
												>
													<path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
												</svg>
												<span>{item}</span>
											</li>
										{/each}
									</ul>
								{/if}

								{#each secao.subsecoes ?? [] as sub}
									<h3 class="mt-8 text-lg font-bold text-tim-800 sm:text-xl">{sub.h3}</h3>
									{#each sub.paragrafos as p}
										<p class="mt-3 leading-relaxed text-slate-600 sm:text-lg">{p}</p>
									{/each}
								{/each}

								{#if secao.tabela}
									<LpTabela tabela={secao.tabela} />
								{/if}

								{#if secao.checklist}
									<div class="mt-8 rounded-2xl border border-tim-100 bg-tim-50/60 p-6 sm:p-8">
										<h3 class="text-lg font-bold text-tim-900">{secao.checklist.titulo}</h3>
										{#if secao.checklist.intro}
											<p class="mt-2 text-sm leading-relaxed text-slate-600">
												{secao.checklist.intro}
											</p>
										{/if}
										<ul class="mt-5 grid gap-3 sm:grid-cols-2">
											{#each secao.checklist.itens as item}
												<li class="flex items-start gap-3 rounded-lg bg-white p-3.5 text-sm text-slate-700 shadow-sm">
													<svg
														class="mt-0.5 h-4 w-4 shrink-0 text-tim-600"
														viewBox="0 0 24 24"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.5l-4-4L8.4 11l2.6 2.6L15.6 9l1.4 1.4-6 6.1z"
														/>
													</svg>
													<span>{item}</span>
												</li>
											{/each}
										</ul>
									</div>
								{/if}
							</section>
						{/each}
					</div>

					<!-- E-E-A-T: de onde vem a autoridade para afirmar o que está acima.
					     Processo real e critério verificável, não adjetivo. -->
					<section
						id="quem-assina"
						class="mt-16 scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
					>
						<h2 class="text-xl font-bold text-slate-900 sm:text-2xl">{lp.eeat.titulo}</h2>
						{#each lp.eeat.paragrafos as p}
							<p class="mt-3 leading-relaxed text-slate-600">{p}</p>
						{/each}
					</section>
				</div>
			</div>
		</div>
	</div>

	{#if lp.passos}
		<LpPassos titulo={lp.passos.titulo} subtitulo={lp.passos.subtitulo} passos={lp.passos.itens} />
	{/if}

	{#if lp.objecoes?.length}
		<LpObjecoes objecoes={lp.objecoes} />
	{/if}

	<!-- FAQ -->
	<section id="duvidas" class="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
		<div class="mx-auto max-w-6xl px-4">
			<h2 class="text-balance text-center text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
				{lp.faqTitulo}
			</h2>
			<div class="mt-10"><Faq items={lp.faq} /></div>
		</div>
	</section>

	<!-- CONVERSÃO -->
	<section id="proposta" class="scroll-mt-24 bg-tim-50 py-16 sm:py-20">
		<div class="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
			<div>
				<h2 class="text-balance text-2xl font-bold text-slate-900 sm:text-3xl">{lp.cta.titulo}</h2>
				<p class="mt-3 leading-relaxed text-slate-600">{lp.cta.texto}</p>
				<ContactChannels />
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
				<ContactForm />
			</div>
		</div>
	</section>

	<LpRelacionadas lps={lpsRelacionadas} artigos={artigosRelacionados} />
</main>

<SiteMap artigos={data.artigosRecentes} total={data.totalArtigos} solucoes={data.solucoes} />

<Footer />
