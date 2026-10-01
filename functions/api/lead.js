// Rota POST /api/lead — Pages Function.
//
// Este diretório `functions/` fica na RAIZ do projeto (não dentro de `build/`):
// é assim que o `wrangler pages deploy build` o encontra e compila junto com o
// Direct Upload. A configuração do site está em worker/lead.js; a lógica, no
// pacote @grupooc/lead-handler.
//
// `static/_routes.json` garante que SÓ `/api/*` invoca a Function: todo o resto
// do site continua servido como asset estático direto do CDN.
//
// O adaptador passa o `context` inteiro: é o `context.waitUntil` dele que mantém
// a gravação no CRM viva depois de a resposta ir embora — sem isso o visitante
// indo para o WhatsApp cancelaria a requisição no meio.
import { paraPagesFunction } from '@grupooc/lead-handler/pages';
import handler from '../../worker/lead.js';

export const onRequest = paraPagesFunction(handler);
