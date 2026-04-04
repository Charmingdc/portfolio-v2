export interface Project {
	name: string;
	description: string;
	githubRepo?: string;
	liveUrl: string;
}

export const PROJECTS: Project[] = [
	{
		name: 'ScrollJs',
		description:
			'ScrollJs is a performance-first library designed for developers who need powerful scroll-triggered animations without the bloat of larger frameworks.',
		githubRepo: 'ScrollJs',
		liveUrl: 'https://www.npmjs.com/package/@charmingdc/scrolljs'
	},
	{
		name: 'Postmorph',
		description:
			'Postmorph is a cutting-edge platform designed to revolutionize content workflows. It leverages advanced AI to transform existing content from sources like YouTube, TikTok, and blogs into tailored formats for different platforms',
		githubRepo: 'Postmorph',
		liveUrl: 'https://postmorph.vercel.app'
	},
	{
		name: 'Emojinary',
		description:
			'Emojinary is a full-stack puzzle game that combines AI-driven logic with engaging gameplay to challenge cognitive skills through interactive emoji clues.',
		githubRepo: 'Emojinary',
		liveUrl: 'https://funemojinary.vercel.app'
	},
	{
		name: 'SafeWords',
		description:
			'SafeWords is a privacy-first utility engineered to give users absolute control over their sensitive data through local-only cryptographic operations.',
		githubRepo: 'SafeWords',
		liveUrl: 'https://safewords.vercel.app'
	}
];
