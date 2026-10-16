# Estratégia de concorrentes na rede — timcorporativo.com.br (16/10/2026)

Modo: pesquisa_keywords + estrategia_conteudo, com auditoria/conteudo das ~30 páginas que já citam concorrente ou troca. Escopo: timcorporativo.com.br dentro da rede (planovivoempresarial.com.br = Vivo, planoempresac.com.br = Claro, algartel.com.br = Algar). Nada foi editado; este é o plano.

Fontes: API do GSC 16/07–13/10/2026 (90 dias) nos 4 sites; `palavras-chave-por-site.json`; memórias dos lotes de 29/09 e 16/10; código do repo (REDIRECIONADOS, CORRECOES, LPs de /solucoes/, EDITORIAL); autocomplete real do Google (endpoint suggestqueries, pt-BR/BR, gravado em `scratchpad/autocomplete/sugestoes.txt`). Tudo que não vem do GSC está marcado **[inferência]** ou **[estimativa]**.

Suposições declaradas: objetivo = lead qualificado de empresa cliente de outra operadora (não clique bruto); regra R1 (sem preço, %, GB, prazo prometido, superlativo) vale para todo texto proposto; cabeças "tim empresas/empresa/empresarial" em leitura até 26/10 não entram em title de artigo; consultas automatizadas (`plano tim pj`, `tim pj`, `tim 2 via`…) ficaram fora de toda conta.

---

## 1. Universo de busca por marca concorrente (paralelismo entre marcas e sites)

### 1.1 O que o GSC mostra, marca × família × site (impressões/cliques em 90 d)

| Família | TIM (timcorporativo) | Vivo (planovivo) | Claro (planoempresac) | Algar (algartel) | Oi / Net / Nextel |
|---|---|---|---|---|---|
| Cabeça "X empresas/empresarial" | 92.042 / 415 | 8.931 / 8 ("vivo empresas" 7.848 imp, pos 7,6, CTR 0,08%) | 4.909 / 3 ("claro empresa fixo" 1.503, "claro net empresarial" 1.379 em pos 2,4 e **0 cliques**) | 441 / 34 (CTR 7%, a melhor da rede) | Oi: 1 imp no site TIM; "net fixo empresa" 97 imp no site TIM (pos 9,5); Nextel: 2 imp na rede |
| Comercial (plano/internet/fibra/link/ip) | 23.020 / 137 | 4.883 / 31 ("ip fixo vivo" 772, "link dedicado vivo" 291) | 5.322 / 14 ("plano empresarial claro celular" 1.571 em pos 2,6 e **0 cliques**) | 632 / 15 | Oi: 1 imp |
| Suporte (ativar chip, telefone, login, 2ª via) | 355.471 / 694 (59% dos cliques do site) | 141 / 0 | 3.131 / 0 ("telefone claro empresas"+"claro empresas telefone" 3.004 imp, 0 cliques) | 238 / 1 | Oi: 3 imp |
| Troca / portabilidade | 8.555 / 15 ("portabilidade tim" 5.422 em pos 10,4) | 20 / 0 (1 consulta truncada) | 1 / 0 | 62 / 1 ("portabilidade algar" 33) | Oi: 9 imp (pos 34–42) |
| Comparação ("X ou Y", "X vs Y") | 863 (TIM×outras) + 1.433 (Vivo×Claro) / 7 | 1 | 0 | 0 | — |
| Informacional "são a mesma empresa" | ~1.100 imp dentro das comparações: "vivo e claro são a mesma empresa" 333+333+68+50, "tim e vivo…" 230+77+19, "claro e tim…" 14 — 0 a 1 clique cada | 0 | 0 | 0 | "nio e oi são a mesma coisa", "tim comprou a oi" (1 imp cada) |

Leitura: o site da TIM recebe praticamente **todo** o volume de comparação e troca da rede; os irmãos recebem cabeça, comercial e suporte da própria marca e quase nenhuma consulta de troca (Vivo 20 imp, Claro 1). O paralelismo é visível: as mesmas seis famílias existem para cada marca, mas a família "troca" só aparece onde o site é o **destino** (TIM) — nos irmãos ela só existiria como "portabilidade para a {marca}", que nenhum deles tem.

### 1.2 O que o paralelismo permite inferir onde o GSC não mostra [inferência, com base no autocomplete]

Autocomplete real (10 posições cheias = volume real; "(sem sugestões)" = demanda residual ou inexistente):

