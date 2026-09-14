// Unidades de mídia nativas — "banner" no sentido do Google Ads: rótulo de
// anúncio, marca, título, texto curto e um botão. Dois encaixes por artigo:
//
//   meio    — dentro do texto, entre a 1ª e a 2ª seção
//             (ponto de corte em dividirParaBanner(), routes/[slug]/+page.server.js)
//   rodape  — depois do texto e ANTES do "Leia também": a oferta vem antes das
//             rotas de saída, não depois delas.
//
// Regra fixa: o encaixe do MEIO é sempre deste site — o leitor ainda está no
// texto e não deve ser mandado embora no meio dele. O do RODAPÉ pode levar a um
// site parceiro da rede quando o termo do artigo pertence ao parceiro (ver
// /home/ocadmin/git/Sites/palavras-chave-por-site.json): "pabx em nuvem" é do
// meupabxemnuvem, "link dedicado" genérico é do linkdedicada. Assim o tráfego
// que este domínio recebe por termo que não é dele ainda vira lead — no site
// certo — em vez de sair pelo Google.
//
// Nada aqui crava valor, faixa ou percentual: a venda é consultiva (mesma regra
// R1 de scripts/validar-lps.mjs). E nada cita a marca antiga nem o CNPJ — ver
// $lib/brand.js.
//
// O clique em banner de WhatsApp NÃO vai direto ao wa.me: dispara o evento
// `abrir-atendimento`, que a WhatsAppBubble escuta e responde abrindo o painel
// de 3 campos → /api/lead → CRM, já com o assunto e a origem. Sem JS (ou sem a
// bolha), o <a> continua sendo um link normal para o WhatsApp.

import { SITE_NAME } from '$lib/brand.js';
import { ARTIGO_PARA_LP } from '$lib/solucoes/links-artigos.js';
import { lpPorSlug } from '$lib/solucoes/index.js';

/**
 * @typedef {{ tipo: 'interno', href: string }
 *         | { tipo: 'externo', href: string }
 *         | { tipo: 'whatsapp', assunto: string }} Destino
 * @typedef {{
 *   id: string,
 *   marca: string,
 *   parceiro: boolean,
 *   eyebrow: string,
 *   titulo: string,
 *   texto: string,
 *   cta: string,
 *   destino: Destino
 * }} Banner
 */

// Sites irmãos que recebem tráfego daqui. O UTM identifica origem, canal e o
// banner exato no GA4 do parceiro — sem isso o clique chega como "referral" e
// ninguém sabe qual peça rendeu. grupooc.com.br fica fora de propósito (marca
// retirada da superfície pública — $lib/brand.js).
const PARCEIROS = {
	linkdedicada: 'linkdedicada.com.br',
	meupabxemnuvem: 'meupabxemnuvem.com.br',
	planovivoempresarial: 'planovivoempresarial.com.br',
	planoempresac: 'planoempresac.com.br',
	algartel: 'algartel.com.br',
	internetfibraagora: 'internetfibraagora.com.br'
};

/** @returns {Destino} */
function externo(parceiro, id) {
	const utm = new URLSearchParams({
		utm_source: 'timcorporativo.com.br',
		utm_medium: 'banner',
		utm_campaign: 'rede',
		utm_content: id
	});
	return { tipo: 'externo', href: `https://${PARCEIROS[parceiro]}/?${utm}` };
}

/** @returns {Destino} */
const interno = (href) => ({ tipo: 'interno', href });
/** @returns {Destino} */
const whatsapp = (assunto) => ({ tipo: 'whatsapp', assunto });

/** @returns {Banner} */
function tim(id, eyebrow, titulo, texto, cta, destino) {
	return { id, marca: SITE_NAME, parceiro: false, eyebrow, titulo, texto, cta, destino };
}

/** @returns {Banner} */
function parceiro(chave, id, eyebrow, titulo, texto, cta) {
	return {
		id,
		marca: PARCEIROS[chave],
		parceiro: true,
		eyebrow,
		titulo,
		texto,
		cta,
		destino: externo(chave, id)
	};
}

