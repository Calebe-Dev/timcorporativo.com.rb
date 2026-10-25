#!/usr/bin/env node
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
//   --dry-run lista o que seria enviado, sem enviar.
//
// Mande só o que mudou: reenviar o sitemap inteiro a cada deploy não acelera
// nada e pode fazer o buscador passar a ignorar os avisos do site.

const HOST = 'timcorporativo.com.br';
const KEY = '1af77fe0a390b3131d63807f9b5650c7';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const LOTE = 10000; // limite do protocolo por requisição

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

async function main() {
	let urls = avulsas;
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
		console.log('Nenhuma URL para enviar. Passe URLs ou --sitemap (veja o cabeçalho do script).');
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
			process.exitCode = 1;
		}
	}
}

main().catch((e) => {
	console.error(`IndexNow: ${e.message}`);
	process.exitCode = 1;
});
