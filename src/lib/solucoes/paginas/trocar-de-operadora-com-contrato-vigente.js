// LP 13 — Cluster contrato. Keyword primária: "trocar de operadora com contrato vigente".
//
// Ângulo de conversão: DESTRAVAR quem se sente preso. O lead chega convencido de
// que só existem duas saídas — pagar multa ou esperar o contrato vencer — e a
// página existe para mostrar que existem quatro caminhos e que a escolha entre
// eles sai da leitura do contrato, não do palpite do vendedor.
//
// ⚠ TERRENO JURÍDICO. A SERP do head term "multa de rescisão" é dominada por
// conteúdo jurídico e de defesa do consumidor. Esta página deliberadamente NÃO
// disputa esse termo e NÃO dá orientação jurídica: descreve o que costuma estar
// escrito em contrato e o que conferir. Nenhuma frase pode afirmar que multa é
// abusiva, que pode ser cancelada ou que existe direito de saída sem ônus.
//
// ⚠ O QUE ESTA PÁGINA PODE PROMETER: só duas coisas — (1) um consultor checa a
// viabilidade dos caminhos possíveis para a empresa (o que o contrato prevê, o
// que já está livre, o que a operação aguenta) e (2) o desconto progressivo
// melhora conforme o volume, a partir de dez linhas. Os itens contratuais
// descritos abaixo (permanência mínima, renovação automática, comodato, aviso
// prévio) são CRITÉRIO DO SETOR sobre o que conferir no próprio contrato, nunca
// rotina interna de leitura ou de condução de migração. Nenhum número de prazo
// ou percentual pode ser introduzido na revisão.

