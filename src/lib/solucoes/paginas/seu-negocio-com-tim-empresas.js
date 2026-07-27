// LP 23 — Cluster preços, ordem 3. Keyword primária: "seu negócio com TIM Empresas".
//
// A mais institucional das três do lote. Intenção de MARCA/BENEFÍCIO: quem
// digita isso não está comparando proposta nem caçando desconto — está avaliando
// o que muda na empresa ao levar a telecom para uma operadora só, com um
// interlocutor só. Por isso o eixo é RESULTADO OPERACIONAL (gestão,
// previsibilidade, suporte, escala), e não condição comercial.
//
// Separação do lote (senão as três viram doorway):
//   melhores-precos-... → COMO COMPARAR propostas (método)
//   desconto-...        → COMO SE FORMA a condição por volume (mecânica)
//   esta                → O QUE MUDA na operação depois de consolidar (resultado)
// Nenhum argumento de comparação de proposta ou de faixa de desconto aqui: os
// dois temas são linkados, não repetidos.
//
// ⚠ R1: zero valor, faixa ou percentual — inclusive nos ganhos operacionais. A
// tentação aqui é quantificar economia ("reduza X% da fatura"). Não existe.
// Rode `node scripts/validar-lps.mjs` antes de publicar.
//
// ⚠ R5 — elemento não-gerável por IA: (a) a régua de quando consolidar compensa
// (mais de um serviço, mais de um endereço ou parque acima de uma dezena de
// linhas) e (b) o teste do consultor nomeado — se ninguém na empresa sabe o nome
// de quem responde pelo contrato, não existe consultor, existe canal.
//
// ⚠ O QUE ESTA PÁGINA PODE PROMETER: só duas coisas, porque só elas são
// verdade — (1) um consultor checa a viabilidade no endereço e a necessidade da
// operação e (2) o desconto progressivo melhora conforme o volume, a partir de
// dez linhas. O consultor nomeado aparece aqui como TESTE que o leitor aplica a
// qualquer fornecedor, inclusive a nós, e nunca como promessa de que existe uma
// pessoa dedicada a cada conta depois da ativação. A régua de porte permanece
// porque é critério de decisão do leitor, não etapa de trabalho do time.

