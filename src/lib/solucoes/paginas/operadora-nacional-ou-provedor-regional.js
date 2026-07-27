// LP 11 — Cluster decisão. Keyword primária: "operadora ou provedor regional para empresa".
//
// Ângulo de conversão: APOIO À DECISÃO, não venda direta. O CTA é "traga as
// duas propostas e a gente compara linha a linha" — quem está nesse momento da
// jornada tem duas cotações na mesa e não sabe ler a diferença entre elas.
// A página vende o critério, não o produto.
//
// É também o wedge competitivo do cluster local: em Sorocaba o concorrente
// direto das LPs de cidade é o provedor regional, e esta página estabelece o
// vocabulário da comparação (redundância de rota, SLA uniforme, multiendereço)
// em vez de disputar adjetivo.
//
// ⚠ REVISAR ANTES DE PUBLICAR:
// - a página DECLARA o conflito de interesse ("somos canal TIM") dentro do
//   próprio comparativo e afirma que já recomendamos manter o provedor atual
//   como backup. Confirmar que isso de fato acontece — se não acontecer, a
//   frase precisa sair, porque é ela que sustenta a credibilidade do texto.
// - nenhuma afirmação sobre topologia de rede de operadora ou provedor
//   específico entra aqui: o texto compara MODELOS, não marcas. Manter assim.

