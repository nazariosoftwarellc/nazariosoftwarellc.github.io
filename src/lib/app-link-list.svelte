<script lang="ts">
	import AppLink from './app-link.svelte';
	import type { NZSAppList } from './types/app-list';

	const { appList }: { appList: NZSAppList } = $props();
</script>

<div class="outlined-section">
	{#each appList as app (app.id)}
		<div class="app-link-item">
			<AppLink {...app} />
		</div>
	{/each}
</div>

<style lang="scss">
	@use '../global-styles';

	.app-link-item {
		margin-bottom: 1.5em;

		&:last-child {
			margin-bottom: 0;
		}
	}
</style>
