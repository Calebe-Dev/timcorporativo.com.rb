// LP 4 — Cluster verticais. Keyword primária: "internet para escola".
//
// Ângulo de conversão: PRAZO DO CALENDÁRIO LETIVO somado à frustração de quem
// já contratou banda alta e continua com Wi-Fi caindo na aula. A página desmonta
// a confusão entre velocidade contratada e capacidade da rede interna — que é a
// objeção nº 1 de toda direção escolar — e ancora a decisão na janela de recesso,
// porque escola não para para receber instalação.
//
// ⚠ REVISAR ANTES DE PUBLICAR: o critério de dimensionar por dispositivo
// simultâneo no pico, o levantamento de campo sala por sala e a prática de
// posicionar a implantação na janela de recesso descrevem o método do Grupo OC
// em projeto escolar. Confirme com a equipe antes de publicar.

export default {
	slug: 'internet-para-escolas-e-instituicoes-de-ensino',
	cluster: 'verticais',
	ordem: 4,

	title: 'Internet para Escolas e Instituições de Ensino',
	description:
		'Internet para escolas: Wi-Fi que aguenta sala cheia, laboratório, portaria e secretaria no mesmo link. Fale com um consultor TIM Empresas.',
	keywords:
		'internet para escola, internet para faculdade, wi-fi para sala de aula, conectividade para instituição de ensino, internet para escola particular, rede para laboratório de informática',
	keywordPrimaria: 'internet para escola',

	h1: 'Escola conectada: sala cheia, laboratório e secretaria sem disputar a mesma banda',

	cardTitulo: 'Escolas e instituições de ensino',
	cardTexto:
		'Quando o Wi-Fi cai na aula, o problema quase nunca é a velocidade contratada — é densidade. E a janela para resolver isso tem nome: recesso.',

	hero: {
		eyebrow: 'Escolas e instituições de ensino',
		sub: 'Contratar mais banda e continuar com a aula travando é a queixa mais comum de quem dirige escola. O gargalo costuma estar na distribuição dentro do prédio, não na estrada que chega até ele. Fazemos o levantamento sala por sala antes de propor qualquer coisa.',
		bullets: [
			'Levantamento de campo por sala e por ponto de acesso',
			'Dimensionamento por dispositivo simultâneo no pico',
			'Secretaria, aula, câmeras e visitante em redes separadas',
			'Implantação planejada para a janela de recesso'
		],
		ctaPrimario: 'Agendar o levantamento da escola',
		whatsapp:
			'Olá! Sou de uma escola e quero avaliar a internet e o Wi-Fi das salas. Podem me ajudar?',
		cartaoTitulo: 'O que avaliamos primeiro'
	},

	keyFacts: [
		{
			label: 'A causa real da queda',
			value: 'Densidade, não velocidade',
			nota: 'Uma sala com dezenas de aparelhos satura o ponto de acesso independentemente da banda contratada.'
		},
		{
			label: 'Como dimensionamos',
			value: 'Por aparelho no pico',
			nota: 'Contamos dispositivos conectados ao mesmo tempo em dia de prova — não metragem nem matrículas.'
		},
		{
			label: 'Experiência',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC, representante autorizado TIM · 4,9 no Google'
		}
	],

	resumo:
		'Escola que contratou banda alta e continua com Wi-Fi caindo quase sempre tem um problema de densidade, não de velocidade: dezenas de aparelhos disputando o mesmo ponto de acesso saturam a sala independentemente do contrato. O dimensionamento correto sai do número de dispositivos simultâneos no pico, e a implantação se planeja a partir do recesso.',

	secoes: [
		{
			id: 'por-que-cai-na-aula',
			h2: 'Por que a internet da escola cai justo na hora da aula',
			paragrafos: [
				'Na maior parte dos casos que atendemos, o problema não é a velocidade contratada: é densidade. Uma sala com dezenas de aparelhos ligados ao mesmo ponto de acesso satura esse ponto independentemente do que está escrito no contrato do link. O aluno vê "sem internet", a direção olha a fatura e conclui que precisa de mais banda, e o sintoma volta na semana seguinte com o valor mais alto.',
				'A distinção que encerra a discussão é simples: o link é a estrada que chega até a escola; a rede interna é a distribuição dentro dela. Alargar a estrada não ajuda se o gargalo está na porteira. Por isso o diagnóstico começa contando aparelhos conectados ao mesmo tempo, andar por andar, e não olhando o número que aparece grande na proposta comercial.'
			]
		},
		{
			id: 'quatro-consumos',
			h2: 'Os quatro consumos que convivem na mesma escola',
			paragrafos: [
				'Uma instituição de ensino tem quatro operações competindo pela mesma via, com prioridades diferentes e nenhuma delas disposta a esperar. O pedagógico usa a rede na hora da aula; o administrativo, o dia inteiro; a segurança, ininterruptamente; e a comunidade escolar, na entrada, no intervalo e nos eventos.'
			],
			lista: [
				'Pedagógico: sala de aula, laboratório e plataforma de conteúdo',
				'Administrativo: secretaria, sistema de matrícula e financeiro',
				'Segurança: câmeras, portaria e controle de acesso',
				'Comunidade: Wi-Fi de visitante, reunião de pais e eventos'
			],
			subsecoes: [
				{
					h3: 'Densidade de dispositivos por sala',
					paragrafos: [
						'O dimensionamento de uma escola sai do número de aparelhos conectados simultaneamente no pico, não da metragem do prédio nem do total de matrículas. Uma sala com um carrinho de tablets em uso e uma sala com projeção passiva têm demandas incomparáveis, ainda que tenham exatamente o mesmo tamanho e o mesmo número de alunos sentados.',
						'Na prática, isso significa levantar quantos pontos de acesso existem, onde estão instalados, quantos aparelhos cada um atende no horário de maior uso e quais salas têm uso pedagógico intensivo. É um levantamento de campo feito no prédio, com o mapa da escola na mão — não uma conta feita por telefone.'
					]
				},
				{
					h3: 'Câmeras e portaria consomem banda de subida',
					paragrafos: [
						'O consumo mais silencioso de uma escola é o das câmeras. Gravação remota e monitoramento enviam dado o tempo todo pela via de subida — justamente a que os planos comuns entregam em fração do download. Quando a aula on-line trava sem explicação aparente, vale checar o que a segurança está enviando naquele exato momento.',
						'A saída não é desligar câmera, e sim priorizar: definir o que tem preferência na via de subida e, quando o volume justifica, separar os caminhos. É uma decisão de projeto, tomada antes da instalação, e não um ajuste feito depois que a direção começa a receber reclamação de professor.'
					]
				},
				{
					h3: 'Dia de prova é o pico previsível',
					paragrafos: [
						'Avaliação on-line concentra simultaneidade num intervalo curto e conhecido com semanas de antecedência. É o melhor teste de carga que uma escola pode fazer e, também, o pior momento para descobrir que a rede não aguenta — porque a prova não se repete e a nota do aluno fica no meio do problema.',
						'Escolas que já passaram por isso costumam trazer a data da próxima avaliação para a reunião de diagnóstico. É o parâmetro mais útil que existe: em vez de discutir velocidade no abstrato, discute-se quantos alunos precisam estar conectados ao mesmo tempo, em quais salas, naquela manhã específica.'
					]
				}
			]
		},
		{
			id: 'segmentacao',
			h2: 'Segmentação: aluno, professor, administrativo e visitante',
			paragrafos: [
				'A secretaria guarda dado de menor de idade, contrato de matrícula e informação financeira de família. Ela nunca deve dividir o mesmo ambiente de rede com o aparelho pessoal de aluno. Essa é uma regra de desenho, não uma recomendação opcional, e vale igualmente na escola de bairro e na instituição com várias unidades.',
				'O desenho usual separa quatro redes sobre o mesmo link, cada uma com sua prioridade e suas permissões. A rede de visitante — usada em reunião de pais, evento e por prestador de serviço — é a que mais frequentemente aparece aberta e ligada ao mesmo ambiente da secretaria nos diagnósticos que fazemos, geralmente porque foi criada às pressas para um evento e nunca mais foi revista.'
			],
			lista: [
				'Administrativa: secretaria, matrícula, financeiro e direção',
				'Pedagógica: sala de aula, laboratório e biblioteca',
				'Visitante: pais, eventos e prestadores, sem acesso ao restante',
				'Segurança: câmeras e controle de acesso, com prioridade própria'
			]
		},
		{
			id: 'comparativo',
			h2: 'Arranjos por porte da instituição',
			paragrafos: [
				'O que muda entre os arranjos abaixo não é a qualidade do serviço, e sim quantos usos simultâneos a rede precisa sustentar e quanto tempo a instituição tolera parada em dia letivo.'
			],
			tabela: {
				head: ['Perfil', 'Link', 'Rede interna', 'Redundância', 'Gestão'],
				rows: [
					[
						'Escola de bairro',
						'Fibra empresarial dimensionada pelo pico',
						'Pontos de acesso nas salas de uso intensivo',
						'Caminho móvel para secretaria e matrícula',
						'Direção, com apoio do consultor'
					],
					[
						'Escola de médio porte com laboratório',
						'Banda maior, com subida dimensionada',
						'Quatro redes segmentadas sobre o mesmo link',
						'Comutação automática',
						'Responsável de TI interno ou terceirizado'
					],
					[
						'Instituição com mais de uma unidade',
						'Padrão replicado em cada endereço',
						'Mesmo desenho de segmentação em todas',
						'Redundância unidade por unidade',
						'Contrato consolidado no CNPJ da mantenedora'
					],
					[
						'Faculdade ou curso técnico',
						'Banda para simultaneidade alta e contínua',
						'Cobertura por bloco, com controle de acesso',
						'Prioridade garantida em avaliação on-line',
						'Equipe de TI com visão central'
					]
				],
				caption:
					'Comparação de arranjos técnicos, sem valores: o desenho depende do número de aparelhos simultâneos no pico, do uso pedagógico de cada sala e da viabilidade no endereço. O arranjo definitivo sai do levantamento feito sala por sala.'
			}
		},
		{
			id: 'checklist',
			h2: 'O que levar para a reunião antes do próximo ano letivo',
			paragrafos: [
				'Leve estas perguntas a qualquer fornecedor que apresentar proposta para a escola. São elas que separam uma conversa sobre velocidade contratada de uma conversa sobre a escola funcionando em dia de aula cheia.'
			],
			checklist: {
				titulo: 'Dez itens antes de fechar o contrato da escola',
				intro: 'Leve o levantamento de campo junto: sem ele, qualquer proposta é palpite bem formatado.',
				itens: [
					'Bandas de descida e de subida contratadas, informadas separadamente',
					'Número de aparelhos conectados simultaneamente no horário de pico',
					'Quantos pontos de acesso existem e quais salas cada um cobre',
					'Rede de visitante isolada da rede administrativa',
					'Câmeras priorizadas ou em caminho próprio',
					'Comportamento previsto da rede em dia de avaliação on-line',
					'Sistema de matrícula em nuvem e o que acontece se a rede cair',
					'Prazo de reparo por escrito e quem atende no período de matrícula',
					'Janela de implantação compatível com o recesso escolar',
					'Portabilidade do telefone já divulgado da secretaria'
				]
			}
		},
		{
			id: 'janela-de-implantacao',
			h2: 'A janela certa para trocar é o recesso',
			paragrafos: [
				'Escola não tem folga de calendário: tem recesso. Toda troca de operadora, mudança de link e reorganização de rede interna que fazemos em instituição de ensino é planejada para caber na janela sem aula, com a decisão tomada com antecedência suficiente para que a instalação não dependa de sorte nem de improviso.',
				'Isso inverte a ordem natural da conversa comercial. Em vez de perguntar quando você quer contratar, perguntamos qual é o próximo recesso e trabalhamos de trás para frente: levantamento de campo, viabilidade no endereço, proposta, aprovação e implantação, tudo posicionado para terminar antes do primeiro sinal do ano letivo.',
				'Quando a necessidade aparece no meio do semestre — e às vezes aparece —, a implantação é feita em etapas, começando pelo que não interrompe aula: secretaria, portaria e áreas administrativas primeiro, salas e laboratório na janela seguinte.'
			]
		},
		{
			id: 'o-que-define-o-investimento',
			h2: 'O que define o investimento de um projeto escolar',
			paragrafos: [
				'Não existe um valor de referência para projeto escolar que sirva para alguma coisa: duas instituições com o mesmo número de alunos podem exigir desenhos completamente diferentes conforme o uso pedagógico da rede. Uma escola com laboratório e avaliação on-line e outra com uso ocasional de projetor não se parecem em nada do ponto de vista técnico, mesmo tendo a mesma metragem e o mesmo número de salas.',
				'Publicamos, no lugar do número, o que entra na conta. Os cinco primeiros itens da lista abaixo costumam decidir o orçamento; o último é a janela de implantação, porque concentrar a instalação no recesso exige planejamento antecipado — e é justamente isso que evita a obra atropelada em semana de aula.'
			],
			lista: [
				'Aparelhos simultâneos no pico e salas de uso pedagógico intensivo',
				'Quantidade de pontos de acesso necessários para cobrir o prédio',
				'Segmentação das redes e nível de controle de acesso exigido',
				'Câmeras e portaria, e o quanto consomem da via de subida',
				'Exigência de comutação automática e prazo de reparo contratado',
				'Número de unidades e viabilidade técnica em cada endereço'
			]
		}
	],

	passos: {
		titulo: 'Como conduzimos um projeto de instituição de ensino',
		subtitulo:
			'Quatro etapas, nesta ordem, encaixadas no calendário letivo — porque escola não para para receber instalação.',
		itens: [
			{
				title: 'Levantamento de campo, sala por sala',
				text: 'Contamos pontos de acesso, aparelhos simultâneos no pico e mapeamos quais salas têm uso pedagógico intensivo. É o levantamento que separa problema de link de problema de rede interna, e ele é feito dentro do prédio.'
			},
			{
				title: 'Viabilidade no endereço e leitura do contrato atual',
				text: 'Confirmamos o que de fato chega ao endereço da escola e lemos o contrato vigente para identificar o que está contratado, o que é usado e o que é pago sem uso.'
			},
			{
				title: 'Proposta com as redes já desenhadas',
				text: 'Apresentamos o arranjo com as quatro redes separadas — administrativa, pedagógica, visitante e segurança — e com a prioridade de cada uma definida por escrito, não combinada de boca.'
			},
			{
				title: 'Implantação na janela de recesso',
				text: 'Agendamos instalação e portabilidade para o período sem aula. A estrutura antiga só é desligada depois de a nova ser validada, e o projeto é encerrado antes do início das aulas.'
			}
		]
	},

	objecoes: [
		{
			q: '“Contratamos uma velocidade alta e mesmo assim cai.”',
			a: 'É a queixa mais comum em escola e quase nunca se resolve com mais banda. Se dezenas de aparelhos disputam o mesmo ponto de acesso, o gargalo está na rede interna e o link poderia ser o dobro sem mudança perceptível na sala. O levantamento de campo diz em qual das duas camadas está o problema — e às vezes a resposta é que o link já está adequado e o dinheiro deve ir para outro lugar.'
		},
		{
			q: '“Wi-Fi é problema de quem vendeu os roteadores.”',
			a: 'A fronteira existe, mas ela não ajuda a direção a resolver nada. Na prática, link e rede interna precisam ser dimensionados juntos: quem contrata banda sem saber quantos aparelhos vão se conectar em cada sala está comprando às cegas, e quem instala ponto de acesso sem saber a banda disponível também.'
		},
		{
			q: '“Só precisamos de internet no laboratório.”',
			a: 'Costuma ser o ponto de partida, não o escopo final. Assim que a plataforma de conteúdo entra na sala comum, o laboratório deixa de ser o único consumo relevante. Vale desenhar o prédio inteiro mesmo que a implantação seja executada por etapas, para não refazer cabeamento e cobertura no ano seguinte.'
		},
		{
			q: '“Trocar no meio do ano letivo é impossível.”',
			a: 'Concordamos, e é por isso que trabalhamos com o recesso como data-alvo. Quando a necessidade não pode esperar, começamos pelas áreas que não interrompem aula — secretaria, portaria e administrativo — e deixamos a parte pedagógica para a janela sem alunos no prédio.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'O critério que orienta esta página é próprio: escola se dimensiona por aparelho conectado simultaneamente no pico — nunca por metragem, número de matrículas ou velocidade contratada. É por isso que o nosso levantamento é feito no prédio, sala por sala, antes de qualquer proposta ser escrita.',
			'A segunda regra é de calendário: projeto escolar se planeja de trás para frente, a partir do recesso. Instalação em semana de aula é a origem da maior parte das reclamações que ouvimos sobre trocas anteriores de fornecedor.'
		]
	},

	faqTitulo: 'Dúvidas de quem dirige escola e instituição de ensino',
	faq: [
		{
			q: 'Contratamos uma velocidade alta e o Wi-Fi continua caindo. Por quê?',
			a: 'Velocidade contratada e capacidade da rede interna são coisas distintas. Uma sala com dezenas de aparelhos ligados a um único ponto de acesso satura independentemente da banda; nesse caso o gargalo está na distribuição dentro da escola, não no link que chega até ela.'
		},
		{
			q: 'Como se calcula a internet necessária para uma escola?',
			a: 'Pelo número de aparelhos conectados ao mesmo tempo no horário de pico, pelo tipo de uso de cada sala e pelo consumo de subida das câmeras. Metragem do prédio e total de matrículas não servem como base de cálculo.'
		},
		{
			q: 'As câmeras podem ficar no mesmo link da aula?',
			a: 'Podem, com priorização definida em projeto. Sem isso, o envio contínuo das câmeras compete pela via de subida com a aula on-line e com o envio de atividades pelos alunos.'
		},
		{
			q: 'Qual a melhor época para trocar a operadora da escola?',
			a: 'O recesso. Planejamos levantamento, viabilidade e portabilidade para terminar antes do início das aulas, com o cronograma acertado ainda na fase de proposta.'
		},
		{
			q: 'A escola mantém o telefone da secretaria ao trocar de operadora?',
			a: 'Sim. A portabilidade preserva o número divulgado em site, comunicado e ficha de matrícula, e a linha segue funcionando durante o processo.'
		}
	],

	cta: {
		titulo: 'Agende o levantamento antes do próximo ano letivo',
		texto:
			'Um consultor percorre a escola sala por sala, confere a viabilidade no endereço e posiciona a implantação na janela de recesso. O levantamento não tem custo e não obriga a contratar.'
	},

	service: {
		name: 'Conectividade para escolas e instituições de ensino',
		serviceType: 'Conectividade empresarial para educação',
		description:
			'Projeto de internet para escolas, faculdades e cursos técnicos: dimensionamento por dispositivo simultâneo no pico, segmentação das redes administrativa, pedagógica, de visitante e de segurança, e implantação na janela de recesso.'
	},

	relacionadas: [
		'internet-empresarial-em-sorocaba',
		'internet-e-telefonia-para-clinicas-e-consultorios',
		'internet-5g-para-empresas-sem-fibra-no-endereco'
	],
	artigos: [
		'tim-ultra-fibra-dimensionar-velocidade-empresa',
		'tim-fibra-empresarial-500-mega-vs-1-giga-qual-a-diferenca-real-no-dia-a-dia',
		'videoconferencias-travando-checklist-de-internet-empresarial-para-trabalho-remoto',
		'tim-empresas-boas-praticas-ti-seguranca-vpn'
	]
};
