// LP 5 — Cluster verticais. Keyword primária: "internet para hotel".
//
// Ângulo de conversão: REPUTAÇÃO PÚBLICA somada ao pedido de delivery que nunca
// chega. Hoteleiro e dono de restaurante não compram banda: compram avaliação
// sem menção a Wi-Fi ruim e caixa que não trava no salão cheio. O gancho é a
// medição de sinal por área — entregável concreto que quem vende plano por
// telefone não tem como oferecer.
//
// ⚠ REVISAR ANTES DE PUBLICAR: a medição de sinal por área antes da proposta, a
// regra das duas redes e a ativação agendada fora do horário de pico descrevem o
// processo do Grupo OC. Confirme com a equipe. A menção ao Marco Civil da
// Internet é contextual e o texto diz isso explicitamente: a validação jurídica
// do termo de uso e do prazo de guarda é do advogado do estabelecimento.

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
		'Rede de hóspede e rede operacional nunca compartilham o mesmo ambiente. E cobertura prometida sem medição por área vira reclamação na primeira noite.',

	hero: {
		eyebrow: 'Hotéis, pousadas e restaurantes',
		sub: 'O hóspede avalia o Wi-Fi do quarto dele, não a média do hotel. E o pedido de delivery que não chega não gera erro nenhum na tela: some do faturamento em silêncio. Medimos sinal por área e desenhamos as duas redes antes de apresentar proposta.',
		bullets: [
			'Medição de sinal por andar, quarto, salão e área externa',
			'Rede de hóspede segregada da rede do caixa e do sistema',
			'Comutação automática cobrindo a integração com delivery',
			'Portabilidade do telefone publicado de reservas'
		],
		ctaPrimario: 'Agendar a medição de sinal',
		whatsapp:
			'Olá! Tenho um hotel/restaurante e quero avaliar o Wi-Fi e a internet da operação. Podem me ajudar?',
		cartaoTitulo: 'O que fazemos antes da proposta'
	},

	keyFacts: [
		{
			label: 'A regra que não se negocia',
			value: 'Duas redes, um link',
			nota: 'Hóspede e PDV nunca no mesmo ambiente: uma rede é conforto, a outra é a operação que não pode parar.'
		},
		{
			label: 'O que medimos antes',
			value: 'Sinal por área',
			nota: 'Andar, quarto, salão e área externa medidos antes da proposta — não depois da reclamação pública.'
		},
		{
			label: 'Experiência',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC, representante autorizado TIM · 4,9 no Google'
		}
	],

	resumo:
		'Hotel, pousada e restaurante precisam de duas redes sobre o mesmo link: a do hóspede ou cliente, que é atributo do produto vendido, e a operacional, onde rodam PDV, comanda, reservas e câmeras. A cobertura se define por medição de área — quarto, andar, salão e área externa —, e a comutação automática existe sobretudo por causa do delivery, que falha em silêncio.',

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
				'Desenhamos a rede para suportar essa exigência. A validação jurídica do texto do termo e do prazo de guarda é do advogado do estabelecimento — desconfie de quem vender conformidade junto com o equipamento.'
			],
			subsecoes: [
				{
					h3: 'Cobertura por andar, quarto e área externa',
					paragrafos: [
						'O sinal morre em lugares previsíveis: parede de alvenaria antiga, poço de elevador, ala dos fundos, escada, área de piscina, deque externo e salão de eventos vazio de móveis e cheio de gente. O hóspede não avalia o hotel inteiro — avalia o quarto em que ele dormiu, e é por isso que a medição precisa ser feita área por área.',
						'Antes de apresentar proposta, medimos o sinal andar por andar, dentro do quarto, no salão e nas áreas externas em uso. O resultado é um mapa do que está coberto hoje e de onde faltam pontos de acesso. Sem esse mapa, qualquer promessa de "Wi-Fi em todo o hotel" é chute — e o hóspede confere o chute na primeira noite.'
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
				'Internamente, a comunicação entre recepção, cozinha, governança e manutenção passa pela mesma infraestrutura. Quando o atendimento telefônico está em ramais que dependem da internet, uma queda derruba o telefone junto com o sistema — a menos que exista uma saída móvel de contingência prevista no desenho. É um ponto que verificamos sempre, porque costuma passar despercebido até o dia em que acontece, invariavelmente num fim de semana cheio.',
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
						'Cobertura medida por quarto e área externa',
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
					'Comparação de arranjos técnicos, sem valores: o desenho depende do resultado da medição de sinal, do número de unidades habitacionais ou de mesas e da viabilidade no endereço. O desenho final é definido pelo mapa de sinal medido no local.'
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
				intro: 'Exija o mapa de sinal antes de assinar: ele é verificável, a promessa verbal não é.',
				itens: [
					'Rede de hóspede isolada da rede do caixa e do sistema de gestão',
					'Portal de acesso com identificação e aceite de termo de uso',
					'Guarda de registro de conexão prevista no desenho da rede',
					'Mapa de sinal medido por andar, quarto e área externa',
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
				'Também aqui não publicamos valores, e o motivo é físico antes de ser comercial: duas pousadas com o mesmo número de quartos podem exigir projetos muito diferentes porque prédio antigo de alvenaria espessa e construção nova em bloco leve não se comportam igual — e essa diferença só aparece depois da medição, nunca no telefone.',
				'O que dá para antecipar é a relação do que será cotado. Nela, o resultado da medição pesa mais que qualquer outro ponto, e o último da lista — a área externa — amplia a cobertura necessária sem aumentar em nada o número de quartos.'
			],
			lista: [
				'Número de unidades habitacionais ou de mesas atendidas',
				'Áreas a cobrir, incluindo as externas, e o resultado da medição',
				'Capacidade exigida no pico de ocupação e em dia de evento',
				'Segmentação das redes e portal de acesso do hóspede',
				'Comutação automática, sobretudo com delivery integrado',
				'Telefonia da recepção e viabilidade técnica no endereço'
			]
		}
	],

	passos: {
		titulo: 'Como conduzimos o projeto de um hotel ou restaurante',
		subtitulo:
			'Quatro etapas, nesta ordem. A medição vem antes da proposta porque cobertura prometida sem medição é o que mais gera reclamação depois da instalação.',
		itens: [
			{
				title: 'Medição de sinal por área',
				text: 'Percorremos o estabelecimento medindo sinal onde o hóspede e o cliente ficam: quarto, corredor, salão, cozinha, recepção e áreas externas em uso. O mapa mostra o que está coberto hoje e onde faltam pontos de acesso.'
			},
			{
				title: 'Desenho das duas redes',
				text: 'Separamos, em projeto, a rede de hóspede da rede operacional, definimos a prioridade de cada uma e posicionamos o portal de acesso. É aqui que a exigência de registro de conexão deixa de ser preocupação abstrata e vira configuração.'
			},
			{
				title: 'Viabilidade e proposta comparando arranjos',
				text: 'Confirmamos o que chega ao endereço e apresentamos os arranjos viáveis lado a lado, com o que cada um resolve e o que deixa de fora — inclusive a opção de aproveitar parte da estrutura que já existe.'
			},
			{
				title: 'Ativação fora do horário de pico',
				text: 'Instalação e portabilidade são agendadas fora do horário de maior movimento, e a estrutura antiga só é desligada depois de a nova ser validada. O restaurante não fecha e o hotel não deixa de receber hóspede.'
			}
		]
	},

	objecoes: [
		{
			q: '“O roteador da recepção cobre o hotel inteiro.”',
			a: 'Quase nunca cobre, e a medição mostra isso em poucos minutos. Alvenaria espessa, poço de elevador, ala dos fundos e área externa são pontos onde o sinal cai de forma previsível. O hóspede não avalia a média do prédio: avalia o quarto em que ele ficou, e é essa avaliação que fica publicada.'
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
			'A regra de desenho desta página é própria e explícita: rede de hóspede e rede operacional nunca compartilham o mesmo ambiente, mesmo quando compartilham o mesmo link. É a primeira coisa que verificamos em qualquer estabelecimento que já tem rede instalada, e é onde encontramos o maior número de problemas herdados.',
			'A segunda é de método: medimos sinal por área — andar, quarto, salão e áreas externas — antes de apresentar proposta. É um entregável concreto, e ele existe porque promessa de cobertura feita por telefone é a origem da maior parte das reclamações que ouvimos em hotelaria.'
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
			a: 'O Marco Civil da Internet trata da guarda de registros de conexão, e a forma prática de sustentar isso é um portal de acesso que identifica o usuário. Desenhamos a rede para suportar a exigência; a validação jurídica do termo e do prazo é do advogado do estabelecimento.'
		},
		{
			q: 'O que acontece com o delivery se a internet cair?',
			a: 'Sem caminho alternativo, o pedido não chega e ninguém é avisado. É a falha mais cara do food service justamente por ser silenciosa, e o argumento mais direto para comutação automática.'
		},
		{
			q: 'Dá para instalar sem fechar o restaurante ou o hotel?',
			a: 'Sim. A ativação é agendada fora do horário de pico e a estrutura antiga só é desligada depois de a nova ser validada em operação.'
		},
		{
			q: 'Como saber se o hotel precisa de mais pontos de acesso?',
			a: 'Pela medição por área. O mapa de sinal mostra quarto a quarto e área a área onde a cobertura cai, e é ele que define quantos pontos faltam — não o número de quartos nem a metragem do prédio.'
		}
	],

	cta: {
		titulo: 'Agende a medição de sinal do seu hotel ou restaurante',
		texto:
			'Um consultor percorre o estabelecimento, mede o sinal por área e desenha as duas redes antes de apresentar qualquer proposta. A medição não tem custo e não obriga a contratar.'
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
