# Home — ID 63

`https://timcorporativo.com.br/`

## Ficha técnica

| Campo | Valor |
| --- | --- |
| ID | 63 |
| Slug | `tim-corporativo` (servida em `/` como front page) |
| Status | `publish` |
| Template | `elementor_header_footer` (com header e footer do tema) |
| Editor | Elementor (`_elementor_data` = 56.346 caracteres) |
| Autor | ID 1 |
| Imagem destacada | ID 1138 |
| Publicada | 2022-09-16 11:27 |
| Modificada | 2026-05-21 11:08 |
| Peso do HTML | ~233 KB |
| Palavras (texto visível) | 833 |
| Imagens | 5 — todas com `alt` |
| Formulários | 2 |

## SEO on-page

| Elemento | Valor | Tamanho |
| --- | --- | --- |
| `<title>` | `TIM Empresa: TIM Black Empresa, Fibra e UltraFibra` | 50 car. |
| `meta description` | `Planos TIM Empresa com TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra para PMEs e grandes empresas. Fale com um consultor.` | 128 car. |
| `canonical` | `https://timcorporativo.com.br/` | autorreferente ✅ |
| `meta robots` | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` | ✅ |
| `og:type` | `website` | ✅ correto para home |
| `og:image` | `https://timcorporativo.com.br/wp-content/uploads/2023/07/2.png` | |
| `twitter:card` | `summary_large_image` | |

Título e descrição estão bem dimensionados e carregam as keywords principais. É a única das 4 páginas com `og:type: website` (as outras usam `article`, o que é o comportamento padrão do Yoast).

> Nota: o arquivo `relatorio-reescrita-homepage-timcorporativo.md` (raiz do projeto) propõe trocar este título por `TIM Empresas: Black, Fibra e Atendimento Corporativo`, padronizando "TIM Empresas" no plural. **Essa reescrita ainda não foi aplicada** — o site está com o título antigo.

## Estrutura de headings

```
H1  TIM Empresa: Black, Fibra e UltraFibra
├── H2  TIM Black Empresa
├── H2  TIM EMPRESA
├── H2  Planos TIM Empresa para o seu negócio
├── H2  Escolha entre TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra
├── H2  TIM Empresa para cada perfil de negócio
├── H2  TIM Black Empresa para equipes em movimento
├── H2  TIM Fibra Empresa e TIM UltraFibra para internet corporativa
├── H2  Dúvidas frequentes sobre TIM Empresa
│   ├── H3  O que é TIM Empresa?
│   ├── H3  Quando escolher TIM Black Empresa?
│   ├── H3  Quando contratar TIM Fibra Empresa ou TIM UltraFibra?
│   └── H3  Como receber uma proposta TIM Empresas?
├── H2  Cliente TIM
├── H2  Renovação Segura
├── H2  MAIS DE 15 ANOS
└── H2  TIM Fibra Empresa e TIM UltraFibra      ← repete o texto de um H2 anterior
```

Total: 1 H1, 12 H2, 5 H3 (o último H3 é o "TIM Corporativo" do rodapé).

Observações:
- **H1 único e correto** ✅
- `H2 TIM EMPRESA` e `H2 TIM Black Empresa` são headings decorativos (títulos de blocos visuais), sem conteúdo textual próprio abaixo.
- O H2 `TIM Fibra Empresa e TIM UltraFibra` aparece **duas vezes** com o mesmo texto, em seções diferentes.
- Não há hierarquia H2→H3 na maior parte da página: as seções de conteúdo são todas H2 no mesmo nível.

## Conteúdo, seção a seção

### 1. Banner OC Hub — TIM ULTRAFIBRA (topo)
Shortcode com `data-banner-id=9f8cb62d-34bd-43c6-ba5b-51d34ba6c8fd`, `data-offer-id=3a106d2a-6491-4dde-a6b2-4a4d09e81d12`, carregado por `https://ochub.grupooc.com.br/scripts/banner-loader.js`. **Renderizado só no cliente.**

