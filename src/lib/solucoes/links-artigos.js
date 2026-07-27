// Mapa artigo → landing page de solução.
//
// A direção é sempre ARTIGO → LP: conteúdo informacional passa autoridade e
// leitor para a página de conversão, nunca o contrário. O `leiaTambem` que já
// existe só relaciona artigos ENTRE SI — este mapa é a ponte que faltava entre
// o acervo e a malha comercial.
//
// Por que só ~50 dos 189 artigos aparecem aqui: link comercial em artigo sem
// relação temática é ruído para o leitor e sinal de manipulação para o Google.
// Artigo fora desta lista fica sem link para LP, de propósito.
//
// O link é injetado NO CORPO do texto (primeira ocorrência de uma das frases
// candidatas), e não numa caixa no rodapé: link em bloco repetido em dezenas de
// páginas é reconhecido como boilerplate e vale muito menos que link editorial.

/**
 * Frases candidatas por LP, da mais específica para a mais genérica.
 *
 * As listas foram montadas a partir do vocabulário REAL dos artigos do acervo
 * (bigramas mais frequentes dentro de <p>), não do que soaria bem em tese: a
 * primeira versão usava termos que descreviam bem o destino mas não existiam no
 * texto de origem, e 27 dos 52 links simplesmente não tinham onde ancorar.
 */
export const ANCORAS = {
	'internet-e-telefonia-para-clinicas-e-consultorios': [
		'internet para clínica',
		'clínicas e consultórios',
		'consultório',
		'dado sensível',
		'acesso remoto'
	],
	'conectividade-para-transportadoras-e-logistica': [
		'transportadora',
		'rastreamento de frota',
		'equipes externas',
		'roaming corporativo',
		'equipes em campo',
		'atendimento externo'
	],
	'internet-para-redes-de-lojas-e-varejo': [
		'rede de lojas',
		'varejo',
		'PDV',
		'gestão centralizada',
		'franquias',
		'e-commerce'
	],
	'internet-para-escolas-e-instituicoes-de-ensino': [
		'escola',
		'instituição de ensino',
		'usuários simultâneos',
		'dimensionar a velocidade',
		'dimensionamento'
	],
	'internet-e-telefonia-para-hoteis-e-restaurantes': [
		'hotel',
		'restaurante',
		'hotelaria',
		'rede de hóspedes',
		'qualidade de voz',
		'QoS'
	],
	'internet-5g-para-empresas-sem-fibra-no-endereco': [
		'endereço sem fibra',
		'sem cobertura de fibra',
		'internet via 5G',
		'área rural',
		'cobertura TIM',
		'cobertura 4G e 5G',
		'banda larga residencial',
		'cobertura'
	],
	'chip-m2m-para-rastreamento-e-telemetria': [
		'chip M2M',
		'telemetria',
		'rastreamento',
		'internet das coisas',
		'IoT',
		'gestão de linhas'
	],
	'rede-privativa-5g-para-industria': [
		'rede privativa',
		'Indústria 4.0',
		'edge computing',
		'chão de fábrica',
		'tempo real',
		'eficiência industrial'
	],
	'contratar-tim-direto-ou-por-revenda-autorizada': [
		'representante autorizado',
		'atendimento consultivo',
		'consultoria especializada',
		'consultor dedicado',
		'consultor'
	],
	'alternativa-a-oi-empresas': [
		'migração de operadora',
		'trocar de operadora',
		'migrar de operadora',
		'portabilidade'
	],
	'operadora-nacional-ou-provedor-regional': [
		'provedor regional',
		'escolher a operadora',
		'escolher operadora',
		'operadora corporativa',
		'suporte técnico',
		'comparar operadoras'
	],
	'plano-corporativo-para-grandes-empresas': [
		'grandes corporações',
		'grandes empresas',
		'múltiplas unidades',
		'grande empresa',
		'gestão de contas'
	],
	'trocar-de-operadora-com-contrato-vigente': [
		'contrato vigente',
		'fidelidade',
		'portabilidade',
		'trocar de operadora'
	],
	'auditoria-de-fatura-de-telecom': [
		'auditoria de fatura',
		'fatura de telecom',
		'reduzir custos',
		'custo total',
		'fatura'
	],
	'renovacao-de-contrato-tim-empresas': [
		'renovação de contrato',
		'renovar o contrato',
		'desconto progressivo',
		'descontos progressivos'
	],
	'telecom-para-abertura-de-filial': [
		'nova filial',
		'abertura de filial',
		'nova unidade',
		'múltiplas filiais',
		'filiais'
	],
	'tim-empresas-em-sorocaba': ['Sorocaba', 'atendimento presencial', 'Grupo OC'],
	'internet-empresarial-em-sorocaba': [
		'Sorocaba',
		'prazo de instalação',
		'viabilidade',
		'homologação'
	],
	'tim-empresas-na-regiao-de-sorocaba': ['região de Sorocaba', 'Sorocaba', 'interior de São Paulo'],
	'telecom-para-industrias-em-sorocaba-e-regiao': [
		'indústria',
		'parque industrial',
		'chão de fábrica',
		'industrial'
	]
};

