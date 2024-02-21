<script lang="ts">
	import Image from '@atoms/image.svelte';
	import Space from '@atoms/space.svelte';
	import Text from '@atoms/text.svelte';
	import { Flex } from '@svelteuidev/core';

	export let src: string;
	export let label: string;
</script>

<Flex direction="column" justify="spaces-around" align="center" style="width: 100%; height: 100%;">
	<Image width="100px" height="100px" src={`${src}-light.png`} alt={label} usePlaceholder />
	<Space h="xs" />
	<Text align="center">{label}</Text>
</Flex>
