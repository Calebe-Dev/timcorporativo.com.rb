// LP 16 — Cluster contrato. Keyword primária: "internet e telefone para filial nova".
//
// Ângulo de conversão: PRAZO DE INAUGURAÇÃO. A obra tem data marcada e a camada
// de telecom é a última de que alguém se lembra — normalmente quando já não há
// prazo para consertar. A página vende cronograma e ordem das providências, não
// produto.
//
// Espaço de SERP: as buscas sobre abrir filial devolvem conteúdo contábil e
// societário (Sebrae, contabilidades, sistemas de gestão). Ninguém cobre a
// camada de telecom, que é justamente a que atrasa inauguração.
//
// ⚠ CANIBALIZAÇÃO INTERNA (MÉDIA): os artigos de SD-WAN e de franquias tratam de
// CONECTAR UNIDADES QUE JÁ EXISTEM. Esta LP trata do EVENTO de abrir uma nova —
// viabilidade de endereço, prazo, ordem das providências. Title e H1 não podem
// conter "múltiplas filiais".
//
// ⚠ R6: nenhuma menção a "link dedicado" como termo-alvo e nenhuma página de
// voz/PABX — pertencem a outros domínios do grupo. Telefonia entra só como
// componente do desenho da unidade.
//
// ⚠ REVISAR ANTES DE PUBLICAR: NENHUM prazo de instalação em dias foi escrito
// nesta página, de propósito — o prazo depende de tecnologia, endereço e
// necessidade de rede nova. Se a equipe quiser publicar prazo típico, precisa ser
// dado real e verificável, não estimativa.
//
// ⚠ O QUE ESTA PÁGINA PODE PROMETER: só duas coisas — (1) um consultor checa a
// viabilidade no endereço candidato e a necessidade da nova unidade e (2) o
// desconto progressivo melhora conforme o volume, a partir de dez linhas.
// Nenhuma etapa interna de execução (acompanhamento de obra, teste de carga,
// liberação da unidade) é afirmada como rotina do time.

