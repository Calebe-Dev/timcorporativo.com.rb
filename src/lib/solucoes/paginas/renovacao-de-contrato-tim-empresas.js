// LP 15 — Cluster contrato. Keyword primária: "renovação de contrato TIM empresas".
//
// Ângulo de conversão: PRAZO. É a única página do cluster com urgência real e
// verdadeira — a janela de aviso do contrato existe, tem data e fecha sozinha.
// O gatilho não é medo de multa: é perder o único momento do ano em que a
// empresa negocia de posição forte, com o vínculo ainda por definir.
//
// Público duplo, e isso é deliberado: (a) quem tem contrato TIM vencendo e
// pretende renovar, (b) BASE INSTALADA que comprou por outro canal e não sabe
// que pode ser atendida por representante autorizado. A página materializa o
// bloco "Renovação Segura" que a home já anuncia sem nenhuma página sustentando.
//
// ⚠ TERRENO CONTRATUAL. Nenhuma afirmação sobre prazo de aviso prévio,
// percentual, ou regra automática de reajuste. Tudo remete a "o que está no seu
// contrato". Não afirmar que renovação automática é ilegal, abusiva ou
// cancelável — apenas que costuma ser desvantajosa quando a empresa mudou.
//
// ⚠ REVISAR ANTES DE PUBLICAR: (a) confirmar que a revisão de contrato e o
// acompanhamento de renovação são de fato prestados a cliente TIM cuja venda
// original foi de outro canal; (b) confirmar com a equipe comercial que adicionar
// linhas por aditivo, preservando condições, é o comportamento usual — e não uma
// generalização nossa; (c) a mecânica das faixas de desconto progressivo por
// volume deve ser descrita sem nenhum número, conforme R1.

