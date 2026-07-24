# Estudo de viabilidade — Deploy na Cloudflare

**Projeto:** timcorporativo.com.br (SvelteKit + adapter-static)
**Data:** 2026-07-24
**Status:** rascunho inicial — depende de decisões em aberto (ver §8)

---

## 1. Veredito

**Viável — alta viabilidade, baixo risco técnico.** O projeto é um site 100% estático
(SSG via `@sveltejs/adapter-static`) e cabe folgado no **plano gratuito** da Cloudflare.
Nenhum componente atual exige servidor. O único ponto que pode virar backend é o
formulário de contato — e **hoje ele nem precisa** (ver §4.2).

---

## 2. Retrato do projeto

| Item | Valor |
| --- | --- |
| Framework | SvelteKit 2 + Svelte 5, Tailwind v4 |
| Adapter | `adapter-static` → saída em `build/` |
| Peso do build | **59 MB** (241 arquivos) |
| Maior arquivo | 3,8 MB (`Plano-TIM-Black.png`) — nenhum acima de 25 MiB |
| Rotas HTML | 15 (home `/` + `/docs/**` interno) |
| Peso que domina | `build/wp-content/` = **58 MB** (imagens PNG) |
| Backend hoje | **Nenhum** — form usa `wa.me` + `mailto:` |
| Config Cloudflare | **Ainda não existe** (sem `wrangler.*`, `_headers`, `functions/`) |

O repo serve **dois públicos**:
- **Home de marketing** (`/`) — pública, indexável, otimizada para SEO.
- **`/docs`** — documentação interna, sai com `noindex, nofollow`.
- **Blog** — em integração numa outra sessão (dependência externa, ver §4.4).

---

## 3. Cloudflare Pages vs Workers (Static Assets)

São **produtos diferentes** no mesmo dashboard. Para este caso:

| Critério | Pages | Workers + Static Assets |
| --- | --- | --- |
| Site puramente estático | ✅ ideal, zero config | ✅ funciona |
| Integração Git + preview por PR | ✅ nativo e maduro | ✅ (Workers Builds) |
| Se precisar de função (form/API) | Pages Functions | Worker (`run_worker_first`) |
| Direção futura da Cloudflare | mantido | recomendado p/ projetos novos |

**Recomendação inicial: começar com Cloudflare Pages.** É o caminho mais direto para
o estado atual (estático puro), com deploy por Git e previews automáticos. Se/quando o
formulário virar captura real de lead (§4.2), migra-se para uma Pages Function ou para
um Worker — sem retrabalho do site.

> ⚠️ Decisão a confirmar com o §8. Não fixar o produto antes de definir se haverá backend.

---

## 4. Componentes, um a um

### 4.1 Hospedagem estática — ✅ trivial
59 MB / 241 arquivos, maior arquivo 3,8 MB. Limites do plano free (§6) são
20.000 arquivos e 25 MiB/arquivo — **sobra folga enorme**. Requisições e banda de
assets estáticos são ilimitadas no free.

**Oportunidade:** as imagens (`/wp-content/uploads/*.png`, 58 MB) são pesadas.
Converter para WebP/AVIF e redimensionar cortaria o peso em ~70% e melhoraria o LCP.
Os caminhos `/wp-content/uploads/...` foram **mantidos de propósito** (preserva URLs de
imagem estáveis — bom para SEO); a otimização pode ser feita sem trocar os caminhos.

### 4.2 Formulário de contato — ⚠️ decisão de arquitetura
Hoje o `ContactForm.svelte` **não envia nada para um servidor**: monta um resumo e abre
`wa.me` (WhatsApp) ou `mailto:`. Isso significa:

- ✅ **Deploy estático puro funciona sem nenhum backend.**
- ❌ **Não há captura/registro de lead** — depende do cliente ter WhatsApp/e-mail e
  concluir o envio manualmente. Nada é gravado.

Se o objetivo for **capturar leads de verdade**, o padrão Cloudflare é:
`Worker/Pages Function` → **Turnstile** (anti-spam) → **Resend** (e-mail transacional)
→ opcionalmente gravar no gerenciador de leads (OC Hub/Directus).

> 🚧 **Bloqueio de autorização:** integrar leads a um CMS/gerenciador compartilhado entre
> projetos (OC Hub/Directus) **não pode ser presumido** — cada projeto pode ter uma
> restrição própria do dono. Precisa ser confirmado antes de implementar (§8).

