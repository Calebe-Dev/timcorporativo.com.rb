<script>
	import Seo from '$lib/components/Seo.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SiteMap from '$lib/components/SiteMap.svelte';
	import OcHubOffers from '$lib/components/OcHubOffers.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import {
		hero,
		solutions,
		differentials,
		plans,
		advantages,
		contentSections,
		authority,
		contact,
		whatsappLink
	} from '$lib/site.js';

	// Vem do +layout.server.js da raiz — alimenta o mapa do site.
	let { data } = $props();
</script>

<Seo />

<Header />

<main>
	<!-- HERO -->
	<section class="relative overflow-hidden bg-tim-800 text-white">
		<!-- Elemento de LCP da home. `fetchpriority="high"` promove a imagem de
		     prioridade Medium para High no preload scanner: sem isso ela disputa
		     banda com CSS e JS na abertura. -->
		<img
			src={hero.image}
			alt=""
			aria-hidden="true"
			class="absolute inset-0 h-full w-full object-cover opacity-20"
			loading="eager"
			fetchpriority="high"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-b from-tim-800/85 to-tim-900/95"
			aria-hidden="true"
		></div>
		<div class="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-28">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-tim-100 ring-1 ring-white/20"
			>
				<span class="h-2 w-2 rounded-full bg-accent-400"></span>
				{hero.badge}
			</span>
			<h1 class="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
				{hero.title}
			</h1>
			<p class="mt-4 max-w-2xl text-base text-tim-100 sm:text-lg">{hero.subtitle}</p>

			<ul class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-tim-100">
				{#each hero.bullets as b}
					<li class="flex items-center gap-2">
						<svg class="h-5 w-5 text-accent-400" viewBox="0 0 24 24" fill="currentColor"
							><path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" /></svg
						>
						{b}
					</li>
				{/each}
			</ul>

			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a
					href="#contato"
					class="rounded-full bg-accent-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-accent-700"
				>
					Solicitar proposta
				</a>
				<a
					href={whatsappLink()}
					target="_blank"
					rel="noopener"
					class="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-tim-800 hover:bg-tim-50"
				>
					Falar no WhatsApp
				</a>
			</div>
		</div>
	</section>

	<!-- FAIXA DE CONFIANÇA -->
	<!-- Faixa de números: sem título por design, então é <div> e não <section> —
	     `section` sem heading não entra no outline do documento. -->
	<div class="border-b border-tim-100 bg-white">
		<div
			class="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-center sm:grid-cols-4"
		>
			<div><p class="text-2xl font-bold text-tim-700">+{contact.yearsExperience} anos</p><p class="text-xs text-slate-500">de mercado</p></div>
			<div><p class="text-2xl font-bold text-tim-700">Autorizado</p><p class="text-xs text-slate-500">representante TIM</p></div>
			<div><p class="text-2xl font-bold text-tim-700">Consultivo</p><p class="text-xs text-slate-500">atendimento dedicado</p></div>
			<div><p class="text-2xl font-bold text-tim-700">Nacional</p><p class="text-xs text-slate-500">cobertura TIM</p></div>
		</div>
	</div>

	<!-- SOLUÇÕES -->
	<section id="solucoes" class="bg-slate-50 py-16 sm:py-20">
		<div class="mx-auto max-w-6xl px-4">
			<h2 class="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
				Soluções TIM Empresa
			</h2>
			<p class="mx-auto mt-3 max-w-2xl text-center text-slate-600">
				Telefonia móvel, internet fibra e conectividade corporativa com orientação profissional.
			</p>
			<div class="mt-10 grid gap-6 md:grid-cols-3">
				{#each solutions as s}
					<article
						class="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
					>
						<div class="aspect-video overflow-hidden bg-tim-50">
							<!-- 800x800 é o tamanho real do arquivo .webp. O box é definido
							     pelo `aspect-video` do pai; estes atributos só informam a
							     proporção intrínseca ao browser. -->
							<img
								src={s.image}
								alt={s.name}
								class="h-full w-full object-cover"
								loading="lazy"
								decoding="async"
								width="800"
								height="800"
							/>
						</div>
						<div class="flex flex-1 flex-col p-5">
							<h3 class="text-lg font-bold text-tim-800">{s.name}</h3>
							<p class="mt-2 flex-1 text-sm text-slate-600">{s.text}</p>
							<a
								href="#contato"
								class="mt-4 text-sm font-semibold text-tim-600 hover:text-tim-700"
								>Consultar {s.name} →</a
							>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- POR QUE ESCOLHER -->
	<section class="bg-white py-16 sm:py-20">
		<div class="mx-auto max-w-6xl px-4">
			<h2 class="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
				Por que escolher a TIM Corporativo
			</h2>
			<div class="mt-10 grid gap-6 sm:grid-cols-3">
				{#each differentials as d}
					<div class="rounded-2xl bg-tim-50 p-6">
						<div class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-tim-600 text-white">
							<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"
								><path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" /></svg
							>
						</div>
						<h3 class="font-bold text-tim-800">{d.title}</h3>
						<p class="mt-2 text-sm text-slate-600">{d.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- PLANOS / PERFIS -->
	<section id="planos" class="bg-tim-900 py-16 text-white sm:py-20">
		<div class="mx-auto max-w-6xl px-4">
			<h2 class="text-center text-2xl font-bold sm:text-3xl">
				Planos para cada perfil de empresa
			</h2>
			<p class="mx-auto mt-3 max-w-2xl text-center text-tim-200">
				Descontos progressivos a partir de 10 linhas. Escolha entre TIM Black Empresa, TIM Fibra
				Empresa e TIM UltraFibra.
			</p>
			<div class="mt-10 grid gap-6 md:grid-cols-3">
				{#each plans as p}
					<div class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
						<h3 class="text-lg font-bold text-white">{p.name}</h3>
						<p class="mt-2 text-sm text-tim-100">{p.text}</p>
						<a
							href="#contato"
							class="mt-4 inline-block rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-700"
							>Pedir proposta</a
						>
					</div>
				{/each}
			</div>

			<!-- Ofertas vindas do OC Hub, logo abaixo dos perfis de plano. -->
			<div class="mt-10">
				<OcHubOffers layout="row" limit={10} sort="price_asc" />
			</div>
		</div>
	</section>

	<!-- VANTAGENS -->
	<section id="vantagens" class="bg-slate-50 py-16 sm:py-20">
		<div class="mx-auto max-w-6xl px-4">
			<h2 class="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
				Vantagens das soluções TIM Empresa
			</h2>
			<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each advantages as a}
					<div class="rounded-xl border border-slate-200 bg-white p-5">
						<h3 class="font-semibold text-tim-800">{a.title}</h3>
						<p class="mt-1 text-sm text-slate-600">{a.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CONTEÚDO EDITORIAL (herdado da home original — preserva as queries de pesquisa) -->
	<!-- Agrupa os blocos editoriais. Cada bloco é um <article> com seu próprio h2,
	     que pertence ao outline DO ARTICLE — a section ficaria sem heading. Como o
	     design não prevê título aqui, é <div>. -->
	<div id="conteudo" class="bg-white py-16 sm:py-20">
		<div class="mx-auto max-w-4xl px-4">
			<div class="space-y-12">
				{#each contentSections as c}
					<article id={c.id}>
						<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">{c.title}</h2>
						<div class="mt-4 space-y-4">
							{#each c.paragraphs as p}
								<p class="text-slate-600">{p}</p>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>

	<!-- AUTORIDADE (Renovação Segura + 15 anos — herdado da home original) -->
	<section class="bg-slate-50 py-16 sm:py-20">
		<div class="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h2 class="text-xl font-bold text-tim-800">{authority.renovacao.title}</h2>
				<p class="mt-3 text-slate-600">{authority.renovacao.text}</p>
				<a
					href="#contato"
					class="mt-5 inline-block rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-700"
					>Renovação Segura →</a
				>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h2 class="text-xl font-bold text-tim-800">{authority.experiencia.title}</h2>
				<p class="mt-3 text-slate-600">{authority.experiencia.text}</p>
			</div>
		</div>
		<div class="mx-auto mt-6 max-w-6xl px-4">
			<div class="rounded-2xl bg-tim-900 p-8 text-center text-white">
				<h2 class="text-xl font-bold sm:text-2xl">{authority.fechamento.title}</h2>
				<p class="mx-auto mt-3 max-w-3xl text-tim-100">{authority.fechamento.text}</p>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="bg-white py-16 sm:py-20">
		<div class="mx-auto max-w-6xl px-4">
			<h2 class="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
				Dúvidas frequentes sobre TIM Empresa
			</h2>
			<div class="mt-10"><Faq /></div>
		</div>
	</section>

	<!-- CONTATO -->
	<section id="contato" class="bg-tim-50 py-16 sm:py-20">
		<div class="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
			<div>
				<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">
					Receba uma proposta TIM Empresas
				</h2>
				<p class="mt-3 text-slate-600">
					Preencha o formulário e um consultor avalia o perfil da sua empresa para indicar a melhor
					combinação entre linhas móveis, internet fibra e serviços corporativos.
				</p>
				<p class="mt-3 font-medium text-tim-800">{authority.blackTagline}</p>
				<ul class="mt-6 space-y-3 text-sm text-slate-700">
					<li>📞 Telefone: <a class="font-semibold text-tim-700" href={contact.phoneHref}>{contact.phoneLabel}</a></li>
					<li>💬 WhatsApp: <a class="font-semibold text-tim-700" target="_blank" rel="noopener" href={whatsappLink()}>{contact.whatsappLabel}</a></li>
					<li>✉️ E-mail: <a class="font-semibold text-tim-700" href="mailto:{contact.emails[0]}">{contact.emails[0]}</a></li>
					<li>📍 {contact.address}</li>
				</ul>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
				<ContactForm />
			</div>
		</div>
	</section>
</main>

<!-- A home já tem o formulário em #contato logo acima; aqui entra só o mapa. -->
<SiteMap artigos={data.artigosRecentes} total={data.totalArtigos} />

<Footer />
