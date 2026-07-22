export interface Skill {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'database' | 'devops';
}

export interface Project {
    title: string;
    context: string;
    action: string;
    result: string;
    highlights: string[];
}

export interface Social {
    name: string;
    url: string;
    icon: string;
    label: string;
}
