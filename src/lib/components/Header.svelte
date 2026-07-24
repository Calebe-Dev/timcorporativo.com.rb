<script>
	import { site, contact, nav, whatsappLink } from '$lib/site.js';

	let open = $state(false);
	const close = () => (open = false);
</script>

<header id="topo" class="sticky top-0 z-40 border-b border-tim-100 bg-white/95 backdrop-blur">
	<div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
		<a href="#topo" class="flex items-center gap-2" onclick={close}>
			<img src={site.logo} alt="TIM" class="h-9 w-9" width="36" height="36" />
			<span class="leading-tight">
				<span class="block text-base font-bold text-tim-800">TIM Corporativo</span>
				<span class="block text-[11px] font-medium text-tim-500">Representante autorizado</span>
			</span>
		</a>

		<!-- Navegação desktop -->
		<nav class="hidden items-center gap-6 lg:flex">
			{#each nav as item}
				<a href={item.href} class="text-sm font-medium text-slate-700 hover:text-tim-600">
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<a
				href={contact.phoneHref}
				class="hidden items-center gap-1 text-sm font-semibold text-tim-700 sm:flex"
			>
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
					><path
						d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2z"
					/></svg
				>
				{contact.phoneLabel}
			</a>
			<a
				href={whatsappLink()}
				target="_blank"
				rel="noopener"
				class="rounded-full bg-tim-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-tim-700"
			>
				Fale com consultor
			</a>
			<button
				class="rounded p-2 text-tim-800 lg:hidden"
				aria-label="Abrir menu"
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
					><path stroke-linecap="round" d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} /></svg
				>
			</button>
		</div>
	</div>

	<!-- Menu mobile -->
	{#if open}
		<nav class="border-t border-tim-100 bg-white lg:hidden">
			<ul class="mx-auto max-w-6xl px-4 py-2">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							onclick={close}
							class="block rounded px-2 py-3 text-base font-medium text-slate-700 hover:bg-tim-50"
						>
							{item.label}
						</a>
					</li>
				{/each}
				<li class="mt-2 flex gap-2 pb-2">
					<a
						href={contact.phoneHref}
						class="flex-1 rounded-full border border-tim-200 px-4 py-2 text-center text-sm font-semibold text-tim-700"
						>Ligar</a
					>
					<a
						href={whatsappLink()}
						target="_blank"
						rel="noopener"
						class="flex-1 rounded-full bg-tim-600 px-4 py-2 text-center text-sm font-semibold text-white"
						>WhatsApp</a
					>
				</li>
			</ul>
		</nav>
	{/if}
</header>
