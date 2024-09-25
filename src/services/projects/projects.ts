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
				label: 'React',
				src: 'react'
			},
			{
				label: 'Material UI',
				src: 'material-ui'
			},
			{
				label: 'Firebase',
				src: 'firebase'
			},
			{
				label: 'Docker',
				src: 'docker'
			}
		]
	},
	{
		title: 'Minibares',
		description:
			'This project was my first project based on microservices, where I learned Python, Flask and Devops topics such as Kubernetes, this project solves a business management problem for the company Minibares, where this software manages the entire administrative part, my role was to resolve bugs and stabilize the software, since it had many crashes, which I was able to achieve successfully. I also had to optimize an entire mobile app for employees, which I did by migrating the app to React-Native + Expo and implementing data dating strategies such as using the (abortController).',
		images: [
			'/projects/minibares-1.png',
			'/projects/minibares-2.png',
			'/projects/minibares-3.png'
		],
		repos: [],
		tools: [
			{
				label: 'JavaScript',
				src: 'js'
			},
			{
				label: 'Typescript',
				src: 'ts'
			},
			{
				label: 'Nodejs',
				src: 'node'
			},
			{
				label: 'Express',
				src: 'express'
			},
			{
				label: 'Nestjs',
				src: 'nest'
			},
			{
				label: 'Sequelize',
				src: 'sequelize'
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
				label: 'React-Native',
				src: 'react'
			},
			{
				label: 'Expo',
				src: 'expo'
			},
			{
				label: 'Firebase',
				src: 'firebase'
			},
			{
				label: 'Postgres',
				src: 'postgres'
			},
			{
				label: 'Docker',
				src: 'docker'
			}
		]
	},
	{
		title: 'Smart Tek',
		description:
			'This administrative software based on microservices, was created for a model of dealership based business, my role was take care of the backend solving bugs and improving the optimization of some cases of use, apart from developing and deploying new services, having to touch the infrastructure a little using Kubernetes. I also developed a cross-platform mobile app for the salespeople of each dealership using React-Native + Expo.',
		images: [],
		repos: [],
		tools: [
			{
				label: 'JavaScript',
				src: 'js'
			},
			{
				label: 'Typescript',
				src: 'ts'
			},
			{
				label: 'Nodejs',
				src: 'node'
			},
			{
				label: 'Express',
				src: 'express'
			},
			{
				label: 'MongoDB',
				src: 'mongo'
			},
			{
				label: 'React-Native',
				src: 'react'
			},
			{
				label: 'Expo',
				src: 'expo'
			},
			{
				label: 'Firebase',
				src: 'firebase'
			},
			{
				label: 'Docker',
				src: 'docker'
			}
		]
	}
];
