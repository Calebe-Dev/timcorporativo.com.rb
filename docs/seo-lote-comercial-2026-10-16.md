# Propostas de snippet e abertura — timcorporativo.com.br (16/10/2026)

Modo: auditoria/onpage → nova_pagina (reescrita de title/meta/H1/resposta), escopo timcorporativo.com.br, dados do GSC via API até 13/10 (28d = 16/09–13/10; 90d = 16/07–13/10). Arquivo aplicável: `propostas-seo.json` neste diretório. URLs não mudam; nenhuma página nova.

## O fato que organizou o lote

Dos 16 candidatos avaliados, **7 tiveram title e meta trocados em 29/09 (`e114572`)**, há 17 dias, com leitura marcada para 26/10. Trocar o title dessas páginas de novo agora zeraria a medição do lote anterior. Por isso o JSON separa dois grupos:

- **Grupo A (3 páginas, fora do lote de 29/09)** — title, meta, H1, resposta e CTA agora.
- **Grupo B (7 páginas do lote de 29/09)** — só camadas aditivas agora: `resposta` (editorial.js), H1 onde está desalinhado do title que já está no ar, parágrafo de CTA onde o build não injeta LP. O title novo fica em `title_fase2`, para aplicar **só depois de 26/10** e só se a leitura não mandar reverter.

Curva de CTR do próprio site (90d, consultas ≥30 imp, sem as automatizadas): pos 4 → 3,75% · pos 5 → 1,25% · pos 6 → 0,52% · pos 7–9 → ~0,3% · pos 10 → 0,08%. É deprimida por consultas de marca (site oficial da TIM no topo), e é a régua da estimativa.

## Grupo A — title e meta agora

### 1. `plano-empresarial-tim-como-escolher-a-melhor-solucao`
- **Números:** "plano de internet empresarial" 1.114 imp/90d, **1.111 só nos últimos 28d**, posição **4,6**, **zero clique**. Página inteira: 0 cl / 1.737 imp em 28d. Title/meta ainda são do WordPress ("Como Escolher a Melhor Solução?" — superlativo).
- **Por quê:** é a única página do conjunto com intenção de compra clara em posição de clique e CTR zero. O Google já decidiu que ela responde a "plano de internet empresarial"; o snippet é que não diz isso.
- **Proposta:** title `Plano de internet empresarial TIM: como escolher` (48), meta sem superlativo, H1 alinhado, resposta de 57 palavras com os quatro critérios que o texto já usa, CTA após a intro para `/solucoes/seu-negocio-com-tim-empresas/`.
- **CMS (bloqueante para a verdade da página):** tabela com planos inexistentes ("TIM Empresa 2G/4G/Ilimitado/Pro") e franquias em GB — viola a R1 e é informação falsa. Remover. Abertura "O ano de 2025 chegou" e promessa de texto "engraçado".
- **Disputa:** `plano-empresarial-tim-como-escolher-o-melhor-para-2025` aparece para a mesma consulta em pos 10,7 (126 imp). Esta URL fica com ela; a de 2025 não ganha "internet" no title.

### 2. `tim-vs-vivo-empresas-2025-comparativo`
- **Números:** 1.827 imp/90d (1.001 em 28d), CTR 0,60%, pos 7,4. Consultas informacionais ("tim e vivo são a mesma empresa" 230 imp, pos 6,9).
- **Por quê:** a meta atual diz **"TIM 30-40% mais barato"** — percentual e superlativo, violação direta da R1. Entraria no lote mesmo sem ganho de clique. Title com "2025", "Qual é Melhor?" e "[Tabela Análise]".
- **Proposta:** title `TIM ou Vivo Empresas: comparativo de planos para CNPJ` (53), meta limpa, H1 alinhado, resposta neutra (duas operadoras distintas; critérios; quando a Vivo faz sentido — o artigo tem essa seção), CTA antes do último H2 para `/solucoes/trocar-de-operadora-com-contrato-vigente/`.
- **CMS:** corpo cheio de R$ 15.600/ano, "+R$ 50k", "30-40%", "5 Razões Por Que TIM Supera Vivo", "FALE COM UM CONSULTOR GRUPO OC". E o artigo não responde "são a mesma empresa?" — um item de FAQ com essa pergunta é a edição de maior retorno, mas é CMS.

### 3. `vivo-vs-claro-empresas-2025-comparativo-preco`
- **Números:** **5.250 imp/90d** (2.271 em 28d), CTR 0,32%, pos 7,6 — maior volume do conjunto com title do WordPress. Meta termina em "consultoria Grupo." (marca antiga truncada).
- **Proposta:** title `Vivo ou Claro Empresas: comparativo e a alternativa TIM` (55), meta e H1 novos, resposta com o veredito que o texto já dá (Vivo: estradas/rural/combos com fibra; Claro: urbano com preço como decisor; TIM como terceira opção), CTA para `/solucoes/contratar-tim-direto-ou-por-revenda-autorizada/` (a página já tem a seção "O Papel da Consultoria").
- **CMS:** "2025" em H2s, "via Grupo OC" em H2, FAQ sem a pergunta "são a mesma empresa?".

