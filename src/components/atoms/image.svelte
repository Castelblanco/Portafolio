<script lang="ts">
	import { Image } from '@svelteuidev/core';

	export let width: string | number = '';
	export let height: string | number = '';
	export let style = '';
	export let src: string;
	export let alt = '';
	export let usePlaceholder = false;
</script>

<Image {width} {height} on:click override={style} {src} {alt} {usePlaceholder} />