// ---------------------------------------------------------------------------
// Peças
// ---------------------------------------------------------------------------

const CONSULTOR = tim(
	'consultor-whatsapp',
	'Consultoria autorizada TIM Empresas',
	'Fale com um consultor TIM Empresas',
	'Linhas, perfil de uso e endereços vêm antes de qualquer número. Um consultor autorizado analisa a operação e devolve uma proposta por CNPJ.',
	'Fale com um consultor',
	whatsapp('Olá! Quero falar com um consultor TIM Empresas.')
);

const PROPOSTA = tim(
	'consultor-proposta',
	'Atendimento personalizado',
	'Já recebeu uma proposta de telecom?',
	'Traga a que você tem em mãos. Colocamos na mesma base — prazo, escopo, perfil de uso — e mostramos onde está a diferença.',
	'Comparar minha proposta',
	interno('/solucoes/melhores-precos-tim-para-empresas/')
);

const COMPARATIVO = tim(
	'comparativo-consultor',
	'Comparativo entre operadoras',
	'TIM ou outra operadora? Compare na mesma base',
	'Um consultor coloca as propostas lado a lado — linhas, prazo, escopo, cobertura no seu endereço — e mostra onde está a diferença real.',
	'Fale com um consultor',
	whatsapp('Estou comparando operadoras para a minha empresa e quero uma análise.')
);

const PRIVATIVA_5G = tim(
	'5g-privativa',
	'Indústria',
	'Rede privativa 5G para a planta',
	'Quando o ativo crítico se move dentro da fábrica, há um degrau acima do Wi-Fi industrial: cobertura dedicada e latência controlada.',
	'Ver rede privativa',
	interno('/solucoes/rede-privativa-5g-para-industria/')
);

const FIBRA_COBERTURA = tim(
	'fibra-cobertura',
	'Fibra TIM empresarial',
	'Fibra TIM no endereço da sua empresa',
	'Verificamos cobertura, dimensionamos a velocidade pelo número de acessos simultâneos e enviamos a proposta por CNPJ.',
	'Verificar cobertura',
	whatsapp('Quero verificar cobertura de fibra TIM empresarial no meu endereço.')
);

