# Perfis sociais — TIM Corporativo (2026-10-16)

O que entra em cada campo de perfil no **LinkedIn** e no **TikTok** (perfis novos) e no **Facebook** e no **Instagram** (perfis existentes, a revisar), para que as quatro redes digam a mesma coisa que o site, o Google Business Profile e o JSON-LD.

Fontes: `src/lib/site.js` (marca, NAP, description, keywords), `src/lib/schema.js` (Organization), o plano de Instagram de 02/10/2026 (sinais do GSC) e as páginas que mais rankeiam.

---

## 1. Regras que valem para as 4 redes

### 1.1 Identidade (copiar exatamente; nada de variar)

| Campo | Valor | Origem |
|---|---|---|
| Marca | **TIM Corporativo** | `site.name` |
| Posicionamento | **Representante autorizado TIM para empresas** | `site.tagline` |
| Razão social | OC Telecomunicações LTDA | `site.legalName` |
| CNPJ | 55.495.228/0001-91 | `contact.cnpj` |
| Endereço | R. Manoel Novaes, 922 – Centro, Jumirim/SP – 18535-001 | `contact.address` |
| Telefone | (15) 3100-0058 | `contact.phoneLabel` |
| WhatsApp | (15) 99651-0375 | `contact.whatsappLabel` |
| Site | https://timcorporativo.com.br | `site.url` |
| Experiência | +15 anos em telecom empresarial (da equipe) | `contact.yearsExperience` |
| Área atendida | Brasil, com operação em Sorocaba e região | `areaServed` + páginas locais |

O endereço é **um só**: Jumirim. Não cadastrar Sorocaba como segunda unidade em nenhuma rede (a decisão NAP-JUMIRIM de 10/09/2026 vale aqui também). Sorocaba aparece só no texto, como área atendida.

### 1.2 Handle

- Padrão nas quatro redes: **@timcorporativo** · LinkedIn: `linkedin.com/company/timcorporativo`
- Se estiver ocupado, nesta ordem: `@timcorporativo.br` → `@timcorporativobr` → `@timcorporativo_pj`
- **Nunca usar "oficial"** no handle nem no nome. Somos representante autorizado, não a operadora.

### 1.3 Não parecer o perfil da TIM

LinkedIn, TikTok e Meta derrubam ou restringem perfis que se passam por outra marca. Três salvaguardas:

1. "Representante autorizado TIM" na **primeira linha** de toda bio/tagline.
2. Avatar com a assinatura **TIM Corporativo** (não o logo puro da TIM). Mesma arte nas quatro redes.
3. Não pedir selo de verificação como se fosse a TIM. Não marcar a TIM S.A. como empresa-mãe no LinkedIn.

### 1.4 Palavras-chave (as mesmas do site)

Por ordem de demanda no GSC (90d): **tim empresas** · **plano tim empresa / plano empresarial** · **tim black empresa** · **tim fibra empresa / ultrafibra** · **link dedicado tim** · **portabilidade tim empresa** · **ativar chip tim** · **meu tim empresas** · **tim corporativo** · **plano tim cnpj / pj / mei**.

Onde elas pesam em cada rede:

| Rede | Campos que a busca interna lê | O Google indexa? |
|---|---|---|
| Instagram | Nome (não o @), bio, legenda, texto alternativo, texto falado/legendado do Reel | Sim, posts públicos de contas profissionais |
| TikTok | Nome, bio, legenda, texto na tela, **fala** (legenda automática) | Sim, vídeos aparecem na SERP |
| LinkedIn | Nome, tagline, Sobre, especialidades, posts | Sim; o snippet é tagline + início do Sobre |
| Facebook | Nome, categoria, bio, Sobre, serviços, posts | Sim; a página entra na SERP de marca |

### 1.5 Sem preço

Mesma regra do site (R1): nenhuma bio, destaque ou post fixado com preço. A venda é por proposta.

### 1.6 Links com rastreio

