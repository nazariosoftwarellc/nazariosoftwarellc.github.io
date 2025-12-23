<script lang="ts">
	let {
		name,
		id,
		description,
	}: { name: string; id: string; description: string; } = $props();

	let iconSrc = $derived(`/img/${id}-icon.png`);
	let href = $derived(`/apps/${id}`);
</script>

<div class="app-link-container">
	<a {href}>
		<img src={iconSrc} alt={name} />
	</a>
	<div>
		<a {href} class="app-link">
			<h3>{name}</h3>
		</a>
		<p>{description}</p>
	</div>
</div>

<style lang="scss">
	@use '../variables';

	.app-link-container {
		display: flex;
		align-items: center;

		@media screen and (max-width: variables.$mobile-width) {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	h3 {
		border-bottom: none;
	}
	img {
		width: 64px;
		min-width: 64px;
		height: 64px;
		margin-right: 1em;
		margin-bottom: 0;
	}
</style>
