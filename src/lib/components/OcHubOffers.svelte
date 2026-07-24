<script>
	import { onMount } from 'svelte';

	// Widget de ofertas do OC Hub. O `data-site` é o mesmo UUID usado no build
	// para buscar os artigos — as ofertas vêm do mesmo cadastro.
	const SITE = '9a8c40f4-b63c-42af-8de8-1b28cbf150e9';
	const LOADER = 'https://ochub.grupooc.com.br/scripts/offer-loader.js';

	let { layout = 'row', limit = 10, sort = 'price_asc' } = $props();

	onMount(() => {
		// Injetado aqui, e não no markup, por dois motivos: Svelte não executa
		// <script src> escrito no template, e assim garantimos que o container já
		// existe no DOM quando o loader roda.
		if (document.querySelector(`script[src="${LOADER}"]`)) return;
		const s = document.createElement('script');
		s.src = LOADER;
		s.async = true;
		document.head.appendChild(s);
	});
</script>

<!-- OCHub Widget — as ofertas são renderizadas por JavaScript. O conteúdo
     comercial daqui NÃO existe no HTML de origem e por isso não é indexável:
     é o achado nº 4 da auditoria do site antigo, que segue valendo. As seções
     de planos acima existem justamente para cobrir isso no HTML. -->
<div
	id="ochub-offers-container"
	data-site={SITE}
	data-layout={layout}
	data-limit={limit}
	data-sort={sort}
></div>
