# Dados estruturados (JSON-LD) — inventário completo

Coleta: 23/07/2026, a partir do HTML de origem das 4 páginas públicas.

## Visão geral

O site emite JSON-LD de **duas fontes independentes**:

1. **Yoast SEO Premium** — bloco `<script class="yoast-schema-graph">`, presente nas 4 páginas
2. **Schema manual** em widget HTML do Elementor — presente **apenas** nas páginas 63 e 2894, com IDs `grupooc-timcorporativo-schema` e `tim-corporativo-planos-schema`

As duas fontes não conversam entre si, e é daí que vêm os conflitos.

| Página | Blocos JSON-LD | Nós totais | `@id` duplicados |
| --- | --- | --- | --- |
| 63 (home) | 2 | 14 | **3** ⚠️ |
| 2894 (planos) | 2 | 12 | **1** ⚠️ |
| 2753 (Meu TIM) | 1 | 5 | 0 |
| 1271 (conteúdos) | 1 | 4 | 0 |

## 1. Conflitos de `@id`

Quando dois nós compartilham o mesmo `@id` num mesmo documento, o consumidor (Google, LLMs) tem que decidir qual vence — e o resultado é indefinido. Aqui os nós conflitantes têm **valores diferentes**, então não é redundância inofensiva.

### Página 63 (home) — 3 conflitos

#### `@id: https://timcorporativo.com.br/#organization`

| | Yoast | Schema manual |
| --- | --- | --- |
| `name` | `Tim Corporativo` | `TIM Corporativo` |
| `alternateName` | `Plano Tim Empresa` | — |
| `logo` | `/wp-content/uploads/2022/09/cropped-logo-tim-azul.png` (512×512) | — |
| `address` | — | Rua Tereza Lopes, 677 – Vila Hortência, Sorocaba/SP, BR |
| `contactPoint` | — | `+55-15-99651-0375`, tipo `sales`, `areaServed: BR`, `pt-BR` |
| `sameAs` | `facebook.com/grupoocwearepeople` | `facebook.com/grupoocwearepeople` |

Cada versão tem informação que a outra não tem: o Yoast tem o logo (obrigatório para vários rich results), o manual tem endereço e telefone. **Fundir os dois num só nó resolveria e deixaria a entidade mais completa do que qualquer uma das versões atuais.**

#### `@id: https://timcorporativo.com.br/#website`

| | Yoast | Schema manual |
| --- | --- | --- |
| `name` | `Tim Corporativo` | `TIM Corporativo` |
| `alternateName` | `Plano Tim Empresa` | — |
| `potentialAction` | `SearchAction` (busca interna) | — |
| `isPartOf` | — | `https://grupooc.com.br/#organization` |

#### `@id: https://timcorporativo.com.br/` (a `WebPage`)

| | Yoast | Schema manual |
| --- | --- | --- |
| `name` | igual nos dois | igual nos dois |
| propriedades | `about`, `breadcrumb`, `datePublished`, `dateModified`, `image`, `primaryImageOfPage`, `thumbnailUrl`, `isPartOf`, `potentialAction`, `inLanguage`, `description`, `url` | `about`, `mainEntity` (aponta para os 4 `Service`), `inLanguage`, `url` |

### Página 2894 — 1 conflito

`@id: https://timcorporativo.com.br/tim-corporativo-planos-empresariais/` — mesma situação: a `WebPage` do Yoast (com datas, imagem, breadcrumb) versus a `WebPage` manual (com `mainEntity` apontando para os `Service`).

## 2. Grafo do Yoast (padrão, nas 4 páginas)

```
WebPage
 ├─ potentialAction: ReadAction
 ├─ primaryImageOfPage → ImageObject      (ausente na 1271)
 ├─ breadcrumb → BreadcrumbList
 │    ├─ ListItem 1: Início
 │    └─ ListItem 2: <nome da página>     (só 1 item na home)
 └─ isPartOf → WebSite
       ├─ potentialAction: SearchAction (EntryPoint + PropertyValueSpecification)
       └─ publisher → Organization
             └─ logo → ImageObject (cropped-logo-tim-azul.png, 512×512)
```

