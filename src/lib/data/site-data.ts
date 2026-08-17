import { PROJECTS, type Project } from './projects-list';

interface CurrentProject {
	name: string;
	icon?: string;
	link: string;
}

interface SiteData {
	name: string;
	githubUsername: string;
	xUsername: string;
	intro: string;
	currentProject: CurrentProject;
	tools: { name: string; description: string }[];
	projects: Project[];
}

export const SITE_DATA: SiteData = {
	name: 'Muis.',
	githubUsername: 'Charmingdc',
	xUsername: 'Charmingdc01',
	intro: 'Frontend Engineer, obsessed with building fast and optimized user interfaces.',
	currentProject: {
		name: 'Myhappr',
		link: 'https://myhappr.com'
	},
	tools: [
		{ name: 'Html', description: 'Markup for web structure' },
		{ name: 'Css', description: 'Stylesheet for layout & design' },
		{ name: 'JavaScript', description: 'Scripting for interactivity' },
		{ name: 'Typescript', description: 'Typed superset of JavaScript' },
		{ name: 'React.js', description: 'Frontend UI library' },
		{ name: 'Next.js', description: 'React framework for production' },
		{ name: 'SvelteKit', description: 'Svelte application framework' },
		{ name: 'Motion', description: 'Animation library for the web' },
		{ name: 'Supabase', description: 'Open-source Postgres backend' },
		{ name: 'Firebase', description: 'Backend-as-a-service platform' },
		{ name: 'Seo', description: 'Search engine optimization' }
	],

	projects: PROJECTS
};
