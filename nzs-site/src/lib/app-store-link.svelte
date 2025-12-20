<script lang="ts">
  import appStoreBadge from '$lib/assets/img/app-store-badge.svg';
  const { href }: { href: string } = $props();
</script>

<div style="height: 6rem;width: auto;">
    <a {href} target="_blank" title="Download on the App Store">
        <img src={appStoreBadge} alt="Download on the App Store"
             style="height: 100%; width: auto;">
    </a>
</div>