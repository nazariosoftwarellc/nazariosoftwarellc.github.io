<script lang="ts">
	import type { ResolvedAppPost } from '$lib/types/resolved-types';
	import AppNav from '$lib/app-nav.svelte';
	import AppDownloadLinks from '$lib/app-download-links.svelte';

	const { data }: { data: ResolvedAppPost } = $props();
</script>

{#if data.bannerImageSrc && data.postType === 'about'}
	<img
		src={data.bannerImageSrc}
		alt="{data.appId} banner"
		style="width: 100%; margin-bottom: 1rem;"
	/>
{/if}

<aside>
	<AppNav appId={data.appId} />
</aside>

<article>
	{@html data.post}
</article>

<div class="download-links" style="margin-top: 2rem;">
	<AppDownloadLinks downloadLinks={data.downloadLinks} />
</div>

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

	$article-mobile-width: calc(variables.$article-max-width + variables.$mobile-width);
	article {
		overflow: auto;
		position: relative;
		right: -100px;
		max-width: variables.$article-max-width;

		@media screen and (max-width: $article-mobile-width) {
			right: 0;
		}
	}
</style>
