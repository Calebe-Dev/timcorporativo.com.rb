# Envio de leads — arquitetura e operação

**Endpoint:** `POST /api/lead` · **Destinos:** OC Hub CRM (Directus) + e-mail interno (Resend)
**Última atualização:** 2026-07-24

---

## 1. O problema que isto corrige

Até aqui o `ContactForm.svelte` **não enviava nada para lugar nenhum**: montava um
texto e abria `wa.me` no navegador do visitante. Consequência:

- Quem preenchia o formulário e **não concluía** o envio no WhatsApp (popup bloqueado,
  desistiu, não tinha WhatsApp no desktop) **virava lead perdido, sem registro algum**.
- Não havia base histórica, atribuição de campanha nem aviso para o comercial.

Agora o formulário **registra o lead antes** de abrir o WhatsApp. O WhatsApp continua
abrindo exatamente como antes — o funil não mudou, só deixou de vazar.

---

## 2. Arquitetura

```
Visitante → POST /api/lead (JSON)
  Pages Function (roda SÓ em /api/* — páginas seguem asset-first, SEO/perf intocados):
  1. Origin do próprio site?          não → 403   (evita virar relay de spam)
  2. Honeypot preenchido?             sim → 200 falso (não avisa o bot)
  3. Turnstile                        inválido → 403 · serviço fora do ar → passa marcado
  4. Validação server-side            falhou → 400
  5. EM PARALELO, independentes:
       ├── CRM: POST /items/oc_crm_lead   (fonte durável)
       └── E-mail: Resend → comercial     (aviso, Reply-To = lead)
  6. pelo menos 1 destino OK → 200 · os DOIS falharam → 502 (+ lead no log)
```

**Por que dois destinos independentes:** um CRM lento ou um Resend fora do ar não podem
derrubar o outro. Basta um funcionar para o lead estar salvo. Os dois carregam o **mesmo
`ID do lead`** (UUID gerado na Function) — é o que liga o e-mail ao registro no CRM sem
precisar sequenciar as duas chamadas.

**Se os dois falharem:** o visitante recebe erro, o conteúdo do lead vai para o log
(`wrangler pages deployment tail`) e o formulário cai no WhatsApp, que não depende de nós.

### Arquivos

| Arquivo | Papel |
| --- | --- |
| `functions/api/lead.js` | Rota da Pages Function (só o adaptador) |
| `worker/lead.js` | Orquestração: guardas, anti-spam, fan-out, resposta |
| `worker/validate.js` | Validação e normalização server-side |
| `worker/cms.js` | Gravação no OC Hub (Directus) |
| `worker/email.js` | Aviso interno via Resend |
| `worker/turnstile.js` | Verificação anti-spam |
| `static/_routes.json` | Garante que **só** `/api/*` invoca a Function |
| `src/lib/components/ContactForm.svelte` | Formulário: captura + WhatsApp |

> `worker/` fica **fora** de `functions/` de propósito: tudo dentro de `functions/`
> vira rota. E `functions/` fica na **raiz** do repositório (não em `build/`) — é lá
> que o `wrangler pages deploy build` do CI procura e compila.

---

## 3. Mapeamento para o CRM (`oc_crm_lead`)

| Formulário | Campo no CRM |
| --- | --- |
| nome | `nome` |
| e-mail | `email` |
| celular (só dígitos) | `telefone` |
| CNPJ (só dígitos) | `cpf_cnpj` |
| mensagem | `mensagem` |
| — | `origem` = "Site TIM Corporativo" (var `LEAD_ORIGEM`) |
| — | `site_origem_id` = `OCHUB_SITE_UUID` |
| — | `status` = `novo` |
| nº de linhas, operadora atual, página, UTMs, ID do lead | `observacoes` |

**Nº de linhas** e **operadora atual** não têm coluna própria em `oc_crm_lead` — vão em
`observacoes`. Se virarem critério de qualificação/filtro no CRM, o certo é criar as
colunas no Directus e promover os dois campos (mudança no CMS, não só aqui).

---

## 4. Configuração na Cloudflare

O site é **Cloudflare Pages** (projeto `timcorporativo`, Direct Upload via GitHub
Actions). Variáveis do build (`.env`, `$env/static/private`) **não** chegam à Function
em produção — a Function lê `context.env`, que vem dos secrets/vars do projeto Pages.

### Estado verificado em 2026-07-24

| Item | Estado |
| --- | --- |
| Projeto Pages `timcorporativo` | ativo, serve `timcorporativo.com.br` e `.pages.dev` |
| Secrets no projeto | eram **zero**; gravados `OCHUB_DIRECTUS_URL`, `OCHUB_SITE_UUID`, `LEAD_TO`, `LEAD_ORIGEM` |
| Buckets R2 | só `esquadrias-martins-leads` (outro projeto) |
| Zona DNS | na Cloudflare (`gina/mcgrory.ns.cloudflare.com`) |
| `send.timcorporativo.com.br` | **não existe** — sem SPF, sem DKIM, sem MX |
| CREATE público em `oc_crm_lead` | ativo (POST sem auth aceito) |
| Deploy automático (GitHub Actions) | **quebrado** — os secrets `OCHUB_*` não existem no repo GitHub, o build aborta. Todo deploy é manual pelo servidor. |

**Estado funcional em produção (verificado 24/07/2026):** `POST /api/lead` responde
`{"ok":true,"cms":true,"email":false}` — **a gravação no CRM está ativa**; o e-mail
segue desligado até existir `RESEND_API_KEY` (§5.1).

