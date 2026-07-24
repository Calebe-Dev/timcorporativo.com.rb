<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { contact, whatsappLink } from '$lib/site.js';

	// `id` é prop porque a home já usa "contato" no menu; nas páginas de blog
	// usamos outro valor para não existirem dois ids iguais caso convivam.
	let { id = 'fale-conosco' } = $props();
</script>

<section {id} class="border-t border-slate-200 bg-tim-50 py-14">
	<div class="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-2">
		<div>
			<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">
				Receba uma proposta TIM Empresas
			</h2>
			<p class="mt-3 text-slate-600">
				Preencha o formulário e um consultor avalia o perfil da sua empresa para indicar a melhor
				combinação entre linhas móveis, internet fibra e serviços corporativos.
			</p>
			<ul class="mt-6 space-y-3 text-sm text-slate-700">
				<li>
					📞 Telefone:
					<a class="font-semibold text-tim-700 hover:underline" href={contact.phoneHref}>
						{contact.phoneLabel}
					</a>
				</li>
				<li>
					💬 WhatsApp:
					<a
						class="font-semibold text-tim-700 hover:underline"
						target="_blank"
						rel="noopener"
						href={whatsappLink()}
					>
						{contact.whatsappLabel}
					</a>
				</li>
				<li>
					✉️ E-mail:
					<a class="font-semibold text-tim-700 hover:underline" href="mailto:{contact.emails[0]}">
						{contact.emails[0]}
					</a>
				</li>
				<li>📍 {contact.address}</li>
			</ul>
		</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
			<ContactForm />
		</div>
	</div>
</section>
