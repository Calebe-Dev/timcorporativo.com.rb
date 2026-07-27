// LP 1 — Cluster verticais. Keyword primária: "internet para clínica médica".
//
// Ângulo de conversão: RISCO OPERACIONAL, não economia. Quem administra clínica
// não acorda querendo economizar em telecom; acorda com paciente na recepção e
// agendamento fora do ar. A página inteira fala dessa dor.
//
// ⚠ REVISAR ANTES DE PUBLICAR: os critérios técnicos abaixo (relação
// upload/download, comportamento de TISS na queda, tempo de reparo) descrevem o
// método de diagnóstico do Grupo OC. Confirme com a equipe que é assim que
// vocês de fato conduzem — E-E-A-T só vale se for verdade.

export default {
	slug: 'internet-e-telefonia-para-clinicas-e-consultorios',
	cluster: 'verticais',
	ordem: 1,

	title: 'Internet e Telefonia para Clínicas e Consultórios',
	description:
		'Internet e telefonia para clínicas e consultórios: conexão estável para agendamento, prontuário em nuvem e telemedicina. Fale com um consultor TIM.',
	keywords:
		'internet para clínica médica, telefonia para consultório médico, internet empresarial para clínica odontológica, conectividade para clínica de diagnóstico, internet para telemedicina, plano empresarial para clínica CNPJ',
	keywordPrimaria: 'internet para clínica médica',

	h1: 'Conectividade para clínicas: agendamento, prontuário e telemedicina sem queda',

	cardTitulo: 'Clínicas e consultórios',
	cardTexto:
		'Agendamento, prontuário em nuvem e teleconsulta dependem de upload e de SLA — não da velocidade anunciada. O que avaliar antes de assinar.',

	hero: {
		eyebrow: 'Clínicas e consultórios',
		sub: 'Prontuário eletrônico, agendamento online, transmissão de guias de convênio e teleconsulta rodam na sua conexão. Quando ela cai, a fila da recepção não para de crescer. Avaliamos o que a sua clínica realmente precisa — e o que está pagando sem usar.',
		bullets: [
			'Diagnóstico da operação e da fatura atual',
			'Viabilidade técnica confirmada no endereço',
			'Portabilidade sem perder o número da clínica',
			'Backup móvel para a voz não cair junto'
		],
		ctaPrimario: 'Receber diagnóstico da clínica',
		whatsapp:
			'Olá! Tenho uma clínica e quero avaliar a internet e a telefonia. Podem me ajudar?',
		cartaoTitulo: 'O que avaliamos primeiro'
	},

	keyFacts: [
		{
			label: 'O critério que quase ninguém checa',
			value: 'Banda de subida',
			nota: 'Prontuário em nuvem, envio de exame e teleconsulta usam upload. O plano é vendido pelo download.'
		},
		{
			label: 'O que define a escolha',
			value: 'SLA, não velocidade',
			nota: 'Se o sistema é em nuvem, o tempo de reparo contratado vale mais que o pico de banda.'
		},
		{
			label: 'Experiência',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC, representante autorizado TIM · 4,9 no Google'
		}
	],

	resumo:
		'Uma clínica precisa de conexão fixa com banda de subida real, redundância móvel para a voz não cair junto, ramais que não perdem ligação de paciente e tratamento adequado de dado sensível. A velocidade anunciada no plano é o critério menos importante dos quatro.',

	secoes: [
		{
			id: 'o-que-quebra',
			h2: 'O que quebra numa clínica quando a conexão cai',
			paragrafos: [
				'A conta da indisponibilidade em uma clínica não é medida em megabits, e sim em pacientes parados na recepção. Quando a conexão falha, o agendamento online sai do ar, o prontuário eletrônico em nuvem fica inacessível, as guias de convênio param de ser transmitidas e a secretária volta a anotar em papel — para depois digitar tudo de novo.',
				'O detalhe que mais surpreende quem administra clínica é a voz cair junto. Se o atendimento telefônico é feito por ramal em nuvem e não existe uma saída móvel de contingência, a mesma queda que derruba o sistema derruba o telefone. O paciente que tentaria remarcar não consegue nem avisar.'
			],
			subsecoes: [
				{
					h3: 'Prontuário eletrônico e sistemas em nuvem',
					paragrafos: [
						'Sistema de gestão clínica em nuvem depende de latência baixa e de disponibilidade contínua — não de velocidade de pico. Uma conexão de 500 Mbps que oscila entrega uma experiência pior que uma de 100 Mbps estável: o software trava no meio do cadastro, a tela de agenda demora a atualizar e dois atendentes acabam marcando o mesmo horário.',
						'É por isso que, no dimensionamento, contamos terminais simultâneos e não metros quadrados. Uma clínica com quatro consultórios, recepção e sala de exames tem picos previsíveis de acesso concorrente, e é esse número que define a banda — não o tamanho da sala de espera.'
					]
				},
				{
					h3: 'Telemedicina e teleconsulta',
					paragrafos: [
						'Teleconsulta é o caso em que a assimetria da banda larga comum aparece de forma mais cruel. O paciente enxerga o médico com nitidez, e o médico vê o paciente travando — porque quem envia vídeo usa a via de subida, e é justamente ela que os planos residenciais entregam em fração do download.',
						'Se a clínica faz teleconsulta ou envia exames de imagem, o upload deixa de ser detalhe técnico e vira o requisito principal. É a primeira pergunta que fazemos no diagnóstico.'
					]
				},
				{
					h3: 'Agendamento, confirmação e WhatsApp',
					paragrafos: [
						'Boa parte do contato com o paciente hoje passa por confirmação automática e WhatsApp. Esse fluxo depende da mesma conexão do prontuário, e uma ligação perdida na clínica raramente é uma ligação só: é uma consulta não remarcada, um horário ocioso na agenda e um paciente que liga para o concorrente.'
					]
				}
			]
		},
		{
			id: 'lgpd-dado-sensivel',
			h2: 'LGPD e dado de saúde: o que a rede precisa suportar',
			paragrafos: [
				'A LGPD classifica dado de saúde como dado pessoal sensível, com exigência de proteção mais rigorosa que a de um cadastro comum. Nenhuma operadora ou provedor deixa a clínica em conformidade sozinho — conformidade depende de processo, contrato e responsável interno. O que a infraestrutura faz é sustentar ou inviabilizar as medidas técnicas que a clínica precisa adotar.',
				'Na prática, três capacidades da rede costumam ser exigidas pelo fornecedor do prontuário ou pelo próprio setor de TI: segmentação entre a rede administrativa e a rede de visitantes, acesso remoto controlado para quem consulta o sistema de fora, e IP fixo quando a VPN do sistema exige origem conhecida.'
			],
			lista: [
				'Rede de visitantes separada da rede onde trafega o prontuário',
				'IP fixo quando o sistema clínico restringe acesso por origem',
				'Acesso remoto por VPN em vez de porta aberta na internet',
				'Registro de quem acessa o quê, exigível em caso de incidente'
			]
		},
		{
			id: 'comparativo',
			h2: 'Três arranjos de conectividade para clínica',
			paragrafos: [
				'A escolha entre os arranjos abaixo não é uma questão de orçamento, e sim de quanto tempo a clínica aguenta parada. Uma clínica de estética que atende com hora marcada e prontuário local tolera uma queda de meio período; um laboratório que transmite laudo e depende de convênio online não tolera meia hora.'
			],
			tabela: {
				head: ['Critério', 'Banda larga comum', 'Fibra empresarial', 'Fibra empresarial + backup móvel'],
				rows: [
					[
						'Banda de subida',
						'Fração do download',
						'Contratada e previsível',
						'Contratada, com saída móvel na queda'
					],
					['SLA por contrato', 'Não há', 'Sim, com prazo definido', 'Sim, e a operação segue durante o reparo'],
					[
						'Quando cai',
						'Fica fora até normalizar',
						'Fica fora até o reparo, com prazo',
						'Comuta para a rede móvel e segue atendendo'
					],
					[
						'Atendimento',
						'Fila de suporte de consumidor',
						'Canal empresarial',
						'Canal empresarial + consultor que conhece a conta'
					],
					[
						'Indicação',
						'Consultório sem sistema em nuvem',
						'Clínica com prontuário e agenda online',
						'Diagnóstico, convênio e teleconsulta'
					]
				],
				caption:
					'Comparação de arranjos técnicos, sem valores: a combinação adequada depende da viabilidade no endereço e do tempo que a operação suporta parada. A proposta é montada caso a caso.'
			}
		},
		{
			id: 'checklist',
			h2: 'O que checar antes de assinar com qualquer operadora',
			paragrafos: [
				'Esta lista vale para qualquer fornecedor, inclusive quando a proposta não é nossa. São os pontos que, na nossa experiência, aparecem depois — quando o contrato já está assinado e a clínica descobre a limitação no pior dia possível.'
			],
			checklist: {
				titulo: 'Dez itens antes de fechar contrato',
				intro: 'Leve esta lista para a conversa com qualquer operadora e peça tudo por escrito.',
				itens: [
					'Qual é a banda de UPLOAD contratada, não só a de download',
					'Existe SLA por escrito e qual é o prazo de reparo',
					'O que a operadora paga se descumprir o prazo',
					'O endereço tem IP fixo disponível',
					'O que acontece com a transmissão de convênio durante a queda',
					'Há backup automático ou a comutação é manual',
					'O ramal da recepção continua funcionando sem internet',
					'A portabilidade preserva o número já divulgado da clínica',
					'Quem atende quando cai — e em quanto tempo responde',
					'Qual o prazo de fidelidade e o custo de sair antes'
				]
			}
		},
		{
			id: 'o-que-define-o-investimento',
			h2: 'O que define o investimento em conectividade de uma clínica',
			paragrafos: [
				'Não publicamos valores porque não existe tabela honesta para este tipo de projeto: o mesmo consultório em dois endereços diferentes pode ter viabilidades técnicas distintas, e isso muda tudo. O que dá para explicar com clareza são as variáveis que compõem o custo, para você chegar na conversa sabendo o que está sendo cotado.',
				'Cinco fatores respondem por praticamente toda a diferença entre uma proposta e outra: a banda contratada, a existência ou não de SLA e qual o prazo dele, a quantidade de ramais e de unidades, a presença de backup móvel e o prazo de contrato. Um sexto fator, menos óbvio, é a viabilidade no endereço — em rua sem infraestrutura instalada, a alternativa técnica muda e o desenho do projeto muda junto.'
			],
			lista: [
				'Banda contratada, com upload dimensionado pelo uso real',
				'SLA e prazo de reparo — o item que mais separa proposta cara de barata',
				'Número de ramais, de consultórios e de unidades',
				'Backup móvel para continuidade durante a falha',
				'Prazo de contrato e condições de renovação',
				'Viabilidade técnica confirmada no endereço da clínica'
			]
		}
	],

	passos: {
		titulo: 'Como conduzimos o projeto de uma clínica',
		subtitulo:
			'Quatro etapas, nesta ordem. O diagnóstico vem antes da proposta porque proposta sem diagnóstico é chute com papel timbrado.',
		itens: [
			{
				title: 'Diagnóstico da operação e da fatura',
				text: 'Mapeamos como a clínica trabalha — sistemas em nuvem, teleconsulta, número de terminais, fluxo de atendimento telefônico — e lemos a fatura atual para identificar o que está contratado, o que é usado e o que é pago sem uso.'
			},
			{
				title: 'Viabilidade técnica no endereço',
				text: 'Confirmamos o que de fato chega ao endereço da clínica antes de prometer qualquer coisa. É a etapa que evita a proposta bonita que não pode ser instalada.'
			},
			{
				title: 'Proposta comparando arranjos',
				text: 'Apresentamos os arranjos viáveis lado a lado, com o que cada um resolve e o que cada um deixa de fora, para a decisão ser sua e informada — não uma escolha entre uma opção e nenhuma.'
			},
			{
				title: 'Portabilidade e ativação acompanhada',
				text: 'A clínica mantém os números já divulgados a pacientes e convênios. Agendamos a janela, acompanhamos a ativação e só encerramos o projeto quando a operação está rodando.'
			}
		]
	},

	objecoes: [
		{
			q: '“Somos um consultório pequeno, uma linha basta.”',
			a: 'Pode bastar mesmo — e quando é o caso, dizemos isso. O que costuma não bastar é uma linha residencial sustentando prontuário em nuvem e agendamento online: o problema não é o tamanho do consultório, é a dependência de sistema externo. Um consultório de um médico com prontuário em papel tem necessidade genuinamente diferente de um com agenda online.'
		},
		{
			q: '“Já temos fibra e funciona bem.”',
			a: 'Funcionar bem no dia normal é o esperado de qualquer conexão. A pergunta útil é o que acontece no dia ruim: existe prazo de reparo contratado? Quem atende? A clínica continua atendendo enquanto o problema é resolvido? Se as três respostas forem "não sei", vale checar o contrato antes de precisar dele.'
		},
		{
			q: '“Trocar de operadora vai parar meu atendimento.”',
			a: 'A troca é feita com a estrutura atual no ar. A instalação do novo acesso acontece antes do desligamento do antigo, e a portabilidade dos números é agendada para uma janela combinada com a clínica. O período de sobreposição existe justamente para o atendimento não parar.'
		},
		{
			q: '“Não podemos perder o número que os pacientes conhecem.”',
			a: 'E não perde. A portabilidade preserva fixo e móvel, e as linhas seguem funcionando durante o processo. O número divulgado em placa, receituário e convênio continua sendo o mesmo.'
		},
		{
			q: '“O prontuário é responsabilidade do fornecedor, não minha.”',
			a: 'A guarda do dado é do fornecedor; o acesso a ele passa pela sua rede. Se o sistema exige IP fixo, VPN ou origem conhecida e a clínica não tem isso, o problema aparece como "o sistema está lento" e o fornecedor aponta para a conexão. É uma fronteira que vale mapear antes.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'A regra de decisão que orienta esta página é própria e vale a pena explicitar: quando o sistema principal da clínica está em nuvem, o SLA contratado importa mais que a velocidade contratada. É por isso que começamos todo diagnóstico perguntando pelo upload e pelo prazo de reparo, e não pelo número que aparece grande na proposta da concorrência.',
			'Não vendemos conformidade com a LGPD, e desconfie de quem vender: conformidade depende de processo interno, contrato e responsável designado. O que fazemos é entregar a infraestrutura que permite à clínica adotar as medidas técnicas que a lei espera.'
		]
	},

	faqTitulo: 'Dúvidas de quem administra clínica',
	faq: [
		{
			q: 'Qual velocidade de internet uma clínica precisa?',
			a: 'Não é a velocidade de download que define, e sim o upload e a estabilidade: prontuário em nuvem, envio de exame e teleconsulta usam a via de subida. O dimensionamento sai do número de terminais simultâneos, do peso dos exames enviados e de haver ou não teleconsulta.'
		},
		{
			q: 'Internet residencial serve para consultório?',
			a: 'Serve enquanto nada cai. Banda larga residencial não tem SLA, prioridade de reparo nem banda de subida garantida — numa clínica isso significa agendamento parado sem previsão de retorno.'
		},
		{
			q: 'Dá para manter o número do consultório ao trocar de operadora?',
			a: 'Sim. A portabilidade preserva fixo e móvel; o consultor agenda a janela e as linhas seguem funcionando durante o processo.'
		},
		{
			q: 'Clínica com CNPJ de MEI ou sociedade simples consegue plano empresarial?',
			a: 'Sim, com CNPJ ativo e documentação do representante legal, sujeito a análise de crédito empresarial.'
		},
		{
			q: 'Como fica o atendimento telefônico quando a internet cai?',
			a: 'Com backup móvel a voz continua; sem backup, ramal em nuvem cai junto. É o principal ponto que avaliamos no diagnóstico.'
		}
	],

	cta: {
		titulo: 'Receba um diagnóstico da conectividade da sua clínica',
		texto:
			'Um consultor avalia a operação, lê a fatura atual e confirma a viabilidade no endereço antes de apresentar qualquer proposta. Sem compromisso e sem cobrança pelo diagnóstico.'
	},

	service: {
		name: 'Conectividade e telefonia para clínicas e consultórios',
		serviceType: 'Conectividade empresarial para saúde',
		description:
			'Projeto de internet e telefonia para clínicas e consultórios: dimensionamento por banda de subida, redundância móvel, IP fixo para sistemas em nuvem e portabilidade dos números da clínica.'
	},

	relacionadas: [
		'internet-5g-para-empresas-sem-fibra-no-endereco',
		'internet-para-redes-de-lojas-e-varejo',
		'auditoria-de-fatura-de-telecom'
	],
	artigos: [
		'ip-fixo-empresarial-seguranca-acesso-remoto-guia',
		'videoconferencias-travando-checklist-de-internet-empresarial-para-trabalho-remoto',
		'internet-backup-tim-empresas-4g-5g-failover',
		'tim-empresas-boas-praticas-ti-seguranca-vpn'
	]
};
