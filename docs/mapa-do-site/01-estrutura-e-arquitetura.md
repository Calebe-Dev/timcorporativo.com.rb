# Estrutura e arquitetura — timcorporativo.com.br

Coleta: 23/07/2026. Escopo: páginas (blog fora do escopo).

## 1. Configuração do WordPress

| Chave | Valor |
| --- | --- |
| `title` | Tim corporativo \| Plano Empresarial Tim |
| `description` | Planos TIM Empresa com TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra para PMEs e grandes empresas. |
| `url` / `home` | https://timcorporativo.com.br |
| `language` | pt_BR |
| `timezone` | America/Sao_Paulo (GMT-3) |
| `show_on_front` | `page` |
| `page_on_front` | **63** |
| `page_for_posts` | **0** (nenhuma página de arquivo de posts definida) |
| `posts_per_page` | 10 |
| `date_format` | `m/d/Y` — formato americano num site pt-BR |

Namespaces REST ativos, que revelam os plugins com API própria:
`oembed/1.0`, `fluent-smtp`, `indexnow/v_1.0.4`, `ochub/v1`, `yoast/v1`, `elementor-one/v1`, `elementor/v1`, `elementor-pro/v1`, `elementor-hello-elementor/v1`, `elementor-ai/v1`, `wp/v2`, `wp-site-health/v1`, `wp-block-editor/v1`, `wp-abilities/v1`.

Destaques: **IndexNow** (envio de URLs a buscadores) e **`ochub/v1`** — integração própria do Grupo OC, que também serve widgets de oferta via `ochub.grupooc.com.br` (ver seção 6).

## 2. Stack técnico observado no HTML

| Camada | Detecção |
| --- | --- |
| CMS | `<meta name="generator" content="WordPress 7.0.2">` |
| PHP | `x-powered-by: PHP/8.4.22` |
| Tema | `hello-elementor` 3.4.9 (+ referências ao child theme `tim`) |
| Builder | `Elementor 4.2.0`, `Elementor Pro 4.1.2` |
| SEO | Yoast SEO Premium v24.4 (Yoast SEO v28.1) |
| E-mail | FluentSMTP |
| CDN | Cloudflare (`server: cloudflare`, `cf-ray: …-GRU`, `cf-cache-status: DYNAMIC`) |
| Fonte custom | `TIM Sans` (regular + 700), servida em eot/woff2/woff/ttf/svg de `/wp-content/uploads/2025/10/` |

Nenhum plugin de cache ou de otimização de imagem aparece no HTML — a única camada de cache é a borda Cloudflare, e a home responde `cf-cache-status: DYNAMIC` (não cacheada na borda).

## 3. Arquitetura de URLs

O site tem uma hierarquia **totalmente plana**: todas as páginas estão na raiz, nenhuma tem `parent` (todas com `parent=0`).

```
https://timcorporativo.com.br/
├── /                                            (ID 63 — front page)
├── /tim-corporativo-planos-empresariais/        (ID 2894 — órfã de links internos)
├── /meu-tim-empresas-fatura-2-via-suporte/      (ID 2753)
├── /conteudos/                                  (ID 1271 — hub do blog)
└── /maintenance-page/                           (ID 12 — privada, fora do sitemap)
```

Observação sobre a home: o slug real da página 63 é `tim-corporativo`, mas por ser a front page ela é servida em `/`. A URL `/tim-corporativo/` responde **301 → `/`**, o que está correto.

## 4. Sitemaps

Gerados pelo Yoast. Índice em `https://timcorporativo.com.br/sitemap_index.xml`.

| Sitemap | URLs | `lastmod` do índice |
| --- | --- | --- |
| `post-sitemap.xml` | 358 | 2026-05-27 |
| `page-sitemap.xml` | **4** | 2026-05-22 |
| `category-sitemap.xml` | 2 | 2026-05-27 |
| `post_tag-sitemap.xml` | 2 | 2024-05-27 |
| `author-sitemap.xml` | 3 | 2026-05-21 |

Conteúdo do `page-sitemap.xml`:

| # | URL | lastmod |
| --- | --- | --- |
| 1 | `https://timcorporativo.com.br/` | 2026-05-21T14:08:45+00:00 |
| 2 | `https://timcorporativo.com.br/conteudos/` | 2024-10-09T19:36:55+00:00 |
| 3 | `https://timcorporativo.com.br/meu-tim-empresas-fatura-2-via-suporte/` | 2025-09-15T12:35:25+00:00 |
| 4 | `https://timcorporativo.com.br/tim-corporativo-planos-empresariais/` | 2026-05-22T01:29:50+00:00 |

