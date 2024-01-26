<script lang="ts">
	import H1 from '@atoms/h1.svelte';
	import H2 from '@atoms/h2.svelte';
	import Image from '@atoms/image.svelte';
	import Space from '@atoms/space.svelte';
	import { Box, Center, Flex } from '@svelteuidev/core';
</script>

<Center>
	<Flex align="center" direction="column" style="width: 100%;">
		<Space h="xl" />
		<Space h="xl" />
		<Space h="xl" />
		<H1>Skills</H1>
		<Box style="background-color: aqua; width: 90%; max-width: 900px;">
			<H2>Front-End</H2>
			<H2>Back-End</H2>
		</Box>
	</Flex>
</Center>
<p>skills</p>
<Image src="/js-black.png" width="100px" />

<svelte:head>
	<title>Skills</title>
</svelte:head>
