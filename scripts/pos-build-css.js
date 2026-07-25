// Pós-processamento do CSS do build para os validadores do W3C (Jigsaw/Nu).
//
// O Tailwind 4 registra variáveis internas com @property e mantém, para
// navegadores sem suporte, um fallback @supports que define os mesmos valores
// iniciais via seletor universal (o comportamento do Tailwind v3). O validador
// CSS do W3C não implementa @property e acusa cada bloco como erro.
//
// Este script (1) remove os blocos @property e (2) destrava o fallback,
// aplicando-o a todos os navegadores — semântica idêntica à do Tailwind v3.
// Seguro aqui porque `@layer properties` é declarada antes das demais camadas
// (menor prioridade: as utilities continuam vencendo) e o site não anima
// gradientes, único recurso que dependeria de propriedade tipada.
//
// Roda dentro de `npm run build`. Ao subir de versão o Tailwind, confira o
// visual: se o formato do fallback mudar, o aviso abaixo acusa no build.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BUILD = new URL('../build', import.meta.url).pathname;

const RE_PROPERTY = /@property\s+--[\w-]+\s*\{[^{}]*\}/g;
// Condição exata que o Tailwind usa para detectar navegador sem @property.
const RE_SUPPORTS_FALLBACK = /@supports [^{]*margin-trim[^{]*\{/;

function transformarCss(css) {
	let out = css.replace(RE_PROPERTY, '');

	const m = out.match(RE_SUPPORTS_FALLBACK);
	if (m) {
		const inicio = m.index;
		const corpo = inicio + m[0].length;
		// Acha a chave que fecha o @supports para remover só o invólucro.
		let nivel = 1;
		let i = corpo;
		while (i < out.length && nivel > 0) {
			if (out[i] === '{') nivel++;
			else if (out[i] === '}') nivel--;
			i++;
		}
		out = out.slice(0, inicio) + out.slice(corpo, i - 1) + out.slice(i);
	}
	return out;
}

function* arquivos(dir) {
	for (const e of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, e.name);
		if (e.isDirectory()) yield* arquivos(p);
		else yield p;
	}
}

let cssTocados = 0;
let htmlTocados = 0;
let blocosRemovidos = 0;

for (const p of arquivos(BUILD)) {
	if (p.endsWith('.css')) {
		const antes = readFileSync(p, 'utf-8');
		const encontrados = antes.match(RE_PROPERTY)?.length ?? 0;
		if (!encontrados) continue;
		writeFileSync(p, transformarCss(antes));
		cssTocados++;
		blocosRemovidos += encontrados;
	} else if (p.endsWith('.html')) {
		const antes = readFileSync(p, 'utf-8');
		if (!antes.includes('@property')) continue;
		// Só mexe dentro de <style>: o resto do HTML fica intacto.
		const depois = antes.replace(
			/(<style[^>]*>)([\s\S]*?)(<\/style>)/g,
			(tudo, abre, css, fecha) =>
				css.includes('@property') ? abre + transformarCss(css) + fecha : tudo
		);
		if (depois !== antes) {
			writeFileSync(p, depois);
			htmlTocados++;
		}
	}
}

if (blocosRemovidos === 0) {
	console.warn(
		'⚠️  [pos-build-css] nenhum @property encontrado — o formato do CSS do ' +
			'Tailwind mudou? Confira se o fallback continua sendo destravado.'
	);
} else {
	console.log(
		`  [pos-build-css] ${blocosRemovidos} blocos @property removidos ` +
			`(${cssTocados} css, ${htmlTocados} html); fallback universal destravado.`
	);
}