/** @type {Record<string, { meio: Banner, rodape: Banner }>} */
const CATALOGO = {
	consultor: { meio: CONSULTOR, rodape: PROPOSTA },

	// Chip, 2ª via, fatura, login, canais: quem chega aqui já é titular de linha
	// corporativa com contrato em vigor. Não é lead de plano novo — é lead de
	// auditoria de fatura e de renovação. (GSC: 45,9% dos cliques do site.)
	suporte: {
		meio: tim(
			'suporte-fatura',
			'Atendimento personalizado',
			'Sua fatura TIM Empresas está no valor certo?',
			'Linhas paradas, serviços que ninguém usa e condições vencidas passam despercebidos por meses. Um consultor revisa a fatura com você.',
			'Revisar minha fatura',
			interno('/solucoes/auditoria-de-fatura-de-telecom/')
		),
		rodape: tim(
			'suporte-renovacao',
			'Consultoria autorizada TIM Empresas',
			'Contrato TIM perto de vencer?',
			'A renovação é o momento em que a condição melhora — quando alguém negocia por você. Consultor autorizado, sem passar pela URA.',
			'Fale com um consultor',
			whatsapp('Meu contrato TIM Empresas está perto de vencer e quero renegociar.')
		)
	},

	plano: {
		meio: tim(
			'plano-cotacao',
			'Consultoria autorizada TIM Empresas',
			'Cotação TIM Empresas por CNPJ',
			'Diga quantas linhas e o que a equipe usa. Um consultor autorizado monta a proposta e explica cada item — sem URA, sem fila.',
			'Pedir cotação',
			whatsapp('Quero uma cotação TIM Empresas para o meu CNPJ.')
		),
		rodape: PROPOSTA
	},

	portabilidade: {
		meio: tim(
			'porta-consultor',
			'Portabilidade empresarial',
			'Trocar de operadora sem perder o número',
			'Portabilidade de linhas corporativas tem ordem certa: viabilidade, documentos, janela de migração. Um consultor conduz o processo do início ao fim.',
			'Fale com um consultor',
			whatsapp('Quero fazer a portabilidade das linhas da minha empresa para a TIM.')
		),
		rodape: tim(
			'porta-contrato',
			'Atendimento personalizado',
			'Ainda tem contrato vigente com a operadora atual?',
			'Multa, fidelidade e prazo de aviso mudam a ordem das etapas. Veja como migrar sem pagar duas vezes.',
			'Ver como trocar',
			interno('/solucoes/trocar-de-operadora-com-contrato-vigente/')
		)
	},

	// "link dedicado tim" é deste site (CTR de 13%, o maior comercial do domínio);
	// o comparativo multi-operadora é do linkdedicada — regra da rede.
	'link-dedicado': {
		meio: tim(
			'link-viabilidade',
			'Link dedicado TIM',
			'Viabilidade de link dedicado no seu endereço',
			'Antes de falar em banda ou valor, é preciso saber se a fibra chega. Consulte a viabilidade e receba a proposta com SLA por escrito.',
			'Consultar viabilidade',
			whatsapp('Quero consultar a viabilidade de link dedicado TIM no endereço da empresa.')
		),
		rodape: parceiro(
			'linkdedicada',
			'parceiro-linkdedicada',
			'Comparativo entre operadoras',
			'Compare link dedicado de todas as operadoras',
			'TIM, Vivo, Claro e Algar lado a lado — SLA, prazos e cotação em um só lugar, no site especializado da nossa rede.',
			'Comparar operadoras'
		)
	},

	// "pabx em nuvem" genérico é do meupabxemnuvem (este site está em p93 nele);
	// aqui fica só a telefonia TIM.
	pabx: {
		meio: tim(
			'pabx-tim',
			'Telefonia empresarial TIM',
			'Fixo, móvel e ramais no mesmo contrato',
			'Telefonia empresarial TIM com atendimento de consultor autorizado: linhas, ramais e gestão centralizada, dimensionados pelo uso real.',
			'Fale com um consultor',
			whatsapp('Quero telefonia empresarial TIM (fixo, móvel e ramais) para a minha empresa.')
		),
		rodape: parceiro(
			'meupabxemnuvem',
			'parceiro-pabx',
			'PABX em nuvem',
			'PABX em nuvem: contrate com um clique',
			'Ramais, URA, gravação e integração com CRM, sem aparelho físico — no site especializado da nossa rede.',
			'Contrate com um clique'
		)
	},

	fibra: {
		meio: FIBRA_COBERTURA,
		rodape: tim(
			'fibra-5g',
			'Sem fibra no endereço?',
			'Internet 5G empresarial onde o cabo não chega',
			'Galpão, obra, loja de rua ou escritório em prédio sem fibra: a conexão 5G corporativa resolve com instalação simples.',
			'Ver internet 5G',
			interno('/solucoes/internet-5g-para-empresas-sem-fibra-no-endereco/')
		)
	},

	// Artigos de fibra com viés residencial (home office, "para casa") trazem
	// leitor que não é lead B2B — mas é lead do internetfibraagora.
	'fibra-residencial': {
		meio: FIBRA_COBERTURA,
		rodape: parceiro(
			'internetfibraagora',
			'parceiro-fibra-residencial',
			'Internet residencial',
			'Fibra para a sua casa ou home office',
			'Planos residenciais das operadoras disponíveis no seu endereço, no site da nossa rede dedicado a internet para casa.',
			'Ver planos residenciais'
		)
	},

	'5g': {
		meio: tim(
			'5g-lp',
			'Internet 5G empresarial',
			'Internet 5G para empresas',
			'Conexão corporativa 5G para endereço sem fibra, equipe em campo e operação temporária — com gestão das linhas no mesmo contrato.',
			'Ver solução',
			interno('/solucoes/internet-5g-para-empresas-sem-fibra-no-endereco/')
		),
		rodape: PRIVATIVA_5G
	},

	// Território exclusivo deste site na rede (zero conflito no GSC).
	iot: {
		meio: tim(
			'iot-m2m',
			'IoT e telemetria',
			'Chip M2M TIM para rastreamento e telemetria',
			'Linhas de dados para equipamento em campo — rastreador, sensor, maquininha — com gestão centralizada e tarifa por volume.',
			'Ver chip M2M',
			interno('/solucoes/chip-m2m-para-rastreamento-e-telemetria/')
		),
		rodape: PRIVATIVA_5G
	},

	// Família de consultas com o melhor CTR do site (27,6% em "tim empresas com
	// aparelho") e sem landing page própria — por enquanto o consultor atende.
	aparelho: {
		meio: tim(
			'aparelho-consultor',
			'Aparelhos no plano',
			'Smartphones para a equipe, no contrato TIM Empresas',
			'Modelos, parcelamento no plano e gestão das linhas no mesmo lugar. Consulte condições por CNPJ com um consultor autorizado.',
			'Consultar condições',
			whatsapp('Quero aparelhos no plano TIM Empresas para a minha equipe.')
		),
		rodape: PROPOSTA
	},

	// Comparativos: o leitor está decidindo contrato. O meio oferece a análise
	// TIM; o rodapé captura quem já decidiu pela outra operadora — no site da
	// rede que atende aquela marca. O lead não se perde, só muda de domínio.
	vivo: {
		meio: COMPARATIVO,
		rodape: parceiro(
			'planovivoempresarial',
			'parceiro-vivo',
			'Vivo Empresas',
			'Prefere seguir com a Vivo?',
			'A consultoria Vivo Empresas da nossa rede atende o mesmo CNPJ, com o mesmo método de análise.',
			'Atendimento personalizado'
		)
	},
	claro: {
		meio: COMPARATIVO,
		rodape: parceiro(
			'planoempresac',
			'parceiro-claro',
			'Claro Empresas',
			'Prefere seguir com a Claro?',
			'A consultoria Claro Empresas da nossa rede atende o mesmo CNPJ, com o mesmo método de análise.',
			'Atendimento personalizado'
		)
	},
	algar: {
		meio: COMPARATIVO,
		rodape: parceiro(
			'algartel',
			'parceiro-algar',
			'Algar Telecom',
			'Algar Telecom na sua região?',
			'Link dedicado, fibra e telefonia Algar com a consultoria credenciada da nossa rede.',
			'Atendimento personalizado'
		)
	},
	oi: {
		meio: COMPARATIVO,
		rodape: tim(
			'oi-alternativa',
			'Saindo da Oi',
			'Alternativa à Oi para empresas',
			'Migrar linhas, números e internet com método reduz o risco de ficar sem serviço no meio do caminho.',
			'Ver como migrar',
			interno('/solucoes/alternativa-a-oi-empresas/')
		)
	},

	sorocaba: {
		meio: tim(
			'sorocaba-lp',
			'Sorocaba e região',
			'TIM Empresas em Sorocaba e região',
			'Atendimento no eixo Sorocaba–Votorantim–Itu–Boituva–Iperó, com consultor que conhece a viabilidade endereço a endereço.',
			'Ver atendimento local',
			interno('/solucoes/tim-empresas-em-sorocaba/')
		),
		rodape: CONSULTOR
	}
};

