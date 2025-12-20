<script lang="ts">
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' }
  ];
</script>

<nav>
  <ul>
    {#each links as link}
      <li><a href={link.href}>{link.label}</a></li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }
</style>