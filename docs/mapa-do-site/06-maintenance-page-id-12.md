# Página de manutenção — ID 12

`https://timcorporativo.com.br/maintenance-page/` — **privada**

## Ficha técnica

| Campo | Valor |
| --- | --- |
| ID | 12 |
| Slug | `maintenance-page` |
| Status | **`private`** |
| Template | `templates/wpmm-page-template.php` (plugin WP Maintenance Mode) |
| Editor | clássico — 10.742 caracteres de conteúdo |
| Autor | ID 1 |
| Publicada | 2022-09-13 18:23 |
| Modificada | **2022-09-19 14:40** — intocada há quase 4 anos |

Por ser `private`, não é acessível publicamente, **não aparece no `page-sitemap.xml`** e não é indexável. Está correto assim.

## Conteúdo

> **Nosso site está em manutenção**
>
> Nós estamos atualizando o nosso site, e precisamos estar offline por enquanto. Logo estaremos de volta com as melhores ofertas!
>
> **Contato**
> Envie-nos uma mensagem e lhe retornaremos assim que possível!
>
> Nome* · E-mail* · Sua Mensagem
>
> Este formulário coleta seu nome e e-mail para que possamos entrar m contato com você. Confira a nossa política de privacidade para entender completamente como protegemos e gerenciamos seus dados enviados.
>
> [Enviar]

## Observações

1. **Erro de digitação no aviso de privacidade:** "para que possamos entrar **m** contato com você" (falta o "e" de "em"). Só aparece se o modo manutenção for ativado.
2. O texto menciona "nossa política de privacidade", mas **não existe página de política de privacidade publicada no site** — as únicas 4 páginas públicas são home, planos, Meu TIM Empresas e conteúdos.
3. O template pertence ao plugin **WP Maintenance Mode** (`wpmm-page-template.php`). O site está no ar normalmente, então o modo manutenção não está ativo. Não foi possível confirmar pelo HTML se o plugin segue instalado — ele não injeta assets no frontend quando inativo. Verificar em `wp-admin → Plugins`.

## Ação sugerida

Nenhuma urgência de SEO. Se o plugin de manutenção não for mais usado, a página pode ser removida junto com ele. Se for mantida, vale corrigir o erro de digitação e, principalmente, **publicar de fato uma política de privacidade** — que hoje é referenciada mas não existe (relevante para LGPD, já que os formulários do site coletam nome, e-mail, celular e CNPJ).