| Frase | Sugestões | Leitura |
|---|---|---|
| "portabilidade da vivo para tim" / "portabilidade vivo para tim" | 10/10 nas duas formas: pré pago, controle, esim, como fazer, quanto tempo demora, **fixo**, pelo whatsapp, online | Demanda real e alta, **majoritariamente B2C**; a fatia PJ é "…fixo", "…online" e as formas "vivo empresas portabilidade" (8 sugestões: fixo, celular, móvel, meu vivo empresas) |
| "portabilidade da claro para tim" / "portabilidade claro para tim" | 10/10 nas duas formas (controle, pré pago, pós pago, esim, como funciona, telefone, sms) | Mesmo padrão; fatia PJ em "claro empresas portabilidade" (fixo, móvel) |
| "portabilidade da oi para" | vivo, claro, **tim**, "vivo telefone fixo", "claro telefone fixo", "outra operadora", "oi fixo para outra operadora", "oi para tim fixo" | A demanda da Oi é de **telefone fixo** (o móvel da Oi foi absorvido por TIM/Vivo/Claro em 2022). Confirma o ângulo "fixo" para a página Oi |
| "cancelar vivo empresas" / "cancelar claro empresas" | 10/10 (internet, plano, linha, contrato, conta, fibra, portabilidade) | Cliente de Vivo/Claro insatisfeito — a **intenção de troca** mais quente do universo. Pertence ao irmão como suporte, mas o lead é da TIM (ver §2) |
| "multa vivo empresas", "fidelidade vivo empresas" | "multa cancelamento/fidelidade/contrato vivo empresas", "consultar fidelidade vivo empresas", "prazo fidelidade vivo empresas" | Pré-troca com contrato vigente — encaixa na LP /solucoes/trocar-de-operadora-com-contrato-vigente/ e na página Vivo→TIM |
| "multa claro empresas", "fidelidade claro empresas" | só "multa fidelidade claro empresas" | Menor que Vivo, existe |
| "portabilidade cnpj" | "portabilidade cnpj para cpf", "…cnpj para cpf vivo/tim", "portabilidade cnpj tim", "portabilidade cnpj claro" | Intenção distinta de portabilidade de operadora: **titularidade** PF↔PJ. É o ângulo que diferencia tim-portabilidade-cnpj do pilar (ver §4) |
| "portabilidade empresarial" | "…tim", "…claro", "…vivo", "portabilidade número empresarial para pessoa física", "portabilidade celular empresarial" | Família paralela em todas as marcas: cada irmão poderia ter "portabilidade empresarial {marca}" |
| "sair da vivo empresas", "sair da claro empresas", "trocar de operadora empresa/cnpj", "alternativa vivo empresas", "tim ou vivo/claro empresas", "vivo ou claro empresas" | **(sem sugestões)** | Essas formas são do nosso vocabulário, não do usuário. "Alternativa a X" e "trocar de operadora empresa" existem como cauda mínima no GSC (21–263 imp), não como cabeça. Não criar páginas novas para elas; absorver como H2 |
| "oi empresas" | 2 via, fatura, telefone, login, contato, internet, fibra, suporte | Só suporte: cliente Oi existente. Sem lead para a TIM, exceto o que migrar do fixo |
| "net empresas" | 8 de 10 sugestões são "Net Empresas Bradesco/Santander" (banco) | Ruído navegacional; a família Net como operadora (= Claro) é só "net fixo empresa"/"planos net empresa" (108 imp no site TIM) e pertence ao irmão Claro |
| "nextel empresas" | 1 sugestão (a própria) | Marca extinta (absorvida pela Claro). Não criar página; uma FAQ na página Claro basta |
| "portabilidade tim" | "portabilidade tim **para vivo**", "**para claro**", pré pago, esim, controle, consultar | A cabeça que o pilar disputa (5.422 imp) é B2C e em parte **de saída da TIM**. Subir dela de 10 para 5 rende cliques, não leads |

Onde está o **volume**: cabeças e suporte das marcas (centenas de milhares de impressões), quase todas sem intenção de troca. Onde está a **intenção de troca que vira lead**: (a) "portabilidade {origem} para tim" com qualificador PJ (fixo, cnpj, empresa); (b) "multa/fidelidade/cancelar {origem} empresas" — cliente com problema; (c) "portabilidade tim empresa(s)/cnpj" (~650 imp em pos 4–5, já com os melhores CTRs do cluster); (d) os comparativos pareados "tim ou vivo" (128 imp), "tim fibra ou vivo fibra" (65), com "tim ou claro" como lacuna [inferência: 40–60% do volume da Vivo, porque a Claro aparece com 344 imp no site TIM contra 2.728 da Vivo].

---

## 2. Regra de posse na rede

`palavras-chave-por-site.json` **não tem entrada** para timcorporativo.com.br, planovivoempresarial.com.br nem planoempresac.com.br (tem algartel, planotimempresa, planotimcorporativo, planoempresarialtim, linkdedicada, meupabxemnuvem, internetfibraagora). A regra do dono (cabeça da marca = site da marca) está em vigor sem registro; a ação A00 do JSON propõe registrá-la.

| Fica no site da TIM | Fica no irmão da marca | Ninguém (não criar) |
|---|---|---|
| "portabilidade {Vivo/Claro/Oi} **para a TIM**" com recorte PJ | cabeça "{marca} empresas/empresa/empresarial" e grafias coladas ("vivoempresa") | "X e Y são a mesma empresa" como artigo próprio (zero-click/AIO; fica como FAQ nos comparativos) |
| "TIM ou {marca}" / "TIM vs {marca}" para CNPJ | comercial da marca: "ip fixo vivo", "link dedicado claro", "plano empresarial claro celular", "net fixo empresa", "claro net empresarial" | "cancelar {marca} empresas" como **title** em qualquer site da rede que não seja o da marca (parece página da concorrente) |
| "alternativa a {marca} empresas" (como H2/variação, não como cabeça) | suporte da marca: "telefone claro empresas", "vivo empresas login", "oi empresas 2 via" | variantes B2C das portabilidades (pré pago, controle, esim) |
| cliente de {marca} com problema que a TIM resolve: "multa fidelidade {marca} empresas" (só como H2 da página de troca e da LP de contrato vigente, nunca como title) | "portabilidade para a {marca} no CNPJ" / "portabilidade empresarial {marca}" — **lacuna em todos os irmãos** | páginas por cidade × marca de origem |
| "Vivo ou Claro" (comparação entre terceiros com a TIM como terceira opção) — já existe e é a URL com mais impressões do espaço (5.250) | "{marca} fibra empresas", "{marca} fixo empresarial" | "Nextel empresas" (marca extinta) |

