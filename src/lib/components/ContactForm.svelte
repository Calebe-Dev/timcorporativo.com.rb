<script>
	import { formOptions, whatsappLink } from '$lib/site.js';

	let nome = $state('');
	let email = $state('');
	let celular = $state('');
	let cnpj = $state('');
	let linhas = $state('');
	let operadora = $state('');
	let mensagem = $state('');

	function resumo() {
		return [
			`Novo contato pelo site TIM Corporativo`,
			`Nome: ${nome}`,
			`E-mail: ${email}`,
			`Celular: ${celular}`,
			cnpj && `CNPJ: ${cnpj}`,
			linhas && `Nº de linhas: ${linhas}`,
			operadora && `Operadora atual: ${operadora}`,
			mensagem && `Mensagem: ${mensagem}`
		]
			.filter(Boolean)
			.join('\n');
	}

	function enviarWhatsApp(e) {
		e.preventDefault();
		window.open(whatsappLink(resumo()), '_blank', 'noopener');
	}

	const field =
		'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-tim-500 focus:ring-2 focus:ring-tim-200';
</script>

<form class="space-y-3" onsubmit={enviarWhatsApp}>
	<div class="grid gap-3 sm:grid-cols-2">
		<input class={field} bind:value={nome} placeholder="Nome*" required autocomplete="name" />
		<input
			class={field}
			bind:value={email}
			type="email"
			placeholder="E-mail*"
			required
			autocomplete="email"
		/>
		<input
			class={field}
			bind:value={celular}
			type="tel"
			placeholder="Celular / WhatsApp*"
			required
			autocomplete="tel"
		/>
		<input class={field} bind:value={cnpj} placeholder="CNPJ" inputmode="numeric" />
		<select class={field} bind:value={linhas}>
			<option value="">Nº de linhas</option>
			{#each formOptions.linhas as opt}<option>{opt}</option>{/each}
		</select>
		<select class={field} bind:value={operadora}>
			<option value="">Operadora atual</option>
			{#each formOptions.operadoras as opt}<option>{opt}</option>{/each}
		</select>
	</div>
	<textarea class={field} bind:value={mensagem} rows="3" placeholder="Mensagem (opcional)"></textarea>

	<button
		type="submit"
		class="flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-accent-600"
	>
		<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
			><path
				d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.24 8.24 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"
			/></svg
		>
		Falar no WhatsApp
	</button>
	<p class="text-xs text-slate-500">
		Seus dados são usados apenas para retorno do contato comercial. Atendimento de representante
		autorizado TIM.
	</p>
</form>
