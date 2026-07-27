// LP 9 — Cluster decisão. Keyword primária: "contratar TIM direto ou por revenda autorizada".
//
// Ângulo de conversão: HONESTIDADE COMO ARGUMENTO. Esta é a objeção central do
// negócio — "por que eu não ligo direto na operadora?" — e nenhuma página do
// site responde isso de frente hoje. Quem chega aqui não quer ser convencido:
// quer reduzir o risco percebido de falar com um intermediário. Por isso a
// página diz com todas as letras quando contratar direto é melhor e publica o
// checklist com o qual o próprio Grupo OC deve ser avaliado. É esse movimento
// que torna a página citável — e o CTA é o de menor atrito possível (uma
// segunda leitura da fatura), não um pedido de proposta.
//
// ⚠ REVISAR ANTES DE PUBLICAR:
// - "o canal é remunerado pela operadora e não há cobrança de consultoria à
//   parte": confirmar que vale em 100% dos casos, sem exceção de projeto.
// - "o contrato, a fatura, a garantia e o suporte seguem sendo da operadora":
//   confirmar a redação — é a frase que sustenta a página inteira.
// - a seção "quando contratar direto é a melhor escolha" precisa ter o aval
//   comercial: ela custa lead no curto prazo e é o que dá credibilidade ao
//   resto. Se o time não sustentar essa posição, a página perde o sentido.

