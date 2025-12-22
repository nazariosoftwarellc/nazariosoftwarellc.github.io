<script lang="ts">
  import type { ResolvedPost } from '$lib/types/resolved-types';
	import AppStoreLink from './app-store-link.svelte';
	import ChromeStoreLink from './chrome-store-link.svelte';

  const { downloadLinks }: { downloadLinks: ResolvedPost['downloadLinks'] } = $props();
</script>

<div class="download-links">
  {#if downloadLinks.appleStoreUrl}
    <AppStoreLink href={downloadLinks.appleStoreUrl} />
  {/if}
  {#if downloadLinks.chromeStoreUrl}
    <ChromeStoreLink href={downloadLinks.chromeStoreUrl} />
  {/if}
</div>

<style>
  .download-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>