export default {
	slug: 'seu-negocio-com-tim-empresas',
	cluster: 'precos',
	ordem: 3,

	title: 'Seu Negócio com TIM Empresas: o que muda na operação',
	description:
		'Seu negócio com TIM Empresas: o que muda ao consolidar telefonia e internet em um contrato, com consultor nomeado, previsibilidade de fatura e escala.',
	keywords:
		'seu negócio com TIM Empresas, TIM Empresas para o meu negócio, consolidar telecom em uma operadora, gestão de linhas corporativas, contrato único de telefonia e internet empresarial, consultor TIM Empresas dedicado',
	keywordPrimaria: 'seu negócio com TIM Empresas',

	h1: 'Seu negócio com a TIM Empresas: um contrato, um interlocutor e uma conta que fecha',

	cardTitulo: 'Sua empresa na TIM',
	cardTexto:
		'O que muda na operação quando telefonia e internet deixam de estar espalhadas: quem atende, o que o financeiro consegue projetar e como a empresa cresce sem recomeçar.',

	hero: {
		eyebrow: 'Sua empresa na TIM',
		sub: 'Telecom raramente é um problema grande. É um problema espalhado: um fornecedor para a internet da matriz, outro para a filial, linhas móveis contratadas em épocas diferentes, uma fatura que ninguém consegue explicar inteira. Consolidar não é só juntar contratos — é passar a ter um interlocutor com nome, uma conta previsível e uma estrutura que acompanha o crescimento.',
		bullets: [
			'Um contrato para telefonia móvel e internet fixa',
			'Um consultor que checa viabilidade e necessidade, não um protocolo',
			'Fatura que o financeiro consegue projetar',
			'Crescer sem recomeçar o processo de compra'
		],
		ctaPrimario: 'Falar com um consultor sobre o meu negócio',
		whatsapp:
			'Olá! Quero entender o que muda na minha empresa levando telefonia e internet para a TIM Empresas.',
		cartaoTitulo: 'O que muda na prática'
	},

	keyFacts: [
		{
			label: 'O ganho mais sentido',
			value: 'Um interlocutor',
			nota: 'O que separa consultor de canal: uma pessoa com nome, e não um protocolo por assunto.'
		},
		{
			label: 'Quando consolidar compensa',
			value: 'Duas variáveis',
			nota: 'Mais de um serviço, mais de um endereço ou parque acima de uma dezena de linhas. Abaixo disso, o ganho está no dimensionamento.'
		},
		{
			label: 'Quem conduz',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC · CNPJ 23.474.830/0001-56 · Sorocaba/SP · 4,9 no Google com 110 avaliações'
		}
	],

	resumo:
		'Consolidar telefonia móvel e internet fixa em um contrato só, com um consultor nomeado, muda quatro coisas na operação: passa a existir um interlocutor em vez de um protocolo por assunto, a fatura vira previsível para o financeiro, a linha ganha ciclo de vida do primeiro ao último dia do colaborador e crescer deixa de exigir um novo processo de compra a cada unidade.',

	secoes: [
		{
			id: 'telecom-dispersa',
			h2: 'O custo invisível de uma telecom espalhada',
			paragrafos: [
				'Quase nenhuma empresa decide ter telecom dispersa. Chega-se nesse estado por acúmulo: a internet da matriz foi contratada quando a empresa nasceu, as primeiras linhas móveis vieram de uma promoção, a filial abriu com o fornecedor que atendia aquela rua e o comercial ganhou linhas em um pedido avulso. Cada decisão fazia sentido isolada. O conjunto, não.',
				'O sintoma não é a fatura alta — é a fatura que ninguém consegue explicar inteira. O administrativo sabe parte, o financeiro conhece os valores, a TI conhece os endereços, e ninguém tem o quadro completo. Quando algo cai, começa a etapa mais cara: descobrir de quem é o problema antes de poder resolvê-lo. É um custo que não aparece na contabilidade e é pago todo mês em horas.'
			],
			lista: [
				'Contratos com vencimentos e reajustes em datas diferentes',
				'Linhas ativas sem responsável, herdadas de quem já saiu',
				'Chamados em canais distintos, cada um com prazo próprio',
				'Nenhuma visão consolidada do gasto por unidade e centro de custo',
				'Cada contratação recomeçando do zero: cotação, cadastro, análise, ativação'
			]
		},
		{
			id: 'quatro-ganhos',
			h2: 'Os quatro ganhos operacionais de consolidar',
			paragrafos: [
				'Consolidar telecom é uma decisão de operação antes de ser uma decisão de compra. Os ganhos abaixo aparecem no dia a dia de quem administra a empresa, e nenhum depende do tamanho do parque para existir — o que muda com o porte é o quanto cada um pesa.',
				'Vale dizer o que consolidar não faz: não elimina falha técnica, não substitui redundância onde ela é necessária e não transforma endereço sem viabilidade em endereço atendido. Muda quem responde, em quanto tempo e com qual histórico na mão.'
			],
			subsecoes: [
				{
					h3: 'Um interlocutor em vez de um protocolo por assunto',
					paragrafos: [
						'A diferença mais sentida não é técnica: é saber para quem ligar. Com a estrutura dispersa, cada assunto tem um caminho próprio — a internet da filial em um canal, as linhas móveis em outro, a cobrança em um terceiro — e a empresa gasta a primeira metade de cada problema descobrindo onde tratá-lo. Com um consultor nomeado, o histórico da conta já está com quem atende: não é preciso recontar o que foi contratado nem o que ficou pendente do chamado anterior.'
					]
				},
				{
					h3: 'Previsibilidade: a fatura que o financeiro consegue projetar',
					paragrafos: [
						'Telecom disperso produz despesa que oscila sem explicação aparente, porque cada fornecedor tem seu ciclo, seu reajuste e seus itens variáveis. O financeiro projeta pela média dos últimos meses e erra, sem saber se errou por consumo, por reajuste ou por um serviço que alguém contratou e ninguém comunicou. Um contrato consolidado com franquia dimensionada por perfil reduz justamente a parte variável, e desvios passam a ser exceção investigável em vez de rotina aceita.'
					]
				},
				{
					h3: 'Ciclo de vida da linha, da admissão ao desligamento',
					paragrafos: [
						'A distorção mais recorrente em parques empresariais é a linha que continua ativa depois que o colaborador saiu, porque na estrutura dispersa ninguém é dono do processo: o crachá volta para o RH, o notebook volta para a TI e a linha não volta para lugar nenhum. Com o parque em um contrato só e inventário atualizado, a linha ganha ciclo definido — atribuída na admissão, acompanhando a função, encerrada ou remanejada no desligamento.'
					]
				},
				{
					h3: 'Crescer sem recomeçar o processo de compra',
					paragrafos: [
						'Na estrutura dispersa, cada nova unidade e cada contratação em bloco exigem repetir o ciclo inteiro: cotar, cadastrar, submeter à análise, agendar instalação e torcer para o prazo bater com a inauguração. Em um contrato consolidado, crescer é acrescentar ao que existe — cadastro feito, análise do mesmo grupo, padrão de plano por perfil já definido e consultor que conhece o histórico.'
					]
				}
			]
		},
		{
			id: 'o-que-entra',
			h2: 'O que entra no contrato do seu negócio',
			paragrafos: [
				'A composição depende do que a sua operação faz, e não de um pacote pronto: o mesmo conjunto de produtos serve a uma loja e a uma indústria de formas bem diferentes. E a internet fixa tem uma condicionante que precisa ser dita antes de qualquer promessa — depende de viabilidade confirmada endereço a endereço. É aí que está a parte concreta do atendimento: um consultor checa a viabilidade de cada endereço, com número e complemento, porque a resposta muda de porta para porta e não vale por cidade nem por CEP.'
			],
			lista: [
				'TIM Black Empresa para quem depende de dados e comunicação fora do escritório',
				'TIM Fibra Empresa e TIM UltraFibra para a conectividade fixa de cada endereço',
				'Franquia distribuída por perfil, em vez de um plano único para o parque inteiro',
				'Portabilidade dos números atuais, fixos e móveis, sem interromper o atendimento',
				'Gestão do parque com responsáveis identificados e centros de custo',
				'Um consultor que checa a viabilidade dos endereços e a necessidade de cada perfil'
			]
		},
		{
			id: 'consultor-nomeado',
			h2: 'O teste do consultor nomeado',
			paragrafos: [
				'Existe uma diferença concreta entre ter um canal de atendimento e ter um consultor, e ela cabe em uma pergunta que qualquer empresa pode responder agora: você sabe o nome da pessoa que responde pelo contrato de telecom da sua empresa? Se a resposta é um número de protocolo, um e-mail genérico ou "a gente liga na central", não existe consultor — existe canal.',
				'Canal resolve o que é padronizável, e resolve bem: bloqueio de linha, segunda via, chamado técnico simples. O que canal não faz é lembrar que a sua filial abre em dois meses, que o contrato vence no trimestre seguinte ou que o time de campo cresceu e a franquia ficou curta. Isso exige alguém que conheça a operação e acompanhe os marcos dela.',
				'A régua para dizer se consolidar compensa serve para você decidir sem falar com ninguém: vale quando existe mais de uma variável em jogo — mais de um serviço, mais de um endereço ou um parque acima de uma dezena de linhas, que é também o ponto em que o desconto progressivo por volume começa a melhorar. Com uma variável só, o ganho é pequeno e o esforço não se justifica; o que rende é dimensionar corretamente o que já existe. A régua está publicada mesmo custando lead, porque atender uma empresa que não precisa do projeto termina em insatisfação previsível.'
			]
		},
		{
			id: 'quando-nao-vale',
			h2: 'Quando consolidar não é a melhor escolha',
			paragrafos: [
				'Uma página institucional em que a recomendação vence todas as linhas não ajuda ninguém a decidir. Nos cenários abaixo, o caminho sensato é manter a estrutura como está — no máximo revisando o dimensionamento do que já existe, que é um trabalho bem menor:'
			],
			lista: [
				'Endereço sem viabilidade técnica da operadora, em que o fornecedor atual é o que atende',
				'Operação que exige fornecedores distintos por decisão de redundância deliberada',
				'Empresa com área de telecom própria, que já negocia direto e mantém inventário atualizado',
				'Parque de uma linha e um endereço, sem previsão de crescimento no horizonte',
				'Contrato recém-renovado em condição já conferida, com custo de saída maior que o ganho'
			],
			subsecoes: [
				{
					h3: 'A limitação de trabalhar com um portfólio',
					paragrafos: [
						'Somos representante autorizado TIM, e a composição possível vem do portfólio dessa operadora. É uma limitação concreta: se a viabilidade no seu endereço não existir por aqui, o melhor a fazer é dizer isso com clareza em vez de empurrar um arranjo que não resolve o problema. Quem precisa comparar operadoras diferentes na mesma mesa não deveria pedir essa comparação a um canal exclusivo de nenhuma delas — inclusive a nós. O que existe aqui é objetivo: um consultor checa a viabilidade no endereço e a necessidade da operação, e isso vale mesmo quando a conclusão é permanecer onde está.'
					]
				}
			]
		},
		{
			id: 'comparativo',
			h2: 'Três arranjos de operação, lado a lado',
			paragrafos: [
				'A tabela compara arranjos operacionais, não valores nem fornecedores. O critério é o que cada arranjo exige da empresa e o que ela recebe de volta em capacidade de gestão.'
			],
			tabela: {
				head: [
					'Critério',
					'Dispersa entre fornecedores',
					'Consolidada, sem consultor nomeado',
					'Consolidada, com consultor nomeado'
				],
				rows: [
					[
						'Quando algo cai',
						'Primeiro descobrir de quem é o problema',
						'Chamado no canal certo, com prazo definido',
						'Mesmo canal, com quem conhece o histórico acompanhando'
					],
					[
						'Pedir linha ou endereço novo',
						'Cotar, cadastrar e analisar do zero a cada vez',
						'Acréscimo ao contrato existente',
						'Acréscimo já no padrão de plano definido por perfil'
					],
					[
						'Previsibilidade da fatura',
						'Vários ciclos, reajustes e itens variáveis',
						'Uma fatura, um ciclo, um reajuste',
						'Uma fatura conferida contra o que foi contratado'
					],
					[
						'Abertura de filial',
						'Projeto novo, do zero, a cada unidade',
						'Extensão do contrato, sujeita à viabilidade',
						'Extensão planejada com antecedência do cronograma'
					],
					[
						'Esforço interno recorrente',
						'Alto, distribuído entre várias pessoas',
						'Médio: conferência e chamados concentrados',
						'Baixo: conferência e acompanhamento saem de fora'
					],
					[
						'Quando faz sentido',
						'Endereços sem viabilidade comum entre si',
						'Empresa com gestão própria de telecom',
						'Mais de um serviço, endereço ou parque em crescimento'
					]
				],
				caption:
					'Comparação de arranjos operacionais, sem valores. Consolidar não elimina falha técnica: muda quem responde, com qual histórico e em quanto tempo.'
			}
		},
		{
			id: 'checklist',
			h2: 'Dez sinais de que a telecom da sua empresa está dispersa demais',
			paragrafos: [
				'Esta lista é autodiagnóstico e não precisa de nós para ser aplicada. Cada sinal presente é tempo que alguém na empresa gasta com uma tarefa que não deveria existir.'
			],
			checklist: {
				titulo: 'Autodiagnóstico em dez sinais',
				intro:
					'Marque os que valem para a sua operação hoje. A partir de quatro, a dispersão já está custando tempo de gente que deveria estar fazendo outra coisa.',
				itens: [
					'Ninguém consegue dizer de cabeça quantas linhas ativas a empresa tem',
					'Existe mais de um fornecedor de internet entre matriz e unidades',
					'As faturas de telecom chegam em datas diferentes, de origens diferentes',
					'Já apareceu cobrança de serviço que ninguém lembra de ter pedido',
					'Alguém precisa perguntar por aí de quem é a linha quando ela é bloqueada',
					'Não há registro de qual linha pertence a qual colaborador ou centro de custo',
					'Quando cai, a primeira etapa é descobrir qual fornecedor acionar',
					'A empresa não sabe a data de vencimento de cada contrato de telecom',
					'Abrir uma unidade nova significa recomeçar a cotação do zero',
					'Não existe uma pessoa com nome respondendo pelo contrato do lado do fornecedor'
				]
			}
		},
		{
			id: 'o-que-define-o-desenho',
			h2: 'O que define o desenho do contrato do seu negócio',
			paragrafos: [
				'Não existe contrato empresarial padrão porque não existe operação padrão. Os fatores abaixo mudam o desenho e podem ser levantados internamente antes de falar com fornecedor — o que muda o que sai da conversa: em vez de um catálogo com o nome da empresa no cabeçalho, um desenho específico, com o que foi incluído, o que foi descartado e por quê.'
			],
			lista: [
				'Quantas pessoas usam telefonia corporativa e em quantos perfis de uso elas se dividem',
				'Quantos endereços a operação tem e quais dependem de conectividade fixa estável',
				'Se há equipe em campo, deslocamento frequente ou trabalho remoto relevante',
				'Qual o horizonte de crescimento: novas unidades, contratações em bloco, sazonalidade',
				'Quantos CNPJs compõem o grupo e como o custo precisa ser rateado entre eles',
				'Quem, dentro da empresa, será o ponto de contato para o contrato depois de ativado'
			]
		}
	],

	passos: {
		titulo: 'O que um consultor checa antes de consolidar a telecom do seu negócio',
		subtitulo:
			'Quatro conferências, nesta ordem. Nenhuma delas é pacote pronto: são as perguntas que precisam de resposta antes de existir proposta.',
		itens: [
			{
				title: 'O que a empresa tem hoje',
				text: 'Linhas, endereços, fornecedores, contratos e vencimentos. É esse retrato, somado à fatura atual, que separa o que está contratado, o que é usado e o que é pago sem uso.'
			},
			{
				title: 'Viabilidade, endereço a endereço',
				text: 'Um consultor checa a viabilidade de cada endereço antes de qualquer promessa de prazo. É essa resposta que define a composição possível entre móvel e fixo e a distribuição de franquia por perfil.'
			},
			{
				title: 'Em que ponto do volume o contrato está',
				text: 'O desconto progressivo melhora conforme o volume de linhas, a partir de dez. Consolidar coloca na mesma conta o total que estava espalhado entre fornecedores — e é isso que muda a condição.'
			},
			{
				title: 'O que fica combinado para depois',
				text: 'Crescimento do parque, abertura de unidade e fim de contrato são os marcos em que a conta precisa ser revista. Vale deixar claro, antes de assinar, quem procura quem em cada um deles.'
			}
		]
	},

	objecoes: [
		{
			q: '“Minha empresa é pequena demais para isso.”',
			a: 'Pode ser mesmo, e a régua está publicada nesta página: com uma variável só — uma linha, um endereço, um serviço — consolidar rende pouco. O que costuma render nesse porte é revisar o dimensionamento do que já existe. Se for o seu caso, é o que você vai ouvir — e a checagem da necessidade continua valendo do mesmo jeito, sem custo.'
		},
		{
			q: '“Não quero depender de um fornecedor só.”',
			a: 'É legítimo e, em parte das operações, é a decisão certa: quem não pode parar mantém redundância deliberada, às vezes com fornecedores diferentes de propósito. A distinção que vale fazer é entre redundância planejada, que é proteção, e dispersão acumulada, que é a ausência de uma decisão. A primeira se mantém; a segunda custa dinheiro sem entregar segurança nenhuma.'
		},
		{
			q: '“Trocar tudo de uma vez vai parar a operação.”',
			a: 'Por isso a ordem importa, e ela é critério a exigir de qualquer fornecedor: o acesso novo entra e é validado antes de o antigo sair, a portabilidade acontece em janela combinada e as linhas seguem funcionando. Em estruturas com várias unidades, faz sentido começar pela de menor impacto — e, antes de qualquer cronograma, um consultor checa a viabilidade de cada endereço.'
		},
		{
			q: '“Já temos alguém que cuida disso internamente.”',
			a: 'Então metade do trabalho já existe, e isso muda o projeto para melhor: com inventário atualizado, a conversa é mais rápida e mais precisa. Um consultor não entra no lugar dessa pessoa: entra para checar a viabilidade dos endereços e a necessidade de cada perfil de uso, que é a parte que consome tempo sem exigir conhecimento interno da empresa.'
		},
		{
			q: '“Consultor nomeado é só um nome bonito para vendedor.”',
			a: 'Pode ser, e por isso aqui está publicado o teste em vez do adjetivo: pergunte quem responde pelo seu contrato hoje, com nome e contato direto. Vale para qualquer fornecedor, inclusive para nós, e a resposta se confirma em uma ligação. Se vier um número de protocolo, você tem um canal — e canal resolve o padronizável, mas não acompanha marco de crescimento nem vencimento de contrato.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, com sede em Sorocaba/SP e CNPJ 23.474.830/0001-56, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD — o que significa desenhar contratos em escalas bem diferentes, com problemas que não se parecem entre si.',
			'A régua de consolidação publicada aqui vale explicitar: compensa a partir de duas variáveis — mais de um serviço, mais de um endereço ou parque acima de uma dezena de linhas, que é também o ponto em que o desconto progressivo por volume começa a melhorar. Abaixo disso, o ganho real está em dimensionar corretamente o que já existe. Dizer isso custa lead no curto prazo, mas custa menos do que entregar um projeto que a empresa não precisava.',
			'O teste do consultor nomeado é publicado pelo mesmo motivo, e se volta contra nós na mesma medida em que se volta contra qualquer concorrente: promessa de atendimento que não pode ser verificada com uma pergunta não é promessa, é adjetivo. Por isso esta página promete pouco e promete o que dá para cobrar: um consultor checa a viabilidade no endereço e a necessidade da operação, e o desconto progressivo melhora conforme o volume, a partir de dez linhas. Não há valor nem estimativa de economia aqui, nem promessa de prazo de instalação ou de aprovação de crédito — os dois dependem da operadora e da viabilidade no endereço.'
		]
	},

	faqTitulo: 'Dúvidas de quem está avaliando levar a telecom para a TIM',
	faq: [
		{
			q: 'Preciso migrar todos os serviços de uma vez?',
			a: 'Não. Quando a operação não permite parar, o caminho usual é migrar por etapas, com a estrutura atual no ar até a nova estar funcionando. Começar por uma unidade ou por um grupo de linhas e ampliar depois que o arranjo estiver validado é o padrão a combinar antes de assinar.'
		},
		{
			q: 'O que acontece com os números que já divulgamos?',
			a: 'Permanecem os mesmos. A portabilidade preserva fixos e móveis, é agendada em janela combinada e as linhas seguem funcionando durante o processo — clientes, fornecedores e materiais impressos não precisam ser atualizados.'
		},
		{
			q: 'Quem atende a empresa depois da ativação?',
			a: 'Os canais oficiais da operadora seguem disponíveis para chamado técnico, e é por eles que passa o suporte de rede. Antes de assinar, pergunte a qualquer fornecedor quem responde pelo contrato depois da ativação, com nome e contato — é a pergunta que separa consultor de canal.'
		},
		{
			q: 'E se a empresa crescer ou abrir uma filial?',
			a: 'O crescimento é acrescentado ao contrato existente, sem recomeçar cadastro e análise — e soma ao volume total, que é o que move o desconto progressivo a partir de dez linhas. Para unidade nova, um consultor checa a viabilidade no endereço com antecedência, porque o prazo de instalação é o item que mais atrasa inauguração.'
		},
		{
			q: 'Empresa com mais de um CNPJ consegue um contrato só?',
			a: 'Estruturas de grupo são desenhadas caso a caso, considerando como o custo precisa ser rateado e quem responde por cada parte. Consolidar linhas dispersas entre CNPJs é uma das primeiras coisas a checar, inclusive porque a condição por volume enxerga o total do contrato, e não linhas espalhadas por vários.'
		},
		{
			q: 'Vocês atendem presencialmente?',
			a: 'A sede fica em Sorocaba/SP, na Vila Hortência, e é onde existe atendimento presencial. As cidades do entorno são área atendida, sem unidade física; fora do eixo, o atendimento é remoto. Em qualquer um dos casos, um consultor checa a viabilidade do endereço e a necessidade da operação.'
		}
	],

	cta: {
		titulo: 'Comece pela checagem do que a sua empresa tem hoje',
		texto:
			'Um consultor checa a viabilidade nos seus endereços e a necessidade da operação — linhas, perfis de uso e o que já está contratado — e mostra o que muda ao consolidar, inclusive quando a conclusão é que não compensa. Sem custo e sem compromisso.'
	},

	service: {
		name: 'Consolidação de telefonia e internet empresarial na TIM Empresas',
		serviceType: 'Consultoria e gestão de telecom empresarial',
		description:
			'Consolidação de telefonia móvel e internet fixa empresarial em contrato único: um consultor checa a operação e a viabilidade, a franquia é distribuída por perfil de uso e o desconto progride por volume a partir de dez linhas.'
	},

	relacionadas: [
		'melhores-precos-tim-para-empresas',
		'desconto-tim-para-empresas',
		'plano-corporativo-para-grandes-empresas'
	],
	artigos: [
		'tim-empresas-gestao-linhas-esim-governanca',
		'consultoria-especializada-tim-corporativo-atendimento-b2b',
		'empresas-tim-solucoes-para-negocios-de-todos-os-portes',
		'tim-corporativo-qual-plano-e-ideal-para-mei-pme-e-grande-empresa'
	]
};
