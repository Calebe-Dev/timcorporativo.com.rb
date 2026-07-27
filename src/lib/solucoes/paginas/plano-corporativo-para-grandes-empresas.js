// LP 12 — Cluster decisão. Keyword primária: "plano corporativo para grandes empresas".
//
// Ângulo de conversão: CONTROLE E CONFORMIDADE, não desconto. Quem compra aqui
// é procurement ou TI, decide por processo e responde por auditoria interna.
// O gancho é a conciliação inventário da operadora × base do RH — um
// procedimento concreto, com resultado mensurável, que nenhuma página
// institucional de operadora oferece. O CTA pede a conciliação, não a proposta.
//
// SEPARAÇÃO DE CANIBALIZAÇÃO (obrigatória): três artigos vivos já respondem
// "qual plano para o meu porte" (tim-corporativo-qual-plano-e-ideal-para-mei-pme-e-grande-empresa,
// guia-completo-como-escolher-operadora-corporativa..., empresas-tim-solucoes-para-negocios-de-todos-os-portes).
// Esta LP responde OUTRA pergunta: como estruturar contrato, faturamento e
// governança de um parque grande. Não incluir nenhuma seção explicando MEI ou
// PME aqui — o encaminhamento é por link, e é assim que as duas coisas convivem.
//
// ⚠ REVISAR ANTES DE PUBLICAR:
// - "contrato estruturado no grupo econômico, com faturamento separado por CNPJ
//   e condições preservadas na estrutura": confirmar a redação exata com quem
//   negocia contrato corporativo. É afirmação sobre política comercial.
// - "gestor de contas nomeado", "SLA de ativação" e "relatório por centro de
//   custo" são apresentados como itens NEGOCIÁVEIS do contrato, não como
//   entrega garantida. Manter esse enquadramento.
// - conciliação inventário × base do RH: confirmar que é procedimento de rotina
//   e não exceção. É o elemento de E-E-A-T da página.

