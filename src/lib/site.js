// Dados centrais do site — representante autorizado TIM (Grupo OC).
// Conteúdo baseado no site original timcorporativo.com.br.

export const site = {
	name: 'TIM Corporativo',
	legalName: 'Grupo OC',
	tagline: 'Representante autorizado TIM para empresas',
	url: 'https://timcorporativo.com.br',
	// ~150 caracteres: cabe inteira na SERP e cobre a intenção de compra
	// (contratar/CNPJ/proposta) além das queries de marca já consolidadas.
	description:
		'Planos TIM Empresa para CNPJ: TIM Black Empresa, TIM Fibra e UltraFibra. Compare, contrate com representante autorizado e receba proposta personalizada.',
	logo: '/wp-content/uploads/2025/10/tim-logo-2022.svg',
	// JPEG e não WebP: crawler de rede social (LinkedIn, entre outros) nem sempre
	// renderiza WebP. Recorte 1200×630 (proporção 1.91:1 que Facebook, WhatsApp e
	// X esperam — o quadrado 1200×1200 era cortado de forma imprevisível).
	ogImage: '/wp-content/uploads/2026/05/TIM-Capa-Gancho-og.jpg',
	ogImageWidth: 1200,
	ogImageHeight: 630,
	ogImageAlt:
		'Planos TIM Empresa — sua empresa ainda paga caro pela telefonia móvel? Descubra os planos TIM.',
	// Para a meta keywords (auditorias pedem; o Google a ignora desde 2009, mas
	// outros buscadores e ferramentas ainda leem — e não custa nada).
	keywords:
		'tim empresa, plano tim empresa, tim black empresa, tim fibra empresa, tim ultrafibra, tim corporativo, plano tim cnpj, contratar tim empresa, portabilidade tim empresa, representante autorizado tim'
};

export const contact = {
	phoneLabel: '15 3500-8940',
	phoneHref: 'tel:+551535008940',
	whatsappNumber: '5515996510375',
	whatsappLabel: '15 99651-0375',
	whatsappText: 'Olá! Gostaria de saber mais sobre os planos TIM Empresa. Obrigado!',
	emails: ['contato@grupooc.com.br', 'comercial@grupooc.com.br'],
	address: 'Rua Tereza Lopes, 677 – Vila Hortência, Sorocaba/SP',
	addressLocality: 'Sorocaba',
	addressRegion: 'SP',
	cnpj: '23.474.830/0001-56',
	facebook: 'https://www.facebook.com/grupoocwearepeople',
	instagram: 'https://www.instagram.com/grupooc/',
	linkedin: 'https://www.linkedin.com/company/grupo-oc-we-are-people/',
	yearsExperience: 15
};

// Site Key do Cloudflare Turnstile. É pública por natureza (vai no HTML), ao
// contrário da Secret Key, que só existe como secret da Pages Function.
//
// Vazia = widget NÃO renderiza e o formulário segue só com honeypot + validação
// server-side. Essa é a ordem segura: primeiro publicar o widget e confirmar que
// o lead passa, só então gravar TURNSTILE_SECRET_KEY. Com a secret gravada e o
// formulário sem enviar token, a Function rejeita TODOS os leads com 403.
export const turnstileSiteKey = '0x4AAAAAAD860rBYjiTD51kA';