Cruzamentos a corrigir (canibalização entre sites, erro nº 12 da seção 10):
- `/top-5-alternativas-a-claro-empresas-…/` recebe hoje **24 imp em "claro empresas" (pos 8,1)** — cabeça do irmão Claro. Sai por 301 (A12).
- "net fixo empresa" 97 imp e "planos net empresa" 11 imp caem no site TIM sem página; pertencem a planoempresac (Net = Claro). Não criar nada na TIM; o irmão cria (A25).
- "claro empresarial" 33 imp cai em `/tim-empresarial-beneficios-2026/`; aceitável como spillover, não otimizar para isso.

### Oportunidades grandes nos irmãos — fora deste repo, para o dono

| Site | Achado (GSC 90 d) | Se for à curva do site TIM |
|---|---|---|
| planoempresac | "plano empresarial claro celular" **1.571 imp, pos 2,6, 0 cliques**; "claro net empresarial" **1.379 imp, pos 2,4, 0 cliques** | Posição 2–3 com CTR zero é snippet que não corresponde à busca ou SERP tomada por anúncios/AIO. Só o title/meta dessas duas pode valer +40 a +110 cliques/90 d [estimativa: 2.950 imp × 1,25–3,75%] |
| planoempresac | "telefone claro empresas"+"claro empresas telefone" 3.004 imp, pos 6,6–7,4, 0 cliques; "claro empresa fixo" 1.503 imp pos 6,5, 0 cliques | Suporte (quer o número). Resposta direta no topo com o canal oficial da Claro: +10 a +20 cliques/90 d, lead baixo |
| planovivo | "vivo empresas" **7.848 imp, pos 7,6, CTR 0,08%** (curva do site TIM nessa faixa: 0,3%) | Só alinhar o snippet à cabeça: +18 cliques/90 d; a pos 5: +98 [estimativa]. "vivoempresa/vivoempresas" (995 imp, 0 cl) é navegacional para o portal da Vivo — não perseguir |
| planovivo | "ip fixo vivo"+"vivo ip fixo" 1.194 imp, pos 9, 2 cliques; "link dedicado vivo" 291 imp pos 13 | Artigo de IP fixo já existe (12 cliques); title alinhado à consulta |
| planovivo / planoempresac / algartel | **nenhum tem "portabilidade para a {marca} no CNPJ"**; autocomplete "vivo empresas portabilidade" tem 8 sugestões, "claro empresas portabilidade" 4, "portabilidade algar" já dá 62 imp no algartel sem página | Espelho do pilar da TIM, um por irmão (A24–A26) |
| algartel | "algar empresarial/empresas" convertem a 5–7% de CTR (34 cliques em 441 imp) — é o único irmão com cabeça funcionando; "internet empresarial" 802 imp pos 12,5 sem clique | Nada de concorrente a fazer; é referência do que o snippet certo faz |

---

## 3. Auditoria das páginas do site da TIM que já disputam o espaço

Critério: intenção única por URL; fica a URL que já tem impressões/posição; páginas-molde (os oito H2 idênticos "Como escolher … para o seu perfil de empresa / Pacotes recomendados / Quanto custa no cenário real / Objeções comuns / Preço e custo total de …") são texto-molde trocando a keyword — erro nº 9 da seção 10, e a keyword repetida em cada H2 é stuffing (erro nº 3).

### 3.1 Cluster "migrar de operadora"

| URL | GSC 90 d | Diagnóstico | Decisão |
|---|---|---|---|
| /como-migrar-operadora-tim-empresas-guia-completo/ | 5 cl, 483 imp, pos 8,4; 1.075 palavras, 5 fases + checklists | Melhor da família; title com "Guia Definitivo" e "TIM Empresas" | **Reescrever** (hub de migração: projeto, não número) — A15 |
| /migracao-operadora-tim-empresas-processo-cuidados/ | 0 cl, 88 imp, pos 7,5; 1.279 palavras | Mesma intenção (processo e cuidados), 0 consulta visível própria | **301** → como-migrar — A03 |
| /migrar-de-operadora-corporativa-e-burocratico-passo-a-passo-da-portabilidade-tim/ | 0 cl, 58 imp, pos 31; molde com "Portabilidade operadora corporativa tim" 6× em H2 | Molde + stuffing | **301** → como-migrar — A04 |
| /tim-empresa-migracao-roi-b2b/ | 0 cl, 9 imp; 591 palavras; "Tabelas de Preços", "2025" | Fino, datado, viola R1 | **301** → como-migrar — A05 |
| /solucoes/trocar-de-operadora-com-contrato-vigente/ | 3 cl, 263 imp, pos 7,0; LP real (quatro caminhos, o que ler no contrato) | Intenção própria: fidelidade/multa | **Manter** e virar spoke de "fidelidade/multa" — A14 |
| /operadora-atual-sem-suporte-tecnico-24h-veja-o-sla-real-de-tim-empresas/ | 0 cl, 21 imp, pos 53; molde | "Cliente com problema de suporte" é bom ângulo, mas a página é molde | **301** → comparativo-operadoras (H2 "Gestão de linhas e atendimento") — A18 |

