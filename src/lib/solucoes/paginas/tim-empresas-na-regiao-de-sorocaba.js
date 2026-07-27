// LP 19 — Cluster local. Keyword primária: "TIM empresas região de Sorocaba".
//
// Ângulo de conversão: PROXIMIDADE SEM MENTIR SOBRE PRESENÇA FÍSICA. Uma página
// para o eixo inteiro, com bloco próprio por cidade — deliberadamente NO LUGAR
// de dez páginas-cidade clonadas. O precedente é empírico: as 18 páginas com
// nome de cidade do acervo antigo somaram 118 impressões e zero clique em doze
// meses. Página-cidade sem operação local não converte; produz risco de doorway.
//
// Existe UMA unidade física, em Sorocaba. Nenhum trecho desta página pode
// sugerir escritório, endereço ou unidade em outra cidade — o enquadramento
// correto para as demais é ÁREA ATENDIDA, e é isso que o JSON-LD declara
// (areaServed lista as cidades; address continua sendo só o de Sorocaba).
//
// ⚠ CONDIÇÃO DE PUBLICAÇÃO (obrigatória): cada bloco de cidade precisa carregar
// pelo menos uma prova concreta — cliente atendido, caso, particularidade de
// cobertura observada ou tempo de deslocamento medido. Os blocos abaixo trazem
// o que é geográfica e operacionalmente verificável; a equipe deve acrescentar a
// prova por cidade antes de publicar. Se alguma cidade não tiver prova, a
// decisão certa é TIRAR a cidade da página, nunca inventar conteúdo para ela.
//
// ⚠ REVISAR: as descrições de perfil econômico por cidade são caracterizações
// gerais e verificáveis (vizinhança, corredor rodoviário, densidade urbana).
// Nenhum número de empresas, PIB ou estatística municipal foi usado — e não
// deve ser acrescentado sem fonte.

