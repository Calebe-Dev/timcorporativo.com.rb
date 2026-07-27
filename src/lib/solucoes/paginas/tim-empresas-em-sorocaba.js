// LP 17 — Cluster local. Keyword primária: "TIM empresas Sorocaba".
//
// Ângulo de conversão: PROXIMIDADE VERIFICÁVEL, não produto. Quem busca marca +
// cidade já decidiu a operadora e está escolhendo POR QUEM ser atendido. A SERP
// é disputada por canais nacionais sem presença física na cidade — a única
// vantagem defensável aqui é o endereço, o CNPJ e as avaliações públicas. A
// página inteira gira em torno disso e não vende internet (isso é a LP 18).
//
// ⚠ REVISAR ANTES DE PUBLICAR (1): conflito de rede. planotimempresa.com.br
// ranqueia hoje com a home "Planos TIM Empresa em Sorocaba" — mesmo dono, mesma
// cidade, mesma intenção. Decidir a quem fica o termo ANTES de publicar, ou os
// dois domínios dividem sinal na mesma SERP.
//
// ⚠ O QUE ESTA PÁGINA PODE PROMETER: só duas coisas — (1) um consultor checa a
// viabilidade no endereço e a necessidade da operação e (2) o desconto
// progressivo melhora conforme o volume, a partir de dez linhas. O atendimento
// presencial só pode ser afirmado em SOROCABA, onde existe endereço real (Rua
// Tereza Lopes, 677, Vila Hortência). Para as cidades do entorno o enquadramento
// é ÁREA ATENDIDA, sem promessa de presença. Nenhuma rotina interna do time
// (leitura de fatura, acompanhamento de ativação, pós-venda) é afirmada aqui.
//
// ⚠ REVISAR (2): canibalização interna. O artigo
// "tim-empresa-mei-microempresas-planos-sorocaba" já combina TIM + Sorocaba com
// recorte MEI. Esta página NÃO trata de MEI — só encaminha para o artigo.

