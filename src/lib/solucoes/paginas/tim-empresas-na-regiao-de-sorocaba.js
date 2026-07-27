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
// pelo menos uma prova concreta — cliente atendido, caso ou particularidade de
// cobertura observada. Os blocos abaixo trazem o que é geográfica e
// operacionalmente verificável; a equipe deve acrescentar a prova por cidade
// antes de publicar. Se alguma cidade não tiver prova, a decisão certa é TIRAR a
// cidade da página, nunca inventar conteúdo para ela.
//
// ⚠ O QUE ESTA PÁGINA PODE PROMETER: só duas coisas — (1) um consultor checa a
// viabilidade no endereço e a necessidade da operação e (2) o desconto
// progressivo melhora conforme o volume, a partir de dez linhas. Presença física
// só pode ser afirmada em SOROCABA. Para as demais cidades o enquadramento é
// ÁREA ATENDIDA: nada de "visitamos", "vamos até", agenda de deslocamento ou
// rota da semana — isso não foi confirmado e não pode ser prometido.
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
		'Atendimento TIM Empresas em Votorantim, Itu, Boituva, Iperó e região. Um consultor checa a viabilidade no endereço da sua empresa. Fale com o time.',
	keywords:
		'TIM empresas região de Sorocaba, TIM empresas Votorantim, plano empresarial TIM Itu, TIM empresas Boituva, representante TIM Iperó, consultor TIM empresarial região de Sorocaba',
	keywordPrimaria: 'TIM empresas região de Sorocaba',

	h1: 'TIM Empresas no eixo de Sorocaba: as cidades atendidas e como funciona',

	cardTitulo: 'Região de Sorocaba',
	cardTexto:
		'Votorantim, Itu, Boituva, Iperó e entorno. Uma base só, em Sorocaba, e área atendida no entorno — sem prometer unidade onde não existe.',

	hero: {
		eyebrow: 'Eixo Sorocaba',
		sub: 'A base é uma só, em Sorocaba, e é assim que apresentamos: as cidades do entorno são área atendida, sem unidade física, e no restante do país o atendimento é remoto. O que muda de cidade para cidade é a realidade de rede — não a conferência que um consultor faz antes de qualquer proposta.',
		bullets: [
			'Votorantim, Itu, Boituva, Iperó e entorno na área atendida',
			'Um consultor checa a viabilidade do endereço, como em Sorocaba',
			'Alternativas para endereço onde a fibra ainda não chega',
			'Atendimento remoto para o restante do Brasil'
		],
		ctaPrimario: 'Checar a viabilidade na minha cidade',
		whatsapp:
			'Olá! Minha empresa fica na região de Sorocaba e gostaria de falar com um consultor TIM Empresas.',
		cartaoTitulo: 'Como isso funciona'
	},

	keyFacts: [
		{
			label: 'Unidade física',
			value: 'Uma só, em Sorocaba',
			nota: 'Rua Tereza Lopes, 677, Vila Hortência. Nas demais cidades não há filial: elas são área atendida.'
		},
		{
			label: 'Cidades na área atendida',
			value: 'Eixo Sorocaba e entorno',
			nota: 'Votorantim, Itu, Boituva, Iperó e municípios vizinhos, atendidos a partir da unidade de Sorocaba.'
		},
		{
			label: 'Fora do eixo',
			value: 'Atendimento remoto',
			nota: 'Diagnóstico, proposta e acompanhamento à distância em todo o Brasil.'
		}
	],

	resumo:
		'O Grupo OC tem uma unidade, em Sorocaba, e as cidades do entorno são área atendida — Votorantim, Itu, Boituva, Iperó e municípios vizinhos. Não há filial nessas cidades, e não faz falta: um consultor checa a viabilidade do endereço e a necessidade da operação do mesmo jeito, antes de qualquer proposta.',

	secoes: [
		{
			id: 'onde-atendemos',
			h2: 'Onde existe unidade — e o que significa área atendida',
			paragrafos: [
				'A resposta direta é esta: existe um escritório, na Rua Tereza Lopes, 677, Vila Hortência, em Sorocaba. As cidades do entorno são área atendida a partir dele. Em nenhuma delas há filial, endereço comercial ou equipe fixa, e dizer o contrário seria fácil e falso. O que existe nelas é a mesma conferência de sempre: um consultor checa a viabilidade do endereço e a necessidade da operação antes de qualquer proposta.',
				'Fazemos questão de começar por aí porque o mercado de representação de operadora costuma fazer o oposto — anunciar presença em dezenas de cidades onde ninguém pisou. O efeito prático da mentira aparece quando a empresa precisa de alguém e descobre que “a unidade da cidade” era uma página na internet. Dizer “área atendida” é menos vistoso do que anunciar filial, e é o que de fato existe.'
			]
		},
		{
			id: 'como-funciona',
			h2: 'Como funciona o atendimento fora de Sorocaba',
			paragrafos: [
				'A maior parte de um projeto de telecom não exige presença física: fatura, comparativo, documentação e acompanhamento de ativação funcionam bem à distância. O que depende do local é a parte que só se resolve olhando — o imóvel, o rack, a área onde a equipe circula, o ponto exato onde o sinal some.',
				'Por isso o caminho fora de Sorocaba costuma ser misto: começa remoto, com um consultor checando a necessidade da operação e a viabilidade do endereço, e fica pendente só o que depende de informação do local — em geral resolvido com fotos, com o número exato do imóvel e com quem conhece a rotina da empresa. Isso evita consumir a manhã de todo mundo com uma conversa que caberia numa chamada.'
			],
			tabela: {
				head: ['Etapa do projeto', 'À distância', 'O que depende do local', 'Quando isso pesa mais'],
				rows: [
					[
						'Necessidade da operação e fatura',
						'Funciona bem',
						'Nada: resolve inteiro à distância',
						'Quando há vários endereços ou ninguém sabe o que está contratado'
					],
					[
						'Checagem de viabilidade',
						'Um consultor checa pelo endereço',
						'Número, complemento e andar exatos',
						'Endereço novo, galpão, imóvel antigo ou prédio compartilhado'
					],
					[
						'Apresentação das opções',
						'Chamada de vídeo ou WhatsApp',
						'Quem decide reunido do lado de lá',
						'Quando sócio, TI e financeiro precisam estar na mesma sala'
					],
					[
						'Assinatura e documentação',
						'Digital, é o padrão',
						'Nada muda se for em papel',
						'Quase nunca altera o prazo — não é o gargalo do projeto'
					],
					[
						'Ativação e portabilidade',
						'Acompanhada à distância',
						'Alguém da empresa no local no dia',
						'Troca de operadora com muitas linhas ou endereço crítico'
					],
					[
						'Suporte depois do contrato',
						'É o padrão',
						'Chamado técnico da operadora no endereço',
						'Quando o problema é físico, e não comercial'
					]
				],
				caption:
					'Estar no local não é obstáculo nem favor: é informação, e quase toda ela pode ser levantada à distância. O que ninguém adivinha é o endereço exato — por isso a checagem de viabilidade pede número e complemento.'
			}
		},
		{
			id: 'cidades',
			h2: 'As cidades do eixo, uma a uma',
			paragrafos: [
				'Cada cidade do entorno tem uma realidade própria de perfil de empresa e de rede disponível. Os blocos abaixo descrevem o que é observável a partir de quem atende a região — sem repetir o mesmo parágrafo com o nome trocado, que é exatamente o que torna uma página de cidade inútil para quem lê.'
			],
			subsecoes: [
				{
					h3: 'Votorantim',
					paragrafos: [
						'É a cidade vizinha imediata: a malha urbana é praticamente contínua com a de Sorocaba e a distância até a base é curta. Na prática, empresa de Votorantim é atendida com a mesma agilidade de empresa da zona sul de Sorocaba — a divisa não muda nada na conferência de viabilidade.',
						'O perfil que mais aparece é o de operação com endereço único — comércio, prestador de serviço e indústria de porte pequeno e médio — combinando uma conexão fixa no escritório com linhas móveis para quem trabalha fora. Vale checar a viabilidade pelo número do imóvel: proximidade de Sorocaba não garante a mesma rede na porta.'
					]
				},
				{
					h3: 'Itu',
					paragrafos: [
						'Itu está mais distante e no corredor rodoviário que liga a região à capital, o que muda duas coisas: a resposta de rede varia bastante dentro do próprio município, e o perfil de empresa é mais variado — comércio e serviços no núcleo urbano, indústria e operação logística nas áreas afastadas, além de negócios ligados ao turismo histórico da cidade.',
						'Empresas instaladas em loteamentos e condomínios empresariais afastados do centro costumam ter a mesma dúvida: se a rede fixa chega até lá. É uma pergunta que só se resolve com um consultor checando a viabilidade pelo endereço exato — e, quando o imóvel é novo, confirmando com a administração do loteamento o que já está instalado até a porta.'
					]
				},
				{
					h3: 'Boituva',
					paragrafos: [
						'Boituva também fica no eixo rodoviário e concentra atividade ligada a esse corredor, com galpões e operações de movimentação de carga além do comércio urbano. Está mais longe da base que Votorantim, o que não altera a conferência: um consultor checa a viabilidade do endereço e a necessidade da operação antes de qualquer proposta.',
						'Para operação em galpão, a conversa muda de assunto rápido: o problema raramente é a banda contratada e quase sempre é a cobertura dentro da área construída, onde estrutura metálica e distância entre setores derrubam o sinal que funciona bem no escritório da frente.'
					]
				},
				{
					h3: 'Iperó',
					paragrafos: [
						'Iperó é o município menos denso entre os quatro, com área rural relevante e ocupação empresarial mais espalhada. É onde a viabilidade de rede fixa aparece de forma mais irregular — endereços a poucos quilômetros um do outro podem ter respostas diferentes, e imóvel afastado do núcleo urbano frequentemente não tem rede fixa disponível.',
						'É também onde a conexão pela rede móvel deixa de ser plano B e vira solução principal com mais frequência, às vezes com antena externa para estabilizar o sinal. Nesse caso o que decide é o sinal no ponto exato em que a empresa trabalha, e não a tomada de rede do imóvel — por isso a checagem começa por ali.'
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
				'Cobertura no ponto exato de uso vira item obrigatório a checar',
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
			h2: 'O que preparar antes da checagem',
			paragrafos: [
				'Fora de Sorocaba, a conferência rende mais quando a empresa prepara o terreno — é o que evita a segunda e a terceira rodada de perguntas. A lista abaixo é curta de propósito: são os itens que, faltando, transformam uma conversa em três.'
			],
			checklist: {
				titulo: 'Sete itens que fazem a checagem render',
				intro:
					'Nada aqui é burocracia nossa: cada item corresponde a uma decisão que costuma travar justamente quando alguém precisa de resposta rápida.',
				itens: [
					'Quem decide presente, ou pelo menos disponível por telefone',
					'Fatura da operadora atual e contrato vigente, se houver',
					'Saber onde ficam roteador, rack e ponto de entrada do imóvel',
					'Lista dos endereços da empresa, com número e complemento',
					'Mapa mental de onde o sinal falha hoje, com os pontos exatos',
					'Quais sistemas param quando a conexão cai',
					'Horário de menor movimento, para a conversa não atrapalhar o atendimento'
				]
			}
		}
	],

	passos: {
		titulo: 'O que um consultor checa fora de Sorocaba',
		subtitulo:
			'Quatro conferências. O que depende do local entra quando existe algo concreto para decidir — antes disso, o remoto resolve mais rápido.',
		itens: [
			{
				title: 'Primeiro contato, à distância',
				text: 'A conversa começa por telefone ou WhatsApp: cidade, endereços, número de linhas, operadora atual e o que motivou a procura. Já aí um consultor checa a necessidade e diz o que ainda depende de informação do local.'
			},
			{
				title: 'Viabilidade pelo endereço exato',
				text: 'Um consultor checa a viabilidade com número, complemento e andar — e em mais de uma tecnologia quando a rede fixa é irregular na região, o que é comum fora dos núcleos urbanos consolidados.'
			},
			{
				title: 'O que depende do local',
				text: 'Imóvel, ponto de entrada, infraestrutura interna e sinal onde a equipe efetivamente trabalha. Em galpão e área extensa, é esse levantamento por ambiente que evita proposta bonita e inadequada.'
			},
			{
				title: 'Opções, volume e ativação',
				text: 'As opções só saem depois da viabilidade confirmada. Vale conferir junto o total de linhas: o desconto progressivo melhora conforme o volume, a partir de dez, inclusive somando unidades de cidades diferentes no mesmo contrato.'
			}
		]
	},

	objecoes: [
		{
			q: '“Vocês são de Sorocaba, vão me atender pior aqui.”',
			a: 'É uma preocupação justa e a resposta honesta tem duas partes. A conferência da necessidade, as opções e o acompanhamento do contrato não dependem de distância nenhuma. O que realmente varia é a realidade de rede de cada endereço — e é por isso que um consultor checa a viabilidade antes de qualquer proposta, com o resultado dito antes e não descoberto depois.'
		},
		{
			q: '“Na minha cidade não tem fibra no meu endereço.”',
			a: 'Acontece com frequência fora dos núcleos urbanos. A saída costuma ser conexão pela rede móvel, dimensionada para o uso real e com antena externa quando o sinal interno é fraco, funcionando como acesso principal ou de contingência. Há uma página específica desta seção sobre endereços sem fibra disponível.'
		},
		{
			q: '“Preciso de alguém presencial toda semana.”',
			a: 'Se essa é a exigência, seremos francos: não é o que oferecemos, e nenhum representante de operadora oferece de verdade. O que existe é atendimento remoto ágil e um consultor que checa a viabilidade e a necessidade sempre que a operação muda. Prometer presença semanal na sua cidade seria vender uma estrutura que não temos.'
		},
		{
			q: '“Minha empresa tem unidades em duas cidades diferentes.”',
			a: 'É um dos casos em que a área atendida ajuda mais: um contrato só cobre as duas unidades, com um consultor checando a viabilidade separadamente em cada endereço e o volume das duas somando no mesmo total — que é o que move o desconto progressivo, a partir de dez linhas. Empresas que crescem para a cidade vizinha costumam descobrir isso tarde, depois de contratar fornecedores diferentes para cada ponto.'
		}
	],

	eeat: {
		titulo: 'Por que confiar no que está escrito aqui',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecom empresarial, é representante autorizado TIM e opera de Sorocaba, na Rua Tereza Lopes, 677, Vila Hortência, sob o CNPJ 23.474.830/0001-56. O perfil público no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações de grande porte, com a BYD entre os clientes.',
			'A informação mais útil desta página, porém, é a que a maioria dos concorrentes omite: existe uma unidade só. Publicar isso custa alguma coisa em aparência e vale muito em previsibilidade — a empresa sabe de antemão o que vai receber, e ninguém descobre no meio de um problema que a “unidade local” não existia.',
			'O critério que separa o que se resolve à distância do que depende do local também está publicado: quase tudo — fatura, opções, documentação, acompanhamento — independe de distância; o que não independe é o endereço exato e o ponto onde o sinal falha. Estar no local não é demonstração de dedicação, é informação; quando ela pode ser levantada de outro jeito, insistir nela só atrasa quem está esperando resposta. O que fica prometido aqui é o que dá para cumprir de qualquer cidade: um consultor checa a viabilidade e a necessidade, e o desconto progressivo melhora conforme o volume, a partir de dez linhas.'
		]
	},

	faqTitulo: 'Dúvidas de quem está fora de Sorocaba',
	faq: [
		{
			q: 'Vocês têm escritório na minha cidade?',
			a: 'Não. O escritório fica em Sorocaba, na Vila Hortência, e é a única unidade física. As cidades do entorno são área atendida a partir dele, e no restante do país o atendimento é remoto — dizemos isso antes justamente para ninguém contar com uma estrutura que não existe.'
		},
		{
			q: 'Quais cidades estão na área atendida?',
			a: 'Sorocaba e o entorno, incluindo Votorantim, Itu, Boituva, Iperó e municípios vizinhos. Atendimento presencial existe em Sorocaba, onde fica a unidade; nas demais, um consultor checa a viabilidade do endereço e a necessidade da operação sem que haja escritório local. Fora desse eixo o atendimento continua disponível, em formato remoto.'
		},
		{
			q: 'Empresa em cidade menor consegue internet empresarial?',
			a: 'Consegue, com a ressalva de que a disponibilidade de rede fixa é mais irregular fora do núcleo urbano. Por isso um consultor checa a viabilidade pelo endereço antes da proposta, e há alternativa pela rede móvel quando a fibra não chega.'
		},
		{
			q: 'A checagem de viabilidade tem custo?',
			a: 'Não. A checagem do endereço e da necessidade da operação faz parte do atendimento consultivo e não gera cobrança, inclusive quando a conclusão é que não vale a pena mudar de operadora agora.'
		},
		{
			q: 'Atendem empresas fora da região de Sorocaba?',
			a: 'Sim, em todo o Brasil, de forma remota. O que muda fora do eixo é a proximidade da base, não a conferência: um consultor checa a viabilidade do endereço e a necessidade da operação do mesmo jeito.'
		}
	],

	cta: {
		titulo: 'Checagem de viabilidade na sua cidade',
		texto:
			'Diga de qual cidade é a sua empresa e informe o endereço completo: um consultor checa a viabilidade e a necessidade da operação, sem custo e sem compromisso — inclusive quando a conclusão é que não vale a pena mudar agora.'
	},

	service: {
		name: 'Atendimento TIM Empresas na região de Sorocaba',
		serviceType: 'Representante autorizado TIM para empresas',
		description:
			'Atendimento consultivo TIM Empresas nas cidades do eixo de Sorocaba: um consultor checa a viabilidade por endereço e apresenta proposta comparada, com desconto progressivo a partir de dez linhas. A unidade física fica em Sorocaba; as demais cidades são área atendida.',
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