### 3.2 Cluster Vivo

| URL | GSC 90 d | Diagnóstico | Decisão |
|---|---|---|---|
| /tim-vs-vivo-empresas-2025-comparativo/ | 11 cl, 1.827 imp, pos 7,4; title/meta/H1/resposta refeitos em 16/10 | Corpo ainda tem "5 Razões Por Que TIM Supera Vivo", "Preço 30-40% Inferior", "Sem Algemas", "+R$ 50k", "Economizou R$ 15.600/ano" — R1 + depreciação sem fonte | **Reescrever corpo** (CMS) — A09 |
| /tim-empresas-vs-vivo-empresas-qual-operadora-corporativa-entrega-mais-estabilidade/ | 0 cl, 6 imp (0 consulta visível); molde | Duplicata da anterior | **301** → tim-vs-vivo — A06 |
| /melhores-alternativas-ao-vivo-empresas-para-operadoras-que-precisam-de-cobertura-nacional/ | 0 cl, 21 imp, pos 9,1; molde ("Alternativa vivo empresas" 6× em H2) | Intenção = cliente Vivo saindo. É a intenção da página nova Vivo→TIM | **301** → nova página Vivo→TIM — A08 (depende de A07) |
| /vivo-vs-claro-empresas-2025-comparativo-preco/ | 17 cl, 5.250 imp, pos 7,6 | Maior URL do espaço; a consulta é "vivo e claro são a mesma empresa" (informacional). Pendência CMS: R$/%/"2025"/"FALE COM UM CONSULTOR GRUPO OC" no corpo | **Manter**, limpar corpo (conformidade) — A20 |
| /tim-ultrafibra-1-giga-vs-vivo-1-giga/ | 21 cl, 4.329 imp, pos 8,5; em leitura (title de 29/09) | Fibra, fora do escopo de troca móvel | **Manter** (sem ação até 26/10) — A21 |

### 3.3 Cluster Claro

| URL | GSC 90 d | Diagnóstico | Decisão |
|---|---|---|---|
| /tim-black-empresa-vs-claro-empresas-onde-o-black-ganha-em-produtividade/ | 0 cl, 128 imp, pos 48 (consultas: "tim black empresa" pos 87, "tim empresarial" pos 3,9); molde | Única URL "TIM vs Claro" do site, e é molde. O site tem TIM×Vivo (1.827 imp) e Vivo×Claro (5.250), falta TIM×Claro real | **Reescrever** como "TIM ou Claro Empresas: comparativo para CNPJ", espelho do tim-vs-vivo, na URL já rastreada — A10 |
| /top-5-alternativas-a-claro-empresas-para-negocios-com-equipes-externas/ | 0 cl, 24 imp (toda em "claro empresas", cabeça do irmão); molde | Canibaliza o irmão | **301** → nova página Claro→TIM (onda 3); até lá **manter** sem otimizar — A12 |
| /tim-empresarial-beneficios-2026/ | 4 cl, 686 imp, pos 7,1; recebe "claro empresarial" 33 imp | Title "7 Benefícios vs Vivo/Claro [Tabela]", meta "supera Vivo/Claro", H2 "Liderança na Cobertura 5G" sem fonte | **Reescrever** meta/corpo (conformidade); title só após 26/10 (cabeça em leitura) — A19 |

### 3.4 Hub de comparação e sazonais

| URL | GSC 90 d | Decisão |
|---|---|---|
| /comparativo-operadoras-tim-vivo-claro-empresas/ | 5 cl, 624 imp, pos 10,1; conteúdo honesto (oito critérios, "sem ranking") | **Manter** como hub; receber 301s e bloco de links para os três pareados e para as páginas de troca — A16 |
| /tim-empresas-black-friday-2025-vs-vivo-claro/ | 0 cl, 44 imp, pos 10,5; sazonal vencido | **301** → comparativo-operadoras — A17 |
| /tim-empresas-black-friday-2025-ofertas-exclusivas/, /cyber-monday-…-portabilidade-…/, /planejamento-troca-plano-…-black-friday/ | 57 / 0 / 0 imp | Fora do escopo de concorrente; registrar para o dono: sazonais de 2025 em out/2026 devem ir por 301 ao evergreen (desconto LP ou comparativo) quando a Black Friday 2026 for decidida |

### 3.5 Oi, Net, Nextel, Algar

| URL | GSC 90 d | Decisão |
|---|---|---|
| /solucoes/alternativa-a-oi-empresas/ | 0 cl, 26 imp, pos 29,6 ("portabilidade oi", "oi portabilidade", "oi.com.br/migre") | **Reescrever** para o ângulo fixo/dados (o móvel da Oi não existe mais), ligando ao artigo /tim-fixo-empresa-linha-fixa-empresarial/ (1.509 palavras, 0 imp em 90 d — nunca indexou ou não rankeia) — A13 |
| Net | 108 imp no site TIM sem página | Pertence ao irmão Claro — A25 |
| Nextel | 2 imp na rede | FAQ na página Claro→TIM ("minha empresa era Nextel") — A22 |
| Algar | 1 imp no site TIM | Nada. Atenção: a LP /solucoes/operadora-nacional-ou-provedor-regional/ (66 imp) não pode depreciar operadora regional — a Algar é irmã da rede |