// ---------------------------------------------------------------------------
// Que cluster é este artigo?
// ---------------------------------------------------------------------------

// Ordem = prioridade: a primeira que casar vence. Por isso o específico vem
// antes do genérico — "portabilidade tim empresarial" precisa cair em
// portabilidade, não em plano; "chip m2m" em iot, não em suporte. Casa no slug
// (sem acento) e no título (com acento), em minúsculas.
const CLUSTERS_ARTIGO = [
	['pabx', /pabx|voip|\bsip\b|ramal|ramais|\bura\b|call.?center|goto|telefonia.(em.)?nuvem|central.telef/],
	['link-dedicado', /link.dedicad|internet.dedicad|ip.dedicad|mpls|lan.to.lan|uptime|\bsla\b/],
	['portabilidade', /portabilidade|trocar.de.operadora|migrar.de.operadora|mudar.de.operadora|migra[çc][aã]o.de.operadora/],
	['iot', /\biot\b|m2m|telemetria|rastrea|ind[uú]stria.4|edge.computing|\bagro|\b6g\b|rede.privativa|canteiro/],
	['5g', /\b5g\b/],
	['aparelho', /aparelh|smartphone|iphone|samsung|\b24x\b/],
	['vivo', /\bvivo\b/],
	['claro', /\bclaro\b/],
	['algar', /\balgar\b/],
	['oi', /\boi\b/],
	// "residencial" só conta quando o artigo não é B2B: "alternativas à banda
	// larga residencial PARA EMPRESAS" é artigo de empresa que quer sair dela.
	['fibra-residencial', /home.?office|^(?!.*(?:empres|corporativ|cnpj)).*(?:residencial|para.casa|\bcasa\b)/],
	['fibra', /fibra|banda.larga|wi-?fi|\bftth\b/],
	[
		'suporte',
		/chip|ativar|ativa[çc][aã]o|2.?via|segunda.via|fatura|boleto|login|meu.tim|canais.de.atendimento|0800|telefone.tim|\bapn\b|fora.do.ar|esim|bloque|senha|portal|conta.corporativa|gerenciar/
	],
	['sorocaba', /sorocaba|jumirim|votorantim|\bitu\b|boituva|iper[oó]/],
	[
		'plano',
		/plano|\bpj\b|cnpj|empresarial|corporativ|black|contrat|pre[çc]o|valor|desconto|proposta|cota[çc][aã]o|renova|fideliza|custo|\broi\b|\bmei\b/
	]
];

