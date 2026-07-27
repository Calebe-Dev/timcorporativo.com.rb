// LP 2 — Cluster verticais. Keyword primária: "internet para transportadora".
//
// Ângulo de conversão: GASTO INVISÍVEL NA FROTA, não velocidade. Transportadora
// não compra "internet"; compra rastreamento que não some no meio da rodovia e
// um CD que não trava a emissão fiscal. O gancho da página é o inventário —
// linhas faturadas contra veículos em operação —, porque é a única conferência
// que o gestor de frota consegue exigir sozinho e que ninguém faz por ele.
//
// A página NÃO afirma procedimento interno do Grupo OC. O que é prometido são
// as duas coisas confirmadas: um consultor checa a viabilidade (no endereço do
// CD, na cobertura das rotas, na operação) e a condição por volume progride a
// partir de dez linhas. O critério técnico — três pontos de conexão, cobertura
// lida por itinerário, SLA no CD — permanece: é conhecimento do setor.

export default {
	slug: 'conectividade-para-transportadoras-e-logistica',
	cluster: 'verticais',
	ordem: 2,

	title: 'Conectividade para Transportadoras e Logística',
	description:
		'Conectividade para transportadoras: chips para rastreamento de frota, cobertura em rodovia e internet no CD. Peça o diagnóstico com um consultor TIM.',
	keywords:
		'internet para transportadora, conectividade para logística, chip para rastreamento de frota, internet para operador logístico, cobertura móvel em rodovia para frota, telefonia para transportadora',
	keywordPrimaria: 'internet para transportadora',

	h1: 'Transportadoras e operadores logísticos: frota rastreada, CD conectado e motorista falando',

	cardTitulo: 'Transportadoras e logística',
	cardTexto:
		'Veículo, motorista e centro de distribuição têm requisitos de conexão diferentes. O erro mais caro é contratar os três como se fossem a mesma linha.',

	hero: {
		eyebrow: 'Transportadoras e logística',
		sub: 'Rastreador que silencia no trecho errado, chip de caminhão que saiu da frota e continua faturando, doca parada porque o documento fiscal não sai. Antes de falar de plano, um consultor checa o que a sua operação tem ativo hoje e o que ela realmente usa.',
		bullets: [
			'Um consultor checa o que está ativo hoje na operação',
			'Cobertura lida por itinerário, não por média de estado',
			'Gestão centralizada dos chips M2M e das linhas de voz',
			'Viabilidade e redundância no centro de distribuição'
		],
		ctaPrimario: 'Falar com um consultor sobre a frota',
		whatsapp:
			'Olá! Tenho uma transportadora e quero avaliar os chips da frota e a internet do CD. Podem me ajudar?',
		cartaoTitulo: 'Por onde a conversa começa'
	},

	keyFacts: [
		{
			label: 'O gasto que ninguém enxerga',
			value: 'Chip ativo sem veículo',
			nota: 'Linha que segue faturando depois que o caminhão saiu da frota é o gasto mais comum em operação com rotatividade.'
		},
		{
			label: 'Como se lê cobertura',
			value: 'Por rota, não por estado',
			nota: 'A média estadual esconde exatamente o trecho de rodovia em que o rastreador fica em silêncio.'
		},
		{
			label: 'Experiência',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC, representante autorizado TIM · 4,9 no Google'
		}
	],

	resumo:
		'Uma operação logística tem três pontos de conexão com requisitos distintos: o veículo, que pede chip M2M gerido em lote; o motorista, que pede voz e dados na rota que ele percorre; e o centro de distribuição, que pede link fixo com prazo de reparo para o WMS e a emissão fiscal. Contratar os três como a mesma linha é o que gera custo ocioso e ponto cego de rastreamento.',

	secoes: [
		{
			id: 'tres-pontos-de-conexao',
			h2: 'Os três pontos de conexão de uma operação logística',
			paragrafos: [
				'Uma transportadora não tem um problema de conectividade: tem três, e eles não se resolvem com o mesmo contrato. O veículo precisa transmitir posição e telemetria de forma contínua e barata. O motorista precisa falar, receber ordem de coleta e registrar canhoto pelo celular. O centro de distribuição precisa de link fixo estável para o WMS, os coletores e a emissão de documento fiscal. São três perfis de consumo diferentes, com formas de gestão diferentes.',
				'O erro mais caro em conectividade de frota é tratar os três como uma coisa só. Chip de celular comum dentro de rastreador gera franquia desperdiçada e nenhuma gestão em lote; plano dimensionado para o motorista não serve para o equipamento embarcado; e link de CD contratado como banda larga de balcão deixa a doca parada sem prazo de reparo para cobrar de ninguém.'
			],
			lista: [
				'Veículo: chip M2M, dado pequeno e contínuo, gestão em lote',
				'Motorista: voz e dados em deslocamento, na rota que ele percorre',
				'Centro de distribuição: link fixo com prazo de reparo contratado',
				'Retaguarda: uma fatura só, conferível linha por linha e por placa'
			]
		},
		{
			id: 'frota-chip-m2m',
			h2: 'Frota: o chip que fica dentro do rastreador',
			paragrafos: [
				'O chip M2M existe porque equipamento não se comporta como pessoa. Ele foi desenhado para transmitir pacotes pequenos com alta frequência, ser ativado e bloqueado por plataforma e viver anos dentro de um rastreador sem ninguém tocar nele. Há também o formato industrial, em invólucro reforçado, para resistir a vibração, calor e umidade dentro do veículo.',
				'Chip comum de celular no rastreador funciona — até a frota crescer. Assim que a operação passa de algumas dezenas de veículos, o problema deixa de ser técnico e vira administrativo: ninguém sabe qual linha está em qual placa, o caminhão vendido continua faturando, o chip de veículo sinistrado não é bloqueado no mesmo dia e a fatura vira uma lista de números sem dono.'
			],
			subsecoes: [
				{
					h3: 'Rotas com sombra de cobertura',
					paragrafos: [
						'Toda operadora publica cobertura por município e por área. Uma transportadora não roda dentro de município: roda entre municípios. O trecho que decide o projeto é o de rodovia entre duas cidades, o pátio afastado, a estrada vicinal que leva à fazenda ou à pedreira — e é justamente ali que a média estadual esconde a sombra.',
						'Por isso o que vale é o itinerário, não o estado: com as rotas em mãos, um consultor checa a cobertura trecho a trecho e diz, antes do contrato, onde o rastreador vai ficar em silêncio e por quanto tempo. A diferença entre as gerações de rede também aparece aqui: onde só existe cobertura de tecnologia anterior, o rastreamento continua funcionando, mas aplicações que dependem de resposta imediata perdem o sentido.'
					]
				},
				{
					h3: 'Telemetria não é streaming',
					paragrafos: [
						'O perfil de dado de um rastreador é o oposto do perfil de um celular: muitos eventos minúsculos ao longo do dia inteiro, em vez de poucos blocos grandes. Um projeto dimensionado com a lógica de franquia de celular erra nas duas pontas — sobra pacote que não será usado e falta a gestão do que realmente importa, que é a continuidade da transmissão.',
						'Quando entram sensores de temperatura em carga refrigerada, leitura de porta de baú, telemetria de motor ou câmera de cabine, o volume muda de patamar e o dimensionamento precisa ser refeito. Câmera embarcada, em especial, é o item que mais desorganiza um contrato pensado apenas para posição de GPS.'
					]
				}
			]
		},
		{
			id: 'motorista-e-campo',
			h2: 'Motorista e equipe de campo',
			paragrafos: [
				'O motorista é o único dos três pontos que é uma pessoa, e isso muda o desenho. Ele precisa de voz para o embarque, dados para o aplicativo de coleta e entrega, registro de canhoto por foto e, cada vez mais, comprovação de entrega enquanto ainda está na rota. É um consumo irregular, concentrado em pátio, ponto de parada e cliente.',
				'A rotatividade da função cria um problema administrativo próprio: a linha de quem saiu continua ativa, o aparelho não devolvido segue consumindo e a ativação de linha nova precisa ser rápida o bastante para não deixar caminhão parado esperando telefone. Um contrato empresarial bem montado prevê isso — bloqueio, troca de usuário e ativação em lote fazem parte do desenho, não da improvisação.',
				'A equipe que não dirige entra na mesma lógica. Conferente, motorista de apoio e equipe de manutenção têm o plano definido por onde trabalham e pelo que usam em campo, não pelo cargo que ocupam no organograma.'
			]
		},
		{
			id: 'centro-de-distribuicao',
			h2: 'Centro de distribuição e cross-docking',
			paragrafos: [
				'No CD, a conexão deixa de ser conveniência e vira etapa do processo. WMS em nuvem, coletores de código de barras, balança integrada, impressão de etiqueta e emissão de CT-e e MDF-e dependem da mesma via. Quando ela falha, a doca não desacelera: ela para. Caminhão carregado sem documento fiscal emitido não sai do pátio, e a conta aparece em hora de veículo parado e janela de entrega perdida.',
				'É por isso que, no CD, o critério de escolha não é a velocidade anunciada e sim a existência de prazo de reparo em contrato somado a um caminho alternativo que entre sozinho. A pergunta que decide é objetiva: quantos minutos de doca parada a operação suporta antes de perder a janela do cliente? A resposta define o arranjo — não o orçamento.'
			],
			lista: [
				'WMS em nuvem e coletores dependem de disponibilidade contínua',
				'Emissão de CT-e e MDF-e trava a saída do veículo quando falha',
				'Balança, impressão de etiqueta e conferência ficam na mesma via',
				'Caminho alternativo automático mantém a emissão durante o reparo'
			]
		},
		{
			id: 'comparativo',
			h2: 'Onde cada tecnologia entra na operação',
			paragrafos: [
				'As quatro camadas abaixo não são alternativas entre si: elas convivem. O que muda de operação para operação é o peso de cada uma e quais delas a transportadora já tem sem saber que tem.'
			],
			tabela: {
				head: [
					'Critério',
					'Chip M2M no rastreador',
					'Plano móvel corporativo',
					'Link fixo no CD',
					'Caminho alternativo no CD'
				],
				rows: [
					[
						'Para que serve',
						'Rastreador, sensor e telemetria',
						'Motorista e equipe de campo',
						'WMS, coletores e emissão fiscal',
						'Continuidade durante a falha'
					],
					[
						'Perfil de uso',
						'Eventos pequenos e contínuos',
						'Voz, aplicativo e navegação',
						'Banda contratada e previsível',
						'Assume o essencial, não tudo'
					],
					[
						'O que quebra sem ele',
						'A frota deixa de ser rastreada',
						'Motorista incomunicável na rota',
						'A doca para e o veículo não sai',
						'Uma queda vira parada total'
					],
					[
						'Como é gerido',
						'Plataforma de linhas, em lote',
						'Perfis por usuário e por área',
						'Contrato com prazo de reparo',
						'Comutação automática, testada'
					],
					[
						'Onde o improviso falha',
						'Chip de celular no equipamento',
						'Linha de motorista desligado ativa',
						'Banda larga sem prazo de reparo',
						'Roteamento manual pelo encarregado'
					]
				],
				caption:
					'Comparação de papéis técnicos, sem valores: as quatro camadas coexistem numa operação logística e o desenho depende do tamanho da frota, das rotas percorridas e do que o CD emite. Cada proposta é montada depois que um consultor checa a viabilidade e o que a operação usa hoje.'
			}
		},
		{
			id: 'checklist',
			h2: 'O edital interno de conectividade logística',
			paragrafos: [
				'Nada nesta lista é exclusivo de uma operadora: leve-a para qualquer fornecedor que estiver disputando o seu contrato. São os pontos que só aparecem depois — com o contrato assinado, o caminhão na estrada e a informação faltando na tela de quem monitora.'
			],
			checklist: {
				titulo: 'Doze itens antes de fechar contrato de frota',
				intro: 'Peça cada resposta por escrito e guarde o documento junto do contrato da frota.',
				itens: [
					'Cobertura verificada pelos itinerários percorridos, não por estado',
					'Gestão dos chips em plataforma, com ativação e bloqueio pelo gestor',
					'Bloqueio imediato do chip em veículo roubado ou sinistrado',
					'Consumo visível por linha, com vínculo à placa do veículo',
					'Prazo de reparo por escrito para o link do centro de distribuição',
					'Caminho alternativo para a emissão de CT-e e MDF-e durante a queda',
					'Portabilidade das linhas de voz sem parar o embarque',
					'Ponto único de atendimento para frota, motoristas e CD',
					'Contrato consolidado no CNPJ do grupo, com matriz e filiais',
					'Regra clara de ativação de linha nova para reposição de motorista',
					'Relatório de consumo periódico, conferível pelo financeiro',
					'Controle de uso fora do país em rota internacional ou de fronteira'
				]
			}
		},
		{
			id: 'o-que-define-o-investimento',
			h2: 'O que define o investimento de uma operação logística',
			paragrafos: [
				'Não existe tabela de preço honesta para frota, e por isso não publicamos nenhuma: duas transportadoras com o mesmo número de caminhões podem exigir desenhos completamente diferentes conforme as rotas percorridas e o que cada rastreador transmite. O que dá para publicar é a lista das variáveis que entram na conta, para você reconhecer cada uma delas quando abrir a proposta.',
				'Sete variáveis explicam quase toda a distância entre um orçamento e outro. A menos lembrada é a penúltima: em distrito industrial recém-ocupado, a infraestrutura disponível no endereço do CD muda o desenho inteiro do projeto e precisa ser confirmada antes, não depois.'
			],
			lista: [
				'Número de veículos e de equipamentos embarcados por veículo',
				'Perfil de dado do rastreador: posição apenas, sensores ou câmera',
				'Quantidade de linhas de voz e a rotatividade esperada da equipe',
				'Banda do centro de distribuição e exigência de prazo de reparo',
				'Existência de caminho alternativo automático no CD',
				'Viabilidade técnica confirmada no endereço do CD e das filiais',
				'Volume de linhas reunidas no contrato, com a condição progredindo a partir de dez'
			]
		}
	],

	passos: {
		titulo: 'O que define o projeto de uma transportadora',
		subtitulo:
			'Quatro etapas, nesta ordem. O levantamento vem antes da proposta porque proposta sem levantamento só troca o nome da operadora na mesma conta.',
		itens: [
			{
				title: 'Levantamento da situação atual da operação',
				text: 'Um consultor levanta a situação atual da operação e checa a viabilidade antes de qualquer proposta: quantas linhas estão ativas, o que a frota usa de fato e o que segue sendo cobrado sem uso correspondente — chip de caminhão vendido, linha de motorista desligado, equipamento fora de operação.'
			},
			{
				title: 'Leitura de cobertura pelos itinerários da operação',
				text: 'As rotas que a frota percorre valem mais que a média do estado: é trecho a trecho que se sabe o que vai funcionar e onde o rastreador ficará em silêncio. Um consultor checa essa cobertura com o itinerário na mão, antes do contrato.'
			},
			{
				title: 'Viabilidade do CD e desenho das camadas',
				text: 'Um consultor checa a viabilidade no endereço do centro de distribuição, e as camadas são desenhadas lado a lado — chip embarcado, linhas de voz, link fixo e caminho alternativo —, cada uma com o papel definido por escrito.'
			},
			{
				title: 'Ativação em lote, sem parar a operação',
				text: 'Chips e linhas são ativados por lotes combinados com a operação, e a portabilidade dos números de embarque é agendada em janela definida. O projeto só é encerrado quando a frota inteira está transmitindo.'
			}
		]
	},

	objecoes: [
		{
			q: '“Quem cuida do chip é a empresa do rastreador.”',
			a: 'Ela cuida do equipamento e, com frequência, revende a linha embutida no pacote. O que costuma não existir nesse arranjo é visibilidade: você não vê consumo por veículo, não bloqueia sozinho o chip de um caminhão sinistrado e não sabe qual linha está em qual placa. Nada impede que continue assim — vale apenas saber o que você deixa de enxergar antes de decidir.'
		},
		{
			q: '“Já temos os chips, só queremos pagar menos.”',
			a: 'A primeira conversa nem chega a ser sobre plano: antes de renegociar, vale saber quantas linhas estão ativas e quantos veículos a operação realmente tem, porque em frota com rotatividade é comum a fatura ficar maior que a própria frota. Um consultor checa isso antes de falar em condição — e desligar o que não deveria estar ativo vem antes de renegociar o que está. Feito isso, o volume consolidado conta a favor: os descontos progressivos começam a partir de dez linhas.'
		},
		{
			q: '“Nossa rota tem trecho sem sinal e nenhuma operadora resolve.”',
			a: 'Em parte é verdade, e dizemos isso: nenhuma operadora cobre cada metro de rodovia do país. O que muda de uma para outra é onde a sombra está, e isso se verifica pelo itinerário. O rastreador armazena os eventos e transmite quando o sinal volta; o que se decide no projeto é quanto tempo de silêncio a operação tolera em cada trecho.'
		},
		{
			q: '“Trocar os chips de uma frota inteira é inviável.”',
			a: 'Por isso a troca não é feita de uma vez. A ativação acontece em lotes acertados com a operação — por filial, por rota ou por grupo de veículos que passa pela manutenção — e o contrato anterior só é encerrado quando o lote correspondente já está transmitindo.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'O critério que orienta esta página vale explicitar: em frota, nada começa pelo plano. Antes de qualquer proposta, um consultor checa a viabilidade no endereço do CD e levanta a situação atual da operação — quantas linhas estão ativas e o que a frota de fato usa. Não é uma análise de catálogo: é uma conferência do que já existe, e costuma ser ela que revela a maior parte do gasto que ninguém consegue explicar.',
			'A segunda regra é sobre cobertura: mapa se lê por itinerário, nunca por média de estado. Uma transportadora não opera dentro de um município, opera entre eles, e o trecho que decide o projeto é sempre o mais vazio da rota. Sobre condição comercial, o que é público vale para todo mundo: os descontos progressivos por volume começam a partir de dez linhas.'
		]
	},

	faqTitulo: 'Dúvidas de quem gerencia frota e centro de distribuição',
	faq: [
		{
			q: 'Qual a diferença entre chip M2M e chip comum de celular?',
			a: 'O M2M é feito para equipamento: perfil de dado pequeno e contínuo, ativação e bloqueio por plataforma, gestão em lote e, no formato industrial, resistência física dentro do veículo. Chip comum no rastreador funciona, mas cria custo ocioso e perda de controle assim que a frota cresce.'
		},
		{
			q: 'O rastreador para quando o caminhão entra numa área sem sinal?',
			a: 'O equipamento armazena os eventos e transmite quando o sinal volta; o que muda é a latência da informação, não a perda dela. Por isso a cobertura se avalia por itinerário, e não por média de estado.'
		},
		{
			q: 'Consigo ver o consumo de cada veículo?',
			a: 'Sim. A gestão de linhas M2M permite acompanhar o consumo por chip, o que torna possível identificar veículo fora de operação que continua gerando custo e vincular cada linha à placa correspondente.'
		},
		{
			q: 'A transportadora pode ter chips e linhas de voz no mesmo contrato?',
			a: 'Pode, e é o arranjo que recomendamos: um contrato, um ponto de atendimento e uma fatura conferível por linha. Fornecedores separados costumam multiplicar o tempo gasto só para descobrir de quem é o problema — e reunir tudo no mesmo contrato ainda consolida o volume de linhas, que é o que faz a condição progredir a partir de dez.'
		},
		{
			q: 'Quanto tempo leva para ativar os chips de uma frota inteira?',
			a: 'Depende do volume e da análise de crédito empresarial. O cronograma é definido na aprovação da proposta e a ativação é feita em lotes, para que nenhum grupo de veículos fique sem rastreamento durante a transição.'
		}
	],

	cta: {
		titulo: 'Fale com um consultor sobre a frota e o CD',
		texto:
			'Um consultor levanta a situação atual da operação, checa a viabilidade no endereço do centro de distribuição e a cobertura nos itinerários que você percorre — e só então apresenta proposta. Sem compromisso de contratação.'
	},

	service: {
		name: 'Conectividade e gestão de linhas para transportadoras e logística',
		serviceType: 'Conectividade M2M e corporativa para logística',
		description:
			'Projeto de conectividade para transportadoras e operadores logísticos: chips M2M para rastreamento e telemetria, linhas de voz e dados para motoristas e link fixo com redundância no centro de distribuição, com viabilidade checada por endereço e por itinerário.'
	},

	relacionadas: [
		'chip-m2m-para-rastreamento-e-telemetria',
		'internet-5g-para-empresas-sem-fibra-no-endereco',
		'internet-para-redes-de-lojas-e-varejo'
	],
	artigos: [
		'tim-black-empresa-tem-cobertura-em-area-rural-mapa-de-cobertura-4g-5g-corporativo',
		'tim-empresas-validar-cobertura-4g-5g',
		'internet-das-coisas-iot-empresas-aplicacoes-praticas-2025',
		'tim-black-empresa-para-equipes-de-vendas-externas-3-recursos-que-aumentam-produtividade'
	]
};
