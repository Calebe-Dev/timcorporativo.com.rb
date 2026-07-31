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

	// ---------------------------------------------------------------------------
	// Correção de acessibilidade no DOM que o widget injeta.
	//
	// O axe acusa dois defeitos SÉRIOS em toda página em produção. Nenhum aparece
	// no Lighthouse: a injeção acontece 4s depois do `load`, muito depois de ele
	// terminar a coleta. Só uma auditoria que espera o widget montar enxerga.
	//
	// 1. `#oc-chat-window` fechada fica `aria-hidden="true"`, mas com
	//    `display: flex` e `visibility: visible` — o que a esconde é só
	//    `opacity: 0`. Ela continua na ordem de tabulação: quem navega por
	//    teclado entra numa janela invisível, o foco desaparece da tela e a
	//    pessoa digita num campo que ninguém vê. `inert` é exatamente o que
	//    falta — tira da tabulação E da árvore de acessibilidade. Espelhamos o
	//    `aria-hidden` em vez de fixar, porque o widget o alterna de forma
	//    confiável ao abrir (verificado: fechada `true`, aberta `false`).
	//
	// 2. `#oc-bolha` é um `<div role="button" tabindex="0">` com um `<button>`
	//    "Dispensar convite" dentro. Controle interativo aninhado: o leitor de
	//    tela achata o conteúdo do botão externo e o de dentro fica inalcançável.
	//    Tiramos role/tabindex do wrapper — o clique de mouse não depende deles,
	//    e para teclado o `#oc-fab` ("Abrir atendimento por chat") já é um botão
	//    de verdade que faz a mesma coisa.
	//
	// Isto é remendo, não solução: o certo é corrigir no widget.js do bot. Se
	// isso acontecer, o código aqui simplesmente não acha o que corrigir e vira
	// inofensivo.
	// ---------------------------------------------------------------------------
	/** @type {MutationObserver[]} */
	let observadores = [];

	function sanearWidget() {
		const janela = document.getElementById('oc-chat-window');
		if (janela) {
			const espelhar = () =>
				janela.toggleAttribute('inert', janela.getAttribute('aria-hidden') === 'true');
			espelhar();
			const obs = new MutationObserver(espelhar);
			obs.observe(janela, { attributes: true, attributeFilter: ['aria-hidden'] });
			observadores.push(obs);
		}

		const bolha = document.getElementById('oc-bolha');
		if (bolha) {
			const desaninhar = () => {
				bolha.removeAttribute('role');
				bolha.removeAttribute('tabindex');
			};
			desaninhar();
			// O convite aparece depois, por classe. Se o widget reescrever os
			// atributos ao exibi-lo, tiramos de novo.
			const obs = new MutationObserver(desaninhar);
			obs.observe(bolha, { attributes: true, attributeFilter: ['role', 'tabindex'] });
			observadores.push(obs);
		}
	}

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
				if (abortado) return;
				const subiu = !!document.getElementById('oc-widget-container');
				if (subiu) sanearWidget();
				onmontar?.(subiu);
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
			for (const o of observadores) o.disconnect();
			observadores = [];
			window.OCBotWidget?.destroy?.();
			onmontar?.(false);
		};
	});
</script>