export default {
	slug: 'operadora-nacional-ou-provedor-regional',
	cluster: 'decisao',
	ordem: 3,

	title: 'Operadora Nacional ou Provedor Regional?',
	description:
		'Operadora nacional ou provedor regional de internet: compare cobertura, SLA, redundância e suporte antes de decidir para a sua empresa.',
	keywords:
		'operadora ou provedor regional para empresa, diferença entre operadora e provedor de internet, provedor regional vale a pena para empresa, ISP local ou operadora nacional, qual melhor internet empresarial provedor ou operadora',
	keywordPrimaria: 'operadora ou provedor regional para empresa',

	h1: 'Provedor regional ou operadora nacional: os seis critérios que decidem para uma empresa',

	cardTitulo: 'Operadora nacional ou provedor regional',
	cardTexto:
		'Não existe vencedor universal. O regional costuma ganhar em prazo e proximidade; a operadora nacional, em redundância de rota e SLA uniforme entre unidades.',

	hero: {
		eyebrow: 'Decisão de fornecedor',
		sub: 'Duas propostas na mesa, números parecidos e nenhuma forma óbvia de comparar. Esta página traz os seis critérios que realmente separam os dois modelos, diz em que situação cada um vence e mostra quando o arranjo certo é ter os dois — um como principal e outro como caminho alternativo.',
		bullets: [
			'Seis critérios objetivos, aplicáveis às duas propostas',
			'Dez perguntas para fazer aos dois fornecedores',
			'O arranjo híbrido explicado, com quem responde definido',
			'Declaramos nosso conflito de interesse na própria página'
		],
		ctaPrimario: 'Comparar as duas propostas',
		whatsapp:
			'Olá! Estou entre um provedor regional e uma operadora nacional. Podem me ajudar a comparar?',
		cartaoTitulo: 'O que separa os dois modelos'
	},

	keyFacts: [
		{
			label: 'Onde o regional costuma ganhar',
			value: 'Prazo e proximidade',
			nota: 'Instalação mais rápida, técnico próximo e acesso direto a quem decide dentro do provedor.'
		},
		{
			label: 'Onde a nacional costuma ganhar',
			value: 'Rota e multiendereço',
			nota: 'Redundância de saída, contrato único para unidades em cidades diferentes e SLA uniforme.'
		},
		{
			label: 'Declaração de interesse',
			value: 'Somos canal TIM',
			nota: 'Grupo OC, representante autorizado TIM · CNPJ 23.474.830/0001-56 · 4,9 no Google com 110 avaliações'
		}
	],

	resumo:
		'Não existe vencedor universal entre provedor regional e operadora nacional. O provedor regional costuma vencer em prazo de instalação, proximidade e flexibilidade; a operadora nacional, em redundância de rota, cobertura para várias unidades e uniformidade de SLA. A decisão sai de seis critérios aplicados ao seu caso, não de uma preferência genérica.',

	secoes: [
		{
			id: 'resposta-honesta',
			h2: 'A resposta honesta: depende de seis coisas, e nenhuma delas é o logotipo',
			paragrafos: [
				'Quem procura essa comparação normalmente espera um veredito, e o veredito honesto é que não há um. Provedor regional e operadora nacional são modelos de negócio diferentes, com forças diferentes, e o mesmo fornecedor pode ser a escolha certa para a empresa da esquina e a errada para a sua.',
				'O provedor regional costuma vencer em prazo de instalação, proximidade física do atendimento, flexibilidade para pedidos fora do padrão e acesso direto a quem decide — em muitos casos, você fala com o dono ou com o responsável técnico, não com um roteiro de atendimento. A operadora nacional costuma vencer em redundância de rota, cobertura para unidades em cidades diferentes, uniformidade de SLA entre elas e continuidade contratual ao longo de anos.',
				'A decisão fica objetiva quando você para de comparar fornecedores e passa a comparar as seis dimensões abaixo aplicadas ao seu caso concreto: quantas unidades, que tolerância a parada, que prazo, que exigência contratual.'
			]
		},
		{
			id: 'o-que-muda-tecnicamente',
			h2: 'O que muda tecnicamente entre os dois modelos',
			paragrafos: [
				'A diferença começa em algo que nenhuma proposta comercial costuma explicar: como o tráfego da sua empresa sai para o resto da internet. Uma operadora nacional opera rede de longa distância própria e mantém múltiplas saídas de tráfego. Um provedor regional pode ter rede própria na última milha — a fibra que chega até a sua porta — e contratar de terceiros o transporte e a saída de tráfego.',
				'Não há nada de errado nisso: é um modelo legítimo e amplamente usado, e provedores regionais bem estruturados mantêm mais de um fornecedor de trânsito exatamente para não depender de um só. O ponto é que essa informação muda a resposta a uma pergunta prática — o que acontece com a sua conexão quando o problema não está na sua rua, e sim no caminho.',
				'É por isso que a pergunta certa a fazer aos dois candidatos não é “a rede é própria?”, e sim “quantas saídas independentes existem e o que acontece se uma cair?”. Um provedor regional com duas rotas contratadas de fornecedores distintos pode ser mais resiliente que uma solução mal desenhada de qualquer porte.'
			]
		},
		{
			id: 'seis-criterios',
			h2: 'Os seis critérios de decisão',
			paragrafos: [
				'Aplique os seis a cada proposta em análise. Eles funcionam com qualquer fornecedor, inclusive quando nenhuma das propostas é nossa — e a maioria deles não aparece espontaneamente na conversa de venda.'
			],
			lista: [
				'Redundância de rota: quantas saídas independentes existem e o que acontece quando uma falha',
				'Cobertura multiendereço: o mesmo fornecedor atende todas as suas unidades, com o mesmo padrão',
				'SLA contratual e histórico: o documento com prazo de reparo, e o histórico de cumprimento dele',
				'Prazo de instalação: com data e responsável, não estimativa verbal',
				'Continuidade do fornecedor: quem responde pelo contrato daqui a três anos',
				'Atendimento fora do horário comercial: se existe, e se é humano quando existe'
			],
			subsecoes: [
				{
					h3: 'Quando o provedor regional é a escolha certa',
					paragrafos: [
						'Endereço único, prazo apertado, necessidade de atendimento presencial e demandas que fogem do padrão — nesses cenários o provedor regional costuma entregar melhor. A estrutura enxuta que limita a redundância é a mesma que permite decidir rápido e mandar um técnico no mesmo dia.',
						'Há um sinal que vale mais que qualquer proposta: o histórico local. Empresas vizinhas usando o mesmo provedor há anos, com relato consistente sobre como ele se comporta no dia ruim, é uma evidência que nenhuma apresentação comercial substitui.'
					]
				},
				{
					h3: 'Quando a operadora nacional é a escolha certa',
					paragrafos: [
						'Operações com mais de uma unidade, exigência de SLA uniforme entre elas, contrato corporativo consolidado e filiais em cidades onde o provedor local não atua. Aqui o ganho não é de velocidade, é de padronização: um contrato, um padrão de serviço, uma régua de cobrança para todas as unidades.',
						'O outro cenário típico é o da empresa que não tolera parada. Quando a operação inteira depende da conexão, a conversa deixa de ser sobre banda e passa a ser sobre quantos caminhos independentes existem entre a sua empresa e a internet — e é nesse critério que a rede de longa distância própria pesa.'
					]
				},
				{
					h3: 'O arranjo híbrido, que quase ninguém propõe',
					paragrafos: [
						'O desenho mais robusto raramente é escolher um dos dois: é ter os dois, com um como principal e o outro como caminho alternativo, e a comutação automática configurada. Assim a falha de um fornecedor deixa de ser uma parada e vira um evento registrado no relatório.',
						'Duas condições tornam o híbrido útil de verdade. A primeira é que os caminhos sejam realmente independentes — dois acessos que saem pelo mesmo poste e pelo mesmo backbone não são redundância, são a mesma falha em duplicidade. A segunda é definir em contrato quem responde por diagnosticar o problema, para a empresa não virar árbitro de dois fornecedores apontando um para o outro.'
					]
				}
			]
		},
		{
			id: 'comparativo',
			h2: 'Provedor regional, operadora nacional e arranjo híbrido',
			paragrafos: [
				'A tabela compara os modelos pelos seis critérios, sem valores. Vale como régua de leitura das propostas que você já tem na mesa: se alguma linha estiver em branco em uma delas, é essa a pergunta que falta fazer.'
			],
			tabela: {
				head: ['Critério', 'Provedor regional', 'Operadora nacional', 'Arranjo híbrido'],
				rows: [
					[
						'Redundância de rota',
						'Varia — depende de quantos trânsitos contrata',
						'Múltiplas saídas na rede de longa distância',
						'Dois caminhos independentes, com comutação automática'
					],
					[
						'Cobertura multiendereço',
						'Limitada à área de atuação',
						'Contrato único para unidades em cidades diferentes',
						'Nacional na base, regional onde houver ganho local'
					],
					[
						'SLA contratual',
						'Existe, com variação entre provedores',
						'Padronizado e uniforme entre unidades',
						'O do principal, com o alternativo cobrindo a falha'
					],
					[
						'Prazo de instalação',
						'Costuma ser mais curto',
						'Depende de viabilidade e infraestrutura no endereço',
						'Definido pelo mais lento dos dois'
					],
					[
						'Atendimento',
						'Proximidade e contato direto com quem decide',
						'Canais estruturados, ampliáveis por canal autorizado',
						'Dois contatos — exige responsabilidade definida em contrato'
					],
					[
						'Continuidade',
						'Depende da solidez do provedor local',
						'Contrato corporativo de longo prazo',
						'Reduz a dependência de um único fornecedor'
					],
					[
						'Indicação típica',
						'Endereço único, prazo curto, bom histórico local',
						'Várias unidades, SLA uniforme, baixa tolerância a parada',
						'Operação que não pode parar em nenhuma hipótese'
					]
				],
				caption:
					'Comparação entre modelos de fornecimento, sem valores e sem marcas. O resultado muda conforme a viabilidade real de cada endereço e o tempo que a operação suporta parada.'
			}
		},
		{
			id: 'perguntas-aos-dois',
			h2: 'Dez perguntas para fazer aos dois antes de decidir',
			paragrafos: [
				'Faça as mesmas dez perguntas aos dois candidatos, de preferência por escrito. A comparação fica objetiva na hora, porque as respostas vagas se destacam sozinhas — e é justamente nelas que moram as surpresas do primeiro ano de contrato.'
			],
			checklist: {
				titulo: 'A mesma régua para os dois fornecedores',
				intro:
					'Peça tudo por escrito. Promessa verbal não é SLA, e “atendimento 24 horas” significa coisas muito diferentes conforme quem responde do outro lado.',
				itens: [
					'Qual o SLA por escrito e qual o prazo de reparo comprometido?',
					'Quantas rotas de saída independentes existem para o meu tráfego?',
					'A rede da última milha é própria? E o transporte, de quem é?',
					'Qual foi o histórico de indisponibilidade nos últimos doze meses?',
					'O atendimento fora do horário comercial é humano ou é registro de chamado?',
					'Qual o prazo de instalação, com data e responsável nomeado?',
					'O contrato cobre meus outros endereços, hoje e no futuro?',
					'IP fixo está incluído? É um endereço ou um bloco?',
					'Qual a política de reajuste e em que índice ela é baseada?',
					'O que acontece com o contrato se a empresa mudar de endereço?'
				]
			}
		},
		{
			id: 'como-avaliamos',
			h2: 'Como conduzimos essa avaliação — e o nosso conflito de interesse',
			paragrafos: [
				'O Grupo OC é representante autorizado TIM. Isso significa que temos interesse comercial em um dos lados desta comparação, e escrever um comparativo sem declarar isso seria uma peça de venda disfarçada. Está declarado, então, no cartão do topo da página e aqui.',
				'O que fazemos com essa limitação é aplicar os seis critérios ao caso concreto e mostrar o resultado, mesmo quando ele não nos favorece. Quando a empresa tem um endereço único, prazo curto e um provedor local com histórico consistente, dizemos isso. Em parte dos casos a recomendação que sai da análise é manter o fornecedor atual e usar o segundo acesso apenas como caminho alternativo — e essa também é uma proposta legítima.',
				'A régua que usamos para decidir é própria e cabe em uma frase: conte quantos endereços e quantas horas de parada a operação suporta. Um endereço e tolerância de algumas horas empurram a decisão para o fornecedor mais próximo e mais rápido. Vários endereços ou tolerância perto de zero empurram para a padronização e para a redundância — e, nesse caso, o arranjo híbrido costuma ser a resposta, não a escolha entre um e outro.'
			]
		}
	],

	passos: {
		titulo: 'Como comparamos duas propostas na prática',
		subtitulo:
			'Traga as duas cotações. A comparação é feita linha a linha, com os critérios visíveis — e o resultado é seu, contrate com quem contratar.',
		itens: [
			{
				title: 'Normalização das propostas',
				text: 'Colocamos as duas no mesmo formato antes de comparar qualquer coisa: banda de descida e de subida, garantia de banda, SLA, prazo de reparo, IP fixo, prazo de contrato e condições de reajuste. Metade das diferenças aparece só nessa etapa.'
			},
			{
				title: 'Levantamento da operação',
				text: 'Quantos endereços, quantos usuários simultâneos, quais sistemas dependem da conexão e quanto tempo a operação aguenta parada. Sem esses quatro números, comparar propostas é comparar folhetos.'
			},
			{
				title: 'Aplicação dos seis critérios',
				text: 'Cada proposta recebe a mesma régua, e as lacunas viram perguntas para os fornecedores. É comum uma das duas mudar de posição depois que as respostas chegam por escrito.'
			},
			{
				title: 'Recomendação com o porquê explícito',
				text: 'Entregamos a recomendação com o critério que a determinou, inclusive quando ela é manter o fornecedor atual. Se o desenho indicado for híbrido, definimos quem responde por diagnosticar cada falha.'
			}
		]
	},

	objecoes: [
		{
			q: '“Provedor local é mais barato.”',
			a: 'Frequentemente é, e isso conta — orçamento é um critério legítimo. O que vale comparar é o que está dentro de cada proposta: garantia de banda, SLA por escrito, prazo de reparo e quantas rotas de saída existem. Quando as duas propostas são colocadas no mesmo formato, a diferença costuma diminuir ou mudar de sinal. E se, depois disso, o local continuar melhor para o seu caso, essa é a resposta certa.'
		},
		{
			q: '“Operadora grande nunca atende.”',
			a: 'É uma percepção com origem concreta: atendimento de massa é estruturado em roteiro e nem sempre resolve rápido. A observação justa, porém, é que isso não é característica do porte, e sim do canal usado. Contrato empresarial tem fila própria, e um canal autorizado adiciona um consultor nomeado que conhece o histórico da conta. O inverso também é verdade: provedor pequeno com uma pessoa de plantão pode demorar mais que uma central grande.'
		},
		{
			q: '“Meu vizinho usa o provedor X e diz que é ótimo.”',
			a: 'Esse é um dado bom e nós o levamos a sério — histórico local vale mais que apresentação comercial. Só falta um complemento: pergunte a ele o que aconteceu no último dia ruim. Quanto tempo ficou fora, em quanto tempo alguém respondeu, se houve reparo no fim de semana. Comparar dias normais não diferencia fornecedor nenhum.'
		},
		{
			q: '“Não posso ter dois fornecedores, vira confusão.”',
			a: 'Vira confusão quando não se define quem responde pelo quê. Com responsabilidade escrita em contrato, comutação automática configurada e um ponto único de acionamento, o arranjo híbrido é operado sem esforço adicional no dia a dia. Se ainda assim a empresa preferir um fornecedor só, a escolha passa a ser entre prazo e redundância — e essa é uma decisão de negócio, não técnica.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, com sede em Sorocaba/SP e CNPJ 23.474.830/0001-56. São 110 avaliações públicas no Google com nota 4,9, e a carteira vai de MEI a operações do porte da BYD — o que significa que já comparamos propostas de provedores regionais e de operadoras nacionais na mesma mesa muitas vezes.',
			'Somos representante autorizado TIM e está escrito na própria página comparativa, não em uma nota de rodapé. A comparação que oferecemos é a dos critérios; a recomendação depende do seu caso e há situações em que ela aponta para manter o fornecedor atual, inclusive um provedor regional, com o segundo acesso entrando apenas como caminho alternativo.',
			'A regra de decisão é própria e dispensa consultor para ser aplicada: conte endereços e horas de parada toleradas. Um endereço com alguma tolerância favorece o fornecedor mais próximo; vários endereços ou tolerância próxima de zero favorecem padronização e redundância. Se a sua resposta ficar no meio do caminho, o desenho correto quase sempre é o híbrido.'
		]
	},

	faqTitulo: 'Dúvidas de quem está entre um provedor e uma operadora',
	faq: [
		{
			q: 'Provedor regional é pior que operadora nacional?',
			a: 'Não. Em endereço único e com bom histórico local, costuma entregar prazo e proximidade melhores. A diferença aparece em redundância de rota, cobertura em várias cidades e uniformidade de SLA entre unidades.'
		},
		{
			q: 'Posso ter os dois ao mesmo tempo?',
			a: 'Pode, e é o arranjo mais robusto: um como principal e outro como caminho alternativo, com comutação automática e responsabilidade definida em contrato. A condição é que os dois caminhos sejam de fato independentes.'
		},
		{
			q: 'Como comparo SLA de verdade?',
			a: 'Peça o documento, não a promessa: percentual de disponibilidade, prazo de reparo, forma de medição e o que acontece quando não é cumprido. SLA que não define consequência é expectativa, não compromisso.'
		},
		{
			q: 'Vocês são canal TIM. Essa comparação é imparcial?',
			a: 'Somos canal autorizado TIM e isso está declarado na página. A comparação é dos critérios, e eles funcionam com qualquer fornecedor. A recomendação depende do seu caso, e há situações em que indicamos manter o fornecedor atual.'
		},
		{
			q: 'O que é redundância de rota, na prática?',
			a: 'É existir mais de um caminho independente entre a sua empresa e a internet. Dois acessos que passam pelo mesmo trajeto físico e pelo mesmo transporte não são redundância: uma única falha derruba os dois.'
		}
	],

	cta: {
		titulo: 'Traga as duas propostas: comparamos linha a linha',
		texto:
			'Envie as cotações que você já tem em mãos, sejam elas de quem forem. Normalizamos as duas no mesmo formato, aplicamos os seis critérios e devolvemos a leitura com o porquê de cada ponto — sem cobrança e sem compromisso de contratar.'
	},

	service: {
		name: 'Comparação técnica de propostas de conectividade empresarial',
		serviceType: 'Consultoria de seleção de fornecedor de telecom',
		description:
			'Análise comparativa entre propostas de provedores regionais e operadoras nacionais para empresas: normalização das cotações, avaliação de redundância de rota, SLA, prazo de instalação, cobertura multiendereço e desenho de arranjo híbrido com failover.'
	},

	relacionadas: [
		'contratar-tim-direto-ou-por-revenda-autorizada',
		'internet-5g-para-empresas-sem-fibra-no-endereco',
		'internet-empresarial-em-sorocaba'
	],
	artigos: [
		'comparativo-operadoras-tim-vivo-claro-empresas',
		'guia-completo-como-escolher-operadora-corporativa-para-empresa-com-20-100-colaboradores',
		'operadora-atual-sem-suporte-tecnico-24h-veja-o-sla-real-de-tim-empresas',
		'internet-backup-tim-empresas-4g-5g-failover'
	]
};
