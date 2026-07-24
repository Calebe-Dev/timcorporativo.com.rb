# Mapa do site — timcorporativo.com.br (páginas)

Levantamento completo da camada de **páginas** do site: conteúdo, estrutura, dados estruturados e sinais técnicos de SEO.

- **Data da coleta:** 23/07/2026
- **Escopo:** post type `page`. **Blog (`post`) intencionalmente fora do escopo**, conforme solicitado.
- **Fontes:** WordPress REST API autenticada (`/wp-json/wp/v2/`, `context=edit`), HTML renderizado das URLs públicas, `sitemap_index.xml`, `robots.txt`, `_elementor_data` bruto de cada página e template.

## Índice

| Arquivo | O que contém |
| --- | --- |
| [01-estrutura-e-arquitetura.md](01-estrutura-e-arquitetura.md) | Arquitetura de URLs, sitemaps, robots, menu, templates globais (header/footer/popups), snippets de código, stack e checagens técnicas |
| [02-home-id-63.md](02-home-id-63.md) | Home `/` — conteúdo seção a seção, SEO, schema, formulário |
| [03-planos-empresariais-id-2894.md](03-planos-empresariais-id-2894.md) | `/tim-corporativo-planos-empresariais/` — landing page longa |
| [04-meu-tim-empresas-id-2753.md](04-meu-tim-empresas-id-2753.md) | `/meu-tim-empresas-fatura-2-via-suporte/` — artigo de suporte |
| [05-conteudos-id-1271.md](05-conteudos-id-1271.md) | `/conteudos/` — hub do blog |
| [06-maintenance-page-id-12.md](06-maintenance-page-id-12.md) | Página privada de manutenção |
| [07-dados-estruturados.md](07-dados-estruturados.md) | Inventário completo de JSON-LD por página, nó a nó, com conflitos de `@id` |
| [08-inventario-seo-consolidado.md](08-inventario-seo-consolidado.md) | Tabelas comparativas de todas as páginas + achados priorizados |

## Retrato do site em uma tela

| Item | Valor |
| --- | --- |
| Título do site (WP) | `Tim corporativo \| Plano Empresarial Tim` |
| Tagline | `Planos TIM Empresa com TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra para PMEs e grandes empresas.` |
| Idioma / fuso | `pt_BR` / `America/Sao_Paulo` |
| Front page | Página estática, ID **63** (`show_on_front=page`, `page_on_front=63`) |
| Página de posts | **Nenhuma** (`page_for_posts=0`) — o hub editorial é a página `/conteudos/` |
| CMS | WordPress 7.0.2, PHP 8.4.22 |
| Tema | `hello-elementor` 3.4.9 + child `tim` |
| Builder | Elementor 4.2.0 + Elementor Pro 4.1.2 |
| SEO | Yoast SEO Premium 24.4 (core 28.1) |
| CDN/host | Cloudflare (`cf-edge-cache: cache,platform=wordpress`) |
| Analytics | GA4 `G-N8PJH573Q8` e GA4 `G-KT584R0KVS` (dois em paralelo) |
| Search Console | verificado por meta tag |

## Inventário de páginas

| ID | URL | Status | Editor | Palavras | H1 | Schema custom |
| --- | --- | --- | --- | --- | --- | --- |
| 63 | `/` | publish | Elementor | 833 | 1 | Sim |
| 2894 | `/tim-corporativo-planos-empresariais/` | publish | Elementor (canvas) | 1.277 | 1 | Sim |
| 2753 | `/meu-tim-empresas-fatura-2-via-suporte/` | publish | Gutenberg | 730 | **0** | Não |
| 1271 | `/conteudos/` | publish | Elementor | 305 | 1 | Não |
| 12 | `/maintenance-page/` | **private** | Clássico | — | — | — |

**São apenas 4 páginas públicas.** Todo o restante do site (358 URLs no `post-sitemap.xml`) é blog, fora deste escopo.

## Os 5 achados que mais pesam

1. **`/tim-corporativo-planos-empresariais/` é uma página órfã** — nenhuma outra página do site aponta para ela. Só é alcançável pelo sitemap.
2. **A página 2753 não tem nenhum heading** — nem H1. Os títulos foram escritos como parágrafos em negrito.
3. **Conflito de `@id` no JSON-LD da home** — Yoast e o schema manual declaram os mesmos três `@id` (`#organization`, `#website`, a `WebPage`) com valores divergentes.
4. **`/conteudos/` não tem meta description** no HTML.
5. **Links de WhatsApp com número malformado** na página 2894: `phone=%2B555515996510375` (o `55` aparece duplicado).

Detalhamento e priorização completa em [08-inventario-seo-consolidado.md](08-inventario-seo-consolidado.md).
