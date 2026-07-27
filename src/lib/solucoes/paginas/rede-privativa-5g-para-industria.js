// LP 8 — Cluster conectividade. Keyword primária: "rede privativa 5G".
//
// Ângulo de conversão: QUALIFICAÇÃO, NÃO FECHAMENTO. Ciclo longo, comitê
// decisor, projeto de engenharia com piloto e fases. Ninguém assina isso na
// primeira visita, e a página não finge o contrário: ela separa quem tem um
// problema que só a rede privativa resolve de quem tem um problema de Wi-Fi mal
// projetado — e diz isso na cara, porque dizer é o que constrói a conversa
// seguinte. O CTA é agenda técnica, não orçamento.
//
// ⚠ Página de autoridade do cluster industrial. Volume de busca é baixo e não
// medido. Se em 90 dias não houver impressão no GSC, mantém-se como página de
// posicionamento e não de aquisição — não é motivo para inflar o texto.
//
// ⚠ REVISAR ANTES DE PUBLICAR: o escopo declarado na seção "Onde entra o Grupo
// OC" precisa bater exatamente com o que a equipe executa neste tipo de
// projeto. Prometer engenharia de radiofrequência que não se faz é o erro mais
// caro que esta página poderia cometer.
//
// ⚠ REVISAR: o texto trata espectro e arquitetura em termos gerais, de
// propósito — nenhuma faixa, banda ou modelo de licenciamento é citado, porque
// isso depende de regulação vigente e do desenho aprovado com a operadora.
// Se a equipe quiser detalhar, valide com a engenharia antes.

