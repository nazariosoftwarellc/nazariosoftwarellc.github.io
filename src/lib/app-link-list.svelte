<script lang="ts">
	import AppLink from './app-link.svelte';
	import type { NZSAppList } from './types/app-list';

	const { appList }: { appList: NZSAppList } = $props();
</script>

<div class="outlined-section list-container">
	{#each appList as app (app.id)}
		<div class="app-link-item">
			<AppLink {...app} />
		</div>
	{/each}
</div>

<style lang="scss">
	@use '../global-styles';
	@use '../variables';

	@media screen and (min-width: variables.$mobile-width) {
		.list-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1.5em;
		}
	}

	.app-link-item {
		margin-bottom: 1.5em;

		&:last-child {
			margin-bottom: 0;
		}
	}
</style>