export default {
	slug: 'tim-empresas-em-sorocaba',
	cluster: 'local',
	ordem: 1,

	title: 'TIM Empresas em Sorocaba | Consultoria Autorizada',
	description:
		'Representante autorizado TIM em Sorocaba: atendimento presencial ou remoto, diagnóstico da sua operação e proposta para o seu CNPJ. Fale com um consultor.',
	keywords:
		'TIM empresas Sorocaba, representante autorizado TIM Sorocaba, consultor TIM empresarial Sorocaba, plano TIM CNPJ Sorocaba, TIM Black Empresa Sorocaba, onde contratar TIM empresas em Sorocaba',
	keywordPrimaria: 'TIM empresas Sorocaba',

	h1: 'Atendimento TIM Empresas em Sorocaba, com endereço e consultor de verdade',

	cardTitulo: 'TIM Empresas em Sorocaba',
	cardTexto:
		'Endereço fixo na Vila Hortência, consultor com nome e visita na sua empresa. O que muda entre contratar por um canal local e por uma central nacional.',

	hero: {
		eyebrow: 'Sorocaba',
		sub: 'O Grupo OC atende empresas de Sorocaba a partir de um endereço na cidade: um consultor checa a viabilidade no seu endereço e a necessidade da operação antes de qualquer proposta. O contrato é com a TIM; a conversa é com alguém que você conhece pelo nome, na sua cidade.',
		bullets: [
			'Escritório na Vila Hortência, com atendimento presencial',
			'Um consultor checa a viabilidade e a necessidade da operação',
			'Portabilidade sem trocar os números já divulgados',
			'Desconto progressivo conforme o volume, a partir de dez linhas'
		],
		ctaPrimario: 'Agendar uma conversa em Sorocaba',
		whatsapp:
			'Olá! Minha empresa é de Sorocaba e quero falar com um consultor TIM Empresas. Podem me atender?',
		cartaoTitulo: 'O que dá para conferir antes'
	},

	keyFacts: [
		{
			label: 'Onde ficamos',
			value: 'Vila Hortência, Sorocaba',
			nota: 'Rua Tereza Lopes, 677 — atendimento no escritório, na sua empresa ou remoto.'
		},
		{
			label: 'Reputação pública',
			value: '4,9 no Google',
			nota: '110 avaliações no perfil do Grupo OC, verificáveis sem depender da nossa palavra.'
		},
		{
			label: 'Operação',
			value: '+15 anos em telecom B2B',
			nota: 'Representante autorizado TIM · CNPJ 23.474.830/0001-56'
		}
	],

	resumo:
		'O Grupo OC é representante autorizado TIM e atende empresas de Sorocaba a partir de um endereço fixo na cidade: Rua Tereza Lopes, 677, Vila Hortência. O atendimento acontece na sua empresa, no nosso escritório ou de forma remota — e, nos três formatos, um consultor checa a viabilidade do endereço e a necessidade da operação antes de qualquer proposta.',

	secoes: [
		{
			id: 'onde-estamos',
			h2: 'Onde estamos e como o atendimento funciona',
			paragrafos: [
				'O endereço é Rua Tereza Lopes, 677, Vila Hortência, em Sorocaba. Dele saem três formatos de atendimento: o consultor vai até a sua empresa, você vem até o escritório, ou tudo acontece por telefone e WhatsApp. Em todos eles, um consultor checa a viabilidade do endereço e a necessidade da operação — o que muda é quanto do seu tempo isso consome e o quanto dá para enxergar sem estar no lugar.',
				'Ter endereço fixo na cidade não é detalhe de vitrine. Numa contratação de telecom, boa parte do que atrasa o projeto só aparece quando alguém olha: o ponto de entrada do prédio, o rack sem espaço, o cabo que termina num armário trancado, o contrato antigo que ninguém localiza. Diagnóstico feito só por formulário depende de você descrever justamente aquilo que ainda não sabe que precisa ser descrito.'
			],
			tabela: {
				head: ['Formato', 'Quando faz sentido', 'O que acontece na prática'],
				rows: [
					[
						'Visita na sua empresa',
						'Mais de um endereço, estrutura instalada para avaliar ou contrato vigente para revisar',
						'Um consultor checa a viabilidade no endereço, o ponto de entrada e a cobertura nas áreas onde a equipe trabalha'
					],
					[
						'Reunião no nosso escritório',
						'Você prefere resolver fora da rotina da empresa ou trazer sócio e contador junto',
						'Conversa na Vila Hortência, com o comparativo aberto na tela e a fatura à mão para conferir item por item'
					],
					[
						'Remoto, por telefone e WhatsApp',
						'Demanda objetiva: linhas adicionais, dúvida de fatura, renovação de contrato',
						'Um consultor checa a necessidade sem deslocamento — é o formato que costuma começar mais rápido'
					]
				],
				caption:
					'Os três formatos levam ao mesmo contrato TIM. A escolha é sua, e nada impede começar remoto e marcar a conversa presencial depois.'
			}
		},
		{
			id: 'local-ou-central',
			h2: 'O que muda entre um representante local e a central nacional',
			paragrafos: [
				'Do ponto de vista contratual, quase nada: o contrato é com a TIM, a fatura vem da TIM, a cobertura é a da TIM e a garantia também. Nada do que fazemos altera cláusula, prazo ou responsabilidade da operadora — e desconfie de qualquer canal que diga o contrário. O que muda é tudo o que existe em volta do contrato.',
				'Em canal de venda remoto, quem fecha não é quem atende depois, e o histórico da sua operação recomeça do zero a cada ligação. Com representante, a pergunta “quem responde pelo meu contrato?” tem resposta com nome — e é essa a pergunta a fazer a qualquer fornecedor antes de assinar, inclusive a nós. É uma diferença que quase não aparece no dia da assinatura e aparece inteira no segundo mês.'
			],
			subsecoes: [
				{
					h3: 'Quem responde quando o problema não é comercial',
					paragrafos: [
						'Chip que não ativa, item de fatura que ninguém reconhece, linha de funcionário desligado que continua sendo cobrada, mudança de endereço no meio do contrato. São ocorrências banais, nenhuma delas dramática, e todas consomem tempo de alguém do seu time. Quando existe alguém com nome e telefone do outro lado, essa fila deixa de ser inteiramente sua.',
						'Não substituímos o suporte técnico da operadora, e ninguém deveria prometer isso: chamado de rede é aberto e tratado pela TIM. O que vale perguntar a qualquer canal antes de contratar é quem traduz o que está acontecendo e a quem se cobra retorno — porque essa fila, quando não tem dono, sobra sempre para o seu time.'
					]
				},
				{
					h3: 'O que só aparece com alguém no endereço',
					paragrafos: [
						'Empresa que atende no balcão e tem estoque nos fundos costuma ter dois problemas de rede, não um. Escritório em prédio compartilhado depende de autorização do condomínio para passar cabo novo. Operação com galpão tem cobertura de sinal muito diferente entre a sala da administração e a área de expedição. Nenhuma dessas informações cabe num formulário, e todas mudam a proposta.',
						'É por isso que, em Sorocaba, dá para um consultor checar a viabilidade no próprio endereço. O deslocamento dentro da cidade é curto o bastante para que olhar custe menos que refazer projeto depois.'
					]
				}
			]
		},
		{
			id: 'o-que-contratam',
			h2: 'O que uma empresa de Sorocaba costuma contratar',
			paragrafos: [
				'A demanda quase nunca chega organizada por produto. Chega como problema: “a equipe de rua fica sem sinal”, “a internet cai bem na hora do movimento”, “a fatura subiu e ninguém sabe explicar por quê”. O primeiro trabalho é traduzir isso para o que existe no portfólio TIM Empresa e descartar, em voz alta, o que não se aplica — e é por isso que um consultor checa a necessidade antes de falar em plano.',
				'O desenho mais comum combina linhas móveis para quem trabalha fora com uma conexão fixa dimensionada pelo uso real da operação. Empresas com volume maior entram na faixa de desconto progressivo, que começa a partir de dez linhas e considera o conjunto do contrato, não cada linha isolada.'
			],
			lista: [
				'Linhas móveis corporativas para equipe externa, vendas e assistência técnica',
				'Internet fixa empresarial para escritório, loja e rotina administrativa',
				'Conexão pela rede móvel onde a fibra não chega ou como caminho de contingência',
				'Gestão de linhas: entradas, saídas, troca de aparelho e controle de quem usa o quê',
				'Portabilidade dos números já divulgados, sem trocar o que está impresso e cadastrado',
				'O que o contrato vigente prevê, conferido antes de qualquer proposta nova'
			]
		},
		{
			id: 'viabilidade',
			h2: 'Cobertura e viabilidade: por que a resposta muda de endereço para endereço',
			paragrafos: [
				'A pergunta mais frequente de quem procura conexão fixa na cidade é se “tem no meu endereço”. A resposta honesta é que ninguém sabe antes de checar — e que a checagem precisa ser feita com número, complemento e, em prédio, com a identificação da sala. A resposta vale para aquele ponto exato, não para a rua e muito menos para o CEP.',
				'Duas empresas na mesma quadra podem receber respostas diferentes, e quem ouviu “não tem” no ano passado pode ter passado a ter. Por isso a viabilidade é etapa de projeto e não pergunta de triagem: um consultor checa a viabilidade do seu endereço antes de existir proposta, em mais de uma tecnologia quando faz sentido. O detalhamento por região da cidade e por tipo de imóvel está na página sobre internet empresarial em Sorocaba.'
			]
		},
		{
			id: 'prova-local',
			h2: 'O que é verificável antes de você falar com a gente',
			paragrafos: [
				'Representante de operadora é um mercado com entrada fácil, o que torna a checagem prévia razoável — inclusive conosco. Estas são as informações que dá para conferir por fora, sem depender do que dizemos:'
			],
			lista: [
				'CNPJ 23.474.830/0001-56, consultável na Receita Federal',
				'Endereço físico em Sorocaba: Rua Tereza Lopes, 677, Vila Hortência',
				'Perfil público no Google com nota 4,9 e 110 avaliações de clientes',
				'Mais de 15 anos de operação em telecom empresarial, conduzida a partir de Sorocaba',
				'Carteira que vai de MEI a operações de grande porte, com a BYD entre os clientes',
				'Condição de representante autorizado TIM, confirmável junto à própria operadora'
			]
		},
		{
			id: 'primeira-conversa',
			h2: 'O que ter em mãos na primeira conversa',
			paragrafos: [
				'Nada nesta lista é obrigatório para começar: dá para conversar sem material nenhum e mesmo assim sair com uma direção. Mas com os itens abaixo à mão, o comparativo sai na mesma reunião em vez de virar uma segunda — e a diferença entre uma e duas reuniões costuma ser de semanas.'
			],
			checklist: {
				titulo: 'Oito itens que aceleram o diagnóstico',
				intro:
					'Vale para qualquer fornecedor que você for avaliar, não só para nós. Quem pede menos que isso provavelmente vai propor no escuro.',
				itens: [
					'CNPJ ativo e nome do representante legal',
					'Fatura mais recente da operadora atual, com o detalhamento',
					'Quantidade de linhas ativas e quantas estão realmente em uso',
					'Todos os endereços que precisam de conexão, com número e complemento',
					'Quais sistemas param quando a internet cai',
					'Se existe contrato vigente e qual a data de renovação',
					'Quem decide na empresa e quem usa no dia a dia',
					'O que motivou a procura: custo, queda, cobertura ou atendimento'
				]
			}
		}
	],

	passos: {
		titulo: 'O que um consultor checa numa contratação em Sorocaba',
		subtitulo:
			'Quatro conferências. A diferença local está na segunda: em Sorocaba a checagem do endereço pode ser presencial.',
		itens: [
			{
				title: 'Como a empresa usa telefonia e internet hoje',
				text: 'Um consultor checa a necessidade da operação e o que a fatura vigente mostra: o que é usado e o que é pago sem uso. É a conferência que define se faz sentido mudar alguma coisa, inclusive quando a conclusão é não mudar nada agora.'
			},
			{
				title: 'Viabilidade no endereço',
				text: 'Em Sorocaba, a checagem pode ser feita no local: ponto de entrada, infraestrutura interna do imóvel e cobertura de sinal nas áreas onde a equipe realmente trabalha. Um consultor checa a viabilidade do endereço antes de existir qualquer proposta.'
			},
			{
				title: 'Combinações viáveis, com o que fica de fora',
				text: 'As opções aparecem lado a lado, com o que cada uma resolve e o que cada uma não resolve. Documentação: CNPJ ativo, documentos do representante legal e a análise de crédito empresarial, que segue o rito da operadora.'
			},
			{
				title: 'Portabilidade e volume no contrato',
				text: 'Os números atuais são preservados na portabilidade. E vale conferir o total de linhas antes de assinar: o desconto progressivo melhora conforme o volume, a partir de dez — inclusive na renovação, que chega sem aviso quando ninguém está olhando.'
			}
		]
	},

	objecoes: [
		{
			q: '“Prefiro resolver direto pelo 0800 da TIM.”',
			a: 'É um caminho legítimo e às vezes o mais rápido, principalmente para uma linha avulsa. A diferença aparece quando existe mais de um endereço, contrato vigente para revisar ou um problema que já voltou duas vezes: aí o comparativo pede alguém que olhe a fatura inteira, e o pós-venda pede alguém que atenda pelo nome. Se o seu caso é simples, é isso que você vai ouvir.'
		},
		{
			q: '“Minha empresa não é de Sorocaba, é de Votorantim.”',
			a: 'Votorantim, Itu, Boituva e Iperó estão na área atendida a partir daqui, onde fica a única unidade física. Nessas cidades não há escritório nem equipe fixa, e um consultor checa a viabilidade do endereço do mesmo jeito. Há uma página específica sobre o atendimento fora da cidade, explicando o que é resolvido à distância e o que depende de informação do local.'
		},
		{
			q: '“Sou MEI, vocês atendem empresa pequena?”',
			a: 'Sim, com CNPJ ativo e a mesma análise de crédito empresarial de qualquer porte. MEI e microempresa têm particularidades de documentação e de dimensionamento que tratamos em um conteúdo próprio, para não misturar com projeto de empresa com equipe — são conversas diferentes.'
		},
		{
			q: '“Preciso da proposta hoje.”',
			a: 'Dependendo do porte, dá. Com CNPJ e fatura em mãos, o comparativo sai rápido. O que costuma alongar é a confirmação de viabilidade em endereço novo e a análise de crédito, que não dependem de nós — e preferimos dizer isso antes a prometer prazo que a operadora ainda não confirmou.'
		}
	],

	eeat: {
		titulo: 'Quem assina este atendimento',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. A operação é conduzida de Sorocaba, no endereço da Rua Tereza Lopes, 677, Vila Hortência, sob o CNPJ 23.474.830/0001-56. O perfil público no Google reúne 110 avaliações com nota 4,9.',
			'A carteira vai de MEI a operações de grande porte, com a BYD entre os clientes atendidos. Essa amplitude importa por um motivo bem específico: o mesmo time que dimensiona um contrato de dezenas de linhas atende quem tem três, e isso muda o padrão de resposta que a empresa pequena recebe.',
			'Um critério que vale explicitar: proposta séria não sai sem a fatura atual na mesa. Proposta montada só com o que o cliente lembra de cabeça costuma ficar bonita e errada, e o erro só aparece na primeira fatura — quando já é problema de todo mundo. E o que fica prometido nesta página é o que dá para cobrar: um consultor checa a viabilidade do endereço e a necessidade da operação, e o desconto progressivo melhora conforme o volume, a partir de dez linhas.'
		]
	},

	faqTitulo: 'Dúvidas de quem procura TIM Empresas em Sorocaba',
	faq: [
		{
			q: 'Vocês atendem presencialmente em Sorocaba?',
			a: 'Sim. O escritório fica na Rua Tereza Lopes, 677, Vila Hortência, e a conversa também pode acontecer na sua empresa, conforme a agenda. Quem prefere resolver à distância fala com um consultor por telefone e WhatsApp, com a mesma checagem de viabilidade.'
		},
		{
			q: 'Contratar por um representante local muda o contrato com a TIM?',
			a: 'Não. O contrato, a cobertura e a garantia continuam sendo da operadora. O que muda é quem faz o diagnóstico, quem monta o comparativo e quem acompanha a conta depois da ativação.'
		},
		{
			q: 'Atendem empresas de fora de Sorocaba?',
			a: 'Sim. As cidades do eixo fazem parte da área atendida a partir daqui, sem unidade física nelas, e o restante do país é atendido remotamente. Em qualquer um dos casos um consultor checa a viabilidade do endereço: o que varia é o formato, não a conferência.'
		},
		{
			q: 'Sou MEI em Sorocaba. Consigo plano empresarial?',
			a: 'Sim, com CNPJ ativo e análise de crédito empresarial. Há conteúdo específico sobre planos para MEI e microempresas da região, com as particularidades desse porte.'
		},
		{
			q: 'Quanto tempo até receber a proposta?',
			a: 'Depende do porte da operação e de haver endereço novo a viabilizar. Com CNPJ e fatura em mãos, o comparativo costuma sair rápido; a confirmação de viabilidade e a análise de crédito seguem o prazo da operadora.'
		}
	],

	cta: {
		titulo: 'Fale com o consultor que atende Sorocaba',
		texto:
			'Agende uma conversa na sua empresa, venha até o escritório na Vila Hortência ou resolva por WhatsApp. Um consultor checa a viabilidade do endereço e a necessidade da operação — sem custo e sem obrigar você a trocar de operadora.'
	},

	service: {
		name: 'Atendimento TIM Empresas em Sorocaba',
		serviceType: 'Representante autorizado TIM para empresas',
		description:
			'Atendimento consultivo TIM Empresas em Sorocaba: um consultor checa a operação, a fatura atual e a viabilidade no endereço, e apresenta proposta comparada. Atendimento presencial na cidade, com desconto progressivo a partir de dez linhas.',
		areaServed: {
			'@type': 'City',
			name: 'Sorocaba',
			containedInPlace: { '@type': 'AdministrativeArea', name: 'São Paulo' }
		}
	},

	relacionadas: [
		'internet-empresarial-em-sorocaba',
		'tim-empresas-na-regiao-de-sorocaba',
		'contratar-tim-direto-ou-por-revenda-autorizada'
	],
	artigos: [
		'consultor-tim-empresa-atendimento-personalizado-negocio',
		'canais-de-atendimento-tim-empresarial',
		'como-agendar-uma-visita-tecnica-do-plano-tim-empresa',
		'solicitacao-proposta-tim-empresas-como-funciona'
	]
};
