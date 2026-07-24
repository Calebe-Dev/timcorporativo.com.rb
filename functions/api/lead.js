// Rota POST /api/lead — Pages Function.
//
// Este diretório `functions/` fica na RAIZ do projeto (não dentro de `build/`):
// é assim que o `wrangler pages deploy build` do CI o encontra e compila junto
// com o Direct Upload. A lógica mora em `worker/` (fora de `functions/`) para
// não virar rota sem querer — aqui fica só o adaptador da assinatura do Pages.
//
// `static/_routes.json` garante que SÓ `/api/*` invoca a Function: todo o resto
// do site continua servido como asset estático direto do CDN, sem custo de
// invocação e sem mudar performance/SEO das páginas.

import { tratarLead } from '../../worker/lead.js';

export async function onRequest(context) {
	return tratarLead(context.request, context.env);
}