Todo link de perfil leva UTM, e todo WhatsApp leva uma frase que denuncia a origem. Assim o GA4 separa as redes e o comercial sabe de onde veio o lead que chegou direto no WhatsApp.

| Rede | Link do site | Texto do WhatsApp |
|---|---|---|
| Instagram | `https://timcorporativo.com.br/?utm_source=instagram&utm_medium=social&utm_campaign=perfil` | Olá! Vim pelo Instagram e quero saber dos planos TIM Empresa. |
| TikTok | `https://timcorporativo.com.br/?utm_source=tiktok&utm_medium=social&utm_campaign=perfil` | Olá! Vim pelo TikTok e quero saber dos planos TIM Empresa. |
| LinkedIn | `https://timcorporativo.com.br/solucoes?utm_source=linkedin&utm_medium=social&utm_campaign=perfil` | Olá! Vim pelo LinkedIn e quero uma proposta TIM Empresa. |
| Facebook | `https://timcorporativo.com.br/?utm_source=facebook&utm_medium=social&utm_campaign=perfil` | Olá! Vim pelo Facebook e quero saber dos planos TIM Empresa. |

Links de WhatsApp prontos:

- Instagram: `https://wa.me/5515996510375?text=Ol%C3%A1!%20Vim%20pelo%20Instagram%20e%20quero%20saber%20dos%20planos%20TIM%20Empresa.`
- TikTok: `https://wa.me/5515996510375?text=Ol%C3%A1!%20Vim%20pelo%20TikTok%20e%20quero%20saber%20dos%20planos%20TIM%20Empresa.`
- LinkedIn: `https://wa.me/5515996510375?text=Ol%C3%A1!%20Vim%20pelo%20LinkedIn%20e%20quero%20uma%20proposta%20TIM%20Empresa.`
- Facebook: `https://wa.me/5515996510375?text=Ol%C3%A1!%20Vim%20pelo%20Facebook%20e%20quero%20saber%20dos%20planos%20TIM%20Empresa.`

Em posts, trocar `utm_campaign=perfil` pelo tema (`utm_campaign=link-dedicado`, `utm_campaign=ativar-chip`…).

### 1.7 Papel de cada rede (para não repetir o mesmo post em todas)

| Rede | Público | Função | Funil |
|---|---|---|---|
| **LinkedIn** | Decisor de média e grande empresa: dono, financeiro, compras, TI | Autoridade e proposta de alto valor (link dedicado, frota de linhas, auditoria de fatura, 5G) | MOFU/BOFU, ticket alto |
| **TikTok** | Dono de PME e MEI, gestor que procura "como fazer" | Ser achado na busca do TikTok com tutoriais curtos | TOFU → WhatsApp |
| **Instagram** | PME, MEI, clientes atuais | Vitrine, prova social, carrossel tutorial, Reels | Marca + BOFU |
| **Facebook** | Empresário local, Sorocaba e região; público mais velho | Avaliações, WhatsApp, anúncios Meta, alcance regional | BOFU local |

---

## 2. LinkedIn (perfil novo — Página de empresa)

Criar em linkedin.com/company/setup/new com o perfil pessoal do administrador (Calebe, que já é o autor dos artigos no site). Adicionar um segundo administrador para não perder o acesso.

| Campo | Preencher |
|---|---|
| Nome | **TIM Corporativo** |
| URL pública | `linkedin.com/company/timcorporativo` |
| Site | `https://timcorporativo.com.br/solucoes?utm_source=linkedin&utm_medium=social&utm_campaign=perfil` |
| Setor | Telecomunicações |
| Tamanho | (número real de pessoas da equipe) |
| Tipo | Empresa privada |
| Fundada em | 2024 (abertura da OC Telecomunicações; os 15 anos são da equipe e vão no texto) |
| Localidade | Uma só: R. Manoel Novaes, 922 – Centro, Jumirim, SP, 18535-001 (principal) |
| Telefone | +55 15 3100-0058 |
| Logo | Avatar TIM Corporativo, 400×400 |
| Capa | 1128×191, frase "Planos TIM Empresas para o seu CNPJ", sem texto nas bordas (o celular corta) |
| Botão personalizado | **Fale conosco** → `https://timcorporativo.com.br/?utm_source=linkedin&utm_medium=social&utm_campaign=botao#contato` |

