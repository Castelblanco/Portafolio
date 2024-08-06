import type { TProject } from '.';

export const projects: TProject[] = [
	{
		title: 'Your Management',
		description:
			'This project was a proposal for the Envía Company, for the administrative management of packages and merchandise, in the end it only remains as a university delivery project. What this app offers was a UI to create and edit clients, users, delivery points and service guides, where Javascript technologies were used and even an interactive map for the location of the delivery points and those of origin and destination. of the merchandise of each service guide.',
		images: [
			'/projects/your-management-1.png',
			'/projects/your-management-2.png',
			'/projects/your-management-3.png'
		],
		repos: [
			{
				url: 'https://github.com/Castelblanco/your-management-server',
				label: 'BackEnd'
			},
			{
				url: 'https://github.com/Castelblanco/your-management-front',
				label: 'FrontEnd'
			}
		],
		tools: [
			{
				label: 'BunJs',
				src: 'bun'
			},
			{
				label: 'ElysiaJs',
				src: 'elysia'
			},
			{
				label: 'Typescript',
				src: 'ts'
			},
			{
				label: 'Prisma',
				src: 'prisma'
			},
			{
				label: 'Postgres',
				src: 'postgres'
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
				label: 'Firebase',
				src: 'firebase'
			}
		]
	}
];
