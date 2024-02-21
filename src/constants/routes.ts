import type { LayoutRouteId } from '../routes/$types';

export type TBtnRoute = {
	label: string;
	uri: LayoutRouteId;
};

export const btnListRoutes: TBtnRoute[] = [
	{
		label: 'Skills',
		uri: '/skills'
	},
	{
		label: 'Projects',
		uri: '/projects'
	},
	{
		label: 'Experience',
		uri: '/experience'
	}
];
