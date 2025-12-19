<script lang="ts">
	import AppLink from './app-link.svelte';
	import javasniptIcon from '$lib/assets/img/javasnipt-icon.png';
	import incogmeetoIcon from '$lib/assets/img/incogmeeto-icon.png';
	import mcIcon from '$lib/assets/img/mc-icon.png';
	import bntIcon from '$lib/assets/img/bnt-icon.png';
	import rhnIcon from '$lib/assets/img/rhn-icon.png';

	const apps = [
		{
			name: 'JavaSnipt',
			id: 'javasnipt',
			description: 'The JavaScript blocker and NoScript equivalent for Safari',
			icon: javasniptIcon
		},
		{
			name: 'Mute Chat for BoardGameArena',
			id: 'mute-chat',
			description: 'Play in peace on BoardGameArena',
			icon: mcIcon
		},
		{
			name: 'Beautiful New Tabs',
			id: 'beautiful-new-tabs',
			description: 'Replace your new tab page with a gorgeous wallpaper',
			icon: bntIcon
		},
		{
			name: 'Replies for Hacker News',
			id: 'replies-for-hacker-news',
			description: 'Never miss a conversation on Hacker News',
			icon: rhnIcon
		},
		{
			name: 'Incogmeeto',
			id: 'incogmeeto',
			description: 'Hide your Google Meet video feed from yourself',
			icon: incogmeetoIcon
		},
	];
</script>

<div class="app-link-list">
	{#each apps as app}
		<div class="app-link-item">
			<AppLink {...app} />
		</div>
	{/each}
</div>

<style lang="scss">
	.app-link-item {
		margin-bottom: 1em;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.app-link-list {
		border: 1px solid gray;
		border-radius: 20px;
		padding: 1.5em;
		background-color: black;
		position: relative;
		top: -200px;
	}
</style>
