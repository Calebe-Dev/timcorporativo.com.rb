// Camada editorial por artigo, versionada no repo — não no CMS.
//
// Por que aqui e não no JSON do snapshot: o CMS PREVALECE sobre o snapshot no
// build quando a cópia dele é mais nova (server/artigos.js), e um campo que só
// existe no snapshot sumiria na primeira sincronização. Este mapa é aplicado
// DEPOIS da mesclagem, então vale para qualquer origem.
//
// `resposta` — 40 a 60 palavras que respondem à pergunta da busca antes de
// qualquer subtítulo: é o trecho que o AI Overview e o featured snippet citam,
// e o que o leitor apressado precisa para decidir se continua (mesma função do
// `resumo` das landing pages). Escrita a partir do que o próprio artigo diz —
// sem preço, faixa ou percentual (regra R1 de scripts/validar-lps.mjs) e sem a
// marca antiga ($lib/brand.js).
//
// `atualizadoEm` — só quando o conteúdo mudou de verdade. Vira dateModified no
// JSON-LD, lastmod no sitemap e "Atualizado em" na byline. Carimbar data sem
// revisão é exatamente o que faz o Google parar de considerar o campo.
//
// Escolha das primeiras 11 (GSC, 28 dias até 11/09/2026): as páginas de maior
// impressão com CTR abaixo de 0,6% — padrão compatível com a resposta sendo
// consumida na própria SERP — mais a de portabilidade (10,5 mil impressões).

const REVISAO = '2026-09-14T00:00:00';

/** @type {Record<string, { resposta?: string, atualizadoEm?: string }>} */
export const EDITORIAL = {
	'como-ativar-chip-tim-empresa-guia-completo-de-ativacao-corporativa': {
		resposta:
			'Para ativar um chip TIM Empresa: insira o chip com o aparelho desligado, ligue e aguarde o registro na rede — a ativação vincula o chip ao plano corporativo da empresa. Se a internet não conectar, configure a APN da TIM manualmente. Abaixo, o passo a passo completo, a configuração da APN e a solução dos erros mais comuns.',
		atualizadoEm: REVISAO
	},
	'meu-tim-empresas-fatura-2-via-suporte': {
		resposta:
			'O Meu TIM Empresas é o portal de autoatendimento para clientes CNPJ: nele o gestor consulta a TIM Conta do mês, emite a 2ª via da fatura e acompanha o consumo de dados das linhas. Este guia mostra como acessar e usar o portal — e o que fazer quando a demanda vai além do que o autoatendimento resolve.',
		atualizadoEm: REVISAO
	},
	'canais-de-atendimento-tim-empresarial': {
		resposta:
			'A TIM Empresarial atende clientes corporativos por canais exclusivos: suporte técnico e comercial especializado, ajuda na gestão de contas e contratos e, para empresas de maior porte, gerentes de conta dedicados. Este artigo apresenta esses canais e explica quando cada um é o caminho mais rápido para resolver.',
		atualizadoEm: REVISAO
	},
	'plano-tim-pj-cnpj-2026': {
		resposta:
			'O Plano TIM PJ é o plano de celular contratado no CNPJ — do MEI à pequena empresa, a partir de uma única linha — com voz ilimitada para qualquer operadora e condições que os planos de pessoa física não oferecem. Abaixo: quem pode contratar, as vantagens frente ao CPF, os quatro passos da contratação e as dúvidas mais comuns.',
		atualizadoEm: REVISAO
	},
	'tim-empresas-telefone-atendimento-2026': {
		resposta:
			'Para falar com a TIM Empresas há três caminhos: os canais oficiais da operadora (0800, *144, app e portal), o TIM Gestor para o que dá para resolver sozinho, e o canal autorizado, que atende a empresa sem URA. Este guia lista os canais e indica qual usar em cada situação — 2ª via, contratação, internet fora do ar ou cobrança indevida.',
		atualizadoEm: REVISAO
	},
	'tim-empresas-login-guia-gestao-faturas-linhas-portal': {
		resposta:
			'O portal TIM Empresas é onde o gestor acessa faturas detalhadas, emite a 2ª via, adiciona ou bloqueia linhas de colaboradores e acompanha o consumo de dados da equipe. Este guia mostra como fazer o login, recuperar a senha, gerenciar várias linhas e configurar os controles de custo — no caminho “faça você mesmo”.',
		atualizadoEm: REVISAO
	},
	'plano-empresarial-tim-comparativo-precos-escolher': {
		resposta:
			'A escolha entre os planos empresariais TIM se resolve pelo perfil de uso: o TIM Black Empresa (pós-pago) para equipes que dependem de dados e mobilidade; o TIM Empresa Controle para operações que precisam de custo previsível. Este comparativo analisa as diferenças técnicas, os cenários de cada um e a opção com aparelho — para dimensionar sem pagar por franquia que ninguém usa.',
		atualizadoEm: REVISAO
	},
	'tim-black-empresa-internet-movel-para-seu-negocio': {
		resposta:
			'O TIM Black Empresa é o plano pós-pago da TIM para empresas que dependem de internet móvel: rede 4G e 5G, cobertura ampla no país, planos que escalam com o número de linhas e gestão centralizada das contas. Abaixo, os seis pontos que pesam na decisão e as perguntas mais frequentes.',
		atualizadoEm: REVISAO
	},
	'telefone-tim-empresas-consultor-cotacao-rapida': {
		resposta:
			'Quem procura o telefone da TIM Empresas geralmente quer uma cotação, uma migração ou suporte — e o atendimento de varejo não foi desenhado para contrato corporativo. Um consultor autorizado atende a empresa direto, sem URA: cotação por CNPJ, auditoria dos custos atuais e contratação sem burocracia. Este artigo explica a diferença e como agilizar o pedido.',
		atualizadoEm: REVISAO
	},
	'segunda-via-chip-tim-como-solicitar-documentos-prazos-ativacao': {
		resposta:
			'A segunda via do chip TIM é solicitada pelo atendimento telefônico, nas lojas ou pelos canais online, com documento de identificação e comprovação de titularidade da linha. O processo é gratuito e leva poucos dias; o número e os serviços são mantidos. Abaixo: documentos aceitos, prazos por região e como ativar o novo chip.',
		atualizadoEm: REVISAO
	},
	'portabilidade-tim-empresarial-como-trocar-de-operadora-e-manter-numero': {
		resposta:
			'A portabilidade TIM Empresarial permite migrar as linhas da empresa para a TIM mantendo o mesmo número — direito garantido pela Anatel. O processo tem documentos definidos, prazos curtos e etapas claras; contratos de fidelidade e custos com a operadora atual devem ser avaliados antes. Este guia percorre o passo a passo, os requisitos e os prazos.',
		atualizadoEm: REVISAO
	}
};
