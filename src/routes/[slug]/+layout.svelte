<script>
	import BlogShell from '$lib/components/BlogShell.svelte';

	let { children } = $props();
</script>

<BlogShell>{@render children()}</BlogShell>
