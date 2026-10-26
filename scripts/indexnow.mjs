#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
// IndexNow: avisa Bing, Yandex, Seznam e Naver de que URLs foram criadas,
// alteradas ou removidas, sem esperar o próximo rastreamento. O Google não usa
// IndexNow; para ele continuam valendo o sitemap e o Search Console.
//
// A chave fica em static/<KEY>.txt (servida na raiz do site) e o protocolo
// confere esse arquivo antes de aceitar o envio, então publique o site com a
// chave antes da primeira chamada.
//
// Uso (rodar depois do deploy, contra o site no ar):
//   node scripts/indexnow.mjs https://timcorporativo.com.br/pagina/ ...   URLs avulsas
//   node scripts/indexnow.mjs --sitemap                       todas as URLs do sitemap
//   node scripts/indexnow.mjs --sitemap --contem /blog/       só as que contêm o trecho
//   node scripts/indexnow.mjs --sitemap --desde 2026-10-25    só as com lastmod a partir da data
//   node scripts/indexnow.mjs --mudou build                   só as páginas do build cujo conteúdo mudou
//   node scripts/indexnow.mjs --mudou vivo                    idem, lendo as páginas do sitemap no ar
//   --dry-run lista o que seria enviado, sem enviar.
//
// --mudou compara o texto de cada página (título, description e corpo, sem
// scripts, estilos e datas) com o do último envio, guardado em
// .indexnow-estado.json, e manda as URLs novas, alteradas e removidas. Na
// primeira vez só grava esse estado, sem enviar nada. Se mais da metade de um
// site grande parecer alterada, para e pede --forcar: costuma ser algo do build
// que muda em toda página, não conteúdo novo.
//
// Mande só o que mudou: reenviar o sitemap inteiro a cada deploy não acelera
// nada e pode fazer o buscador passar a ignorar os avisos do site.

const HOST = 'timcorporativo.com.br';
const KEY = '1af77fe0a390b3131d63807f9b5650c7';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const LOTE = 10000; // limite do protocolo por requisição
const ESTADO = '.indexnow-estado.json';

const args = process.argv.slice(2);
const flag = (nome) => args.includes(nome);
const valor = (nome) => {
	const i = args.indexOf(nome);
	return i >= 0 ? args[i + 1] : undefined;
};
const avulsas = args.filter((a, i) => /^https?:\/\//.test(a) && !['--contem', '--desde'].includes(args[i - 1]));

async function texto(url) {
	const r = await fetch(url, { headers: { 'user-agent': 'indexnow-script' } });
	if (!r.ok) throw new Error(`${url} respondeu ${r.status}`);
	return r.text();
}

// Segue sitemaps-índice até chegar nas URLs; devolve [{ loc, lastmod }].
async function lerSitemap(url, vistos = new Set()) {
	if (vistos.has(url)) return [];
	vistos.add(url);
	const xml = await texto(url);
	const blocos = (tag) => [...xml.matchAll(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'g'))].map((m) => m[1]);
	const campo = (bloco, tag) => bloco.match(new RegExp(`<${tag}>\\s*([^<]*?)\\s*</${tag}>`))?.[1];
	if (/<sitemapindex/.test(xml)) {
		const filhos = blocos('sitemap').map((b) => campo(b, 'loc')).filter(Boolean);
		return (await Promise.all(filhos.map((f) => lerSitemap(f.replace(/&amp;/g, '&'), vistos)))).flat();
	}
	return blocos('url').map((b) => ({ loc: campo(b, 'loc')?.replace(/&amp;/g, '&'), lastmod: campo(b, 'lastmod') }));
}

// Impressão do conteúdo: hashes de assets, scripts e datas mudam a cada build
// sem que a página tenha mudado, então ficam de fora.
const DATAS = /\b\d{4}-\d{2}-\d{2}(T[\d:.]+(Z|[+-]\d{2}:?\d{2})?)?\b|\b\d{1,2}\/\d{1,2}\/\d{4}\b|\b\d{1,2}º? de [a-zç]+ de \d{4}\b/gi;
// A Cloudflare troca e-mails por "[email protected]" no HTML servido.
const EMAILS = /\[email(&#160;|\s)protected\]|[\w.+-]+@[\w-]+(\.[\w-]+)+/g;
function impressao(html) {
	const titulo = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '';
	const descricao = html.match(/<meta[^>]+name="description"[^>]*>/i)?.[0] ?? '';
	const corpo = (html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? html)
		.replace(/<(script|style|noscript|svg|template)\b[\s\S]*?<\/\1>/gi, ' ')
		.replace(/<[^>]+>/g, ' ');
	const texto = `${titulo}\n${descricao}\n${corpo}`
		.replace(DATAS, '')
		.replace(EMAILS, '')
		.replace(/\s+/g, ' ')
		.trim();
	return createHash('sha256').update(texto).digest('hex').slice(0, 20);
}

const indexavel = (html) => !/<meta[^>]+name="robots"[^>]+noindex/i.test(html);

async function* arquivosHtml(dir) {
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const p = join(dir, e.name);
		if (e.isDirectory()) yield* arquivosHtml(p);
		else if (e.name.endsWith('.html')) yield p;
	}
}

// URL canônica -> impressão, a partir das páginas do build (sem canonical no
// próprio host ou com noindex, a página não entra).
async function lerBuild(dir) {
	const mapa = {};
	for await (const arq of arquivosHtml(dir)) {
		const html = await readFile(arq, 'utf8');
		const canon = html.match(/<link[^>]+rel="canonical"[^>]*>/i)?.[0].match(/href="([^"]+)"/)?.[1];
		if (!canon || !indexavel(html)) continue;
		const url = canon.replace(/&amp;/g, '&');
		if (new URL(url).host !== HOST) continue;
		mapa[url] = mapa[url] ? impressao(mapa[url] + impressao(html)) : impressao(html);
	}
	return mapa;
}