A página privada (ID 12) corretamente **não** aparece. As 4 páginas públicas estão todas listadas.

Ponto de atenção: o `author-sitemap.xml` traz **3 URLs de autor**, enquanto o site tem 2 usuários (ambos chamados "Calebe Araujo", IDs 2 e 5) — ver `relatorio-autor-calebe-araujo.md` na raiz do projeto.

## 5. robots.txt

```
# START YOAST BLOCK
# ---------------------------
User-agent: *
Disallow:

Sitemap: https://timcorporativo.com.br/sitemap_index.xml
# ---------------------------
# END YOAST BLOCK
```

Totalmente aberto (`Disallow:` vazio = nada bloqueado) e com o sitemap declarado. Não há bloqueio de `/wp-admin/`, `/wp-json/` nem de parâmetros de busca interna (`/?s=`).

## 6. Checagens técnicas

| Verificação | Resultado |
| --- | --- |
| `http://timcorporativo.com.br/` | **301** → `https://timcorporativo.com.br/` ✅ |
| `https://www.timcorporativo.com.br/` | **301** → `https://timcorporativo.com.br/` ✅ |
| `/tim-corporativo/` (slug da front page) | **301** → `/` ✅ |
| URL inexistente | **404** ✅ |
| `/feed/` | 200 (RSS ativo) |
| HTTP/2 | ativo |
| Canonical | presente e autorreferente nas 4 páginas ✅ |
| `hreflang` | ausente (site monolíngue — ok) |
| `<html lang>` | `pt-BR` ✅ |
| `meta robots` | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` nas 4 páginas ✅ |

## 7. Menu de navegação

Existe **um único menu**: `Topo Tim Nac` (ID 6, slug `topo-tim-nac`). Ele **não está atribuído a nenhuma location do tema** (`locations: []`) — é chamado diretamente pelo widget `nav-menu` do header Elementor.

| Ordem | Item | Destino | Pai |
| --- | --- | --- | --- |
| 1 | HOME | `/#topo` | — |
| 2 | AUTORIZADO TIM | `/#autorizado` | — |
| 3 | CONTEÚDOS | `/conteudos/` | filho de 832 |
| 4 | PLANOS TIM | `/#planostim` | — |
| 5 | CONTATO | *(sem URL)* | — |
| 6 | LIGUE AGORA | `tel:+551535008940` | filho de 41 (CONTATO) |
| 7 | FORMULÁRIO | `/#form` | filho de 41 |
| 8 | LIGAMOS PARA VOCÊ | ação Elementor → abre o popup 261 | filho de 41 |

Consequências para SEO:

- 4 dos 8 itens são **âncoras da home** (`#topo`, `#autorizado`, `#planostim`, `#form`). Quando o usuário está numa página interna, esses links levam de volta para a home.
- O item "CONTEÚDOS" está aninhado sob o pai 832, que não existe entre os itens retornados — o menu tem uma referência de hierarquia quebrada.
- **A página 2894 não está no menu**, e nenhuma outra página aponta para ela.

## 8. Templates globais do Elementor

14 templates em `elementor_library`. Os que estão efetivamente em uso na renderização das páginas:

| ID | Nome | Tipo | Conteúdo |
| --- | --- | --- | --- |
| 2076 | Sem bug | **header** (ativo) | logo do site + menu `topo-tim-nac` + botão "LIGAR" → `tel:+551535008940 ` *(com espaço no fim do href)* |
| 53 | Rodapé Tim | **footer** | apenas um bloco de texto: `© Copyright 2025 Todos os direitos reservados Desenvolvido por Grupo OC` / `Rua Tereza Lopes, 677 – Vila Hortência, Sorocaba/SP` / `CNPJ: 23.474.830/0001-56` |
| 6 | Kit padrão | kit | estilos globais |
| 261 | Me Liga | **popup** | logo + título "Seu consultor TIM Empresa liga para você" + formulário `Me Liga` (Nome, E-mail, Celular) → `contato@grupooc.com.br, comercial@grupooc.com.br` |
| 253 | Botão Whatsapp | popup | widget de ícones sociais (botão flutuante) |
| 672 | Topo volta | popup | ícone "voltar ao topo" |
| 1190 | form popup | popup | H2 "Deixe seu contato e nós ligamos pra você" + formulário `New Form` (Nome, Email, Celular) → `contato@grupooc.com.br` + botão WhatsApp |
| 34 | Topo Tim | header (legado) | substituído pelo 2076 |
| 57 | Single page Tim | single-page | template de página |
| 1694 | Elementor Single Post #1694 | single-post | template de post (blog) |
| 3581 / 1716 / 1631 / 1304 | LPNew / home tim / post ok / home ok | page | **templates de página não utilizados** — versões antigas |

