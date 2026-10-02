<script lang="ts">
	const { href }: { href: string } = $props();

	const linkType: 'chrome' | 'firefox' | 'apple' | 'safari' = $derived.by(() => {
		if (href.includes('chrome.google.com')) {
			return 'chrome';
		}
		if (href.includes('addons.mozilla.org')) {
			return 'firefox';
		}
		if (href.includes('apps.apple.com')) {
			return 'apple';
		}
		if (href.includes('nazariosoftware.com')) {
			return 'safari';
		}
		return 'chrome';
	});

	const storeName = $derived.by(() => {
		if (linkType === 'chrome') {
			return 'on Chrome Web Store';
		}
		if (linkType === 'firefox') {
			return 'on Firefox Add-ons';
		}
		if (linkType === 'apple') {
			return 'on the App Store';
		}
		if (linkType === 'safari') {
			return 'directly';
		}
		return 'Store';
	});

	const title = $derived.by(() => `Get it ${storeName}`);

	const imageSrc = $derived.by(() => {
		if (linkType === 'chrome') {
			return '/img/chrome-store-badge.webp';
		}
		if (linkType === 'firefox') {
			return '/img/firefox-store-badge.webp';
		}
		if (linkType === 'apple') {
			return '/img/app-store-badge.svg';
		}
		if (linkType === 'safari') {
			return '/img/safari-badge.svg';
		}
		return '/img/chrome-store-badge.webp';
	});

	const target = $derived.by(() => {
		if (linkType === 'safari') {
			return '_self';
		}
		return '_blank';
	});
</script>

<div>
	<a {href} {target} {title}>
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
