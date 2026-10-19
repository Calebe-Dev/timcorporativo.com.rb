<script>
	import { site, contact, nav, whatsappLink } from '$lib/site.js';
	import RedesSociais from '$lib/components/RedesSociais.svelte';
</script>

<footer class="bg-tim-900 text-tim-100">
	<div class="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
		<div>
			<div class="flex items-center">
				<span class="inline-flex rounded bg-white px-2.5 py-1.5">
					<img
						src={site.logoWide}
						alt="TIM Corporativo"
						class="h-6 w-auto"
						width="82"
						height="24"
					/>
				</span>
			</div>
			<!-- ENTIDADE-OC-TEL 2026-09-10 — anterior: "operado pelo {site.legalName} há mais de N anos."
			     "pelo" → "pela": com a razão social real (OC Telecomunicações LTDA) a
			     concordância é feminina. -->
			<p class="mt-3 text-sm text-tim-200">
				Representante autorizado TIM para empresas, operado pela {site.legalName} há
				mais de {contact.yearsExperience} anos.
			</p>
			<!-- Perfis da marca — os MESMOS URLs do sameAs no JSON-LD (schema.js), para
			     o grafo de entidades do Google bater com o que está visível.
			     REDES-TIM-CORPORATIVO 2026-10-19 — anterior: lista do Grupo OC comentada
			     (GRUPO-OC-OCULTO 2026-09-09). `rel="me"` declara que o perfil é desta
			     entidade; rede sem URL em `contact` simplesmente não aparece. -->
			<RedesSociais class="mt-4" cor="text-tim-300 hover:text-white" />
		</div>

		<div>
			<h3 class="mb-3 text-sm font-semibold text-white">Navegação</h3>
			<ul class="space-y-2 text-sm">
				{#each nav as item}
					<li><a href={item.href} class="text-tim-200 hover:text-white">{item.label}</a></li>
				{/each}
				<li>
					<a href="/politica-de-privacidade" class="text-tim-200 hover:text-white">
						Política de Privacidade
					</a>
				</li>
				<!-- GRUPO-OC-OCULTO 2026-09-09 (reverter: restaurar o trecho abaixo)
				<li>
					<a
						href="https://grupooc.com.br"
						target="_blank"
						rel="noopener"
						class="text-tim-200 hover:text-white"
					>
						Sobre o Grupo OC
					</a>
				</li>
				-->
			</ul>
		</div>

		<div>
			<h3 class="mb-3 text-sm font-semibold text-white">Contato</h3>
			<ul class="space-y-2 text-sm text-tim-200">
				<li><a href={contact.phoneHref} class="hover:text-white">Tel. {contact.phoneLabel}</a></li>
				<li>
					<a href={whatsappLink()} target="_blank" rel="noopener" class="hover:text-white"
						>WhatsApp {contact.whatsappLabel}</a
					>
				</li>
				{#each contact.emails as email}
					<li><a href="mailto:{email}" class="hover:text-white">{email}</a></li>
				{/each}
			</ul>
		</div>

		<div>
			<h3 class="mb-3 text-sm font-semibold text-white">Endereço</h3>
			<p class="text-sm text-tim-200">{contact.address}</p>
			<!-- CNPJ-REMOVIDO 2026-09-10 (reverter: restaurar a linha abaixo)
			<p class="mt-2 text-sm text-tim-200">CNPJ: {contact.cnpj}</p>
			-->
			<!-- ENTIDADE-OC-TEL 2026-09-10 — bloco restaurado com o CNPJ da entidade
			     que opera o site. Sai em toda página, junto do © logo abaixo. -->
			<p class="mt-2 text-sm text-tim-200">CNPJ: {contact.cnpj}</p>
		</div>
	</div>

	<div class="border-t border-tim-800">
		<div
			class="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-tim-300 sm:flex sm:justify-between sm:text-left"
		>
			<p>© {new Date().getFullYear()} {site.legalName} · Todos os direitos reservados.</p>
			<p class="mt-2 sm:mt-0">
				TIM é marca registrada da TIM S.A. Este é o site de um representante autorizado.
			</p>
		</div>
	</div>
</footer>
