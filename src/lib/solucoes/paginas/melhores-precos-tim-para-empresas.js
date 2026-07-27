// LP 21 — Cluster preços, ordem 1. Keyword primária: "melhores preços TIM para
// empresas".
//
// PÁGINA ÚNICA para três variações da MESMA intenção: "melhores preços TIM
// corporativo", "melhores preços TIM empresarial" e "melhores preços TIM para
// empresas" devolvem a mesma SERP e são resolvidas aqui, como H2 e FAQ. Três
// páginas separadas seriam doorway — ver o comentário do cluster `precos` em
// ../index.js.
//
// Ângulo de conversão: MÉTODO DE COMPARAÇÃO, não valor. Quem busca "melhores
// preços" está com uma proposta na mão (ou prestes a pedir uma) e quer saber se
// está pagando demais. A resposta honesta de uma venda consultiva não é um
// número: é a régua para ler qualquer proposta — inclusive a nossa. O CTA é de
// baixo atrito (traga a proposta que você já tem), não "peça um orçamento".
//
// ⚠ R1 É CRÍTICA. Nenhum valor, faixa, percentual ou "a partir de". A página
// responde busca de preço com os FATORES que compõem o preço. Rode
// `node scripts/validar-lps.mjs` antes de publicar.
//
// ⚠ R5 — elemento não-gerável por IA: a regra de normalização em três eixos
// (mesmo prazo, mesmo escopo, mesmo perfil de uso) e o corolário de que proposta
// que não sobrevive à normalização não está pronta para ser comparada. Ela entra
// como RÉGUA PÚBLICA, aplicável por qualquer empresa sozinha — não como
// procedimento interno do Grupo OC.
//
// Separação do lote (senão as três viram doorway):
//   esta         → COMO COMPARAR propostas (método)
//   desconto-... → COMO SE FORMA a condição por volume (mecânica)
//   seu-negocio- → O QUE MUDA na operação depois de consolidar (resultado)
//
// A página não afirma procedimento interno. O que promete é o que é verdade: um
// consultor checa a operação (linhas, perfil de uso, endereços) antes de
// qualquer número, e a condição melhora conforme o volume — desconto progressivo
// a partir de dez linhas. O resto é régua pública, exigível de qualquer proposta.
//
// ⚠ REVISAR ANTES DE PUBLICAR:
// - confirmar a redação sobre validade de proposta e revalidação de condição.