Mecânica: 11 consolidações novas (A03–A06, A08, A12, A17, A18 + 3 condicionais) vão por `REDIRECIONADOS` em `src/lib/server/artigos.js` (que tira da geração e alimenta `CORRECOES` para os links do corpo); `static/_redirects` está em 85 regras com teto ~90 — não acrescentar lá. Depois de cada publicação: `node /home/ocadmin/git/Sites/gsc/sitemap-submit.js`.

---

## 4. Cluster de portabilidade — arquitetura

### 4.1 O que os números dizem

- Pilar `/portabilidade-tim-empresarial-como-trocar-de-operadora-e-manter-numero/`: 82 cl, 15.900 imp, pos 8,9, 3.927 palavras. Dono de "portabilidade tim" (4.315 imp nela, pos 10,4), "tim portabilidade" (526), "portabilidade para tim" (311), "o que é portabilidade tim" (74+39) e das variantes PJ: "tim empresas portabilidade" 246 imp pos 4,9, "portabilidade tim empresa" 109 pos 4,8, "portabilidade tim empresas" 75+64+64 pos 4–5, "tim empresa portabilidade" 57 pos 4,6 — **9 dos 11 cliques visíveis vêm dessas variantes PJ**.
- Spoke `/tim-portabilidade-cnpj-guia-completo/`: 85 cl, 3.887 imp, pos 7,5, **CTR 2,2% — o melhor do cluster** — com só 676 palavras. Só 263 imp são de consultas visíveis (o resto é cauda anonimizada); nas visíveis ela **canibaliza** a cabeça ("portabilidade tim" pos 35,8; "tim portabilidade" pos 47) e tem consultas próprias que o pilar não tem: "portabilidade tim cnpj" (pos 5,1), "tim cnpj", "mudar numero da tim", "tim fixo portabilidade", "como transferir um número de celular para outro cpf tim".
- A cabeça "portabilidade tim" é B2C e parte dela é de saída (autocomplete: "portabilidade tim para vivo/claro"). Levar o pilar de 10,4 para 5 renderia ~68 cl/90 d (5.422 × 1,25%) com lead fraco; para 7–9, ~16 cl/90 d. **A alavanca de lead do cluster é a cauda "empresa/CNPJ/da {origem} para a TIM", não a cabeça.**

### 4.2 Quem fica com o quê

```
PILAR  /portabilidade-tim-empresarial-como-trocar-de-operadora-e-manter-numero/
       intenção: levar o número para a TIM — regra, etapas, documentos, prazos (por referência à Anatel), fixo
       title em leitura até 26/10 (não mexer); corpo: A02
  ├─ SPOKE /tim-portabilidade-cnpj-guia-completo/            → "portabilidade tim cnpj", titularidade CPF↔CNPJ, lote, documentos PJ (A01)
  ├─ SPOKE /solucoes/trocar-de-operadora-com-contrato-vigente/ → fidelidade/multa/"posso trocar antes do contrato acabar" (A14)
  ├─ SPOKE /como-migrar-operadora-tim-empresas-guia-completo/  → projeto de migração (inventário, cronograma, paralelo, aparelhos, fixo+móvel+internet) (A15)
  ├─ SATÉLITE Vivo → TIM   /portabilidade-da-vivo-para-a-tim-no-cnpj/   NOVA, onda 1 (A07; absorve A08)
  ├─ SATÉLITE Claro → TIM  /portabilidade-da-claro-para-a-tim-no-cnpj/  NOVA, onda 3, condicionada (A11; absorve A12)
  └─ SATÉLITE Oi → TIM     /solucoes/alternativa-a-oi-empresas/ reescrita (fixo/dados; sem URL nova) (A13)
HUB DE COMPARAÇÃO /comparativo-operadoras-tim-vivo-claro-empresas/ ↔ /tim-vs-vivo-…/ ↔ /tim-black-empresa-vs-claro-…/ (vira "TIM ou Claro") ↔ /vivo-vs-claro-…/
```

Por que **não** fundir o spoke CNPJ no pilar: 85 cliques a 2,2% de CTR numa cauda anonimizada que o pilar (0,5%) não demonstra capturar; o 301 trocaria um ganho incerto de cabeça por uma perda provável de cauda. O que se faz é tirar dele o que duplica o pilar (definição de portabilidade, passo a passo genérico) e deixá-lo só com o que é de CNPJ — isso passa no teste de conteúdo (≥60% distinto) e no de SERP ("portabilidade cnpj" traz "cnpj para cpf", "cnpj tim" — SERP diferente de "portabilidade tim").

### 4.3 Satélites por operadora de origem — filtro anti-doorway

Regra: a página só existe se cada H2 central mudar de verdade com a operadora de origem. O que muda, e o que a redação precisa levantar **na fonte oficial da operadora e da Anatel no dia da escrita** (nada de prazo/multa em número no texto, por R1):

