// LP 10 — Cluster decisão. Keyword primária: "alternativa à Oi empresas".
//
// Ângulo de conversão: REDUZIR O MEDO DA TRANSIÇÃO, não atacar o concorrente.
// Quem busca este termo já decidiu avaliar; o que trava é o receio de perder
// número, parar a operação e descobrir tarde uma cláusula do contrato antigo.
// A página entrega dois artefatos que ninguém entrega na SERP — o inventário
// de 12 itens e o roteiro de seis passos — e o CTA é o de menor atrito: falar
// com um consultor antes de qualquer proposta.
//
// DECISÃO EDITORIAL DELIBERADA: a página NÃO especula sobre a situação de
// nenhuma empresa e não usa prazo, alarme ou "fim de serviço" como gatilho.
// Isso é intencional e não deve ser "melhorado" depois: o argumento é o método
// de migração, que é atemporal. Texto que envelhece em três meses não sustenta
// uma LP, e insinuação sobre concorrente destrói a credibilidade da comparação.
//
// A página NÃO afirma procedimento interno do Grupo OC. O que é prometido são
// as duas coisas confirmadas: um consultor checa a viabilidade (no endereço, na
// operação, na necessidade) e a condição por volume progride a partir de dez
// linhas. Critério técnico do setor — ordem da portabilidade, ativação em
// paralelo, leitura de contrato — permanece, porque não é alegação sobre nós.
//
// ⚠ REVISAR ANTES DE PUBLICAR:
// - nenhum prazo de portabilidade aparece no texto de propósito (segue a
//   regulamentação vigente e não o controlamos). Manter assim.