### Tagline (114/120)

```
Representante autorizado TIM | Planos TIM Empresas, fibra, link dedicado e 5G para empresas, com proposta por CNPJ
```

### Sobre / Visão geral (até 2.000)

As duas primeiras linhas são o que aparece no Google e na prévia do LinkedIn; por isso abrem com o que a empresa é e para quem.

```
A TIM Corporativo é representante autorizado TIM para empresas. Ajudamos negócios de todos os portes a contratar planos TIM Empresas com atendimento consultivo e proposta feita para o seu CNPJ.

O que atendemos:
• Telefonia móvel corporativa — TIM Black Empresa para equipes, vendedores e gestores, com aparelhos no CNPJ.
• Internet fixa — TIM Fibra Empresa e TIM UltraFibra para lojas, escritórios e sistemas online.
• Link dedicado TIM — banda garantida e SLA para operações que não podem parar: indústria, clínicas, call center, logística e varejo.
• 5G empresarial e redes privativas, chip M2M e IoT para rastreamento e telemetria.
• Portabilidade sem trocar de número, renovação de contrato e auditoria de fatura de telecom.

Como funciona:
1. Diagnóstico gratuito do que a empresa usa hoje (linhas, operadora, fatura).
2. Proposta comparando TIM Black Empresa, Fibra, UltraFibra e link dedicado para o seu perfil.
3. Documentação simples: CNPJ ativo e documentos do representante legal.
4. Ativação e portabilidade acompanhadas até as linhas funcionarem.

Para quem: MEI, pequenas, médias e grandes empresas, com descontos progressivos a partir de 10 linhas. Atendemos todo o Brasil, com operação em Sorocaba e região.

Nossa equipe soma mais de 15 anos em gestão de telecomunicações, auditoria e consultoria em telefonia empresarial.

Peça sua proposta: timcorporativo.com.br · WhatsApp (15) 99651-0375

TIM Corporativo é operado pela OC Telecomunicações LTDA (CNPJ 55.495.228/0001-91), representante autorizado TIM. Não somos a operadora TIM S.A.
```

### Especialidades (20 itens, 430/500)

```
TIM Empresas, TIM Black Empresa, TIM Fibra Empresa, TIM UltraFibra, Link dedicado, Telefonia corporativa, Plano empresarial, Portabilidade empresarial, Gestão de linhas corporativas, Auditoria de fatura de telecom, Internet empresarial, 5G empresarial, Rede privativa 5G, Chip M2M e IoT, Aparelhos corporativos, PABX em nuvem, Renovação de contrato TIM, Telecom para indústria, Telecom para varejo, Consultoria em telecomunicações
```

### Hashtags da página (o LinkedIn deixa seguir 3)

`#TelefoniaCorporativa` · `#LinkDedicado` · `#TelecomB2B`

### Primeiros posts (cada um espelha uma página que já rankeia)

| # | Tema | Formato | Página de destino |
|---|---|---|---|
| 1 | Quem somos e o que a consultoria resolve | Post de apresentação + fixar no topo | `/solucoes` |
| 2 | Quanto custa ficar 1 hora sem internet (link dedicado × downtime) | Documento/carrossel PDF | `/link-dedicado-e-caro-comparativo-de-custo-beneficio-vs-prejuizo-de-downtime/` |
| 3 | 5 perguntas antes de contratar link dedicado | Texto longo | `/5-perguntas-para-fazer-ao-vendedor-antes-de-contratar-link-dedicado/` |
| 4 | Sua fatura de telecom tem gordura? Auditoria em 4 passos | Carrossel PDF | `/solucoes/auditoria-de-fatura-de-telecom` |
| 5 | Plano corporativo para grandes empresas: o que negociar | Texto longo | `/solucoes/plano-corporativo-para-grandes-empresas` |
| 6 | Trocar de operadora com contrato vigente | Carrossel | `/solucoes/trocar-de-operadora-com-contrato-vigente` |

