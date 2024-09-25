<script lang="ts">
	import { Center, Flex } from '@svelteuidev/core';
	import H1 from 'components/atoms/h1.svelte';
	import Space from 'components/atoms/space.svelte';
</script>

<Center>
	<Flex align="center" direction="column" style="width: 100%;">
		<Space h="xl" />
		<Space h="xl" />
		<H1>Contact</H1>

		<Flex style="width: 80%; height: 85vh;" justify="space-around" align="center">
			<a target="_blank" href="https://linkedin.com/in/esteban-castelblanco">
				<img
					class="icon"
					width="100px"
					height="100px"
					src="/icon-in.png"
					alt="icon linkedin"
				/>
			</a>
			<a target="_blank" href="https://github.com/Castelblanco">
				<img
					class="icon"
					width="100px"
					height="100px"
					src="/icon-github.png"
					alt="icon github"
				/>
			</a>
			<a
				target="_blank"
				href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdJLTZKCnvRgQLRChcNGkhrcxJKDlkfktMKXXBLGRdWWSpxHThtFtlxHfgFZrMHGfKcffbB"
			>
				<img
					class="icon"
					width="100px"
					height="100px"
					src="/icon-gmail.png"
					alt="icon gmail"
				/>
			</a>
		</Flex>
	</Flex>
</Center>
<div class="footer">
	<footer>
		Developed and designed by Esteban Javier Castelblanco García. ©2024. All rights reserved.
	</footer>
</div>

<style>
	.footer {
		width: 97%;
		padding: 10px;
		bottom: 0;
		text-align: center;
	}

	.icon {
		border-radius: 50%;
	}
</style>