export default {
	slug: 'trocar-de-operadora-com-contrato-vigente',
	cluster: 'contrato',
	ordem: 1,

	title: 'Trocar de Operadora com Contrato Vigente',
	description:
		'Quer trocar de operadora mas o contrato ainda está vigente? Veja os caminhos possíveis, o que checar no contrato e como migrar sem parar a operação.',
	keywords:
		'trocar de operadora com contrato vigente, sair do contrato da operadora empresarial, fidelidade de contrato de telecom empresa, migrar de operadora antes do fim do contrato, multa de rescisão telecom empresarial, cancelar contrato de internet empresarial',
	keywordPrimaria: 'trocar de operadora com contrato vigente',

	h1: 'Contrato ainda vigente não é impedimento: os caminhos para trocar de operadora',

	cardTitulo: 'Trocar com contrato vigente',
	cardTexto:
		'Contrato em vigor não significa estar preso a ele. Os quatro caminhos possíveis e o que ler no seu antes de decidir qualquer coisa.',

	hero: {
		eyebrow: 'Contrato vigente',
		sub: 'Sua empresa quer mudar, mas o contrato com a operadora atual ainda não venceu. Antes de concluir que está presa, vale saber que a decisão tem mais de dois desfechos possíveis — e que a leitura do contrato costuma revelar caminhos que ninguém apresentou.',
		bullets: [
			'O que o contrato vigente prevê, checado antes da proposta',
			'Quatro caminhos possíveis, não só sair ou ficar',
			'Migração parcial para reduzir custo e risco',
			'Portabilidade preserva os números fixos e móveis'
		],
		ctaPrimario: 'Falar com um consultor sobre o contrato',
		whatsapp:
			'Olá! Quero trocar de operadora, mas meu contrato ainda está vigente. Podem avaliar?',
		cartaoTitulo: 'Por onde a análise começa'
	},

	keyFacts: [
		{
			label: 'A etapa que vem antes da proposta',
			value: 'Ler o contrato',
			nota: 'Vigência, permanência mínima e aviso prévio mudam qual caminho está disponível.'
		},
		{
			label: 'O caminho mais usado',
			value: 'Migração parcial',
			nota: 'Migra-se primeiro o que não tem vigência própria e mantém-se o resto até vencer.'
		},
		{
			label: 'Experiência',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC, representante autorizado TIM · 4,9 no Google'
		}
	],

	resumo:
		'Dá para trocar de operadora antes do contrato acabar. Existem quatro caminhos — migração programada para o vencimento, migração parcial por serviço ou endereço, renegociação com a operadora atual e saída antecipada assumindo o que o contrato prevê. Qual deles serve à sua empresa depende do que está escrito no seu contrato, e por isso a leitura dele é a primeira etapa, não a última.',

	secoes: [
		{
			id: 'da-para-trocar',
			h2: 'Dá para trocar de operadora antes do contrato acabar?',
			paragrafos: [
				'Dá. O que muda de uma empresa para outra não é a possibilidade, e sim o custo e o risco de cada caminho — e os dois estão descritos no documento que você já assinou. Por isso a resposta honesta nunca é um "pode sair tranquilo" nem um "você está preso": é ler o contrato e verificar quais das quatro rotas estão realmente disponíveis para o seu caso.',
				'A confusão mais comum nessa hora é tratar o contrato de telecom empresarial como um bloco único. Raramente é. Uma empresa costuma ter linhas móveis, acesso de internet por endereço, telefonia e serviços agregados convivendo sob condições diferentes — às vezes com datas de vigência distintas entre si, herdadas de contratações feitas em momentos diferentes. É exatamente essa fragmentação que abre espaço para migrar uma parte agora e o restante depois.',
				'Aviso necessário antes de seguir: esta página descreve o que costuma estar escrito em contratos de telecomunicações empresariais e o que vale conferir antes de decidir. Não é orientação jurídica, não avalia a validade de nenhuma cláusula e não substitui a leitura do seu contrato pelo jurídico da empresa ou por um advogado.'
			]
		},
		{
			id: 'quatro-caminhos',
			h2: 'Os quatro caminhos possíveis',
			paragrafos: [
				'Quase toda empresa nessa situação enxerga apenas dois desfechos: aguentar até o vencimento ou romper e arcar com o que vier. Os outros dois caminhos — migração parcial e renegociação — costumam ser os mais adequados, e são justamente os que ninguém apresenta, porque exigem entender o contrato atual antes de vender qualquer coisa.'
			],
			subsecoes: [
				{
					h3: '1. Migração programada para o vencimento',
					paragrafos: [
						'A empresa decide agora, desenha o destino agora, mas a virada acontece na data em que o vínculo atual se encerra. É o caminho de menor custo e menor risco, e o mais subestimado: exige apenas que a decisão seja tomada com antecedência suficiente para respeitar o prazo de aviso previsto no contrato.',
						'Faz sentido quando a operação atual, embora insatisfatória, não está causando prejuízo imediato — a conta está alta ou o atendimento é ruim, mas nada está fora do ar. Nesse cenário, correr para sair antes do prazo costuma custar mais do que esperar com data marcada.'
					]
				},
				{
					h3: '2. Migração parcial por serviço ou por endereço',
					paragrafos: [
						'Migra-se primeiro aquilo que não está preso a uma vigência própria — em muitos contratos, parte das linhas móveis ou um endereço específico — e mantém-se o restante até o vencimento. A empresa começa a resolver o problema imediatamente, sem acionar cláusulas de saída sobre o contrato inteiro.',
						'É o caminho mais usado na prática, e o que melhor equilibra custo e risco. Também funciona como teste real: a empresa experimenta o novo fornecedor em uma parte da operação antes de comprometer todo o restante.'
					]
				},
				{
					h3: '3. Renegociação com a operadora atual',
					paragrafos: [
						'Nem sempre o problema é a operadora — às vezes é o desenho do contrato, que envelheceu junto com a empresa. Quando o diagnóstico aponta franquia inadequada, linhas ociosas ou serviços que ninguém usa, existe a chance de o ajuste ser feito onde a empresa já está, sem troca de fornecedor.',
						'Dizemos isso mesmo sendo canal de outra operadora, e por um motivo prático: uma proposta que ignora essa possibilidade é uma proposta que a empresa vai descobrir depois — normalmente quando o concorrente apresentar.'
					]
				},
				{
					h3: '4. Saída antecipada assumindo o que o contrato prevê',
					paragrafos: [
						'É o último caminho da lista de propósito. Existe, é legítimo e às vezes é a decisão certa — quando o custo de continuar como está supera claramente o custo previsto para encerrar antes do prazo. O que não dá é decidir por esse caminho sem antes ter lido a cláusula que o rege e entendido como o valor é apurado.',
						'Aqui vale a única recomendação categórica desta página: peça o cálculo por escrito à operadora atual antes de assinar qualquer coisa com outra. Estimativa verbal de encerramento não serve de base para decisão.'
					]
				}
			]
		},
		// ⚠ REVISAR: esta seção descreve cláusulas COMUNS em contratos de telecom
		// empresarial — permanência mínima, renovação automática, comodato. De
		// propósito não há nenhum prazo de aviso prévio em dias, nenhum percentual de
		// multa proporcional e nenhuma citação de regra da Anatel. Tudo remete a
		// "confira no seu contrato". Se a revisão quiser acrescentar um número, ele
		// precisa vir de fonte vigente e verificada — caso contrário, mantenha assim.
		{
			id: 'ler-no-contrato',
			h2: 'O que ler no seu contrato antes de qualquer coisa',
			paragrafos: [
				'Toda a diferença entre uma migração tranquila e uma migração cara está em seis pontos do documento. Nenhum deles exige formação jurídica para ser localizado — exige apenas que alguém abra o contrato, o que é justamente o que quase nunca acontece antes de a decisão já estar tomada.',
				'Se o contrato não estiver em mãos, a fatura resolve boa parte. Ela costuma revelar quais serviços estão ativos, quais equipamentos estão sendo cobrados e em quantos endereços a empresa aparece — informação suficiente para começar a análise enquanto a via do contrato é solicitada à operadora.'
			],
			subsecoes: [
				{
					h3: 'Permanência mínima e vigência não são a mesma coisa',
					paragrafos: [
						'Confundir as duas é o erro mais comum nessa conversa. A vigência é o prazo de duração do contrato; a permanência mínima é o período em que a empresa se comprometeu a manter determinado serviço, normalmente em troca de alguma condição comercial concedida na contratação.',
						'Elas podem ter datas diferentes, e podem existir várias permanências mínimas dentro de um mesmo contrato — uma por serviço ou por lote de ativação. É por isso que a resposta "meu contrato vence em tal mês" quase nunca é suficiente para desenhar a migração.'
					]
				},
				{
					h3: 'Renovação automática: a cláusula que reinicia o relógio',
					paragrafos: [
						'Muitos contratos empresariais preveem renovação automática caso nenhuma das partes se manifeste dentro de um prazo definido no próprio documento. Quem descobre isso tarde encontra o contrato renovado sem que ninguém tenha assinado nada de novo.',
						'É o motivo pelo qual a data do aviso — e não a data do vencimento — é o marco real do calendário. Quando a empresa se organiza pelo vencimento, a janela para se manifestar frequentemente já passou.'
					]
				},
				{
					h3: 'Equipamento em comodato: o item esquecido',
					paragrafos: [
						'Roteadores, modems, aparelhos e centrais cedidos em comodato pertencem à operadora e precisam ser devolvidos no encerramento, com registro do que foi entregue e quando. É o item que mais gera cobrança posterior, meses depois de todos acharem que o assunto estava encerrado.',
						'Na transição, ele precisa entrar no checklist com nome e número de série. Protocolo de devolução guardado vale mais que a lembrança de quem entregou.'
					]
				}
			],
			lista: [
				'Data de início, data de vencimento e forma de contagem do prazo',
				'Permanência mínima vigente por serviço, e não apenas do contrato como um todo',
				'Cláusula de renovação automática e o prazo para se manifestar',
				'Como o contrato descreve a apuração de valores em caso de encerramento antecipado',
				'Equipamentos em comodato, com a relação do que precisa ser devolvido',
				'Serviços agregados com vigência própria, contratados fora do pacote principal'
			]
		},
		{
			id: 'migracao-parcial',
			h2: 'Migração parcial: por que costuma ser a saída mais inteligente',
			paragrafos: [
				'A migração parcial resolve dois problemas ao mesmo tempo. Reduz o custo, porque não aciona cláusulas de encerramento sobre serviços que ainda estão em permanência mínima. E reduz o risco, porque a empresa não troca toda a sua infraestrutura de comunicação de uma vez, apostando às cegas em um fornecedor que ainda não conhece na prática.',
				'O desenho costuma ser simples: identifica-se o que está livre de vigência, isso migra primeiro, o restante fica com data marcada para acompanhar. A empresa passa a conviver com dois fornecedores por um período conhecido e planejado — não por acidente. Quando o vínculo remanescente vence, a segunda etapa já está desenhada, homologada e testada, e vira uma operação administrativa em vez de um projeto.',
				'Há um efeito colateral desejável nesse arranjo: a operadora atual costuma responder melhor a uma empresa que já migrou parte da operação do que a uma empresa que apenas ameaça sair. Se a renegociação for o melhor desfecho, ela tende a acontecer nesse ponto.'
			]
		},
		{
			id: 'comparativo',
			h2: 'Os quatro caminhos lado a lado',
			paragrafos: [
				'A tabela abaixo compara os caminhos pelos critérios que realmente pesam na decisão de quem administra a empresa. Não há valores porque não existe número honesto aqui: o impacto financeiro de cada rota depende do que está no contrato específico e da apuração feita pela operadora atual.'
			],
			tabela: {
				head: ['Critério', 'Migração programada', 'Migração parcial', 'Renegociação', 'Saída antecipada'],
				rows: [
					[
						'Quando faz sentido',
						'Insatisfação sem urgência operacional',
						'Parte dos serviços livre de vigência',
						'O problema é o desenho, não o fornecedor',
						'Continuar custa mais que encerrar'
					],
					[
						'Impacto no custo',
						'O menor de todos',
						'Limitado ao que migra agora',
						'Depende da contraproposta',
						'Definido pelo que o contrato prevê'
					],
					[
						'Risco de interrupção',
						'Baixo, com data planejada',
						'Baixo, feito por etapas',
						'Nenhum, nada é desligado',
						'Médio, exige transição bem conduzida'
					],
					[
						'Prazo até resolver',
						'Aguarda o vencimento',
						'Começa imediatamente',
						'Curto, se houver abertura',
						'Curto, com custo antecipado'
					],
					[
						'Esforço interno',
						'Baixo, mas exige calendário',
						'Médio, dois fornecedores por um período',
						'Baixo',
						'Alto, tudo muda de uma vez'
					]
				],
				caption:
					'Comparação de caminhos, sem valores: o efeito financeiro de cada rota depende das cláusulas do contrato vigente e da apuração da operadora atual, que deve ser solicitada por escrito.'
			}
		},
		{
			id: 'checklist',
			h2: 'Dez itens para levantar no seu contrato atual',
			paragrafos: [
				'Esta lista vale mesmo que a proposta não seja nossa. São os pontos que, quando ficam de fora, aparecem depois — em geral na forma de uma cobrança que ninguém esperava, semanas após todo mundo considerar a mudança concluída.'
			],
			checklist: {
				titulo: 'Levantamento antes de decidir',
				intro: 'Reúna estes dez itens antes de conversar com qualquer fornecedor, inclusive conosco.',
				itens: [
					'Data de início e data de vencimento do contrato',
					'Permanência mínima ainda vigente, serviço por serviço',
					'Existência e prazo da cláusula de renovação automática',
					'Como o contrato descreve a apuração de encerramento antecipado',
					'Prazo de aviso previsto para manifestar a intenção de não renovar',
					'Relação de equipamentos em comodato, com números de série',
					'Serviços agregados contratados fora do pacote principal',
					'Titularidade dos números fixos e móveis, conferida no CNPJ correto',
					'Registros de descumprimento de serviço, com protocolos e datas',
					'Canal formal exigido pelo contrato para enviar solicitações'
				]
			}
		}
	],

	passos: {
		titulo: 'O que um consultor checa numa transição com contrato vigente',
		subtitulo:
			'Quatro conferências nesta ordem. O contrato vem antes da proposta porque propor sem entender o vínculo atual é como orçar uma reforma sem ver a planta.',
		itens: [
			{
				title: 'O que o contrato e a fatura mostram',
				text: 'Vigências, permanências mínimas, serviços agregados, equipamentos em comodato e a data em que o aviso precisa ser dado. Sem esse mapa, qualquer proposta é chute com papel timbrado.'
			},
			{
				title: 'Qual dos quatro caminhos é viável',
				text: 'Um consultor checa a viabilidade de cada rota para o seu caso e o que ela implica — inclusive quando a conclusão é permanecer onde está até o vencimento, o que acontece com frequência.'
			},
			{
				title: 'A ordem que evita ficar sem comunicação',
				text: 'O critério a exigir de qualquer fornecedor: o acesso novo é instalado e testado com a estrutura antiga ainda no ar, e a portabilidade dos números acontece em janela combinada com a empresa.'
			},
			{
				title: 'O que conferir depois da virada',
				text: 'Serviço anterior encerrado só depois do novo validado, protocolo de solicitação guardado, devolução de equipamentos registrada e faturas seguintes conferidas até o encerramento aparecer nelas.'
			}
		]
	},

	objecoes: [
		{
			q: '“Vou ter que pagar multa de qualquer jeito.”',
			a: 'Talvez sim, talvez não — e essa resposta só sai do seu contrato. O que costuma definir é se ainda existe permanência mínima vigente sobre os serviços que você quer mover, e sobre quais deles. Em boa parte dos contratos empresariais, uma parte da operação está livre e outra não, o que muda a conversa de "sair ou ficar" para "migrar o que já pode e programar o resto".'
		},
		{
			q: '“A operadora não vai deixar eu sair.”',
			a: 'Encerramento e renovação seguem o que está escrito no contrato e devem ser solicitados pelo canal formal que ele define, com protocolo. O ponto de atenção real não é resistência: é prazo. Solicitação feita fora da janela de aviso costuma esbarrar na renovação automática, e aí a discussão passa a ser sobre um contrato novo.'
		},
		{
			q: '“Vou perder os números da empresa.”',
			a: 'Não perde. A portabilidade preserva fixos e móveis, a titularidade permanece com a empresa e as linhas seguem funcionando durante o processo. O cuidado prático é conferir se todos os números estão sob o CNPJ correto — em empresas que passaram por reestruturação, é comum encontrar linhas em titularidade antiga.'
		},
		{
			q: '“Melhor esperar vencer e resolver na hora.”',
			a: 'Esperar pode ser a decisão certa; deixar para resolver na hora, quase nunca. Quem chega ao mês do vencimento sem decisão tomada costuma encontrar a renovação automática já acionada e, além disso, negocia da pior posição possível — com pressa e sem alternativa desenhada. Decidir cedo e executar no vencimento é diferente de adiar.'
		},
		{
			q: '“Não tenho o contrato em mãos.”',
			a: 'Solicite a via à operadora pelo canal formal e comece pela fatura enquanto ela não chega. A fatura já mostra serviços ativos, endereços, equipamentos cobrados e a composição do que a empresa paga — o suficiente para montar boa parte do diagnóstico e identificar o que precisa ser confirmado no contrato.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'O critério que orienta esta página inverte a ordem padrão do mercado: o contrato vigente vem antes da proposta. A ordem usual — proposta primeiro, contrato depois — produz migrações que só revelam o custo real quando já não há como voltar atrás. Conferir antes custa uma reunião e evita esse tipo de surpresa.',
			'Também faz parte do critério dizer quando o melhor caminho é ficar. Terminar em "renegocie onde você está" é um desfecho legítimo, e acontece com frequência suficiente para estar escrito aqui. O que fica prometido é curto: um consultor checa a viabilidade dos caminhos possíveis para a sua empresa, sem custo, e o desconto progressivo melhora conforme o volume de linhas do contrato, a partir de dez.',
			'Por fim, o limite: esta página trata de contrato do ponto de vista comercial e operacional de telecom. Não há parecer jurídico, avaliação de validade de cláusula nem recomendação de conduta processual. Quando a discussão entra nesse terreno, o lugar dela é com o advogado da empresa.'
		]
	},

	faqTitulo: 'Dúvidas de quem quer migrar com contrato em vigor',
	faq: [
		{
			q: 'Sempre vou pagar multa se sair antes do prazo?',
			a: 'Nem sempre. Depende do que está escrito no seu contrato, de haver ou não permanência mínima ainda vigente sobre os serviços em questão e de eventuais descumprimentos documentados. A leitura do contrato vem antes de qualquer conclusão, e ela não substitui a avaliação jurídica da empresa.'
		},
		{
			q: 'Posso migrar só uma parte dos serviços?',
			a: 'Pode, e costuma ser o melhor caminho. Migra-se o que não está preso a vigência própria e mantém-se o restante até o vencimento, já com o destino desenhado e a data marcada para a segunda etapa.'
		},
		{
			q: 'A empresa perde os números ao trocar de operadora?',
			a: 'Não. A portabilidade preserva fixos e móveis e a titularidade permanece com a empresa. As linhas continuam funcionando durante o processo, que é agendado em janela combinada com você.'
		},
		{
			q: 'Não encontro meu contrato. Como faço?',
			a: 'Solicite a via à operadora pelo canal formal previsto e guarde o protocolo. Enquanto ela não chega, a fatura já revela boa parte do que interessa: serviços ativos, endereços, equipamentos cobrados e composição do que é pago todo mês.'
		},
		{
			q: 'Com quanta antecedência devo começar?',
			a: 'Antes do prazo de aviso previsto no seu contrato — que é anterior ao vencimento, e nem sempre por poucos dias. Na prática, começar meses antes é o que mantém todos os caminhos abertos; deixar para o mês do vencimento costuma acionar a renovação automática.'
		}
	],

	cta: {
		titulo: 'Descubra quais dos quatro caminhos estão abertos para você',
		texto:
			'Um consultor checa a viabilidade de cada rota para a sua empresa: o que o contrato vigente prevê, o que já está livre de permanência e o que a operação aguenta — inclusive quando o melhor caminho é permanecer onde você está. Sem compromisso e sem cobrança.'
	},

	service: {
		name: 'Migração de operadora com contrato vigente',
		serviceType: 'Consultoria em migração de telecomunicações empresariais',
		description:
			'Migração de telecom empresarial com contrato ainda vigente: um consultor checa vigências e permanências mínimas, indica o caminho de migração viável e a portabilidade preserva os números da empresa.'
	},

	relacionadas: [
		'auditoria-de-fatura-de-telecom',
		'alternativa-a-oi-empresas',
		'renovacao-de-contrato-tim-empresas'
	],
	artigos: [
		'portabilidade-tim-empresarial-como-trocar-de-operadora-e-manter-numero',
		'migrar-de-operadora-corporativa-e-burocratico-passo-a-passo-da-portabilidade-tim',
		'migracao-operadora-tim-empresas-processo-cuidados',
		'tim-portabilidade-cnpj-guia-completo'
	]
};
