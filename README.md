# timcorporativo.com.br — Docs

Site estático (SSG) que renderiza a documentação de conteúdo/SEO do site **timcorporativo.com.br**.
Construído com **SvelteKit + Svelte 5**, **Tailwind CSS v4** e **adapter-static** (100% pré-renderizado, sem servidor).

## Estrutura

```
.
├── docs/                     # fonte da documentação (NÃO é servida como arquivo cru)
│   ├── mapa-do-site/         # mapeamento das páginas: SEO, estrutura, schema
│   ├── relatorio-autor-calebe-araujo.md
│   ├── relatorio-reescrita-homepage-timcorporativo.md
│   ├── *.json                # backups de páginas WordPress
│   └── .env                  # credenciais da REST API do WP (fora do build)
├── src/
│   ├── lib/docs.js           # lê os .md de /docs em build e monta a navegação
│   ├── routes/
│   │   ├── +layout.svelte    # shell + sidebar de navegação
│   │   ├── +page.svelte      # índice (cards por pasta)
│   │   └── docs/[...slug]/    # renderiza cada .md como página
│   ├── app.css               # Tailwind + plugin typography
│   └── app.html
├── static/                   # assets estáticos (favicon)
├── svelte.config.js          # adapter-static
└── vite.config.js            # plugins tailwind + sveltekit
```

Os arquivos em `docs/` são lidos em **tempo de build** (`import.meta.glob`), convertidos de Markdown
para HTML com `marked` e embutidos no bundle. Links relativos entre os `.md` são reescritos
automaticamente para as rotas internas do site. Nada em `docs/` (incluindo `.env` e os JSON) é
copiado para `build/` — só o HTML renderizado das rotas.

## Comandos

```bash
npm install       # instala dependências
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # gera o site estático em build/
npm run preview   # serve o build/ localmente para conferência
```

## Deploy

**Não há CI.** O workflow do GitHub Actions foi removido em 27/07/2026: ele falhava em 100% das
execuções desde 24/07 porque o secret `CLOUDFLARE_API_TOKEN` está inválido, e o projeto
`timcorporativo` no Cloudflare Pages não tem integração Git (`Git Provider: No` no painel). Ou seja,
o Actions nunca publicou nada — só gerava e-mail de falha. Todo deploy sempre foi upload direto.

Publicar em produção:

```bash
bash scripts/publicar.sh
```

O script encadeia cinco travas e aborta na primeira que falhar, porque publicar 23 landing pages com
preço na copy ou link interno quebrado custa muito mais caro do que parar e corrigir:

1. `scripts/validar-lps.mjs` — title/description dentro do limite, nenhum H1 ou keyword primária
   duplicado entre páginas (canibalização), nenhum valor monetário, nenhum link interno morto
2. `npm run build`
3. `scripts/verificar-precos-build.mjs` — varre o HTML **gerado**, separando a copy das páginas do
   conteúdo herdado do CMS (título de artigo no bloco de relacionados, JSON-LD, payload de hidratação)
4. Integridade do HTML: H1 único, canonical autorreferente, JSON-LD completo, ausência de `HowTo`
5. `wrangler pages deploy`

Requer `npx wrangler whoami` autenticado. Para o build puxar artigos novos do OC Hub em vez de usar
só o snapshot de `content/artigos/`, exporte `OCHUB_DIRECTUS_URL`, `OCHUB_API_TOKEN` e
`OCHUB_SITE_UUID` antes de rodar.

Se um dia o CI voltar, o token precisa de permissão de **Cloudflare Pages — Edit** na conta
`73251602a4aa9ee45d274fbdfc7eac2d`.