No LinkedIn, link no corpo do post reduz alcance: publicar o texto completo e pôr o link no primeiro comentário.

Ritmo: 2 posts por semana na página; a mesma pauta repostada pelo perfil pessoal do consultor (no LinkedIn, perfil pessoal alcança bem mais que página).

---

## 3. TikTok (perfil novo — conta Business)

Criar a conta e mudar para **Conta comercial** (Configurações e privacidade → Conta). O campo de site na bio depende da conta comercial; se não aparecer de início, o TikTok o libera depois — até lá, a bio aponta "link nos comentários fixados" e o WhatsApp vai na legenda.

| Campo | Preencher |
|---|---|
| Nome (26/30) | **TIM Corporativo · Empresas** |
| Usuário | @timcorporativo |
| Categoria | Telecomunicações (ou a mais próxima: Serviços empresariais) |
| Site | `https://timcorporativo.com.br/?utm_source=tiktok&utm_medium=social&utm_campaign=perfil` |
| E-mail / telefone de contato | (15) 99651-0375 |
| Avatar | Mesma arte das outras redes, 200×200 mínimo |

### Bio (73/80)

```
Representante autorizado TIM
Planos TIM Empresas p/ CNPJ e MEI
Dúvidas? 👇
```

### Como fazer SEO no TikTok

O TikTok funciona como buscador para "como fazer". Para cada vídeo:

1. **Falar a palavra-chave nos 3 primeiros segundos** ("Como ativar o chip TIM Empresa…"). A legenda automática é indexada.
2. Mesma frase como **texto na tela** na abertura e como **primeira linha da legenda**.
3. Legenda de 2 a 4 linhas com a pergunta respondida, depois o CTA para o WhatsApp, depois 3 a 5 hashtags.
4. Capa com o título legível: o TikTok mostra a capa na grade de busca.
5. Ativar legenda automática em todo vídeo.

### Primeiros vídeos (as maiores demandas de busca do site)

| # | Gancho falado (0–3 s) | Página que o vídeo espelha | Hashtags |
|---|---|---|---|
| 1 | "Como ativar o chip TIM Empresa em 1 minuto" | `/como-ativar-chip-tim-empresa-guia-completo-de-ativacao-corporativa/` | #ativarchip #timempresas #chiptim #cnpj #dicas |
| 2 | "Perdeu o chip da empresa? Dá pra pedir outro com o mesmo número" | `/como-pedir-um-chip-com-o-mesmo-numero-tim-guia-completo-para-empresas-2025/` | #chiptim #segundaviachip #timempresas #mei |
| 3 | "Celular da empresa em 24x no CNPJ: como funciona" | `/ofertas-aparelhos-tim-empresas-celular-cnpj/` | #celularcorporativo #timempresas #cnpj #mei |
| 4 | "Como entrar no Meu TIM Empresas e ver a fatura" | `/tim-empresas-login-guia-gestao-faturas-linhas-portal/` | #meutim #timempresas #fatura #pj |
| 5 | "Trocar de operadora sem perder o número da empresa" | `/portabilidade-tim-empresarial-como-trocar-de-operadora-e-manter-numero/` | #portabilidade #timempresas #empresas |
| 6 | "Internet da empresa caiu de novo? Isso é link dedicado" | `/link-dedicado-tim-o-que-e-quando-contratar/` | #linkdedicado #internetempresarial #timempresas |

Fixar os vídeos 1, 3 e 6 no topo do perfil (suporte com mais busca, compra, ticket alto). Ritmo: 3 vídeos de 20–45 s por semana.

---

## 4. Instagram (perfil existente — revisar)

