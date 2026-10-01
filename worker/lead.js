// Handler do POST /api/lead — pacote @grupooc/lead-handler (código em
// packages/lead-handler do repositório do Mail Service). O pacote nasceu deste
// worker/: CRM + Mail Service em paralelo, Turnstile, campo-armadilha,
// waitUntil, retentativas no CRM e alerta [CRM FALHOU]. Aqui fica só o que é
// deste site. Variáveis e secrets: ver docs/leads/README.md.
//
// Fica fora de functions/ de propósito: tudo lá dentro vira rota.
import { criarHandlerDeLead } from '@grupooc/lead-handler';

export default criarHandlerDeLead({
	site: 'timcorporativo.com.br',
	marca: 'TIM Corporativo',
	// LEAD_ORIGEM (secret do projeto) tem precedência, como antes.
	origem: 'Site TIM Corporativo',
	campos: [
		{ nome: 'linhas', rotulo: 'Nº de linhas', max: 60 },
		{ nome: 'operadora', rotulo: 'Operadora atual', max: 60 }
	]
});
