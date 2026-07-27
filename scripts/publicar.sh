#!/usr/bin/env bash
# Publicação em produção — Cloudflare Pages, upload direto.
#
# Existe porque o GitHub Actions NÃO publica: o secret CLOUDFLARE_API_TOKEN está
# inválido desde 24/07/2026 e todo deploy desde então foi manual. O projeto
# `timcorporativo` também não tem integração Git (Git Provider: No no painel),
# então não há um segundo caminho que resolva sozinho.
#
# Cada passo é uma trava: se qualquer um falhar, nada sobe. Publicar 23 landing
# pages com preço na copy ou com link interno quebrado é muito mais caro do que
# abortar e corrigir.
#
#   bash scripts/publicar.sh
#
# Requer wrangler autenticado (`npx wrangler whoami`) e as variáveis do OC Hub.

set -euo pipefail
cd "$(dirname "$0")/.."

# Sem credencial real do CMS o build cai no snapshot local de content/artigos/,
# que é a fonte de verdade das 189 URLs indexadas. Passe as reais no ambiente
# para que artigos novos criados no OC Hub também entrem.
export OCHUB_DIRECTUS_URL="${OCHUB_DIRECTUS_URL:-https://ochub-api.grupooc.com.br}"
export OCHUB_API_TOKEN="${OCHUB_API_TOKEN:-dummy}"
export OCHUB_SITE_UUID="${OCHUB_SITE_UUID:-9a8c40f4-b63c-42af-8de8-1b28cbf150e9}"

passo() { printf '\n\033[1m▸ %s\033[0m\n' "$1"; }

passo '1/5 Higiene das landing pages'
node scripts/validar-lps.mjs

passo '2/5 Build'
npm run build

passo '3/5 Nenhum preço na copy'
node scripts/verificar-precos-build.mjs

passo '4/5 Integridade do HTML gerado'
node --input-type=module -e '
import { readdir, readFile } from "node:fs/promises";
const base = "build/solucoes";
let n = 0; const probs = [];
for (const e of await readdir(base, { withFileTypes: true })) {
  if (!e.isDirectory()) continue;
  const h = await readFile(`${base}/${e.name}/index.html`, "utf8");
  n++;
  const h1 = (h.match(/<h1/g) ?? []).length;
  if (h1 !== 1) probs.push(`${e.name}: ${h1} H1`);
  const can = h.match(/rel="canonical" href="([^"]+)"/)?.[1];
  const esperado = `https://timcorporativo.com.br/solucoes/${e.name}/`;
  if (can !== esperado) probs.push(`${e.name}: canonical ${can}`);
  if (h.includes("noindex")) probs.push(`${e.name}: noindex`);
  const ld = h.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
  if (!ld) probs.push(`${e.name}: sem JSON-LD`);
  else {
    const tipos = new Set(JSON.parse(ld.replaceAll("\\u003c", "<"))["@graph"].map((x) => String(x["@type"])));
    for (const r of ["WebPage", "BreadcrumbList", "Service", "FAQPage"])
      if (!tipos.has(r)) probs.push(`${e.name}: JSON-LD sem ${r}`);
    if (tipos.has("HowTo")) probs.push(`${e.name}: HowTo (aposentado pelo Google)`);
  }
}
console.log(`  ${n} landing pages verificadas`);
if (probs.length) { probs.forEach((p) => console.log("  ❌ " + p)); process.exit(1); }
console.log("  ✅ estrutura íntegra");
'

passo '5/5 Deploy'
npx wrangler pages deploy build --project-name=timcorporativo --branch=main

printf '\n\033[1mConfira em produção:\033[0m\n'
printf '  curl -s -o /dev/null -w "%%{http_code}\\n" https://timcorporativo.com.br/solucoes/\n'