| Campo | Preencher |
|---|---|
| Nome (26/30) | **TIM Corporativo · Empresas** — o nome entra na busca do Instagram; o @ quase não pesa |
| Usuário | @timcorporativo (se o atual for outro, avaliar a troca: o Instagram redireciona o @ antigo por um tempo, mas links antigos quebram) |
| Categoria | Empresa de telecomunicações |
| Botões de contato | WhatsApp (15) 99651-0375 · Ligar (15) 3100-0058 · Endereço Jumirim/SP |
| Avatar | Arte TIM Corporativo, 320×320 |

### Bio (128/150)

```
Representante autorizado TIM 📶
Planos TIM Empresas p/ CNPJ e MEI
TIM Black · Fibra · Link dedicado
Proposta grátis no WhatsApp 👇
```

### Links (até 5, nesta ordem)

1. **Site** — `https://timcorporativo.com.br/?utm_source=instagram&utm_medium=social&utm_campaign=perfil`
2. **WhatsApp** — link do item 1.6
3. **Aparelhos em 24x** — `https://timcorporativo.com.br/ofertas-aparelhos-tim-empresas-celular-cnpj/?utm_source=instagram&utm_medium=social&utm_campaign=bio-aparelhos`
4. **Link dedicado** — `https://timcorporativo.com.br/link-dedicado-tim-o-que-e-quando-contratar/?utm_source=instagram&utm_medium=social&utm_campaign=bio-link-dedicado`
5. **Ativar chip** — `https://timcorporativo.com.br/como-ativar-chip-tim-empresa-guia-completo-de-ativacao-corporativa/?utm_source=instagram&utm_medium=social&utm_campaign=bio-ativar-chip`

### Destaques

Planos · Fibra · Link dedicado · Aparelhos · Portabilidade · Dúvidas · Clientes

Capas no mesmo padrão visual (azul do site, ícone branco). "Dúvidas" responde ativar chip, mesmo número e Meu TIM Empresas; "Clientes" junta prints de avaliações do Google.

### Ajustes no plano de 02/10/2026

- **Hashtags: no máximo 5 por post.** O Instagram passou a limitar a cinco por post e Reel; os 6 posts do plano têm 10 cada. Manter as 5 mais específicas (ex.: post 1 → `#timempresas #planoempresarial #aparelhocorporativo #telefoniaempresarial #cnpj`).
- Palavra-chave na **primeira linha** da legenda (é o que aparece no Google e no preview).
- **Texto alternativo** personalizado em cada imagem (Configurações avançadas → Acessibilidade), com a palavra-chave.
- Nos Reels, falar a palavra-chave no início: o Instagram também transcreve.

---

## 5. Facebook (página existente — revisar)

| Campo | Preencher |
|---|---|
| Nome | **TIM Corporativo** (igual ao nome no Google Business Profile; se o GBP estiver com outro nome, alinhar os dois) |
| Usuário | @timcorporativo → `facebook.com/timcorporativo` |
| Categorias (até 3) | Empresa de telecomunicações · Serviço empresarial · Consultor de negócios (ou as mais próximas que o Facebook oferecer) |
| Endereço | R. Manoel Novaes, 922 – Centro, Jumirim/SP, 18535-001 |
| Área de atuação | Sorocaba e região + "Brasil" |
| Telefone | (15) 3100-0058 |
| WhatsApp | Conectar o número (15) 99651-0375 à página e usar o botão **Enviar mensagem pelo WhatsApp** |
| Site | link com UTM do item 1.6 |
| Horário | O mesmo do Google Business Profile |
| Capa | 1640×624 (o Facebook recorta para 820×312 no computador e mostra mais altura no celular): frase no centro |

### Bio / Introdução (100/100)

```
Representante autorizado TIM. Planos TIM Empresas, TIM Black, Fibra e link dedicado para CNPJ e MEI.
```

### Sobre / Descrição longa

Usar os três primeiros parágrafos do "Sobre" do LinkedIn (seção 2), sem a lista de especialidades. Fechar com a linha de transparência (razão social, CNPJ, "não somos a operadora TIM S.A.").

### Serviços (seção Serviços da página)

