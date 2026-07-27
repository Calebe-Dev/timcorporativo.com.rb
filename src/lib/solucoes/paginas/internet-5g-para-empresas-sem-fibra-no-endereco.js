// LP 6 — Cluster conectividade. Keyword primária: "internet para empresa sem fibra".
//
// Ângulo de conversão: DESBLOQUEIO IMEDIATO. Quem chega aqui acabou de ouvir da
// operadora "não há viabilidade no seu endereço" e tem uma mudança marcada, uma
// filial abrindo ou uma unidade sem internet. Não é uma busca por tecnologia, é
// uma busca por saída — e o concorrente acabou de dizer não. A página inteira
// responde a isso: o que ainda é possível no endereço, o que a rede móvel
// aguenta, o que ela não aguenta e quando o certo é esperar a fibra.
//
// ⚠ REVISAR: esta é a LP mais linkada da malha (recebe link de 6 outras
// páginas). Antes de mexer no h1, no resumo ou nos ids de seção, confira as
// âncoras que chegam aqui — id de seção é destino de link interno.
//
// A página NÃO afirma procedimento interno do Grupo OC. O que é prometido são
// as duas coisas confirmadas: um consultor checa a viabilidade (no endereço, na
// operação, na necessidade) e a condição por volume progride a partir de dez
// linhas. O critério técnico — "backup, não principal", endereço normalizado
// antes da consulta, sinal medido no ponto certo — fica como conhecimento do
// setor e como régua que o leitor deve exigir de qualquer fornecedor.

