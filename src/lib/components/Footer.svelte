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
			<!-- Perfis oficiais do Grupo OC — mesmos URLs do sameAs no JSON-LD, para
			     o grafo de entidades do Google bater com o que está visível. -->
			<ul class="mt-4 flex gap-3">
				<li>
					<a
						href={contact.facebook}
						target="_blank"
						rel="noopener"
						aria-label="Facebook do Grupo OC"
						class="text-tim-300 hover:text-white"
					>
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
							><path
								d="M13.4 21v-8.2h2.7l.4-3.2h-3.1V7.6c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2H10V21h3.4z"
							/></svg
						>
					</a>
				</li>
				<li>
					<a
						href={contact.instagram}
						target="_blank"
						rel="noopener"
						aria-label="Instagram do Grupo OC"
						class="text-tim-300 hover:text-white"
					>
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
							><path
								d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.8-.3 1.8-.1 1.3-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.8.3 1.8.3 1.3.1 1.6.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.8.3-1.8.1-1.3.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.1-.8-.3-1.8-.3-1.3-.1-1.6-.1-4.8-.1zm0 3.1a5 5 0 110 9.9 5 5 0 010-9.9zm0 8.1a3.2 3.2 0 100-6.3 3.2 3.2 0 000 6.3zm6.3-8.3a1.2 1.2 0 11-2.3 0 1.2 1.2 0 012.3 0z"
							/></svg
						>
					</a>
				</li>
				<li>
					<a
						href={contact.linkedin}
						target="_blank"
						rel="noopener"
						aria-label="LinkedIn do Grupo OC"
						class="text-tim-300 hover:text-white"
					>
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
							><path
								d="M20.4 3H3.6c-.4 0-.6.2-.6.6v16.8c0 .4.2.6.6.6h16.8c.4 0 .6-.2.6-.6V3.6c0-.4-.2-.6-.6-.6zM8.3 18.4H5.7V9.7h2.6v8.7zM7 8.6a1.6 1.6 0 110-3.1 1.6 1.6 0 010 3.1zm11.4 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2c.3-.7 1.2-1.4 2.5-1.4 2.6 0 3.1 1.7 3.1 4v4.9z"
							/></svg
						>
					</a>
				</li>
			</ul>
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
