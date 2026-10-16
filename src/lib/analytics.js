// Eventos do GA4. O `gtag` nasce no app.html e enfileira no dataLayer até o
// consentimento: chamar antes do aceite não envia nada, e o que estiver na fila
// sai se o visitante aceitar ainda nesta página.
//
// Nunca mande dado pessoal como parâmetro (nome, e-mail, celular, CNPJ, texto do
// WhatsApp): os Termos do Google Analytics proíbem, e o lead completo já vai
// para o CRM por /api/lead.
//
// Parâmetros próprios (lead_source, origem, posicao) só aparecem nos relatórios
// depois de registrados como dimensões personalizadas no painel do GA4.

/**
 * @param {string} nome
 * @param {Record<string, unknown>} [params]
 */
export function evento(nome, params = {}) {
	if (typeof window === 'undefined') return;
	window.gtag?.('event', nome, params);
}

/**
 * Lead enviado — formulário ou painel da bolha. Disparado no envio, junto com a
 * abertura do WhatsApp, e não na resposta de /api/lead: no celular a aba congela
 * ao entregar o visitante para o app e um evento posterior se perderia.
 *
 * @param {'formulario' | 'bolha'} lead_source
 * @param {string} [origem] - ex.: `banner:link-viabilidade`, quando um banner abriu a bolha
 */
export function lead(lead_source, origem = '') {
	evento('generate_lead', { lead_source, ...(origem && { origem }) });
}

/** Onde um link está na página — para separar cabeçalho, rodapé e conteúdo. */
function posicao(/** @type {Element} */ el) {
	if (el.closest('header')) return 'cabecalho';
	if (el.closest('footer')) return 'rodape';
	if (el.closest('aside')) return 'lateral';
	return 'conteudo';
}

/**
 * Clique em qualquer link de WhatsApp da página, por delegação: os links vêm de
 * vários componentes e do HTML dos artigos, que não passam por Svelte.
 *
 * Fica em `window`, na fase de bolha, para rodar DEPOIS dos handlers do Svelte.
 * Assim um clique que não leva ao WhatsApp — o botão da bolha abre o painel, o
 * banner pede o painel — chega aqui com `defaultPrevented` e é ignorado: quem
 * conta esses é o `generate_lead` do envio.
 *
 * @returns {() => void} remove o listener
 */
export function rastrearCliquesWhatsApp() {
	/** @param {MouseEvent} e */
	const aoClicar = (e) => {
		if (e.defaultPrevented || !(e.target instanceof Element)) return;
		const a = e.target.closest('a[href]');
		if (!(a instanceof HTMLAnchorElement)) return;
		if (!/(^|\.)wa\.me$|(^|\.)whatsapp\.com$/.test(a.hostname)) return;
		evento('whatsapp_click', {
			// Sem a query: o `?text=` pode carregar o que o visitante digitou.
			link_url: a.origin + a.pathname,
			link_text: (a.getAttribute('aria-label') || a.textContent || '').trim().slice(0, 100),
			posicao: posicao(a)
		});
	};
	window.addEventListener('click', aoClicar);
	return () => window.removeEventListener('click', aoClicar);
}
