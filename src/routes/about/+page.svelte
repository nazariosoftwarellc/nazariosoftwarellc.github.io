<script lang="ts">
	import Header from '$lib/header.svelte';
	import { SITE_TITLE } from '$lib/site-metadata';
	import type { ResolvedPost } from '$lib/types/resolved-types';

	const { data }: { data: ResolvedPost } = $props();
</script>

<svelte:head>
	<title>About {SITE_TITLE}</title>
</svelte:head>

<Header />
<article>
	{@html data.post}
</article>

<style lang="scss">
	@use '../../variables';

	article {
		max-width: variables.$article-max-width;
	}
</style>
