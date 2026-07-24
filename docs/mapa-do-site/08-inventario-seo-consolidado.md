# Inventário SEO consolidado — páginas

Coleta: 23/07/2026. Blog fora do escopo.

## 1. Tabela mestre

| ID | URL | Status | Editor | Template | Autor | Modificada |
| --- | --- | --- | --- | --- | --- | --- |
| 63 | `/` | publish | Elementor | `elementor_header_footer` | 1 | 2026-05-21 |
| 2894 | `/tim-corporativo-planos-empresariais/` | publish | Elementor | `elementor_canvas` | 2 | 2026-05-21 |
| 2753 | `/meu-tim-empresas-fatura-2-via-suporte/` | publish | Gutenberg | padrão | 2 | 2025-09-15 |
| 1271 | `/conteudos/` | publish | Elementor | `elementor_header_footer` | 1 | 2024-10-09 |
| 12 | `/maintenance-page/` | **private** | clássico | `wpmm-page-template.php` | 1 | 2022-09-19 |

## 2. Metadados

| ID | `<title>` | Tam. | `meta description` | Tam. | Canonical | Robots |
| --- | --- | --- | --- | --- | --- | --- |
| 63 | TIM Empresa: TIM Black Empresa, Fibra e UltraFibra | 50 | ✅ presente | 129 | ✅ auto | index,follow |
| 2894 | TIM Corporativo: TIM Empresa, Fibra e Telefonia Empresarial | 59 | ✅ presente | 131 | ✅ auto | index,follow |
| 2753 | Meu TIM Empresas: … em 2025 \| Tim corporativo \| Plano Empresarial Tim | **105** ⚠️ | ✅ presente | 158 | ✅ auto | index,follow |
| 1271 | Conteúdos \| Tim corporativo \| Plano Empresarial Tim | 51 | **AUSENTE** ⚠️ | — | ✅ auto | index,follow |

## 3. Estrutura de conteúdo

| ID | Palavras | H1 | H2 | H3 | Imagens | Sem alt | Formulários | HTML |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 63 | 833 | 1 | 12 | 5 | 5 | 0 | 2 | 233 KB |
| 2894 | 1.277 | 1 | 12 | 23 | 11 | 0 | 2 | 286 KB |
| 2753 | 730 | **0** ⚠️ | **0** ⚠️ | 1 | 7 | 0 | 1 | 203 KB |
| 1271 | 305 | 1 | **0** | 10 | 4 | 0 | 1 | 212 KB |

Ponto positivo consistente: **100% das imagens têm atributo `alt`** nas 4 páginas.

## 4. Open Graph e social

| ID | `og:type` | `og:image` | `twitter:card` |
| --- | --- | --- | --- |
| 63 | `website` ✅ | `/uploads/2023/07/2.png` | summary_large_image |
| 2894 | `article` | `/uploads/2025/10/logo-tim.png` (logo) | summary_large_image |
| 2753 | `article` | ⚠️ `img.freepik.com/...?uid=…&ga=…` (externo) | summary_large_image |
| 1271 | `article` | **ausente** | summary_large_image |

`article:publisher` em todas: `https://www.facebook.com/grupoocwearepeople`.

## 5. Dados estruturados

| ID | Blocos | Nós | `@id` duplicados | Tipos custom |
| --- | --- | --- | --- | --- |
| 63 | 2 | 14 | **3** ⚠️ | Organization ×2, WebSite, WebPage, Service ×4, FAQPage (4 Q) |
| 2894 | 2 | 12 | **1** ⚠️ | WebPage, Service ×4, ItemList, FAQPage (5 Q) |
| 2753 | 1 | 5 | 0 | — |
| 1271 | 1 | 4 | 0 | — |

Detalhamento em [07-dados-estruturados.md](07-dados-estruturados.md).

## 6. Linkagem interna

| ID | Links totais | Internos | Externos | Recebe links de |
| --- | --- | --- | --- | --- |
| 63 (home) | 32 | 23 | 4 | todas as páginas (header/menu) |
| 2894 | 33 | 18 | 11 | **nenhuma** ⚠️ |
| 2753 | 27 | 18 | 4 | **nenhuma** ⚠️ |
| 1271 | 57 | 47 | 3 | menu global + todas as páginas |

