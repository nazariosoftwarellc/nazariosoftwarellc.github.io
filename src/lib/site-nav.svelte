<script lang="ts">
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' }
	];
</script>

<nav>
	<ul>
		{#each links as { href, label } (href)}
			<li><a {href}>{label}</a></li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 1rem;
		margin-bottom: 0;
	}
</style>
