<script lang="ts">
	import { ActionIcon, Box } from '@svelteuidev/core';
	import { ArrowLeft, ArrowRight } from 'radix-icons-svelte';
	import { slide } from 'svelte/transition';

	export let images: string[];

	let index = 0;

	const handleLeft = () => index--;
	const handleRight = () => index++;
</script>

<Box
	style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
    "
>
	<ActionIcon disabled={index === 0} on:click={handleLeft} color="cyan">
		<ArrowLeft size={30} />
	</ActionIcon>
	<div class="tray_images">
		{#each [images[index]] as src (index)}
			<img
				transition:slide={{ axis: 'x' }}
				width="100%"
				height="100%"
				{src}
				alt="carrousel images"
			/>
		{/each}
	</div>
	<ActionIcon
		disabled={index >= images.length - 1}
		on:click={handleRight}
		variant="light"
		color="cyan"
	>
		<ArrowRight size={30} />
	</ActionIcon>
</Box>

<style>
	.tray_images {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
		margin: 50px;
	}
</style>
