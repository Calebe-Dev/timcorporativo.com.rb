<script>
	import BlogShell from '$lib/components/BlogShell.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { site, contact } from '$lib/site.js';

	// Vem do +layout.server.js da raiz — alimenta o mapa do site.
	let { data } = $props();

	// Data da última revisão. Atualize sempre que o tratamento de dados mudar —
	// é o que permite ao titular saber qual versão aceitou.
	const atualizadoEm = '24 de julho de 2026';

	const titulo = 'Política de Privacidade | TIM Corporativo';
	const descricao =
		'Como o Grupo OC coleta, usa, compartilha e protege os dados enviados pelo site TIM Corporativo, e como exercer seus direitos previstos na LGPD.';

	const h2 = 'mt-10 mb-3 text-xl font-bold text-slate-900';
	const h3 = 'mt-6 mb-2 text-base font-semibold text-slate-900';
	const p = 'mb-3 text-sm leading-relaxed text-slate-700';
	const ul = 'mb-3 ml-5 list-disc space-y-1 text-sm leading-relaxed text-slate-700';
	const th = 'border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900';
	const td = 'border border-slate-200 px-3 py-2 align-top';
</script>

<!-- Head central: canonical, OG com imagem, Twitter Card e JSON-LD (WebPage +
     breadcrumb; sem Service/FAQPage — o componente omite ambos fora da home). -->
<Seo title={titulo} description={descricao} path="/politica-de-privacidade" />

<BlogShell
	subtitulo="Política de Privacidade"
	artigos={data.artigosRecentes}
	total={data.totalArtigos}
