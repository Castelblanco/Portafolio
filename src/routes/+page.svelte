<script lang="ts">
	import Button from '$atoms/button.svelte';
	import H1 from '$atoms/h1.svelte';
	import H2 from '$atoms/h2.svelte';
	import Text from '$atoms/text.svelte';
	import Space from '$atoms/space.svelte';
	import { Box, Center, Flex } from '@svelteuidev/core';
	import type { LayoutRouteId } from './$types';
	import { goto } from '$app/navigation';
	import { btnListRoutes } from '$constants/routes';

	const handleGoRoute = (uri: LayoutRouteId) => {
		goto(uri as string);
	};
</script>

<Box>
	<Box
		style="
            width: 100vw;
            height: 100vh;
            background: url(/code.png);
            background-repeat: repeat;
            background-size: cover;
            background-position: center;
            position: fixed;
            bottom: 0;
            opacity: .1;
            z-index: 50;
        "
	></Box>

	<Box
		style="
            width: 100vw;
            height: 100vh;
            margin: 0;
            position: relative;
            z-index: 400;
        "
	>
		<Center style="height: 100vh;">
			<Flex direction="column" align="center">
				<H1>Esteban Castelblanco</H1>
				<Space h="sm" />
				<H2>Full Stack Developer</H2>
				<Space h="sm" />
				<Text
					>Don't program to solve problems, program to create solutions: Lucas Dalto.</Text
				>
				<Space h="xl" />
				<Flex style="width: 100%;" justify="center" direction="row">
					{#each btnListRoutes as { label, uri }}
						<Button
							color="cyan"
							fullSize
							variant="outline"
							on:click={() => handleGoRoute(uri)}>{label}</Button
						>
					{/each}
				</Flex>
			</Flex>
		</Center>
	</Box>
</Box>

<svelte:head>
	<title>Esteban Castelblanco</title>
	<meta name="content" content="Full Stack Developer Javascript" />
</svelte:head>