export default {
	slug: 'alternativa-a-oi-empresas',
	cluster: 'decisao',
	ordem: 2,

	title: 'Alternativa à Oi Empresas: Como Migrar sem Parar',
	description:
		'Cliente Oi empresarial buscando alternativa? Veja como migrar internet, fixo e móvel sem perder números nem parar a operação. Fale com um consultor.',
	keywords:
		'alternativa à Oi empresas, migrar da Oi empresas, substituir Oi Soluções, o que fazer com contrato Oi empresarial, trocar Oi por TIM empresas, migração de base instalada de telecom',
	keywordPrimaria: 'alternativa à Oi empresas',

	h1: 'Sua empresa é cliente Oi e precisa decidir: o roteiro de migração sem interrupção',

	cardTitulo: 'Alternativa à Oi empresarial',
	cardTexto:
		'Inventário do que está contratado, portabilidade dos fixos e ativação em paralelo antes do desligamento — com um consultor checando a viabilidade endereço a endereço.',

	hero: {
		eyebrow: 'Migração de base instalada',
		sub: 'Se você chegou até aqui, alguma coisa já acendeu o sinal: uma comunicação recebida, uma troca de contato comercial, uma renovação chegando. Esta página não especula sobre a situação de nenhuma empresa — trata do que está sob o seu controle, que é o destino de cada serviço contratado e a ordem em que a migração acontece.',
		bullets: [
			'Um consultor checa a viabilidade antes da proposta',
			'Portabilidade preserva fixos, móveis e faixas DDR',
			'Ativação em paralelo antes do desligamento',
			'Condição por volume: progressiva a partir de dez linhas'
		],
		ctaPrimario: 'Falar com um consultor sobre a migração',
		whatsapp:
			'Olá! Minha empresa é cliente Oi e quero avaliar alternativas de migração. Podem me ajudar?',
		cartaoTitulo: 'A ordem que evita janela sem serviço'
	},

	keyFacts: [
		{
			label: 'O item mais crítico',
			value: 'Os números fixos',
			nota: 'É o que a empresa divulgou por anos e o que leva mais tempo para portar. Entra primeiro na fila, não por último.'
		},
		{
			label: 'A regra que evita parada',
			value: 'Paralelo antes do corte',
			nota: 'O serviço novo entra funcionando e só depois o legado é desligado. Nunca o contrário, mesmo com pressa.'
		},
		{
			label: 'Quem conduz',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC · representante autorizado TIM · CNPJ 23.474.830/0001-56 · 4,9 no Google com 110 avaliações'
		}
	],

	resumo:
		'Migrar de operadora não é trocar um contrato por outro: é dar destino a cada serviço contratado, na ordem certa. Comece pelo inventário, porte os números fixos primeiro porque é o que leva mais tempo, confirme viabilidade endereço a endereço e só desligue o legado depois que o novo acesso estiver funcionando em paralelo.',

	secoes: [
		{
			id: 'o-que-decidir',
			h2: 'O que muda para quem é cliente Oi corporativo',
			paragrafos: [
				'O setor de telecomunicações brasileiro passou por reorganizações societárias e por transferências de ativos entre operadoras, e parte das bases corporativas mudou de mãos ou de estrutura de atendimento nesse processo. Esta página não afirma nada além disso sobre nenhuma empresa: prazo, futuro de contrato e política comercial de terceiros não são fatos que controlamos, e tratá-los como gatilho de venda seria desonesto.',
				'O que está sob o seu controle é outra coisa, e é bem mais útil: saber exatamente o que a empresa tem contratado hoje, quais desses serviços têm destino garantido, quais dependem de viabilidade em cada endereço e qual a ordem que evita ficar sem serviço no meio do caminho.',
				'Vale dizer o contrário também. Se o serviço atual atende, o suporte responde e o contrato tem condições que a empresa considera boas, migrar por antecipação é risco sem prêmio. O gatilho para agir não é a manchete: é vencimento de contrato próximo, degradação de atendimento, mudança de endereço, abertura de unidade ou necessidade técnica que o arranjo atual não cobre.'
			]
		},
		{
			id: 'tres-servicos',
			h2: 'Os três serviços que precisam de destino',
			paragrafos: [
				'Uma base corporativa quase nunca é um contrato só. Costuma ser um conjunto acumulado ao longo dos anos, e cada bloco tem risco e prazo diferentes. Separar os três antes de pedir qualquer proposta é o que impede a migração de virar improviso.'
			],
			lista: [
				'Conexão de dados: acessos de internet, links entre unidades e o que sustenta os sistemas da operação',
				'Telefonia fixa: os números publicados, as faixas DDR e o que está impresso em nota fiscal, contrato e fachada',
				'Serviços agregados: equipamentos em comodato, gerenciamento, e-mails e domínios atrelados ao contrato'
			],
			subsecoes: [
				{
					h3: 'Os números fixos são o ativo mais crítico',
					paragrafos: [
						'De tudo que está contratado, o que menos se substitui é o número. Ele está no site, no cartão, na nota fiscal, no cadastro do cliente, na plaquinha da recepção e na cabeça de quem liga há anos. A boa notícia é que a portabilidade preserva fixos e móveis, inclusive faixas DDR — o número não se perde ao trocar de operadora.',
						'A má notícia é que essa é a etapa mais lenta e mais dependente de dado correto: titularidade, endereço de instalação e a lista completa das faixas precisam estar coerentes. Por isso o fixo entra primeiro na fila de trabalho, e não por último. Migração que deixa o telefone para o fim é a que mais costuma atrasar.'
					]
				},
				{
					h3: 'Circuitos e contratos com vigência em aberto',
					paragrafos: [
						'Nem todo serviço pode ser desligado quando a empresa quiser. Contratos de acesso de dados costumam ter vigência, multa proporcional e prazo de aviso prévio, e a leitura desses três itens muda o cronograma inteiro do projeto.',
						'Há três caminhos possíveis e nenhum deles é universal: aguardar o vencimento com a migração já desenhada, negociar a saída antecipada ou migrar por etapas, começando pelos serviços sem trava contratual. A escolha depende do que está escrito no contrato — e é por isso que um consultor checa o contrato e a viabilidade de cada endereço antes de qualquer proposta.'
					]
				}
			]
		},
		{
			id: 'roteiro',
			h2: 'Roteiro de migração em seis passos',
			paragrafos: [
				'Esta é a sequência que uma migração de base instalada exige. A ordem não é estética: cada passo depende do anterior, e trocar a ordem é o que produz janela sem serviço, número perdido e fatura dupla por meses.'
			],
			lista: [
				'Passo 1 — Inventário: levantar tudo que está contratado, endereço a endereço, com contratos e vigências em mãos',
				'Passo 2 — Viabilidade: confirmar o que de fato chega a cada endereço, em mais de uma tecnologia quando houver',
				'Passo 3 — Desenho do destino: definir para onde vai cada serviço e o que será descontinuado por não ter mais uso',
				'Passo 4 — Portabilidade: abrir o processo dos números fixos e móveis, com janela agendada e dados conferidos',
				'Passo 5 — Ativação em paralelo: instalar e validar o serviço novo com o legado ainda no ar',
				'Passo 6 — Desligamento do legado: só depois da validação, com registro formal do encerramento e da devolução de equipamentos'
			],
			subsecoes: [
				{
					h3: 'Por que a ativação em paralelo não é opcional',
					paragrafos: [
						'A tentação de encurtar o projeto sempre aparece no passo 5, porque manter dois serviços simultâneos por um período parece desperdício. Não é: é o seguro do projeto. Se o acesso novo apresentar um problema de instalação, a operação continua rodando no legado e ninguém para.',
						'O desperdício de verdade é a alternativa. Desligar antes de validar transforma um contratempo técnico de algumas horas em uma parada operacional sem plano B, geralmente no dia em que ninguém podia parar.'
					]
				}
			]
		},
		{
			id: 'comparativo',
			h2: 'O que avaliar em cada candidato a substituto',
			paragrafos: [
				'Trocar de fornecedor sem critério é trocar de problema. A tabela abaixo compara os três destinos possíveis pelos itens que decidem numa operação corporativa — e o terceiro deles, manter o legado, é uma resposta legítima quando o inventário mostra que está tudo em ordem.'
			],
			tabela: {
				head: ['Critério', 'Operadora nacional', 'Provedor regional', 'Manter o legado'],
				rows: [
					[
						'Cobertura multiendereço',
						'Contrato único para unidades em cidades diferentes',
						'Depende da área de atuação do provedor',
						'Já instalada, mas presa ao desenho antigo'
					],
					[
						'Banda garantida',
						'Disponível conforme o produto contratado',
						'Disponível, com variação por provedor',
						'A do contrato atual, sem revisão'
					],
					[
						'SLA e prazo de reparo',
						'Padronizado em contrato para todas as unidades',
						'Contratual, com histórico local relevante',
						'O que já está assinado — vale reler'
					],
					[
						'Portabilidade do fixo',
						'Suportada, com acompanhamento',
						'Suportada, conforme a estrutura do provedor',
						'Não se aplica'
					],
					[
						'Atendimento',
						'Canais oficiais, ampliáveis por canal autorizado',
						'Proximidade e contato local direto',
						'O atendimento que a empresa já conhece'
					],
					[
						'Melhor cenário',
						'Várias unidades, exigência de SLA uniforme',
						'Endereço único com bom histórico local',
						'Contrato vantajoso e serviço estável'
					]
				],
				caption:
					'Comparação de critérios técnicos e contratuais, sem valores. O destino adequado sai da viabilidade real de cada endereço e do que o inventário revelar — não de uma escolha feita antes do levantamento.'
			}
		},
		{
			id: 'inventario',
			h2: 'Inventário: doze itens antes de migrar qualquer coisa',
			paragrafos: [
				'Este é o levantamento que precede qualquer decisão de migração, e é por ele que um consultor começa ao checar a viabilidade da operação. Publicamos a lista aberta porque ela é útil mesmo para quem vai conduzir a migração sozinho ou com outro fornecedor: sem esses doze itens, qualquer proposta recebida é um chute com papel timbrado.'
			],
			checklist: {
				titulo: 'Inventário de migração — doze itens',
				intro:
					'Reúna tudo antes de pedir proposta. O que não estiver nesta lista costuma aparecer depois, no pior momento possível.',
				itens: [
					'Circuitos e acessos ativos, com o endereço exato de cada um',
					'Números fixos, faixas DDR e onde cada faixa é usada',
					'Linhas móveis ativas e quem responde por cada uma',
					'Contratos, datas de início e vigências em aberto',
					'Multa por rescisão antecipada e prazo de aviso prévio',
					'Equipamentos em comodato e condições de devolução',
					'Serviços agregados contratados junto ao acesso',
					'E-mails, domínios e serviços atrelados ao contrato',
					'Titularidade cadastral de cada serviço, item a item',
					'SLA vigente e histórico de indisponibilidade do último ano',
					'Links de filiais e dependências entre unidades',
					'Responsável interno pelo projeto e por aprovar cada etapa'
				]
			}
		},
		{
			id: 'o-que-define-o-investimento',
			h2: 'O que define o investimento de uma migração',
			paragrafos: [
				'Não publicamos valores porque não existe tabela honesta para este tipo de projeto: duas empresas com o mesmo número de unidades podem ter viabilidades técnicas completamente diferentes, e isso muda o desenho inteiro. O que dá para explicar com clareza são as variáveis que compõem o custo, para você chegar na conversa sabendo o que está sendo cotado.',
				'Cinco fatores respondem por quase toda a diferença entre uma proposta e outra, e nenhum deles aparece na primeira ligação de um vendedor com pressa.'
			],
			lista: [
				'Quantidade de endereços e a viabilidade técnica confirmada em cada um',
				'Banda contratada por unidade, com o upload dimensionado pelo uso efetivo',
				'Exigência de SLA e o prazo de reparo que a operação suporta',
				'Volume de números a portar, incluindo faixas DDR',
				'Prazo desejado para a transição e o tamanho de cada onda de migração',
				'Volume de linhas reunidas no contrato, com a condição progredindo a partir de dez'
			]
		}
	],

	passos: {
		titulo: 'O que uma migração de base instalada exige',
		subtitulo:
			'Quatro etapas de projeto e uma regra que não muda: nada é desligado antes de o substituto estar validado e funcionando.',
		itens: [
			{
				title: 'Inventário e leitura de contrato',
				text: 'A partir da fatura e dos contratos, um consultor checa a situação atual da operação item a item: o que está ativo, onde, com que vigência, com que multa e com quais números atrelados. É o levantamento que sustenta todas as decisões seguintes, e ele vem antes de qualquer proposta.'
			},
			{
				title: 'Viabilidade endereço a endereço',
				text: 'Um consultor checa a viabilidade em cada endereço antes de desenhar qualquer proposta, considerando mais de uma tecnologia quando existe alternativa — inclusive conexão pela rede móvel onde não há infraestrutura de fibra instalada.'
			},
			{
				title: 'Desenho do destino e cronograma por ondas',
				text: 'Cada serviço precisa de um destino definido, e a migração é agrupada em ondas, começando pelas unidades de menor risco. A cada lote validado, o próximo é liberado — em vez de virar tudo de uma vez e descobrir o problema em vinte lugares ao mesmo tempo.'
			},
			{
				title: 'Portabilidade, paralelo e encerramento formal',
				text: 'Os números são portados com janela agendada, o serviço novo entra em paralelo ao legado e o desligamento só acontece após a validação. O encerramento do contrato antigo é formalizado e a devolução de equipamentos, registrada.'
			}
		]
	},

	objecoes: [
		{
			q: '“Ainda estou dentro do contrato.”',
			a: 'Isso não impede planejar, e planejar dentro da vigência é justamente o cenário confortável: dá para chegar no vencimento com inventário pronto, viabilidade confirmada e proposta comparada, em vez de decidir com prazo em cima. Existem três caminhos possíveis — aguardar o vencimento, negociar a saída ou migrar por etapas apenas o que não tem trava — e a leitura do contrato é o que define qual deles se aplica.'
		},
		{
			q: '“Vou perder os números que a empresa divulga há anos.”',
			a: 'Não. A portabilidade preserva fixos e móveis, inclusive faixas DDR, e as linhas seguem funcionando durante o processo. O que exige cuidado é o dado cadastral: titularidade e endereço precisam estar coerentes, e é por isso que o levantamento dos números é o primeiro item do inventário, não o último.'
		},
		{
			q: '“Minha filial fica numa cidade onde a oferta é limitada.”',
			a: 'É uma preocupação concreta e às vezes o legado leva vantagem exatamente aí: redes fixas antigas têm capilaridade em municípios onde a oferta mais nova ainda não chegou. Por isso um consultor checa a viabilidade em mais de uma tecnologia por endereço, incluindo acesso pela rede móvel, e trata cada unidade individualmente. Se em algum endereço a alternativa não for melhor que o atual, a recomendação é manter — e isso é dito com todas as letras.'
		},
		{
			q: '“Migrar vinte endereços é um projeto grande demais para agora.”',
			a: 'É grande se for feito de uma vez, e é justamente por isso que migração de base instalada se faz por ondas, com validação a cada lote e um responsável interno acompanhando. O levantamento, que é a parte mais trabalhosa, pode começar hoje: um consultor checa a viabilidade dos endereços e a situação atual da operação sem nenhum compromisso de contratação.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, com sede em Sorocaba/SP e CNPJ 23.474.830/0001-56, e é representante autorizado TIM para empresas. São 110 avaliações públicas no Google com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'O critério que orienta esta página não é nosso: é o que o setor aprendeu na prática. Nada deve ser desligado antes de o substituto estar validado, e a portabilidade dos números fixos precisa entrar primeiro na fila de trabalho. As duas regras existem porque os dois erros que mais custam numa migração são o corte antecipado e o número deixado para o fim.',
			'Somos canal TIM e temos interesse comercial na sua decisão, o que torna importante dizer o seguinte: em parte dos casos o levantamento mostra que o arranjo atual está adequado e o certo é não mexer. Quando é assim, é isso que o consultor diz. Sobre condição comercial, o que é público vale para todo mundo: os descontos progressivos por volume começam a partir de dez linhas, e a faixa aplicável ao caso só existe dentro de uma proposta.'
		]
	},

	faqTitulo: 'Dúvidas de quem está avaliando a migração',
	faq: [
		{
			q: 'Vou perder os números fixos da empresa se trocar de operadora?',
			a: 'Não. A portabilidade preserva fixos e móveis, inclusive faixas DDR. É o primeiro item do inventário justamente porque é a etapa que leva mais tempo e depende de dado cadastral correto.'
		},
		{
			q: 'E se o contrato atual ainda estiver vigente?',
			a: 'Existem caminhos: aguardar o vencimento com a migração já desenhada, negociar a saída antecipada ou migrar por etapas apenas o que não tem trava contratual. O ponto de partida é ler o contrato, e um consultor confere isso antes de qualquer proposta.'
		},
		{
			q: 'Minha unidade fica numa cidade com pouca oferta. Tem saída?',
			a: 'Um consultor checa a viabilidade em mais de uma tecnologia por endereço, inclusive conexão pela rede móvel onde não há fibra instalada. Quando nenhuma alternativa supera o serviço atual naquele endereço, a recomendação é manter.'
		},
		{
			q: 'A operação para durante a migração?',
			a: 'Não, quando é feita com ativação em paralelo: o serviço novo entra funcionando e só depois o legado é desligado. A janela de portabilidade é agendada com a empresa e as linhas seguem ativas durante o processo.'
		},
		{
			q: 'Quanto tempo leva migrar vários endereços?',
			a: 'Depende do levantamento e da viabilidade checada em cada endereço. O cronograma sai depois disso e é organizado em ondas, com validação a cada lote — não a partir de uma estimativa genérica dada antes de conhecer a operação.'
		},
		{
			q: 'Preciso fechar contrato para conversar sobre a migração?',
			a: 'Não. Um consultor checa a viabilidade dos endereços e a situação atual da operação sem compromisso de contratação, e se a conclusão for que o arranjo em vigor está adequado, é isso que você vai ouvir.'
		}
	],

	cta: {
		titulo: 'Fale com um consultor antes de decidir a migração',
		texto:
			'A partir da fatura e do contrato atuais, um consultor checa a viabilidade de cada endereço e a situação da operação, e percorre com você os doze itens do inventário — antes de qualquer proposta e sem compromisso de contratação. Havendo parque de linhas em jogo, a condição por volume entra na conversa: os descontos progressivos começam a partir de dez linhas.'
	},

	service: {
		name: 'Migração de base instalada de telecom empresarial',
		serviceType: 'Projeto de migração de operadora corporativa',
		description:
			'Migração de serviços corporativos de telecom para a TIM: um consultor checa a viabilidade por endereço e as condições do contrato atual, com portabilidade de fixos e móveis, inclusive faixas DDR.'
	},

	relacionadas: [
		'trocar-de-operadora-com-contrato-vigente',
		'internet-5g-para-empresas-sem-fibra-no-endereco',
		'telecom-para-abertura-de-filial'
	],
	artigos: [
		'migracao-operadora-tim-empresas-processo-cuidados',
		'portabilidade-tim-empresarial-guia-completo-trocar-operadora',
		'tim-portabilidade-cnpj-guia-completo',
		'migrar-de-operadora-corporativa-e-burocratico-passo-a-passo-da-portabilidade-tim'
	]
};
