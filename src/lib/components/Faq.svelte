<script>
	import { faq } from '$lib/site.js';
	let openIndex = $state(0);
	const toggle = (i) => (openIndex = openIndex === i ? -1 : i);
</script>

<div class="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
	{#each faq as item, i}
		<div>
			<h3>
				<button
					class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
					aria-expanded={openIndex === i}
					onclick={() => toggle(i)}
				>
					<span class="font-semibold text-slate-900">{item.q}</span>
					<svg
						class="h-5 w-5 shrink-0 text-tim-600 transition-transform {openIndex === i
							? 'rotate-180'
							: ''}"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" d="M6 9l6 6 6-6" />
					</svg>
				</button>
			</h3>
			{#if openIndex === i}
				<div class="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</div>
			{/if}
		</div>
	{/each}
</div>