export default {
	slug: 'telecom-para-abertura-de-filial',
	cluster: 'contrato',
	ordem: 4,

	title: 'Internet e Telefone para Abertura de Filial',
	description:
		'Vai abrir uma filial? Veja o prazo real de instalação, a ordem das providências e como não inaugurar sem internet nem telefone. Consulte a viabilidade.',
	keywords:
		'internet e telefone para filial nova, conectividade para nova unidade da empresa, instalar internet em filial, prazo de instalação de internet empresarial, telefone para escritório novo, checklist de infraestrutura para nova unidade',
	keywordPrimaria: 'internet e telefone para filial nova',

	h1: 'Nova unidade sem inaugurar no escuro: o cronograma de telecom que ninguém planeja',

	cardTitulo: 'Abertura de filial',
	cardTexto:
		'Viabilidade e instalação têm prazo próprio, que não acompanha o da obra. A ordem das providências para não inaugurar sem conexão.',

	hero: {
		eyebrow: 'Abertura de filial',
		sub: 'A obra tem data de inauguração e o cronograma de telecom quase nunca entra nela. Quando entra tarde, a unidade abre operando pelo celular de alguém — ou não abre. A ordem correta começa antes do que a maioria imagina: no momento em que o endereço é escolhido.',
		bullets: [
			'Um consultor checa a viabilidade no endereço candidato',
			'Alternativa técnica quando a rede fixa não chega',
			'Infraestrutura interna prevista ainda na obra',
			'Data de ativação anterior à data de inauguração'
		],
		ctaPrimario: 'Consultar viabilidade do endereço',
		whatsapp:
			'Olá! Vamos abrir uma nova unidade e preciso avaliar internet e telefone para o endereço. Podem ajudar?',
		cartaoTitulo: 'O que decide o cronograma'
	},

	keyFacts: [
		{
			label: 'Quando começar',
			value: 'Ao definir o endereço',
			nota: 'Viabilidade e instalação têm prazo próprio, independente do cronograma da obra.'
		},
		{
			label: 'O erro mais caro',
			value: 'Assinar a locação antes',
			nota: 'Endereço sem viabilidade descoberto depois do contrato assinado fecha as saídas boas.'
		},
		{
			label: 'O que a obra decide',
			value: 'Entrada, tubulação e rack',
			nota: 'Custam pouco enquanto a parede está aberta e muito depois de ela fechar.'
		}
	],

	resumo:
		'A hora de tratar de internet e telefone da nova unidade é quando o endereço é definido, não quando a obra termina. Viabilidade técnica e instalação têm prazo próprio, que corre em paralelo à reforma e não acelera junto com ela. Consultar a viabilidade antes de assinar a locação é a única decisão desta lista que, se ficar para depois, não tem como ser corrigida sem custo.',

	secoes: [
		{
			id: 'quando-comecar',
			h2: 'Quando começar a tratar de internet e telefone',
			paragrafos: [
				'No momento em que o endereço é definido. Não quando a obra termina, não quando o mobiliário chega, não na semana da inauguração. Viabilidade técnica e instalação seguem um cronograma próprio, que corre em paralelo à reforma e não acelera porque a empresa tem pressa — é o único item do projeto que não depende de contratar mais gente para andar mais rápido.',
				'A confusão é compreensível. Como quase tudo em uma abertura de unidade responde a dinheiro e a urgência, assume-se que a conexão também responderá. Só que a variável decisiva aqui não está sob controle da empresa nem do fornecedor: é o que já existe de infraestrutura naquela rua, naquele número, naquele prédio.',
				'Por isso a pergunta certa no início do projeto não é "quanto custa a internet da filial?" e sim "o que chega neste endereço, e em quanto tempo?". A primeira pergunta só tem resposta útil depois da segunda.'
			]
		},
		{
			id: 'por-que-atrasa',
			h2: 'Por que a inauguração atrasa por causa de telecom',
			paragrafos: [
				'Em abertura de unidade, o atraso quase nunca vem de uma surpresa técnica exótica. Vem de quatro erros de sequência, todos evitáveis, todos cometidos por gente competente que simplesmente tratou telecom como item de compra e não como item de cronograma.',
				'O padrão se repete: a unidade fica pronta, bonita, com equipe contratada e data anunciada — e sem conexão. A operação improvisa por rede móvel de celular pessoal, o sistema de gestão fica lento, a maquininha cai no horário de pico e a primeira impressão do cliente na unidade nova é a de uma empresa desorganizada.'
			],
			lista: [
				'Endereço sem viabilidade descoberto depois da locação assinada',
				'Prazo de instalação subestimado, encaixado nos últimos dias da obra',
				'Infraestrutura interna não prevista na reforma — sem tubulação, sem ponto de entrada, sem lugar para o rack',
				'Telefonia decidida no fim, gerando número novo que ninguém conhece em vez de integração com a estrutura existente',
				'Equipamentos pedidos tarde, chegando depois da data de ativação',
				'Ninguém designado como responsável interno, com a filial e a matriz esperando uma da outra'
			]
		},
		{
			id: 'ordem-das-providencias',
			h2: 'A ordem correta das providências',
			paragrafos: [
				'A sequência abaixo não é uma sugestão de organização: é a ordem em que as decisões deixam de ser reversíveis. Cada etapa cumprida no tempo certo mantém as opções abertas na etapa seguinte; cada uma adiada elimina alternativas que não voltam.'
			],
			lista: [
				'1. Consultar a viabilidade técnica no endereço candidato, antes de assinar a locação',
				'2. Definir o arranjo da unidade: conexão principal, redundância e telefonia',
				'3. Levar a infraestrutura interna para a planta da obra, enquanto a parede está aberta',
				'4. Contratar com data de ativação anterior à data de inauguração',
				'5. Ativar, testar com carga real e só então marcar a abertura como confirmada'
			],
			subsecoes: [
				{
					h3: 'Consultar a viabilidade antes de assinar o contrato de locação',
					paragrafos: [
						'Esta é a recomendação mais valiosa da página inteira, e a que quase nenhum material sobre abertura de filial menciona — porque quem escreve sobre abrir filial escreve sobre a parte contábil e societária, não sobre o que chega de rede no imóvel. Consultar a viabilidade é rápido e acontece antes de qualquer compromisso: basta o endereço completo.',
						'A diferença que isso faz é de natureza, não de grau. Com a consulta feita antes, um endereço sem infraestrutura adequada é apenas mais um critério na escolha do imóvel, ao lado de aluguel, metragem e localização. Com a consulta feita depois, ele vira um problema sem saída boa: a empresa está contratualmente presa a um ponto onde a operação que ela planejou não roda como deveria.',
						'Em uma abertura de unidade, o custo de checar é uma conversa. O custo de não checar é um contrato de locação de anos amarrado a um endereço que limita a operação todos os dias.'
					]
				},
				{
					h3: 'O que a obra precisa deixar pronto',
					paragrafos: [
						'Existe uma janela curta, no meio da reforma, em que decisões de infraestrutura custam quase nada: enquanto a parede está aberta e o forro não fechou. Ponto de entrada acordado com o locador ou com a administração do prédio, tubulação até o local do rack, tomadas elétricas dedicadas e um lugar ventilado e com acesso controlado para os equipamentos.',
						'Depois que a obra termina, cada um desses itens vira uma pequena reforma dentro de uma unidade já pronta, muitas vezes com a operação rodando. O mesmo cabo passa a exigir remoção de forro, autorização de condomínio e trabalho fora do horário comercial.',
						'É por isso que a definição do arranjo precisa vir antes do fim da obra e não depois: a planta da reforma é o documento em que essas decisões precisam aparecer, junto com elétrica e hidráulica.'
					]
				}
			]
		},
		{
			id: 'herdar-da-matriz',
			h2: 'Filial não é empresa nova: o que herdar da matriz',
			paragrafos: [
				'O reflexo mais comum ao abrir uma unidade é contratar tudo do zero, como se fosse uma empresa recém-criada. Na maioria dos casos isso é desperdício em três frentes: descarta condições comerciais que a empresa já conquistou, cria uma segunda relação de atendimento onde havia uma, e produz uma fatura separada que ninguém concilia com a primeira.',
				'Uma filial pode entrar no contrato já existente, somando ao volume total da empresa em vez de começar uma contagem paralela. Isso mantém um único ponto de atendimento para as duas unidades e simplifica a gestão de linhas, aparelhos e endereços — o que, meses depois, é a diferença entre uma fatura auditável e um quebra-cabeça. E faz o total contar junto: o desconto progressivo melhora conforme o volume, a partir de dez linhas.',
				'A telefonia segue a mesma lógica. Antes de gerar um número novo para a unidade nova, vale decidir se a filial deve ter identidade telefônica própria ou operar integrada à estrutura que já existe, com transferência entre unidades. As duas escolhas são defensáveis; a que dá errado é a que ninguém tomou, quando a filial acaba com um número improvisado que nunca é divulgado direito.'
			]
		},
		// ⚠ REVISAR: nenhuma célula desta tabela cita prazo em dias, e a caption
		// explica por quê. Se a equipe quiser publicar prazo típico de instalação,
		// precisa ser dado medido nas próprias ativações — estimativa publicada vira
		// promessa de cronograma para quem tem inauguração marcada.
		{
			id: 'comparativo',
			h2: 'Três perfis de nova unidade',
			paragrafos: [
				'Não existe um arranjo padrão de telecom para filial: um escritório administrativo, uma loja de atendimento e uma operação crítica têm exigências diferentes, e tratar as três igual é o que produz tanto o subdimensionamento quanto o gasto desnecessário. A comparação abaixo é técnica e não traz valores — o desenho é montado por unidade, depois da viabilidade.'
			],
			tabela: {
				head: ['Critério', 'Escritório administrativo', 'Loja ou atendimento ao público', 'Operação crítica'],
				rows: [
					[
						'O que a conexão sustenta',
						'Sistemas de gestão, e-mail e reuniões por vídeo',
						'Meios de pagamento, emissão fiscal e retaguarda',
						'Produção, logística, laboratório ou centro de distribuição'
					],
					[
						'Redundância',
						'Desejável',
						'Praticamente obrigatória: sem conexão não há venda',
						'Obrigatória, com comutação automática'
					],
					[
						'Telefonia',
						'Integrada à estrutura da matriz',
						'Número visível ao público, com atendimento local',
						'Integrada, com prioridade para a operação'
					],
					[
						'Tolerância a ficar fora',
						'Horas, com trabalho remanejado',
						'Minutos: cada queda é venda perdida',
						'Praticamente nenhuma'
					],
					[
						'Prazo a reservar no cronograma',
						'O da instalação confirmada por escrito',
						'O da instalação, mais o teste dos meios de pagamento',
						'O da instalação, mais homologação com a área técnica'
					]
				],
				caption:
					'Nenhum prazo em dias é publicado aqui de propósito: ele varia por tecnologia disponível, por endereço e pela necessidade ou não de rede nova. Peça sempre o prazo por escrito, para o seu endereço.'
			}
		},
		{
			id: 'checklist',
			h2: 'Doze itens do cronograma de telecom da nova unidade',
			paragrafos: [
				'Este é o checklist que uma abertura de unidade exige, e ele vale para qualquer fornecedor que estiver no projeto. Cabe em uma página e evita a conversa mais desconfortável de uma expansão: a de explicar por que a unidade pronta não pode abrir.'
			],
			checklist: {
				titulo: 'Cronograma de telecom da filial',
				intro: 'Percorra os doze itens na ordem. Os quatro primeiros precisam estar resolvidos antes da assinatura da locação.',
				itens: [
					'Endereço completo definido, com número, complemento e andar',
					'Viabilidade técnica consultada para esse endereço específico',
					'Tecnologias alternativas avaliadas caso a rede fixa não atenda',
					'Prazo de instalação confirmado por escrito pelo fornecedor',
					'Infraestrutura interna incluída na planta da obra',
					'Ponto de entrada acordado com o locador ou com o condomínio',
					'Local do rack definido, com elétrica dedicada e acesso controlado',
					'Arranjo de redundância decidido conforme o perfil da unidade',
					'Telefonia definida: número próprio ou integração com a estrutura atual',
					'Equipamentos pedidos com folga em relação à data de ativação',
					'Data de ativação marcada antes da data de inauguração',
					'Responsável interno nomeado, com autonomia para liberar acessos'
				]
			}
		}
	],

	passos: {
		titulo: 'O que um consultor checa na abertura de uma unidade',
		subtitulo:
			'Quatro conferências encaixadas no cronograma da obra — não depois dele. A primeira acontece antes de a locação ser assinada.',
		itens: [
			{
				title: 'Viabilidade no endereço candidato',
				text: 'Um consultor checa a viabilidade do endereço antes de qualquer compromisso de locação. Quando há mais de um imóvel na disputa, a checagem vale para todos — e vira mais um critério objetivo na escolha do ponto.'
			},
			{
				title: 'O que a nova unidade precisa',
				text: 'Conexão principal, redundância e telefonia mudam conforme o perfil da unidade, e a obra precisa receber a lista do que deve deixar pronto: ponto de entrada, tubulação, elétrica e local do rack.'
			},
			{
				title: 'Data de ativação antes da inauguração',
				text: 'A contratação precisa de data-alvo anterior à abertura e de prazo confirmado por escrito. Quando a filial entra no contrato que a empresa já tem, o volume soma — e o desconto progressivo melhora a partir de dez linhas.'
			},
			{
				title: 'Teste antes de considerar a unidade pronta',
				text: 'Sistemas, meios de pagamento e telefonia precisam ser testados com carga real antes da data de abertura. Unidade liberada é a que passou no teste, não a que ficou pronta quando o técnico foi embora.'
			}
		]
	},

	objecoes: [
		{
			q: '“Deixamos para o fim, contratar internet é rápido.”',
			a: 'Contratar é rápido; instalar depende do que já existe no endereço. Quando a rede chega ao imóvel, o prazo tende a ser curto. Quando não chega, entra em cena obra de rede, autorização de terceiros e outro cronograma — e nada disso acelera por urgência do cliente. Consultar leva minutos e é o que revela em qual dos dois cenários você está.'
		},
		{
			q: '“Vamos usar um plano residencial no começo e trocar depois.”',
			a: 'É uma decisão defensável para um período curto e planejado, e problemática como plano B improvisado: sem prazo de reparo contratado, uma queda na primeira semana de operação não tem previsão de retorno. E "trocar depois" costuma virar meses, porque a unidade já abriu e o assunto sai da lista de prioridades até o dia em que a conexão cai no pior momento.'
		},
		{
			q: '“O prédio já tem internet, é só usar.”',
			a: 'Conexão compartilhada de prédio ou de coworking serve para navegação e não costuma oferecer banda garantida, prazo de reparo nem controle sobre quem mais está usando o mesmo acesso. Vale confirmar três pontos com a administração: se há contrato com o prédio, quem responde quando cai e se a sua empresa pode instalar acesso próprio quando quiser.'
		},
		{
			q: '“A empresa da obra resolve a parte de rede.”',
			a: 'A obra resolve a infraestrutura interna — tubulação, cabeamento, tomadas — e é justamente por isso que ela precisa receber as definições a tempo. O que ela não resolve é o que chega até a porta do imóvel, que depende da rede da operadora. As duas frentes precisam conversar, e a conversa tem que acontecer enquanto a planta ainda pode mudar.'
		},
		{
			q: '“É uma unidade pequena, não precisa de projeto.”',
			a: 'Projeto aqui não significa complexidade: significa três decisões tomadas na ordem certa — viabilidade consultada, arranjo definido, data de ativação anterior à inauguração. Uma unidade pequena com essas três resolvidas abre no dia marcado. Uma unidade grande sem elas abre improvisando.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. O perfil no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD — o que inclui acompanhar aberturas de unidades com data de inauguração já anunciada.',
			'A recomendação que sustenta esta página é uma só, e é de campo: consulte a viabilidade antes de assinar o contrato de locação. Ela não aparece nos materiais sobre abertura de filial porque quem escreve sobre isso trata da constituição da unidade — inscrição, alvará, contabilidade — e não do que chega de rede no imóvel. É uma lacuna que custa caro exatamente porque é barata de resolver.',
			'A segunda regra é de sequência: o arranjo precisa estar definido antes do fim da obra, para que ponto de entrada, tubulação, elétrica e local do rack entrem na planta enquanto a parede ainda está aberta. Depois que o forro fecha, o mesmo cabo passa a custar uma pequena reforma.',
			'Não publicamos prazo de instalação em dias nesta página, e é uma escolha. O prazo depende da tecnologia disponível no endereço e de haver ou não necessidade de rede nova — publicar um número médio serviria para gerar expectativa, não para planejar. O prazo que vale é o confirmado por escrito para o seu endereço.'
		]
	},

	faqTitulo: 'Dúvidas de quem está abrindo uma unidade',
	faq: [
		{
			q: 'Com quanta antecedência devo pedir a internet da filial?',
			a: 'Assim que o endereço estiver definido. A consulta de viabilidade é rápida; o que consome prazo é a instalação quando o endereço exige rede nova. Como esse prazo corre em paralelo à obra e não acelera com ela, começar cedo não tem custo e resolve o principal risco do cronograma.'
		},
		{
			q: 'E se o endereço escolhido não tiver viabilidade?',
			a: 'Há caminhos: outra tecnologia no mesmo endereço, conexão pela rede móvel enquanto a rede fixa não chega, ou reavaliar o imóvel. O terceiro só existe se a consulta acontecer antes da locação — depois de assinado o contrato, ele sai da mesa.'
		},
		{
			q: 'A filial pode entrar no contrato da matriz?',
			a: 'Pode, e em geral deve. Somar a nova unidade ao contrato existente mantém um único ponto de atendimento, simplifica a gestão de linhas, endereços e faturas e faz o volume contar junto: o desconto progressivo melhora conforme o total de linhas, a partir de dez.'
		},
		{
			q: 'Consigo integrar o telefone da matriz com o da filial?',
			a: 'Consegue. A definição entra no desenho da unidade, junto com a decisão entre gerar um número próprio para a filial ou operar integrada à estrutura existente, com transferência entre unidades. As duas opções funcionam; o que dá errado é deixar essa escolha para a semana da inauguração.'
		},
		{
			q: 'O que a obra precisa deixar pronto para a instalação?',
			a: 'Ponto de entrada acordado com o locador ou com o condomínio, tubulação até o local do rack, tomadas elétricas dedicadas e um espaço ventilado e com acesso controlado para os equipamentos. Tudo isso é barato enquanto a parede está aberta.'
		}
	],

	cta: {
		titulo: 'Consulte a viabilidade do endereço da nova unidade',
		texto:
			'Informe o endereço completo da filial — mesmo que ainda seja um candidato entre outros — e um consultor checa a viabilidade: o que chega até lá, quais alternativas existem e o que precisa entrar no cronograma da obra. Sem compromisso e sem cobrança pela checagem.'
	},

	service: {
		name: 'Telecom para abertura de filial',
		serviceType: 'Projeto de conectividade para nova unidade empresarial',
		description:
			'Conectividade e telefonia para unidade nova: um consultor checa a viabilidade no endereço candidato, indica o arranjo adequado e a infraestrutura interna a prever na obra, com desconto progressivo a partir de dez linhas.'
	},

	relacionadas: [
		'internet-5g-para-empresas-sem-fibra-no-endereco',
		'internet-para-redes-de-lojas-e-varejo',
		'auditoria-de-fatura-de-telecom'
	],
	artigos: [
		'como-agendar-uma-visita-tecnica-do-plano-tim-empresa',
		'tim-empresas-validar-cobertura-4g-5g',
		'sd-wan-para-empresas-com-multiplas-filiais-como-tim-conecta-50-sites-com-seguranca',
		'tim-empresas-para-franquias-como-conectar-20-unidades-com-gestao-centralizada'
	]
};
