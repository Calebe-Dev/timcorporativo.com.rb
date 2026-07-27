#!/usr/bin/env node
// Higiene de SEO das landing pages de /solucoes/.
//
// Roda sobre src/lib/solucoes/paginas/*.js SEM precisar de build nem de rede.
// Existe porque os erros que este script pega são invisíveis na revisão manual
// de 20 arquivos parecidos: title de 74 caracteres que a SERP corta, dois H1
// iguais competindo pela mesma query, um "a partir de R$" que contradiz a venda
// consultiva, link interno para slug que não existe.
//
//   node scripts/validar-lps.mjs

import { readdir, readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const DIR = new URL('../src/lib/solucoes/paginas/', import.meta.url);
const ART = new URL('../content/artigos/', import.meta.url);

const LIMITES = {
	title: 60,
	description: 155,
	// Abaixo disso não é landing page de conversão, é parágrafo com botão.
	palavrasMin: 1200
};

// A venda é consultiva e nenhuma página pode cravar valor.
//
// A primeira versão era grosseira demais e reprovava texto legítimo: `\breais\b`
// pegava "materiais reais da planta", e `a partir de \d` pegava "descontos
// progressivos a partir de 10 linhas" — que é quantidade, não preço, e já é
// público na home. Falso positivo aqui é caro: faz quem escreve contorcer a
// frase para agradar o validador, e o texto piora sem que nada melhore.
//
// Agora só casa VALOR monetário de verdade.
const PRECO = [
	/R\$/,
	/\d\s*reais\b/i,
	/\bmensalidade de\s*\d/i,
	/\bpor apenas\b/i,
	/\bcusta\s+(?:cerca de\s+)?R?\$?\s*\d/i,
	/\ba partir de\s*R?\$?\s*\d+[.,]?\d*\s*(?:reais|por m[êe]s|mensais|\/m[êe]s)/i
];

// Promessa que não controlamos vira reclamação depois — e o Google trata
// superlativo não comprovado como sinal de baixa qualidade.
const EXAGERO = /\bo melhor do brasil\b|\b100% de garantia\b|\bo mais barato\b|\bnº ?1 do mercado\b/i;

const erros = [];
const avisos = [];
const falha = (slug, msg) => erros.push(`${slug}: ${msg}`);
const alerta = (slug, msg) => avisos.push(`${slug}: ${msg}`);

/** Todo texto visível da página, para contagem de palavras e varredura. */
function textoDe(lp) {
	const partes = [lp.h1, lp.resumo, lp.hero?.sub, ...(lp.hero?.bullets ?? [])];
	for (const s of lp.secoes ?? []) {
		partes.push(s.h2, ...(s.paragrafos ?? []), ...(s.lista ?? []));
		for (const sub of s.subsecoes ?? []) partes.push(sub.h3, ...(sub.paragrafos ?? []));
		if (s.tabela) partes.push(...s.tabela.rows.flat(), s.tabela.caption);
		if (s.checklist) partes.push(s.checklist.titulo, s.checklist.intro, ...s.checklist.itens);
	}
	for (const p of lp.passos?.itens ?? []) partes.push(p.title, p.text);
	for (const o of lp.objecoes ?? []) partes.push(o.q, o.a);
	for (const f of lp.faq ?? []) partes.push(f.q, f.a);
	partes.push(lp.eeat?.titulo, ...(lp.eeat?.paragrafos ?? []));
	return partes.filter(Boolean).join(' ');
}

const arquivos = (await readdir(DIR)).filter((f) => f.endsWith('.js')).sort();
const artigos = new Set(
	(await readdir(ART)).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''))
);

const lps = [];
for (const f of arquivos) {
	const mod = await import(pathToFileURL(path.join(DIR.pathname, f)).href);
	lps.push({ arquivo: f, lp: mod.default });
}

const slugs = new Set(lps.map(({ lp }) => lp.slug));
const h1s = new Map();
const titles = new Map();
const kwPrimarias = new Map();

