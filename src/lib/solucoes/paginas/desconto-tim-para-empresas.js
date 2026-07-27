// LP 22 — Cluster preços, ordem 2. Keyword primária: "desconto TIM para empresas".
//
// Ângulo de conversão: MECÂNICA DO DESCONTO, não a promessa dele. Quem busca
// desconto já decidiu comprar e quer saber se está deixando dinheiro na mesa. A
// página explica como a condição por volume se forma, o que a move além da
// quantidade de linhas e — o ponto que diferencia esta página de qualquer
// anúncio — por que desconto grande sobre plano mal dimensionado sai mais caro
// que plano certo sem desconto.
//
// ⚠ R1 EM RISCO MÁXIMO AQUI. É a página onde mais dá vontade de escrever uma
// faixa percentual. NÃO EXISTE percentual, valor nem faixa nesta página. O único
// fato público permitido é "descontos progressivos a partir de dez linhas"
// (por extenso), que já está na home. A mecânica pode ser explicada; o número,
// não. O acervo de artigos publica faixas — esta LP não herda isso.
// Rode `node scripts/validar-lps.mjs` antes de publicar.
//
// ⚠ R5 — elemento não-gerável por IA: a ordem de três tempos (dimensionar →
// distribuir por perfil → negociar volume) e o critério de que negociação sem
// levantamento incide sobre um número que ninguém conferiu. É o critério que
// separa esta página de um anúncio de desconto — e é critério de mercado, não
// procedimento declarado do Grupo OC.
//
// Separação do lote (senão as três viram doorway):
//   melhores-precos-... → COMO COMPARAR propostas (método)
//   esta                → COMO SE FORMA a condição por volume (mecânica)
//   seu-negocio-...     → O QUE MUDA na operação depois de consolidar (resultado)
//
// A página NÃO afirma procedimento interno do Grupo OC. O que é prometido são
// as duas coisas confirmadas: um consultor checa a viabilidade (no parque, na
// operação, na necessidade) e os descontos progressivos por volume começam a
// partir de dez linhas — mecânica sim, percentual nunca.
//
// ⚠ REVISAR ANTES DE PUBLICAR:
// - confirmar o que vale para empresas ABAIXO de dez linhas: a página afirma que
//   o ganho vem do dimensionamento, não do desconto por volume. Se houver
//   condição comercial para esse porte, o texto precisa ser ajustado;
// - confirmar se a combinação de móvel com internet fixa no mesmo contrato entra
//   na composição da condição e em que termos;
// - confirmar a afirmação sobre revalidação da condição na renovação.

