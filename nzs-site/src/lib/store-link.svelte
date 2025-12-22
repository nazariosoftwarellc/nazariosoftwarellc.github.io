<script lang="ts">
	import chromeStoreBadge from '$lib/assets/img/chrome-store-badge.png';
	import appStoreBadge from '$lib/assets/img/app-store-badge.svg';
	import firefoxStoreBadge from '$lib/assets/img/firefox-store-badge.png';

	const { href }: { href: string } = $props();

	const linkType: 'chrome' | 'firefox' | 'apple' = $derived.by(() => {
		if (href.includes('chrome.google.com')) {
			return 'chrome';
		}
		if (href.includes('addons.mozilla.org')) {
			return 'firefox';
		}
		if (href.includes('apps.apple.com')) {
			return 'apple';
		}
		return 'chrome';
	})

	const storeName = $derived.by(() => {
		if (linkType === 'chrome') {
			return 'Chrome Web Store';
		}
		if (linkType === 'firefox') {
			return 'Firefox Add-ons';
		}
		if (linkType === 'apple') {
			return 'App Store';
		}
		return 'Store';
	})

	const title = $derived.by(() => `Get it on ${storeName}`);

	const imageSrc = $derived.by(() => {
		if (linkType === 'chrome') {
			return chromeStoreBadge;
		}
		if (linkType === 'firefox') {
			return firefoxStoreBadge;
		}
		if (linkType === 'apple') {
			return appStoreBadge;
		}
		return chromeStoreBadge;
	});
</script>

<div>
	<a {href} target="_blank" title={title}>
		<img src={imageSrc} alt={title} />
	</a>
</div>

<style lang="scss">
  @use '../variables';

  div {
    height: variables.$app-store-badge-height;
    width: auto;
  }

	img {
		height: 100%;
		width: auto;
	}
</style>