`Organization` do Yoast, idêntica nas 4 páginas:

```json
{
  "@type": "Organization",
  "@id": "https://timcorporativo.com.br/#organization",
  "name": "Tim Corporativo",
  "alternateName": "Plano Tim Empresa",
  "url": "https://timcorporativo.com.br/",
  "logo": { "@id": "https://timcorporativo.com.br/#/schema/logo/image/" },
  "sameAs": ["https://www.facebook.com/grupoocwearepeople"]
}
```

⚠️ `sameAs` tem **apenas o Facebook**. Sem LinkedIn, Instagram, YouTube ou perfis do Grupo OC — desperdício de sinal de entidade, especialmente para B2B.

## 3. Schema manual da home (ID 63) — `grupooc-timcorporativo-schema`

6.281 caracteres, 9 nós:

| # | `@type` | `@id` | Destaques |
| --- | --- | --- | --- |
| 1 | `Organization` | `https://grupooc.com.br/#organization` | **Grupo OC** — CNPJ `23.474.830/0001-56` via `identifier` (`PropertyValue`), endereço Sorocaba/SP, `contactPoint` `+55-15-99651-0375` (sales), Facebook |
| 2 | `Organization` | `https://timcorporativo.com.br/#organization` | **TIM Corporativo** — mesmos endereço e telefone, sem CNPJ. ⚠️ colide com o Yoast |
| 3 | `WebSite` | `…/#website` | `isPartOf` → Grupo OC. ⚠️ colide com o Yoast |
| 4 | `WebPage` | `https://timcorporativo.com.br/` | `mainEntity` → os 4 `Service`. ⚠️ colide com o Yoast |
| 5 | `Service` | `…/#service-tim-empresa` | `provider` → TIM Corporativo, `areaServed` → Country "Brasil", `audience` → `BusinessAudience` |
| 6 | `Service` | `…/#service-tim-black-empresa` | idem |
| 7 | `Service` | `…/#service-tim-fibra-empresa` | idem |
| 8 | `Service` | `…/#service-tim-ultrafibra` | idem |
| 9 | `FAQPage` | `…/#faq` | 4 perguntas |

Descrições dos `Service` (home):

- **TIM Empresa** — "Atendimento consultivo para empresas que buscam planos TIM Empresa com linhas móveis, dados, voz e soluções de conectividade."
- **TIM Black Empresa** — "Solução TIM Black Empresa para equipes que utilizam telefonia móvel, dados, chamadas e aplicativos na rotina profissional."
- **TIM Fibra Empresa** — "Atendimento para empresas que precisam de internet fixa TIM Fibra Empresa para escritório, loja, atendimento e sistemas."
- **TIM UltraFibra** — "Solução TIM UltraFibra para empresas que dependem de conexão estável em operações internas, atendimento e reuniões."

`FAQPage` da home (4 `Question`/`Answer`) — **confere com o FAQ visível na página** ✅:
1. O que é TIM Empresa?
2. Quando escolher TIM Black Empresa?
3. Quando contratar TIM Fibra Empresa ou TIM UltraFibra?
4. Como receber uma proposta TIM Empresas?

## 4. Schema manual da página 2894 — `tim-corporativo-planos-schema`

5.301 caracteres, 7 nós:

| # | `@type` | `@id` | Destaques |
| --- | --- | --- | --- |
| 1 | `WebPage` | `…/tim-corporativo-planos-empresariais/` | `mainEntity` → 4 `Service`. ⚠️ colide com o Yoast |
| 2–5 | `Service` ×4 | `…/tim-corporativo-planos-empresariais/#service-tim-empresa` (etc.) | `provider` → `https://timcorporativo.com.br/#organization` |
| 6 | `ItemList` | `…#criterios-escolha` | "Critérios para escolher soluções TIM Empresa": Cobertura e disponibilidade no endereço · Perfil de dados, voz e sistemas · Quantidade de linhas e gestão de usuários |
| 7 | `FAQPage` | `…#faq` | 5 perguntas |

`FAQPage` da 2894 — **confere com o accordion visível** ✅:
1. MEI pode contratar plano TIM Empresas?
2. Qual a documentação necessária para contratar?
3. Como funciona o Gestor Web TIM?
4. Como contratar plano TIM empresarial?
5. Quais são os diferenciais da TIM Corporativo?