| H2 | Vivo → TIM | Claro → TIM | Oi → TIM (fixo) |
|---|---|---|---|
| Onde o cliente consulta fidelidade e contrato na origem | app/portal Meu Vivo Empresas, fatura (código do cliente), central PJ da Vivo; "consultar fidelidade vivo empresas" é consulta real | Minha Claro Empresas, fatura Claro/Net (contratos combinados fixo+móvel da base Net) | contrato Oi Soluções; situação da base fixa da Oi em 2026 (**verificar status regulatório atual antes de redigir** — a Oi vem encerrando serviços fixos e a fibra virou Nio) |
| O que acontece com o contrato antigo ao portar | a portabilidade encerra a linha na origem; multa de fidelidade pode ser cobrada; linhas em "Vivo Controle" PJ têm regra própria de titularidade | idem; base ex-Net: portar o móvel não encerra o fixo/banda larga Net — separar os dois pedidos | número fixo portado para TIM Fixo (nuvem); o que fazer com banda larga e PABX Oi |
| Documentos que a origem exige para liberar | titularidade das linhas no CNPJ, código de cliente Vivo, procuração se o pedido for de terceiro | idem Claro; linhas ainda no nome da Nextel/Net: regularizar titularidade antes | documentos do fixo (titularidade por endereço) |
| O que muda ao chegar na TIM | gestor de linhas, apps/roaming — descrever sem comparar preço | idem | fixo na nuvem vs linha física (já no artigo tim-fixo) |
| FAQ de origem | "fiz portabilidade da vivo para tim e o chip não ativa", "cancelar portabilidade da vivo para tim" (autocomplete) | "fiz portabilidade da claro para tim como ativar o chip", "minha empresa era Nextel" | "tim comprou a oi?", "nio e oi são a mesma coisa?", "chip da oi ainda existe?" (consultas reais no GSC) |

Demanda que sustenta cada satélite: Vivo — GSC TIM 6+3 imp em "portabilidade vivo para tim"/"como fazer…" (pos 13–17) + autocomplete 10/10 em duas formas + "vivo empresas portabilidade" 8 sugestões + "fidelidade/multa vivo empresas" reais → **demanda real, fatia PJ [estimativa] 200–600 imp/90 d** na primeira página. Claro — GSC TIM "como fazer portabilidade da claro para tim" 5 imp, "fazer portabilidade da claro para tim" 2 imp em **pos 3**, "portabilidade claro empresas" 25 pos 10,4, "claro empresa portabilidade" 14 → autocomplete 10/10 → **[estimativa] 150–400 imp/90 d**. Oi — 14 imp reais, autocomplete confirma a forma "…para tim fixo" → **demanda baixa**, por isso reescrita sem URL nova. Nextel/Net/Algar/Embratel → **não há satélite**.

Páginas que **não** passam no filtro (viram H2): "portabilidade da vivo para tim pré-pago/controle/esim" (B2C), "sair da Vivo Empresas" (sem sugestão), "trocar de operadora cnpj" (sem sugestão), por cidade × origem.

---

## 5. Conformidade — o que NÃO fazer

1. **Nenhum title/H1 "cancelar vivo empresas", "telefone claro empresas", "vivo empresas login"** no site da TIM: parece página da concorrente, e é cabeça/suporte do irmão. Essas consultas só entram como H2 ("Tem fidelidade na Vivo Empresas? O que verificar antes de portar") dentro da página de troca.
2. **Nenhuma afirmação sobre preço, qualidade, cobertura ou atendimento do concorrente sem fonte pública datada** (Anatel, site oficial da operadora). Sai do corpo: "TIM Supera Vivo", "Preço 30-40% Inferior", "Sem Algemas", "Onde a Vivo Deixa a Desejar", "Liderança na Cobertura 5G", "supera Vivo/Claro em 7 critérios".
3. **Nenhum caso inventado** ("PME economizou R$ 15.600/ano", "+R$ 50k em valor agregado"). Caso real só com cliente identificável e autorização; e mesmo assim sem R$ (R1).
4. **Nenhum prazo prometido** de portabilidade ou ativação. A regra da Anatel entra por referência ("prazo regulamentar definido pela Anatel", com link), sem número no texto, para passar em `scripts/verificar-precos-build.mjs`.
5. Marca de terceiro **uma vez** em title e H1, em comparação ou destino de troca ("da Vivo para a TIM"); nunca em `brand`/`Organization`/`provider` do JSON-LD, nunca em logo, cores ou slug além do necessário.
6. **Não ensinar a cancelar** a concorrente passo a passo nem publicar "multa da Vivo é X": o site orienta a *portar para a TIM* e a *ler o próprio contrato*; o resto é do irmão ou da operadora.
7. "Melhor operadora" nunca como veredito; sempre critérios + "quando cada uma compensa" (o hub comparativo já faz isso — manter o padrão).
8. **Sem variantes B2C nem páginas por cidade × marca** (doorway/scaled content). Teto do cluster: pilar + 3 spokes + 3 satélites.
9. **Sem links recíprocos otimizados entre irmãos.** Link cruzado só quando a consulta é do irmão (ex.: "net fixo empresa" → planoempresac), 1 por página, âncora descritiva.
10. **Nextel**: não criar página de marca extinta. **"São a mesma empresa"**: não criar artigo; FAQ nos comparativos (já existe e é o que gera as impressões).
11. **FAQPage** sem promessa de rich result (removido da SERP em mai/2026); fica como sinal semântico.
12. Cabeças "tim empresas/empresa/empresarial" **fora de todo title de artigo** novo ou reescrito; títulos existentes em leitura (pilar, beneficios-2026, ultrafibra) só mudam após 26/10.

---

## 6. Ações (resumo; detalhe campo a campo em `estrategia-concorrentes.json`)

Ordem = prioridade × esforço (P1-baixo primeiro).

