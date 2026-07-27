// LP 5 — Cluster verticais. Keyword primária: "internet para hotel".
//
// Ângulo de conversão: REPUTAÇÃO PÚBLICA somada ao pedido de delivery que nunca
// chega. Hoteleiro e dono de restaurante não compram banda: compram avaliação
// sem menção a Wi-Fi ruim e caixa que não trava no salão cheio. O gancho é o
// critério de cobertura por área — o que um consultor checa no endereço antes de
// qualquer proposta, e que quem vende plano por telefone não tem como oferecer.
//
// A página não afirma procedimento interno: promete o que é verdade — um
// consultor checa a viabilidade no endereço e nas áreas de uso — e apresenta o
// resto como critério do setor, não como entregável do Grupo OC.
//
// ⚠ REVISAR ANTES DE PUBLICAR: a menção ao Marco Civil da Internet é contextual
// e o texto diz isso explicitamente: a validação jurídica do termo de uso e do
// prazo de guarda é do advogado do estabelecimento.

export default {
	slug: 'internet-e-telefonia-para-hoteis-e-restaurantes',
	cluster: 'verticais',
	ordem: 5,

	title: 'Internet e Telefonia para Hotéis e Restaurantes',
	description:
		'Internet para hotéis e restaurantes: Wi-Fi de hóspede separado do PDV, delivery sem queda e recepção atendendo. Fale com um consultor TIM.',
	keywords:
		'internet para hotel, internet para restaurante, wi-fi para hóspede, conectividade para pousada, internet para bar e delivery, telefonia para recepção de hotel',
	keywordPrimaria: 'internet para hotel',

	h1: 'Hotelaria e food service: Wi-Fi que o hóspede elogia sem colocar o caixa em risco',

	cardTitulo: 'Hotéis, pousadas e restaurantes',
	cardTexto:
		'Rede de hóspede e rede operacional nunca compartilham o mesmo ambiente. E cobertura prometida sem ninguém checar as áreas de uso vira reclamação na primeira noite.',

	hero: {
		eyebrow: 'Hotéis, pousadas e restaurantes',
		sub: 'O hóspede avalia o Wi-Fi do quarto dele, não a média do hotel. E o pedido de delivery que não chega não gera erro nenhum na tela: some do faturamento em silêncio. Um consultor checa a viabilidade no endereço e as áreas que precisam de cobertura antes de qualquer proposta.',
		bullets: [
			'Viabilidade checada por um consultor, área por área',
			'Rede de hóspede segregada da rede do caixa e do sistema',
			'Comutação automática cobrindo a integração com delivery',
			'Portabilidade do telefone publicado de reservas'
		],
		ctaPrimario: 'Falar com um consultor',
		whatsapp:
			'Olá! Tenho um hotel/restaurante e quero avaliar o Wi-Fi e a internet da operação. Podem me ajudar?',
		cartaoTitulo: 'O que se checa antes da proposta'
	},

	keyFacts: [
		{
			label: 'A regra que não se negocia',
			value: 'Duas redes, um link',
			nota: 'Hóspede e PDV nunca no mesmo ambiente: uma rede é conforto, a outra é a operação que não pode parar.'
		},
		{
			label: 'O que se checa antes',
			value: 'Cobertura por área',
			nota: 'Andar, quarto, salão e área externa: um consultor checa a viabilidade antes da proposta, não depois da reclamação pública.'
		},
		{
			label: 'Experiência',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC, representante autorizado TIM · 4,9 no Google'
		}
	],

	resumo:
		'Hotel, pousada e restaurante precisam de duas redes sobre o mesmo link: a do hóspede ou cliente, que é atributo do produto vendido, e a operacional, onde rodam PDV, comanda, reservas e câmeras. A cobertura se define por área — quarto, andar, salão e área externa —, e não pela metragem do prédio; a comutação automática existe sobretudo por causa do delivery, que falha em silêncio.',

	secoes: [
		{
			id: 'duas-redes',
			h2: 'As duas redes que todo hotel e restaurante precisa ter',
			paragrafos: [
				'A regra de desenho é uma só e não se negocia: a rede que o hóspede ou o cliente usa nunca é a mesma em que rodam o PDV, a comanda, o motor de reservas e as câmeras. São duas redes distintas sobre o mesmo link, com prioridade sempre para a operação.',
				'O motivo é duplo. O primeiro é de segurança: dispositivo desconhecido, com aplicativo desconhecido, não pertence ao mesmo ambiente do caixa. O segundo é de capacidade: um hóspede assistindo a um filme no quarto e a comanda eletrônica do salão disputando a mesma fila entregam o pior resultado possível dos dois lados — o hóspede reclama e o garçom fica esperando o pedido subir para a cozinha.'
			],
			lista: [
				'Rede de hóspede ou cliente: acesso à internet e nada além disso',
				'Rede operacional: PDV, comanda, reservas e retaguarda',
				'Câmeras com espaço próprio, sem competir com o salão',
				'Prioridade sempre para a operação, nunca para o entretenimento'
			]
		},
		{
			id: 'wifi-de-hospede',
			h2: 'Wi-Fi de hóspede é produto, não cortesia',
			paragrafos: [
				'Em hotelaria, o Wi-Fi virou item de avaliação pública. Ele aparece por escrito na opinião de quem se hospedou, fica visível para quem ainda vai reservar e influencia a decisão de quem nunca esteve ali. Isso muda a natureza do investimento: não é despesa de infraestrutura, é atributo do produto vendido, na mesma prateleira do café da manhã e do ar-condicionado.',
				'A entrega desse produto tem três partes: cobertura onde o hóspede efetivamente está, capacidade no momento em que todos estão conectados e um acesso simples o bastante para não gerar chamado na recepção. Um portal de acesso com identificação e aceite de termo de uso resolve a última parte e, de quebra, organiza a guarda de registro de conexão de que trata o Marco Civil da Internet.',
				'A rede precisa ser desenhada para suportar essa exigência, e é um dos pontos que entram na conversa com o consultor antes da proposta. A validação jurídica do texto do termo e do prazo de guarda é do advogado do estabelecimento — desconfie de quem vender conformidade junto com o equipamento.'
			],
			subsecoes: [
				{
					h3: 'Cobertura por andar, quarto e área externa',
					paragrafos: [
						'O sinal morre em lugares previsíveis: parede de alvenaria antiga, poço de elevador, ala dos fundos, escada, área de piscina, deque externo e salão de eventos vazio de móveis e cheio de gente. O hóspede não avalia o hotel inteiro — avalia o quarto em que ele dormiu, e é por isso que a cobertura precisa ser tratada área por área.',
						'Antes de qualquer proposta, o que vale levantar é onde o sinal falha hoje: andar por andar, dentro do quarto, no salão e nas áreas externas em uso. É essa lista, somada à viabilidade que o consultor checa no endereço, que mostra o que está coberto e onde faltam pontos de acesso. Sem ela, qualquer promessa de "Wi-Fi em todo o hotel" é chute — e o hóspede confere o chute na primeira noite.'
					]
				},
				{
					h3: 'Alta ocupação, evento e check-in em bloco',
					paragrafos: [
						'A média de ocupação não serve para dimensionar hotelaria. O que dimensiona é o pior cenário conhecido: um ônibus chegando junto, um evento no salão, um feriado prolongado com a casa cheia e todo mundo conectado ao mesmo tempo depois do jantar.',
						'No food service, o equivalente é o pico do almoço e a noite de sexta. Rede que funciona numa terça às três da tarde não diz nada sobre a operação; o único teste que importa é o do salão cheio com o delivery rodando em paralelo.'
					]
				}
			]
		},
		{
			id: 'rede-operacional',
			h2: 'A rede operacional que não pode cair',
			paragrafos: [
				'Do lado da operação, a lista de dependências é maior do que parece: PDV e comanda eletrônica, integração com aplicativos de delivery, sistema de gestão hoteleira e motor de reservas, fechadura eletrônica e controle de acesso, câmeras e a própria maquininha. Cada um falha de um jeito diferente, e alguns falham sem avisar ninguém.',
				'Falhar em silêncio é o pior modo. O motor de reservas que não sincroniza pode vender duas vezes o mesmo quarto; a comanda que não sobe atrasa a cozinha sem que ninguém entenda por quê; e o pedido de delivery que não chega não gera erro nenhum na tela. A única evidência é o faturamento menor no fechamento do dia.'
			],
			subsecoes: [
				{
					h3: 'Delivery e marketplace: a venda que some sem aviso',
					paragrafos: [
						'Quando a conexão cai, o aplicativo de delivery não avisa o restaurante que parou de receber pedido: ele apenas deixa de exibir a loja como disponível, ou exibe e o pedido não chega ao tablet. O cliente escolhe outro restaurante e ninguém no salão percebe nada de anormal na operação.',
						'É o argumento mais forte para comutação automática em food service. Diferente do salão, onde uma queda vira fila visível e a equipe reage na hora, o delivery perde receita de forma invisível — e a perda só aparece quando alguém compara o dia com o mesmo dia da semana anterior, já sem chance de recuperar.'
					]
				}
			]
		},
		{
			id: 'recepcao-e-reserva',
			h2: 'Recepção, reserva e comunicação entre setores',
			paragrafos: [
				'O telefone da recepção continua sendo canal de reserva, de confirmação e de resolução de problema, e é o número publicado em site, plataforma de reserva e placa de fachada. Perder essa chamada é diferente de perder um contato qualquer: é uma diária que não foi vendida ou um hóspede insatisfeito que não conseguiu falar com ninguém.',
				'Internamente, a comunicação entre recepção, cozinha, governança e manutenção passa pela mesma infraestrutura. Quando o atendimento telefônico está em ramais que dependem da internet, uma queda derruba o telefone junto com o sistema — a menos que exista uma saída móvel de contingência prevista no desenho. É um ponto que costuma passar despercebido até o dia em que acontece, invariavelmente num fim de semana cheio, e por isso vale levantá-lo com o consultor antes de assinar.',
				'A portabilidade preserva o número já divulgado, e é isso que permite trocar de operadora sem alterar nada do que está publicado em site, em plataforma de reserva ou em material impresso.'
			]
		},
		{
			id: 'comparativo',
			h2: 'Quatro perfis de operação e o que muda em cada um',
			paragrafos: [
				'Os arranjos abaixo variam conforme duas coisas: quantas pessoas se conectam ao mesmo tempo no pico e o quanto a operação perde por hora parada — que, no delivery, é uma perda que ninguém enxerga no momento em que ocorre.'
			],
			tabela: {
				head: ['Perfil', 'Rede de hóspede ou cliente', 'Rede operacional', 'Redundância', 'Telefonia'],
				rows: [
					[
						'Restaurante de rua',
						'Wi-Fi de salão com portal de acesso',
						'PDV e comanda em rede própria',
						'Caminho móvel para o caixa',
						'Linha de reserva e retirada'
					],
					[
						'Restaurante com delivery forte',
						'Wi-Fi de salão segregado da operação',
						'PDV, comanda e integração com aplicativos',
						'Comutação automática, testada na entrega',
						'Linha publicada nos aplicativos'
					],
					[
						'Pousada de pequeno porte',
						'Cobertura checada por quarto e área externa',
						'Reservas, PDV do café e câmeras',
						'Caminho móvel para o motor de reservas',
						'Recepção com número portado'
					],
					[
						'Hotel de médio ou grande porte',
						'Cobertura por andar, com folga para evento',
						'Gestão hoteleira, acesso, câmeras e PDV',
						'Comutação automática como padrão',
						'Ramais entre setores, com contingência'
					]
				],
				caption:
					'Comparação de arranjos técnicos, sem valores: o desenho depende das áreas que precisam de cobertura, do número de unidades habitacionais ou de mesas e da viabilidade no endereço. O arranjo final só se fecha depois de um consultor checar a viabilidade no local.'
			}
		},
		{
			id: 'checklist',
			h2: 'Dez itens para a rede não virar reclamação pública',
			paragrafos: [
				'Passe a lista para qualquer fornecedor que estiver cotando a sua operação. São os pontos que reaparecem na avaliação do hóspede e no fechamento do caixa — nunca na apresentação comercial.'
			],
			checklist: {
				titulo: 'Dez itens antes de fechar o contrato do hotel ou do restaurante',
				intro: 'Exija a cobertura prometida por escrito, área por área, antes de assinar: o que está no papel é verificável, a promessa verbal não é.',
				itens: [
					'Rede de hóspede isolada da rede do caixa e do sistema de gestão',
					'Portal de acesso com identificação e aceite de termo de uso',
					'Guarda de registro de conexão prevista no desenho da rede',
					'Cobertura prometida por escrito, por andar, quarto e área externa',
					'Capacidade dimensionada para ocupação máxima e evento',
					'PDV, comanda e reservas com prioridade sobre o entretenimento',
					'Comutação automática cobrindo a integração com o delivery',
					'Câmeras com espaço garantido na banda de subida',
					'Telefone de reserva portado, sem mudar o número publicado',
					'Quem atende no fim de semana e no feriado, e em quanto tempo'
				]
			}
		},
		{
			id: 'o-que-define-o-investimento',
			h2: 'O que define o investimento em hotelaria e food service',
			paragrafos: [
				'Também aqui não publicamos valores, e o motivo é físico antes de ser comercial: duas pousadas com o mesmo número de quartos podem exigir projetos muito diferentes porque prédio antigo de alvenaria espessa e construção nova em bloco leve não se comportam igual — e essa diferença só aparece quando alguém olha o imóvel, nunca no telefone.',
				'O que dá para antecipar é a relação do que será cotado. Nela, as áreas que precisam de cobertura pesam mais que qualquer outro ponto, e a última da lista — a área externa — amplia a cobertura necessária sem aumentar em nada o número de quartos.'
			],
			lista: [
				'Número de unidades habitacionais ou de mesas atendidas',
				'Áreas a cobrir, incluindo as externas, e a viabilidade checada no local',
				'Capacidade exigida no pico de ocupação e em dia de evento',
				'Segmentação das redes e portal de acesso do hóspede',
				'Comutação automática, sobretudo com delivery integrado',
				'Telefonia da recepção e viabilidade técnica no endereço'
			]
		}
	],

	passos: {
		titulo: 'Como avança o projeto de um hotel ou restaurante',
		subtitulo:
			'Quatro etapas, nesta ordem. A checagem de viabilidade vem antes da proposta porque cobertura prometida sem ninguém olhar o local é o que mais gera reclamação depois da instalação.',
		itens: [
			{
				title: 'Viabilidade checada e áreas de uso levantadas',
				text: 'Um consultor checa a viabilidade no endereço e levanta com você onde o hóspede e o cliente ficam: quarto, corredor, salão, cozinha, recepção e áreas externas em uso. É essa lista que mostra o que já está coberto e onde falta ponto de acesso.'
			},
			{
				title: 'Desenho das duas redes',
				text: 'O arranjo separa a rede de hóspede da rede operacional, define a prioridade de cada uma e posiciona o portal de acesso. É aqui que a exigência de registro de conexão deixa de ser preocupação abstrata e vira configuração.'
			},
			{
				title: 'Proposta comparando os arranjos viáveis',
				text: 'Confirmado o que chega ao endereço, os arranjos viáveis são apresentados lado a lado, com o que cada um resolve e o que deixa de fora — inclusive a opção de aproveitar parte da estrutura que já existe.'
			},
			{
				title: 'Janela de ativação combinada antes',
				text: 'Instalação e portabilidade têm janela: combine com o consultor o agendamento fora do horário de maior movimento e a ordem de desligamento, com a estrutura antiga saindo do ar só depois de a nova ser validada. É o que evita fechar o restaurante ou deixar de receber hóspede.'
			}
		]
	},

	objecoes: [
		{
			q: '“O roteador da recepção cobre o hotel inteiro.”',
			a: 'Quase nunca cobre, e um teste rápido com o celular na mão mostra isso em poucos minutos. Alvenaria espessa, poço de elevador, ala dos fundos e área externa são pontos onde o sinal cai de forma previsível. O hóspede não avalia a média do prédio: avalia o quarto em que ele ficou, e é essa avaliação que fica publicada.'
		},
		{
			q: '“O hóspede usa o 4G dele mesmo.”',
			a: 'Parte usa. O problema é que a menção ao Wi-Fi aparece na avaliação pública justamente de quem não conseguiu usar, e ela fica visível para todo mundo que vai reservar depois. Além disso, hóspede estrangeiro sem plano local e viajante a trabalho com equipamento da empresa costumam depender do Wi-Fi para trabalhar do quarto.'
		},
		{
			q: '“Wi-Fi grátis é custo, não receita.”',
			a: 'É custo, sim — como o café da manhã. A pergunta útil não é se ele gera receita direta, e sim quanto custa a diária que não foi vendida porque a avaliação anterior mencionou internet ruim. Só o hotel tem esse número, e vale calculá-lo antes de decidir cortar.'
		},
		{
			q: '“Se cair, a gente anota o pedido no papel.”',
			a: 'No salão, funciona. No delivery, não existe papel: o pedido simplesmente não chega e o cliente pede em outro lugar. É a diferença entre uma queda visível, que a equipe contorna na hora, e uma perda silenciosa, que ninguém percebe até o fechamento do caixa.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'A regra de desenho desta página é própria e explícita: rede de hóspede e rede operacional nunca compartilham o mesmo ambiente, mesmo quando compartilham o mesmo link. É a primeira coisa a verificar em qualquer estabelecimento que já tem rede instalada, e é onde costuma estar o maior número de problemas herdados.',
			'A segunda é o que prometemos, e só isso: nenhuma proposta sai antes de um consultor checar a viabilidade no endereço e as áreas que precisam de cobertura — andar, quarto, salão e externas. Cobertura fechada por telefone, sem ninguém olhar o local, é a origem da maior parte das reclamações que ouvimos em hotelaria.'
		]
	},

	faqTitulo: 'Dúvidas de quem administra hotel, pousada e restaurante',
	faq: [
		{
			q: 'Preciso separar o Wi-Fi do hóspede do sistema do caixa?',
			a: 'Sim. Além do risco de expor a operação a dispositivo desconhecido, hóspede consumindo vídeo na mesma rede do PDV compete pela mesma capacidade. São redes distintas sobre o mesmo link, com prioridade para a operação.'
		},
		{
			q: 'Preciso guardar registro de quem usou o Wi-Fi do estabelecimento?',
			a: 'O Marco Civil da Internet trata da guarda de registros de conexão, e a forma prática de sustentar isso é um portal de acesso que identifica o usuário. A rede precisa ser desenhada para suportar a exigência; a validação jurídica do termo e do prazo é do advogado do estabelecimento.'
		},
		{
			q: 'O que acontece com o delivery se a internet cair?',
			a: 'Sem caminho alternativo, o pedido não chega e ninguém é avisado. É a falha mais cara do food service justamente por ser silenciosa, e o argumento mais direto para comutação automática.'
		},
		{
			q: 'Dá para instalar sem fechar o restaurante ou o hotel?',
			a: 'Sim, desde que a janela seja combinada antes: ativação agendada fora do horário de pico e estrutura antiga desligada só depois de a nova estar validada em operação. É o primeiro ponto a alinhar com o consultor.'
		},
		{
			q: 'Como saber se o hotel precisa de mais pontos de acesso?',
			a: 'Pela cobertura real dentro de cada quarto e de cada área, checada no local. É onde o sinal cai que define quantos pontos faltam — não o número de quartos nem a metragem do prédio.'
		}
	],

	cta: {
		titulo: 'Fale com um consultor sobre o seu hotel ou restaurante',
		texto:
			'Um consultor checa a viabilidade no endereço e levanta com você as áreas que precisam de cobertura antes de apresentar qualquer proposta. A conversa não tem custo e não obriga a contratar.'
	},

	service: {
		name: 'Conectividade e telefonia para hotéis, pousadas e restaurantes',
		serviceType: 'Conectividade empresarial para hotelaria e food service',
		description:
			'Projeto de internet e telefonia para hotéis, pousadas, bares e restaurantes: medição de sinal por área, rede de hóspede segregada da rede operacional, comutação automática para PDV e delivery e portabilidade do telefone de reservas.'
	},

	relacionadas: [
		'internet-para-redes-de-lojas-e-varejo',
		'internet-5g-para-empresas-sem-fibra-no-endereco',
		'auditoria-de-fatura-de-telecom'
	],
	artigos: [
		'tim-ultra-fibra-empresarial-vale-a-pena',
		'tim-ultra-fibra-voip-requisitos-qos',
		'internet-backup-tim-empresas-4g-5g-failover',
		'tim-fibra-empresarial-vs-banda-larga-residencial-quando-vale-a-pena-pagar-mais'
	]
};