## 5. Serviços duplicados entre páginas

Os mesmos 4 serviços são declarados como entidades **distintas** em duas páginas:

| Serviço | `@id` na home | `@id` na 2894 |
| --- | --- | --- |
| TIM Empresa | `…/#service-tim-empresa` | `…/tim-corporativo-planos-empresariais/#service-tim-empresa` |
| TIM Black Empresa | `…/#service-tim-black-empresa` | `…/tim-corporativo-planos-empresariais/#service-tim-black-empresa` |
| TIM Fibra Empresa | `…/#service-tim-fibra-empresa` | `…/tim-corporativo-planos-empresariais/#service-tim-fibra-empresa` |
| TIM UltraFibra | `…/#service-tim-ultrafibra` | `…/tim-corporativo-planos-empresariais/#service-tim-ultrafibra` |

Tecnicamente os `@id` são diferentes, então **não há colisão** — mas conceitualmente são o mesmo serviço descrito duas vezes com textos diferentes. Para consolidação de entidade, o correto seria declarar cada `Service` **uma única vez** (na home, com `@id` de nível de site) e a página 2894 apenas **referenciar** esses `@id` no `mainEntity`, em vez de recriá-los.

## 6. O que existe versus o que falta

| Tipo | Home | 2894 | 2753 | 1271 |
| --- | --- | --- | --- | --- |
| `WebPage` | ✅ (×2) | ✅ (×2) | ✅ | ✅ |
| `WebSite` | ✅ (×2) | ✅ | ✅ | ✅ |
| `Organization` | ✅ (×3: Yoast + TIM Corp + Grupo OC) | ✅ (Yoast) | ✅ | ✅ |
| `BreadcrumbList` | ✅ | ✅ | ✅ | ✅ |
| `Service` | ✅ ×4 | ✅ ×4 | — | — |
| `FAQPage` | ✅ 4 Q | ✅ 5 Q | — | — |
| `ItemList` | — | ✅ | — | — |
| `Article` | — | — | ❌ falta | — |
| `HowTo` | — | — | ❌ oportunidade | — |
| `CollectionPage` | — | — | — | ❌ falta |
| `LocalBusiness` | ❌ | ❌ | ❌ | ❌ |
| `Person` (autor) | ❌ | ❌ | ❌ | ❌ |
| `Offer` / `Product` | ❌ | ❌ | ❌ | ❌ |

Lacunas mais relevantes:

- **`LocalBusiness`** — o site tem endereço físico, CNPJ e telefone declarados, mas usa só `Organization`. Para uma consultoria com sede em Sorocaba/SP, `LocalBusiness` (ou `ProfessionalService`) com `openingHours` e `geo` abre elegibilidade a resultados locais.
- **`Person` / autoria** — nenhuma página declara autor no schema, apesar de haver um snippet JS dedicado a criar `ProfilePage` na página de autor. Sinal de E-E-A-T desperdiçado.
- **`Offer` / `Product`** — os planos são o produto central e não têm nenhuma marcação. Complicado enquanto as ofertas vierem só via JavaScript do OC Hub (ver [01](01-estrutura-e-arquitetura.md), seção 10).
- **`Article`** na 2753, que declara `og:type: article` sem ter nó `Article` correspondente.

## 7. Prioridades de correção no schema

| Prioridade | Ação |
| --- | --- |
| 1 | Resolver os 3 `@id` duplicados da home fundindo Yoast + manual num único grafo (idealmente configurando tudo no Yoast e removendo o widget HTML, ou vice-versa — mas não os dois) |
| 2 | Resolver o `@id` duplicado da `WebPage` na 2894 |
| 3 | Consolidar os 4 `Service` em `@id` únicos de nível de site, referenciados (não recriados) pela 2894 |
| 4 | Padronizar o nome da entidade: `TIM Corporativo` vs `Tim Corporativo` — escolher um |
| 5 | Ampliar `sameAs` além do Facebook |
| 6 | Adicionar `LocalBusiness`, `Article` (2753) e `CollectionPage` (1271) |