### 2. Hero — H1
> **TIM Empresa: Black, Fibra e UltraFibra**
>
> Encontre o plano TIM empresa ideal para sua operação, com opções para pequenas, médias e grandes empresas.
>
> Com o TIM Black Empresa, sua equipe conta com telefonia móvel, voz e dados para trabalhar de forma integrada. Para internet fixa, o TIM Fibra Empresa e o TIM UltraFibra entregam conexão de alta velocidade para escritórios, lojas e equipes em crescimento.
>
> O Grupo OC ajuda sua empresa a comparar planos TIM Empresariais, reduzir custos e escolher a solução mais adequada para voz, dados móveis e fibra corporativa.

CTAs: `PLANOS` → `https://timcorporativo.com.br/#planostim` · `FALAR COM CONSULTOR TIM` → **sem URL definida** ⚠️

### 3. Banner OC Hub — Planos ILIMITADOS
Segundo banner (`data-banner-id=7f78ed27-5ae6-4458-8789-0cd770074696`), acompanhado de um bloco `<style>` inline que sobrescreve cor do CTA, gradiente de fundo e largura máxima.

### 4. TIM Black Empresa
> Tire suas dúvidas ou contrate um plano TIM Empresa com internet, voz, Waze e WhatsApp inclusos.

Imagem: `Logo-Tim-Topo.png`.

### 5. Formulário principal — `#form`
Formulário Elementor **`Lead Tim Corporativo`**:

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| Nome | texto | — |
| Email | email | **sim** |
| Celular | number | — |
| CNPJ | texto | — |
| Nº de Linhas | select | — |
| Operadora Atual | select | — |
| Mensagem | textarea | — |

Botão: `Enviar`. Destino: `contato@grupooc.com.br, comercial@grupooc.com.br`. Sem redirect de agradecimento configurado e sem proteção anti-spam.

### 6. Planos — `#planostim`
> **Escolha entre TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra**
> Descontos progressivos a partir de 10 linhas para planos TIM Empresa.

Abaixo, o widget de ofertas do OC Hub:
`<div id="ochub-offers-container" data-site="9a8c40f4-b63c-42af-8de8-1b28cbf150e9" data-layout="grid" data-limit="10" data-sort="price_asc">`

**Esta é a seção comercial central da home e ela é 100% renderizada por JavaScript.** Nenhum plano, preço ou oferta existe no HTML de origem.

### 7. TIM Empresa para cada perfil de negócio
> Os planos TIM Empresa atendem negócios que precisam manter equipes conectadas dentro e fora do escritório. A escolha ideal depende do número de linhas, do uso de internet móvel, da rotina de atendimento e da necessidade de conexão fixa para a operação.
>
> Com uma consultoria especializada, sua empresa pode comparar TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra sem perder tempo analisando opções que não combinam com o seu cenário.

### 8. TIM Black Empresa para equipes em movimento
> O TIM Black Empresa é indicado para empresas que dependem de comunicação móvel, atendimento externo, vendedores, gestores e equipes que precisam acessar dados, aplicativos e chamadas durante a rotina de trabalho.
>
> Na contratação consultiva, avaliamos o perfil de uso das linhas, a necessidade de portabilidade, a cobertura e os recursos que ajudam sua equipe a trabalhar com mais previsibilidade.

### 9. TIM Fibra Empresa e TIM UltraFibra para internet corporativa
> TIM Fibra Empresa e TIM UltraFibra são alternativas para empresas que precisam de internet fixa estável para loja, escritório, atendimento, sistemas online, emissão de notas, reuniões por vídeo e rotinas administrativas.
>
> A disponibilidade pode variar por endereço e perfil da empresa. Por isso, o atendimento consultivo ajuda a validar cobertura, necessidade de velocidade, quantidade de usuários e melhor combinação com planos móveis TIM Empresa.

### 10. FAQ — Dúvidas frequentes sobre TIM Empresa

