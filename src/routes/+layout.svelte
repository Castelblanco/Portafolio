<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider withGlobalStyles themeObserver="dark">
	<slot />
</SvelteUIProvider>

<style>
	:global(body, p) {
		margin: 0;
	}
</style>
