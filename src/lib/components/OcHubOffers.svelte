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
		//
		// A cada montagem o loader precisa RODAR DE NOVO, e é por isso que a versão
		// anterior desistia quando o <script> já estava na página: o loader é um
		// IIFE de execução única (guarda `window.__ochubOfferLoaderInit`) que
		// procura #ochub-offers-container uma vez e sai. Numa navegação
		// client-side do SvelteKit — sair da home para /blog e voltar — o container
		// é recriado vazio e ninguém o preenche. A seção de planos abria um buraco
		// entre o subtítulo e os cards de perfil, sem spinner e sem erro: só o
		// primeiro carregamento da home mostrava oferta.
		//
		// Então derrubamos a execução anterior e injetamos o loader outra vez. O
		// arquivo vem do cache do browser (max-age de 4h no ochub.grupooc.com.br),
		// não é uma requisição nova.
		document.querySelector(`script[src="${LOADER}"]`)?.remove();
		delete window.__ochubOfferLoaderInit;

		// O modal (#ochub-offer-modal, no <body>) fica de pé de propósito. O
		// createModal() do loader desiste se ele já existe, e é só no fim dessa
		// função que window.OCHubModal é atribuído — remover o modal aqui e falhar
		// o carregamento seguinte deixaria os botões "Tenho Interesse" sem destino.
		// Como os cards passam oferta e site por argumento, o modal da primeira
		// execução atende os cards de todas as outras.
		const s = document.createElement('script');
		s.src = LOADER;
		s.async = true;
		document.head.appendChild(s);

		return () => {
			// O loader injeta o JSON-LD das ofertas no <head>. Sem esta limpeza ele
			// sobrevive à navegação e passa a anunciar ofertas que não existem na
			// página seguinte — o mesmo descasamento entre dado estruturado e
			// conteúdo visível que o Seo.svelte evita ao emitir FAQPage só na home.
			document.getElementById('ochub-offers-jsonld')?.remove();
		};
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
