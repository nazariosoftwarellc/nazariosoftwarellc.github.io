<script lang="ts">
	import type { ResolvedPost } from '$lib/types/resolved-types';
	import AppStoreLink from '$lib/app-store-link.svelte';
	import AppNav from '$lib/app-nav.svelte';
	import AppDownloadLinks from '$lib/app-download-links.svelte';

	const { data }: { data: ResolvedPost } = $props();
</script>

<div class="download-links" style="margin-bottom: 2rem;">
	<AppDownloadLinks downloadLinks={data.downloadLinks} />
</div>

<aside>
	<AppNav appId={data.appId} />
</aside>

<article>
	{@html data.post}
</article>

<style lang="scss">
	@use '../../../../variables';
	.download-links {
		display: flex;
		justify-content: center;
	}

	aside {
		float: right;

		@media screen and (max-width: variables.$mobile-width) {
			float: none;
			margin-top: 1rem;
		}
	}

	article {
		overflow: auto;
		position: relative;
		right: -100px;

		@media screen and (max-width: variables.$mobile-width) {
			right: 0;
		}
	}
</style>
