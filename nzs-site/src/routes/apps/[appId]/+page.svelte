<script lang="ts">
	import type { ResolvedPost } from '$lib/types/resolved-types';

  const { data }: { data: ResolvedPost} = $props();
</script>

<article>
  {@html data.post}
</article>