// LP 18 — Cluster local. Keyword primária: "internet empresarial Sorocaba".
//
// Ângulo de conversão: RESPOSTA A QUEM JÁ OUVIU "NÃO TEM". A SERP desta busca é
// disputada por provedores regionais e por páginas-cidade de operadoras — elenco
// completamente diferente do da LP 17, que é sobre marca e canal. Aqui a
// conversa é sobre PRODUTO e VIABILIDADE, e o gancho é o critério operacional:
// viabilidade é por ponto de atendimento, não por rua e não por CEP.
//
// ⚠ REVISAR ANTES DE PUBLICAR (1): o texto descreve regiões da cidade por TIPO
// (centro comercial, condomínio empresarial, borda industrial) e não por nome de
// bairro, de propósito — afirmar que existe ou não existe fibra em um bairro
// nomeado é um dado que envelhece e que não temos como sustentar. Se a equipe
// quiser nomear regiões, cada afirmação precisa ser confirmada antes.
//
// ⚠ REVISAR (2): o processo de consulta descrito na última seção (consulta em
// mais de uma tecnologia, visita quando o endereço é novo, proposta só depois da
// confirmação) precisa bater com o que o time faz de fato.
//
// ⚠ REVISAR (3): restrição de rede — "link dedicado" é termo-alvo de
// linkdedicada.com.br. Aqui ele aparece como COMPONENTE de arranjo técnico e
// nunca como alvo de title, H1 ou keyword. Não reintroduzir.

