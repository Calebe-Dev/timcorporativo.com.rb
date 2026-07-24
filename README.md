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

O conteúdo de `build/` é totalmente estático — pode ser publicado em qualquer host de arquivos
(Cloudflare Pages, Netlify, GitHub Pages, S3, etc.). Para adicionar um novo documento, basta criar
um `.md` dentro de `docs/` e rodar `npm run build`.

> A documentação é interna: as páginas saem com `noindex, nofollow`.