| Serviço | Descrição curta | Link |
|---|---|---|
| TIM Black Empresa | Planos móveis para equipes, com aparelhos no CNPJ | `/` |
| TIM Fibra Empresa e UltraFibra | Internet fixa para loja e escritório, conforme endereço | `/` |
| Link dedicado TIM | Banda garantida e SLA para operação crítica | `/link-dedicado-tim-o-que-e-quando-contratar/` |
| Portabilidade empresarial | Troque de operadora sem trocar de número | `/portabilidade-tim-empresarial-como-trocar-de-operadora-e-manter-numero/` |
| Auditoria de fatura | Revisão da fatura de telecom para cortar cobranças | `/solucoes/auditoria-de-fatura-de-telecom` |
| TIM Empresas em Sorocaba | Atendimento para empresas de Sorocaba e região | `/solucoes/tim-empresas-em-sorocaba` |

### O que mais

- **Avaliações** ligadas na página; pedir avaliação no Facebook a quem já avaliou no Google.
- Post fixado: apresentação + botão WhatsApp.
- O Facebook é a rede que dá alcance regional: posts com "Sorocaba e região" no texto e anúncios Meta segmentados por raio (Sorocaba + Jumirim) com objetivo "Mensagens no WhatsApp".

---

## 6. Amarração com o site (depois que os perfis existirem)

1. Gravar as URLs em `contact` no `src/lib/site.js` (`facebook`, `instagram`, `linkedin`). O `Footer` já mostra os ícones de Instagram e LinkedIn quando a chave existe, e o `organizationNode()` em `src/lib/schema.js` já põe Facebook, Instagram e LinkedIn no `sameAs`.
2. **TikTok** não tem chave nem ícone hoje: acrescentar `contact.tiktok` no `sameAs` e um ícone no `Footer`.
3. Usar as URLs **limpas** (sem UTM) no `sameAs` e no rodapé: `sameAs` identifica a entidade, não é link de campanha.
4. No Google Business Profile, preencher os links das redes sociais (campo "Perfis sociais") com as mesmas URLs.
5. Conferir, na mesma rodada, que nome, endereço e telefone estão idênticos no site, no GBP e nas quatro redes.

---

## 7. Checklist de lançamento

- [ ] Reservar @timcorporativo nas quatro redes (mesmo que alguma fique parada)
- [ ] Uma arte de avatar e um padrão de capa para todas
- [ ] LinkedIn: página criada, 2 administradores, tagline, Sobre, especialidades, botão
- [ ] TikTok: conta comercial, nome, bio, link (ou CTA na legenda até o link liberar)
- [ ] Instagram: nome, bio, 5 links, destaques, hashtags limitadas a 5
- [ ] Facebook: nome igual ao GBP, categorias, WhatsApp conectado, serviços, avaliações
- [ ] Testar cada link com UTM e ver a origem certa no GA4 (Tempo real)
- [ ] Testar cada link de WhatsApp: a frase de origem aparece pronta
- [ ] Gravar as URLs em `site.js` e incluir TikTok no `sameAs`/rodapé
- [ ] Primeiro post de cada rede publicado e fixado
- [ ] Depois de 30 dias: comparar sessões e leads por `utm_source` no GA4 e contar no comercial os WhatsApp com "Vim pelo…"

---

## Pendências para o dono decidir

- **E-mail público.** Os e-mails do site são `@grupooc.com.br`, marca que o site esconde desde 09/09/2026. Nas redes, ou fica sem e-mail (WhatsApp e telefone bastam) ou se cria um `contato@timcorporativo.com.br`.
- **Avatar com o logo da TIM.** O site usa o logo TIM como logotipo; nas redes isso aumenta o risco de denúncia por imitação de marca. Recomendado: assinatura "TIM Corporativo" com o selo "Representante autorizado".
- **Nota no Google.** O plano de 02/10 cita 4,9★ e 110 avaliações; conferir o número do dia antes de pôr em post ou destaque.
- **Handles atuais** do Facebook e do Instagram: se não forem @timcorporativo, decidir se vale trocar.
