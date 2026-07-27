// Registro das landing pages de solução.
//
// Uma LP = um arquivo em ./paginas/<slug>.js exportando o objeto default. O glob
// é eager e resolvido em tempo de build (SSG), então adicionar uma página é
// criar o arquivo — nada de lista manual para esquecer de atualizar.

const modulos = import.meta.glob('./paginas/*.js', { eager: true });

// CLUSTERS precisa ser declarado ANTES de solucoesLp: o .sort() abaixo roda no
// topo do módulo e lê Object.keys(CLUSTERS). Declarado depois, o `const` cai na
// zona morta temporal e o build morre com "Cannot access before initialization".
//
// Ordem do objeto = ordem de exibição no hub e de ordenação do registro.
//
// Não existe cluster de VOZ aqui de propósito: PABX em nuvem, SIP e telefonia
// virtual pertencem a meupabxemnuvem.com.br, e "link dedicado" como termo-alvo
// pertence a linkdedicada.com.br — ambos do mesmo grupo. Os dois temas aparecem
// como COMPONENTE dentro das páginas (uma clínica precisa de ramal, uma
// transportadora precisa de link), nunca como alvo primário de uma LP daqui.
// Criar página-alvo para eles seria competir com o próprio grupo pela mesma
// SERP. Ver a alocação em ../../../palavras-chave-por-site.json (fora do repo).
export const CLUSTERS = {
	verticais: {
		titulo: 'Por segmento de negócio',
		descricao:
			'O que muda na infraestrutura conforme o que a empresa faz — clínica, transportadora, varejo, escola e hotelaria têm requisitos técnicos diferentes entre si.'
	},
	conectividade: {
		titulo: 'Conectividade e cobertura',
		descricao:
			'Endereço sem fibra, rastreamento de frota, rede privativa. Quando a pergunta é "dá para conectar aqui?".'
	},
	decisao: {
		titulo: 'Decisão de fornecedor',
		descricao:
			'Comparações honestas para quem está escolhendo entre caminhos de contratação, operadoras e portes de atendimento.'
	},
	contrato: {
		titulo: 'Contrato, fatura e migração',
		descricao:
			'O que fazer com o contrato que já existe: trocar, renovar, auditar a fatura ou levar a estrutura para uma filial nova.'
	},
	local: {
		titulo: 'Sorocaba e região',
		descricao:
			'Atendimento presencial no eixo Sorocaba–Votorantim–Itu–Boituva–Iperó, onde o Grupo OC tem endereço, equipe e histórico.'
	}
};

/** @type {Array<Record<string, any>>} */
export const solucoesLp = Object.entries(modulos)
	.map(([caminho, mod]) => {
		const lp = mod.default;
		const slugArquivo = caminho.replace('./paginas/', '').replace(/\.js$/, '');
		if (lp.slug !== slugArquivo) {
			// Falha no build em vez de publicar uma URL que não bate com o arquivo:
			// slug divergente quebraria o link interno e o canonical de uma só vez.
			throw new Error(
				`Landing page ${caminho}: slug "${lp.slug}" diferente do nome do arquivo "${slugArquivo}".`
			);
		}
		return lp;
	})
	// Ordem estável e independente do sistema de arquivos: primeiro por cluster
	// (na ordem de negócio), depois pela ordem declarada dentro do cluster.
	.sort((a, b) => {
		const ordemCluster = Object.keys(CLUSTERS);
		const d = ordemCluster.indexOf(a.cluster) - ordemCluster.indexOf(b.cluster);
		return d !== 0 ? d : (a.ordem ?? 99) - (b.ordem ?? 99);
	});

const porSlug = new Map(solucoesLp.map((lp) => [lp.slug, lp]));

export function lpPorSlug(slug) {
	return porSlug.get(slug);
}

/** Só os campos que o hub e o bloco de relacionadas precisam. */
export function cartao(slug) {
	const lp = porSlug.get(slug);
	if (!lp) return null;
	return {
		slug: lp.slug,
		cluster: lp.cluster,
		cardTitulo: lp.cardTitulo,
		cardTexto: lp.cardTexto
	};
}
