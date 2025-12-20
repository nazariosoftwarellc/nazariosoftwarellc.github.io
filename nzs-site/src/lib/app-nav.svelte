<script lang="ts">
	const { appId }: { appId: string } = $props();

	const links = $derived([
		{ href: `/apps/${appId}/about`, name: 'About' },
		{ href: `/apps/${appId}/support`, name: 'Support' },
		{ href: `/apps/${appId}/privacy`, name: 'Privacy' }
	]);
</script>

<nav>
	<ul>
		{#each links as link}
			<li><a href={link.href}>{link.name}</a></li>
		{/each}
	</ul>
</nav>

<style>
  nav {
    width: 200px;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 1.5em;
    background-color: white;

    @media screen and (prefers-color-scheme: dark) {
      background-color: black;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>