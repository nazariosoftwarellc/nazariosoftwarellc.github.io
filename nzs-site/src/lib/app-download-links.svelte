<script lang="ts">
	import type { ResolvedAppPost } from '$lib/types/resolved-types';
	import StoreLink from './store-link.svelte';

	const { downloadLinks }: { downloadLinks: ResolvedAppPost['downloadLinks'] } = $props();
</script>

<div class="download-links">
	{#if downloadLinks.appleStoreUrl}
		<StoreLink href={downloadLinks.appleStoreUrl} />
	{/if}
	{#if downloadLinks.chromeStoreUrl}
		<StoreLink href={downloadLinks.chromeStoreUrl} />
	{/if}
	{#if downloadLinks.firefoxStoreUrl}
		<StoreLink href={downloadLinks.firefoxStoreUrl} />
	{/if}
</div>

<style lang="scss">
	@use '../variables';
	.download-links {
		display: flex;
		justify-content: center;
		gap: 1rem;

		@media screen and (max-width: variables.$mobile-width) {
			flex-direction: column;
			align-items: start;
		}
	}
</style>
