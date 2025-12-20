<script lang="ts">
	import AppLink from './app-link.svelte';
	import appList from '$lib/assets/json/app-list.json';
</script>

<div class="outlined-section">
	{#each appList as app}
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
