<script lang="ts">
	import {
		Button,
		type ButtonVariant,
		type SvelteUIColor,
		type SvelteUIGradient,
		type SvelteUINumberSize
	} from '@svelteuidev/core';
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

	export let color: (SvelteUIColor & string) | undefined = undefined;
	export let variant: ButtonVariant | undefined = undefined;
	export let fullSize: boolean = false;
	export let compact: boolean = false;
	export let radius: number | SvelteUINumberSize | undefined = undefined;
	export let size: SvelteUINumberSize | undefined = undefined;
	export let style = '';
	export let href: string | undefined = undefined;
	export let gradient: SvelteUIGradient | undefined = undefined;
	export let target: HTMLAttributeAnchorTarget | undefined;
</script>

<Button
	{style}
	{gradient}
	{color}
	{variant}
	{fullSize}
	{compact}
	{radius}
	{size}
	{href}
	ripple
	{target}
>
	<slot />
</Button>
