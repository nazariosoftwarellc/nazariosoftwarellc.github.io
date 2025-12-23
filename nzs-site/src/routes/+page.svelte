<script lang="ts">
	import AppLinkList from '$lib/app-link-list.svelte';
	import SiteDescription from '$lib/site-description.svelte';
	import SiteNav from '$lib/site-nav.svelte';
	import '../_variables.scss';
</script>

<header style:--bg-image="url('/img/site-splash.png')">
	<div>
		<h1>Nazario Software</h1>
		<h2>Hand-raised, free-range browser extensions</h2>
	</div>
	<div id="desktop-app-list-container">
		<AppLinkList />
	</div>
</header>
<main>
	<div id="mobile-app-list-container">
		<AppLinkList />
	</div>
	<SiteNav />
	<hr />
	<SiteDescription />
</main>

<style lang="scss">
	@use '../variables';

	header {
		height: 700px;
		background-image: var(--bg-image);
		background-position: center;

		h1,
		h2 {
			text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);

			@media screen and (prefers-color-scheme: dark) {
				text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
			}
		}
	}

	#desktop-app-list-container {
		max-width: 750px;
		margin-top: 2em;

		@media screen and (max-width: variables.$mobile-width) {
			display: none;
		}
	}

	#mobile-app-list-container {
		margin-bottom: 2em;
		width: 100%;

		@media screen and (min-width: variables.$desktop-min-width) {
			display: none;
		}
	}
</style>
