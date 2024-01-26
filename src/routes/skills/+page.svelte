<script lang="ts">
	import H1 from '@atoms/h1.svelte';
	import H2 from '@atoms/h2.svelte';
	import Image from '@atoms/image.svelte';
	import Space from '@atoms/space.svelte';
	import Text from '@atoms/text.svelte';
	import { Box, Center, Flex, SimpleGrid } from '@svelteuidev/core';

	type TIcon = {
		label: string;
		src: string;
	};

	const iconsFrontList: TIcon[] = [
		{
			label: 'HTML',
			src: 'express-black.png'
		},
		{
			label: 'CSS',
			src: 'socketio.png'
		},
		{
			label: 'Javascript',
			src: 'sequelize-black.png'
		}
	];
</script>

<Center>
	<Flex align="center" direction="column" style="width: 100%;">
		<Space h="xl" />
		<Space h="xl" />
		<H1>Skills</H1>
		<Space h="xl" />

		<Box style="border: 10px solid #f9e; width: 90%; max-width: 900px;">
			<Center>
				<Flex align="center" direction="column" style="width: 100%;">
					<H2>Front-End</H2>
					<Space h="xl" />

					<SimpleGrid
						style="
                            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                            grid-auto-rows: 100px;
                            width: 100%;
                            height: 400px;
                        "
					>
						{#each iconsFrontList as { src, label }}
							<Box
								style="
                                    text-align: center;
                                "
							>
								<Image width="100px" {src} alt={label} />
								<Text align="center">{label}</Text>
							</Box>
						{/each}
					</SimpleGrid>
					<H2>Back-End</H2>
				</Flex>
			</Center>
		</Box>
	</Flex>
</Center>
<p>skills</p>
<Image src="/js-black.png" width="100px" />

<svelte:head>
	<title>Skills</title>
</svelte:head>