| Pergunta | Resposta |
| --- | --- |
| O que é TIM Empresa? | TIM Empresa reúne soluções de telefonia móvel, dados e internet para negócios que precisam conectar equipes, filiais, lojas e escritórios. |
| Quando escolher TIM Black Empresa? | O TIM Black Empresa é uma opção para equipes que usam celular corporativo, internet móvel, chamadas e aplicativos no dia a dia profissional. |
| Quando contratar TIM Fibra Empresa ou TIM UltraFibra? | TIM Fibra Empresa e TIM UltraFibra são indicados quando a empresa precisa de internet fixa para operação interna, atendimento, sistemas, reuniões online e rotinas administrativas. |
| Como receber uma proposta TIM Empresas? | Preencha o formulário da página para que um consultor avalie o perfil da sua empresa e indique a melhor combinação entre linhas móveis, fibra e serviços corporativos. |

O FAQ está construído como um **bloco de texto** (widget `text-editor`), não como accordion. As perguntas saem como `H3` no HTML e as 4 estão espelhadas no schema `FAQPage` (ver [07-dados-estruturados.md](07-dados-estruturados.md)) — o schema bate com o conteúdo visível ✅.

### 11. Blocos de autoridade
- **Cliente TIM** (H2 decorativo)
- **Renovação Segura** — "Tenha a segurança de dados protegidos e sem aumento inesperado na fatura." · CTA `Renovação Segura >` → `#form`
- **MAIS DE 15 ANOS** — "O GRUPO OC atua há mais de 15 anos em gestão de telecomunicações, auditoria e consultoria em telefonia empresarial. Ajudamos empresas a reduzir custos, otimizar recursos e escolher entre TIM empresa, TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra com mais segurança."

### 12. Fechamento
> **TIM Fibra Empresa e TIM UltraFibra**
> Se a sua busca é por TIM empresa, nossa consultoria compara TIM Black Empresa, TIM Fibra Empresa e TIM UltraFibra de acordo com o número de linhas, uso de dados e necessidade de internet fixa.
> Preencha o formulário para receber atendimento consultivo e uma proposta TIM Empresas alinhada à sua operação.

### 13. Widget HTML — schema manual
Widget `html` de 6.281 caracteres contendo `<script type="application/ld+json" id="grupooc-timcorporativo-schema">`. Detalhado em [07-dados-estruturados.md](07-dados-estruturados.md).

## Linkagem

**Links internos (URLs reais):** apenas `/conteudos/` e a própria home.
**Âncoras internas:** `#topo`, `#autorizado`, `#planostim`, `#form`, `#content`, além da ação de popup do Elementor (popup 261).
**Externos:** `api.whatsapp.com`, `grupooc.com.br`, `host.godaddy.com`.

Total: 32 links (23 internos, 4 externos).

⚠️ **A home não linka para `/tim-corporativo-planos-empresariais/`** nem para `/meu-tim-empresas-fatura-2-via-suporte/`.

## Problemas identificados nesta página

| # | Problema | Gravidade |
| --- | --- | --- |
| 1 | Conflito de `@id` no JSON-LD: `#organization`, `#website` e a `WebPage` são declarados duas vezes (Yoast + schema manual) com nomes/logos diferentes | Alta |
| 2 | A seção comercial `#planostim` (ofertas OC Hub) não existe no HTML de origem — só renderiza via JS | Alta |
| 3 | CTA `FALAR COM CONSULTOR TIM` sem URL | Média |
| 4 | `href="tel:+55${telefoneWhatsApp}"` e `href="${whatsappLink}"` não interpolados no HTML | Média |
| 5 | H2 `TIM Fibra Empresa e TIM UltraFibra` duplicado | Baixa |
| 6 | Sobreposição temática com a página 2894 (mesmas keywords, mesmos serviços) | Alta — ver [08](08-inventario-seo-consolidado.md) |
| 7 | Formulário sem anti-spam e sem página de agradecimento | Média |
