export type TProject = {
	title: string;
	description: string;
	images: string[];
	tools: TTool[];
	repos: TRepo[];
};

export type TTool = {
	src: string;
	label: string;
};

export type TRepo = {
	url: string;
	label: string;
};