| # | Tipo | URL/slug | Prioridade | Esforço | Onda |
|---|---|---|---|---|---|
| A03 | consolidar_301 | migracao-operadora-tim-empresas-processo-cuidados → como-migrar | 1 | baixo | 1 |
| A04 | consolidar_301 | migrar-de-operadora-corporativa-e-burocratico… → como-migrar | 1 | baixo | 1 |
| A05 | consolidar_301 | tim-empresa-migracao-roi-b2b → como-migrar | 1 | baixo | 1 |
| A06 | consolidar_301 | tim-empresas-vs-vivo-empresas-qual-… → tim-vs-vivo | 1 | baixo | 1 |
| A01 | reescrever | tim-portabilidade-cnpj-guia-completo (ângulo CNPJ/titularidade) | 1 | médio | 1 |
| A09 | reescrever | tim-vs-vivo-empresas-2025-comparativo (corpo, conformidade) | 1 | médio | 1 |
| A10 | reescrever | tim-black-empresa-vs-claro-… → "TIM ou Claro Empresas" | 1 | médio | 1 |
| A07 | nova_pagina | /portabilidade-da-vivo-para-a-tim-no-cnpj/ | 1 | alto | 1 |
| A08 | consolidar_301 | melhores-alternativas-ao-vivo-… → A07 | 1 | baixo | 1 (junto com A07) |
| A02 | manter (+ corpo) | pilar portabilidade — corpo após 26/10 | 1 | baixo | 2 |
| A14 | manter (+ H2) | /solucoes/trocar-de-operadora-com-contrato-vigente/ | 2 | baixo | 2 |
| A16 | manter (+ links) | comparativo-operadoras-tim-vivo-claro-empresas | 2 | baixo | 2 |
| A17 | consolidar_301 | tim-empresas-black-friday-2025-vs-vivo-claro → hub | 2 | baixo | 2 |
| A18 | consolidar_301 | operadora-atual-sem-suporte-tecnico-24h… → hub | 2 | baixo | 2 |
| A15 | reescrever | como-migrar-operadora-tim-empresas-guia-completo (hub de migração) | 2 | médio | 2 |
| A19 | reescrever | tim-empresarial-beneficios-2026 (meta/corpo; title pós-leitura) | 2 | médio | 2 |
| A20 | reescrever | vivo-vs-claro-empresas-2025-comparativo-preco (corpo CMS) | 2 | baixo | 2 |
| A11 | nova_pagina | /portabilidade-da-claro-para-a-tim-no-cnpj/ (condicionada a A07 indexada) | 2 | alto | 3 |
| A12 | consolidar_301 | top-5-alternativas-a-claro-… → A11 | 2 | baixo | 3 |
| A13 | reescrever | /solucoes/alternativa-a-oi-empresas/ (fixo/dados) | 3 | médio | 3 |
| A21 | manter | tim-ultrafibra-1-giga-vs-vivo-1-giga | 3 | baixo | — |
| A22 | manter (não criar) | Nextel → FAQ em A11 | 3 | baixo | 3 |
| A00 | irmao (governança) | registrar os 4 domínios em palavras-chave-por-site.json | 1 | baixo | 1 |
| A23–A26 | irmao | planoempresac (snippets em pos 2–3 com 0 cliques; Net), planovivo ("vivo empresas" 0,08%; portabilidade para a Vivo), algartel (portabilidade algar) | — | — | para o dono |

---

## 7. Estimativa de impacto e ordem de execução

Curva de CTR do site: pos 4 → 3,75%; 5 → 1,25%; 6 → 0,52%; 7–9 → ~0,3%; 10 → 0,08%. Cliques/semana = imp/90 d × CTR ÷ 13. Conversão em lead **desconhecida**; faixa assumida para páginas de troca 3–8% dos cliques e para comparativos 1–3% [estimativa].

Tamanho do espaço: no site da TIM, as consultas com nome de concorrente somam ~12,3 mil imp/90 d (operadora 9.062, Vivo 2.728, Claro 344, Net 119, Oi 24) com 21 cliques, e a família troca/portabilidade 8.555 imp com 15 cliques. É um espaço **pequeno em cliques e alto em intenção**: o site faz ~304 cliques/semana, e este plano move poucos cliques, mas os mais próximos do fechamento.

| Onda | Quando | Ações | Cliques/semana (estimativa, após 28 d indexado) | Leads/mês (estimativa) | O que medir e quando |
|---|---|---|---|---|---|
| **1 — higiene + Vivo + Claro comparativo** | 17–30/10 (nada toca o pilar nem titles em leitura) | A00, A03–A06, A08, A01, A09, A10, A07 | +2 a +5: spoke CNPJ parando de canibalizar a cabeça (pilar 10,4 → 8–9: +1,2); Vivo→TIM 200–600 imp a 0,5–1,25% (+0,1 a +0,6); "TIM ou Claro" 700–1.000 imp a 0,3–0,6% (+0,2 a +0,5); 301s +0,1 | 0,5–1,5 | 7 d após publicar: `gsc.js inspect` da URL nova e das 5 origens de 301 (devem sair do índice). 20/11: `gsc.js query … query,page` para "portabilidade tim", "portabilidade tim cnpj", "portabilidade vivo para tim", "fidelidade vivo empresas", "tim ou claro", comparando 28 d vs 28 d anteriores; comparar **cliques**, não impressões |
| **2 — pilar, hubs, conformidade** | 27/10–14/11 (após leitura de 26/10, que também decide os `title_fase2`) | A02, A14, A15, A16, A17, A18, A19, A20 | +2 a +4: variantes PJ do pilar de pos 4,8 → 4 (+1); hub de migração consolidado 630 imp a 0,3–0,5% (+0,2); interlinking hub↔spokes (+0,5 a +1 por redistribuição) | 0,5–1 | 12/12: pilar e como-migrar 28 d vs 28 d; checar que nenhuma das 301 voltou a aparecer; checar `verificar-precos-build.mjs` limpo nas 4 reescritas |
| **3 — Claro → TIM, Oi, irmãos** | dez/2026, **só se** A07 estiver indexada com impressões e A10 tiver ≥1 clique | A11, A12, A13, A22; A23–A26 entregues ao dono | +1 a +3: Claro→TIM 150–400 imp (+0,1 a +0,4); Oi fixo (+0,1); 301 do top-5 devolve "claro empresas" ao irmão | 0,3–1 | jan/2027: 28 d da página Claro; "claro empresas" deve sumir do site TIM e subir no planoempresac |
| **Total após 3 ondas** | ~16 semanas | — | **+5 a +12 cliques/semana** | **1 a 3 leads/mês** [estimativa] | KPI final: cliques e leads (formulário/WhatsApp) das páginas do cluster, não impressões |