export default {
	slug: 'plano-corporativo-para-grandes-empresas',
	cluster: 'decisao',
	ordem: 4,

	title: 'Plano Corporativo para Grandes Empresas | TIM',
	description:
		'Telecom para operações grandes: contrato para vários CNPJs, faturamento por unidade, rateio por centro de custo e gestor de contas nomeado.',
	keywords:
		'plano corporativo para grandes empresas, contrato corporativo de telecom, gestão de mais de 100 linhas móveis, telecom para grupo com vários CNPJs, faturamento centralizado de telecom, rateio de telecom por centro de custo',
	keywordPrimaria: 'plano corporativo para grandes empresas',

	h1: 'Parque grande de telecom: contrato, faturamento e governança sob controle',

	cardTitulo: 'Grandes empresas e parques grandes',
	cardTexto:
		'Acima de certo volume o problema deixa de ser o plano e passa a ser gestão: inventário, rateio, ciclo de vida da linha e quem responde por cada uma.',

	hero: {
		eyebrow: 'Contas corporativas',
		sub: 'Num parque grande, o dinheiro raramente escapa pelo valor do plano. Escapa pela linha ativa de quem já saiu, pela fatura que ninguém concilia, pelo pedido de ativação que leva semanas e pela ausência de visão por centro de custo. Esta página trata de contrato, faturamento e governança — a camada que decide o resultado depois que o plano já foi escolhido.',
		bullets: [
			'Contrato estruturado para grupo com vários CNPJs',
			'Faturamento por unidade e rateio por centro de custo',
			'Conciliação do inventário com a base do RH',
			'Migração por ondas, com validação a cada lote'
		],
		ctaPrimario: 'Solicitar a conciliação do parque',
		whatsapp:
			'Olá! Temos um parque grande de linhas e queremos avaliar contrato, faturamento e gestão. Podem me ajudar?',
		cartaoTitulo: 'O que muda em escala'
	},

	keyFacts: [
		{
			label: 'O diagnóstico que abre o projeto',
			value: 'Inventário × RH',
			nota: 'Conciliar a base da operadora com a folha ativa. É o levantamento que costuma pagar o projeto sozinho.'
		},
		{
			label: 'A regra de governança',
			value: 'Linha sem dono não entra',
			nota: 'Toda linha nasce com responsável nomeado e centro de custo. Sem isso, a desativação nunca acontece.'
		},
		{
			label: 'Quem conduz',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC · representante autorizado TIM · CNPJ 23.474.830/0001-56 · carteira de MEI a operações do porte da BYD'
		}
	],

	resumo:
		'Acima de algumas centenas de linhas, o problema deixa de ser qual plano contratar e passa a ser gestão: saber quantas linhas existem, quem responde por cada uma, como a fatura é rateada e em quanto tempo uma linha nova é ativada. Contrato, faturamento e governança definem o resultado — e são exatamente os itens que ninguém negocia na pressa.',

	secoes: [
		{
			id: 'acima-de-cem-linhas',
			h2: 'O que muda quando o parque passa de cem linhas',
			paragrafos: [
				'Em uma operação pequena, telecom é uma decisão de compra: escolhe-se o plano, contrata-se e pronto. Em um parque grande, telecom vira um processo contínuo, com entradas e saídas toda semana, várias unidades envolvidas e um financeiro que precisa fechar o mês sem planilha manual.',
				'A consequência prática é que o valor do plano deixa de ser a variável dominante. O que passa a determinar o custo total é o que acontece entre uma renovação e outra: quantas linhas ficaram ativas depois do desligamento do colaborador, quanto tempo o financeiro gasta para conciliar a fatura, quantos dias uma contratação espera pela linha e quantos centros de custo recebem rateio estimado por falta de dado.',
				'Esta página não trata de escolher plano por porte de empresa — essa conversa está nos artigos de apoio ao final, com o recorte de MEI, pequena e média empresa. Aqui o assunto é a camada que vem depois: como o contrato é estruturado, como a fatura é organizada e quem responde por cada linha.'
			]
		},
		{
			id: 'quatro-problemas',
			h2: 'Os quatro problemas típicos de um parque grande',
			paragrafos: [
				'Eles aparecem em praticamente toda operação que cresceu por adição, sem ninguém revisar o conjunto. Nenhum é sinal de má gestão: é o efeito natural de dez anos de contratações, trocas de aparelho e mudanças de estrutura sem um processo que amarre as pontas.'
			],
			lista: [
				'Linha ativa de quem já saiu da empresa — descoberta meses depois, quando alguém cruza as bases',
				'Fatura que ninguém concilia: o total é conferido, o detalhe não, e a diferença vira custo aceito',
				'Ativação lenta na contratação: o novo colaborador chega e espera dias pela linha corporativa',
				'Nenhuma visão por centro de custo: o rateio vira estimativa e cada gestor contesta o próprio número'
			],
			subsecoes: [
				{
					h3: 'A conta que ninguém fecha',
					paragrafos: [
						'Os quatro problemas têm a mesma raiz: não existe uma fonte única de verdade sobre quantas linhas a empresa tem e a quem cada uma pertence. A operadora sabe o que fatura, o RH sabe quem está ativo, o TI sabe quais aparelhos entregou — e as três listas nunca batem sozinhas.',
						'Por isso todo projeto de parque grande começa pela conciliação dessas bases, e não pela proposta comercial. É um trabalho concreto, com resultado mensurável no primeiro ciclo de fatura, e frequentemente é ele que financia o restante do projeto.'
					]
				}
			]
		},
		{
			id: 'contrato-varios-cnpjs',
			h2: 'Contrato para grupo com vários CNPJs',
			paragrafos: [
				'Grupos econômicos costumam chegar com um contrato por empresa, herdados de contratações independentes feitas em épocas diferentes. O resultado é previsível: condições distintas para a mesma necessidade, renovações em datas desencontradas e nenhum poder de negociação consolidado, porque o volume está fragmentado.',
				'A estruturação no grupo econômico resolve os três de uma vez: um contrato que abriga matriz e controladas, faturamento separado por CNPJ para o financeiro de cada empresa fechar o seu, e condições preservadas em toda a estrutura conforme a política comercial vigente. Cada unidade continua tendo a própria fatura; o que deixa de existir é a negociação isolada.'
			],
			subsecoes: [
				{
					h3: 'Rateio por centro de custo e por unidade',
					paragrafos: [
						'O financeiro não precisa de um total: precisa saber quanto cada área consumiu, para lançar no lugar certo sem planilha intermediária. Isso depende de duas coisas definidas antes da assinatura — o formato do relatório e a existência do campo de centro de custo associado a cada linha.',
						'Quando o campo não existe desde o início, o rateio vira estimativa e a discussão se repete todo mês, sem ninguém conseguir provar nada. É um item barato de negociar antes e caro de corrigir depois, porque exige revisar linha a linha um parque inteiro em produção.'
					]
				},
				{
					h3: 'Ciclo de vida da linha, da admissão ao desligamento',
					paragrafos: [
						'Admissão, troca de aparelho, afastamento, mudança de área e desligamento: cada evento precisa de um gatilho definido e de um responsável. O ponto mais caro do ciclo é sempre o mesmo — o desligamento, porque ele depende de alguém avisar, e esse alguém raramente é quem paga a conta.',
						'A regra que aplicamos é direta: nenhuma linha entra no parque sem responsável nomeado e centro de custo preenchido. Parece burocracia até o dia da conciliação, quando é exatamente esse campo que permite identificar em minutos o que precisa ser desativado — em vez de abrir uma investigação por número.'
					]
				}
			]
		},
		{
			id: 'governanca',
			h2: 'Governança e política de uso',
			paragrafos: [
				'Política de uso não é documento para constar: é o que evita que a exceção vire regra e que a fatura cresça sem ninguém conseguir explicar por quê. Ela define perfis por função, o que cada perfil tem direito e como uma exceção é aprovada e registrada.',
				'Em operações com equipes em campo e viagens, dois pontos concentram as surpresas de fatura e merecem definição explícita: o comportamento de dados fora do perfil contratado e as regras de uso em deslocamento internacional. São itens que se resolvem no desenho do contrato e da política, não na contestação da fatura depois do fato consumado.'
			],
			lista: [
				'Perfis de uso por função, com o que cada um inclui e exclui',
				'Fluxo de aprovação de exceção, com registro de quem aprovou',
				'Regras de uso de dados e de deslocamento internacional definidas antes da viagem',
				'Responsável nomeado por unidade para validar admissões e desligamentos',
				'Rotina de revisão periódica do parque, com data marcada em calendário'
			]
		},
		{
			id: 'comparativo',
			h2: 'Três modelos de gestão de parque, lado a lado',
			paragrafos: [
				'Os três funcionam — em contextos diferentes. Uma empresa com parque estável, pouca rotatividade e um administrativo organizado opera muito bem em planilha, e trocar isso por estrutura adicional seria custo sem retorno. O modelo deixa de servir quando a rotatividade aumenta, as unidades se multiplicam ou o financeiro passa a exigir rateio auditável.'
			],
			tabela: {
				head: ['Critério', 'Gestão pelo administrativo', 'Gestão pelo TI com portal', 'Gestão assistida pelo canal'],
				rows: [
					[
						'Esforço interno',
						'Alto e concentrado em uma pessoa',
						'Médio, com processo definido',
						'Baixo — o canal executa e a empresa aprova'
					],
					[
						'Tempo de ativação',
						'Depende da agenda de quem controla',
						'Rápido, dentro do fluxo do portal',
						'Rápido, com acompanhamento até a entrega'
					],
					[
						'Risco de linha ociosa',
						'Alto: depende de aviso informal de desligamento',
						'Médio: depende da integração com o RH',
						'Baixo: conciliação periódica com a base do RH'
					],
					[
						'Visibilidade de custo',
						'Total da fatura, sem detalhe confiável',
						'Relatórios do portal, por linha',
						'Relatório por centro de custo, conciliado'
					],
					[
						'Conhecimento do contrato',
						'Fica com quem contratou, muitas vezes já saiu',
						'Fica documentado no processo interno',
						'Fica com o consultor nomeado, com histórico'
					],
					[
						'Indicação típica',
						'Parque estável, baixa rotatividade, uma unidade',
						'Empresa com analista de TI dedicado ao tema',
						'Vários CNPJs, alta rotatividade, exigência de rateio'
					]
				],
				caption:
					'Comparação de modelos de gestão, sem valores. O modelo adequado depende da rotatividade, do número de unidades e do nível de rastreabilidade exigido pelo financeiro e pela auditoria.'
			}
		},
		{
			id: 'checklist-contrato',
			h2: 'Doze itens do contrato corporativo que ninguém lembra de negociar',
			paragrafos: [
				'A negociação costuma se concentrar no que é fácil comparar, e os itens abaixo ficam para depois — quando já não são negociáveis. Todos eles são cláusulas ou definições que precisam estar no contrato desde o início, porque cada um vira um problema operacional recorrente quando falta.'
			],
			checklist: {
				titulo: 'Doze itens antes de assinar um contrato corporativo',
				intro:
					'Leve a lista para a mesa de negociação, seja qual for o fornecedor. Item que não está no contrato é favor — e favor não sobrevive à troca de interlocutor.',
				itens: [
					'Vários CNPJs do grupo abrigados no mesmo contrato',
					'Faturamento separado por unidade, com o detalhe por linha',
					'Portal de gestão com perfis de acesso definidos',
					'SLA de ativação de linha nova, com prazo comprometido',
					'Prazo de desativação e o que acontece com a cobrança nele',
					'Relatório por centro de custo, no formato que o financeiro usa',
					'Perfis de uso por função, com exceções previstas',
					'Regras de uso em deslocamento internacional',
					'Gestor de contas nomeado e o canal de escalonamento',
					'Condições preservadas quando o parque crescer',
					'Cláusula de reajuste, com índice e periodicidade explícitos',
					'Data de renovação e prazo de aviso prévio, em calendário'
				]
			}
		},
		{
			id: 'o-que-define-o-investimento',
			h2: 'O que define o investimento em um parque grande',
			paragrafos: [
				'Não publicamos valores porque nenhuma tabela sobreviveria ao contato com um parque grande: duas empresas com o mesmo número de linhas podem ter perfis de uso, exigências de gestão e estruturas societárias completamente diferentes. O que dá para explicar são as variáveis que compõem a proposta, para a área de compras chegar à mesa sabendo o que está sendo cotado.',
				'Cinco fatores respondem por quase toda a diferença entre uma proposta e outra — e as condições comerciais variam por volume, incluindo os descontos progressivos aplicáveis a partir de dez linhas conforme a política vigente da operadora.'
			],
			lista: [
				'Volume total de linhas e o ritmo de crescimento previsto',
				'Número de CNPJs e a estrutura societária do grupo',
				'Perfil de consumo de dados e o uso em deslocamento',
				'Nível de gestão exigido: portal, relatórios e conciliação periódica',
				'SLA de ativação e de desativação comprometidos em contrato'
			]
		}
	],

	passos: {
		titulo: 'Como o Grupo OC opera contas corporativas',
		subtitulo:
			'Quatro etapas, e a primeira não é comercial. Sem inventário conciliado, qualquer proposta para um parque grande é dimensionada sobre um número que ninguém confirmou.',
		itens: [
			{
				title: 'Conciliação do inventário com a base do RH',
				text: 'Cruzamos a base de linhas da operadora com a folha ativa e com o inventário de aparelhos do TI. O resultado é a lista do que existe, do que tem dono e do que não tem — e é essa lista que abre o projeto, não a proposta.'
			},
			{
				title: 'Desenho contratual e de faturamento',
				text: 'Definimos como o contrato abriga os CNPJs do grupo, como a fatura é separada por unidade, qual o formato do relatório por centro de custo e quais SLAs de ativação e desativação entram no papel.'
			},
			{
				title: 'Migração por ondas, com validação a cada lote',
				text: 'Nenhum parque grande vira de uma vez. Migramos por lotes, começando pelas unidades de menor risco, validando cada onda antes de liberar a próxima. É o mesmo método que usamos em frota e em base instalada.'
			},
			{
				title: 'Rotina de revisão periódica',
				text: 'Depois da estabilização, o parque é revisto em ciclos com data marcada: linhas sem uso, perfis fora do padrão, exceções que viraram regra e conferência do rateio. Sem rotina, o parque volta ao estado anterior em poucos meses.'
			}
		]
	},

	objecoes: [
		{
			q: '“Já temos gerente de contas na operadora.”',
			a: 'Ótimo ponto de partida, e não estamos propondo substituí-lo: o gerente responde pelo contrato e continua sendo o canal para isso. O que costuma faltar não é interlocutor, é a rotina de conciliar inventário com a base do RH e de revisar o parque periodicamente — um trabalho de execução que raramente cabe na agenda de quem gerencia dezenas de contas.'
		},
		{
			q: '“Nosso administrativo controla em planilha e funciona.”',
			a: 'Se a rotatividade é baixa, a unidade é uma só e a fatura fecha sem discussão, a planilha funciona mesmo — e nesse caso a recomendação é não mexer. O modelo começa a falhar em três situações específicas: quando as unidades se multiplicam, quando a rotatividade cresce e quando a auditoria passa a exigir rastreabilidade do rateio. Vale checar em qual delas a empresa está.'
		},
		{
			q: '“Trocar um parque desse tamanho é inviável agora.”',
			a: 'Trocar tudo de uma vez seria mesmo. Por isso a migração acontece por ondas, com validação a cada lote e possibilidade de parar entre uma e outra. E a etapa mais valiosa, a conciliação do inventário, não depende de trocar nada: ela é útil imediatamente, inclusive para quem vai permanecer com o fornecedor atual.'
		},
		{
			q: '“Cada filial tem contrato próprio, sempre foi assim.”',
			a: 'É o cenário mais comum em grupos que cresceram por aquisição, e nem sempre é errado — filiais com operação muito distinta às vezes justificam contratos separados. O que costuma não se justificar é a fragmentação involuntária, em que o grupo perde poder de negociação por ter o volume espalhado e renovações desencontradas, sem que ninguém tenha decidido isso.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, com sede em Sorocaba/SP e CNPJ 23.474.830/0001-56, e é representante autorizado TIM para empresas. São 110 avaliações públicas no Google com nota 4,9, e a carteira vai de MEI a operações do porte da BYD — o que significa parques grandes de verdade, com várias unidades e rotatividade real.',
			'O procedimento que abre todo projeto de parque grande é próprio e verificável no primeiro ciclo de fatura: conciliar a base de linhas da operadora com a folha ativa do RH e com o inventário de aparelhos do TI. As três listas nunca batem sozinhas, e a diferença entre elas é dinheiro saindo todo mês por linhas sem dono.',
			'A regra de governança que aplicamos é igualmente simples de cobrar: nenhuma linha entra no parque sem responsável nomeado e centro de custo preenchido. É o único campo que transforma a desativação num procedimento de minutos, em vez de uma investigação número por número — e é a diferença entre um parque que se mantém organizado e um que volta ao caos em seis meses.'
		]
	},

	faqTitulo: 'Dúvidas de quem administra um parque grande',
	faq: [
		{
			q: 'Dá para colocar matriz e filiais com CNPJs diferentes num contrato só?',
			a: 'Sim. O contrato é estruturado no grupo econômico, com faturamento separado por CNPJ para cada financeiro fechar o seu, e condições preservadas em toda a estrutura conforme a política comercial vigente.'
		},
		{
			q: 'Como identifico linhas ativas de funcionários que já saíram?',
			a: 'Conciliando o inventário da operadora com a base do RH e com o inventário de aparelhos do TI. É o primeiro diagnóstico que fazemos em parque grande, e costuma ser o que paga o projeto.'
		},
		{
			q: 'O financeiro consegue relatório por centro de custo?',
			a: 'Sim, desde que o campo de centro de custo esteja associado a cada linha e o formato do relatório esteja definido em contrato. Combinado depois da assinatura, vira exceção difícil de manter.'
		},
		{
			q: 'Quanto tempo leva para ativar uma linha nova numa contratação?',
			a: 'Depende do SLA de ativação acordado — que é um item negociável e frequentemente esquecido na negociação. Sem prazo comprometido em contrato, a ativação depende de fila e de prioridade.'
		},
		{
			q: 'Migrar um parque grande interrompe a operação?',
			a: 'Não, quando é feito por ondas com validação a cada lote e possibilidade de parar entre elas. É o mesmo método que usamos em migração de frota e de base instalada.'
		},
		{
			q: 'A conciliação do parque tem custo se não contratarmos nada?',
			a: 'Não. O levantamento e a leitura do contrato vigente são feitos sem cobrança e sem compromisso, e o resultado fica com a empresa mesmo que a decisão seja manter o fornecedor atual.'
		}
	],

	cta: {
		titulo: 'Solicite a conciliação do seu parque de linhas',
		texto:
			'Envie a fatura consolidada e o contrato vigente: devolvemos a conciliação entre o inventário da operadora e a base ativa, a lista de linhas sem responsável e os pontos do contrato que valem renegociar na próxima janela. Sem cobrança pela análise.'
	},

	service: {
		name: 'Gestão de contrato e parque de telecom para grandes empresas',
		serviceType: 'Consultoria de telecom corporativo',
		description:
			'Estruturação de contrato corporativo para grupos com vários CNPJs: faturamento por unidade, rateio por centro de custo, SLA de ativação e desativação, conciliação de inventário com a base de colaboradores e rotina de revisão periódica do parque.'
	},

	relacionadas: [
		'auditoria-de-fatura-de-telecom',
		'telecom-para-abertura-de-filial',
		'renovacao-de-contrato-tim-empresas'
	],
	artigos: [
		'tim-empresas-diretoria-plano-executivo',
		'tim-empresas-gestao-linhas-esim-governanca',
		'tim-empresas-login-guia-gestao-faturas-linhas-portal',
		'tim-corporativo-qual-plano-e-ideal-para-mei-pme-e-grande-empresa'
	]
};
