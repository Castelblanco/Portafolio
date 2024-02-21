<script lang="ts">
	import { Header, Navbar } from '@svelteuidev/core';
	import { btnListRoutes } from 'constants/routes';
</script>

<Header
	style="
        width: 100px;
        position: fixed;
        top: 50%;
        left: calc(100% - 100px);
    "
	height="100px"
>
	<!-- <Navbar style="position: relative;">
		{#each btnListRoutes as { label, uri }}{/each}
	</Navbar> -->
</Header>
