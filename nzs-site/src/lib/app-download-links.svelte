<script lang="ts">
  import type { ResolvedPost } from '$lib/types/resolved-types';
	import StoreLink from './store-link.svelte';

  const { downloadLinks }: { downloadLinks: ResolvedPost['downloadLinks'] } = $props();
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

<style>
  .download-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>