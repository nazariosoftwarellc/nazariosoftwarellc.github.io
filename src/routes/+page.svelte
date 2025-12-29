<script lang="ts">
	import AppLinkList from '$lib/app-link-list.svelte';
	import SiteDescription from '$lib/site-description.svelte';
	import { SITE_TITLE } from '$lib/site-metadata';
	import SiteNav from '$lib/site-nav.svelte';
	import type { ResolvedAppList } from '$lib/types/resolved-types';
	import '../_variables.scss';

	const { data }: { data: ResolvedAppList } = $props();
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<meta name="description" content="Hand-raised, free-range browser extensions" />
</svelte:head>

<header>
	<div>
		<h1>{SITE_TITLE}</h1>
		<h2>Hand-raised, free-range browser extensions</h2>
	</div>
	<div id="desktop-app-list-container">
		<AppLinkList appList={data.appList} />
	</div>
</header>
<main>
	<div id="mobile-app-list-container">
		<AppLinkList appList={data.appList} />
	</div>
	<SiteNav />
	<hr />
	<SiteDescription />
</main>

<style lang="scss">
	@use '../variables';

	header {
		height: 700px;
		background-image: url('/img/site-splash.png');
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
