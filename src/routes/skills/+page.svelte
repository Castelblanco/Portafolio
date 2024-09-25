<script lang="ts">
	import H1 from '$atoms/h1.svelte';
	import H2 from '$atoms/h2.svelte';
	import Space from '$atoms/space.svelte';
	import IconTitleDarkLight from '$molecules/icon-title-dark-light.svelte';
	import { Box, Center, Flex, SimpleGrid } from '@svelteuidev/core';
	import { technologiesBackend } from 'services/technologies/backend';
	import { technologiesFrontend } from 'services/technologies/frontend';
</script>

<Center>
	<Flex align="center" direction="column" style="width: 100%;">
		<Space h="xl" />
		<Space h="xl" />
		<H1>Skills</H1>
		<Space h="xl" />
		<Space h="xl" />

		<Box style="width: 90%; max-width: 900px;">
			<Center>
				<Flex align="center" direction="column" style="width: 100%;">
					<H2>Front-End</H2>
					<Space h="xl" />

					<SimpleGrid
						style="
                            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                            grid-auto-rows: 140px;
                            width: 100%;
                        "
					>
						{#each technologiesFrontend as { icon, label }}
							<IconTitleDarkLight src={icon} {label} />
						{/each}
					</SimpleGrid>

					<Space h="xl" />
					<Space h="xl" />
					<H2>Back-End</H2>
					<Space h="xl" />

					<SimpleGrid
						style="
                            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                            grid-auto-rows: 140px;
                            width: 100%;
                        "
					>
						{#each technologiesBackend as { icon, label }}
							<IconTitleDarkLight src={icon} {label} />
						{/each}
					</SimpleGrid>
				</Flex>
			</Center>
		</Box>
	</Flex>
</Center>

<svelte:head>
	<title>Skills</title>
</svelte:head>
