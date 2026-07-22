import type { Skill } from '@/types';

export const skillsFrontend: Skill[] = [
    { name: 'React', icon: 'devicon-react-original', category: 'frontend' },
    { name: 'React Native', icon: 'devicon-reactnative-original', category: 'frontend' },
    { name: 'Vue', icon: 'devicon-vuejs-plain', category: 'frontend' },
    { name: 'Svelte', icon: 'devicon-svelte-plain', category: 'frontend' },
    { name: 'Angular', icon: 'devicon-angularjs-plain', category: 'frontend' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain', category: 'frontend' },
    { name: 'Nuxt', icon: 'devicon-nuxtjs-plain', category: 'frontend' },
    { name: 'SvelteKit', icon: 'devicon-svelte-plain', category: 'frontend' },
    { name: 'Expo', icon: 'devicon-react-original', category: 'frontend' },
    { name: 'Vite', icon: 'devicon-vitejs-plain', category: 'frontend' },
    { name: 'Material UI', icon: 'devicon-materialui-plain', category: 'frontend' },
    { name: 'Tauri', icon: 'devicon-tauri-plain', category: 'frontend' },
    { name: 'Electron', icon: 'devicon-electron-original', category: 'frontend' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', category: 'frontend' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', category: 'frontend' },
];

export const skillsBackend: Skill[] = [
    { name: 'Node.js', icon: 'devicon-nodejs-plain', category: 'backend' },
    { name: 'NestJS', icon: 'devicon-nestjs-plain', category: 'backend' },
    { name: 'Express', icon: 'devicon-express-original', category: 'backend' },
    { name: 'Socket.IO', icon: 'devicon-socketio-original', category: 'backend' },
    { name: 'GraphQL', icon: 'devicon-graphql-plain', category: 'backend' },
    { name: 'Bun', icon: 'devicon-bun-plain colored', category: 'backend' },
    { name: 'Python', icon: 'devicon-python-plain', category: 'backend' },
    { name: 'Django', icon: 'devicon-django-plain', category: 'backend' },
    { name: 'Flask', icon: 'devicon-flask-original', category: 'backend' },
    { name: 'FastAPI', icon: 'devicon-fastapi-plain', category: 'backend' },
    { name: 'Java', icon: 'devicon-java-plain', category: 'backend' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain', category: 'backend' },
    { name: 'C#', icon: 'devicon-csharp-plain', category: 'backend' },
    { name: 'Go', icon: 'devicon-go-original-wordmark', category: 'backend' },
    { name: 'Sequelize', icon: 'devicon-sequelize-plain', category: 'backend' },
    { name: 'Prisma', icon: 'devicon-prisma-original', category: 'backend' },
    { name: 'Mongoose', icon: 'devicon-mongoose-original', category: 'backend' },
];

export const skillsDatabase: Skill[] = [
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', category: 'database' },
    { name: 'Redis', icon: 'devicon-redis-plain', category: 'database' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', category: 'database' },
    { name: 'MySQL', icon: 'devicon-mysql-plain', category: 'database' },
    { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain', category: 'database' },
];

export const skillsDevops: Skill[] = [
    { name: 'Docker', icon: 'devicon-docker-plain', category: 'devops' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', category: 'devops' },
    { name: 'GCP', icon: 'devicon-googlecloud-plain', category: 'devops' },
    { name: 'OCI', icon: 'devicon-oracle-original', category: 'devops' },
    { name: 'Firebase', icon: 'devicon-firebase-plain', category: 'devops' },
    { name: 'Git', icon: 'devicon-git-plain colored', category: 'devops' },
];

export const allSkills = [...skillsFrontend, ...skillsBackend, ...skillsDatabase, ...skillsDevops];
