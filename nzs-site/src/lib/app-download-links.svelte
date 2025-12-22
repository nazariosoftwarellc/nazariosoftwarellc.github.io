<script lang="ts">
  import type { ResolvedPost } from '$lib/types/resolved-types';
	import AppStoreLink from './app-store-link.svelte';

  const { downloadLinks }: { downloadLinks: ResolvedPost['downloadLinks'] } = $props();
</script>

<div class="download-links">
  {#if downloadLinks.appleStoreUrl}
    <AppStoreLink href={downloadLinks.appleStoreUrl} />
  {/if}
</div>