export default {
	slug: 'renovacao-de-contrato-tim-empresas',
	cluster: 'contrato',
	ordem: 3,

	title: 'Renovação de Contrato TIM Empresas',
	description:
		'Contrato TIM Empresas perto do fim? Revise condições, ajuste linhas ao consumo real e renove com acompanhamento de um representante autorizado.',
	keywords:
		'renovação de contrato TIM empresas, renovar plano TIM empresarial, renegociar contrato TIM CNPJ, fim do contrato TIM empresas o que fazer, revisar condições TIM empresas, aumentar linhas no contrato TIM',
	keywordPrimaria: 'renovação de contrato TIM empresas',

	h1: 'Seu contrato TIM está vencendo: o que revisar antes de renovar no automático',

	cardTitulo: 'Renovação de contrato',
	cardTexto:
		'Renovar sem revisar mantém condições desenhadas para a empresa que você era. Os seis pontos a conferir antes de assinar de novo.',

	hero: {
		eyebrow: 'Renovação de contrato',
		sub: 'A janela de renovação é o único momento do ciclo em que a sua empresa negocia com o vínculo ainda em aberto. Quem deixa passar renova nas condições antigas — desenhadas para o número de pessoas, o consumo e os endereços que a empresa tinha quando assinou.',
		bullets: [
			'Revisão do contrato vigente antes de qualquer proposta',
			'Inventário de linhas conciliado com quem trabalha hoje',
			'Vale também para quem já é cliente TIM por outro canal',
			'Renovação acompanhada até as condições novas entrarem na fatura'
		],
		ctaPrimario: 'Revisar contrato antes de renovar',
		whatsapp:
			'Olá! Meu contrato TIM Empresas está próximo do vencimento e quero revisar as condições antes de renovar.',
		cartaoTitulo: 'O que revisar antes de assinar'
	},

	keyFacts: [
		{
			label: 'A data que importa',
			value: 'O aviso, não o vencimento',
			nota: 'A janela para se manifestar é anterior ao fim do contrato e está escrita nele.'
		},
		{
			label: 'O que mais desatualiza',
			value: 'Linhas × pessoas',
			nota: 'A empresa muda de tamanho todo ano; o contrato só muda quando alguém mexe.'
		},
		{
			label: 'Base instalada',
			value: 'Atendida igual',
			nota: 'Cliente TIM que comprou por outro canal também recebe revisão e acompanhamento.'
		}
	],

	resumo:
		'Renovar no automático mantém condições desenhadas para a empresa que você era quando assinou, não para a de hoje. Antes do vencimento vale revisar seis pontos: quantidade de linhas contra pessoas ativas, franquia contra consumo real, serviços agregados que ninguém usa, faixa de desconto por volume, atendimento praticado e prazo com cláusula de reajuste. A janela para isso é a data de aviso do contrato, que é anterior ao vencimento.',

	secoes: [
		{
			id: 'nao-fazer-nada',
			h2: 'O que acontece se você não fizer nada',
			paragrafos: [
				'O contrato segue. Em geral ele se renova sozinho nas condições que já estavam lá, e é justamente esse o problema: essas condições foram desenhadas para a empresa que assinou, não para a empresa que existe hoje. Se você contratou com um time menor, com outro perfil de consumo ou com um endereço a menos, é esse retrato antigo que continua valendo por mais um ciclo.',
				'Renovar no automático não é errado por si — é caro quando a empresa mudou e o contrato não. E a empresa quase sempre mudou. Entre uma assinatura e a seguinte entram e saem pessoas, o consumo de dados sobe, alguém abre uma unidade, um serviço deixa de ser usado e ninguém cancela. Nada disso chega ao contrato sozinho.',
				'O que deixa de existir quando a janela passa é a posição de negociação. Com o contrato em aberto, a empresa discute condições tendo alternativa; com o contrato já renovado, discute pedindo exceção. É a mesma conversa em dois lugares muito diferentes da mesa.'
			]
		},
		{
			id: 'o-que-mudou',
			h2: 'O que mudou na sua empresa desde a última assinatura',
			paragrafos: [
				'Antes de olhar para a proposta de renovação, vale olhar para dentro. A revisão útil não começa perguntando o que a operadora oferece agora — começa levantando o que mudou na operação desde a última vez que alguém assinou alguma coisa.',
				'Essa lista costuma surpreender quem a monta pela primeira vez. Não porque haja algo dramático nela, mas porque o acúmulo de pequenas mudanças, nenhuma delas relevante isoladamente, produz um descolamento grande entre o contrato e a realidade.'
			],
			lista: [
				'Quantas pessoas entraram e quantas saíram desde a assinatura',
				'Quantas linhas existem hoje e quantas têm consumo relevante',
				'Como o consumo de dados por perfil evoluiu — campo, administrativo, gestão',
				'Quantos endereços a empresa opera hoje, e se algum foi desocupado',
				'Quanto do time passou a trabalhar fora do escritório de forma permanente',
				'Quais aparelhos e equipamentos entraram no arranjo ao longo do ciclo',
				'Quais serviços agregados foram contratados e ainda são usados'
			]
		},
		{
			id: 'seis-pontos',
			h2: 'Os seis pontos a revisar antes de assinar de novo',
			paragrafos: [
				'Esta é a pauta da reunião de renovação. Ela vale para qualquer operadora, inclusive quando a proposta não passa por nós — a diferença entre uma renovação revisada e uma renovação automática está em chegar com estes seis pontos levantados, e não em barganhar melhor na hora.'
			],
			lista: [
				'Linhas contratadas contra pessoas ativas: cada linha precisa de um responsável identificável',
				'Franquia contratada contra consumo apurado, por perfil de uso e não pela média geral',
				'Serviços agregados: quais existem, quem pediu e se ainda fazem sentido',
				'Faixa de desconto progressivo por volume: em qual a empresa está e em qual ela deveria estar',
				'Atendimento praticado no ciclo que passou contra o que estava previsto',
				'Prazo do novo período, cláusula de reajuste e condições de saída'
			],
			subsecoes: [
				{
					h3: 'Renovar é o momento de maior poder de negociação do ciclo',
					paragrafos: [
						'Durante a vigência, quase toda solicitação de mudança é um pedido. Na janela de renovação, a mesma conversa é uma negociação — porque existe uma decisão em aberto e ela ainda não foi tomada. É a diferença entre perguntar se dá para melhorar alguma coisa e discutir em que condições o próximo ciclo vai acontecer.',
						'Por isso o calendário importa mais que a argumentação. Uma empresa que chega à renovação com inventário conciliado, consumo apurado e as perguntas certas na mão negocia melhor do que uma empresa que reclama muito no mês seguinte à renovação automática. O trabalho é o mesmo; a hora é que muda tudo.'
					]
				},
				// ⚠ REVISAR: "inclusão de linhas por aditivo, preservando o desenho
				// vigente" está escrito como comportamento USUAL, não como garantia
				// contratual — e assim deve permanecer. Confirmar com o comercial; se
				// houver qualquer dúvida, reduzir para "confira como o seu contrato
				// trata a inclusão de linhas".
				{
					h3: 'Crescer no contrato sem recomeçar do zero',
					paragrafos: [
						'A dúvida mais frequente de quem está crescendo é se adicionar linhas obriga a refazer o contrato inteiro e recomeçar todos os prazos. Em geral a inclusão é feita por aditivo, preservando o desenho vigente — mas o ponto que precisa ser conferido caso a caso é como a faixa de desconto por volume se comporta com o novo total, e qual prazo passa a valer para as linhas incluídas.',
						'É uma conferência simples e que quase ninguém faz: uma empresa pode estar acumulando linhas ao longo do ano sem que a condição comercial acompanhe o volume que ela já atingiu. A renovação é o momento natural para acertar isso, porque tudo é reavaliado de qualquer forma.'
					]
				}
			]
		},
		{
			id: 'base-instalada',
			h2: 'Já é cliente TIM por outro canal? O atendimento vale igual',
			paragrafos: [
				'Existe uma confusão comum de quem já é cliente TIM: a ideia de que, tendo comprado direto ou por outro canal, não haveria por que falar com um representante autorizado. A relação contratual permanece com a operadora em qualquer um dos caminhos — o que muda é quem senta do seu lado para revisar o contrato antes de você assinar de novo.',
				'Na prática, é para a base instalada que a revisão costuma render mais. Quem está no mesmo contrato há alguns ciclos acumulou mais camadas: linhas herdadas, serviços de negociações antigas, faixas de volume desatualizadas, aparelhos que já saíram de circulação. É esse acúmulo que a revisão de renovação existe para tratar.',
				'Também é o que a home do site já anuncia como renovação segura: chegar à assinatura sabendo exatamente o que muda, o que permanece e o que entra na fatura no ciclo seguinte — em vez de descobrir depois.'
			]
		},
		{
			id: 'comparativo',
			h2: 'Três cenários de renovação',
			paragrafos: [
				'Toda renovação cai em um destes três cenários, e o pior deles é escolhido por omissão. A comparação abaixo é por esforço, risco e efeito na operação — sem valores, porque o resultado financeiro de cada cenário depende do contrato específico e do que a revisão encontrar.'
			],
			tabela: {
				head: ['Critério', 'Renovação automática', 'Renovação revisada', 'Novo desenho'],
				rows: [
					[
						'Esforço interno',
						'Nenhum: acontece sozinha',
						'Baixo: levantar inventário e consumo',
						'Médio: rever arranjo inteiro com a operação'
					],
					[
						'Risco',
						'Manter o que já não serve por mais um ciclo',
						'Baixo: nada muda sem decisão explícita',
						'Exige transição planejada e testada'
					],
					[
						'O que muda na operação',
						'Nada',
						'Ajustes pontuais: linhas, franquia, agregados',
						'Estrutura revista, com etapas e datas'
					],
					[
						'Poder de negociação',
						'Perdido quando a janela fecha',
						'Preservado: a decisão ainda está em aberto',
						'Máximo: todas as alternativas na mesa'
					],
					[
						'Quando faz sentido',
						'Empresa estável, contrato revisado no ciclo anterior',
						'A empresa mudou de tamanho ou de perfil de uso',
						'Mudança estrutural: unidades, equipe ou operação'
					]
				],
				caption:
					'Renovação revisada não significa mudar tudo: significa que cada item foi conferido antes de continuar valendo por mais um período.'
			}
		},
		{
			id: 'checklist',
			h2: 'Dez itens antes de assinar a renovação',
			paragrafos: [
				'Leve esta lista para a conversa de renovação, seja ela com quem for. Cada item aqui existe porque, quando fica de fora, reaparece durante o ciclo seguinte — e aí não há mais o que negociar.'
			],
			checklist: {
				titulo: 'Levantamento pré-renovação',
				intro: 'Reúna os dez itens antes da reunião. Chegar com eles levantados vale mais do que qualquer argumento na hora.',
				itens: [
					'Data exata do vencimento e a data-limite de aviso prevista no contrato',
					'Inventário de linhas conciliado com a relação de pessoas ativas',
					'Consumo médio apurado por perfil de uso, e não pela média geral',
					'Relação de serviços agregados, com quem pediu e para quê',
					'Faixa de desconto por volume atual e a faixa prevista para o próximo ciclo',
					'Aparelhos e equipamentos em comodato, com números de série',
					'Atendimento praticado no ciclo que passou, com protocolos registrados',
					'Cláusula de reajuste e como ela foi aplicada no período',
					'Empresas e CNPJs que precisam estar no mesmo contrato',
					'Quem assina pela empresa e qual documentação será exigida'
				]
			}
		}
	],

	passos: {
		titulo: 'Como conduzimos uma renovação',
		subtitulo:
			'Quatro etapas antes da assinatura. Vale igualmente para quem já é cliente TIM e comprou por outro canal.',
		itens: [
			{
				title: 'Revisão do contrato vigente',
				text: 'Levantamos vencimento, data-limite de aviso, serviços contratados, cláusula de reajuste e condições que estavam valendo. É o retrato do que existe hoje, antes de qualquer discussão sobre o que vem depois.'
			},
			{
				title: 'Conciliação de inventário e consumo',
				text: 'Cruzamos as linhas ativas com quem trabalha na empresa e apuramos o consumo real por perfil de uso. É desta etapa que saem as decisões concretas: o que cancelar, o que redimensionar, o que manter.'
			},
			{
				title: 'Proposta comparando os três cenários',
				text: 'Apresentamos renovação automática, renovação revisada e novo desenho lado a lado, com o que cada caminho muda na operação. A decisão fica com a empresa, informada — não entre uma opção e nenhuma.'
			},
			{
				title: 'Renovação acompanhada',
				text: 'Acompanhamos a assinatura, a entrada das condições novas e a fatura do ciclo seguinte, conferindo se o que foi acordado de fato apareceu nela. Ajuste combinado que não chega à fatura é ajuste que não aconteceu.'
			}
		]
	},

	objecoes: [
		{
			q: '“Já sou cliente TIM, não preciso de um canal.”',
			a: 'A relação contratual continua com a operadora de qualquer forma — não é isso que muda. O que um representante autorizado acrescenta é alguém que revisa o contrato com você antes da assinatura, concilia o inventário e acompanha se o que foi acordado entrou na fatura. Base instalada é atendida igual, inclusive quando a venda original foi feita por outro caminho.'
		},
		{
			q: '“Renovar dá trabalho e o resultado é sempre o mesmo.”',
			a: 'O trabalho está concentrado em uma etapa: levantar quantas linhas existem, quem usa cada uma e qual o consumo real. Feito isso, a conversa de renovação leva uma reunião. E o resultado só é sempre o mesmo quando nada é levantado — a proposta de renovação padrão é, por definição, a que preserva o desenho atual.'
		},
		{
			q: '“Meu contrato renova sozinho e está bom assim.”',
			a: 'Pode estar mesmo, e quando está, dizemos isso. A questão é que "está bom" costuma ser uma avaliação sobre o serviço, não sobre o contrato: a rede funciona, ninguém reclama, logo parece adequado. Linhas de gente que saiu, franquia desalinhada e serviços não usados não geram reclamação nenhuma — só permanecem.'
		},
		{
			q: '“Se eu mexer, perco as condições que já tenho.”',
			a: 'Revisar não é abrir mão de nada. A revisão levanta o que está valendo hoje e compara com o que a empresa precisa agora; nada muda sem decisão explícita sua. O risco real está do outro lado: manter por mais um ciclo uma condição desenhada para uma empresa que não existe mais.'
		},
		{
			q: '“Deixo para resolver quando estiver perto do vencimento.”',
			a: 'A data que define a janela é a do aviso previsto no contrato, e ela é anterior ao vencimento. Quem se organiza pela data do vencimento frequentemente descobre que o prazo para se manifestar já passou — e aí a conversa deixa de ser sobre renovar e passa a ser sobre um contrato novo já em curso.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão de telecomunicações, auditoria e consultoria em telefonia empresarial, e é representante autorizado TIM para empresas. O perfil no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'A regra de trabalho desta página é própria: revisamos o contrato vigente antes de discutir a renovação. Parece óbvio e quase nunca é o que acontece — a conversa padrão de renovação começa pela oferta nova e trata o contrato atual como detalhe histórico. Invertida a ordem, muda o que se descobre: linhas sem dono, agregados esquecidos e faixas de volume defasadas só aparecem quando alguém olha para trás antes de olhar para frente.',
			'A segunda escolha, também deliberada, é atender base instalada. Cliente TIM que comprou por outro canal recebe a mesma revisão de contrato e o mesmo acompanhamento de renovação. É a página que sustenta o compromisso de renovação segura que o site já anuncia: chegar à assinatura sabendo exatamente o que muda e o que permanece.',
			'Um limite explícito: descrevemos o que costuma estar previsto em contratos empresariais e o que vale conferir no seu. Não é orientação jurídica, não avaliamos validade de cláusula e não substituímos a leitura do contrato pelo jurídico da empresa.'
		]
	},

	faqTitulo: 'Dúvidas sobre renovação de contrato TIM Empresas',
	faq: [
		{
			q: 'Já sou cliente TIM. Posso ser atendido por um representante autorizado?',
			a: 'Pode. A revisão do contrato e o acompanhamento na renovação são feitos igualmente para base instalada, mantendo a relação contratual com a operadora. Vale inclusive quando a contratação original foi feita por outro canal.'
		},
		{
			q: 'Renovar automaticamente é ruim?',
			a: 'Não é ruim por si — é ruim quando a empresa mudou e o contrato não. Linhas de pessoas que já saíram, franquia desalinhada ao consumo atual e serviços agregados sem uso sobrevivem intactos a uma renovação automática, porque nada neles gera alerta.'
		},
		{
			q: 'Com quanta antecedência devo revisar?',
			a: 'Antes da data-limite de aviso prevista no seu contrato, que é anterior ao vencimento. Na prática isso significa começar alguns meses antes: deixar para o mês do vencimento costuma custar a janela de negociação.'
		},
		{
			q: 'Posso adicionar linhas sem reiniciar o contrato inteiro?',
			a: 'Em geral a inclusão é feita por aditivo, preservando o desenho vigente. O que precisa ser conferido caso a caso é como a faixa de desconto por volume se comporta com o novo total de linhas e qual prazo passa a valer para as linhas incluídas.'
		},
		{
			q: 'O que muda na fatura depois da renovação?',
			a: 'Depende do que foi acordado — e é exatamente por isso que acompanhamos a fatura do ciclo seguinte. Condição combinada que não aparece na fatura precisa ser reaberta com protocolo, e quanto antes isso for identificado, mais simples é corrigir.'
		}
	],

	cta: {
		titulo: 'Revise seu contrato antes da renovação automática',
		texto:
			'Um consultor lê o contrato vigente, concilia o inventário de linhas com quem trabalha na empresa hoje e apresenta os três cenários de renovação lado a lado. Vale também para quem já é cliente TIM por outro canal. Sem compromisso e sem cobrança pela revisão.'
	},

	service: {
		name: 'Revisão e renovação de contrato TIM Empresas',
		serviceType: 'Consultoria em contratos de telecomunicações empresariais',
		description:
			'Revisão do contrato TIM Empresas antes do vencimento: conciliação de inventário de linhas, apuração de consumo por perfil, conferência de serviços agregados e faixa de volume, com acompanhamento da renovação até a fatura do ciclo seguinte.'
	},

	relacionadas: [
		'auditoria-de-fatura-de-telecom',
		'contratar-tim-direto-ou-por-revenda-autorizada',
		'plano-corporativo-para-grandes-empresas'
	],
	artigos: [
		'tim-empresas-planos-corporativos-descontos-progressivos-guia',
		'tim-black-empresa-desconto-progressivo-2026',
		'tim-conta-empresarial-como-entender-otimizar-fatura',
		'tim-empresas-gestao-linhas-esim-governanca'
	]
};
