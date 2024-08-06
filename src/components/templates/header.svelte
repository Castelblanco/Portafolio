<script lang="ts">
	import { Header, Navbar, ActionIcon, Box, Tooltip, Burger } from '@svelteuidev/core';
	import { HamburgerMenu, CaretRight } from 'radix-icons-svelte';
	import { btnListRoutes } from 'constants/routes';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import type { LayoutRouteId } from '../../routes/$types';
	import Button from '$atoms/button.svelte';

	const boxHeight = 150;
	let show = false;

	const toggleShow = () => (show = !show);

	const handleGo = async (url: LayoutRouteId) => {
		await goto(url as string);
		toggleShow();
	};
</script>

<Box
	style="
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50px;
			height: 150px;
			position: fixed;
			top: 50%;
			left: calc(100% - {show ? 80 : 50}px);
		"
>
	<Burger opened={show} on:click={toggleShow} color="#fff" size={30} />
	{#if show}
		<div transition:fly={{ x: 80, duration: 100 }}>
			<Header height="{boxHeight}px" style="background-color: transparent; border: none;">
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
								<img width="30px" src="/header{uri}.png" alt={label} />
							</Button>
						</Tooltip>
					{/each}
				</Navbar>
			</Header>
		</div>
	{/if}
</Box>
