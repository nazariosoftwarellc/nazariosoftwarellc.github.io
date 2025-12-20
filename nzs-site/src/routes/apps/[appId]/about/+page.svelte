<script lang="ts">
	import type { ResolvedPost } from '$lib/types/resolved-types';
	import AppStoreLink from '$lib/app-store-link.svelte';

	const { data }: { data: ResolvedPost } = $props();
</script>

<div class="download-links" style="margin-bottom: 2rem;">
  <AppStoreLink href="https://apps.apple.com/us/app/javasnipt/id1561868291" />
</div>
<article>
	{@html data.post}
</article>
<div class="download-links" style="margin-top: 2rem;">
  <AppStoreLink href="https://apps.apple.com/us/app/javasnipt/id1561868291" />
</div>

<style>
	.download-links {
		display: flex;
		justify-content: center;
	}
</style>