### 4.3 Widgets OC Hub (banners/ofertas) — ✅ ok
Banners e a grade de ofertas vêm de `ochub.grupooc.com.br/scripts/banner-loader.js`,
renderizados **no cliente**. Funciona igual em qualquer host estático, inclusive Pages.
Só requer que o CSP/headers não bloqueiem o domínio do OC Hub (ajustável via `_headers`).

### 4.4 Blog (outra sessão) — ⚠️ dependência aberta
Determina se o site continua estático puro:
- Se o blog for **gerado em build** (SSG, lendo a REST API do WP no build) → segue estático,
  sem mudança de arquitetura. Só entra no orçamento de builds (§6).
- Se precisar de **conteúdo em runtime** (SSR, busca dinâmica) → aí sim exige Worker/Function.

**Pendência:** alinhar com a outra sessão qual das duas abordagens está sendo usada.

### 4.5 `/docs` interno — ✅ ok
Renderizado em build, `noindex`. Sem implicação de deploy. (Avaliar depois se convém
publicar a documentação interna no mesmo domínio público ou restringir por Cloudflare Access.)

---

## 5. Deploy — como subir

Duas formas, ambas no free:

1. **Integração Git (recomendada)** — conecta o repositório; cada push builda e publica,
   com **preview automático por branch/PR**. Comando de build `npm run build`, diretório
   de saída `build`. Consome o orçamento de builds (§6).
2. **`wrangler` manual** — `wrangler pages deploy build` a partir da máquina/CI próprio.
   **Não** consome o orçamento de Workers Builds.

Config de build para o painel:
- Build command: `npm run build`
- Output directory: `build`
- Node: compatível com as deps atuais (Vite 6 / Svelte 5).

---

## 6. Limites do plano gratuito (confirmados na doc oficial, 2026-07-24)

**Cloudflare Pages — Free:**
- **20.000 arquivos** por deployment (usamos 241 ✅)
- **25 MiB** por arquivo (maior nosso: 3,8 MB ✅)
- **500 builds/mês**, **1 build por vez**, timeout de **20 min/build**
- **100 projetos** por conta
- **100 domínios customizados** por projeto
- Preview deployments **ilimitados**; banda/requisições de estático **sem teto declarado**
- `_headers`: até 100 regras · `_redirects`: até 2.000 estáticos + 100 dinâmicos

**Conclusão:** o projeto está **muito abaixo** de todos os limites. 500 builds/mês é
suficiente com folga mesmo publicando várias vezes ao dia.

> Se houver Functions/Worker (form), o consumo passa a contar na cota de **Workers**
> (100.000 req/dia no free) — a confirmar contra a conta real quando essa peça existir.

---

## 7. Cutover de domínio

O domínio `timcorporativo.com.br` **já está no ar em WordPress atrás da Cloudflare**
(`cf-edge-cache: platform=wordpress`). Trocar para o site novo é o passo mais sensível:

- Baixar o **TTL** do DNS antes do cutover.
- Publicar o site novo primeiro num subdomínio/preview (`*.pages.dev`) para validação.
- Só então apontar o domínio de produção para o projeto Pages.
- Ter plano de rollback (voltar o registro para o WP) durante a janela.
- Confere redirects: preservar URLs existentes (`/conteudos/`, imagens `/wp-content/...`)
  para não perder ranking — usar `_redirects` se algum caminho mudar.

---

## 8. Decisões em aberto (necessárias para fechar o plano)

1. **Formulário:** manter só WhatsApp/`mailto` (estático puro) **ou** capturar lead de
   verdade (Worker + Turnstile + Resend)?
2. **Se capturar lead:** pode gravar no OC Hub/Directus? (**precisa de autorização do dono
   do projeto** — não presumir.)
3. **Blog:** SSG em build ou conteúdo em runtime? (define se segue estático puro.)
4. **Produto:** confirmar **Pages** (recomendado) vs Workers Static Assets.
5. **Deploy:** integração Git (previews automáticos) ou `wrangler` manual?
6. **Domínio:** cutover agora ou validar primeiro em `*.pages.dev`?
7. **`/docs` interno:** fica no domínio público (noindex) ou restrito por Access?

---

## 9. Próximos passos sugeridos

1. Responder as decisões do §8 (principalmente 1, 3 e 4).
2. Criar o projeto Pages e publicar um preview em `*.pages.dev` (estático puro, sem tocar
   no domínio de produção). Validação sem risco.
3. Se lead capture for aprovado: desenhar a Function/Worker (Turnstile + Resend) e
   confirmar autorização do OC Hub antes de integrar.
4. Otimizar imagens (WebP/AVIF) para reduzir os 58 MB e melhorar Core Web Vitals.
5. Planejar o cutover de DNS com TTL baixo e rollback.
