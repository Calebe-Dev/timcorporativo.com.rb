// LP 3 — Cluster verticais. Keyword primária: "internet para loja".
//
// Ângulo de conversão: VENDA PERDIDA NA HORA DO MOVIMENTO, não custo mensal.
// Varejista não compra banda; compra a certeza de que o caixa fecha a venda no
// sábado cheio. A página inteira gira em torno do pico e da comutação que
// ninguém testou — daí a pergunta que o lojista deveria fazer a qualquer
// fornecedor: qual foi a data do último teste de failover?
//
// Piloto antes do rollout, data do último teste de comutação e ponto único de
// atendimento aparecem como CRITÉRIO de contratação — exigível de qualquer
// fornecedor —, nunca como procedimento interno do Grupo OC. O que a página
// promete é o que é verdade: um consultor checa a viabilidade de cada endereço.

export default {
	slug: 'internet-para-redes-de-lojas-e-varejo',
	cluster: 'verticais',
	ordem: 3,

	title: 'Internet para Redes de Lojas e Varejo | TIM Empresas',
	description:
		'Internet para lojas e redes de varejo: PDV e maquininha sem parar, backup automático e gestão de várias unidades. Fale com um consultor TIM.',
	keywords:
		'internet para loja, internet para rede de lojas, conectividade para varejo multi-loja, internet para PDV, backup de internet para maquininha, telefonia para loja física',
	keywordPrimaria: 'internet para loja',

	h1: 'Loja parada não vende: conectividade para varejo de uma a cem unidades',

	cardTitulo: 'Redes de lojas e varejo',
	cardTexto:
		'O custo de uma queda no varejo não se distribui pelo mês: concentra-se em poucas horas do ano. Dimensionar pelo pico e testar a comutação é o que separa loja de rede.',

	hero: {
		eyebrow: 'Redes de lojas e varejo',
		sub: 'PDV que não autoriza cartão, emissão fiscal travada e fila crescendo no sábado. O prejuízo do varejo não é medido em megabits, e sim nas horas em que a loja mais vende. Um consultor checa a viabilidade de cada endereço e o que falta para a unidade não parar.',
		bullets: [
			'Dimensionamento pelo pico de movimento, não pela média',
			'Comutação automática testada, com data conhecida',
			'Wi-Fi de cliente separado da rede do caixa',
			'Contrato consolidado e um canal só para toda a rede'
		],
		ctaPrimario: 'Falar com um consultor',
		whatsapp:
			'Olá! Tenho loja física e quero avaliar a internet e o backup do PDV. Podem me ajudar?',
		cartaoTitulo: 'O que se checa primeiro'
	},

	keyFacts: [
		{
			label: 'A pergunta que ninguém responde',
			value: 'Data do último teste',
			nota: 'Failover contratado e nunca acionado não é redundância — é suposição escrita em contrato.'
		},
		{
			label: 'O que dimensiona a loja',
			value: 'A hora do movimento',
			nota: 'Sábado cheio e véspera de data comemorativa definem o projeto. A média mensal não define nada.'
		},
		{
			label: 'Experiência',
			value: '+15 anos em telecom B2B',
			nota: 'Grupo OC, representante autorizado TIM · 4,9 no Google'
		}
	],

	resumo:
		'Uma loja precisa de três coisas nesta ordem: link dimensionado pelo pico de movimento, caminho alternativo que entre sozinho quando o principal falhar e alguém identificado para acionar quando isso acontecer. A maioria dos projetos de varejo resolve só a primeira — e descobre as outras duas no sábado mais cheio do ano.',

	secoes: [
		{
			id: 'o-que-nao-pode-parar',
			h2: 'O que uma loja precisa para não parar',
			paragrafos: [
				'Contratar banda é a parte fácil e a menos decisiva. O que define se a loja continua vendendo num dia ruim são as duas camadas seguintes: a comutação que assume sozinha quando o link principal cai e a existência de um responsável com prazo para restabelecer o serviço. Falta qualquer uma das três e a loja segue vendendo — até o dia em que não vende.',
				'A ordem importa porque quase todo projeto de varejo para na primeira. Assina-se o contrato, comemora-se o número da velocidade e descobre-se, numa véspera de feriado, que o cartão não autoriza, a fila cresce e o cliente desiste com o produto na mão. Nesse momento, nenhum megabit contratado ajuda.'
			],
			lista: [
				'Link principal dimensionado pelo pico, não pela média do mês',
				'Comutação automática, com data do último teste registrada',
				'Wi-Fi de cliente em rede separada da rede do caixa',
				'Um responsável identificado e prazo de reparo por escrito'
			]
		},
		{
			id: 'conta-da-loja-parada',
			h2: 'A conta que o varejo raramente faz',
			paragrafos: [
				'O custo de uma queda no varejo não se distribui igualmente pelo mês: ele se concentra em poucas horas do ano. Uma hora de caixa fora do ar numa terça de manhã custa pouco. A mesma hora num sábado de dezembro custa o que a loja faturaria em vários dias comuns somados — e traz uma perda que não volta, porque o cliente que foi embora sem comprar raramente retorna no dia seguinte.',
				'Quando o varejista faz essa conta com o próprio faturamento por hora — e é uma conta que só ele consegue fazer, porque só ele tem o dado —, a discussão sobre redundância muda de natureza. Deixa de ser um item a cortar do orçamento e vira proteção para o pior dia do calendário. Não temos como calcular isso por você, mas é a primeira informação que um consultor pede ao checar a operação, porque é ela que define o quanto de redundância faz sentido.'
			]
		},
		{
			id: 'pdv-tef-maquininha',
			h2: 'PDV, TEF e maquininha: o que depende de quê',
			paragrafos: [
				'Os três costumam ser tratados como uma coisa só e se comportam de formas distintas na queda. O PDV, dependendo do sistema, continua registrando venda localmente e sincroniza depois. O TEF não: sem rede, o cartão não é autorizado e a venda simplesmente não fecha. A emissão de NFC-e tem contingência prevista, mas com regra e procedimento — e quem nunca testou a contingência acaba aprendendo o procedimento no pior momento possível.',
				'Some a isso o sistema de retaguarda, o controle de estoque, a integração com o e-commerce e as câmeras de segurança, e fica claro por que "a internet da loja" é uma expressão que esconde pelo menos quatro dependências diferentes, com tolerâncias diferentes a uma mesma falha.'
			],
			subsecoes: [
				{
					h3: 'Backup automático contra puxar do celular do gerente',
					paragrafos: [
						'Roteamento manual pelo celular do gerente é um plano de contingência que depende de três coisas darem certo ao mesmo tempo: o gerente estar na loja, o aparelho ter bateria e alguém saber trocar a configuração. Comutação automática não depende de ninguém — o equipamento identifica a falha e assume o caminho alternativo enquanto a fila continua andando.',
						'A pergunta que raramente tem resposta é uma só: qual foi a data do último teste de comutação? Redundância que nunca foi acionada é suposição, não proteção. Failover testado na entrega da loja, com a data registrada no projeto da unidade, é o padrão que vale exigir de qualquer fornecedor — sem isso, ninguém consegue afirmar que a loja está coberta.'
					]
				},
				{
					h3: 'Sazonalidade: dimensionar é olhar para o pico',
					paragrafos: [
						'Varejo tem calendário conhecido com meses de antecedência: Black Friday, Natal, Dia das Mães, liquidação de virada e o pico próprio de cada segmento. Dimensionar pela média mensal é garantir que a loja funcione bem exatamente nos dias em que o resultado é indiferente, e mal nos dias que pagam o ano.',
						'O mesmo raciocínio vale para qualquer ação que aumente o fluxo dentro da loja — promoção, lançamento, evento de marca. O que cabe numa terça não cabe numa véspera, e a diferença aparece primeiro na autorização de pagamento, que é o ponto mais sensível de toda a operação.'
					]
				}
			]
		},
		{
			id: 'rede-com-varias-unidades',
			h2: 'Quando a rede passa de uma loja',
			paragrafos: [
				'Com uma loja, tudo é resolvido pelo dono. Com cinco, começa a aparecer o custo de não ter padrão: cada unidade com uma operadora, um contrato, uma data de vencimento e um jeito próprio de pedir socorro. Com vinte, a falta de padrão vira o problema principal — maior que qualquer característica técnica de um link isolado.',
				'Padronizar significa que a loja nova é a cópia de um desenho já validado: mesmo equipamento, mesma segmentação de rede, mesma regra de comutação, mesmo canal de atendimento. É isso que permite abrir unidade sem reinventar o projeto e sem descobrir na semana da inauguração que o endereço não comporta o que foi prometido na reunião.',
				'Do lado administrativo, contrato consolidado no CNPJ da rede, faturamento organizado por unidade e ponto único de atendimento economizam mais tempo do gestor do que qualquer ganho de velocidade. Em rede com contratos herdados de épocas diferentes, essa arrumação costuma render mais que a negociação comercial que vem depois.'
			]
		},
		{
			id: 'comparativo',
			h2: 'Quatro perfis de loja e o que muda em cada um',
			paragrafos: [
				'A escolha entre os perfis abaixo não é de orçamento, e sim de exposição: quanto a operação perde por hora parada e quantas unidades dependem da mesma decisão sendo tomada uma vez só.'
			],
			tabela: {
				head: ['Perfil', 'Link principal', 'Redundância', 'Gestão', 'Atendimento'],
				rows: [
					[
						'Loja de rua única',
						'Fibra empresarial dimensionada pelo pico',
						'Caminho móvel para PDV e autorização de cartão',
						'Feita pelo próprio dono',
						'Canal empresarial'
					],
					[
						'Loja de shopping',
						'Acesso próprio, sem depender só do compartilhado',
						'Comutação automática, pela regra do condomínio',
						'Contrato do lojista, não do shopping',
						'Canal empresarial'
					],
					[
						'Rede de poucas unidades',
						'Padrão único replicado loja a loja',
						'Comutação automática em todas as unidades',
						'Contrato consolidado no CNPJ da rede',
						'Ponto único para a rede inteira'
					],
					[
						'Rede acima de vinte lojas',
						'Padrão validado em piloto antes do rollout',
						'Redundância obrigatória por unidade',
						'Visão central com faturamento por loja',
						'Consultor que conhece o desenho de cada unidade'
					]
				],
				caption:
					'Comparação de arranjos técnicos e de gestão, sem valores: o desenho depende da viabilidade em cada endereço, do que a loja emite e de quanto a operação suporta parada. O projeto só se fecha depois de um consultor checar a viabilidade unidade por unidade.'
			}
		},
		{
			id: 'checklist',
			h2: 'Dez itens para não descobrir o problema no sábado',
			paragrafos: [
				'Use a lista com qualquer fornecedor, inclusive com quem já atende as suas lojas hoje. São perguntas baratas de fazer antes e caras de descobrir depois — sobretudo em rede, onde o mesmo erro se repete em todas as unidades ao mesmo tempo.'
			],
			checklist: {
				titulo: 'Dez perguntas antes de assinar o contrato da loja',
				intro: 'Guarde as respostas junto do contrato de cada unidade: em rede, é o que evita repetir a mesma dúvida vinte vezes.',
				itens: [
					'O failover já foi testado e qual foi a data do último teste',
					'O PDV registra venda sem rede e sincroniza depois',
					'A autorização de cartão tem caminho alternativo na queda',
					'Quem abre o chamado e por qual canal, com a loja cheia',
					'Existe prazo de reparo por escrito e o que ocorre se for descumprido',
					'O link do shopping é compartilhado e o que ele garante ao lojista',
					'O Wi-Fi de cliente está em rede separada da rede do caixa',
					'As câmeras dividem a mesma via e competem pela banda de subida',
					'O contrato é por loja ou consolidado no CNPJ da rede',
					'A portabilidade preserva o telefone já divulgado da loja'
				]
			}
		},
		{
			id: 'o-que-define-o-investimento',
			h2: 'O que define o investimento de uma rede de lojas',
			paragrafos: [
				'Preço de projeto de varejo não cabe numa tabela publicada: duas lojas do mesmo tamanho, em endereços diferentes, podem ter viabilidades técnicas distintas, e isso muda o desenho inteiro. Em vez de um número que envelhece no dia seguinte, publicamos o que o consultor vai cotar, item por item, para você conferir a proposta em vez de acreditar nela.',
				'Cinco desses itens respondem pela maior parte da diferença entre um orçamento e outro. O sexto é decisivo em rede e raramente entra na comparação: unidades contratadas isoladamente consomem mais tempo de gestão do que a soma das diferenças técnicas entre elas.'
			],
			lista: [
				'Número de unidades e o padrão de banda por loja',
				'Exigência de comutação automática em cada endereço',
				'Prazo de reparo contratado e prioridade de atendimento',
				'Segmentação de rede para Wi-Fi de cliente e câmeras',
				'Contrato consolidado no CNPJ da rede ou por unidade',
				'Viabilidade técnica confirmada endereço por endereço'
			]
		}
	],

	passos: {
		titulo: 'Como avança um projeto de conectividade em rede de lojas',
		subtitulo:
			'Quatro etapas, nesta ordem. Rede nenhuma deveria ser implantada de uma vez: primeiro uma loja vira padrão, depois o padrão vira rollout.',
		itens: [
			{
				title: 'Diagnóstico por unidade e leitura das faturas',
				text: 'Um consultor checa a viabilidade e o cenário de cada loja: o que ela tem hoje, o que emite, o que depende de rede e o que está sendo pago sem uso. Em rede com contratos assinados em épocas diferentes, essa etapa costuma render mais que a negociação seguinte.'
			},
			{
				title: 'Piloto em uma loja',
				text: 'Uma unidade representativa recebe o desenho completo antes das outras: link, segmentação, comutação automática e teste de failover com data registrada. O princípio é não replicar nada antes de funcionar numa loja com movimento.'
			},
			{
				title: 'Padrão validado e rollout por lotes',
				text: 'O que funcionou no piloto vira o padrão da rede e é replicado por lotes, respeitando o calendário comercial. Unidade nenhuma deveria ser migrada em véspera de data de pico.'
			},
			{
				title: 'Ponto único de atendimento',
				text: 'Concluído o rollout, o que evita retrabalho é a rede ter um só canal para abrir chamado, um consultor que conhece o desenho de cada unidade e o faturamento organizado loja por loja. É item para deixar acertado no contrato, não para descobrir depois.'
			}
		]
	},

	objecoes: [
		{
			q: '“O shopping já fornece a internet da loja.”',
			a: 'Fornece um acesso compartilhado entre lojistas, em geral sem prazo de reparo contratado para você. Funciona na rotina e satura exatamente quando o shopping está cheio, que é quando a sua loja mais vende. Quem depende de autorização de cartão costuma precisar de um caminho próprio, mesmo mantendo o do condomínio como apoio.'
		},
		{
			q: '“Nossa maquininha é 4G, não precisamos de backup.”',
			a: 'A maquininha resolve o pagamento e só. O PDV, a emissão fiscal, o controle de estoque e a integração com a retaguarda continuam parados. É paliativo para uma das quatro dependências da loja, não redundância da operação.'
		},
		{
			q: '“Cada loja resolve a internet dela.”',
			a: 'Funciona enquanto são poucas. O custo aparece quando ninguém sabe qual unidade tem qual contrato, o vencimento é diferente em cada uma e o gerente de loja acaba virando o suporte técnico da rede. O ganho da padronização é de tempo de gestão antes de ser técnico.'
		},
		{
			q: '“Redundância é luxo para uma rede pequena.”',
			a: 'Pode ser mesmo, e quando é o caso dizemos isso. O que define não é o tamanho da rede e sim quanto a loja fatura por hora no pico e se o cliente volta depois de ir embora sem comprar. Em segmento de compra por impulso, ele não volta — e aí a conta se inverte.'
		}
	],

	eeat: {
		titulo: 'De onde vem o critério deste texto',
		paragrafos: [
			'O Grupo OC atua há mais de 15 anos em gestão, auditoria e consultoria de telecomunicações empresariais, e é representante autorizado TIM para empresas. O perfil da empresa no Google reúne 110 avaliações com nota 4,9, e a carteira vai de MEI a operações do porte da BYD.',
			'A regra de decisão desta página é própria e explícita: redundância só existe se tiver data do último teste. Failover contratado e nunca acionado é uma linha no contrato, não uma proteção — e essa é a primeira pergunta a fazer a quem já atende as suas lojas hoje, nós inclusive.',
			'A segunda regra é de implantação: nenhuma rede deveria ser replicada antes de uma unidade virar padrão validado. O piloto existe para que o erro apareça numa loja só, e não em vinte ao mesmo tempo, na mesma semana.',
			'O que prometemos, e é o que dá para prometer, é objetivo: um consultor checa a viabilidade endereço por endereço antes de qualquer proposta, e a condição comercial melhora conforme o volume, com desconto progressivo a partir de dez linhas.'
		]
	},

	faqTitulo: 'Dúvidas de quem administra loja e rede de varejo',
	faq: [
		{
			q: 'A internet do shopping é suficiente para a loja?',
			a: 'Costuma ser compartilhada entre lojistas e sem prazo de reparo contratado para o lojista. Funciona na rotina e falha justamente no pico. Quem depende de autorização de cartão e de emissão fiscal geralmente precisa de um caminho próprio ou de comutação automática.'
		},
		{
			q: 'Maquininha 4G substitui backup de internet?',
			a: 'Resolve a autorização do pagamento, não o PDV, a emissão fiscal nem o sistema de retaguarda. É um paliativo para parte do problema, não a redundância da loja.'
		},
		{
			q: 'Dá para gerenciar várias lojas num contrato só?',
			a: 'Sim, e é o formato que recomendamos: contrato consolidado no CNPJ da rede, faturamento organizado por unidade e um ponto único para abrir chamado.'
		},
		{
			q: 'Quanto tempo leva para instalar em uma loja nova?',
			a: 'Depende da viabilidade técnica no endereço, e é a primeira coisa que um consultor checa — antes de qualquer proposta. O cronograma é informado depois dessa checagem, junto com o desenho da unidade.'
		},
		{
			q: 'O Wi-Fi do cliente pode usar o mesmo link do PDV?',
			a: 'Pode, desde que em rede separada e com prioridade para a operação. Misturar Wi-Fi de cliente com a rede do caixa é o erro que mais aparece em loja que já tem rede instalada.'
		}
	],

	cta: {
		titulo: 'Fale com um consultor sobre as suas lojas',
		texto:
			'Informe quantas unidades você tem e o que cada uma emite. Um consultor checa a viabilidade endereço por endereço antes de qualquer proposta comercial — e, quando o volume de linhas cresce, o desconto progressivo entra na conta a partir de dez linhas.'
	},

	service: {
		name: 'Conectividade para lojas e redes de varejo',
		serviceType: 'Conectividade empresarial para varejo multi-unidade',
		description:
			'Projeto de internet e telefonia para lojas e redes de varejo: dimensionamento pelo pico de movimento, comutação automática para PDV e autorização de cartão, segmentação do Wi-Fi de cliente e gestão consolidada de várias unidades.'
	},

	relacionadas: [
		'telecom-para-abertura-de-filial',
		'internet-e-telefonia-para-hoteis-e-restaurantes',
		'internet-5g-para-empresas-sem-fibra-no-endereco'
	],
	artigos: [
		'fibra-optica-empresarial-para-e-commerce-como-garantir-black-friday-sem-quedas',
		'internet-backup-tim-empresas-4g-5g-failover',
		'tim-empresas-para-franquias-como-conectar-20-unidades-com-gestao-centralizada',
		'sua-empresa-perde-vendas-com-internet-lenta-veja-como-link-dedicado-resolve'
	]
};
