<script lang="ts">
	import Header from '$lib/header.svelte';
	import type { ResolvedPost } from '$lib/types/resolved-types';

  const { data }: { data: ResolvedPost } = $props();
</script>

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