/**
 * Frase de fallback, usada quando NENHUMA âncora candidata existe no texto.
 *
 * É acrescentada ao fim do primeiro parágrafo, e não no rodapé. A alternativa
 * seria forçar o link numa palavra genérica ("sua empresa") só para ter onde
 * ancorar — mas âncora que não descreve o destino não ajuda o leitor nem o
 * buscador, e âncora genérica repetida em dezenas de páginas parece manipulação.
 * Uma frase curta e honesta que diz para onde o link vai é melhor nos dois
 * critérios.
 */
export const FALLBACK = {
	'internet-e-telefonia-para-clinicas-e-consultorios':
		'Em clínicas e consultórios esse requisito muda de peso — reunimos o critério completo em <a href="/solucoes/internet-e-telefonia-para-clinicas-e-consultorios/">conectividade para clínicas</a>.',
	'conectividade-para-transportadoras-e-logistica':
		'Para quem opera frota e equipe em rota, o desenho é outro — veja <a href="/solucoes/conectividade-para-transportadoras-e-logistica/">conectividade para transportadoras e logística</a>.',
	'internet-para-redes-de-lojas-e-varejo':
		'No varejo com várias lojas o problema aparece na hora do movimento — veja <a href="/solucoes/internet-para-redes-de-lojas-e-varejo/">internet para redes de lojas</a>.',
	'internet-para-escolas-e-instituicoes-de-ensino':
		'Em escola, com centenas de acessos simultâneos, o dimensionamento segue outra régua — veja <a href="/solucoes/internet-para-escolas-e-instituicoes-de-ensino/">internet para escolas</a>.',
	'internet-e-telefonia-para-hoteis-e-restaurantes':
		'Em hotel e restaurante ainda entra a rede de hóspedes, que precisa ficar separada da operação — veja <a href="/solucoes/internet-e-telefonia-para-hoteis-e-restaurantes/">internet e telefonia para hotelaria</a>.',
	'internet-5g-para-empresas-sem-fibra-no-endereco':
		'Quando a fibra não chega ao endereço, o caminho é outro — veja <a href="/solucoes/internet-5g-para-empresas-sem-fibra-no-endereco/">internet 5G para empresas sem fibra</a>.',
	'chip-m2m-para-rastreamento-e-telemetria':
		'Para conectar equipamento em campo em escala, a linha usada não é a mesma de celular corporativo — veja <a href="/solucoes/chip-m2m-para-rastreamento-e-telemetria/">chip M2M para rastreamento e telemetria</a>.',
	'rede-privativa-5g-para-industria':
		'Quando o ativo crítico se move dentro da planta, existe um degrau acima — veja <a href="/solucoes/rede-privativa-5g-para-industria/">rede privativa 5G para indústria</a>.',
	'contratar-tim-direto-ou-por-revenda-autorizada':
		'Vale entender antes o que muda entre os dois caminhos de contratação: <a href="/solucoes/contratar-tim-direto-ou-por-revenda-autorizada/">contratar direto na operadora ou por revenda autorizada</a>.',
	'alternativa-a-oi-empresas':
		'Se a sua empresa está avaliando sair da Oi, o método de migração é o que reduz risco — veja <a href="/solucoes/alternativa-a-oi-empresas/">alternativa à Oi para empresas</a>.',
	'operadora-nacional-ou-provedor-regional':
		'A comparação que costuma decidir é outra: <a href="/solucoes/operadora-nacional-ou-provedor-regional/">operadora nacional ou provedor regional</a>.',
	'plano-corporativo-para-grandes-empresas':
		'Acima de certo porte o atendimento muda de natureza — veja <a href="/solucoes/plano-corporativo-para-grandes-empresas/">plano corporativo para grandes empresas</a>.',
	'trocar-de-operadora-com-contrato-vigente':
		'Se ainda há contrato correndo, a ordem das etapas muda — veja <a href="/solucoes/trocar-de-operadora-com-contrato-vigente/">como trocar de operadora com contrato vigente</a>.',
	'auditoria-de-fatura-de-telecom':
		'Antes de trocar qualquer coisa, vale conferir o que já está sendo cobrado: <a href="/solucoes/auditoria-de-fatura-de-telecom/">auditoria de fatura de telecom</a>.',
	'renovacao-de-contrato-tim-empresas':
		'O momento da renovação é onde essa conversa acontece — veja <a href="/solucoes/renovacao-de-contrato-tim-empresas/">renovação de contrato TIM Empresas</a>.',
	'telecom-para-abertura-de-filial':
		'Numa unidade nova a ordem é inversa: a telecom precisa estar pronta antes da inauguração — veja <a href="/solucoes/telecom-para-abertura-de-filial/">telecom para abertura de filial</a>.',
	'tim-empresas-em-sorocaba':
		'Para empresas de Sorocaba o atendimento é presencial — veja <a href="/solucoes/tim-empresas-em-sorocaba/">TIM Empresas em Sorocaba</a>.',
	'internet-empresarial-em-sorocaba':
		'A viabilidade muda de endereço para endereço — veja <a href="/solucoes/internet-empresarial-em-sorocaba/">internet empresarial em Sorocaba</a>.',
	'tim-empresas-na-regiao-de-sorocaba':
		'O atendimento cobre o eixo Votorantim, Itu, Boituva e Iperó — veja <a href="/solucoes/tim-empresas-na-regiao-de-sorocaba/">TIM Empresas na região de Sorocaba</a>.',
	'telecom-para-industrias-em-sorocaba-e-regiao':
		'Na indústria da região o desenho considera galpão, pátio e administrativo — veja <a href="/solucoes/telecom-para-industrias-em-sorocaba-e-regiao/">telecom para indústrias em Sorocaba e região</a>.'
};

