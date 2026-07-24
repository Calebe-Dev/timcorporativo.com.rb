<script>
	import { onMount } from 'svelte';
	import { formOptions, whatsappLink } from '$lib/site.js';

	let nome = $state('');
	let email = $state('');
	let celular = $state('');
	let cnpj = $state('');
	let linhas = $state('');
	let operadora = $state('');
	let mensagem = $state('');

	// Honeypot: invisível para gente, irresistível para bot. Se vier preenchido,
	// o servidor descarta silenciosamente.
	let website = $state('');

	let enviando = $state(false);
	/**
	 * '' nada · 'ok' lead registrado de verdade · 'zap' registro falhou mas o
	 * WhatsApp abriu · 'erro' nada funcionou.
	 * A distinção entre 'ok' e 'zap' existe para não afirmar "recebemos seus
	 * dados" quando não recebemos nada — enquanto os secrets da Function não
	 * estiverem gravados, TODO envio cai em 'zap'.
	 * @type {'' | 'ok' | 'zap' | 'erro'}
	 */
	let status = $state('');

	// Atribuição de campanha: guardamos o PRIMEIRO toque da sessão, senão a
	// navegação interna sobrescreve o utm original com "acesso direto".
	let utm = $state({});
	let pagina = $state('/');

	const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
	const UTM_STORE = 'tim_utm';

	onMount(() => {
		pagina = window.location.pathname;
		try {
			const daUrl = {};
			const params = new URLSearchParams(window.location.search);
			for (const k of UTM_KEYS) {
				const v = params.get(k);
				if (v) daUrl[k] = v;
			}
			if (Object.keys(daUrl).length) {
				sessionStorage.setItem(UTM_STORE, JSON.stringify(daUrl));
				utm = daUrl;
			} else {
				utm = JSON.parse(sessionStorage.getItem(UTM_STORE) || '{}');
			}
		} catch {
			// sessionStorage bloqueado (modo restrito/iframe): seguimos sem atribuição.
			utm = {};
		}
	});

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

	/**
	 * Registra o lead no CRM e dispara o aviso interno por e-mail.
	 * `keepalive` faz o browser concluir o POST mesmo se a página for descarregada
	 * logo depois — o lead não depende do visitante continuar aqui.
	 */
	async function registrarLead() {
		const res = await fetch('/api/lead', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				nome,
				email,
				celular,
				cnpj,
				linhas,
				operadora,
				mensagem,
				website,
				pagina,
				...utm
			}),
			keepalive: true
		});
		if (!res.ok) throw new Error(`api ${res.status}`);
	}

	async function enviar(e) {
		e.preventDefault();
		if (enviando) return;
		enviando = true;
		status = '';

		// O WhatsApp abre PRIMEIRO e de forma síncrona: depois de um `await` o
		// browser já não considera isto um gesto do usuário e bloqueia o popup.
		// A captura do lead segue em paralelo, sem travar o atendimento.
		const janela = window.open(whatsappLink(resumo()), '_blank', 'noopener');

		try {
			await registrarLead();
			status = 'ok';
		} catch {
			// Não registramos nada — então não dizemos que registramos. Se o
			// WhatsApp abriu, o contato ainda acontece por lá ('zap'); se nem isso,
			// é erro de verdade e o visitante precisa de um caminho alternativo.
			status = janela ? 'zap' : 'erro';
		} finally {
			enviando = false;
		}
	}

	const field =
		'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-tim-500 focus:ring-2 focus:ring-tim-200';
</script>

<form class="space-y-3" onsubmit={enviar}>
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

	<!-- Honeypot: fora da tela e fora da navegação por teclado/leitor de tela. -->
	<div class="absolute left-[-9999px]" aria-hidden="true">
		<label>
			Não preencha este campo
			<input bind:value={website} name="website" tabindex="-1" autocomplete="off" />
		</label>
	</div>

	<button
		type="submit"
		disabled={enviando}
		class="flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-accent-600 disabled:opacity-70"
	>
		<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
			><path
				d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.24 8.24 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"
			/></svg
		>
		{enviando ? 'Enviando…' : 'Falar no WhatsApp'}
	</button>

	{#if status === 'ok'}
		<p class="text-xs font-medium text-green-700" role="status">
			Recebemos seus dados — um consultor vai entrar em contato. Se o WhatsApp não abriu, chame em
			<a class="underline" href={whatsappLink(resumo())} target="_blank" rel="noopener">nosso número</a>.
		</p>
	{:else if status === 'zap'}
		<p class="text-xs font-medium text-slate-600" role="status">
			Continue a conversa pelo WhatsApp que abrimos para você. Se a janela não abriu, chame em
			<a class="underline" href={whatsappLink(resumo())} target="_blank" rel="noopener">nosso número</a>.
		</p>
	{:else if status === 'erro'}
		<p class="text-xs font-medium text-red-700" role="alert">
			Não conseguimos concluir o envio. Fale direto pelo
			<a class="underline" href={whatsappLink(resumo())} target="_blank" rel="noopener">WhatsApp</a>.
		</p>
	{/if}

	<p class="text-xs text-slate-500">
		Seus dados são usados apenas para retorno do contato comercial. Atendimento de representante
		autorizado TIM.
	</p>
</form>
