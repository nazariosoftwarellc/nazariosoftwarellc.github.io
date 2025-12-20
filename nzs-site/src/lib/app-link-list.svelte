<script lang="ts">
	import AppLink from './app-link.svelte';
	import appList from '$lib/assets/json/app-list.json';
</script>

<div class="app-link-list">
	{#each appList as app}
		<div class="app-link-item">
			<AppLink {...app} />
		</div>
	{/each}
</div>

<style lang="scss">
	.app-link-item {
		margin-bottom: 1.5em;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.app-link-list {
		border: 1px solid gray;
		border-radius: 20px;
		padding: 1.5em;
		background-color: white;

    @media screen and (prefers-color-scheme: dark) {
      background-color: black;
    }
	}
</style>
