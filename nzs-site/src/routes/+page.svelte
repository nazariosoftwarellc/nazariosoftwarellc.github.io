<script lang="ts">
	import AppLinkList from '$lib/app-link-list.svelte';
	import siteSplashImg from '$lib/assets/img/site-splash.png';
	import SiteDescription from '$lib/site-description.svelte';
</script>

<header style:--bg-image="url({siteSplashImg})">
	<div>
		<h1>Nazario Software</h1>
		<h2>Hand-raised, free-range browser extensions</h2>
	</div>
	<div id="link-list-container">
		<AppLinkList />
	</div>
</header>
<main>
	<SiteDescription />
</main>

<style lang="scss">
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

	#link-list-container {
		max-width: 750px;
		margin-top: 2em;
	}
</style>
