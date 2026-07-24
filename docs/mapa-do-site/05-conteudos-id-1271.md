# Conteúdos (hub do blog) — ID 1271

`https://timcorporativo.com.br/conteudos/`

## Ficha técnica

| Campo | Valor |
| --- | --- |
| ID | 1271 |
| Slug | `conteudos` |
| Status | `publish` |
| Template | `elementor_header_footer` |
| Editor | Elementor (`_elementor_data` = 5.262 caracteres — a menor das páginas Elementor) |
| Autor | ID 1 |
| Publicada | 2023-12-19 13:22 |
| Modificada | **2024-10-09 16:36** — não é tocada há quase 2 anos |
| Peso do HTML | ~212 KB |
| Palavras (texto visível) | 305 — a maior parte são os títulos dos posts listados |
| Imagens | 4 — todas com `alt` |

Esta página cumpre o papel de arquivo do blog, já que `page_for_posts = 0` (o WordPress não tem uma página de posts nativa configurada).

## SEO on-page

| Elemento | Valor |
| --- | --- |
| `<title>` | `Conteúdos \| Tim corporativo \| Plano Empresarial Tim` |
| `meta description` | **AUSENTE** ⚠️ |
| `canonical` | `https://timcorporativo.com.br/conteudos/` ✅ |
| `meta robots` | `index, follow, max-image-preview:large, …` |
| `og:title` | `Conteúdos` |
| `og:description` | `Conteúdo Encontre dicas valiosas para otimizar sua comunicação empresarial, explorar novas tecnologias e entender melhor nossos serviços e soluções. Acompanhe nossas postagens para se manter atualizado e transformar a forma como você conecta seu mundo.` |
| `og:image` | **AUSENTE** |
| `twitter:data1` | `3 minutos` |

**Não há `<meta name="description">` no HTML.** O Yoast gerou o `og:description` a partir do conteúdo, mas nenhuma meta description foi definida — o Google vai escolher um trecho arbitrário. Confirmado por inspeção tag a tag do `<head>`.

O `<title>` também é fraco: `Conteúdos` é genérico e o sufixo duplo do site come o espaço útil sem agregar.

## Estrutura de headings

```
H1  Conteúdo                                              ← singular, diverge do slug/título "Conteúdos"
├── H3  Contratar TIM Empresa: Guia Completo de Telecom B2B 2026
├── H3  Planos TIM Corporativo Preços: Tabela de ROI e Custos Telecom B2B
├── H3  Planos TIM Corporativo Preços: ROI e Melhor Opção CNPJ
├── H3  Contratar TIM Empresa: Guia Estratégico para Conectividade B2B
├── H3  Planos TIM Corporativo Preços: Guia de ROI e Eficiência B2B
├── H3  Consultoria Especializada: O Diferencial da TIM Corporativo no Atendimento B2B
├── H3  O Poder da Rede Móvel TIM no Agronegócio e Indústria 4.0
├── H3  Eficiência Operacional: Como a TIM Corporativo Reduz Custos de Telecom
├── H3  TIM Corporativo 2026: Como o IoT e o 5G estão Redefinindo a Eficiência e a Gestão Industrial
└── H3  TIM Corporativo                                   ← rodapé
```

1 H1, **0 H2**, 10 H3. Salto direto de H1 para H3 (os H3 são os cards do widget de posts).

## Conteúdo

Todo o texto autoral da página são duas linhas:

> # Conteúdo
>
> Encontre dicas valiosas para otimizar sua comunicação empresarial, explorar novas tecnologias e entender melhor nossos serviços e soluções. Acompanhe nossas postagens para se manter atualizado e transformar a forma como você conecta seu mundo.

O restante é o widget `posts` do Elementor Pro, que lista os artigos mais recentes.

## Posts listados no momento da coleta

