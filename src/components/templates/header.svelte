<script lang="ts">
	import { Header, Navbar, ActionIcon, Box, Tooltip, /* Button */ } from '@svelteuidev/core';
	import { HamburgerMenu, CaretRight } from 'radix-icons-svelte';
	import { btnListRoutes } from 'constants/routes';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import type { LayoutRouteId } from '../../routes/$types';
	import Button from '@atoms/button.svelte';

	const boxHeight = 150;
	let show = true;

	const toggleShow = () => (show = !show);

	const handleGo = async (url: LayoutRouteId) => {
		await goto(url as string);
		toggleShow();
	}
</script>

{#if show}
<div class="container" transition:fly={{x: 80, duration: 100}}>
	<Header
		height="{boxHeight}px"
		style="background-color: transparent; border: none;"
	>
		<Navbar
			style="
				display: flex;
				justify-content: space-around;
				height: 100%;
				position: relative;
				background-color: transparent;
			"
		>
			{#each btnListRoutes as { label, uri }}
				<Tooltip {label}>
					<Button on:click={() => handleGo(uri)} color="transparent">
						<img width="30px" src="/header{uri}.png" alt={label}>
					</Button>
				</Tooltip>
			{/each}
		</Navbar>

		<Box
			style="
				display: flex;
				align-items: center;
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: -30px;
			"
		>
			<ActionIcon on:click={toggleShow}>
				<CaretRight color="#fff" size={40} />
			</ActionIcon>
		</Box>
	</Header>
</div>
{:else}
	<Box
		style="
			display: flex;
			align-items: center;
			height: {boxHeight}px;
			position: fixed;
			top: 50%;
			right: 10px;
		"
	>
		<ActionIcon on:click={toggleShow}>
			<HamburgerMenu color="#fff" size={40}  />
		</ActionIcon>
	</Box>
{/if}


<style>
	.container {
		position: fixed;
		top: 50%;
		left: calc(100% - 70px);
		z-index: 1000000000000000000;
	}
</style>