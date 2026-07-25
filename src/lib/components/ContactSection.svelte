<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ContactChannels from '$lib/components/ContactChannels.svelte';

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
			<ContactChannels />
		</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
			<ContactForm />
		</div>
	</div>
</section>
