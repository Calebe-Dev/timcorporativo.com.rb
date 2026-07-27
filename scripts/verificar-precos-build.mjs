#!/usr/bin/env node
// Varredura de preço no HTML JÁ GERADO, não no fonte.
//
// O validar-lps.mjs olha os objetos .js e garante que a COPY das landing pages
// não cita valor. Este script olha o que o visitante recebe — que inclui coisas
// que não vieram da copy: títulos de artigos do acervo no bloco de relacionados,
// texto de componente compartilhado, JSON-LD.
//
// A distinção importa. "R$" dentro de <a> de artigo relacionado é um título
// herdado do CMS, não promessa da página; "R$" no corpo é violação. Reportar os
// dois como a mesma coisa esconde o problema real no meio do ruído.
//
//   node scripts/verificar-precos-build.mjs

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const BUILD = new URL('../build/solucoes/', import.meta.url).pathname;

const PADROES = [
	{ nome: 'R$', re: /R\$\s*[\d.,]+/g },
	{ nome: 'valor em reais', re: /\b\d[\d.,]*\s*reais\b/gi },
	{ nome: 'percentual de desconto', re: /\b\d{1,2}\s*%\s*(?:de\s+)?(?:desconto|off|OFF)/gi },
	{ nome: 'a partir de valor', re: /a partir de\s*R?\$?\s*\d+[.,]?\d*\s*(?:reais|por m[êe]s|\/m[êe]s)/gi },
	{ nome: 'mensalidade com número', re: /mensalidade\s+de\s+R?\$?\s*\d/gi }
];

/** Remove os trechos que não são copy da página: JSON-LD e bloco de relacionados. */
function separar(html) {
	let corpo = html;
	const herdado = [];

	// JSON-LD — é dado estruturado, avaliado à parte.
	corpo = corpo.replace(/<script type="application\/ld\+json">.*?<\/script>/gs, (m) => {
		herdado.push({ origem: 'JSON-LD', texto: m });
		return ' ';
	});

	// Payload de hidratação do SvelteKit: repete todo o `data` da rota como JS.
	// Não é conteúdo visível, mas contém os mesmos títulos de artigo — sem tirar
	// daqui, cada acerto é contado duas vezes.
	corpo = corpo.replace(/<script>\s*\{\s*__sveltekit_.*?<\/script>/gs, (m) => {
		herdado.push({ origem: 'payload de hidratação', texto: m });
		return ' ';
	});

	// Blocos que listam TÍTULO DE ARTIGO do acervo. `.*?</section>` não serve:
	// a section de relacionados contém <section> aninhada em algumas rotas e o
	// não-guloso fecha na primeira, deixando o resto do bloco dentro do "corpo" —
	// era por isso que um título com R$ aparecia como se fosse copy da página.
	// Aqui o recorte é por contagem de abre/fecha, que casa a tag certa.
	for (const marca of ['relacionadas', 'mapa-do-site']) {
		const origem = marca === 'relacionadas' ? 'bloco de relacionados' : 'mapa do site';
		const ini = corpo.search(new RegExp(`<section[^>]*aria-labelledby="${marca}"`));
		if (ini === -1) continue;
		let i = ini,
			nivel = 0;
		const tag = /<(\/?)section\b[^>]*>/g;
		tag.lastIndex = ini;
		let m;
		while ((m = tag.exec(corpo))) {
			nivel += m[1] ? -1 : 1;
			if (nivel === 0) {
				i = m.index + m[0].length;
				break;
			}
		}
		herdado.push({ origem, texto: corpo.slice(ini, i) });
		corpo = corpo.slice(0, ini) + ' ' + corpo.slice(i);
	}

	return { corpo, herdado };
}

const semTags = (s) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

const arquivos = [];
for (const e of await readdir(BUILD, { withFileTypes: true })) {
	if (e.isDirectory()) arquivos.push(path.join(BUILD, e.name, 'index.html'));
}
arquivos.push(path.join(BUILD, 'index.html'));

let violacoes = 0;
const herdadas = new Map();

for (const f of arquivos) {
	let html;
	try {
		html = await readFile(f, 'utf8');
	} catch {
		continue;
	}
	const nome = path.basename(path.dirname(f));
	const { corpo, herdado } = separar(html);

	// 1. Copy da página — qualquer acerto aqui é violação.
	const texto = semTags(corpo);
	for (const { nome: p, re } of PADROES) {
		for (const m of texto.matchAll(re)) {
			console.log(`❌ ${nome}: ${p} na COPY → "${m[0]}"`);
			violacoes++;
		}
	}

	// 2. Trechos herdados — não é violação, mas precisa ser visível.
	for (const { origem, texto: t } of herdado) {
		for (const { re } of PADROES) {
			for (const m of semTags(t).matchAll(re)) {
				const chave = `${origem}|${m[0]}`;
				if (!herdadas.has(chave)) herdadas.set(chave, new Set());
				herdadas.get(chave).add(nome);
			}
		}
	}
}

console.log(`\nPáginas varridas: ${arquivos.length}`);

if (herdadas.size) {
	console.log(`\nℹ️  Valores em conteúdo HERDADO (título de artigo do acervo — não é copy da LP):`);
	for (const [chave, paginas] of herdadas) {
		const [origem, valor] = chave.split('|');
		console.log(`   "${valor}" no ${origem} — em ${paginas.size} página(s)`);
	}
}

if (violacoes) {
	console.log(`\n❌ ${violacoes} violação(ões) na copy.\n`);
	process.exit(1);
}
console.log('\n✅ Nenhum valor monetário na copy das landing pages.\n');