Grafo de links entre páginas:

```
        ┌──────────────► /conteudos/ ──────► 9 posts do blog
        │                    │
   [menu global]             └──────► /
        │
        ▼
        /  (home)
        │
        └──────► /conteudos/

   /tim-corporativo-planos-empresariais/  ← ÓRFÃ (0 links entrantes)
   /meu-tim-empresas-fatura-2-via-suporte/ ← ÓRFÃ (0 links entrantes)
```

Duas das quatro páginas públicas não recebem nenhum link interno. Ambas estão no sitemap, então são rastreáveis — mas não recebem autoridade e não estão em nenhum caminho de navegação do usuário.

## 7. Achados priorizados

### 🔴 Críticos

| # | Achado | Onde | Impacto |
| --- | --- | --- | --- |
| 1 | **Página órfã.** `/tim-corporativo-planos-empresariais/` (a página mais completa do site, 1.277 palavras, 23 H3, schema rico) não recebe nenhum link interno e não está no menu | 2894 | A página com mais potencial de ranqueamento está isolada do grafo de links |
| 2 | **Canibalização home × 2894.** As duas disputam "TIM Empresa", "TIM Black Empresa", "TIM Fibra Empresa", "TIM UltraFibra", declaram os mesmos 4 `Service` e têm FAQ sobre os mesmos temas | 63 + 2894 | O Google precisa escolher qual página ranquear para a keyword principal; as duas se enfraquecem |
| 3 | **Zero headings.** Página sem H1 e sem H2 — títulos de seção escritos como `<p><strong>` | 2753 | 730 palavras de conteúdo sem estrutura semântica; perde destaque e elegibilidade a featured snippets |
| 4 | **Conteúdo comercial só em JavaScript.** Todos os planos, preços e ofertas vêm dos widgets do OC Hub (`banner-loader.js`, `offer-loader.js`), ausentes do HTML de origem | 63 | A seção `#planostim` — alvo do menu e do CTA principal — não é conteúdo indexável confiável |

### 🟠 Altos

| # | Achado | Onde |
| --- | --- | --- |
| 5 | Sem meta description | 1271 |
| 6 | `@id` duplicados entre o schema do Yoast e o schema manual (`#organization`, `#website`, `WebPage`) | 63, 2894 |
| 7 | WhatsApp com número malformado: `phone=%2B555515996510375` (o `55` duplicado; correto = `5515996510375`) | 2894 |
| 8 | 3 CTAs de card sem URL (`Consultar TIM Fibra Empresa`, `Consultar Telefonia Empresarial`, `Consultar TIM Black Empresa`) + CTA `FALAR COM CONSULTOR TIM` sem URL | 2894, 63 |
| 9 | `<title>` de 105 caracteres por causa do sufixo duplo do site | 2753 |
| 10 | `og:image` e imagem principal hot-linkadas do Freepik com query string de sessão | 2753 |
| 11 | H1 `Conteúdo` (singular) e title `Conteúdos` genéricos, sem keyword | 1271 |
| 12 | O maior hub de links internos do site não aponta para nenhuma página comercial | 1271 |

### 🟡 Médios

| # | Achado | Onde |
| --- | --- | --- |
| 13 | Placeholders JS não interpolados no HTML: `href="tel:+55${telefoneWhatsApp}"` e `href="${whatsappLink}"` | todas |
| 14 | Dois GA4 rodando em paralelo (`G-N8PJH573Q8` e `G-KT584R0KVS`) | todas |
| 15 | `elementor_canvas` remove o header — página sem navegação global | 2894 |
| 16 | Imagens referenciadas em `http://` no `_elementor_data` | 2894 |
| 17 | Rodapé só com copyright: sem navegação, sem contato clicável, sem links institucionais | global (template 53) |
| 18 | **Sem página de política de privacidade** — mesmo com formulários coletando nome, e-mail, celular e CNPJ | site |
| 19 | Formulários sem anti-spam (Turnstile/reCAPTCHA/honeypot) e sem página de agradecimento | todas |
| 20 | Item de menu "CONTATO" sem URL; "CONTEÚDOS" com `parent=832` inexistente | menu 6 |
| 21 | `sameAs` do schema só com Facebook | site |
| 22 | Faltam `LocalBusiness`, `Article` (2753), `CollectionPage` (1271), autoria `Person` | site |
| 23 | Conteúdo datado "em 2025", sem revisão desde set/2025 | 2753 |
| 24 | `/conteudos/` sem atualização desde out/2024 | 1271 |
| 25 | Página 2894 e 2753 atribuídas ao usuário duplicado ID 2 (`calebe-araujp`) | 2894, 2753 |

