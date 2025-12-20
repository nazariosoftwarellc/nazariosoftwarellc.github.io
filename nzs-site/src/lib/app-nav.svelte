<script lang="ts">
	const { appId }: { appId: string } = $props();

	const links = $derived([
		{ href: `/apps/${appId}/about`, name: 'About' },
		{ href: `/apps/${appId}/support`, name: 'Support' },
		{ href: `/apps/${appId}/privacy`, name: 'Privacy' }
	]);
</script>

<nav class="outlined-section">
	<ul>
		{#each links as link}
			<li><a href={link.href}>{link.name}</a></li>
		{/each}
	</ul>
</nav>

<style lang="scss">
  @use '../global-styles';
  nav {
    width: 200px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>