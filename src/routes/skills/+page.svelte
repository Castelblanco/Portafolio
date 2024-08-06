<script lang="ts">
	import H1 from '$atoms/h1.svelte';
	import H2 from '$atoms/h2.svelte';
	import Space from '$atoms/space.svelte';
	import IconTitleDarkLight from '$molecules/icon-title-dark-light.svelte';
	import { Box, Center, Flex, SimpleGrid } from '@svelteuidev/core';

	type TIcon = {
		label: string;
		src: string;
	};

	const iconsFrontList: TIcon[] = [
		{
			label: 'HTML',
			src: 'html'
		},
		{
			label: 'CSS',
			src: 'css'
		},
		{
			label: 'Javascript',
			src: 'js'
		},
		{
			label: 'Typescript',
			src: 'ts'
		},
		{
			label: 'JQuery',
			src: 'jquery'
		},
		{
			label: 'PhaserJs',
			src: 'phaser'
		},
		{
			label: 'Angular',
			src: 'angular'
		},
		{
			label: 'React',
			src: 'react'
		},
		{
			label: 'Vue',
			src: 'vue'
		},
		{
			label: 'Nuxt',
			src: 'nuxt'
		},
		{
			label: 'Svelte',
			src: 'svelte'
		},
		{
			label: 'SvelteKit',
			src: 'svelte'
		},
		{
			label: 'Material UI',
			src: 'material-ui'
		},
		{
			label: 'Expo',
			src: 'expo'
		},
		{
			label: 'Vite',
			src: 'vite'
		},
		{
			label: 'Tauri',
			src: 'tauri'
		},
		{
			label: 'Electron',
			src: 'electron'
		},
		{
			label: 'Firebase',
			src: 'firebase'
		},
		{
			label: 'Git',
			src: 'git'
		}
	];

	const iconsBacktList: TIcon[] = [
		{
			label: 'BunJs',
			src: 'bun'
		},
		{
			label: 'ElysiaJs',
			src: 'elysia'
		},
		{
			label: 'NodeJs',
			src: 'node'
		},
		{
			label: 'ExpressJs',
			src: 'express'
		},
		{
			label: 'NestJs',
			src: 'nest'
		},
		{
			label: 'Socket.io',
			src: 'socketio'
		},
		{
			label: 'Json Web Token',
			src: 'jwt'
		},
		{
			label: 'GraphQL',
			src: 'graphql'
		},
		{
			label: 'MongoDB',
			src: 'mongo'
		},
		{
			label: 'Mongoose',
			src: 'mongoose'
		},
		{
			label: 'Postgres',
			src: 'postgres'
		},
		{
			label: 'MySql',
			src: 'my-sql'
		},
		{
			label: 'Sequelize',
			src: 'sequelize'
		},
		{
			label: 'TypeORM',
			src: 'typeorm'
		},
		{
			label: 'Prisma',
			src: 'prisma'
		},

		{
			label: 'Python',
			src: 'python'
		},
		{
			label: 'Flask',
			src: 'flask'
		},
		{
			label: 'Docker',
			src: 'docker'
		}
	];
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
						{#each iconsFrontList as { src, label }}
							<IconTitleDarkLight {src} {label} />
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
						{#each iconsBacktList as { src, label }}
							<IconTitleDarkLight {src} {label} />
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