export default {
	slug: 'contratar-tim-direto-ou-por-revenda-autorizada',
	cluster: 'decisao',
	ordem: 1,

	title: 'Contratar TIM Direto ou por Revenda Autorizada?',
	description:
		'Contratar TIM Empresas direto ou por revenda autorizada: o que muda em atendimento, condições e pós-venda. Compare os dois caminhos e decida.',
	keywords:
		'contratar TIM direto ou por revenda autorizada, revenda autorizada TIM empresas, vale a pena contratar por representante TIM, diferença entre TIM Empresas e canal autorizado, consultor TIM autorizado é confiável, contratar plano TIM por parceiro',
	keywordPrimaria: 'contratar TIM direto ou por revenda autorizada',

	h1: 'Direto com a operadora ou por um canal autorizado: o que realmente muda para a sua empresa',

	cardTitulo: 'Direto ou por canal autorizado',
	cardTexto:
		'O contrato é com a TIM nos dois caminhos. O que muda é quem faz o diagnóstico, quem compara os produtos e quem atende depois da ativação.',

	hero: {
		eyebrow: 'Decisão de fornecedor',
		sub: 'A pergunta é legítima e quase ninguém responde: se o serviço é da TIM nos dois casos, por que passar por um canal autorizado? Esta página compara os dois caminhos ponto a ponto, mostra em que situações contratar direto é a escolha certa e entrega o checklist para você qualificar qualquer canal — inclusive nós.',
		bullets: [
			'O contrato e a garantia seguem sendo da operadora',
			'Um consultor lê a fatura atual antes de qualquer proposta',
			'Consultor nomeado no pós-venda, não só uma central',
			'Checklist aberto para qualificar qualquer canal'
		],
		ctaPrimario: 'Falar com um consultor sobre a fatura',
		whatsapp:
			'Olá! Quero entender a diferença entre contratar a TIM direto ou por um canal autorizado.',
		cartaoTitulo: 'O que muda de verdade'
	},

	keyFacts: [
		{
			label: 'Com quem fica o contrato',
			value: 'Com a TIM',
			nota: 'Nos dois caminhos. O canal conduz análise, proposta e ativação; serviço, fatura e garantia são da operadora.'
		},
		{
			label: 'A pergunta que decide',
			value: 'Quantas variáveis?',
			nota: 'Uma linha e um produto: o caminho direto resolve. Vários produtos, endereços ou portabilidade junto: o diagnóstico muda o resultado.'
		},
		{
			label: 'Quem responde por esta página',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC · CNPJ 23.474.830/0001-56 · Sorocaba/SP · 4,9 no Google com 110 avaliações'
		}
	],

	resumo:
		'Nos dois caminhos o contrato, a fatura e a garantia são da TIM. O que muda é quem conduz a análise antes da proposta, quem compara mais de um produto, quem responde pela portabilidade e quem atende depois de ativado. Para uma linha só, o caminho direto costuma ser mais rápido; com várias variáveis em jogo, o diagnóstico é o que define o resultado.',

	secoes: [
		{
			id: 'resposta-curta',
			h2: 'A resposta curta: o que é igual e o que é diferente',
			paragrafos: [
				'Contratar direto ou por canal autorizado não muda a natureza do serviço. A operadora é a mesma, o contrato é firmado com ela, a fatura vem em nome dela e a garantia é dela. Não existe uma versão paralela do plano vendida pelo canal, nem um produto que só ele alcança.',
				'A diferença está no processo de compra e no que existe depois dela. O canal autorizado levanta o cenário antes de propor, compara os produtos do portfólio entre si, conduz a portabilidade e continua sendo um ponto de contato nomeado depois da ativação. O caminho direto entrega velocidade e simplicidade quando a necessidade já está clara e cabe em um pedido só.',
				'Nenhum dos dois é melhor em abstrato, e desconfie de quem disser que é. O que decide é a quantidade de variáveis do seu caso — quantos produtos, quantos endereços, quantas linhas, se há portabilidade envolvida e se alguém na empresa acompanha a fatura de perto.'
			]
		},
		{
			id: 'o-que-e-canal-autorizado',
			h2: 'O que é um representante autorizado — e o que não é',
			paragrafos: [
				'Representante autorizado é uma empresa credenciada pela operadora para atuar como canal de vendas empresarial. Tem CNPJ próprio, endereço próprio e equipe própria, e opera dentro da política comercial vigente da operadora. Não é uma filial da TIM, não emprega funcionários da TIM e também não compra o serviço para revender por conta própria.',
				'A distinção importa porque três figuras diferentes circulam com o mesmo apelido no mercado: o canal credenciado, a loja de varejo — que atende consumidor final e trata CNPJ como exceção — e o intermediário sem credenciamento, que capta o pedido e repassa a terceiros. O terceiro é o único que traz risco concreto, porque, quando algo dá errado, não há a quem cobrar.'
			],
			subsecoes: [
				{
					h3: 'Como verificar se o canal é credenciado de verdade',
					paragrafos: [
						'Peça o CNPJ e a comprovação de credenciamento junto à operadora, confira se existe endereço físico verificável, tempo de mercado e avaliações públicas que você consiga ler antes de decidir. É uma checagem de poucos minutos e elimina a maior parte do risco da decisão.',
						'O Grupo OC atende por essa mesma régua e a publica aqui de propósito: CNPJ 23.474.830/0001-56, sede em Sorocaba/SP, mais de 15 anos em gestão e auditoria de telecom empresarial, 110 avaliações públicas no Google com nota 4,9 e uma carteira que vai de MEI a operações do porte da BYD.'
					]
				},
				{
					h3: 'O que um canal autorizado não pode fazer',
					paragrafos: [
						'Um canal não cria plano fora do portfólio da operadora, não altera cláusula contratual e não garante viabilidade técnica onde ela não existe. Se alguém prometer qualquer uma dessas três coisas, o problema não está no modelo de contratação — está no interlocutor.',
						'Vale o mesmo para prazo de instalação e para aprovação de crédito: os dois dependem da operadora e de análise, e nenhum canal sério crava data antes de a viabilidade estar confirmada no endereço.'
					]
				}
			]
		},
		{
			id: 'onde-divergem',
			h2: 'Os cinco pontos em que os dois caminhos divergem',
			paragrafos: [
				'A lista abaixo não é de vantagens; é de diferenças. Em parte dos casos elas pesam a favor do canal, em outros são simplesmente irrelevantes: uma empresa que já sabe exatamente o que quer contratar não ganha nada com um diagnóstico, e não faz sentido fingir que ganha.'
			],
			lista: [
				'Quem faz o diagnóstico antes da proposta',
				'Quem compara mais de um produto do portfólio entre si',
				'Quem trata as condições que dependem do volume de linhas',
				'Quem assume o acompanhamento da portabilidade',
				'Quem você chama quando o problema aparece depois da ativação'
			],
			subsecoes: [
				{
					h3: 'Quem lê a sua fatura atual antes de propor',
					paragrafos: [
						'O canal consultivo começa pela conta que já existe: o que está contratado, o que é efetivamente usado, o que sobrou de um contrato antigo e continua sendo cobrado todo mês. Só depois disso monta a proposta. O caminho direto parte do catálogo, o que é mais rápido e funciona bem quando você já sabe o que quer.',
						'A diferença aparece quando a empresa não sabe o que está pagando — situação bem mais comum do que se imagina, principalmente em parques que cresceram por adição, sem ninguém revisar o conjunto.'
					]
				},
				{
					h3: 'Quem você chama quando dá problema',
					paragrafos: [
						'Pela via direta, o atendimento é feito pelos canais oficiais da operadora, que existem, funcionam e têm estrutura muito maior que a de qualquer canal. Para um chamado técnico simples, essa via é a mais curta e não há razão para complicá-la.',
						'Pela via do canal, você mantém um consultor nomeado que conhece o histórico da conta e faz a ponte com a operadora. Não é substituição, é uma camada a mais — útil quando o problema envolve contrato, fatura ou várias linhas ao mesmo tempo, e dispensável quando envolve um roteador que precisa reiniciar.'
					]
				},
				{
					h3: 'O contrato e a garantia são os mesmos?',
					paragrafos: [
						'São, e é essa a dúvida que mais trava a decisão. A prestação do serviço, o suporte técnico, a garantia e a fatura seguem sendo da operadora. O canal responde pela condução da venda, pela proposta apresentada e pelo acompanhamento da ativação, não pelo serviço em si.',
						'Por isso a escolha entre um caminho e outro é uma decisão de processo, e não de risco contratual. Você não assume um contrato diferente por ter passado por um canal credenciado.'
					]
				}
			]
		},
		{
			id: 'comparativo',
			h2: 'TIM direto e canal autorizado, lado a lado',
			paragrafos: [
				'A tabela compara o processo de contratação, não valores. As condições comerciais seguem a política vigente da operadora nos dois caminhos, e nenhuma proposta séria é fechada antes da análise de crédito empresarial e da confirmação de viabilidade técnica no endereço.'
			],
			tabela: {
				head: ['Critério', 'Direto com a operadora', 'Por canal autorizado'],
				rows: [
					['Contrato, fatura e garantia', 'Da TIM', 'Da TIM'],
					[
						'Diagnóstico antes da proposta',
						'Você traz a necessidade já definida',
						'O canal levanta o cenário e lê a fatura atual'
					],
					[
						'Comparação entre produtos',
						'Por sua conta, a partir do catálogo',
						'Feita na proposta, com o porquê de cada descarte'
					],
					[
						'Condições por volume de linhas',
						'Política comercial vigente',
						'Mesma política, com a condição progressiva a partir de dez linhas avaliada junto do parque'
					],
					[
						'Acompanhamento da portabilidade',
						'Protocolo aberto pela própria empresa',
						'Janela agendada e acompanhada pelo consultor'
					],
					['Pós-venda', 'Canais oficiais de atendimento', 'Canais oficiais e consultor nomeado'],
					[
						'Custo da consultoria',
						'Não se aplica',
						'Sem cobrança à parte: o canal é remunerado pela operadora'
					],
					[
						'Indicação típica',
						'Necessidade única e já definida',
						'Mais de um produto, endereço ou linha em jogo'
					]
				],
				caption:
					'Comparação de processo de contratação, sem valores. As condições seguem a política da operadora nos dois caminhos e dependem de análise de crédito e de viabilidade técnica no endereço.'
			}
		},
		{
			id: 'quando-ir-direto',
			h2: 'Quando contratar direto é a melhor escolha',
			paragrafos: [
				'Existem situações em que colocar um canal no meio apenas adiciona uma etapa ao processo. Escrevemos isso porque é verdade e porque uma comparação em que um lado vence todas as linhas não ajuda ninguém a decidir — serve só para quem escreveu.',
				'Nos cenários abaixo, o caminho direto tende a ser mais rápido e igualmente seguro:'
			],
			lista: [
				'Uma linha só, um produto só, sem portabilidade e sem previsão de crescimento',
				'Empresa com área de telecom própria, que já negocia direto e acompanha o contrato',
				'Já existe um gerente de contas na operadora que responde rápido e revisa as condições periodicamente',
				'Necessidade pontual e de prazo curto, como uma linha temporária para uma obra',
				'A empresa quer contratar de uma operadora que não está no portfólio do canal'
			],
			subsecoes: [
				{
					h3: 'A limitação de qualquer canal, inclusive o nosso',
					paragrafos: [
						'Um canal autorizado trabalha com o portfólio da operadora que representa. Somos representante autorizado TIM e isso está escrito em todas as páginas deste site: se a viabilidade técnica no seu endereço não existir pela TIM, o melhor que podemos fazer é dizer isso com clareza, em vez de empurrar um arranjo que não resolve o seu problema.',
						'É uma limitação concreta do modelo e você deveria considerá-la ao decidir. Quem precisa comparar operadoras diferentes na mesma mesa não deve pedir essa comparação a um canal exclusivo de nenhuma delas — inclusive a nós.'
					]
				}
			]
		},
		{
			id: 'qualificar-canal',
			h2: 'Oito perguntas para qualificar qualquer canal',
			paragrafos: [
				'Se você decidir pelo caminho do canal, a pergunta deixa de ser “direto ou por canal” e passa a ser “qual canal”. A lista abaixo serve para qualquer empresa que se apresente como autorizada, e a publicamos sabendo que ela se aplica a nós na mesma medida.'
			],
			checklist: {
				titulo: 'A régua que aplicamos em nós mesmos',
				intro:
					'Oito perguntas objetivas, todas respondíveis em uma conversa. Um canal que trava em três delas não deveria conduzir o contrato de telecom da sua empresa.',
				itens: [
					'Apresenta CNPJ e comprovação de credenciamento junto à operadora?',
					'Lê a fatura e o contrato atuais antes de enviar proposta?',
					'Compara mais de um produto e explica por que descartou os outros?',
					'Assume o acompanhamento da portabilidade, com janela agendada?',
					'Tem consultor nomeado, com nome e contato direto, para o pós-venda?',
					'Tem endereço físico verificável e tempo de mercado comprovável?',
					'Tem avaliações públicas que você consiga ler antes de decidir?',
					'Cobra alguma coisa pela consultoria — e, se cobra, isso está no papel?'
				]
			}
		}
	],

	passos: {
		titulo: 'Como uma contratação consultiva é conduzida',
		subtitulo:
			'Quatro etapas, nesta ordem. O diagnóstico vem antes da proposta porque proposta sem diagnóstico é catálogo com o nome da sua empresa no cabeçalho.',
		itens: [
			{
				title: 'Leitura da fatura e do contrato vigente',
				text: 'Antes de falar em plano, um consultor checa o que já existe: serviços contratados, uso efetivo, cobranças herdadas de contratos antigos, prazo de fidelidade e datas de renovação. É a etapa que revela o que a empresa paga sem usar.'
			},
			{
				title: 'Viabilidade e desenho da proposta',
				text: 'Um consultor checa a viabilidade no endereço e as alternativas possíveis são apresentadas lado a lado, com o que cada uma resolve e o que cada uma deixa de fora. A decisão é sua e informada, não uma escolha entre uma opção e nenhuma.'
			},
			{
				title: 'Documentação e análise de crédito',
				text: 'CNPJ ativo e documentos do representante legal. A análise de crédito empresarial é feita pela operadora, e o consultor acompanha o retorno junto com a empresa quando algo precisa ser complementado.'
			},
			{
				title: 'Portabilidade, ativação e ponto de contato',
				text: 'A portabilidade é agendada em janela combinada e as linhas seguem funcionando durante o processo. Encerrada a ativação, o consultor que conduziu a venda continua sendo o ponto de contato para contrato, fatura e mudanças no parque.'
			}
		]
	},

	objecoes: [
		{
			q: '“Prefiro falar direto com a operadora.”',
			a: 'É uma preferência legítima e, em parte dos casos, a mais eficiente — listamos esses casos nesta mesma página. Vale só separar duas coisas: falar direto para abrir um chamado técnico é rápido e continua disponível mesmo contratando por canal; falar direto para revisar contrato, comparar produtos e conciliar fatura é um trabalho de análise, e alguém precisa fazê-lo dentro da sua empresa ou fora dela.'
		},
		{
			q: '“Contratar por um canal deve sair mais caro.”',
			a: 'Não há cobrança de consultoria para o cliente: o canal é remunerado pela operadora, e a política comercial aplicada é a vigente da própria TIM. O que muda não é a origem da condição, e sim o cuidado em aplicar a condição certa ao seu volume e ao seu perfil de uso — que é justamente onde dinheiro costuma ficar na mesa.'
		},
		{
			q: '“E se o canal sumir depois da venda?”',
			a: 'O contrato é com a operadora, então o serviço não depende da existência do canal — esse é o piso de segurança. Acima dele, o que reduz o risco é escolher um canal com endereço físico, CNPJ verificável, tempo de mercado e avaliações públicas. Está tudo no checklist desta página, e ele foi escrito para ser usado contra nós também.'
		},
		{
			q: '“Já tenho gerente na TIM.”',
			a: 'Se o atendimento resolve, as condições são revisadas periodicamente e a fatura é conciliada, pode não valer a pena trocar nada — e dizemos isso sem rodeio. Nesse cenário, uma segunda leitura da fatura basta para confirmar que está tudo em ordem. Se estiver, você não perdeu nada; se não estiver, você descobriu antes da renovação.'
		},
		{
			q: '“Como sei que vocês são autorizados mesmo?”',
			a: 'Pedindo o que você pediria a qualquer fornecedor: CNPJ (23.474.830/0001-56), comprovação de credenciamento, endereço em Sorocaba/SP, tempo de mercado e as avaliações públicas no Google. É a mesma verificação que recomendamos fazer com qualquer canal, e ela não deveria ser diferente conosco.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, com sede em Sorocaba/SP e CNPJ 23.474.830/0001-56, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'A regra de decisão que orienta esta página é própria e vale explicitar: canal só se justifica quando há mais de uma variável em jogo. Se o caso tem uma variável só — uma linha, um produto, um endereço, nenhuma portabilidade —, o caminho direto costuma ser mais rápido e ninguém precisa de intermediário. A partir de duas variáveis, o resultado passa a ser definido pelo diagnóstico, e é aí que um canal consultivo muda o desfecho.',
			'Temos interesse comercial na sua decisão e não faria sentido esconder isso. É exatamente por esse motivo que a página traz a seção sobre quando contratar direto é melhor, declara a limitação de trabalharmos com um portfólio único e publica o checklist de qualificação que se aplica a nós na mesma medida em que se aplica a qualquer concorrente.'
		]
	},

	faqTitulo: 'Dúvidas de quem está decidindo o caminho de contratação',
	faq: [
		{
			q: 'O contrato é com a revenda ou com a TIM?',
			a: 'Com a TIM. O canal autorizado conduz a análise, a proposta e a ativação; a prestação do serviço, o suporte, a garantia e a fatura seguem sendo da operadora.'
		},
		{
			q: 'Contratar por um canal autorizado sai mais caro?',
			a: 'Não há custo de consultoria para o cliente, porque o canal é remunerado pela operadora. O trabalho de diagnóstico, proposta e acompanhamento não é cobrado à parte, e a política comercial aplicada é a vigente da TIM.'
		},
		{
			q: 'Como confirmo que a empresa é mesmo autorizada?',
			a: 'Peça CNPJ e a comprovação de credenciamento, confira endereço físico, tempo de mercado e avaliações públicas. É o mesmo checklist que publicamos nesta página, e ele se aplica a nós também.'
		},
		{
			q: 'Se eu contratar pelo canal, quem me atende depois?',
			a: 'O consultor que conduziu a venda continua sendo o ponto de contato, além dos canais oficiais da operadora, que permanecem disponíveis. É a diferença mais sentida no dia a dia, sobretudo em assuntos de contrato e fatura.'
		},
		{
			q: 'Já tenho um gerente na operadora. Vale a pena trocar?',
			a: 'Se o atendimento atual resolve e as condições são revisadas periodicamente, pode não valer. Nesse caso, uma segunda leitura da fatura basta para confirmar — e um consultor faz essa leitura sem compromisso de contratação.'
		},
		{
			q: 'Existe alguma condição que só o canal consegue?',
			a: 'Não existe plano fora do portfólio nem cláusula exclusiva de canal. O que existe são condições que dependem de volume e de perfil de uso, como os descontos progressivos aplicáveis a partir de dez linhas, e que precisam ser corretamente aplicadas ao seu caso.'
		}
	],

	cta: {
		titulo: 'Peça uma segunda leitura da sua fatura, sem compromisso',
		texto:
			'Envie a fatura da operadora atual e um consultor checa o que está contratado, o que é efetivamente usado e o que pode ser reorganizado — antes de qualquer proposta e sem obrigação de contratar nada. Se o parque reunir dez linhas ou mais, a condição progressiva por volume entra na mesma conversa.'
	},

	service: {
		name: 'Contratação de planos TIM Empresas por representante autorizado',
		serviceType: 'Consultoria de contratação de telecom empresarial',
		description:
			'Condução consultiva da contratação de serviços TIM Empresas: leitura da fatura e do contrato vigentes, comparação entre produtos do portfólio, viabilidade no endereço, acompanhamento da portabilidade e ponto de contato nomeado no pós-venda.'
	},

	relacionadas: [
		'operadora-nacional-ou-provedor-regional',
		'auditoria-de-fatura-de-telecom',
		'renovacao-de-contrato-tim-empresas'
	],
	artigos: [
		'consultoria-especializada-tim-corporativo-atendimento-b2b',
		'consultor-tim-empresa-atendimento-personalizado-negocio',
		'solicitacao-proposta-tim-empresas-como-funciona',
		'tim-black-empresa-descontos-progressivos-grupo-oc'
	]
};