>
	<article class="mx-auto max-w-3xl">
		<h1 class="mb-2 text-3xl font-bold text-slate-900">Política de Privacidade</h1>
		<p class="mb-8 text-sm text-slate-500">Última atualização: {atualizadoEm}</p>

		<p class={p}>
			Esta política explica como tratamos os dados pessoais coletados no site
			<strong>{site.url.replace('https://', '')}</strong>, em conformidade com a Lei nº 13.709/2018
			(Lei Geral de Proteção de Dados — LGPD). Ela descreve o que realmente é coletado, para onde
			os dados vão e o que você pode exigir de nós.
		</p>

		<h2 class={h2}>1. Quem é o controlador dos dados</h2>
		<p class={p}>
			O controlador é o <strong>{site.legalName}</strong>, representante autorizado TIM para
			empresas.
		</p>
		<ul class={ul}>
			<li><strong>CNPJ:</strong> {contact.cnpj}</li>
			<li><strong>Endereço:</strong> {contact.address}</li>
			<li>
				<strong>E-mail para assuntos de privacidade:</strong>
				<a class="text-tim-600 underline" href="mailto:{contact.emails[0]}">{contact.emails[0]}</a>
			</li>
			<li><strong>Telefone:</strong> {contact.phoneLabel}</li>
		</ul>

		<h2 class={h2}>2. Quais dados coletamos</h2>

		<h3 class={h3}>2.1. Dados que você nos fornece</h3>
		<p class={p}>Ao preencher o formulário de contato, coletamos:</p>
		<ul class={ul}>
			<li><strong>Obrigatórios:</strong> nome, e-mail e celular/WhatsApp</li>
			<li><strong>Opcionais:</strong> CNPJ, número de linhas, operadora atual e mensagem</li>
		</ul>
		<p class={p}>
			Não solicitamos dados sensíveis (art. 5º, II da LGPD) nem dados de menores de idade. O
			formulário é destinado a contato comercial entre empresas.
		</p>

		<h3 class={h3}>2.2. Dados coletados automaticamente</h3>
		<ul class={ul}>
			<li>
				<strong>Página de origem e parâmetros de campanha</strong> (UTM), para sabermos por qual
				anúncio ou conteúdo você chegou até nós. Ficam guardados na memória temporária do seu
				navegador (<code>sessionStorage</code>) durante a visita e são enviados junto com o
				formulário.
			</li>
			<li>
				<strong>Endereço IP e dados técnicos da requisição</strong>, processados pela infraestrutura
				que hospeda e protege o site.
			</li>
			<li>
				<strong>Dados de navegação</strong> (páginas vistas, tempo de permanência, dispositivo,
				origem do acesso), coletados por ferramentas de análise de audiência.
			</li>
		</ul>

		<h2 class={h2}>3. Para que usamos e com qual base legal</h2>
		<div class="mb-3 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate-700">
				<thead>
					<tr>
						<th class={th}>Finalidade</th>
						<th class={th}>Base legal (LGPD)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class={td}>Responder sua solicitação e elaborar proposta comercial</td>
						<td class={td}>
							Procedimentos preliminares a contrato, a pedido do titular (art. 7º, V)
						</td>
					</tr>
					<tr>
						<td class={td}>Registrar o contato em nosso sistema de gestão comercial</td>
						<td class={td}>Legítimo interesse (art. 7º, IX)</td>
					</tr>
					<tr>
						<td class={td}>Proteger o formulário contra envios automatizados e abuso</td>
						<td class={td}>Legítimo interesse (art. 7º, IX)</td>
					</tr>
					<tr>
						<td class={td}>Medir audiência e desempenho do site</td>
						<td class={td}>Legítimo interesse (art. 7º, IX)</td>
					</tr>
					<tr>
						<td class={td}>Cumprir obrigações legais e regulatórias</td>
						<td class={td}>Obrigação legal (art. 7º, II)</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class={p}>
			Não usamos seus dados para decisões automatizadas que afetem seus interesses, nem os
			vendemos ou cedemos a terceiros para fins publicitários próprios deles.
		</p>

		<h2 class={h2}>4. Com quem compartilhamos</h2>
		<p class={p}>
			Compartilhamos apenas o necessário, e apenas com quem opera o serviço para nós:
		</p>
		<div class="mb-3 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate-700">
				<thead>
					<tr>
						<th class={th}>Destino</th>
						<th class={th}>O que recebe</th>
						<th class={th}>Por quê</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class={td}>Sistema de gestão comercial do {site.legalName}</td>
						<td class={td}>Todos os dados do formulário</td>
						<td class={td}>Registrar e acompanhar o atendimento</td>
					</tr>
					<tr>
						<td class={td}>Serviço de e-mail do {site.legalName}</td>
						<td class={td}>Todos os dados do formulário</td>
						<td class={td}>Avisar a equipe comercial do novo contato</td>
					</tr>
					<tr>
						<td class={td}>Cloudflare, Inc.</td>
						<td class={td}>IP e dados técnicos da requisição</td>
						<td class={td}>Hospedagem, entrega do site e proteção contra abuso</td>
					</tr>
					<tr>
						<td class={td}>Google LLC (Google Analytics)</td>
						<td class={td}>Dados de navegação e identificadores de análise</td>
						<td class={td}>Medição de audiência</td>
					</tr>
					<tr>
						<td class={td}>WhatsApp / Meta Platforms</td>
						<td class={td}>O resumo que você enviar pelo WhatsApp</td>
						<td class={td}>Somente se você optar por continuar o contato por lá</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h3 class={h3}>Atenção ao botão de WhatsApp</h3>
		<p class={p}>
			Ao enviar o formulário, abrimos uma conversa de WhatsApp com um resumo dos dados que você
			preencheu, já escrito na caixa de mensagem. <strong
				>Nada é enviado sem que você conclua o envio dentro do WhatsApp.</strong
			>
			A partir do momento em que você envia, a conversa passa a ser regida também pela política de
			privacidade do WhatsApp.
		</p>

		<h2 class={h2}>5. Transferência internacional</h2>
		<p class={p}>
			Alguns dos serviços acima (Cloudflare, Google e Meta) processam dados em servidores fora do
			Brasil. Essas transferências ocorrem com base no art. 33 da LGPD e nas salvaguardas
			contratuais oferecidas por esses fornecedores.
		</p>

		<h2 class={h2}>6. Por quanto tempo guardamos</h2>
		<p class={p}>
			Mantemos os dados de contato comercial enquanto durar a relação e, depois do último contato,
			pelo prazo necessário para cumprir obrigações legais ou exercer direitos em eventual
			processo. Encerrado esse prazo, os dados são eliminados ou anonimizados. Você pode pedir a
			exclusão antes disso, conforme a seção 8.
		</p>

		<h2 class={h2}>7. Cookies e tecnologias semelhantes</h2>
		<p class={p}>
			Usamos armazenamento local do navegador para guardar a origem da sua visita durante a sessão
			e cookies das ferramentas de análise de audiência. Você pode bloquear ou apagar cookies nas
			configurações do seu navegador — o site continua funcionando, mas a medição de audiência
			deixa de registrar sua visita.
		</p>

		<h2 class={h2}>8. Seus direitos</h2>
		<p class={p}>O art. 18 da LGPD garante a você o direito de:</p>
		<ul class={ul}>
			<li>confirmar se tratamos seus dados e acessá-los;</li>
			<li>corrigir dados incompletos, inexatos ou desatualizados;</li>
			<li>solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
			<li>pedir a portabilidade a outro fornecedor;</li>
			<li>solicitar a eliminação dos dados tratados com base no seu consentimento;</li>
			<li>saber com quais entidades compartilhamos seus dados;</li>
			<li>opor-se a tratamento feito com base em legítimo interesse;</li>
			<li>revogar o consentimento, quando essa for a base legal aplicada.</li>
		</ul>
		<p class={p}>
			Para exercer qualquer desses direitos, escreva para
			<a class="text-tim-600 underline" href="mailto:{contact.emails[0]}">{contact.emails[0]}</a>
			com o assunto <strong>“LGPD — titular de dados”</strong>. Respondemos em até 15 dias. Podemos
			pedir informações adicionais para confirmar sua identidade antes de atender ao pedido — é uma
			proteção contra alguém se passar por você.
		</p>

		<h2 class={h2}>9. Segurança</h2>
		<p class={p}>
			O site é servido exclusivamente por conexão criptografada (HTTPS). Os dados do formulário
			trafegam para nossos sistemas por canais protegidos e o acesso interno é restrito à equipe
			que precisa tratar o atendimento. Nenhum sistema é infalível: se ocorrer incidente de
			segurança com risco relevante a você, comunicaremos você e a ANPD, conforme o art. 48 da
			LGPD.
		</p>

		<h2 class={h2}>10. Alterações desta política</h2>
		<p class={p}>
			Podemos atualizar esta política a qualquer momento. A data de última atualização no topo
			sempre indica a versão vigente. Mudanças relevantes na forma como tratamos seus dados serão
			destacadas nesta página.
		</p>

		<h2 class={h2}>11. Contato</h2>
		<p class={p}>
			Dúvidas sobre esta política ou sobre o tratamento dos seus dados:
			<a class="text-tim-600 underline" href="mailto:{contact.emails[0]}">{contact.emails[0]}</a> ·
			{contact.phoneLabel} · {contact.address}
		</p>
		<p class={p}>
			Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
		</p>
	</article>
</BlogShell>
