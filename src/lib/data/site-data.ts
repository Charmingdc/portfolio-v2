import { PROJECTS, type Project } from './projects-list';

interface CurrentProject {
	name: string;
	icon?: string;
	link: string;
}

interface SiteData {
	name: string;
	githubUsername: string;
	intro: string;
	currentProject: CurrentProject;
	tools: string[];
	projects: Project[];
}

export const SITE_DATA: SiteData = {
	name: 'Adebayo Muis.',
	githubUsername: 'Charmingdc',
	intro: 'Frontend Engineer, obsessed with building fast and optimized user interfaces.',
	currentProject: {
		name: 'Myhappr',
		link: 'https://myhappr.com'
	},
	tools: [
		'Html',
		'Css',
		'JavaScript',
		'Typescript',
		'React.js',
		'Next.js',
		'SvelteKit',
		'Motion',
		'Supabase',
		'Firebase',
		'Seo'
	],

	projects: PROJECTS
};