### Secrets a gravar

```bash
# ✅ já gravados em 24/07/2026
npx wrangler pages secret put OCHUB_DIRECTUS_URL --project-name=timcorporativo
npx wrangler pages secret put OCHUB_SITE_UUID    --project-name=timcorporativo
npx wrangler pages secret put LEAD_TO            --project-name=timcorporativo
npx wrangler pages secret put LEAD_ORIGEM        --project-name=timcorporativo

# ⏳ pendentes (dependem de conta Resend / widget Turnstile — §5)
npx wrangler pages secret put RESEND_API_KEY     --project-name=timcorporativo
npx wrangler pages secret put LEAD_FROM          --project-name=timcorporativo
npx wrangler pages secret put TURNSTILE_SECRET_KEY --project-name=timcorporativo
```

> ⚠️ **Secret novo só vale no deploy seguinte.** Depois de gravar, refaça o deploy
> (§6) — senão a Function continua rodando com o env antigo.

Opcionais: `OCHUB_LEADS_TOKEN` (só se a política pública do Directus for fechada) e
`LEAD_ORIGEM` (default já é "Site TIM Corporativo").

> O `wrangler` está autenticado **no servidor** (`ssh server`, conta
> `marketing.grupooc@gmail.com`), não no Mac. Rode de lá, ou faça `wrangler login` local.

Conferir depois: `npx wrangler pages secret list --project-name=timcorporativo`

### Degradação enquanto faltar configuração

O código não quebra com secret faltando — cada destino falha isolado e o outro segue:

| Faltando | Efeito |
| --- | --- |
| `RESEND_API_KEY` / `LEAD_FROM` / `LEAD_TO` | sem e-mail; **lead ainda vai para o CRM** |
| `OCHUB_DIRECTUS_URL` / `OCHUB_SITE_UUID` | sem CRM; **lead ainda vai por e-mail** |
| `TURNSTILE_SECRET_KEY` | verificação **pulada**; só honeypot + validação |
| tudo | 502 ao visitante, lead no log, WhatsApp segue funcionando |

---

## 5. Pendências que dependem do dono (não dá para fazer por código)

1. **Conta Resend + domínio de envio.** Criar/verificar `send.timcorporativo.com.br`
   (subdomínio isolado, para não mexer no MX do domínio principal) e publicar SPF/DKIM
   na zona Cloudflare. Mesmo padrão já usado em `esquadriasmartins.com.br`.
   → sem isso não há e-mail; o CRM continua recebendo.
2. **Turnstile.** Criar widget para `timcorporativo.com.br` + `timcorporativo.pages.dev`,
   aplicar a Site Key no formulário (script + campo `cf-turnstile-response`; a Function
   já lê esse campo) e só então gravar a Secret Key.

   > ⚠️ **A ordem importa e derruba o formulário se for invertida.** Com
   > `TURNSTILE_SECRET_KEY` gravada e o formulário **ainda sem** enviar o token, a
   > Function rejeita **todos** os leads com 403 (`erro: "captcha"`) — token ausente é
   > tratado como bot, de propósito. Faça sempre: **(a)** widget no formulário e deploy,
   > **(b)** conferir que o lead passa, **(c)** aí sim gravar a Secret Key.
   > Para reverter às pressas: `npx wrangler pages secret delete TURNSTILE_SECRET_KEY
   > --project-name=timcorporativo` volta a pular a verificação.
3. **Gravar os secrets** da §4.
4. **Confirmar `LEAD_TO`** — hoje o exemplo usa `contato@` e `comercial@grupooc.com.br`.

---

## 6. Operação

**Ver logs em produção** (falha de CRM/e-mail aparece aqui):

```bash
npx wrangler pages deployment tail --project-name=timcorporativo
```

Linhas relevantes: `[lead] falha no CRM:`, `[lead] falha no e-mail:` e
`[lead] PERDIDO — nenhum destino aceitou:` (esta última traz o lead inteiro em JSON,
para recuperação manual).

**Testar local:**

```bash
npm run build && npx wrangler pages dev build --port 8788
```

⚠️ O `wrangler pages dev` carrega o `.env` da raiz. Com `OCHUB_*` preenchido, um POST
válido **cria lead de verdade no CRM de produção**. Para testar sem sujar o CRM, use
payload inválido, honeypot preenchido, ou rode com um `.env` sem as `OCHUB_*`.

---

## 7. Limites do plano gratuito

- **Workers/Functions:** 100.000 requisições/dia — só `/api/*` conta (páginas são asset).
- **Resend free:** 100 e-mails/dia · 3.000/mês. 1 e-mail por lead ⇒ este é o gargalo real.
  Passando disso de forma consistente, avaliar Resend Pro ou Amazon SES.
- **Directus/OC Hub:** infraestrutura própria, sem cota da Cloudflare.

---

## 8. Melhorias possíveis (não implementadas)

- **Fallback em R2:** hoje, se CRM **e** e-mail falharem, o lead só existe no log
  (retenção limitada). Um bucket R2 como em `esquadriasmartins.com.br` daria durabilidade
  independente dos dois. Exige criar bucket + binding.
- **Rate limiting por IP** — Turnstile cobre a maior parte; um limite por IP fecha o resto.
- **Colunas próprias** no CRM para nº de linhas e operadora (ver §3).