O footer real do site (53) contém **só o aviso de copyright** — não há navegação, links institucionais, política de privacidade nem dados de contato clicáveis.

Nota: o rodapé com o mesmo texto de copyright também está **duplicado dentro do conteúdo da página 2894**, porque ela usa o template `elementor_canvas` (que não carrega header/footer do tema).

## 9. Snippets de código injetados (`elementor_snippet`)

Todos os 4 estão publicados e injetam em `elementor_head` com prioridade 1:

| ID | Nome | O que faz |
| --- | --- | --- |
| 4212 | GTM-Ferramenta | tag `gtag.js` do GA4 **G-N8PJH573Q8** |
| 4215 | Organic Analytic | tag `gtag.js` do GA4 **G-KT584R0KVS** |
| 2670 | code GSC | `<meta name="google-site-verification" content="3PZLGrA470_oq1V9tNyjRtmPWBhlPacImk6vsutSIVI">` |
| 4237 | SEO Autor Calebe Araujo | script de 4.641 caracteres que roda **apenas** em `/author/calebe-araujo/` e, via JS, reescreve `document.title`, injeta `meta description`, `og:title`, `og:description`, `twitter:title`, `twitter:description` e um schema `ProfilePage`/`Person` |

Sobre o snippet 4237: ele altera o DOM **depois** do carregamento. O HTML de origem servido ao crawler continua sem meta description na página de autor. É uma correção cosmética, não uma correção de fonte — está descrito em detalhe em `relatorio-autor-calebe-araujo.md`.

Sobre analytics: **dois GA4 rodando em paralelo** em todas as páginas. Isso duplica coleta e pode gerar divergência de relatórios; vale confirmar se ambos são intencionais.

## 10. Integrações externas de terceiros

### OC Hub (`ochub.grupooc.com.br`)

A home injeta três shortcodes com widgets carregados do OC Hub:

1. **Banner standalone "TIM ULTRAFIBRA"** — `data-banner-id=9f8cb62d-…`, `data-offer-id=3a106d2a-…`, script `banner-loader.js`
2. **Banner standalone "Planos ILIMITADOS para todo o Brasil"** — `data-banner-id=7f78ed27-…`, script `banner-loader.js?v=3`, acompanhado de um bloco `<style>` que sobrescreve o CSS do banner
3. **Grade de ofertas** — `<div id="ochub-offers-container" data-site="9a8c40f4-…" data-layout="grid" data-limit="10" data-sort="price_asc">`, script `offer-loader.js`

Todos são carregados **por JavaScript, de forma assíncrona**. O conteúdo comercial que eles renderizam (planos, preços, ofertas) **não existe no HTML de origem** e portanto não é conteúdo indexável de forma confiável. É exatamente a seção `#planostim`, que o menu principal aponta.

### Outros hosts externos referenciados nas páginas

| Host | Onde | Observação |
| --- | --- | --- |
| `api.whatsapp.com` | todas as páginas | CTAs de conversão |
| `grupooc.com.br` | todas | link institucional; na página 2753 aparece como `http://grupooc.com.br` (sem HTTPS) |
| `host.godaddy.com` | **todas as páginas** | link externo em todas as páginas — provável resquício de template/tema |
| `googletagmanager.com` | todas | GA4 |
| `img.freepik.com` | página 2753 | **imagem hospedada fora do domínio**, usada inclusive como `og:image` |

## 11. Formulários e canais de conversão

| Formulário | Onde | Campos | Destino |
| --- | --- | --- | --- |
| `Lead Tim Corporativo` | home (63) e página 2894 | Nome, Email*, Celular, CNPJ, Nº de Linhas (select), Operadora Atual (select), Mensagem | `contato@grupooc.com.br, comercial@grupooc.com.br` |
| `Me Liga` | popup 261 | Nome, E-mail, Celular | `contato@grupooc.com.br,comercial@grupooc.com.br` |
| `New Form` | popup 1190 | Nome, Email, Celular | `contato@grupooc.com.br` |

Telefone institucional: **+55 15 3500-8940** (`tel:+551535008940`).
WhatsApp institucional: **+55 15 99651-0375**.

Nenhum formulário tem proteção anti-spam visível (Turnstile/reCAPTCHA/honeypot) no markup do Elementor.

### Placeholders JS não renderizados

Em **todas as 4 páginas** o HTML servido contém literais de template não interpolados:

```
<a href="tel:+55${telefoneWhatsApp}">
<a href="${whatsappLink}">
```

São `href`s quebrados entregues ao usuário e ao crawler. Provavelmente um script que deveria substituir essas variáveis no cliente não está executando ou executa tarde demais.