export default {
	slug: 'internet-5g-para-empresas-sem-fibra-no-endereco',
	cluster: 'conectividade',
	ordem: 1,

	title: 'Internet 5G para Empresas sem Fibra no Endereço',
	description:
		'Sua empresa está em endereço sem viabilidade de fibra? Veja quando a internet 5G resolve, o que ela entrega e o que checar. Consulte a cobertura.',
	keywords:
		'internet para empresa sem fibra, internet 5G para empresa, internet via 5G no endereço sem fibra, internet para empresa em área industrial sem fibra, alternativa à fibra para empresa, internet corporativa onde não tem cobertura',
	keywordPrimaria: 'internet para empresa sem fibra',

	h1: '“Não há viabilidade no seu endereço”: o que fazer quando a fibra não chega',

	cardTitulo: 'Endereço sem fibra',
	cardTexto:
		'A operadora respondeu “sem viabilidade”? Veja quando a rede móvel resolve, quando ela só serve como backup e o que checar antes de assinar.',

	hero: {
		eyebrow: 'Endereço sem fibra',
		sub: 'A operadora consultou o seu endereço e respondeu que não há viabilidade. Isso não significa que a empresa fica sem internet — significa que a saída passa por outra tecnologia, e que alguém precisa dizer com honestidade qual delas aguenta a sua operação.',
		bullets: [
			'Um consultor checa a viabilidade do endereço',
			'O que exigir de teste de sinal antes de assinar',
			'Rede móvel como link principal ou como redundância',
			'Plano de saída para quando a fibra chegar'
		],
		ctaPrimario: 'Consultar viabilidade do endereço',
		whatsapp:
			'Olá! Meu endereço não tem viabilidade de fibra. Podem verificar quais opções atendem a minha empresa?',
		cartaoTitulo: 'O que decide antes de assinar'
	},

	keyFacts: [
		{
			label: 'A pergunta que decide',
			value: 'Quantas horas paradas?',
			nota: 'Se a resposta for “nenhuma”, a rede móvel entra como redundância — nunca como link principal.'
		},
		{
			label: 'O teste que vale',
			value: 'Sinal no ponto da antena',
			nota: 'Vale o que é medido onde o equipamento vai ficar, no horário de pico — não na calçada com o celular na mão.'
		},
		{
			label: 'Experiência',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC, representante autorizado TIM · 4,9 no Google'
		}
	],

	resumo:
		'Quando a operadora responde “sem viabilidade”, a empresa tem quatro saídas: internet via rede móvel, aguardar a expansão com data confirmada, rádio de provedor regional ou acesso dedicado sob projeto. A rede móvel resolve bem escritório, comércio e obra; não substitui banda garantida quando a operação para sem internet. A escolha sai da viabilidade e do teste de sinal no ponto de instalação.',

	secoes: [
		{
			id: 'resolve-ou-nao',
			h2: 'Internet 5G resolve para empresa?',
			paragrafos: [
				'Resolve para escritório, comércio, unidade administrativa e canteiro de obra — operações que convivem bem com banda variável e aguentam algumas horas de instabilidade sem parar de faturar. Não substitui um acesso com banda garantida quando a empresa para junto com a internet: nesse caso a rede móvel entra como contingência, e não como link principal.',
				'A distinção parece detalhe e é o centro da decisão. A conexão via rede móvel usa a mesma infraestrutura que atende todo mundo naquele setor de antena: a banda disponível varia conforme o horário, a quantidade de dispositivos conectados e o que acontece na região. A fibra empresarial entrega um perfil contratado; a rede móvel entrega o que houver disponível naquele momento.',
				'Quando a operação é administrativa — e-mail, sistema em nuvem, emissão de nota, videoconferência, atendimento por mensagem — essa variação é absorvível e a equipe trabalha sem perceber. Quando cada minuto parado tem custo direto, a variação deixa de ser aceitável e a conversa muda de tecnologia para arranjo: a rede móvel como redundância de alguma coisa, nunca sozinha.'
			]
		},
		{
			id: 'sem-viabilidade',
			h2: 'Por que o seu endereço “não tem viabilidade”',
			paragrafos: [
				'“Não há viabilidade” quase nunca significa “não existe rede nesta cidade”. Significa que, no ponto exato do seu endereço, não há como conectar o cliente hoje. A rede de fibra é construída por trecho e atendida por caixas distribuídas pelo bairro, cada uma com um número finito de portas. É por isso que o vizinho de frente tem e você não.',
				'Vale conhecer os motivos mais comuns antes de tratar a resposta como definitiva, porque parte deles muda em algumas semanas e parte é simplesmente erro de cadastro que uma reconsulta corrige.'
			],
			lista: [
				'A caixa de atendimento que cobre a rua está com todas as portas ocupadas',
				'A rede passa no lado oposto da via e a travessia depende de obra',
				'O condomínio, galpão ou prédio não tem infraestrutura interna até a sua sala',
				'O loteamento ou distrito industrial ainda não recebeu rede construída',
				'O endereço está cadastrado de outra forma na base da operadora — número, complemento ou CEP divergente devolve negativa para um endereço que na prática é atendido'
			],
			subsecoes: [
				{
					h3: 'O erro de cadastro que devolve negativa em endereço atendido',
					paragrafos: [
						'O último item da lista é o que mais surpreende quem já desistiu da fibra. Galpão em distrito industrial, sala em condomínio empresarial e imóvel com dois números de porta são os casos clássicos: a consulta volta negativa e a reconsulta com o endereço normalizado volta positiva, sem que nada tenha mudado na rua.',
						'Antes de fechar qualquer alternativa, vale conferir como o endereço está escrito na consulta: número correto, complemento certo, CEP do trecho e não do bairro. É a checagem mais barata do processo e a que mais devolve viabilidade que estava dada como perdida.'
					]
				}
			]
		},
		{
			id: 'o-que-entrega',
			h2: 'O que a rede móvel entrega — e o que ela não entrega',
			paragrafos: [
				'A honestidade aqui vale mais do que o argumento comercial: a conexão via rede móvel é compartilhada por natureza. Não existe banda garantida, e nenhum fornecedor sério promete que existe. O que existe é uma faixa de desempenho que costuma sobrar para a maior parte das operações administrativas e comerciais.',
				'Em compensação, ela entrega aquilo que a fibra não consegue entregar em endereço sem rede: disponibilidade sem depender de obra na via. Para a unidade que abre no mês que vem, para o canteiro que vai existir por alguns meses ou para a sala em prédio sem infraestrutura interna, isso costuma decidir a questão sozinho.',
				'A latência também se comporta de forma diferente: oscila mais que na fibra, e essa oscilação aparece primeiro em chamada de voz por internet e em acesso remoto a sistema. Não impede o uso — exige que você saiba disso antes de assinar, e não depois da primeira reclamação da equipe.'
			],
			subsecoes: [
				{
					h3: 'Fatores que mudam o resultado no seu endereço',
					paragrafos: [
						'Duas empresas na mesma rua podem ter resultados diferentes com a mesma tecnologia, e a explicação é física: distância até a antena que atende o setor, linha de visada, obstrução por laje, telhado metálico ou prédio na frente, altura em que a antena externa é instalada e faixa de frequência disponível na região. Galpão com estrutura metálica é o ambiente mais sensível de todos.',
						'Por isso a instalação empresarial não se parece com colocar um chip no roteador. Existe antena externa, posicionamento e apontamento para o setor certo. Um resultado ruim na primeira medição às vezes vira um resultado bom depois de subir a antena alguns metros e girá-la — e essa é justamente a diferença que o teste feito com o celular na mão não captura.'
					]
				},
				{
					h3: 'Quando não indicamos',
					paragrafos: [
						'Há casos em que a resposta correta é não vender. Se a operação para por completo sem internet — chão de fábrica com sistema online, expedição, atendimento por voz com muitas posições simultâneas, servidor publicado que precisa ser alcançado de fora, VPN com sessão que não pode cair —, a rede móvel sozinha é risco disfarçado de solução.',
						'Nesses cenários indicamos duas coisas, nesta ordem: verificar se há previsão de expansão de rede com data para o endereço e, enquanto isso, desenhar um arranjo em que a conexão móvel seja redundância de um acesso principal. Dizer isso custa uma venda no curto prazo e evita um cliente insatisfeito no médio.'
					]
				}
			]
		},
		{
			id: 'quatro-caminhos',
			h2: 'Os quatro caminhos quando a fibra não chega',
			paragrafos: [
				'Quando não há fibra disponível, existem quatro caminhos — e a escolha entre eles é menos técnica do que parece. Ela depende de quanto tempo a operação suporta parada e de por quanto tempo aquele endereço vai existir.'
			],
			lista: [
				'Internet via rede móvel: disponível sem obra, com banda variável — resolve escritório, comércio, obra e unidade provisória',
				'Aguardar a expansão da rede: só é caminho quando existe previsão com data para o endereço, e não uma expectativa genérica',
				'Rádio de provedor regional: depende de visada até a torre e da qualidade do provedor local, que varia muito entre cidades',
				'Acesso dedicado construído sob projeto: pesado em prazo e complexidade, indicado quando a operação simplesmente não pode parar'
			],
			subsecoes: [
				{
					h3: 'Na prática, os caminhos se combinam',
					paragrafos: [
						'É comum a unidade entrar operando por rede móvel enquanto o processo de expansão avança e, quando a fibra chega, a conexão móvel virar o backup automático do acesso fixo — que é o uso mais seguro dela. O arranjo temporário deixa de ser desperdício e vira redundância permanente.',
						'É exatamente por isso que o prazo de contrato se discute antes de assinar, e não na renovação. Uma solução pensada para durar alguns meses presa a um compromisso longo deixa de ser temporária, e o custo dessa distração aparece quando a fibra finalmente chega.'
					]
				}
			]
		},
		{
			id: 'comparativo',
			h2: 'Fibra, rede móvel, rádio e acesso dedicado lado a lado',
			paragrafos: [
				'A tabela abaixo compara os quatro caminhos pelos critérios que costumam decidir, e deliberadamente não traz valores: o mesmo endereço pode receber respostas de viabilidade diferentes para cada tecnologia, e é isso — não uma tabela de preços — que determina o que é possível ali.'
			],
			tabela: {
				head: [
					'Critério',
					'Fibra empresarial',
					'Internet via rede móvel',
					'Rádio de provedor regional',
					'Acesso dedicado sob projeto'
				],
				rows: [
					[
						'Banda garantida',
						'Perfil contratado',
						'Não há: a banda é compartilhada',
						'Depende do provedor e do plano',
						'Sim — é o que se compra'
					],
					[
						'Variação ao longo do dia',
						'Baixa',
						'Sensível ao horário e ao tráfego na antena',
						'Sensível a clima e a obstrução',
						'Baixa, por projeto'
					],
					[
						'Depende de obra na via',
						'Sim, e é o gargalo',
						'Não',
						'Depende de visada até a torre',
						'Sim, e a obra é maior'
					],
					[
						'Indicação típica',
						'Escritório, loja e clínica onde há rede',
						'Endereço sem viabilidade, unidade provisória, backup',
						'Área rural ou sem fibra, com visada',
						'Operação que não pode parar'
					],
					[
						'Ponto fraco',
						'Não existe onde a rede não chega',
						'Sem garantia de banda no horário de pico',
						'Qualidade varia muito com o provedor local',
						'Prazo e complexidade de implantação'
					]
				],
				caption:
					'Comparação técnica, sem valores: o arranjo adequado depende do que a consulta de viabilidade devolver para o endereço e de quanto tempo parado a operação suporta. A proposta é montada caso a caso.'
			}
		},
		{
			id: 'checklist',
			h2: 'O que checar antes de fechar internet móvel como link principal',
			paragrafos: [
				'Esta lista vale para qualquer fornecedor, inclusive quando a proposta não é nossa. São os pontos que aparecem depois — quando o contrato já está assinado e a empresa descobre a limitação no dia de maior movimento.'
			],
			checklist: {
				titulo: 'Oito checagens antes de assinar',
				intro: 'Leve a lista para a conversa com qualquer fornecedor e peça tudo por escrito.',
				itens: [
					'Teste de sinal no ponto exato onde a antena será instalada, não na calçada',
					'Medição no horário de pico da sua operação, não no meio da manhã de uma terça',
					'Qual é a franquia de dados e o que acontece com a velocidade depois dela',
					'Como a VPN se comporta quando o endereço IP da unidade muda',
					'Existe IP fixo disponível e é possível acessar a rede da unidade de fora',
					'Qual equipamento está incluso e se a antena externa faz parte do escopo',
					'Qual o prazo contratual e o que acontece com ele quando a fibra chegar',
					'Se a rede móvel for o link principal, quem atende quando ela oscila'
				]
			}
		},
		{
			id: 'viabilidade',
			h2: 'Como se confirma a viabilidade real do endereço',
			paragrafos: [
				'A viabilidade precisa ser consultada em mais de uma tecnologia para o mesmo endereço, com o endereço normalizado antes da consulta: número correto, complemento certo, CEP do trecho. Só depois de saber o que efetivamente chega ali é que existe proposta — porque proposta feita antes da viabilidade é chute com papel timbrado. É essa checagem que um consultor faz logo no primeiro contato.',
				'O segundo ponto é o sinal medido no lugar certo: no ponto exato onde o equipamento ficará e no horário de maior uso da operação. Medir na calçada, com o celular na mão, no melhor horário do dia, produz um número bonito e inútil. O que interessa é o comportamento no ponto de instalação enquanto a empresa está trabalhando — exija esse critério de qualquer fornecedor, inclusive de nós.',
				'O terceiro ponto é o menos comercial de todos: verificar se há previsão de expansão de rede para aquele endereço. Quando existe, com data, e a operação consegue esperar, esperar costuma ser a melhor escolha, resolvendo o intervalo com um arranjo temporário — mesmo que isso encurte o contrato.'
			]
		},
		{
			id: 'o-que-define-o-investimento',
			h2: 'O que define o investimento nesse tipo de projeto',
			paragrafos: [
				'Não publicamos valores porque não existe tabela honesta para este tipo de projeto: o resultado depende do que a viabilidade devolve no endereço, e dois endereços na mesma rua podem devolver respostas diferentes. O que dá para explicar com clareza são as variáveis que compõem o custo, para você chegar na conversa sabendo o que está sendo cotado.',
				'O item que mais muda o desenho é o penúltimo da lista. Contratar uma solução pensada como provisória com prazo longo é a armadilha mais comum desse cenário — e é exatamente por isso que a pergunta “como eu saio disso quando a fibra chegar” entra na proposta, e não na renovação.'
			],
			lista: [
				'Banda contratada e franquia de dados, com o comportamento definido depois dela',
				'Equipamento, antena externa e a instalação em si',
				'Necessidade de IP fixo e de acesso remoto à rede da unidade',
				'Se a conexão é o link principal ou a redundância de outro acesso',
				'Prazo de contrato e as condições de saída quando a fibra chegar',
				'Quantidade de endereços atendidos no mesmo projeto',
				'Volume de linhas reunidas no contrato, com a condição progredindo a partir de dez'
			]
		}
	],

	passos: {
		titulo: 'O que decide um endereço sem fibra',
		subtitulo:
			'Quatro etapas, nesta ordem. As duas primeiras são de diagnóstico — e é nelas que se decide se vale contratar alguma coisa agora.',
		itens: [
			{
				title: 'Consulta de viabilidade em mais de uma tecnologia',
				text: 'Um consultor checa o que chega ao endereço de fato, em mais de uma tecnologia e com o endereço normalizado, antes de propor qualquer coisa. Boa parte das negativas cai nesta etapa, por divergência de cadastro.'
			},
			{
				title: 'Sinal avaliado no ponto de instalação',
				text: 'O que vale é o comportamento onde o equipamento vai ficar, no horário de maior uso da operação. É esse resultado que define se a rede móvel entra como link principal, como redundância ou simplesmente não entra.'
			},
			{
				title: 'Proposta com os caminhos viáveis lado a lado',
				text: 'A proposta mostra o que é possível no endereço, com o que cada arranjo resolve e o que deixa de fora — incluindo a opção de aguardar a expansão da rede quando ela for a melhor escolha.'
			},
			{
				title: 'Ativação acompanhada e plano de saída',
				text: 'Instalação, apontamento da antena e primeiros dias de uso são acompanhados pelo consultor que conduziu a contratação. O contrato é fechado já com a resposta para o que acontece quando a fibra chegar ao endereço.'
			}
		]
	},

	objecoes: [
		{
			q: '“5G é a mesma coisa do celular, vai cair do mesmo jeito.”',
			a: 'A tecnologia é a mesma; a instalação não. O celular usa a antena interna do aparelho, na mão do usuário, dentro do prédio. A instalação empresarial usa antena externa fixa, posicionada e apontada para o setor que atende o endereço. É a diferença entre ouvir rádio pelo fone do celular e ouvir com uma antena no telhado.'
		},
		{
			q: '“Já testei com o meu celular no local e ficou ruim.”',
			a: 'Esse teste é indicativo e costuma subestimar o resultado, porque mede o pior cenário possível de instalação. Vale repetir a medição no ponto onde a antena ficaria, na altura em que ela ficaria. Se ainda assim o sinal não sustentar a operação, dizemos isso — é informação que preferimos ter antes da assinatura.'
		},
		{
			q: '“Prefiro esperar a fibra chegar.”',
			a: 'Pode ser a decisão certa, e às vezes é a que recomendamos. A pergunta que resolve é se existe previsão com data para o seu endereço ou apenas uma expectativa. Com data confirmada e prazo curto, esperar costuma valer a pena. Sem data, esperar é ficar sem internet por tempo indeterminado.'
		},
		{
			q: '“Não quero contrato longo para uma solução provisória.”',
			a: 'Faz sentido, e é uma discussão que precisa acontecer antes de assinar. Prazo, condições de migração e o que acontece com o contrato quando a fibra chegar entram na proposta. Um arranjo temporário preso a um compromisso longo deixa de ser temporário.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'A regra de decisão que orienta esta página é própria e vale explicitar: a pergunta que define o arranjo não é “de quanta banda você precisa”, e sim “quantas horas paradas a sua operação aguenta”. Se a resposta for “nenhuma”, a conexão móvel entra como redundância e não como link principal — mesmo quando o teste de sinal vem excelente.',
			'A segunda regra é comercialmente incômoda: quando existe previsão de expansão de fibra com data para o endereço e a operação consegue esperar, recomendamos esperar. Vender um contrato longo para cobrir um intervalo curto gera um cliente preso a uma solução que ele não quer mais — e esse tipo de venda não se repete.'
		]
	},

	faqTitulo: 'Dúvidas de quem ouviu “não há viabilidade”',
	faq: [
		{
			q: 'Internet 5G pode substituir a fibra na minha empresa?',
			a: 'Substitui em escritório, comércio e obra, onde a operação tolera variação de banda. Não substitui quando a empresa para sem internet: nesse caso a banda garantida continua sendo o critério, e a rede móvel entra como redundância.'
		},
		{
			q: 'Por que a empresa vizinha tem fibra e a minha não?',
			a: 'Viabilidade é medida por ponto de atendimento, não por rua. Caixa de atendimento sem porta livre, rede construída apenas no lado oposto da via e condomínio sem infraestrutura interna explicam a maior parte dos casos.'
		},
		{
			q: 'Testei com o meu celular no local e o sinal era fraco. Muda alguma coisa?',
			a: 'Muda bastante. A instalação empresarial usa antena externa posicionada e apontada, em altura definida, o que não se compara ao teste com o aparelho na mão dentro do prédio.'
		},
		{
			q: 'E quando a fibra chegar ao meu endereço?',
			a: 'É por isso que o prazo contratual precisa ser discutido antes de fechar. A pergunta “como eu saio disso quando a fibra chegar” entra na proposta — e o caminho mais comum é a conexão móvel virar backup do acesso fixo.'
		},
		{
			q: 'Dá para usar a rede móvel como backup da fibra?',
			a: 'Sim, e é o uso mais seguro dela: o link fixo como principal e a rede móvel assumindo na queda, sem depender de alguém trocar cabo na hora do problema.'
		}
	],

	cta: {
		titulo: 'Consulte a viabilidade do seu endereço',
		texto:
			'Um consultor checa a viabilidade do endereço em mais de uma tecnologia, avalia o que o sinal sustenta no ponto de instalação e diz com clareza o que atende a sua operação — inclusive quando a recomendação for aguardar a fibra. Sem compromisso de contratação.'
	},

	service: {
		name: 'Internet corporativa via rede móvel para endereços sem fibra',
		serviceType: 'Internet corporativa via rede móvel',
		description:
			'Conectividade para endereços sem viabilidade de fibra: consulta de viabilidade em mais de uma tecnologia, teste de sinal no ponto de instalação, internet via rede móvel como link principal ou redundância e plano de migração quando a fibra chegar.'
	},

	relacionadas: [
		'telecom-para-abertura-de-filial',
		'telecom-para-industrias-em-sorocaba-e-regiao',
		'internet-empresarial-em-sorocaba'
	],
	artigos: [
		'tim-empresas-validar-cobertura-4g-5g',
		'tim-black-empresa-tem-cobertura-em-area-rural-mapa-de-cobertura-4g-5g-corporativo',
		'internet-backup-tim-empresas-4g-5g-failover',
		'alternativas-a-banda-larga-residencial-para-empresas-que-sofrem-com-queda-de-conexao'
	]
};
