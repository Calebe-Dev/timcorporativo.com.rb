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
	'tim-ultrafibra-planos-2026-preco-cobertura': {
		resposta:
			'Não há tabela única de preço para a TIM UltraFibra: o valor sai da oferta disponível para o endereço e muda com a velocidade escolhida, o prazo de fidelidade e o que vem junto no plano. O primeiro passo é consultar o CEP e o número do imóvel; para empresa, a contratação é no CNPJ, pela TIM Fibra Empresa.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
	'tim-ultra-fibra-empresarial-vale-a-pena': {
		resposta:
			'A TIM UltraFibra empresarial resolve o dia a dia de PMEs e filiais: sistemas em nuvem, backups, VoIP com vários ramais e videoconferência, desde que upload, latência e jitter estejam adequados. Ela não basta quando a operação exige banda garantida (CIR), rotas exclusivas e tempo de reparo definido em contrato; nesses casos, o caminho é o link dedicado.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
	'tim-ultrafibra-1-giga-vs-vivo-1-giga': {
		resposta:
			'TIM UltraFibra 1 Giga e Vivo Fibra 1 Giga têm o mesmo nome de velocidade, mas o número indica a velocidade contratada, não a que chega em cada aparelho. A diferença costuma estar em viabilidade no endereço, estabilidade no horário de pico, upload, suporte, prazo de fidelidade e o que vem junto na oferta; compare pelos mesmos critérios.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
	'tim-corporativo-planos-empresariais': {
		resposta:
			'O TIM Corporativo reúne, no CNPJ, internet por fibra (TIM Fibra Empresa e TIM UltraFibra), Link Dedicado TIM quando a operação precisa de banda garantida, IP fixo e SLA em contrato, telefonia fixa e PABX virtual, e linhas móveis TIM Black Empresa e TIM Controle Empresa. A proposta parte da viabilidade no endereço e do perfil de uso da empresa.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
	'plano-tim-empresarial-black-controle-pre-comparativo': {
		resposta:
			'TIM Black Empresa é o pós-pago para equipes que dependem de dados fora do escritório; TIM Controle Empresa tem franquia definida em contrato, com teto por linha e fatura previsível. A oferta da TIM para empresas é pós-paga ou controle; pré-pago fica no CPF. A escolha sai do perfil de uso de cada pessoa, e os dois convivem na conta.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
	'ip-fixo-empresarial-seguranca-acesso-remoto-guia': {
		resposta:
			'A banda larga empresarial comum trabalha com IP dinâmico, que muda quando o modem reinicia; o IP fixo mantém sempre o mesmo endereço e é o que VPN, câmeras, servidor e acesso remoto exigem. Na TIM, o IP fixo faz parte do Link Dedicado; na TIM Fibra Empresa depende do plano e do contrato, confirmado na proposta.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
	'portabilidade-tim-empresarial-como-trocar-de-operadora-e-manter-numero': {
		resposta:
			'A portabilidade TIM leva o número da empresa para a TIM sem trocá-lo. A regra da Anatel é a mesma para CPF e CNPJ; muda o caminho: no CPF, o pedido é feito nos canais da própria TIM; no CNPJ, entra com a contratação do plano empresarial, pelo representante autorizado, que confere titularidade, documentos e linhas antes da troca.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
	'vivo-vs-claro-empresas-2025-comparativo-preco': {
		resposta:
			'Vivo Empresas e Claro Empresas são operadoras distintas e concorrentes. O comparativo mostra os pontos fortes e fracos de cada uma para CNPJ: a Vivo pesa em cobertura de estradas e áreas rurais e em combos com fibra; a Claro, em operação urbana com preço como decisor. E apresenta a TIM como terceira opção a avaliar antes de fechar.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
	'tim-vs-vivo-empresas-2025-comparativo': {
		resposta:
			'TIM Empresas e Vivo Empresas são duas operadoras distintas, com oferta própria para CNPJ. A comparação passa por apps inclusos, cobertura, roaming nacional, flexibilidade de contrato e atendimento, e mostra os cenários em que a Vivo ainda faz sentido, como combos com fibra dedicada e áreas rurais remotas, e aqueles em que a TIM tende a compensar.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
	'plano-empresarial-tim-como-escolher-a-melhor-solucao': {
		resposta:
			'Para escolher um plano de internet empresarial TIM, parta de quatro pontos: o que a empresa precisa (porte, área de atuação, equipe em campo ou no escritório), o custo-benefício frente ao uso real, a combinação de dados móveis com internet fixa e o suporte dedicado ao plano. A proposta é montada no CNPJ a partir dessas respostas.',
		atualizadoEm: '2026-10-16T00:00:00'
	},
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
			'O Plano TIM PJ é o plano de celular contratado no CNPJ — do MEI à pequena empresa, a partir de uma única linha — com a linha no nome da empresa, fatura única e gestão centralizada, o que o plano de pessoa física não oferece. Abaixo: quem pode contratar, as vantagens frente ao CPF, os quatro passos da contratação e as dúvidas mais comuns.',
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
};