export function whatsappLink(text = contact.whatsappText) {
	return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const nav = [
	{ label: 'Início', href: '#topo' },
	{ label: 'Soluções', href: '#solucoes' },
	{ label: 'Planos', href: '#planos' },
	{ label: 'Vantagens', href: '#vantagens' },
	{ label: 'Contratar', href: '#como-contratar' },
	{ label: 'Dúvidas', href: '#faq' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Contato', href: '#contato' }
];

export const hero = {
	badge: `Representante autorizado TIM · +${contact.yearsExperience} anos`,
	title: 'Planos TIM Empresa: Black, Fibra e UltraFibra',
	// 30+ palavras de propósito: é o primeiro parágrafo da página, que buscadores
	// e mecanismos de resposta (IA) usam como resumo do site.
	subtitle:
		'Soluções de telefonia móvel, internet fibra e conectividade corporativa para pequenas, médias e grandes empresas — com atendimento consultivo de um representante autorizado TIM. Compare TIM Black Empresa, TIM Fibra e UltraFibra e receba uma proposta sob medida para o seu CNPJ.',
	image: '/wp-content/uploads/2025/10/grupo-de-pessoas-diversas-tendo-uma-reuniao-de-negocios-scaled.webp',
	bullets: [
		'Internet fibra e telefonia empresarial',
		'Atendimento consultivo especializado',
		'Descontos progressivos a partir de 10 linhas'
	]
};

export const solutions = [
	{
		name: 'TIM Black Empresa',
		image: '/wp-content/uploads/2026/05/TIM-Black-Empresa.webp',
		text: 'Planos móveis para equipes que dependem de dados, voz e aplicativos na rotina profissional — vendedores, gestores e atendimento externo.'
	},
	{
		name: 'TIM Fibra Empresa',
		image: '/wp-content/uploads/2026/05/TIM-Fibra-Empresa.webp',
		text: 'Internet fixa estável para lojas, escritórios, sistemas online, emissão de notas e reuniões por vídeo, com disponibilidade avaliada por endereço.'
	},
	{
		name: 'TIM UltraFibra',
		image: '/wp-content/uploads/2026/05/TIM-Telefonia-Movel.webp',
		text: 'Alta velocidade para operações digitais que dependem de conexão estável, atendimento e sistemas em nuvem no dia a dia.'
	}
];

export const differentials = [
	{
		title: 'Análise de telecom',
		text: 'Comparamos as soluções TIM Empresa e identificamos oportunidades de organização e economia em conectividade.'
	},
	{
		title: 'Cobertura e disponibilidade',
		text: 'Avaliação de cobertura conforme endereço, mobilidade da equipe e necessidade real da operação.'
	},
	{
		title: 'Orientação especializada',
		text: 'Atendimento consultivo para escolher entre internet fibra, telefonia empresarial e planos móveis TIM Empresa.'
	}
];

export const plans = [
	{
		name: 'Pequenas Empresas e MEI',
		text: 'TIM Black Empresa e conectividade para operações enxutas, com análise do perfil de uso e da quantidade de linhas.'
	},
	{
		name: 'Médias Empresas',
		text: 'Projetos consultivos que integram TIM Fibra Empresa, telefonia empresarial e mobilidade corporativa para apoiar a expansão.'
	},
	{
		name: 'Grandes Corporações',
		text: 'Atendimento dedicado para ambientes com múltiplas unidades, equipes distribuídas e maior volume de linhas.'
	}
];

export const advantages = [
	{ title: 'Telefonia empresarial', text: 'Organize chamadas, linhas corporativas e comunicação entre equipes.' },
	{ title: 'Internet móvel para equipes', text: 'Apoio a vendedores, técnicos e gestores que dependem de dados em campo.' },
	{ title: 'Aplicativos e produtividade', text: 'Recursos associados aos planos conforme o uso real de comunicação e atendimento.' },
	{ title: 'Gestão de linhas e contratos', text: 'Acompanhe linhas, perfis de usuário e necessidades de telecom em uma estrutura simples.' },
	{ title: 'Atendimento consultivo', text: 'Compare TIM Black, Fibra, UltraFibra e telefonia empresarial com orientação.' },
	{ title: 'Mobilidade nacional', text: 'Equipes conectadas em deslocamento conforme disponibilidade de cobertura.' }
];

// Blocos editoriais herdados da home original (preservam as queries de pesquisa:
// TIM Empresa, TIM Black Empresa, TIM Fibra Empresa, TIM UltraFibra).
export const contentSections = [
	{
		id: 'perfil-negocio',
		title: 'TIM Empresa para cada perfil de negócio',
		paragraphs: [
			'Os planos TIM Empresa atendem negócios que precisam manter equipes conectadas dentro e fora do escritório. A escolha ideal depende do número de linhas, do uso de internet móvel, da rotina de atendimento e da necessidade de conexão fixa para a operação.',
			'Com uma consultoria especializada, sua empresa pode comparar TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra sem perder tempo analisando opções que não combinam com o seu cenário.'
		]
	},
	{
		id: 'black-em-movimento',
		title: 'TIM Black Empresa para equipes em movimento',
		paragraphs: [
			'O TIM Black Empresa é indicado para empresas que dependem de comunicação móvel, atendimento externo, vendedores, gestores e equipes que precisam acessar dados, aplicativos e chamadas durante a rotina de trabalho.',
			'Na contratação consultiva, avaliamos o perfil de uso das linhas, a necessidade de portabilidade, a cobertura e os recursos que ajudam sua equipe a trabalhar com mais previsibilidade.'
		]
	},
	{
		id: 'fibra-ultrafibra-corporativa',
		title: 'TIM Fibra Empresa e TIM UltraFibra para internet corporativa',
		paragraphs: [
			'TIM Fibra Empresa e TIM UltraFibra são alternativas para empresas que precisam de internet fixa estável para loja, escritório, atendimento, sistemas online, emissão de notas, reuniões por vídeo e rotinas administrativas.',
			'A disponibilidade pode variar por endereço e perfil da empresa. Por isso, o atendimento consultivo ajuda a validar cobertura, necessidade de velocidade, quantidade de usuários e melhor combinação com planos móveis TIM Empresa.'
		]
	}
];

// Jornada de contratação — cobre as queries transacionais ("como contratar
// TIM Empresa", "comprar plano TIM empresarial", "plano TIM CNPJ") que os
// blocos editoriais de marca acima não alcançam. Nada aqui promete prazo ou
// preço que não controlamos: a compra é consultiva e o texto reflete isso.
export const comoContratar = {
	title: 'Como contratar seu plano TIM Empresa',
	subtitle:
		'Da análise à ativação: compra 100% consultiva, sem burocracia e sem sair da empresa — direto com um representante autorizado TIM.',
	steps: [
		{
			title: 'Diagnóstico gratuito',
			text: 'Conte como sua empresa usa telefonia e internet hoje: quantidade de linhas, operadora atual e o que precisa melhorar.'
		},
		{
			title: 'Proposta personalizada',
			text: 'O consultor compara TIM Black Empresa, TIM Fibra e UltraFibra para o seu CNPJ e monta a proposta com descontos progressivos.'
		},
		{
			title: 'Documentação simples',
			text: 'CNPJ ativo e documentos do representante legal. A análise de crédito empresarial é conduzida pelo próprio consultor.'
		},
		{
			title: 'Ativação acompanhada',
			text: 'Portabilidade sem trocar de número e ativação com acompanhamento até as linhas estarem funcionando na sua operação.'
		}
	]
};

export const portabilidade = {
	title: 'Portabilidade TIM Empresa: troque de operadora sem trocar de número',
	paragraphs: [
		'Sua empresa pode migrar para os planos TIM Empresa mantendo todos os números atuais — fixos e móveis. A portabilidade é agendada e acompanhada pelo consultor, e as linhas continuam funcionando durante todo o processo.',
		'Para comparar, basta apresentar a fatura da operadora atual: o consultor analisa o contrato vigente, identifica cobranças que podem ser reduzidas e apresenta a proposta TIM equivalente ou superior antes de qualquer decisão.'
	]
};

// Blocos de autoridade e fechamento herdados da home original.
export const authority = {
	blackTagline: 'Tire suas dúvidas ou contrate um plano TIM Empresa com internet, voz, Waze e WhatsApp inclusos.',
	renovacao: {
		title: 'Renovação Segura',
		text: 'Cliente TIM: tenha a segurança de dados protegidos e sem aumento inesperado na fatura.'
	},
	experiencia: {
		title: 'Mais de 15 anos em telecom empresarial',
		text: 'O Grupo OC atua há mais de 15 anos em gestão de telecomunicações, auditoria e consultoria em telefonia empresarial. Ajudamos empresas a reduzir custos, otimizar recursos e escolher entre TIM Empresa, TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra com mais segurança.'
	},
	fechamento: {
		title: 'TIM Fibra Empresa e TIM UltraFibra',
		text: 'Se a sua busca é por TIM Empresa, nossa consultoria compara TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra de acordo com o número de linhas, uso de dados e necessidade de internet fixa. Preencha o formulário para receber atendimento consultivo e uma proposta TIM Empresas alinhada à sua operação.'
	}
};

export const faq = [
	{
		q: 'O que é TIM Empresa?',
		a: 'TIM Empresa reúne soluções de telefonia móvel, dados e internet para negócios que precisam conectar equipes, filiais, lojas e escritórios.'
	},
	{
		q: 'Quando escolher TIM Black Empresa?',
		a: 'O TIM Black Empresa é indicado para equipes que usam celular corporativo, internet móvel, chamadas e aplicativos no dia a dia profissional.'
	},
	{
		q: 'Quando contratar TIM Fibra Empresa ou TIM UltraFibra?',
		a: 'São indicados quando a empresa precisa de internet fixa para operação interna, atendimento, sistemas, reuniões online e rotinas administrativas.'
	},
	{
		q: 'MEI pode contratar plano TIM Empresas?',
		a: 'Sim. Empresas com CNPJ ativo, incluindo MEI e profissionais liberais, podem consultar soluções TIM Empresa conforme disponibilidade e análise comercial.'
	},
	{
		q: 'Qual a documentação necessária para contratar?',
		a: 'É necessário apresentar o CNPJ ativo da empresa, a documentação do representante legal e passar por uma análise de crédito empresarial.'
	},
	{
		q: 'Como receber uma proposta TIM Empresas?',
		a: 'Preencha o formulário ou fale pelo WhatsApp para que um consultor avalie o perfil da empresa e indique a melhor combinação entre linhas móveis, fibra e serviços corporativos.'
	},
	{
		q: 'Como comprar um plano TIM empresarial?',
		a: 'A compra é consultiva e feita sem sair da empresa: você envia os dados pelo formulário ou WhatsApp, um consultor compara os planos TIM Empresa para o seu CNPJ e a contratação é concluída com a documentação da empresa.'
	},
	{
		q: 'Quanto custa um plano TIM Empresa?',
		a: 'O valor depende da quantidade de linhas, da franquia de dados e da combinação com internet fibra. Há descontos progressivos a partir de 10 linhas, e o consultor apresenta uma proposta personalizada sem compromisso.'
	},
	{
		q: 'Como funciona a portabilidade para a TIM Empresa?',
		a: 'Sua empresa mantém os números atuais: a migração é agendada e acompanhada pelo consultor, e as linhas seguem funcionando durante o processo. Basta apresentar a fatura da operadora atual para a análise comparativa.'
	},
	{
		q: 'Qual o prazo para ativar as linhas?',
		a: 'O prazo varia conforme a análise de crédito, a quantidade de linhas e a disponibilidade no endereço. Após a aprovação da proposta, o consultor informa o cronograma e acompanha cada etapa da ativação.'
	}
];

export const formOptions = {
	linhas: ['Até 5 linhas', '5 a 10 linhas', '10 a 30 linhas', '30 a 100 linhas', 'Mais de 100 linhas'],
	operadoras: ['TIM', 'Vivo', 'Claro', 'Outra', 'Ainda não tenho']
};
