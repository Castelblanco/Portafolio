<script lang="ts">
	import H1 from '$atoms/h1.svelte';
	import H2 from '$atoms/h2.svelte';
	import Space from '$atoms/space.svelte';
	import Text from '$atoms/text.svelte';
	import Project from '$organisms/project.svelte';
	import ProjectDetail from '$organisms/project_detail.svelte';
	import { Box, Center, Flex, Modal } from '@svelteuidev/core';
	import type { TProject } from 'services/projects';
	import { projects } from 'services/projects/projects';

	let project: TProject | undefined;

	const handleSelectProject = (p: TProject) => (project = p);

	const handleHideModal = () => (project = undefined);
</script>

<Center>
	<Flex align="center" direction="column" style="width: 100%;">
		<Space h="xl" />
		<Space h="xl" />
		<H1>Projects</H1>
		<Space h="xl" />
		<Space h="xl" />

		<Box style="width: 90%; max-width: 900px;">
			{#each projects as project}
				<Project on:click={() => handleSelectProject(project)} {project} />
			{/each}
		</Box>
	</Flex>
</Center>

{#if project !== undefined}
	<Modal opened on:close={handleHideModal} size="calc(100vw - 87px)" centered>
		<ProjectDetail {project} />
	</Modal>
{/if}

<svelte:head>
	<title>Projects</title>
	<meta name="content" content="Full Stack Developer Projects" />
</svelte:head>