| # | Título (H3) | URL |
| --- | --- | --- |
| 1 | Contratar TIM Empresa: Guia Completo de Telecom B2B 2026 | `/contratar-tim-empresa-guia-completo-telecom-b2b/` |
| 2 | Planos TIM Corporativo Preços: Tabela de ROI e Custos Telecom B2B | `/planos-tim-corporativo-precos-3/` |
| 3 | Planos TIM Corporativo Preços: ROI e Melhor Opção CNPJ | `/planos-tim-corporativo-precos-2/` |
| 4 | Contratar TIM Empresa: Guia Estratégico para Conectividade B2B | `/contratar-tim-empresa-guia-b2b/` |
| 5 | Planos TIM Corporativo Preços: Guia de ROI e Eficiência B2B | `/planos-tim-corporativo-precos-guia-roi/` |
| 6 | Consultoria Especializada: O Diferencial da TIM Corporativo no Atendimento B2B | `/consultoria-especializada-tim-corporativo-atendimento-b2b/` |
| 7 | O Poder da Rede Móvel TIM no Agronegócio e Indústria 4.0 | `/poder-rede-movel-tim-agronegocio-industria-4-0/` |
| 8 | Eficiência Operacional: Como a TIM Corporativo Reduz Custos de Telecom | `/eficiencia-operacional-tim-corporativo-reducao-custos-telecom/` |
| 9 | TIM Corporativo 2026: Como o IoT e o 5G estão Redefinindo a Eficiência e a Gestão Industrial | `/tim-corporativo-2026-iot-5g-eficiencia-industrial/` |

> **Sinal de canibalização visível já na primeira tela do hub** (o blog está fora do escopo deste mapeamento, mas o padrão salta aos olhos):
> - 3 posts distintos com o título praticamente idêntico `Planos TIM Corporativo Preços: …` e slugs seriais `precos-2`, `precos-3`, `precos-guia-roi`
> - 2 posts `Contratar TIM Empresa: Guia …`
>
> São 5 dos 9 itens da primeira página disputando dois mesmos termos. Só o `post-sitemap.xml` tem **358 URLs** — vale uma auditoria de canibalização dedicada ao blog.

## Dados estruturados

Somente o grafo padrão do Yoast: `WebPage` → `BreadcrumbList` (Início › Conteúdos) → `WebSite` → `Organization`. Nenhum schema custom.

Ausente e recomendável para um hub: **`CollectionPage`** e/ou **`ItemList`** com os artigos listados.

Nota: é a única página cujo grafo Yoast **não traz o nó `ImageObject`** da `WebPage` (não há imagem principal).

## Linkagem

É a página mais rica em links internos do site: **47 links internos** de um total de 57.

- 9 links para posts do blog (+ links duplicados nos títulos/thumbnails/leia mais)
- Home e âncoras da home
- Autolink para `/conteudos/`
- Externos (3): `api.whatsapp.com`, `grupooc.com.br`, `host.godaddy.com`

⚠️ Sendo o principal distribuidor de autoridade interna do site, esta página **não linka para nenhuma das outras páginas comerciais** (`/tim-corporativo-planos-empresariais/` nem `/meu-tim-empresas-fatura-2-via-suporte/`).

## Problemas identificados nesta página

| # | Problema | Gravidade |
| --- | --- | --- |
| 1 | **Sem meta description** | Alta |
| 2 | H1 `Conteúdo` (singular) diverge do title/slug `Conteúdos`; ambos genéricos, sem keyword | Alta |
| 3 | Sem `CollectionPage`/`ItemList` no schema | Média |
| 4 | Salto de hierarquia H1 → H3, sem nenhum H2 | Média |
| 5 | Sem `og:image` | Baixa |
| 6 | Não linka para as páginas comerciais, apesar de ser o maior hub de links internos | Alta |
| 7 | Conteúdo autoral de 2 linhas; não atualizada desde out/2024 | Média |
| 8 | Sem paginação/categorização visível para 358 URLs de blog | Média |
