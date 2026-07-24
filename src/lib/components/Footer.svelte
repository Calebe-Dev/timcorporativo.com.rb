<script>
	import { site, contact, nav, whatsappLink } from '$lib/site.js';
</script>

<footer class="bg-tim-900 text-tim-100">
	<div class="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
		<div>
			<div class="flex items-center gap-2">
				<img src={site.logo} alt="TIM" class="h-9 w-9 rounded bg-white p-1" width="36" height="36" />
				<span class="font-bold text-white">TIM Corporativo</span>
			</div>
			<p class="mt-3 text-sm text-tim-200">
				Representante autorizado TIM para empresas, operado pelo {site.legalName} há
				mais de {contact.yearsExperience} anos.
			</p>
		</div>

		<div>
			<h3 class="mb-3 text-sm font-semibold text-white">Navegação</h3>
			<ul class="space-y-2 text-sm">
				{#each nav as item}
					<li><a href={item.href} class="text-tim-200 hover:text-white">{item.label}</a></li>
				{/each}
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
