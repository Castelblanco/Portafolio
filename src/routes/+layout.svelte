<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import Header from '$templates/header.svelte';
	import { fly } from 'svelte/transition';

	export let data;

	$: widthView = window.innerWidth;
</script>

<SvelteUIProvider withGlobalStyles themeObserver="dark">
	{#if data.url !== '/'}
		<Header />
	{/if}
	{#key data.url}
		<div transition:fly={{ x: -widthView, duration: 500 }}>
			<slot />
		</div>
	{/key}
</SvelteUIProvider>

<style>
	:global(body, p) {
		margin: 0;
		font-family:
			-apple-system,
			BlinkMacSystemFont,
			Segoe UI,
			Roboto,
			Helvetica,
			Arial,
			sans-serif,
			Apple Color Emoji,
			Segoe UI Emoji;
	}
</style>