export default {
	slug: 'melhores-precos-tim-para-empresas',
	cluster: 'precos',
	ordem: 1,

	title: 'Melhores Preços TIM para Empresas: Como Comparar',
	description:
		'Melhores preços TIM para empresas: o que define o valor de um contrato de telecom, por que comparar por linha engana e como ler qualquer proposta.',
	keywords:
		'melhores preços TIM para empresas, melhores preços TIM corporativo, melhores preços TIM empresarial, comparar proposta de telecom empresarial, como avaliar proposta de operadora para CNPJ, custo total de contrato de telefonia empresarial',
	keywordPrimaria: 'melhores preços TIM para empresas',

	h1: 'Melhores preços TIM para empresas: por que a comparação por linha engana',

	cardTitulo: 'Comparar propostas',
	cardTexto:
		'Preço de linha isolada é a métrica errada. O que decide é o custo total do contrato — e ele só aparece quando as propostas são normalizadas na mesma base.',

	hero: {
		eyebrow: 'Preços e propostas',
		sub: 'Você quer saber se está pagando demais. A resposta não cabe em uma tabela: telecom empresarial é vendido por proposta porque o valor depende de linhas, perfil de uso, combinação de móvel e fixo, prazo e viabilidade no endereço. O que dá para publicar é a régua — como ler qualquer proposta sem se enganar, inclusive a nossa.',
		bullets: [
			'Os fatores que realmente movem o valor de um contrato',
			'Por que comparar preço de linha isolada sai caro',
			'Normalização em três eixos: prazo, escopo e perfil',
			'Desconto progressivo por volume, a partir de dez linhas'
		],
		ctaPrimario: 'Trazer minha proposta para comparação',
		whatsapp:
			'Olá! Tenho uma proposta de telecom em mãos e quero entender se o valor está adequado. Podem comparar?',
		cartaoTitulo: 'A régua desta página'
	},

	keyFacts: [
		{
			label: 'A métrica errada',
			value: 'Preço por linha',
			nota: 'É o número que aparece maior na proposta e o que menos explica o que a empresa vai pagar no fim.'
		},
		{
			label: 'A métrica que decide',
			value: 'Custo total do contrato',
			nota: 'Recorrente, excedente, custo de mudança e prazo, somados sobre a mesma janela de tempo.'
		},
		{
			label: 'Quem responde por esta página',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC · CNPJ 23.474.830/0001-56 · Sorocaba/SP · 4,9 no Google com 110 avaliações'
		}
	],

	resumo:
		'Não existe tabela de preço de telecom empresarial porque o valor depende de quantidade de linhas, perfil de uso, combinação de móvel e fixo, prazo de contrato e viabilidade no endereço. Comparar propostas pelo preço da linha isolada é o erro mais caro do processo: o que decide é o custo total do contrato, normalizado no mesmo prazo, escopo e perfil de uso.',

	secoes: [
		{
			id: 'por-que-nao-ha-tabela',
			h2: 'Por que não existe tabela de preço em telecom empresarial',
			paragrafos: [
				'Telecom para CNPJ é vendido por proposta, e não por tabela, porque o mesmo pedido produz contratos diferentes conforme o que existe em volta dele. Duas empresas com o mesmo número de linhas recebem propostas distintas por motivos concretos: uma tem equipe em campo consumindo dados o mês inteiro e a outra tem time administrativo que quase não sai do escritório; uma precisa de internet fixa no mesmo contrato e a outra não; uma opera em endereço com viabilidade técnica plena e a outra não.',
				'O que dá para publicar com honestidade é a mecânica: quais variáveis movem o valor, em que direção cada uma o move e como comparar propostas de fornecedores diferentes sem se enganar. Se você chegou aqui procurando um número para levar à reunião, o que vai levar é melhor — a régua para saber se o número que já está na mesa faz sentido.'
			]
		},
		{
			id: 'erro-da-linha-isolada',
			h2: 'O erro clássico: comparar pelo preço da linha isolada',
			paragrafos: [
				'A comparação por linha é sedutora porque produz um número único, fácil de colocar lado a lado em um e-mail. E é justamente por ser fácil que ela engana: o preço da linha é a parte do contrato que menos varia entre fornecedores sérios e a que menos explica a conta que a empresa vai pagar todo mês.',
				'O valor da linha é a ponta visível de um arranjo em que quatro itens pesam mais: a franquia que a acompanha, o que acontece quando a franquia acaba, o que está incluído sem cobrança adicional e por quanto tempo a condição fica de pé. Uma proposta pode vencer no preço da linha e perder nos quatro.'
			],
			subsecoes: [
				{
					h3: 'A linha barata que exige o plano caro',
					paragrafos: [
						'O caso mais comum é a proposta que apresenta um valor de linha atraente amarrado a uma franquia curta demais para quem vai usar. O vendedor externo estoura a franquia na segunda semana, a empresa paga excedente, e o custo real daquela linha ao fim do mês não tem relação nenhuma com o número que fechou a negociação.'
					]
				},
				{
					h3: 'Franquias que não são comparáveis entre si',
					paragrafos: [
						'Duas propostas raramente descrevem a franquia da mesma forma. Uma trata a franquia como individual por linha; outra prevê compartilhamento entre as linhas do contrato; uma inclui aplicativos que não descontam da franquia e a outra não; uma trata o excedente com redução de velocidade e a outra com cobrança adicional.',
						'Colocar esses arranjos lado a lado sem traduzi-los para a mesma unidade é comparar coisas diferentes com a mesma etiqueta. Antes de perguntar qual é mais econômica, é preciso responder qual entrega o quê — e essa resposta quase nunca está na primeira página da proposta.'
					]
				}
			]
		},
		{
			id: 'custo-total',
			h2: 'O que entra no custo total de um contrato de telecom',
			paragrafos: [
				'Custo total é o que a empresa efetivamente desembolsa ao longo do contrato, e não o valor que aparece na proposta. A diferença entre os dois é onde moram as surpresas, e ela tem quatro componentes que precisam ser somados sobre a mesma janela de tempo para que a comparação signifique alguma coisa.',
				'Somar sobre a mesma janela é o detalhe que muda tudo: proposta de prazo curto e proposta de prazo longo não são comparáveis mês a mês. A de prazo longo costuma trazer condição melhor e menos flexibilidade, e a decisão depende de quanto a sua operação vai mudar nesse período.'
			],
			lista: [
				'Recorrente: o que é cobrado todo mês por linha, por acesso e por serviço',
				'Variável: excedente de franquia, roaming e chamadas fora do escopo',
				'Custo de mudança: ativação, instalação, portabilidade e tempo de equipe',
				'Custo de saída: o que acontece se for preciso encerrar antes do prazo'
			],
			subsecoes: [
				{
					h3: 'O excedente, que ninguém coloca na planilha',
					paragrafos: [
						'Excedente é o componente mais subestimado da conta porque não aparece na proposta — aparece na fatura, meses depois, concentrado sempre nos mesmos perfis de usuário. A forma de antecipá-lo é banal e quase nunca é feita antes de assinar: apurar o consumo médio de alguns ciclos por perfil de uso e projetá-lo sobre a franquia de cada proposta. Se a projeção estourar, aquela proposta não é a mais econômica, por menor que seja o valor da linha.'
					]
				}
			]
		},
		{
			id: 'variacoes-da-busca',
			h2: 'Melhores preços TIM corporativo, empresarial ou para empresas: muda alguma coisa?',
			paragrafos: [
				'As três buscas — "melhores preços TIM corporativo", "melhores preços TIM empresarial" e "melhores preços TIM para empresas" — descrevem a mesma pergunta com vocabulários diferentes, e é por isso que esta página responde às três em vez de existir em triplicata. Quem digita qualquer uma delas quer a mesma coisa: saber se o que está pagando, ou o que estão propondo, está adequado.',
				'A distinção que às vezes se ouve entre "corporativo" e "empresarial" não é diferença de tabela, e sim de porte de atendimento — e o que muda com o porte não é o preço da linha, é a quantidade de coisas que precisam ser combinadas. Uma empresa com uma dezena de linhas negocia volume e franquia; uma com centenas negocia também governança, rateio e ciclo de vida da linha.'
			]
		},
		{
			id: 'comparativo',
			h2: 'Três formas de comparar propostas, lado a lado',
			paragrafos: [
				'A tabela compara métodos de comparação, não fornecedores nem valores. Cada método detecta um tipo de diferença e é cego para outro, e a escolha entre eles depende do tamanho do parque e do tempo disponível para decidir.'
			],
			tabela: {
				head: [
					'Critério',
					'Por preço de linha',
					'Por custo mensal do conjunto',
					'Por custo total do contrato'
				],
				rows: [
					[
						'Esforço para montar',
						'Minutos: um número por proposta',
						'Horas: somar todos os itens recorrentes',
						'Um dia: exige inventário e consumo apurado'
					],
					[
						'O que detecta bem',
						'Diferença grosseira entre fornecedores',
						'Serviço agregado e item recorrente esquecido',
						'Excedente projetado, custo de mudança e efeito do prazo'
					],
					[
						'O que costuma escapar',
						'Franquia, excedente, escopo e prazo',
						'O que só aparece com o uso real ao longo dos meses',
						'Mudança inesperada de operação dentro do período'
					],
					[
						'Depende de quê',
						'Da proposta estar na mesa',
						'De ler as propostas inteiras, inclusive anexos',
						'De consumo apurado por perfil e inventário atualizado'
					],
					[
						'Quando faz sentido',
						'Triagem inicial, para descartar o que está fora da curva',
						'Parque pequeno e estável, com um endereço só',
						'Renovação, troca de fornecedor e parque com vários perfis'
					]
				],
				caption:
					'Comparação de métodos, sem valores: os três são complementares. A triagem por linha serve para descartar rápido; a decisão, quando há dinheiro relevante em jogo, sai do custo total do contrato.'
			}
		},
		{
			id: 'normalizacao',
			h2: 'A regra de normalização: três eixos antes de comparar qualquer coisa',
			paragrafos: [
				'Esta é a régua desta página, e ela vale independentemente de quem emitiu a proposta. Nenhuma comparação deveria começar enquanto as propostas não estiverem reescritas na mesma base: mesmo prazo, mesmo escopo e mesmo perfil de uso.',
				'Mesmo prazo significa projetar todas sobre a mesma janela de meses, incluindo o que acontece ao fim de cada uma. Mesmo escopo significa listar item a item o que cada proposta inclui e igualar as listas, acrescentando na que não tem o custo do item que falta. Mesmo perfil de uso significa aplicar o consumo real da sua operação sobre a franquia de cada uma, e não o consumo hipotético que a proposta assume.',
				'O corolário é a parte mais útil da regra: proposta que não sobrevive à normalização não está pronta para ser comparada. Se você não conseguir preencher alguma das três colunas, o problema não é da sua planilha — é a proposta que precisa voltar mais detalhada, e pedir isso é absolutamente normal. A régua vale também para a nossa proposta — e é por isso que um consultor checa a sua operação antes de qualquer número ser apresentado.'
			]
		},
		{
			id: 'checklist',
			h2: 'Doze itens para conferir em qualquer proposta antes de assinar',
			paragrafos: [
				'Leve esta lista para todas as propostas que estiverem na mesa, inclusive a nossa. Cada item sem resposta clara é uma variável que vai reaparecer depois da assinatura, quando o poder de negociação já não é o mesmo.'
			],
			checklist: {
				titulo: 'A régua para ler qualquer proposta',
				intro:
					'Doze perguntas objetivas, todas respondíveis por escrito. Proposta que trava em três delas ainda não está pronta para comparação.',
				itens: [
					'Qual é o prazo do contrato e o que acontece ao final dele',
					'A franquia é individual por linha ou compartilhada entre elas',
					'O que acontece quando a franquia acaba — redução ou cobrança adicional',
					'Quais aplicativos e serviços não descontam da franquia',
					'Quais itens são cortesia temporária e quando passam a ser cobrados',
					'Há taxa de ativação ou instalação e ela está no valor apresentado',
					'Aparelhos entram no acordo e sob quais condições de permanência',
					'Como funciona o roaming se a equipe viajar',
					'Qual a condição de saída antes do prazo e como ela é calculada',
					'Por quanto tempo a condição vale antes de precisar ser revalidada',
					'Quem é o ponto de contato nomeado depois da ativação',
					'A proposta cobre todos os endereços e CNPJs ou apenas parte'
				]
			}
		},
		{
			id: 'o-que-define-o-valor',
			h2: 'O que determina o valor de uma proposta TIM para empresas',
			paragrafos: [
				'Estes são os fatores que movem o valor de um contrato de telecom empresarial, em ordem aproximada de impacto. Nenhum é segredo comercial e todos podem ser levantados dentro da sua empresa antes de falar com fornecedor — o que muda a pergunta de "quanto custa?", que só pode ser respondida com outra pergunta, para "esta é a nossa operação, o que vocês propõem para ela?".'
			],
			lista: [
				'Quantidade de linhas e volume consolidado — é daqui que sai o desconto progressivo, aplicável a partir de dez linhas',
				'Perfil de uso apurado por função, que define a franquia adequada a cada grupo',
				'Combinação de telefonia móvel e internet fixa dentro do mesmo contrato',
				'Prazo de contrato e o que fica previsto para a renovação',
				'Viabilidade técnica em cada endereço, que limita o que pode ser oferecido',
				'Escopo de serviços, aparelhos e itens agregados incluídos no acordo'
			]
		}
	],

	passos: {
		titulo: 'Como se faz uma comparação de propostas',
		subtitulo:
			'Quatro etapas, nesta ordem. A comparação vem depois da normalização porque comparar propostas em bases diferentes produz uma resposta errada com aparência de planilha.',
		itens: [
			{
				title: 'Levantamento do que existe hoje',
				text: 'Fatura atual, contrato vigente e, quando houver, o inventário de linhas com responsáveis. É daqui que sai o consumo real por perfil — o dado sem o qual nenhuma comparação se sustenta, e o primeiro que um consultor checa.'
			},
			{
				title: 'Normalização das propostas na mesma base',
				text: 'Cada proposta é reescrita em prazo, escopo e perfil de uso equivalentes, acrescentando o custo dos itens que faltam em uma e existem na outra. É a etapa que mais muda a classificação.'
			},
			{
				title: 'Projeção do custo total sobre a mesma janela',
				text: 'O consumo apurado é aplicado sobre a franquia de cada proposta, somando recorrente, variável, custo de mudança e condição de saída ao longo do prazo.'
			},
			{
				title: 'Decisão com o porquê de cada descarte',
				text: 'No fim, o que decide é qual arranjo se sustenta melhor e por que os outros caem. Quando a conclusão é permanecer onde está, ela é tão legítima quanto qualquer outra.'
			}
		]
	},

	objecoes: [
		{
			q: '“Só me diga quanto custa.”',
			a: 'Depende de quantas linhas, de que perfil de uso, de haver ou não internet fixa junto, do prazo e da viabilidade no seu endereço. Qualquer número dito antes disso teria que ser refeito na conversa seguinte. O caminho curto de verdade é o inverso: mande a fatura atual e a proposta que tiver em mãos, e um consultor checa a sua operação para responder com base nela. O que dá para adiantar é a mecânica — a condição melhora conforme o volume, com desconto progressivo a partir de dez linhas.'
		},
		{
			q: '“A proposta do concorrente está com o preço de linha menor.”',
			a: 'Pode estar mesmo, e às vezes a conclusão da análise é que ela é a melhor opção — nesse caso, dizemos. O que vale fazer antes é a normalização: mesmo prazo, mesmo escopo, mesmo perfil de uso. Em boa parte das comparações a classificação muda depois dessa etapa, não porque alguém escondeu algo, mas porque as duas propostas descreviam coisas diferentes com a mesma etiqueta.'
		},
		{
			q: '“Não tenho tempo de levantar consumo por perfil.”',
			a: 'Não precisa levantar nada por conta própria: o dado sai da própria fatura, que você já recebe todo mês. A empresa fornece o acesso ao documento e, se existir, a relação de linhas com responsáveis — a partir daí um consultor checa o perfil de uso da operação.'
		},
		{
			q: '“Vocês vão puxar a comparação para a TIM.”',
			a: 'Somos representante autorizado TIM e trabalhamos com o portfólio da operadora — é uma limitação concreta que você deve considerar. O que sustenta a análise é o método ser público: a régua de normalização e o checklist desta página funcionam contra qualquer proposta, inclusive a nossa. Se a decisão exige comparar operadoras diferentes na mesma mesa, não peça essa comparação a um canal exclusivo de nenhuma delas.'
		},
		{
			q: '“Meu contrato ainda está vigente, não adianta comparar agora.”',
			a: 'Adianta, e o momento é até melhor: comparar com o contrato vigente permite chegar à renovação sabendo o que está na mesa, em vez de descobrir na semana do vencimento. Se a conclusão for que a condição atual está adequada, você renovou com a segurança de quem conferiu.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, com sede em Sorocaba/SP e CNPJ 23.474.830/0001-56, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'A regra de normalização em três eixos não veio de manual de fornecedor: veio de repetir a mesma cena. Empresa com duas propostas na mesa, decidida pela que tinha o menor valor de linha, descobrindo meses depois que a comparação nunca foi entre coisas equivalentes. Antes de qualquer análise, as propostas são reescritas em prazo, escopo e perfil de uso comuns — e a que não sobrevive a essa reescrita volta para o emissor mais detalhada.',
			'Publicamos o checklist inteiro de propósito: qualquer empresa consegue aplicá-lo sem nos contratar, e régua que só funciona com quem a criou na sala não é régua, é argumento de venda. Sobre o que não fazemos — não publicamos valor nesta página nem em nenhuma outra do site, porque valor de telecom empresarial sem diagnóstico é chute com papel timbrado.',
			'O que afirmamos sobre condição comercial é objetivo e verificável na sua própria fatura: um consultor checa a operação antes de qualquer número, e a condição melhora conforme o volume — o desconto é progressivo e começa a valer a partir de dez linhas.'
		]
	},

	faqTitulo: 'Dúvidas de quem está comparando propostas',
	faq: [
		{
			q: 'Existe uma tabela de preços TIM para empresas?',
			a: 'Não existe tabela pública fechada: a condição depende da quantidade de linhas, do perfil de uso, da combinação com internet fixa, do prazo e da viabilidade no endereço. O valor é apresentado em proposta, montada depois do diagnóstico da operação.'
		},
		{
			q: 'Melhores preços TIM corporativo e TIM empresarial são coisas diferentes?',
			a: 'São a mesma pergunta com vocabulários diferentes. O que muda entre porte pequeno e grande não é uma tabela distinta: é a quantidade de variáveis na negociação — múltiplos CNPJs, endereços e centros de custo aparecem quando o parque cresce.'
		},
		{
			q: 'Como comparar propostas de operadoras diferentes?',
			a: 'Normalizando três dimensões antes de olhar qualquer número: mesmo prazo de contrato, mesmo escopo de serviços incluídos e mesmo perfil de uso aplicado sobre a franquia de cada uma. Sem isso, você compara descrições diferentes com a mesma etiqueta.'
		},
		{
			q: 'Vocês conseguem a melhor condição do mercado?',
			a: 'Trabalhamos com a política comercial vigente da TIM e não temos como falar por outras operadoras. O que conseguimos é desconto progressivo por volume — a condição melhora conforme o parque cresce, a partir de dez linhas — aplicado sobre o perfil de uso real, que é onde dinheiro costuma ficar na mesa por descuido de dimensionamento.'
		},
		{
			q: 'Preciso mostrar a proposta que já tenho de outro fornecedor?',
			a: 'Não é obrigatório, mas ajuda: com ela dá para fazer a normalização e apontar onde as duas divergem em escopo, franquia e prazo. Sem ela, a análise parte da fatura atual e do levantamento da operação.'
		},
		{
			q: 'Por quanto tempo vale a condição apresentada em uma proposta?',
			a: 'Toda proposta tem prazo de validade e depende de análise de crédito empresarial e de viabilidade técnica no endereço. Passado esse prazo, a condição precisa ser revalidada — é item do checklist justamente porque costuma ser esquecido.'
		}
	],

	cta: {
		titulo: 'Traga a proposta que você já tem',
		texto:
			'Envie a fatura atual e, se houver, a proposta de qualquer fornecedor. Um consultor checa a sua operação — linhas, perfil de uso e endereços — e mostra onde a condição pode melhorar por volume, com desconto progressivo a partir de dez linhas, antes de apresentar qualquer condição nossa. Sem cobrança pela conversa e sem compromisso de contratar.'
	},

	service: {
		name: 'Análise comparativa de propostas de telecom empresarial',
		serviceType: 'Consultoria de contratação de telecom empresarial',
		description:
			'Comparação de propostas de telefonia móvel e internet empresarial normalizadas em prazo, escopo e perfil de uso: apuração de consumo por perfil, projeção de custo total do contrato, leitura de franquia e excedente e recomendação com o motivo de cada descarte.'
	},

	relacionadas: [
		'desconto-tim-para-empresas',
		'auditoria-de-fatura-de-telecom',
		'contratar-tim-direto-ou-por-revenda-autorizada'
	],
	artigos: [
		'plano-empresarial-tim-comparativo-precos-escolher',
		'solicitacao-proposta-tim-empresas-como-funciona',
		'guia-completo-como-escolher-operadora-corporativa-para-empresa-com-20-100-colaboradores',
		'comparativo-operadoras-tim-vivo-claro-empresas'
	]
};