Fora deste repo, para o dono [estimativa com a curva do site TIM]: planoempresac +50 a +130 cliques/90 d só em snippet das duas consultas em pos 2–3; planovivo +18 a +98 cliques/90 d em "vivo empresas". Nenhum desses é lead de troca, mas são os maiores ganhos de clique da rede.

Riscos: (1) rastreio é o gargalo (8 de 16 artigos de set/2026 ficaram "Discovered – not indexed") — por isso **1 URL nova por onda** e o resto em URL já rastreada; (2) a cabeça "portabilidade tim" pode cair com a remoção do spoke genérico se a cauda anonimizada estiver nela e não no pilar — medir em 28 d e reverter a parte do corpo, não a URL; (3) páginas com marca de terceiro atraem reclamação se depreciarem — o §5 é a defesa; (4) a Oi muda de situação regulatória rápido — redigir só após verificar.

---

## Resumo (12 linhas)

1. O lead qualificado de concorrente não está nas cabeças ("vivo empresas" 7,8 mil imp, "portabilidade tim" 5,4 mil): está na cauda PJ — "portabilidade tim empresa/cnpj" (~650 imp em pos 4–5, 9 dos 11 cliques do cluster), "portabilidade da vivo/claro para tim" com qualificador fixo/empresa, e "multa/fidelidade vivo|claro empresas".
2. O site da TIM já recebe toda a família de troca e comparação da rede (8,5 mil + 2,3 mil imp); os irmãos recebem cabeça, comercial e suporte da própria marca e não têm "portabilidade para a {marca}".
3. Primeiro: 5 consolidações por 301 via `REDIRECIONADOS` (moldes com 0 cliques), reescrever `tim-portabilidade-cnpj` para o ângulo CNPJ/titularidade (85 cliques a 2,2% — não fundir), e limpar o corpo de `tim-vs-vivo` (R1 + depreciação).
4. Única URL nova da onda 1: `/portabilidade-da-vivo-para-a-tim-no-cnpj/`, absorvendo por 301 o molde "alternativas ao Vivo"; conteúdo específico da origem (onde consultar fidelidade, o que o pedido encerra, documentos, FAQ de pós-portabilidade).
5. Reescrever o molde "TIM Black vs Claro" como "TIM ou Claro Empresas" na URL já rastreada — é a lacuna do paralelismo (TIM×Vivo tem 1.827 imp; TIM×Claro, molde em pos 48).
6. Onda 2 (após a leitura de 26/10): corpo do pilar com H2 por operadora de origem, hub de migração (`como-migrar`) absorvendo três duplicatas, LP de contrato vigente como spoke de fidelidade/multa, hub comparativo linkando tudo.
7. Onda 3 condicionada: página Claro→TIM (com FAQ Nextel/Net), 301 do "top-5 alternativas à Claro" (que hoje canibaliza "claro empresas" do irmão), Oi reescrita para fixo/dados sem URL nova.
8. Dos irmãos: "vivo empresas" (7.848 imp, CTR 0,08%), "plano empresarial claro celular" e "claro net empresarial" (2.950 imp em pos 2–3 com **zero** cliques), "telefone claro empresas" (3 mil imp, 0 cliques), "net fixo empresa" (cai na TIM, é da Claro), "portabilidade para a {marca} no CNPJ" em cada irmão.
9. Não criar: Nextel, "são a mesma empresa" como artigo, variantes B2C (pré pago/controle/esim), páginas por cidade × origem, nada com "cancelar X empresas" no title.
10. Conformidade: marca de terceiro uma vez em title/H1, só em comparação ou destino de troca; nenhuma afirmação sobre a concorrente sem fonte datada; nenhum caso inventado; prazo da Anatel por referência, sem número.
11. Impacto: +5 a +12 cliques/semana e 1 a 3 leads/mês após três ondas [estimativa]; pequeno em cliques, alto em intenção — o site faz ~304 cliques/semana.
12. Riscos: rastreio (1 URL nova por onda), cauda anonimizada do spoke CNPJ (medir em 28 d antes de qualquer fusão), reclamação por depreciação (seguir §5), e o status regulatório da Oi (verificar antes de redigir).