/** @returns {string} chave do CATALOGO ('consultor' quando nada casa) */
export function clusterDoArtigo(slug, title = '') {
	const alvo = `${slug} ${title}`.toLowerCase();
	for (const [nome, re] of CLUSTERS_ARTIGO) if (re.test(alvo)) return nome;
	return 'consultor';
}

// ---------------------------------------------------------------------------
// Que banners este artigo recebe?
// ---------------------------------------------------------------------------

/**
 * Artigo já mapeado para uma LP (links-artigos.js) ganha no meio a peça DAQUELA
 * LP, montada a partir do cartão que a própria LP declara (cardTitulo/cardTexto):
 * copy mantido num lugar só, e a oferta é a mesma que o link editorial do corpo
 * já aponta — reforço, não ruído.
 *
 * @returns {Banner | null}
 */
function bannerDaLp(slugLp) {
	const lp = lpPorSlug(slugLp);
	if (!lp?.cardTitulo || !lp?.cardTexto) return null;
	return tim(
		`lp-${lp.slug}`,
		'Atendimento personalizado',
		lp.cardTitulo,
		lp.cardTexto,
		'Ver solução',
		interno(`/solucoes/${lp.slug}/`)
	);
}

const chave = (b) => (b.destino.tipo === 'whatsapp' ? b.destino.assunto : b.destino.href);

/**
 * @param {{ slug: string, title?: string }} artigo
 * @returns {{ cluster: string, meio: Banner, rodape: Banner }}
 */
export function bannersPara({ slug, title = '' }) {
	const cluster = clusterDoArtigo(slug, title);
	const c = CATALOGO[cluster] ?? CATALOGO.consultor;

	const daLp = ARTIGO_PARA_LP[slug] ? bannerDaLp(ARTIGO_PARA_LP[slug]) : null;
	const meio = daLp ?? c.meio;

	// Nunca a mesma oferta duas vezes na página. Se a peça da LP coincide com o
	// rodapé do cluster, o rodapé volta a ser a peça original do meio; se ainda
	// coincidir, cai no consultor.
	let rodape = c.rodape;
	if (chave(rodape) === chave(meio)) rodape = c.meio;
	if (chave(rodape) === chave(meio)) rodape = CONSULTOR;

	return { cluster, meio, rodape };
}