### 🟢 Baixos

| # | Achado | Onde |
| --- | --- | --- |
| 26 | H2 `TIM Fibra Empresa e TIM UltraFibra` duplicado | 63 |
| 27 | Link externo `host.godaddy.com` em todas as páginas (resquício de template) | todas |
| 28 | `http://grupooc.com.br` sem HTTPS | 2753 |
| 29 | `date_format` americano (`m/d/Y`) num site pt-BR | config |
| 30 | 4 templates de página Elementor não utilizados (`LPNew`, `home tim`, `post ok`, `home ok`) | biblioteca |
| 31 | Erro de digitação "entrar m contato" na página de manutenção | 12 |
| 32 | Padronização de marca: `TIM Corporativo` vs `Tim Corporativo` no schema | site |
| 33 | `robots.txt` sem `Disallow` para `/?s=` (busca interna) | site |

## 8. O que está bem feito

Vale registrar, porque é base sólida:

- ✅ Redirects corretos: `http→https`, `www→apex`, slug da front page → `/`, e 404 real para URL inexistente
- ✅ Canonical autorreferente nas 4 páginas
- ✅ `meta robots` liberando indexação nas 4 páginas, com `max-image-preview:large`
- ✅ Sitemap Yoast completo e coerente; página privada corretamente fora dele
- ✅ `robots.txt` com sitemap declarado
- ✅ 100% das imagens com `alt`
- ✅ `<html lang="pt-BR">` correto
- ✅ Cloudflare + HTTP/2 + PHP 8.4
- ✅ Os schemas `FAQPage` batem exatamente com o conteúdo visível nas duas páginas que os têm — sem marcação enganosa
- ✅ A página 2894 tem uma arquitetura de headings exemplar (H1 → 12 H2 → 23 H3 bem aninhados)
- ✅ IndexNow instalado

## 9. Sequência sugerida

Ordem que resolve mais com menos esforço, considerando dependências:

**Etapa 1 — decisão de arquitetura (bloqueia o resto)**
Definir o papel de `/` e de `/tim-corporativo-planos-empresariais/`. As opções são: (a) consolidar as duas numa só, redirecionando 301; (b) manter as duas com intenções distintas e separadas — home institucional/marca, 2894 como landing de conversão — e nesse caso linkar a 2894 no menu e na home. Enquanto isso não for decidido, otimizar as duas em paralelo é desperdício.

**Etapa 2 — correções mecânicas (rápidas, sem dependência)**
Itens 5, 7, 8, 9, 13 — meta description da `/conteudos/`, número de WhatsApp, CTAs sem link, título longo, placeholders JS.

**Etapa 3 — estrutura de conteúdo**
Item 3 — converter os `<p><strong>` da página 2753 em H1/H2 reais. É a maior relação impacto/esforço do inventário.

**Etapa 4 — schema**
Itens 6, 21, 22 — unificar o grafo (uma fonte só), ampliar `sameAs`, adicionar os tipos faltantes.

**Etapa 5 — linkagem e conversão**
Itens 12, 17, 20 — linkar `/conteudos/` às páginas comerciais, reconstruir o rodapé com navegação, arrumar o menu.

**Etapa 6 — compliance e infra**
Itens 18, 19, 14 — política de privacidade, anti-spam nos formulários, decidir sobre os dois GA4.

## 10. Fora do escopo, mas visível daqui

O `post-sitemap.xml` tem **358 URLs**. Só na primeira tela de `/conteudos/` aparecem 3 posts com o título `Planos TIM Corporativo Preços: …` (slugs `precos-2`, `precos-3`, `precos-guia-roi`) e 2 posts `Contratar TIM Empresa: Guia …`. São 5 de 9 itens disputando dois mesmos termos. Uma auditoria de canibalização do blog provavelmente vale mais do que qualquer item desta lista — mas depende de um levantamento separado.