## Grupo B — lote de 29/09, só camadas aditivas agora

### 4. `portabilidade-tim-empresarial-como-trocar-de-operadora-e-manter-numero`
- "portabilidade tim" **4.315 imp/90d (3.001 em 28d), pos 10,4, 1 clique**; página 27 cl / 6.199 imp em 28d (antes 22 / 4.035). A irmã `…-guia-completo-trocar-operadora` já é 301 para cá: **esta fica com a consulta**.
- Title de 29/09 fica. A resposta de 14/09 não explica CPF × CNPJ, que é o que a maioria das 3.001 impressões procura; a nova (59 palavras) sai literalmente da seção "Portabilidade para a TIM no CPF ou no CNPJ: o que muda". Sem CTA: já linka a LP de contrato vigente.

### 5. `ip-fixo-empresarial-seguranca-acesso-remoto-guia`
- "banda larga empresarial" **643 imp em 28d, pos 5,7, zero clique** — consulta que surgiu depois do title de 29/09 (página saiu de 4/445 para 7/1.364). O corpo só trata banda larga como contraponto do IP dinâmico; forçar o title agora seria desonesto e zeraria a leitura.
- Agora: resposta que nomeia "banda larga empresarial" com o que o texto diz (IP dinâmico × fixo; Link Dedicado × TIM Fibra Empresa). **Fase 2:** `Banda larga empresarial com IP fixo: quando precisa` (51). Sem CTA: o build injeta a LP de clínicas.

### 6. `plano-tim-empresarial-black-controle-pre-comparativo`
- 5.854 imp/90d (3.212 em 28d, 12 cl). A maior consulta é a cabeça "tim empresarial" (1.926) — não entra em title. A comercial própria é **"plano empresarial celular" 265 imp, pos 9,7, zero clique**.
- Agora: resposta (abertura atual começa por "Um erro comum…", sem resposta direta) e CTA após a intro para `/solucoes/melhores-precos-tim-para-empresas/` (página não está no mapa ARTIGO_PARA_LP). **Fase 2:** `Plano empresarial de celular TIM: Black ou Controle no CNPJ` (59).

### 7. `tim-corporativo-planos-empresariais`
- "tim fibra empresas" 410 imp (pos 7,6) + "tim fibra empresa" 247 (8,3) + "internet pessoa juridica" 109 (6,9) + "tim empresas internet" 97 (8,1) = **863 imp/90d em posição de clique, 1 clique**. Disputa "tim fibra empresas" com a home (444 imp, pos 7,0); a home é intocável, então esta URL fica com a consulta.
- Agora: resposta (portfólio que o texto lista) e H1 só em caixa de frase. **Fase 2:** `TIM Fibra Empresas e telefonia: planos TIM Corporativo` (54). Sem CTA: já linka /#form, hub e guias.

### 8. `tim-ultrafibra-1-giga-vs-vivo-1-giga`
- 4.329 imp/90d (2.280 em 28d, 4 cl, CTR 0,18%). Dona da família genérica entre as três de UltraFibra: "tim ultrafibra" 218 (pos **4,2**), "ultrafibra" 239, "tim fibra" 293 (6,3), "tim ultrafibra 1 giga" 386.
- **H1 contradiz o title de 29/09** ("…2026: Qual Realmente Vale a Pena Para Seu Home Office?" vs "como comparar") e o corpo não tem nenhum link interno. Agora: H1 alinhado, resposta, CTA antes do último H2 com `/#contato` (contratação no CNPJ, que a conclusão já menciona sem link) + LP de 5G sem fibra. **Fase 2:** `…: qual escolher` (57). "1 Giga" é nome de plano, já presente no title de 29/09.

### 9. `tim-ultra-fibra-empresarial-vale-a-pena`
- Impressões saltaram de 89 para **1.009 em 28d, zero clique** (pos 9,6); 492 são "tim ultracombo vale a pena" (combo residencial que o artigo não cita — não perseguir). H1 antigo ("Uma Análise Técnica Profunda") contradiz o title e está dentro de `<p>`.
- Agora: H1 alinhado mantendo "vale a pena" (é o ângulo pelo qual a página aparece), resposta com o que o texto afirma (quando a fibra resolve; quando falta CIR, rotas e reparo em contrato → link dedicado). Sem CTA: build injeta a LP de hotéis.
- **CMS:** `<p><h1>…</h1></p>`, `div#ochub-banners-top` morto, H2 "Perguntas Frequentes (AEO)".

