<script lang="ts">
	import Image from '$atoms/image.svelte';
	import { Tooltip } from '@svelteuidev/core';

	export let src: string;
	export let label: string;
</script>

<Tooltip {label}>
	<Image width="45px" height="45px" src={`${src}-light.png`} alt={label} usePlaceholder />
</Tooltip>