/**
 * artigo (slug) → LP (slug). Um artigo aponta para no máximo uma LP: dois links
 * comerciais no mesmo texto diluem os dois.
 */
export const ARTIGO_PARA_LP = {
	// LP 1 — clínicas
	'ip-fixo-empresarial-seguranca-acesso-remoto-guia': 'internet-e-telefonia-para-clinicas-e-consultorios',
	'videoconferencias-travando-checklist-de-internet-empresarial-para-trabalho-remoto':
		'internet-e-telefonia-para-clinicas-e-consultorios',

	// LP 2 — logística
	'tim-black-empresa-para-equipes-de-vendas-externas-3-recursos-que-aumentam-produtividade':
		'conectividade-para-transportadoras-e-logistica',
	'roaming-corporativo-reduzir-custos-produtividade': 'conectividade-para-transportadoras-e-logistica',

	// LP 3 — varejo
	'fibra-optica-empresarial-para-e-commerce-como-garantir-black-friday-sem-quedas':
		'internet-para-redes-de-lojas-e-varejo',
	'sua-empresa-perde-vendas-com-internet-lenta-veja-como-link-dedicado-resolve':
		'internet-para-redes-de-lojas-e-varejo',
	'tim-empresas-para-franquias-como-conectar-20-unidades-com-gestao-centralizada':
		'internet-para-redes-de-lojas-e-varejo',

	// LP 4 — escolas
	'tim-ultra-fibra-dimensionar-velocidade-empresa': 'internet-para-escolas-e-instituicoes-de-ensino',
	'tim-fibra-empresarial-500-mega-vs-1-giga-qual-a-diferenca-real-no-dia-a-dia':
		'internet-para-escolas-e-instituicoes-de-ensino',

	// LP 5 — hotelaria
	'tim-ultra-fibra-empresarial-vale-a-pena': 'internet-e-telefonia-para-hoteis-e-restaurantes',
	'tim-ultra-fibra-voip-requisitos-qos': 'internet-e-telefonia-para-hoteis-e-restaurantes',

	// LP 6 — sem fibra no endereço (nó mais alimentado da malha)
	'tim-empresas-validar-cobertura-4g-5g': 'internet-5g-para-empresas-sem-fibra-no-endereco',
	'tim-black-empresa-tem-cobertura-em-area-rural-mapa-de-cobertura-4g-5g-corporativo':
		'internet-5g-para-empresas-sem-fibra-no-endereco',
	'alternativas-a-banda-larga-residencial-para-empresas-que-sofrem-com-queda-de-conexao':
		'internet-5g-para-empresas-sem-fibra-no-endereco',
	'internet-backup-tim-empresas-4g-5g-failover': 'internet-5g-para-empresas-sem-fibra-no-endereco',
	'tim-ultrafibra-planos-2026-preco-cobertura': 'internet-5g-para-empresas-sem-fibra-no-endereco',

	// LP 7 — M2M
	'internet-das-coisas-iot-empresas-aplicacoes-praticas-2025': 'chip-m2m-para-rastreamento-e-telemetria',
	'27-bilhoes-dispositivos-iot-revolucao-tim-corporativo': 'chip-m2m-para-rastreamento-e-telemetria',
	'metade-das-empresas-em-projetos-iot-sua-concorrencia': 'chip-m2m-para-rastreamento-e-telemetria',
	'tim-empresas-gestao-linhas-esim-governanca': 'chip-m2m-para-rastreamento-e-telemetria',

	// LP 8 — 5G privativo
	'solucao-de-conectividade-tim-para-industrias-4-0-iot-cloud-e-edge-computing':
		'rede-privativa-5g-para-industria',
	'tim-corporativo-2026-iot-5g-eficiencia-industrial': 'rede-privativa-5g-para-industria',
	'5g-tim-empresarial-velocidades-ultra-rapidas-latencia-baixa-iot-2025':
		'rede-privativa-5g-para-industria',

	// LP 9 — revenda × direto. É a mitigação de canibalização mais importante do
	// plano: os 8 artigos de "consultor/consultoria" passam a apontar para a LP
	// em vez de disputarem a mesma intenção entre si.
	'consultoria-especializada-tim-corporativo-atendimento-b2b':
		'contratar-tim-direto-ou-por-revenda-autorizada',
	'consultor-tim-empresa-atendimento-personalizado-negocio':
		'contratar-tim-direto-ou-por-revenda-autorizada',
	'consultoria-tim-black-empresa-solucoes-corporativas-com-grupo-oc':
		'contratar-tim-direto-ou-por-revenda-autorizada',
	'consultoria-telecom-empresarial-2026-beneficios': 'contratar-tim-direto-ou-por-revenda-autorizada',
	'telefone-tim-empresas-consultor-cotacao-rapida': 'contratar-tim-direto-ou-por-revenda-autorizada',
	'telefone-tim-empresas-consultoria': 'contratar-tim-direto-ou-por-revenda-autorizada',
	'solicitacao-proposta-tim-empresas-como-funciona': 'contratar-tim-direto-ou-por-revenda-autorizada',
	'nfcom-2025-consultoria-telecom': 'contratar-tim-direto-ou-por-revenda-autorizada',

	// LP 10 — alternativa à Oi
	'migracao-operadora-tim-empresas-processo-cuidados': 'alternativa-a-oi-empresas',
	'como-migrar-operadora-tim-empresas-guia-completo': 'alternativa-a-oi-empresas',
	'tim-portabilidade-cnpj-guia-completo': 'alternativa-a-oi-empresas',

	// LP 11 — nacional × regional
	'comparativo-operadoras-tim-vivo-claro-empresas': 'operadora-nacional-ou-provedor-regional',
	'guia-completo-como-escolher-operadora-corporativa-para-empresa-com-20-100-colaboradores':
		'operadora-nacional-ou-provedor-regional',
	'operadora-atual-sem-suporte-tecnico-24h-veja-o-sla-real-de-tim-empresas':
		'operadora-nacional-ou-provedor-regional',

	// LP 12 — grandes contas
	'tim-corporativo-qual-plano-e-ideal-para-mei-pme-e-grande-empresa':
		'plano-corporativo-para-grandes-empresas',
	'empresas-tim-solucoes-para-negocios-de-todos-os-portes': 'plano-corporativo-para-grandes-empresas',
	'tim-empresas-diretoria-plano-executivo': 'plano-corporativo-para-grandes-empresas',
	'tim-empresas-login-guia-gestao-faturas-linhas-portal': 'plano-corporativo-para-grandes-empresas',

	// LP 13 — trocar com contrato vigente
	'portabilidade-tim-empresarial-como-trocar-de-operadora-e-manter-numero':
		'trocar-de-operadora-com-contrato-vigente',
	'portabilidade-tim-empresarial-guia-completo-trocar-operadora':
		'trocar-de-operadora-com-contrato-vigente',
	'migrar-de-operadora-corporativa-e-burocratico-passo-a-passo-da-portabilidade-tim':
		'trocar-de-operadora-com-contrato-vigente',
	// Artigo datado (fala em "antes de 2026"): o link para a LP atemporal é o que
	// preserva algum valor dele depois que a data passar.
	'feche-seu-contrato-tim-antes-de-2026-e-economize-ate-40': 'trocar-de-operadora-com-contrato-vigente',

	// LP 14 — auditoria de fatura (nó comercial central)
	'tim-conta-empresarial-como-entender-otimizar-fatura': 'auditoria-de-fatura-de-telecom',
	'tim-empresas-reduzir-custos-linhas-dados': 'auditoria-de-fatura-de-telecom',
	'eficiencia-operacional-tim-corporativo-reducao-custos-telecom': 'auditoria-de-fatura-de-telecom',
	'planejamento-telecom-2026-reducao-custos': 'auditoria-de-fatura-de-telecom',
	'tim-empresa-guia-executivo-reduzir-custos': 'auditoria-de-fatura-de-telecom',

	// LP 15 — renovação
	'tim-black-empresa-desconto-progressivo-2026': 'renovacao-de-contrato-tim-empresas',
	'tim-empresas-planos-corporativos-descontos-progressivos-guia': 'renovacao-de-contrato-tim-empresas',

	// LP 16 — filial
	'sd-wan-para-empresas-com-multiplas-filiais-como-tim-conecta-50-sites-com-seguranca':
		'telecom-para-abertura-de-filial',
	'como-agendar-uma-visita-tecnica-do-plano-tim-empresa': 'telecom-para-abertura-de-filial',

	// LP 17/18 — Sorocaba
	'tim-empresa-mei-microempresas-planos-sorocaba': 'tim-empresas-em-sorocaba',
	'tim-empresas-telefone-atendimento-2026': 'tim-empresas-em-sorocaba',
	'canais-de-atendimento-tim-empresarial': 'tim-empresas-em-sorocaba',
	'tim-ultra-fibra-checklist-contratacao-homologacao': 'internet-empresarial-em-sorocaba',
	'quanto-tempo-leva-para-instalar-link-dedicado-tim-timeline-completa':
		'internet-empresarial-em-sorocaba',

	// LP 20 — indústria local
	'poder-rede-movel-tim-agronegocio-industria-4-0': 'telecom-para-industrias-em-sorocaba-e-regiao'
};