export default {
	slug: 'desconto-tim-para-empresas',
	cluster: 'precos',
	ordem: 2,

	title: 'Desconto TIM para Empresas: Como Funciona por Volume',
	description:
		'Desconto TIM para empresas: como funciona a condição progressiva por volume, o que a melhora além do número de linhas e quando o desconto não compensa.',
	keywords:
		'desconto TIM para empresas, desconto progressivo TIM empresas, desconto por volume de linhas empresarial, condição comercial TIM CNPJ, desconto plano corporativo TIM, negociar desconto de telefonia empresarial',
	keywordPrimaria: 'desconto TIM para empresas',

	h1: 'Desconto TIM para empresas: o que melhora a condição além do número de linhas',

	cardTitulo: 'Desconto por volume',
	cardTexto:
		'Descontos progressivos a partir de dez linhas. Mas volume é só um dos fatores — e desconto sobre plano mal dimensionado sai mais caro que plano certo sem desconto.',

	hero: {
		eyebrow: 'Descontos e condições',
		sub: 'A TIM Empresas aplica descontos progressivos a partir de dez linhas: quanto maior o volume contratado, melhor a condição. O que quase ninguém explica é o resto — prazo, combinação de serviços e perfil de uso também movem a condição, e um desconto expressivo aplicado sobre o plano errado custa mais caro do que nenhum desconto sobre o plano certo.',
		bullets: [
			'Descontos progressivos a partir de dez linhas',
			'O que move a condição além da quantidade',
			'Por que dimensionar vem antes de negociar',
			'O que é vendido como desconto e não é'
		],
		ctaPrimario: 'Falar com um consultor sobre o meu parque',
		whatsapp:
			'Olá! Quero entender como funciona o desconto por volume da TIM Empresas para o meu parque de linhas.',
		cartaoTitulo: 'Como a condição se forma'
	},

	keyFacts: [
		{
			label: 'A partir de quando',
			value: 'Dez linhas',
			nota: 'Faixa de desconto progressivo por volume; a condição aplicada é definida na proposta.'
		},
		{
			label: 'A ordem que muda o resultado',
			value: 'Dimensionar antes',
			nota: 'Desconto sobre plano superdimensionado é desconto sobre o que a empresa não deveria contratar.'
		},
		{
			label: 'Quem responde por esta página',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC · CNPJ 23.474.830/0001-56 · Sorocaba/SP · 4,9 no Google com 110 avaliações'
		}
	],

	resumo:
		'A TIM Empresas aplica descontos progressivos a partir de dez linhas: quanto maior o volume contratado, melhor a condição, e a faixa é definida na proposta. Volume não é o único fator, porque prazo de contrato, combinação de móvel com internet fixa e perfil de uso também movem a condição. Desconto sobre plano mal dimensionado sai mais caro que plano certo sem desconto.',

	secoes: [
		{
			id: 'como-funciona',
			h2: 'Como funciona o desconto por volume em contrato empresarial',
			paragrafos: [
				'Desconto por volume é uma condição progressiva: a partir de dez linhas no mesmo contrato, quanto maior o parque, melhor a condição aplicada ao conjunto. Não é cupom nem promoção com data para acabar — é a lógica de precificação de qualquer venda B2B em escala, e existe porque atender um contrato de muitas linhas custa proporcionalmente menos à operadora do que atender várias contas separadas. A faixa aplicável ao seu caso é definida na proposta, e é por isso que esta página não publica percentual: número solto fora do contexto do contrato seria refeito na primeira conversa.',
				'Um ponto que costuma passar despercebido: o volume que conta é o do contrato, não o da empresa. Um grupo com três CNPJs e linhas espalhadas em três contratos separados é tratado como três parques pequenos. Consolidar essas linhas sob um contrato único é, com frequência, a mudança que mais move a condição — e ela não custa nada além do trabalho de reorganizar o que já existe.'
			],
			lista: [
				'A progressão é por faixa de volume: mais linhas no mesmo contrato, condição melhor',
				'O volume relevante é o do contrato, não o total disperso entre CNPJs e fornecedores',
				'A faixa aplicável é apresentada na proposta, após o levantamento do parque',
				'A condição é revisada quando o parque cresce ou quando o contrato é renovado'
			]
		},
		{
			id: 'alem-do-volume',
			h2: 'O que muda a condição além da quantidade de linhas',
			paragrafos: [
				'Tratar desconto empresarial como função exclusiva do número de linhas é a simplificação que faz muita empresa negociar mal. Volume é o fator mais visível, e por isso o único que costuma ser discutido, mas há pelo menos três outros na composição da condição — e dois deles não dependem de a empresa crescer. Isso muda o que você tem para colocar na mesa: quem não vai contratar mais linhas nos próximos meses ainda tem alavancas disponíveis, e usá-las é o que separa uma renovação bem conduzida de uma assinada no automático.'
			],
			subsecoes: [
				{
					h3: 'Prazo de contrato',
					paragrafos: [
						'Prazo é a moeda de troca mais direta que existe em telecom: compromissos mais longos sustentam condições melhores porque dão previsibilidade ao fornecedor. A conta que a empresa precisa fazer, porém, não é sobre a condição — é sobre a própria operação. O que você tem chance de mudar dentro desse período? Se há previsão de abrir unidade, encerrar operação ou alterar o time, prazo longo transforma condição boa em amarra cara.'
					]
				},
				{
					h3: 'Combinação de móvel e internet fixa no mesmo contrato',
					paragrafos: [
						'Contratos que reúnem telefonia móvel e internet fixa da mesma operadora são avaliados como conjunto, e não como duas compras isoladas. Além do efeito sobre a condição, há um ganho operacional que costuma pesar mais no dia a dia: um contrato, uma fatura, um interlocutor. A ressalva é técnica — internet fixa depende de viabilidade no endereço, e proposta que promete composição antes dessa checagem vai ser refeita.'
					]
				},
				{
					h3: 'Perfil de uso e a distribuição das linhas',
					paragrafos: [
						'Duas empresas com o mesmo número de linhas podem ter contratos bem diferentes conforme a distribuição interna delas. Um parque em que todas as linhas carregam a mesma franquia larga custa mais e entrega menos que um em que a franquia é distribuída conforme a função: campo, administrativo, gestão. É por isso que a distribuição por perfil rende, com frequência, mais que a negociação de desconto propriamente dita — ela reduz o que precisa ser contratado, em vez de reduzir o valor do que foi contratado a mais.'
					]
				}
			]
		},
		{
			id: 'desconto-errado',
			h2: 'Por que desconto grande em plano errado sai mais caro',
			paragrafos: [
				'Esta é a parte da página que custa venda no curto prazo e é a razão de ela existir. Desconto incide sobre o que foi contratado. Se o que foi contratado está acima do que a operação precisa, o desconto reduz o valor de uma despesa que não deveria estar naquele tamanho — e a empresa fecha o contrato satisfeita com o abatimento, pagando mais do que pagaria com um plano corretamente dimensionado sem abatimento nenhum.',
				'O efeito é conhecido: um percentual expressivo estampado na proposta produz sensação de bom negócio que dispensa a conferência do que está embaixo dele. A comparação relevante, porém, nunca é entre o valor cheio e o valor com desconto — é entre o total que a empresa vai pagar em cada arranjo possível.'
			],
			subsecoes: [
				{
					h3: 'Franquia que sobra é desconto que você já pagou',
					paragrafos: [
						'Contratar franquia acima do consumo real é a forma mais silenciosa de perder dinheiro em telecom, porque não gera sintoma: não há bloqueio, não há excedente na fatura, não há reclamação de usuário. Tudo funciona — e é por funcionar que ninguém revisa. Quando essa franquia ociosa vem acompanhada de um desconto, o desconto vira anestesia: compara-se o valor abatido com o valor cheio do mesmo plano superdimensionado, e nunca com o plano de que a empresa precisava.'
					]
				},
				{
					h3: 'Franquia que falta vira excedente todo mês',
					paragrafos: [
						'O erro inverso custa igual e é mais visível: franquia curta para quem usa muito produz excedente recorrente, e excedente não recebe desconto de volume. A empresa negocia bem a parte fixa da conta e paga cheia a parte variável, mês após mês, sem relacionar uma coisa à outra. É comum encontrar as duas distorções no mesmo contrato — o administrativo com franquia sobrando e o time de campo estourando —, porque plano único aplicado a perfis diferentes produz esse desencontro por definição.'
					]
				}
			]
		},
		{
			id: 'ordem-correta',
			h2: 'A ordem de três tempos: dimensionar, distribuir e só então negociar',
			paragrafos: [
				'Esta é a ordem que decide o resultado de qualquer negociação de telecom, e ela é uma ordem, não uma lista de tarefas soltas. Invertida, produz contratos com desconto bom sobre base errada — o resultado mais comum de uma negociação apressada.',
				'Primeiro tempo, dimensionar: apurar o consumo real de alguns ciclos e descobrir de quanto a operação precisa, por tipo de usuário. Segundo tempo, distribuir: agrupar as linhas em perfis e alocar a franquia adequada a cada grupo, em vez de aplicar um plano único ao parque inteiro. Terceiro tempo, negociar: com o parque dimensionado e distribuído, o volume vai à mesa como conjunto coerente, e a condição incide sobre aquilo que a empresa realmente vai usar.',
				'A consequência prática é que a negociação não deveria começar antes do levantamento: sem saber quantas linhas estão ativas, quem as usa e quanto cada perfil consome, qualquer condição incide sobre um número que ninguém conferiu — e é essa situação atual que um consultor checa antes de falar em condição. Vale registrar o que essa ordem custa a quem a aplica: ela atrasa a proposta em alguns dias. É uma escolha consciente, e em parte dos casos o dimensionamento sozinho já resolve a maior parte do que a empresa achava ser problema de desconto.'
			]
		},
		{
			id: 'o-que-nao-e-desconto',
			h2: 'O que costuma ser apresentado como desconto e não é',
			paragrafos: [
				'Nem tudo que aparece como abatimento é redução permanente do custo do contrato. Os quatro itens abaixo são legítimos e comuns, mas cada um tem comportamento próprio ao longo do prazo — e a única forma de compará-los honestamente é projetar o custo sobre a janela inteira, não sobre o primeiro ciclo.'
			],
			lista: [
				'Cortesia por período determinado, que passa a ser cobrada depois de alguns ciclos',
				'Benefício condicionado à permanência, devolvido se o contrato terminar antes',
				'Aparelho embutido na condição, que é custo diluído e não abatimento',
				'Bônus de ativação por adesão, que ocorre uma vez e não se repete'
			]
		},
		{
			id: 'comparativo',
			h2: 'Três caminhos para chegar a uma condição melhor',
			paragrafos: [
				'A tabela compara caminhos de negociação, não valores nem fornecedores. Os três aparecem no mercado e produzem algum resultado; a diferença está no que cada um consegue enxergar antes de assinar.'
			],
			tabela: {
				head: [
					'Critério',
					'Pedir desconto na renovação',
					'Negociar volume com o parque mapeado',
					'Redesenhar por perfil e depois negociar'
				],
				rows: [
					[
						'O que precisa ter em mãos',
						'A fatura e disposição para pedir',
						'Inventário de linhas e responsáveis',
						'Inventário mais consumo apurado por perfil'
					],
					[
						'Tempo até a proposta',
						'Imediato',
						'Alguns dias, o tempo do levantamento',
						'Alguns dias a mais, o tempo da apuração'
					],
					[
						'O que costuma melhorar',
						'O valor cheio da condição atual',
						'A faixa aplicada ao volume consolidado',
						'A faixa e o tamanho do que precisa ser contratado'
					],
					[
						'O que continua escapando',
						'Franquia ociosa, excedente e linhas sem dono',
						'Distribuição errada de franquia entre perfis',
						'Variação de operação depois da assinatura'
					],
					[
						'Quando faz sentido',
						'Parque pequeno, estável e já conferido',
						'Parque que cresceu por adição sem revisão',
						'Renovação, troca de fornecedor ou consolidação de CNPJs'
					]
				],
				caption:
					'Comparação de caminhos de negociação, sem valores. Os três são legítimos; a diferença é o quanto cada um enxerga da operação antes de fechar a condição.'
			}
		},
		{
			id: 'checklist',
			h2: 'Dez perguntas antes de aceitar um desconto',
			paragrafos: [
				'Leve esta lista para qualquer proposta com abatimento, inclusive a nossa. As dez perguntas separam redução real de custo daquilo que apenas parece redução no primeiro ciclo.'
			],
			checklist: {
				titulo: 'A régua para ler um abatimento',
				intro:
					'Dez perguntas objetivas, todas respondíveis por escrito antes da assinatura. Se três ficarem sem resposta, a condição ainda não está clara.',
				itens: [
					'O abatimento é permanente ou vale por um número determinado de ciclos',
					'Ele incide sobre todos os itens da fatura ou apenas sobre parte deles',
					'A condição sobrevive à renovação ou precisa ser renegociada no fim do prazo',
					'O que acontece com a condição se o parque encolher durante o contrato',
					'A franquia contratada corresponde ao consumo apurado de cada perfil',
					'O excedente de franquia recebe a mesma condição ou é cobrado cheio',
					'Há benefício que precisa ser devolvido em caso de saída antecipada',
					'Aparelhos estão embutidos e sob qual condição de permanência',
					'O prazo exigido é compatível com o horizonte de mudança da operação',
					'A condição vale para todos os CNPJs e endereços ou só para parte do grupo'
				]
			}
		}
	],

	passos: {
		titulo: 'Como se chega à condição do seu contrato',
		subtitulo:
			'Quatro etapas, nesta ordem. A negociação é a terceira, nunca a primeira — condição fechada sobre parque não conferido é condição sobre um número que ninguém validou.',
		itens: [
			{
				title: 'Inventário do parque atual',
				text: 'Um consultor checa quantas linhas estão ativas, quem responde por cada uma, quantas não têm consumo relevante e quantos contratos e CNPJs estão envolvidos. É o levantamento que define o volume que de fato vai à mesa.'
			},
			{
				title: 'Apuração de consumo por perfil de uso',
				text: 'Alguns ciclos de fatura são apurados por tipo de função — campo, administrativo, gestão — para descobrir de quanta franquia cada grupo precisa. Mês isolado de férias ou de pico distorce a conclusão.'
			},
			{
				title: 'Desenho do parque e negociação da condição',
				text: 'Com as linhas agrupadas por perfil e o volume consolidado, a proposta é montada e a faixa progressiva aplicável ao conjunto é definida junto com prazo e composição de serviços.'
			},
			{
				title: 'Revisão quando o parque mudar',
				text: 'Crescimento, corte de linhas, abertura de unidade ou renovação são os momentos de rever a condição — e vale combinar com o consultor que conduziu o contrato quem acompanha cada um desses marcos.'
			}
		]
	},

	objecoes: [
		{
			q: '“Qual o percentual de desconto que vocês dão?”',
			a: 'A condição é progressiva a partir de dez linhas e a faixa aplicada depende do volume consolidado, do prazo, da composição de serviços e do perfil de uso. Publicar um percentual aqui seria dar um número que teria de ser refeito assim que olhássemos o seu caso. Com a fatura e a relação de linhas em mãos, um consultor checa o parque e a faixa aplicável é apresentada em proposta, por escrito.'
		},
		{
			q: '“Temos menos de dez linhas, então não temos nada a ganhar.”',
			a: 'A faixa progressiva tem dez linhas como referência de partida, mas o desconto nunca foi a única fonte de economia — e, em parques pequenos, costuma nem ser a principal. O ganho aí vem do dimensionamento: franquia adequada ao consumo de cada perfil, linhas sem uso identificadas e serviços agregados que ninguém pediu para cancelar.'
		},
		{
			q: '“Meu concorrente conseguiu uma condição melhor que a minha.”',
			a: 'Pode ter conseguido mesmo, e vale entender por quê: volume consolidado, prazo, composição de serviços e perfil de uso diferentes produzem condições diferentes para empresas do mesmo tamanho aparente. O que dá para fazer é olhar o seu contrato e apontar quais dessas alavancas ainda não foram usadas.'
		},
		{
			q: '“Prefiro um desconto maior a um plano menor.”',
			a: 'São duas formas de reduzir a mesma conta. Desconto reduz o valor do que foi contratado; dimensionamento reduz o que precisa ser contratado. Com parque superdimensionado, o segundo caminho entrega mais — e nada impede usar os dois juntos, que é o desfecho normal quando a ordem é respeitada.'
		},
		{
			q: '“Já estou em contrato, não dá para mexer agora.”',
			a: 'Parte das alavancas exige a renovação, mas nem todas: linhas ociosas, serviços agregados sem uso e distribuição errada de franquia são revisáveis na vigência. E chegar à renovação com o parque mapeado muda a conversa — é o momento de maior poder de negociação do ciclo, e costuma ser desperdiçado por falta de preparo.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, com sede em Sorocaba/SP e CNPJ 23.474.830/0001-56, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'A ordem de três tempos — dimensionar, distribuir, negociar — é a regra de decisão que orienta esta página, e ela nasceu de ver a sequência invertida dar errado muitas vezes. Empresa que negocia primeiro fecha condição sobre um parque que ninguém conferiu, e passa o contrato inteiro pagando desconto sobre linhas que não deveria ter contratado. Por isso a página insiste no levantamento antes da condição: um consultor checa o parque e a necessidade real da operação, e só então a faixa aplicável entra na proposta — mesmo quando isso atrasa a resposta e mesmo quando o cliente prefere o número imediato.',
			'Publicar a seção sobre desconto em plano errado enfraquece o argumento comercial mais fácil deste mercado, e é deliberado: a alternativa é vender uma condição que parece boa e produz uma conta que não fecha — e conta que não fecha volta como reclamação na renovação seguinte. Não publicamos percentual de desconto aqui nem em nenhuma outra página do site, porque a faixa depende do conjunto do contrato e só faz sentido dentro de uma proposta.'
		]
	},

	faqTitulo: 'Dúvidas sobre desconto e condição comercial',
	faq: [
		{
			q: 'A partir de quantas linhas existe desconto na TIM Empresas?',
			a: 'Os descontos progressivos por volume têm dez linhas como ponto de partida: a partir daí, quanto maior o parque contratado, melhor a condição. A faixa aplicada ao seu contrato é definida na proposta, depois do levantamento do parque.'
		},
		{
			q: 'O desconto por volume considera linhas de CNPJs diferentes?',
			a: 'O volume que conta é o do contrato. Grupos com linhas espalhadas em contratos separados costumam ser tratados como parques pequenos independentes, e consolidar essas linhas sob um contrato único é frequentemente a mudança que mais move a condição.'
		},
		{
			q: 'O desconto vale também para internet fixa?',
			a: 'A composição de telefonia móvel com internet fixa no mesmo contrato é avaliada como conjunto na montagem da proposta, e a internet fixa depende de viabilidade técnica confirmada em cada endereço. O desconto progressivo por volume tem como referência a quantidade de linhas.'
		},
		{
			q: 'O desconto continua valendo na renovação do contrato?',
			a: 'A condição está vinculada ao contrato e ao seu prazo, então a renovação é o momento em que ela é revista. Chegar a essa data com o parque mapeado e o consumo apurado é o que dá poder de negociação — renovar no automático costuma significar aceitar o que vier.'
		},
		{
			q: 'MEI e microempresa conseguem alguma condição?',
			a: 'Empresas com CNPJ ativo podem contratar planos empresariais, sujeitas a análise de crédito. Abaixo do volume de referência da faixa progressiva, o ganho vem principalmente do dimensionamento correto do plano e da eliminação de serviços sem uso, não do desconto por quantidade.'
		},
		{
			q: 'O desconto aparece na fatura ou está apenas no contrato?',
			a: 'A condição contratada precisa se refletir na fatura, e conferir isso no primeiro ciclo é obrigação de quem assinou: divergência entre o que foi acertado e o que está sendo cobrado é uma das distorções mais comuns em telecom empresarial, e quanto antes for apontada, mais simples é corrigir.'
		}
	],

	cta: {
		titulo: 'Descubra a condição aplicável ao seu parque',
		texto:
			'Envie a fatura atual e, se houver, a relação de linhas com responsáveis. Um consultor checa o parque, o consumo por perfil e o que a operação de fato precisa, e a condição aplicável ao volume consolidado sai na proposta — com o desenho do plano antes do desconto, nunca o contrário. Descontos progressivos a partir de dez linhas, sem compromisso de contratação.'
	},

	service: {
		name: 'Condição comercial e desconto por volume em telecom empresarial',
		serviceType: 'Consultoria de contratação de telecom empresarial',
		description:
			'Dimensionamento de parque de linhas, distribuição de franquia por perfil de uso, consolidação de contratos e CNPJs e negociação da condição progressiva por volume em contratos TIM Empresas, com revisão a cada mudança relevante do parque.'
	},

	relacionadas: [
		'melhores-precos-tim-para-empresas',
		'renovacao-de-contrato-tim-empresas',
		'plano-corporativo-para-grandes-empresas'
	],
	artigos: [
		'tim-black-empresa-descontos-progressivos-grupo-oc',
		'tim-empresas-planos-corporativos-descontos-progressivos-guia',
		'cotacao-tim-black-empresa-guia-roi',
		'tim-empresas-reduzir-custos-linhas-dados'
	]
};
