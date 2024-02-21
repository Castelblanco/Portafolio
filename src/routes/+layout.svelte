<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import Header from '@templates/header.svelte';
	import { fly } from 'svelte/transition';

	export let data;

	$: widthView = innerWidth;
</script>

<SvelteUIProvider withGlobalStyles themeObserver="dark">
	<Header />
	{#key data.url}
		<div transition:fly={{ x: -widthView, duration: 500 }}>
			<slot />
		</div>
	{/key}
</SvelteUIProvider>

<style>
	:global(body, p) {
		margin: 0;
	}
</style>
