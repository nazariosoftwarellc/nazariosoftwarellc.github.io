<script lang="ts">
	import Header from '$lib/header.svelte';

	let { children } = $props();
</script>

<Header />
{@render children()}
