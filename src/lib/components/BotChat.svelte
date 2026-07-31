<script>
	import { onMount } from 'svelte';

	const API = 'https://bot.grupooc.com.br';
	const SITE_ID = 'tim-corporativo';

	// Segurar a INJEÇÃO — e não só o init() — é o que tira o widget do caminho
	// crítico. Com `async` no <script> o navegador ainda baixaria e compilaria os
	// ~40 KB de JS + 17 KB de CSS durante o carregamento da página, competindo com
	// o LCP. 4s depois do `load` é o que o guia de integração do bot recomenda, e
	// é tempo suficiente para as Core Web Vitals já terem sido medidas.
	const ATRASO_MS = 4000;

	// Avisa o layout se o bot subiu de fato. Enquanto for `false`, a bolha do
	// WhatsApp continua sendo o canal flutuante da página.
	let { onmontar } = $props();

	onMount(() => {
		let timer;
		let abortado = false;

		const injetar = () => {
			if (abortado) return;

			// media="print" faz o navegador baixar o CSS sem bloquear a renderização;
			// o onload o devolve para "all" quando chega. É o mesmo motivo do
			// inlineStyleThreshold no svelte.config.js: nenhuma folha de estilo de
			// terceiro no caminho crítico.
			const css = document.createElement('link');
			css.rel = 'stylesheet';
			css.href = `${API}/widget.css`;
			css.media = 'print';
			css.onload = () => (css.media = 'all');

			const js = document.createElement('script');
			js.src = `${API}/widget.js`;
			js.async = true;
			js.onload = async () => {
				// `aguardarOcioso: false` porque a espera já aconteceu aqui fora — sem
				// isso o widget esperaria load + requestIdleCallback de novo.
				await window.OCBotWidget?.init({ siteId: SITE_ID, apiUrl: API, aguardarOcioso: false });

				// Quem decide se o bot subiu é o DOM, não a promise do init(). Ele
				// resolve igual nos dois casos: quando a config volta 403 (domínio fora
				// da lista do tenant), 404 ou a rede falha, o widget só loga no console
				// e retorna sem renderizar nada. Confiar na promise faria a bolha do
				// WhatsApp sumir junto com um bot que não existe, e a página ficaria
				// sem nenhum canal de contato flutuante.
				if (!abortado) onmontar?.(!!document.getElementById('oc-widget-container'));
			};

			document.head.append(css, js);
		};

		const agendar = () => (timer = setTimeout(injetar, ATRASO_MS));
		if (document.readyState === 'complete') agendar();
		else window.addEventListener('load', agendar, { once: true });

		return () => {
			// Na prática o layout raiz não desmonta durante navegação client-side, mas
			// o `abortado` cobre o caso de o `load` disparar depois da destruição — o
			// listener é { once: true } e agendaria a injeção de um componente morto.
			abortado = true;
			clearTimeout(timer);
			window.OCBotWidget?.destroy?.();
			onmontar?.(false);
		};
	});
</script>