### 10. `tim-ultrafibra-planos-2026-preco-cobertura`
- "tim ultrafibra preco" **621 imp/90d (574 em 28d), pos 9,9, zero clique**; "tim ultrafibra cobertura" 120. Entre as três de UltraFibra, **esta fica com preço/cobertura/CEP** (as outras duas somam 110 imp nessas consultas).
- Agora: resposta ("não há tabela única de preço…", sem valores) e H1 sem o "em 2026" que a consulta não tem. **Fase 2:** `TIM UltraFibra: preço, planos e cobertura no seu endereço` (57). Sem CTA: build injeta a LP de 5G.

## Disputas decididas (sem redirect)
- **Portabilidade:** `…como-trocar-de-operadora-e-manter-numero` fica com "portabilidade tim" (a irmã já é 301).
- **UltraFibra (3 páginas):** 1 Giga = família genérica ("tim ultrafibra", "ultrafibra", "tim fibra", "1 giga"); planos-2026 = preço/cobertura/CEP; vale-a-pena = ângulo empresarial. Nenhum title passa a disputar a consulta da outra.
- **"plano de internet empresarial":** `…a-melhor-solucao` (pos 4,6) fica; `…o-melhor-para-2025` (pos 10,7) não ganha "internet".
- **"tim fibra empresas":** `tim-corporativo-planos-empresariais` fica (home intocável).
- **Cabeças "tim empresas / tim empresa / tim empresarial":** nenhum title novo as contém (validado por regex).

## Fora do lote (motivo em uma linha no JSON)
tim-black-empresa (reescrito 29/09, 1→5 cl em 28d, esperar 26/10) · internet-tim-empresa (1.043 das 1.673 imp são "tim fibra empresarial", automatizada) · plano-empresarial-tim-comparativo-precos-escolher (cabeças) · empresas-tim-solucoes (561 imp de "tim empresas", disputa com a home) · consultor (CTR 1,04%) · voip-qos (CTR 1,22%, título de 73 chars é só fase 2) · tim-fibra-empresas-cnpj (765 imp são "tim fibra telefone", suporte) · as 6 excluídas por regra.

## Estimativa (conta no JSON, campo `estimativa`)
Impressões 28d ÷ 4 × (CTR-alvo − CTR atual), CTR-alvo pela curva do site. Página 1: 278 imp/sem em pos 4,6 × 1,0–2,5% = **+2,8 a +7,0 cl/sem**. Vivo×Claro: 568/sem × (0,5–0,7% − 0,31%) = +1,1 a +2,2. TIM×Vivo: +0,8 a +1,3. 1 Giga: +0,7 a +1,8. Vale-a-pena, planos-2026, portabilidade e as três só-resposta: 0 a +5,9 somadas. **Total agora: +5 a +18 cliques/semana** sobre ~300/sem do site. Fase 2 (5 titles após 26/10): +1,5 a +3,5 adicionais. Em leads, o que pesa é a página 1 (intenção de compra, pos 4,6); as demais valem mais pela limpeza de R1 e pelo CTA.

## Resumo em 10 linhas
1. Lote: 10 páginas — 3 com title/meta/H1/resposta/CTA agora (A) e 7 do lote de 29/09 só com H1/resposta/CTA agora e `title_fase2` para depois de 26/10 (B).
2. Prioridade 1 de negócio: `plano-empresarial-tim-como-escolher-a-melhor-solucao` — 1.111 imp/28d em pos 4,6 com zero clique para "plano de internet empresarial".
3. Correção obrigatória de R1: meta de `tim-vs-vivo` com "30-40% mais barato" sai, mesmo sendo página informacional.
4. Estimativa: +5 a +18 cliques/semana agora; +1,5 a +3,5 na fase 2; ganho em leads concentrado na página 1.
5. Risco 1: trocar H1 em páginas do lote de 29/09 pode mexer na posição que a leitura de 26/10 mede — mitigado porque só 2 H1s mudam de verdade (1 Giga, vale-a-pena) e os dois contradizem o title já no ar.
6. Risco 2: curva de CTR do site é deprimida por consultas "tim …" com o site oficial no topo; alvo da página 1 pode ser otimista.
7. Risco 3: "ultracombo" (492 imp) e "banda larga empresarial" (643) são consultas que o texto não cobre — não perseguidas no title; só nomeadas na resposta onde é honesto.
8. Nada de redirect, slug novo ou página nova; cabeças "tim empresas/empresa/empresarial" fora de todo title (validado por regex no gerador).
9. Fica para o CMS: tabela falsa com GB na página 1; R$/%/superlativos e "2025" nos dois comparativos; FAQ "são a mesma empresa?" nos dois comparativos; `<p><h1>` e banner morto em vale-a-pena; "(AEO)" em H2.
10. Reauditoria: snippet dos 3 do grupo A em 28 dias (13/11); grupo B junto com a leitura de 26/10, e só então decidir `title_fase2`.
