<script lang="ts">
	import H2 from '$atoms/h2.svelte';
	import Text from '$atoms/text.svelte';
	import { Box, Flex } from '@svelteuidev/core';
	import IconTooltip from '$molecules/icon_tooltip.svelte';
	import type { TProject } from 'services/projects';
	import { concurrent } from 'svelte-typewriter';
	import Carrousel from './carrousel.svelte';
	import ButtonHref from 'components/atoms/button_href.svelte';
	import Space from 'components/atoms/space.svelte';

	export let project: TProject;
</script>

<Flex align="center" direction="column" style="width: 100%;">
	<H2>{project.title}</H2>
	{#if project.images.length > 0}
		<Carrousel images={project.images} />
	{:else}
		<Space h="xl" />
	{/if}
	<p use:concurrent={{ cursor: true }} style="text-wrap: pretty; text-align: center;">
		{project.description}
	</p>
	<Flex style="width: 90%; margin-top: 20px;" justify="space-between">
		<Box>
			<Text style="font-weight: 700;">Technologies:</Text>
			{#each project.tools as tool}
				<IconTooltip {...tool} />
			{/each}
		</Box>
		<Box>
			<Text style="font-weight: 700;">Repositories:</Text>
			{#each project.repos as { label, url }}
				<ButtonHref
					color="cyan"
					variant="outline"
					style="margin-top: 10px;"
					target="_blank"
					href={url}
				>
					{label}
				</ButtonHref>
			{:else}
				<Text style="margin-top: 10px;">Private</Text>
			{/each}
		</Box>
	</Flex>
</Flex>