export default {
	slug: 'tim-empresas-na-regiao-de-sorocaba',
	cluster: 'local',
	ordem: 3,

	title: 'TIM Empresas na Região de Sorocaba',
	description:
		'Atendimento TIM Empresas em Votorantim, Itu, Boituva, Iperó e região: consultor de Sorocaba que vai até a sua empresa. Agende uma visita na sua cidade.',
	keywords:
		'TIM empresas região de Sorocaba, TIM empresas Votorantim, plano empresarial TIM Itu, TIM empresas Boituva, representante TIM Iperó, consultor TIM empresarial região de Sorocaba',
	keywordPrimaria: 'TIM empresas região de Sorocaba',

	h1: 'Atendimento presencial no eixo Sorocaba: as cidades onde vamos até a sua empresa',

	cardTitulo: 'Região de Sorocaba',
	cardTexto:
		'Votorantim, Itu, Boituva, Iperó e entorno. Uma base só, em Sorocaba, e visita agendada na sua cidade — sem prometer unidade onde não existe.',

	hero: {
		eyebrow: 'Eixo Sorocaba',
		sub: 'A base é uma só, em Sorocaba, e é assim que apresentamos: nas cidades do entorno o atendimento acontece por visita agendada, e no restante do país de forma remota. O que muda de cidade para cidade é o deslocamento e a realidade de rede — não a qualidade do diagnóstico.',
		bullets: [
			'Visita agendada em Votorantim, Itu, Boituva, Iperó e entorno',
			'Diagnóstico e proposta com o mesmo processo de Sorocaba',
			'Alternativas para endereço onde a fibra ainda não chega',
			'Atendimento remoto para o restante do Brasil'
		],
		ctaPrimario: 'Agendar visita na minha cidade',
		whatsapp:
			'Olá! Minha empresa fica na região de Sorocaba e gostaria de agendar uma visita de um consultor TIM Empresas.',
		cartaoTitulo: 'Como isso funciona'
	},

	keyFacts: [
		{
			label: 'Unidade física',
			value: 'Uma só, em Sorocaba',
			nota: 'Rua Tereza Lopes, 677, Vila Hortência. Nas demais cidades, atendimento por visita — não temos filial.'
		},
		{
			label: 'Cidades com visita',
			value: 'Eixo Sorocaba e entorno',
			nota: 'Votorantim, Itu, Boituva, Iperó e municípios vizinhos, conforme a agenda da semana.'
		},
		{
			label: 'Fora do eixo',
			value: 'Atendimento remoto',
			nota: 'Diagnóstico, proposta e acompanhamento à distância em todo o Brasil.'
		}
	],

	resumo:
		'O Grupo OC tem uma unidade, em Sorocaba, e atende as cidades do entorno por visita agendada — Votorantim, Itu, Boituva, Iperó e municípios vizinhos. Não há filial nessas cidades, e não faz falta: o diagnóstico, a proposta e a ativação seguem o mesmo processo, com deslocamento combinado conforme a agenda.',

	secoes: [
		{
			id: 'onde-atendemos',
			h2: 'Onde atendemos presencialmente — e onde não temos unidade',
			paragrafos: [
				'A resposta direta é esta: existe um escritório, na Rua Tereza Lopes, 677, Vila Hortência, em Sorocaba. Nas cidades do entorno o atendimento presencial é feito por deslocamento, com visita agendada. Em nenhuma delas há filial, endereço comercial ou equipe fixa, e dizer o contrário seria fácil e falso.',
				'Fazemos questão de começar por aí porque o mercado de representação de operadora costuma fazer o oposto — anunciar presença em dezenas de cidades onde ninguém pisou. O efeito prático da mentira aparece quando a empresa precisa de alguém e descobre que “a unidade da cidade” era uma página na internet. Deslocamento agendado é menos vistoso e é o que de fato acontece.'
			]
		},
		{
			id: 'como-funciona',
			h2: 'Como funciona o atendimento fora de Sorocaba',
			paragrafos: [
				'A maior parte de um projeto de telecom não exige presença física: leitura de fatura, comparativo, documentação e acompanhamento de ativação funcionam bem à distância. O que ganha com a visita é a parte que depende de olhar — o imóvel, o rack, a área onde a equipe circula, o ponto onde o sinal some.',
				'Por isso o roteiro fora de Sorocaba costuma ser misto: começa remoto, com o diagnóstico e a leitura da fatura, e a visita é agendada quando existe algo concreto para ver ou decidir. Isso evita o deslocamento que consome a manhã de todo mundo para uma conversa que caberia numa chamada.'
			],
			tabela: {
				head: ['Etapa do projeto', 'Remoto', 'Presencial', 'Quando a visita compensa'],
				rows: [
					[
						'Diagnóstico e leitura da fatura',
						'Funciona bem',
						'Funciona igual',
						'Quando há vários endereços ou ninguém sabe o que está contratado'
					],
					[
						'Consulta de viabilidade',
						'Feita à distância pelo endereço',
						'Confirmada no imóvel',
						'Endereço novo, galpão, imóvel antigo ou prédio compartilhado'
					],
					[
						'Apresentação da proposta',
						'Chamada de vídeo ou WhatsApp',
						'Reunião com quem decide',
						'Quando sócio, TI e financeiro precisam estar na mesma sala'
					],
					[
						'Assinatura e documentação',
						'Digital, é o padrão',
						'Possível, se preferirem',
						'Quase nunca muda o prazo — não é motivo para deslocar'
					],
					[
						'Ativação e portabilidade',
						'Acompanhada à distância',
						'Acompanhada no local',
						'Troca de operadora com muitas linhas ou endereço crítico'
					],
					[
						'Suporte depois do contrato',
						'É o padrão',
						'Sob agenda',
						'Quando o problema é físico, e não comercial'
					]
				],
				caption:
					'A visita não é obstáculo nem favor: é uma ferramenta com hora certa de ser usada. Deslocar por deslocar atrasa o projeto de quem está esperando resposta.'
			}
		},
		{
			id: 'cidades',
			h2: 'As cidades do eixo, uma a uma',
			paragrafos: [
				'Cada cidade do entorno tem uma realidade própria de deslocamento, de perfil de empresa e de rede disponível. Os blocos abaixo descrevem o que é observável a partir de quem atende a região — sem repetir o mesmo parágrafo com o nome trocado, que é exatamente o que torna uma página de cidade inútil para quem lê.'
			],
			subsecoes: [
				{
					h3: 'Votorantim',
					paragrafos: [
						'É a cidade vizinha imediata: a malha urbana é praticamente contínua com a de Sorocaba, e o deslocamento é curto o bastante para que uma visita caiba no mesmo período de outra. Na prática, empresa de Votorantim é atendida com a mesma agilidade de empresa da zona sul de Sorocaba.',
						'O perfil que mais aparece é o de operação com endereço único — comércio, prestador de serviço e indústria de porte pequeno e médio — combinando uma conexão fixa no escritório com linhas móveis para quem trabalha fora. Vale checar a viabilidade pelo número do imóvel: proximidade de Sorocaba não garante a mesma rede na porta.'
					]
				},
				{
					h3: 'Itu',
					paragrafos: [
						'Itu está mais distante e no corredor rodoviário que liga a região à capital, o que muda duas coisas: a visita precisa de agendamento com mais antecedência, e o perfil de empresa é mais variado — comércio e serviços no núcleo urbano, indústria e operação logística nas áreas afastadas, além de negócios ligados ao turismo histórico da cidade.',
						'Empresas instaladas em loteamentos e condomínios empresariais afastados do centro costumam ter a mesma dúvida: se a rede fixa chega até lá. É uma pergunta que só se resolve com consulta pelo endereço exato e, quando o imóvel é novo, com alguém confirmando no local.'
					]
				},
				{
					h3: 'Boituva',
					paragrafos: [
						'Boituva também fica no eixo rodoviário e concentra atividade ligada a esse corredor, com galpões e operações de movimentação de carga além do comércio urbano. O deslocamento é maior que o de Votorantim e costuma ser combinado junto com outra visita na mesma direção, o que encurta o prazo de agenda.',
						'Para operação em galpão, a conversa muda de assunto rápido: o problema raramente é a banda contratada e quase sempre é a cobertura dentro da área construída, onde estrutura metálica e distância entre setores derrubam o sinal que funciona bem no escritório da frente.'
					]
				},
				{
					h3: 'Iperó',
					paragrafos: [
						'Iperó é o município menos denso entre os quatro, com área rural relevante e ocupação empresarial mais espalhada. É onde a viabilidade de rede fixa aparece de forma mais irregular — endereços a poucos quilômetros um do outro podem ter respostas diferentes, e imóvel afastado do núcleo urbano frequentemente não tem rede fixa disponível.',
						'É também onde a conexão pela rede móvel deixa de ser plano B e vira solução principal com mais frequência, às vezes com antena externa para estabilizar o sinal. A visita, nesse caso, serve para medir sinal onde a empresa trabalha, e não para conferir tomada de rede.'
					]
				}
			]
		},
		{
			id: 'cidade-menor',
			h2: 'O que muda quando a empresa está em cidade menor',
			paragrafos: [
				'Três coisas mudam de forma consistente, e nenhuma delas tem a ver com a qualidade do atendimento. A primeira é a disponibilidade de rede fixa, mais irregular fora dos núcleos urbanos consolidados. A segunda é o prazo de instalação, que costuma depender de deslocamento de equipe técnica. A terceira é a quantidade de alternativas: onde há menos fornecedores, a comparação é mais curta e o peso da rede móvel é maior.',
				'Isso não inviabiliza nada — muda o desenho. Operação em endereço sem fibra pode funcionar muito bem com conexão pela rede móvel dimensionada corretamente, e há uma página específica desta seção tratando desse caso. O erro comum é insistir por meses numa rede fixa que não vai chegar, em vez de resolver com o que existe e reavaliar quando a rede expandir.'
			],
			lista: [
				'Viabilidade de rede fixa mais irregular fora do núcleo urbano',
				'Prazo de instalação sujeito a deslocamento de equipe técnica',
				'Menos fornecedores locais, e comparação mais curta',
				'Peso maior da rede móvel, como acesso principal ou de contingência',
				'Medição de sinal no local vira etapa relevante do projeto',
				'Contrato único para várias unidades, quando a empresa cresce para outra cidade'
			]
		},
		{
			id: 'uma-base-so',
			h2: 'Por que não criamos uma página — nem uma promessa — para cada cidade',
			paragrafos: [
				'Seria simples publicar dezenas de páginas trocando o nome do município e anunciar atendimento em toda a região. Já vimos o resultado disso de perto: conteúdo repetido, que não responde nada de específico, não é lido por ninguém e não gera contato. Além de não funcionar, é o tipo de estrutura que os buscadores classificam como página de passagem.',
				'A escolha aqui foi outra: uma página para o eixo, com um bloco por cidade que só existe se houver algo verdadeiro para dizer sobre ela. Quando não houver, a cidade sai da página — e continua sendo atendida do mesmo jeito, porque atendimento e conteúdo publicado são coisas diferentes.',
				'A mesma lógica vale para o dado estruturado da página: declaramos endereço apenas onde existe endereço, e área atendida onde existe atendimento. Confundir os dois é o que faz uma empresa aparecer no mapa de uma cidade em que nunca esteve.'
			]
		},
		{
			id: 'preparar-visita',
			h2: 'O que preparar antes da visita',
			paragrafos: [
				'Como a visita fora de Sorocaba envolve deslocamento, ela rende mais quando a empresa prepara o terreno. A lista abaixo é curta de propósito: são os itens que, faltando, transformam uma visita em duas.'
			],
			checklist: {
				titulo: 'Sete itens que fazem a visita valer a viagem',
				intro:
					'Nada aqui é burocracia nossa: cada item corresponde a uma decisão que costuma travar na hora em que o consultor está no local.',
				itens: [
					'Quem decide presente, ou pelo menos disponível por telefone',
					'Fatura da operadora atual e contrato vigente, se houver',
					'Acesso ao local onde ficam roteador, rack e ponto de entrada',
					'Lista dos endereços da empresa, com número e complemento',
					'Mapa mental de onde o sinal falha hoje, para medirmos no lugar certo',
					'Quais sistemas param quando a conexão cai',
					'Horário de menor movimento, para a visita não atrapalhar o atendimento'
				]
			}
		}
	],

	passos: {
		titulo: 'Como agendar uma visita fora de Sorocaba',
		subtitulo:
			'Quatro etapas. A visita entra quando existe algo concreto para ver ou decidir — antes disso, o remoto resolve mais rápido.',
		itens: [
			{
				title: 'Primeiro contato e diagnóstico remoto',
				text: 'A conversa começa por telefone ou WhatsApp: cidade, endereços, número de linhas, operadora atual e o que motivou a procura. Já nessa etapa dá para saber se a visita é necessária ou se o caso se resolve à distância.'
			},
			{
				title: 'Agendamento conforme a rota da semana',
				text: 'As visitas na região são organizadas por direção de deslocamento, o que costuma encurtar o prazo quando há mais de uma empresa no mesmo sentido. A data é combinada, não estimada por e-mail automático.'
			},
			{
				title: 'Visita com levantamento no local',
				text: 'Imóvel, ponto de entrada, infraestrutura interna e medição de sinal onde a equipe trabalha. Em galpão e área extensa, esse levantamento por ambiente é o que evita proposta bonita e inadequada.'
			},
			{
				title: 'Proposta, ativação e acompanhamento',
				text: 'A proposta sai depois da confirmação de viabilidade. A ativação e a portabilidade são acompanhadas à distância ou no local, conforme o porte, e o consultor segue sendo o mesmo ponto de contato depois.'
			}
		]
	},

	objecoes: [
		{
			q: '“Vocês são de Sorocaba, vão me atender pior aqui.”',
			a: 'É uma preocupação justa e a resposta honesta tem duas partes. O diagnóstico, a proposta e o acompanhamento do contrato são idênticos, porque não dependem de distância. O que realmente varia é o tempo até uma visita presencial, que em Votorantim é curto e em cidade mais afastada depende de agenda — e isso é dito antes, não descoberto depois.'
		},
		{
			q: '“Na minha cidade não tem fibra no meu endereço.”',
			a: 'Acontece com frequência fora dos núcleos urbanos. A saída costuma ser conexão pela rede móvel, dimensionada para o uso real e com antena externa quando o sinal interno é fraco, funcionando como acesso principal ou de contingência. Há uma página específica desta seção sobre endereços sem fibra disponível.'
		},
		{
			q: '“Preciso de alguém presencial toda semana.”',
			a: 'Se essa é a exigência, seremos francos: não é o que oferecemos, e nenhum representante de operadora oferece de verdade. O que existe é visita agendada quando faz diferença e atendimento remoto ágil no resto do tempo. Prometer presença semanal na sua cidade seria vender uma estrutura que não temos.'
		},
		{
			q: '“Minha empresa tem unidades em duas cidades diferentes.”',
			a: 'É um dos casos em que a região atendida ajuda mais: o mesmo contrato e o mesmo consultor cobrem as duas unidades, com a viabilidade consultada separadamente em cada endereço. Empresas que crescem para a cidade vizinha costumam descobrir isso tarde, depois de contratar fornecedores diferentes para cada ponto.'
		}
	],

	eeat: {
		titulo: 'Por que confiar no que está escrito aqui',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecom empresarial, é representante autorizado TIM e opera de Sorocaba, na Rua Tereza Lopes, 677, Vila Hortência, sob o CNPJ 23.474.830/0001-56. O perfil público no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações de grande porte, com a BYD entre os clientes.',
			'A informação mais útil desta página, porém, é a que a maioria dos concorrentes omite: existe uma unidade só. Publicar isso custa alguma coisa em aparência e vale muito em previsibilidade — a empresa sabe de antemão o que vai receber, e ninguém descobre no meio de um problema que a “unidade local” não existia.',
			'O critério que usamos para decidir entre visita e atendimento remoto também é próprio: deslocamos quando há algo para ver ou alguém para reunir, e resolvemos à distância quando o deslocamento só somaria tempo. Visita não é demonstração de dedicação; é ferramenta, e usada fora de hora atrasa quem está esperando resposta.'
		]
	},

	faqTitulo: 'Dúvidas de quem está fora de Sorocaba',
	faq: [
		{
			q: 'Vocês têm escritório na minha cidade?',
			a: 'Não. O escritório fica em Sorocaba, na Vila Hortência. Nas cidades do entorno o atendimento presencial é por visita agendada, e no restante do país é remoto — dizemos isso antes justamente para ninguém contar com uma estrutura que não existe.'
		},
		{
			q: 'Quais cidades vocês atendem presencialmente?',
			a: 'Sorocaba e o entorno, incluindo Votorantim, Itu, Boituva, Iperó e municípios vizinhos, conforme a agenda de deslocamento. Fora desse eixo o atendimento continua disponível, em formato remoto.'
		},
		{
			q: 'Empresa em cidade menor consegue internet empresarial?',
			a: 'Consegue, com a ressalva de que a disponibilidade de rede fixa é mais irregular fora do núcleo urbano. Por isso a consulta pelo endereço vem antes da proposta, e há alternativa pela rede móvel quando a fibra não chega.'
		},
		{
			q: 'A visita tem custo?',
			a: 'Não. O diagnóstico e a visita fazem parte do atendimento consultivo e não geram cobrança, inclusive quando a conclusão é que não vale a pena mudar de operadora agora.'
		},
		{
			q: 'Atendem empresas fora da região de Sorocaba?',
			a: 'Sim, em todo o Brasil, de forma remota. O que muda fora do eixo é a possibilidade de visita presencial — o processo de diagnóstico, proposta e acompanhamento é o mesmo.'
		}
	],

	cta: {
		titulo: 'Agende uma visita na sua cidade',
		texto:
			'Diga de qual cidade é a sua empresa e o consultor organiza o atendimento — remoto quando resolve mais rápido, presencial quando faz diferença. Sem custo e sem compromisso.'
	},

	service: {
		name: 'Atendimento TIM Empresas na região de Sorocaba',
		serviceType: 'Representante autorizado TIM para empresas',
		description:
			'Atendimento consultivo TIM Empresas nas cidades do eixo de Sorocaba, com visita agendada a partir da unidade de Sorocaba: diagnóstico, consulta de viabilidade por endereço, proposta comparada e acompanhamento da ativação. Não há unidade física nas demais cidades.',
		areaServed: [
			{ '@type': 'City', name: 'Sorocaba' },
			{ '@type': 'City', name: 'Votorantim' },
			{ '@type': 'City', name: 'Itu' },
			{ '@type': 'City', name: 'Boituva' },
			{ '@type': 'City', name: 'Iperó' }
		]
	},

	relacionadas: [
		'tim-empresas-em-sorocaba',
		'internet-5g-para-empresas-sem-fibra-no-endereco',
		'telecom-para-abertura-de-filial'
	],
	artigos: [
		'tim-empresas-validar-cobertura-4g-5g',
		'como-agendar-uma-visita-tecnica-do-plano-tim-empresa',
		'internet-backup-tim-empresas-4g-5g-failover',
		'tim-black-empresa-tem-cobertura-em-area-rural-mapa-de-cobertura-4g-5g-corporativo'
	]
};
