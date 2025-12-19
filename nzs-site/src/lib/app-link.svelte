<script lang="ts">
	let {
		name,
		id,
		description,
		icon
	}: { name: string; id: string; description: string; icon: string } = $props();

    let iconSrc = $derived('src/lib/assets/img/' + icon);
    console.log('test 4')
</script>

<div class="app-link-container">
	<a href={'/apps/' + id}>
		<img src={iconSrc} alt={name} />
	</a>
	<div>
		<a href={'/apps/' + id} class="app-link">
			<h3>{name}</h3>
		</a>
		<p>{description}</p>
	</div>
</div>

<style lang="scss">
	.app-link-container {
		display: flex;
		align-items: center;
	}
	h3 {
		border-bottom: none;
	}
	img {
		width: 64px;
		height: 64px;
		margin-right: 1em;
	}
</style>