export default {
	slug: 'internet-empresarial-em-sorocaba',
	cluster: 'local',
	ordem: 2,

	title: 'Internet Empresarial em Sorocaba | Fibra e Backup',
	description:
		'Internet empresarial em Sorocaba: fibra corporativa, redundância e viabilidade avaliada por endereço, com consultor local. Consulte seu endereço.',
	keywords:
		'internet empresarial Sorocaba, internet para empresa em Sorocaba, fibra empresarial Sorocaba, internet corporativa Sorocaba, provedor de internet para empresa em Sorocaba, internet para escritório em Sorocaba',
	keywordPrimaria: 'internet empresarial Sorocaba',

	h1: 'Internet para empresas em Sorocaba: viabilidade avaliada rua a rua, não por CEP',

	cardTitulo: 'Internet empresarial em Sorocaba',
	cardTexto:
		'Por que duas empresas na mesma quadra recebem respostas diferentes de viabilidade — e o que checar antes de fechar contrato de internet na cidade.',

	hero: {
		eyebrow: 'Sorocaba · Conectividade',
		sub: 'Consulta de viabilidade feita pelo número do imóvel e em mais de uma tecnologia, com o arranjo escolhido a partir do que a sua operação não pode perder. Se a fibra não chegar ao endereço, existe caminho — e dizemos isso antes, não depois da assinatura.',
		bullets: [
			'Viabilidade confirmada por endereço, com número e complemento',
			'Comparação entre fibra empresarial e conexão pela rede móvel',
			'Redundância para a operação não parar durante o reparo',
			'Consultor em Sorocaba, com visita ao imóvel quando necessário'
		],
		ctaPrimario: 'Consultar viabilidade no meu endereço',
		whatsapp:
			'Olá! Quero consultar a viabilidade de internet empresarial no endereço da minha empresa em Sorocaba.',
		cartaoTitulo: 'O critério que decide'
	},

	keyFacts: [
		{
			label: 'Como se consulta viabilidade',
			value: 'Pelo número, não pelo CEP',
			nota: 'Endereços vizinhos podem ter respostas diferentes. Em prédio, a sala também entra na consulta.'
		},
		{
			label: 'O que separa empresarial de residencial',
			value: 'SLA e banda de subida',
			nota: 'Não é a velocidade anunciada. É o prazo de reparo contratado e o quanto o link envia.'
		},
		{
			label: 'Atendimento local',
			value: 'Consultor em Sorocaba',
			nota: 'Grupo OC, representante autorizado TIM · +15 anos · 4,9 no Google com 110 avaliações'
		}
	],

	resumo:
		'Internet empresarial em Sorocaba se resolve em duas perguntas: o que de fato chega ao número do seu imóvel e quanto tempo a sua operação aguenta parada. A primeira exige consulta de viabilidade por ponto de atendimento, em mais de uma tecnologia; a segunda define se o arranjo precisa de redundância, e não a velocidade contratada.',

	secoes: [
		{
			id: 'empresarial-ou-residencial',
			h2: 'O que separa internet empresarial de internet residencial',
			paragrafos: [
				'A diferença não está na velocidade. Existe plano residencial anunciado com número maior que o de um acesso empresarial, e ainda assim inadequado para uma empresa. O que separa os dois são quatro características contratuais e técnicas que raramente aparecem no material de divulgação — e que decidem como será o seu pior dia, não o dia normal.',
				'Em Sorocaba, a maioria das empresas que nos procura já tem internet funcionando. O motivo da procura quase nunca é falta de conexão: é a queda que voltou pela terceira vez, o atendimento que trata a empresa como consumidor comum, ou a descoberta de que ninguém sabe dizer em quanto tempo o serviço volta.'
			],
			lista: [
				'Banda de subida contratada, e não uma fração do download',
				'SLA com prazo de reparo por escrito, em vez de “o quanto antes”',
				'Fila de atendimento empresarial, separada da fila de consumidor',
				'IP fixo disponível quando o sistema da empresa exige origem conhecida',
				'Possibilidade de redundância para a operação seguir durante a falha'
			]
		},
		{
			id: 'viabilidade-por-endereco',
			h2: 'Por que a viabilidade muda de um número para o outro na mesma rua',
			paragrafos: [
				'Rede de acesso não é distribuída por bairro: ela chega por caixa, por poste e por rota de cabo. Uma empresa pode ter o vizinho de porta atendido e ela não, porque a caixa que serve aquele trecho está esgotada, porque o cabeamento entra pelo outro lado da quadra ou porque o imóvel dela nunca teve infraestrutura interna instalada. Por isso a consulta séria pede número e complemento, e não o CEP.',
				'Existe ainda o fator tempo, que quase ninguém considera: a resposta de viabilidade tem validade curta. Rede se expande, caixa é ampliada, rota nova é lançada. Ouvir “não tem” no ano passado não significa não ter hoje — e é uma das razões mais frequentes pelas quais vale reconsultar antes de renovar contrato com uma solução de contorno.'
			],
			subsecoes: [
				{
					h3: 'Quando a fibra realmente não chega',
					paragrafos: [
						'Acontece, e não é raro em endereço de borda da cidade, área industrial afastada do núcleo urbano ou imóvel recém-construído em loteamento novo. Nesses casos a saída costuma ser a conexão pela rede móvel, com antena externa quando o sinal interno é fraco, servindo como acesso principal ou como caminho de contingência até a rede fixa alcançar o local.',
						'A decisão entre esperar a expansão e resolver por outra tecnologia depende de uma pergunta simples: o que a empresa deixa de faturar enquanto espera. Quando a resposta é “nada”, esperar é defensável. Quando é “as vendas”, não é.'
					]
				},
				{
					h3: 'Prédios comerciais e condomínios empresariais',
					paragrafos: [
						'Em imóvel compartilhado, a viabilidade tem duas camadas. A primeira é a rede chegar até o prédio; a segunda é conseguir levar o cabo da entrada até a sua sala, o que envolve infraestrutura interna, tubulação disponível e autorização de quem administra o condomínio. É comum a operadora ter viabilidade e o projeto travar na segunda camada.',
						'Quando o imóvel é antigo, o ponto de entrada e o caminho interno viram o item mais demorado do cronograma. Levantar isso na visita, antes da assinatura, evita a situação em que o serviço está contratado e a instalação não avança por um motivo que não é técnico.'
					]
				},
				{
					h3: 'Endereços industriais e áreas de expansão',
					paragrafos: [
						'Sorocaba tem parque industrial e logístico relevante, e boa parte dele fica em áreas afastadas do centro comercial da cidade. São endereços com característica própria: terreno extenso, distância entre a portaria e a administração, galpão que interfere na propagação de sinal e, frequentemente, menos alternativas de rede fixa do que um escritório central teria.',
						'Para esse perfil existe uma página dedicada nesta seção, tratando planta industrial por ambiente. Aqui basta o alerta prático: em endereço industrial, confirmar viabilidade sem alguém no local costuma render surpresa na instalação.'
					]
				}
			]
		},
		{
			id: 'operadora-ou-provedor',
			h2: 'Operadora nacional ou provedor regional, em Sorocaba',
			paragrafos: [
				'Provedor regional costuma ter agilidade local e proximidade; operadora nacional costuma ter contrato mais estruturado, cobertura em outras cidades e escala de rede. Nenhum dos dois é melhor em abstrato, e quem afirma o contrário está vendendo, não comparando. A escolha depende de três variáveis objetivas.',
				'A primeira é o número de endereços: quem tem uma unidade decide diferente de quem tem filial em outra cidade e precisa de contrato único. A segunda é a exigência de SLA formal, comum quando existe sistema em nuvem ou cliente contratante que cobra disponibilidade. A terceira é o que acontece com o suporte no fim de semana — e essa só se descobre perguntando quem já é cliente.'
			]
		},
		{
			id: 'redundancia',
			h2: 'O que a empresa faz enquanto o reparo não chega',
			paragrafos: [
				'Toda conexão cai um dia. A pergunta útil não é se cai, é o que a operação faz enquanto não volta. Sem redundância, a resposta costuma ser “nada”: vendas param, emissão fiscal para, o sistema em nuvem fica inacessível e alguém vai improvisar roteando pelo celular de um funcionário, o que resolve mal e por pouco tempo.',
				'Redundância bem-feita é uma segunda saída, de tecnologia diferente da principal, com comutação automática. Se o acesso principal é fibra, o caminho reserva costuma ser a rede móvel — justamente porque uma falha de rota de cabo não afeta a rede de rádio. Uma segunda fibra do mesmo fornecedor pelo mesmo caminho não é redundância, é a mesma vulnerabilidade duplicada.'
			]
		},
		{
			id: 'arranjos',
			h2: 'Arranjos por perfil de empresa na cidade',
			paragrafos: [
				'Os arranjos abaixo são combinações técnicas, não pacotes. A escolha entre eles não é orçamentária: é sobre quanto tempo a operação aguenta parada e quantas pessoas dependem da conexão ao mesmo tempo.'
			],
			tabela: {
				head: ['Perfil da empresa', 'Arranjo usual', 'Precisa de redundância?', 'O que checar antes'],
				rows: [
					[
						'Escritório com equipe enxuta',
						'Fibra empresarial dimensionada por usuários simultâneos',
						'Desejável, nem sempre indispensável',
						'Banda de subida e fila de suporte empresarial'
					],
					[
						'Comércio de rua com vendas no balcão',
						'Fibra empresarial com saída móvel de contingência',
						'Sim — a queda para o pagamento',
						'O que acontece com a maquininha e a emissão fiscal na queda'
					],
					[
						'Empresa com sistema e arquivos em nuvem',
						'Fibra empresarial com upload dimensionado e IP fixo',
						'Sim',
						'Se o sistema exige origem conhecida ou acesso por VPN'
					],
					[
						'Operação que não pode parar',
						'Acesso com banda garantida e segundo caminho automático',
						'Sim, com comutação automática',
						'SLA por escrito, prazo de reparo e quem atende de madrugada'
					]
				],
				caption:
					'Comparação de arranjos técnicos, sem valores: a combinação viável depende do que chega ao endereço. A proposta é montada caso a caso, depois da consulta de viabilidade.'
			}
		},
		{
			id: 'checklist',
			h2: 'Dez itens antes de fechar internet empresarial na cidade',
			paragrafos: [
				'Esta lista vale para qualquer fornecedor, inclusive quando a proposta não é nossa. São os pontos que costumam aparecer depois — com o contrato assinado e a empresa descobrindo a limitação no dia em que mais precisava dela.'
			],
			checklist: {
				titulo: 'Peça tudo por escrito antes de assinar',
				intro:
					'Fornecedor que responde os dez itens por escrito é um bom sinal, independentemente do preço. Fornecedor que responde “depois a gente vê” é um mau sinal, também independentemente do preço.',
				itens: [
					'Viabilidade confirmada no número exato do imóvel, com complemento',
					'Qual tecnologia entrega o acesso e por qual caminho ele chega',
					'Banda de subida contratada, não só a de descida',
					'SLA e prazo de reparo declarados por escrito',
					'IP fixo disponível, se algum sistema exigir',
					'Prazo de instalação com data, não com estimativa verbal',
					'Autorização do condomínio, quando o imóvel é compartilhado',
					'Onde fica o ponto de entrada e quem passa o cabo interno',
					'Se existe backup e se a comutação é automática ou manual',
					'Prazo de contrato, renovação e condição para encerrar'
				]
			}
		},
		{
			id: 'como-consultamos',
			h2: 'Como consultamos viabilidade antes de propor qualquer coisa',
			paragrafos: [
				'A consulta é feita com o endereço completo e em mais de uma tecnologia, porque a resposta positiva de uma não elimina a necessidade de comparar com a outra. Quando o endereço é novo, em imóvel antigo ou em área industrial, marcamos visita: metade dos problemas de instalação que já vimos estava visível na porta do prédio.',
				'Só depois disso escrevemos proposta. É uma ordem que às vezes custa velocidade na primeira semana e economiza semanas depois — proposta emitida antes da confirmação é a origem mais comum de instalação que não acontece, e quem paga por ela é sempre a operação do cliente.'
			]
		}
	],

	passos: {
		titulo: 'Da consulta ao link no ar',
		subtitulo:
			'Quatro etapas na ordem em que reduzem risco. A confirmação técnica vem antes da proposta, não depois dela.',
		itens: [
			{
				title: 'Consulta por endereço',
				text: 'Levantamos o endereço com número e complemento e consultamos o que chega ali em mais de uma tecnologia. É a etapa em que descobrimos se a conversa é sobre fibra, sobre rede móvel ou sobre os dois.'
			},
			{
				title: 'Visita quando o endereço pede',
				text: 'Imóvel antigo, prédio compartilhado, galpão ou endereço em área de expansão: nesses casos alguém vai ao local ver ponto de entrada, caminho interno e cobertura de sinal antes de qualquer promessa.'
			},
			{
				title: 'Proposta com os arranjos lado a lado',
				text: 'Apresentamos o que é viável no seu endereço, com o que cada arranjo resolve, o que deixa de fora e onde entra redundância. A decisão fica sua, com as alternativas visíveis.'
			},
			{
				title: 'Instalação acompanhada',
				text: 'Agendamento, acompanhamento da equipe técnica e validação com a empresa rodando. Quando há troca de fornecedor, o serviço antigo só é desligado depois que o novo está funcionando.'
			}
		]
	},

	objecoes: [
		{
			q: '“Meu provedor atual custa menos.”',
			a: 'Pode custar mesmo, e nem sempre é errado ficar. A comparação honesta inclui o que não está na mensalidade: prazo de reparo por escrito, banda de subida contratada, fila de atendimento e o custo de uma tarde parada. Se, feita essa conta, o atual continua vantajoso, dizemos isso — e a conversa termina aí sem problema.'
		},
		{
			q: '“Já me disseram que não tem viabilidade no meu endereço.”',
			a: 'Vale reconsultar. Resposta de viabilidade tem validade curta, rede se expande e caixa é ampliada. Além disso, muitas negativas vêm de consulta feita por CEP ou por rua, sem número e sem complemento — o que é uma consulta diferente. E, se realmente não houver rede fixa, existe caminho pela rede móvel.'
		},
		{
			q: '“É prédio antigo, não tem estrutura para passar cabo.”',
			a: 'Em geral tem, com adaptação. O que muda é o prazo: ponto de entrada, tubulação disponível e autorização de quem administra o condomínio entram no cronograma. É exatamente por isso que esse levantamento é feito na visita, antes de assinar, e não no dia da instalação.'
		},
		{
			q: '“Instalação de internet empresarial demora demais.”',
			a: 'Demora quando o projeto começa pela proposta em vez de começar pela viabilidade. Confirmar o que chega ao endereço, o caminho interno e a autorização do imóvel antes da assinatura é o que evita o cronograma que trava na metade. O prazo continua sendo da operadora, mas deixa de ser surpresa.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em telecom empresarial e é representante autorizado TIM, com operação conduzida de Sorocaba — Rua Tereza Lopes, 677, Vila Hortência, CNPJ 23.474.830/0001-56. As 110 avaliações com nota 4,9 no perfil público do Google podem ser lidas por quem quiser conferir antes de ligar.',
			'A regra de decisão que orienta a página é própria e vale explicitar: viabilidade é por ponto de atendimento, não por CEP, e proposta só depois da confirmação. Vem de repetição — a maior parte das instalações que atrasam foi vendida antes de alguém confirmar o que chegava ao imóvel.',
			'Também não vendemos a ideia de que existe uma tecnologia superior em qualquer situação. Fibra e rede móvel resolvem problemas diferentes e, com frequência, o arranjo correto usa as duas: uma como caminho principal, outra como garantia de que a empresa continua atendendo enquanto o reparo acontece.'
		]
	},

	faqTitulo: 'Dúvidas sobre internet empresarial em Sorocaba',
	faq: [
		{
			q: 'Como sei se tem fibra empresarial no meu endereço em Sorocaba?',
			a: 'A consulta é feita com o endereço completo, incluindo número e complemento, porque a viabilidade é por ponto de atendimento e não por rua ou CEP. Em prédio comercial, a sala também entra na consulta.'
		},
		{
			q: 'Internet residencial serve para uma empresa pequena?',
			a: 'Serve enquanto nada dá errado. O que falta nela é o que importa no dia ruim: prazo de reparo contratado, banda de subida garantida e uma fila de atendimento que trate a empresa como empresa.'
		},
		{
			q: 'Provedor regional ou operadora nacional, em Sorocaba?',
			a: 'Depende de ter uma ou várias unidades, de precisar ou não de SLA formal e do comportamento do suporte fora do horário comercial. Há uma página específica desta seção comparando os dois caminhos com critérios objetivos.'
		},
		{
			q: 'Quanto tempo leva a instalação?',
			a: 'Varia com a tecnologia e com a necessidade de rede nova ou de infraestrutura interna no imóvel. O prazo entra por escrito na proposta; quando o endereço exige obra de entrada, isso é informado antes da assinatura.'
		},
		{
			q: 'Vocês atendem só a cidade de Sorocaba?',
			a: 'Presencialmente atendemos Sorocaba e as cidades do entorno; remotamente, todo o país. Para empresas fora da cidade há uma página específica explicando como funciona o atendimento no eixo da região.'
		}
	],

	cta: {
		titulo: 'Consulte a viabilidade do seu endereço em Sorocaba',
		texto:
			'Informe o endereço com número e complemento e o consultor verifica o que chega ao imóvel em mais de uma tecnologia antes de qualquer proposta. Sem custo e sem compromisso de troca.'
	},

	service: {
		name: 'Internet empresarial em Sorocaba',
		serviceType: 'Conectividade corporativa',
		description:
			'Projeto de internet empresarial para empresas de Sorocaba: consulta de viabilidade por ponto de atendimento, comparação entre fibra empresarial e conexão pela rede móvel, redundância com comutação automática e acompanhamento da instalação.',
		areaServed: {
			'@type': 'City',
			name: 'Sorocaba',
			containedInPlace: { '@type': 'AdministrativeArea', name: 'São Paulo' }
		}
	},

	relacionadas: [
		'internet-5g-para-empresas-sem-fibra-no-endereco',
		'operadora-nacional-ou-provedor-regional',
		'tim-empresas-em-sorocaba'
	],
	artigos: [
		'tim-fibra-empresarial-vs-banda-larga-residencial-quando-vale-a-pena-pagar-mais',
		'tim-ultra-fibra-checklist-contratacao-homologacao',
		'tim-ultra-fibra-dimensionar-velocidade-empresa',
		'alternativas-a-banda-larga-residencial-para-empresas-que-sofrem-com-queda-de-conexao'
	]
};
