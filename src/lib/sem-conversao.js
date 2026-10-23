// Páginas sem nenhum ponto de conversão — nem formulário, nem WhatsApp, nem
// telefone, nem banner, nem o chat da consultoria.
//
// Decisão de 23/10/2026: a consultoria não atende pedido de plano com aparelho.
// Estas são as páginas que o Google mostra para 'com aparelho' / 'mei com
// aparelho' (GSC, abr–out/2026) e de onde vieram os leads de aparelho no CRM
// (banner aparelho-consultor, bolha e formulário). O conteúdo continua no ar e
// indexado; só deixa de captar.
//
// O layout raiz, a moldura do blog e o artigo consultam semConversao(); quem
// navega daqui para outra página recebe tudo de volta.

const PAGINAS = [
	'/ofertas-aparelhos-tim-empresas-celular-cnpj/',
	'/plano-tim-empresarial-com-aparelho-vale-a-pena-roi/',
	'/aparelho-plano-tim-empresas-aprovacao-e-saida-antecipada/',
	'/plano-tim-para-mei-como-contratar-no-cnpj/'
];

const SEM_BARRA = new Set(PAGINAS.map((p) => p.replace(/\/$/, '')));

/** @param {string} pathname */
export function semConversao(pathname = '') {
	return SEM_BARRA.has(pathname.replace(/\/+$/, ''));
}
