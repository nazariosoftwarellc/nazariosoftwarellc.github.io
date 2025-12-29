<script>
	import { SITE_TITLE } from './site-metadata';
	import SiteNav from './site-nav.svelte';
</script>

<header>
	<a href="/">
		<h1>{SITE_TITLE}</h1>
	</a>
	<SiteNav />
</header>

<style lang="scss">
	@use '../variables';

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: variables.$mobile-width) {
			flex-direction: column;
			align-items: start;
		}
	}
</style>