// Mesma coisa, lendo no ar as páginas do sitemap.
async function lerVivo() {
	const urls = [...new Set((await lerSitemap(`https://${HOST}/sitemap.xml`)).map((u) => u.loc).filter(Boolean))];
	const mapa = {};
	let i = 0;
	await Promise.all(Array.from({ length: 6 }, async () => {
		while (i < urls.length) {
			const url = urls[i++];
			const r = await fetch(url, { headers: { 'user-agent': 'indexnow-script' }, redirect: 'manual' }).catch(() => null);
			if (r?.status !== 200) continue;
			const html = await r.text();
			if (indexavel(html)) mapa[url] = impressao(html);
		}
	}));
	return mapa;
}

async function mudancas(fonte) {
	const atual = fonte === 'vivo' ? await lerVivo() : await lerBuild(fonte);
	const total = Object.keys(atual).length;
	if (!total) throw new Error(`nenhuma página indexável encontrada em ${fonte}`);
	const anterior = JSON.parse(await readFile(ESTADO, 'utf8').catch(() => 'null'));
	const salvar = () => writeFile(ESTADO, JSON.stringify(atual, null, '\t') + '\n');
	if (!anterior) {
		if (!flag('--dry-run')) await salvar();
		console.log(`IndexNow: primeiro registro de ${total} página(s) em ${ESTADO}; nada enviado.`);
		return { urls: [], salvar };
	}
	const urls = [
		...Object.keys(atual).filter((u) => anterior[u] !== atual[u]),
		...Object.keys(anterior).filter((u) => !(u in atual))
	];
	console.log(`IndexNow: ${urls.length} de ${total} página(s) novas, alteradas ou removidas desde o último envio.`);
	if (urls.length > 200 && urls.length > total / 2 && !flag('--forcar')) {
		throw new Error('mudança grande demais para ser só conteúdo; confira o build e rode de novo com --forcar se for isso mesmo.');
	}
	return { urls, salvar };
}

async function main() {
	let urls = avulsas;
	let salvar;
	const fonte = valor('--mudou');
	if (fonte) ({ urls, salvar } = await mudancas(fonte));
	if (flag('--sitemap')) {
		let itens = await lerSitemap(`https://${HOST}/sitemap.xml`);
		const contem = valor('--contem');
		const desde = valor('--desde');
		if (contem) itens = itens.filter((u) => u.loc?.includes(contem));
		if (desde) itens = itens.filter((u) => u.lastmod && u.lastmod.slice(0, 10) >= desde);
		urls = urls.concat(itens.map((u) => u.loc));
	}
	urls = [...new Set(urls.filter(Boolean))];
	const fora = urls.filter((u) => new URL(u).host !== HOST);
	if (fora.length) throw new Error(`URLs fora de ${HOST} não são aceitas: ${fora.slice(0, 3).join(', ')}`);
	if (!urls.length) {
		if (!fonte) console.log('Nenhuma URL para enviar. Passe URLs, --sitemap ou --mudou (veja o cabeçalho do script).');
		return;
	}

	const keyLocation = `https://${HOST}/${KEY}.txt`;
	if (flag('--dry-run')) {
		console.log(urls.join('\n'));
		console.log(`\n${urls.length} URL(s) seriam enviadas para ${ENDPOINT} (chave em ${keyLocation}).`);
		return;
	}
	const publicada = (await texto(keyLocation).catch(() => '')).trim();
	if (publicada !== KEY) throw new Error(`${keyLocation} não está no ar com a chave; publique o site antes.`);

	let falhou = false;
	for (let i = 0; i < urls.length; i += LOTE) {
		const urlList = urls.slice(i, i + LOTE);
		const r = await fetch(ENDPOINT, {
			method: 'POST',
			headers: { 'content-type': 'application/json; charset=utf-8' },
			body: JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList })
		});
		// 200 = recebido; 202 = recebido, chave ainda em validação.
		// 400 formato, 403 chave não confere, 422 URL fora do host, 429 excesso de envios.
		console.log(`IndexNow: ${urlList.length} URL(s) -> HTTP ${r.status}`);
		if (r.status !== 200 && r.status !== 202) {
			console.log((await r.text()).slice(0, 500));
			falhou = true;
		}
	}
	// O estado só avança quando tudo foi aceito; senão o próximo --mudou reenvia.
	if (falhou) process.exitCode = 1;
	else if (salvar) await salvar();
}

main().catch((e) => {
	console.error(`IndexNow: ${e.message}`);
	process.exitCode = 1;
});