export default {
	slug: 'rede-privativa-5g-para-industria',
	cluster: 'conectividade',
	ordem: 3,

	title: 'Rede Privativa 5G para Indústria | TIM Empresas',
	description:
		'Rede privativa 5G para indústria: cobertura controlada no chão de fábrica, latência previsível e dados que não saem da planta. Fale com um consultor.',
	keywords:
		'rede privativa 5G, rede 5G privada para indústria, 5G privativo no Brasil, network slicing para empresa, conectividade dedicada para chão de fábrica, 5G industrial',
	keywordPrimaria: 'rede privativa 5G',

	h1: 'Rede 5G dentro da planta: quando faz sentido e o que precisa existir antes',

	cardTitulo: 'Rede privativa 5G',
	cardTexto:
		'Cobertura controlada no chão de fábrica, mobilidade de ativos e dado que pode ficar na planta — mais o critério honesto de quando o Wi-Fi industrial já resolve.',

	hero: {
		eyebrow: 'Rede privativa 5G',
		sub: 'Uma rede móvel dedicada à sua planta, com cobertura, capacidade e prioridade sob controle da operação — e não do tráfego da cidade. É projeto de engenharia, com levantamento, piloto e fases. A primeira entrega honesta de qualquer fornecedor é dizer se a sua planta precisa disso.',
		bullets: [
			'Critério claro de quando o Wi-Fi industrial já resolve',
			'O que precisa ser levantado antes de abrir o projeto',
			'Escopo declarado: onde entra o canal e onde entra a engenharia',
			'Conversa técnica agendada, não proposta de prateleira'
		],
		ctaPrimario: 'Agendar conversa técnica',
		whatsapp:
			'Olá! Quero avaliar um projeto de rede privativa 5G para a nossa planta. Podem me orientar?',
		cartaoTitulo: 'O que avaliamos primeiro'
	},

	keyFacts: [
		{
			label: 'O critério que decide',
			value: 'Ativo em movimento',
			nota: 'Sem ativo móvel crítico, o Wi-Fi industrial bem projetado quase sempre resolve — e é o que recomendamos.'
		},
		{
			label: 'O que a planta ganha',
			value: 'Previsibilidade',
			nota: 'Não é velocidade de pico: é comportamento estável de cobertura e prioridade dentro do site.'
		},
		{
			label: 'Experiência',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC, representante autorizado TIM · 4,9 no Google · carteira que inclui a BYD'
		}
	],

	resumo:
		'Rede privativa 5G é uma rede móvel dedicada a uma planta, com cobertura, capacidade e prioridade sob controle da empresa e, conforme a arquitetura, com o dado processado dentro do próprio site. Resolve mobilidade de ativos, área extensa e ambiente hostil ao Wi-Fi. Na maior parte das fábricas, porém, o problema ainda se resolve com Wi-Fi industrial bem projetado — e vale checar isso primeiro.',

	secoes: [
		{
			id: 'o-que-e',
			h2: 'O que é uma rede privativa 5G',
			paragrafos: [
				'É uma rede móvel dedicada a um site — uma planta, um pátio, um complexo — em que a cobertura, a capacidade e a prioridade de tráfego são definidas pela empresa e não pela demanda da região. Os dispositivos se conectam como se conectariam à rede de uma operadora, mas o desenho da cobertura é feito para o layout da fábrica, e o tráfego não disputa espaço com o celular de quem passa na rua.',
				'A característica que costuma justificar o projeto não é velocidade: é controle. Controle de onde há cobertura, de qual aplicação tem prioridade quando a rede fica carregada e, conforme a arquitetura escolhida, de onde o dado é processado — havendo desenhos em que ele permanece dentro da planta.',
				'A contrapartida é a complexidade. Rede privativa não é um produto que se ativa: é projeto de engenharia com levantamento de radiofrequência, definição de espectro, integração com a rede de TI e de automação, piloto e implantação em fases. Quem apresenta isso como contratação simples está simplificando o que vai cobrar depois.'
			]
		},
		{
			id: 'tres-saidas',
			h2: 'Rede privativa, fatia dedicada e Wi-Fi industrial: as três saídas',
			paragrafos: [
				'Antes de discutir rede privativa vale entender que ela é a mais pesada de três saídas possíveis, e que as três convivem bem na mesma planta. A pergunta correta não é qual é a melhor, e sim qual delas o seu problema exige.',
				'A primeira saída é o Wi-Fi industrial bem projetado, com levantamento de cobertura, pontos suficientes e equipamento adequado ao ambiente. Resolve a maior parte dos casos e é a que mais vemos ser descartada cedo demais — normalmente porque a rede atual foi instalada sem projeto e a conclusão virou “Wi-Fi não funciona aqui”.',
				'A segunda é a fatia dedicada dentro da rede pública, o chamado slicing: a empresa continua usando a rede da operadora, mas com tratamento diferenciado para o seu tráfego. Evita obra e projeto de rádio, e depende da cobertura pública existente no local. A terceira é a rede privativa propriamente dita, quando nem a cobertura pública nem o Wi-Fi dão conta do que a operação precisa.'
			]
		},
		{
			id: 'quando-precisa',
			h2: 'Quando uma planta realmente precisa',
			paragrafos: [
				'Existe um conjunto pequeno de situações em que a rede privativa deixa de ser exagero e passa a ser a única saída limpa. Elas têm um ponto em comum: alguma coisa importante se move, ou a área é grande demais para ser coberta com qualidade por rede sem fio convencional.'
			],
			lista: [
				'Veículos autônomos, empilhadeiras guiadas e robótica móvel dentro da planta',
				'Área extensa com pátio, área externa e galpões distantes entre si',
				'Ambiente com muita estrutura metálica, onde a propagação sofre e a cobertura fica irregular',
				'Requisito explícito de que o dado do processo não saia do site',
				'Densidade alta de sensores e dispositivos conectados em um mesmo trecho',
				'Operação em que a parada de um processo conectado tem custo direto e imediato'
			],
			subsecoes: [
				{
					h3: 'Latência previsível não é a mesma coisa que latência baixa',
					paragrafos: [
						'Boa parte do material comercial sobre 5G industrial fala em latência baixa, e o chão de fábrica raramente precisa disso. O que a automação precisa é de latência previsível: um comportamento que se repete igual, sempre, inclusive no pior momento do turno. Um sistema que responde de forma estável é operável; um que responde muito rápido quase sempre e trava de vez em quando não é.',
						'Essa distinção muda o critério de avaliação do projeto. Em vez de perguntar quanto a rede entrega no melhor caso, a pergunta útil é quanto ela varia entre o melhor e o pior caso, medida no ponto onde o equipamento trabalha. É o mesmo raciocínio que aplicamos em conectividade de escritório, com uma exigência bem maior de constância.'
					]
				},
				{
					h3: 'Cobertura em galpão, pátio e área externa',
					paragrafos: [
						'O Wi-Fi industrial escala bem em área fixa e delimitada. Ele começa a sofrer quando o ativo se desloca continuamente entre pontos de acesso, porque a transição entre eles é o momento frágil da tecnologia, e quando a área a cobrir cresce a ponto de exigir uma quantidade de pontos que ninguém quer manter.',
						'Pátio externo, corredor entre galpões, área de carregamento e docas costumam ser exatamente os lugares onde a cobertura Wi-Fi termina e o processo continua. Quando o mapa dos problemas relatados pela operação coincide com esses pontos, a conversa sobre rede móvel dentro da planta passa a fazer sentido técnico — e não antes disso.'
					]
				}
			]
		},
		{
			id: 'antes-do-projeto',
			h2: 'O que precisa existir antes de abrir o projeto',
			paragrafos: [
				'Projeto de rede privativa que começa pela escolha do fornecedor termina caro e atrasado. Antes de qualquer proposta, cinco coisas precisam estar levantadas — e nenhuma delas depende de operadora para começar.'
			],
			lista: [
				'Levantamento de radiofrequência do site, feito sobre o layout e os materiais da planta',
				'Inventário dos dispositivos que vão se conectar, com o que cada um exige da rede',
				'Definição de espectro e da arquitetura, incluindo onde o dado será processado',
				'Mapa de integração com a rede de TI e com a rede de automação existente',
				'Definição de quem opera a rede depois de pronta, com equipe própria ou contratada',
				'Critério de sucesso mensurável para o piloto, acordado antes de o piloto começar'
			]
		},
		{
			id: 'comparativo',
			h2: 'Wi-Fi industrial, fatia dedicada e rede privativa lado a lado',
			paragrafos: [
				'A tabela compara as três saídas pelos critérios que costumam decidir. Ela não traz valores e nem poderia: o custo de um projeto de rede privativa é definido pelo levantamento do site, não por catálogo.'
			],
			tabela: {
				head: [
					'Critério',
					'Wi-Fi industrial',
					'Fatia dedicada na rede pública',
					'Rede privativa 5G'
				],
				rows: [
					[
						'Cobertura',
						'Boa em áreas fixas; exige muitos pontos em área extensa',
						'A cobertura pública existente no local',
						'Projetada para a planta, incluindo pátio e área externa'
					],
					[
						'Comportamento sob carga',
						'Degrada quando o meio fica congestionado',
						'Tratamento diferenciado dentro da rede da operadora',
						'Definido pela própria empresa'
					],
					[
						'Ativo em movimento',
						'A transição entre pontos é o elo fraco',
						'Boa, é rede móvel',
						'Boa, com cobertura desenhada para as rotas internas'
					],
					[
						'Controle do dado',
						'Fica dentro da planta',
						'Trafega pela rede da operadora',
						'Pode permanecer no site, conforme a arquitetura'
					],
					[
						'Complexidade de implantação',
						'Baixa a média',
						'Média',
						'Alta: é projeto de engenharia em fases'
					],
					[
						'Indicação típica',
						'Escritório, áreas fixas e a maior parte dos casos',
						'Necessidade de prioridade sem obra no site',
						'Robótica móvel, área extensa e dado que não sai da planta'
					]
				],
				caption:
					'Comparação técnica, sem valores. As três convivem: é comum a planta manter o Wi-Fi no administrativo e usar a rede privativa apenas onde o ativo se move.'
			}
		},
		{
			id: 'checklist',
			h2: 'Perguntas antes de abrir um projeto de 5G privativo',
			paragrafos: [
				'Este é o roteiro que usamos na primeira conversa técnica. Ele serve tanto para avançar quanto para concluir, com tranquilidade, que o projeto não se justifica agora — e essa segunda conclusão é frequente.'
			],
			checklist: {
				titulo: 'Dez perguntas para a reunião de qualificação',
				intro: 'Se as três primeiras não tiverem resposta, o projeto ainda não está pronto para nascer.',
				itens: [
					'Qual processo específico depende dessa conectividade para funcionar',
					'Qual é a perda concreta quando esse processo para',
					'Quantos dispositivos se movem pela planta e por quais rotas',
					'A rede sem fio atual foi projetada ou foi sendo instalada por partes',
					'O dado do processo pode sair da planta ou existe restrição formal',
					'Qual espectro está disponível para o desenho pretendido',
					'Quem vai operar a rede depois de pronta e com qual equipe',
					'Como a rede se integra à automação e à rede de TI já existentes',
					'Qual é o plano de contingência quando a rede nova apresentar falha',
					'Qual critério de sucesso encerra o piloto e libera a próxima fase'
				]
			}
		},
		{
			id: 'nosso-papel',
			h2: 'Onde entra o Grupo OC neste tipo de projeto',
			paragrafos: [
				'Vale ser explícito sobre escopo, porque este é o tipo de projeto em que promessa vaga custa caro. Atuamos como canal consultivo: conduzimos a qualificação técnica, organizamos as informações da planta que a engenharia vai precisar, articulamos a conversa com a operadora e acompanhamos o piloto e as fases seguintes junto ao cliente.',
				'O que não fazemos é o projeto de radiofrequência, a implantação da infraestrutura de rádio e a operação da rede depois de pronta. Isso é engenharia especializada, executada pela operadora e por seus parceiros de implantação. Nosso papel é garantir que a empresa chegue nessa mesa com o problema bem descrito, com o inventário levantado e com um critério de sucesso definido — o que costuma ser a diferença entre um projeto que anda e um que fica em avaliação por um ano.',
				'A parte mais útil dessa atuação, francamente, acontece antes: em boa parte das conversas concluímos junto com o cliente que o problema relatado é de projeto de rede sem fio convencional, e não de tecnologia. Encaminhar isso corretamente vale mais para a relação do que empurrar um projeto que não se sustentaria na avaliação interna do cliente.'
			]
		},
		{
			id: 'o-que-define-o-investimento',
			h2: 'O que define o investimento em uma rede privativa',
			paragrafos: [
				'Não existe tabela para este tipo de projeto, e desconfie de quem apresentar uma: o número sai do levantamento do site, porque duas plantas do mesmo tamanho podem exigir desenhos de cobertura completamente diferentes conforme o layout, os materiais e o que precisa ser coberto do lado de fora.',
				'O que dá para adiantar são as variáveis que compõem o custo. Elas explicam por que uma planta média com robótica móvel pode representar um projeto maior que uma planta grande com processos totalmente fixos.'
			],
			lista: [
				'Área a cobrir, incluindo pátio, área externa e trechos entre galpões',
				'Quantidade e tipo de dispositivos que vão se conectar à rede',
				'Arquitetura escolhida e a exigência de processamento dentro do site',
				'Nível de integração com a rede de TI e com a automação existente',
				'Fase de piloto: escopo, duração e critério de sucesso acordado',
				'Modelo de operação depois de pronta: equipe própria ou serviço contratado'
			]
		}
	],

	passos: {
		titulo: 'Como um projeto desses avança',
		subtitulo:
			'Quatro fases, nesta ordem. A primeira existe para descartar o projeto quando ele não se justifica — e é ela que economiza o tempo de todo mundo.',
		itens: [
			{
				title: 'Qualificação técnica do caso',
				text: 'Percorremos as dez perguntas do roteiro com a operação e com a TI. Saímos com uma de duas conclusões: o caso justifica rede privativa, ou o problema se resolve com projeto de rede sem fio convencional.'
			},
			{
				title: 'Levantamento e desenho com a engenharia',
				text: 'Organizamos layout, materiais da planta, inventário de dispositivos e restrições de dado, e levamos esse conjunto para a engenharia da operadora desenhar a solução. Sem esse material, o desenho vira estimativa.'
			},
			{
				title: 'Piloto com critério de sucesso definido',
				text: 'O piloto cobre uma área delimitada e um processo específico, com o critério de aprovação acordado antes de começar. Piloto sem critério prévio termina em discussão sobre percepção, não em decisão.'
			},
			{
				title: 'Implantação em fases e transferência de operação',
				text: 'A expansão acontece por fases, cada uma com escopo fechado, e o projeto só é encerrado quando está definido quem opera a rede no dia a dia e a quem a planta recorre em caso de falha.'
			}
		]
	},

	objecoes: [
		{
			q: '“Wi-Fi resolve, é mais simples.”',
			a: 'Na maior parte das plantas, resolve mesmo — e quando é o caso, dizemos isso. A verificação que vale fazer antes: a rede atual foi projetada com levantamento de cobertura ou foi crescendo por partes conforme a necessidade aparecia? Muita conclusão de que “Wi-Fi não funciona aqui” é, na verdade, um projeto que nunca existiu. Só depois dessa checagem a comparação com rede privativa fica honesta.'
		},
		{
			q: '“5G privativo ainda é experimental.”',
			a: 'A pergunta útil não é se a tecnologia está madura, e sim se o seu caso justifica o projeto e como o risco é controlado. Por isso a estrutura em fases, com piloto em área delimitada e critério de sucesso acordado antes de começar: o piloto é justamente o mecanismo que transforma opinião sobre maturidade em decisão baseada no comportamento da sua planta.'
		},
		{
			q: '“Não temos equipe para operar uma rede dessas.”',
			a: 'É uma objeção legítima e ela precisa ser resolvida no desenho, não depois. Existe modelo em que a operação fica com a empresa e modelo em que fica com o fornecedor, e a escolha muda o custo e a autonomia da planta. É por isso que “quem opera depois de pronta” é uma das dez perguntas de qualificação, e não um detalhe de implantação.'
		},
		{
			q: '“Nossa planta é pequena demais para isso.”',
			a: 'O critério não é o tamanho da planta, é o processo. Uma planta média com empilhadeiras guiadas e área externa relevante pode justificar mais que uma planta grande com processos totalmente fixos, em que o Wi-Fi bem projetado atende com folga. O tamanho entra na conta do custo, não na decisão sobre a necessidade.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira inclui operações industriais do porte da BYD — o que dá acesso ao tipo de conversa técnica que este projeto exige.',
			'A regra de decisão desta página é própria e vale explicitar: o critério que separa quem precisa de rede privativa de quem não precisa é a existência de ativo crítico em movimento dentro da planta. Sem ativo móvel relevante, um projeto de rede sem fio convencional bem executado quase sempre resolve — e é isso que recomendamos, mesmo sendo o caminho comercialmente menor.',
			'A segunda coisa que preferimos deixar clara é o limite do nosso escopo. Conduzimos a qualificação, organizamos o levantamento e articulamos a conversa com a engenharia da operadora; não executamos projeto de radiofrequência nem operamos a rede depois de implantada. Canal que promete engenharia que não faz cria expectativa que a implantação não sustenta.'
		]
	},

	faqTitulo: 'Dúvidas de quem avalia 5G privativo',
	faq: [
		{
			q: 'Rede privativa 5G substitui o Wi-Fi da fábrica?',
			a: 'Não necessariamente. Ela resolve mobilidade de ativos, área extensa e previsibilidade sob carga; o Wi-Fi continua atendendo bem escritório e áreas fixas. Boa parte dos projetos convive com as duas redes.'
		},
		{
			q: 'Os dados precisam sair da planta?',
			a: 'Depende da arquitetura escolhida: há desenhos em que o processamento permanece dentro do site. É uma das primeiras definições do projeto, porque muda o desenho inteiro.'
		},
		{
			q: 'Minha planta é média. Faz sentido avaliar?',
			a: 'O critério não é tamanho, é o processo que depende de conectividade móvel confiável. Uma planta média com veículos guiados pode justificar mais que uma planta grande sem ativos em movimento.'
		},
		{
			q: 'Quanto tempo leva um projeto desses?',
			a: 'É projeto de engenharia com levantamento, piloto e implantação em fases: o cronograma sai do levantamento do site, não de uma tabela. Qualquer prazo dado antes disso é chute.'
		},
		{
			q: 'Quem opera a rede depois de pronta?',
			a: 'Depende do modelo contratado: existe desenho com operação pela própria empresa e desenho com operação pelo fornecedor. A definição entra na qualificação, porque muda custo, autonomia e o plano de contingência.'
		}
	],

	cta: {
		titulo: 'Agende uma conversa técnica sobre a sua planta',
		texto:
			'Uma reunião com o roteiro de qualificação, junto com a sua operação e a sua TI. Saímos dela com uma conclusão clara: o caso justifica um projeto de rede privativa, ou o problema se resolve por um caminho mais simples. Sem compromisso.'
	},

	service: {
		name: 'Rede privativa 5G para indústria',
		serviceType: 'Rede privativa 5G',
		description:
			'Qualificação e condução de projetos de rede privativa 5G para plantas industriais: critério de necessidade, levantamento prévio do site, articulação com a engenharia da operadora e acompanhamento do piloto e das fases de implantação.'
	},

	relacionadas: [
		'telecom-para-industrias-em-sorocaba-e-regiao',
		'chip-m2m-para-rastreamento-e-telemetria',
		'plano-corporativo-para-grandes-empresas'
	],
	artigos: [
		'solucao-de-conectividade-tim-para-industrias-4-0-iot-cloud-e-edge-computing',
		'tim-corporativo-2026-iot-5g-eficiencia-industrial',
		'5g-tim-empresarial-velocidades-ultra-rapidas-latencia-baixa-iot-2025',
		'poder-rede-movel-tim-agronegocio-industria-4-0'
	]
};
