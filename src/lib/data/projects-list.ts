export interface Project {
	name: string;
	slug: string;
	imageurl: string;
	description: string;
	githubRepo?: string;
	liveUrl: string;
}

export const PROJECTS: Project[] = [
	{
		name: 'Myhappr',
		slug: 'myhappr',
		imageurl: '',
		description:
			'Creator support platform for receiving global tips and settling payments directly to local bank accounts.',
		liveUrl: 'https://myhappr.com'
	},
	{
		name: 'Postmorph',
		slug: 'postmorph',
		imageurl: '',
		description:
			'AI-powered content repurposing platform for transforming videos, articles, and other content into platform-ready formats.',
		githubRepo: 'Postmorph',
		liveUrl: 'https://postmorph.vercel.app'
	},
	{
		name: 'Glint',
		slug: 'glint',
		imageurl: '',
		description:
			'Deterministic gradient avatar generator for creating lightweight, customizable avatars from seeds or initials.',
		githubRepo: 'Glint',
		liveUrl: 'https://glint-dev.vercel.app'
	},
	{
		name: 'ScrollJs',
		slug: 'scrolljs',
		imageurl: '',
		description:
			'Performance-first animation library for building lightweight scroll-triggered effects without unnecessary framework overhead.',
		githubRepo: 'ScrollJs',
		liveUrl: 'https://www.npmjs.com/package/@charmingdc/scrolljs'
	},
	{
		name: 'Emojinary',
		slug: 'emojinary',
		imageurl: '',
		description:
			'AI-powered puzzle game combining interactive emoji clues with logic-based challenges for an engaging cognitive experience.',
		githubRepo: 'Emojinary',
		liveUrl: 'https://funemojinary.vercel.app'
	},
	{
		name: 'SafeWords',
		slug: 'safewords',
		imageurl: '',
		description:
			'Privacy-first utility for managing sensitive information through local-only cryptographic operations with no server storage.',
		githubRepo: 'SafeWords',
		liveUrl: 'https://safewords.vercel.app'
	}
];
