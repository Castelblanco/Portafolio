<script lang="ts">
	import H2 from '$atoms/h2.svelte';
	import { Flex } from '@svelteuidev/core';
	import Button from '$atoms/button.svelte';
	import type { TProject } from 'services/projects';

	export let project: TProject;
</script>

<Button
	on:click
	on:click
	fullSize
	style="
		padding: 40px;
		border-radius: 10px;
	"
	color="gray"
>
	<Flex
		align="center"
		justify="center"
		direction="column"
		style="width: 100%;border-radius: 10px;"
	>
		<H2>{project.title}</H2>
	</Flex>
</Button>