for (const { arquivo, lp } of lps) {
	const s = lp.slug;

	if (`${s}.js` !== arquivo) falha(s, `slug não bate com o arquivo ${arquivo}`);
	if (!/^[a-z0-9-]+$/.test(s)) falha(s, 'slug fora do padrão kebab-case');
	if (/\b(20\d\d)\b/.test(s)) falha(s, 'slug com ano — a página precisa ser atemporal');

	// --- meta ---
	if (!lp.title) falha(s, 'sem title');
	else if (lp.title.length > LIMITES.title)
		alerta(s, `title com ${lp.title.length} car. (>${LIMITES.title}, a SERP corta)`);

	if (!lp.description) falha(s, 'sem meta description');
	else if (lp.description.length > LIMITES.description)
		alerta(s, `description com ${lp.description.length} car. (>${LIMITES.description})`);

	if (!lp.h1) falha(s, 'sem h1');
	else if (lp.h1 === lp.title) alerta(s, 'h1 idêntico ao title — desperdiça uma variação de termo');

	// --- unicidade entre as páginas (canibalização) ---
	for (const [mapa, valor, rotulo] of [
		[h1s, lp.h1, 'h1'],
		[titles, lp.title, 'title'],
		[kwPrimarias, lp.keywordPrimaria, 'keyword primária']
	]) {
		if (!valor) continue;
		const chave = valor.toLowerCase().trim();
		if (mapa.has(chave)) falha(s, `${rotulo} duplicado com ${mapa.get(chave)}`);
		else mapa.set(chave, s);
	}

	// --- estrutura ---
	if (!lp.resumo) falha(s, 'sem resumo (o trecho que AI Overview cita)');
	else if (lp.resumo.split(/\s+/).length > 70)
		alerta(s, 'resumo com mais de 70 palavras — perde a função de resposta direta');

	if ((lp.secoes?.length ?? 0) < 4) falha(s, `só ${lp.secoes?.length ?? 0} seções (mínimo 4)`);
	const ids = (lp.secoes ?? []).map((x) => x.id);
	if (new Set(ids).size !== ids.length) falha(s, 'ids de seção repetidos — âncora ambígua');

	if ((lp.faq?.length ?? 0) < 4) falha(s, `FAQ com ${lp.faq?.length ?? 0} itens (mínimo 4)`);
	if (!lp.eeat?.paragrafos?.length) falha(s, 'sem bloco de E-E-A-T');
	if (!lp.service?.name) falha(s, 'sem nó Service para o JSON-LD');
	if (!lp.cta?.titulo) falha(s, 'sem CTA de conversão');
	if (!lp.keyFacts?.length) falha(s, 'sem keyFacts no cartão do hero');

	// --- malha interna ---
	for (const r of lp.relacionadas ?? []) {
		if (!slugs.has(r)) falha(s, `relacionada "${r}" não existe`);
		if (r === s) falha(s, 'relacionada apontando para si mesma');
	}
	for (const a of lp.artigos ?? []) {
		if (!artigos.has(a)) falha(s, `artigo "${a}" não existe em content/artigos/`);
	}
	if ((lp.relacionadas?.length ?? 0) < 2) alerta(s, 'menos de 2 soluções relacionadas');
	if ((lp.artigos?.length ?? 0) < 2) alerta(s, 'menos de 2 artigos de apoio');

	// --- conteúdo ---
	const texto = textoDe(lp);
	const palavras = texto.split(/\s+/).filter(Boolean).length;
	if (palavras < LIMITES.palavrasMin)
		alerta(s, `${palavras} palavras (alvo ≥ ${LIMITES.palavrasMin})`);

	for (const re of PRECO) {
		const m = texto.match(re);
		if (m) falha(s, `menciona preço ("${m[0].trim()}") — a venda é consultiva`);
	}

	const exagero = texto.match(EXAGERO);
	if (exagero) falha(s, `promessa não comprovável ("${exagero[0]}")`);

	// FAQ repetido da home dilui o rich result em vez de somar.
	const perguntas = (lp.faq ?? []).map((f) => f.q.toLowerCase().trim());
	if (new Set(perguntas).size !== perguntas.length) falha(s, 'perguntas repetidas no FAQ');
}

// --- relatório ---
console.log(`\nLanding pages analisadas: ${lps.length}`);
const totalPalavras = lps.reduce((n, { lp }) => n + textoDe(lp).split(/\s+/).length, 0);
console.log(`Palavras no conjunto: ${totalPalavras.toLocaleString('pt-BR')}`);
console.log(`Média por página: ${Math.round(totalPalavras / lps.length).toLocaleString('pt-BR')}`);

if (avisos.length) {
	console.log(`\n⚠️  ${avisos.length} aviso(s):`);
	for (const a of avisos) console.log(`   ${a}`);
}
if (erros.length) {
	console.log(`\n❌ ${erros.length} erro(s):`);
	for (const e of erros) console.log(`   ${e}`);
	process.exit(1);
}
console.log('\n✅ Nenhum erro.\n');
