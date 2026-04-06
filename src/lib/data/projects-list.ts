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
	},
	{
		name: 'MindEcho',
		description:
			'MindEcho is a mental health companion designed to help users track emotional trends and engage in positive mental health practices.',
		githubRepo: 'MindEcho',
		liveUrl: 'https://mindecho-six.vercel.app'
	},
	{
		name: 'BookQuest',
		description:
			'BookQuest is a modern platform that streamlines book discovery, allowing users to explore curated genres and manage personal favorites.',
		githubRepo: 'BookQuest',
		liveUrl: 'https://bookquest-eosin.vercel.app'
	},
	{
		name: 'Romanify',
		description:
			'Romanify is a lightweight TypeScript library built for programmatic conversion of integers into Roman numerals with support for large values.',
		githubRepo: 'Romanify',
		liveUrl: 'https://romanify.vercel.app'
	},
	{
		name: 'Thryve',
		description:
			'Thryve is a mindfulness-focused app designed to encourage daily gratitude through gamified tracking and interactive progress visualization.',
		githubRepo: 'Thryve',
		liveUrl: 'https://thryve-alpha.vercel.app'
	},
	{
		name: 'SwiftScan',
		description:
			'SwiftScan is an open-source utility designed for speed and accessibility, allowing users to generate and export QR codes instantly.',
		githubRepo: 'SwiftScan',
		liveUrl: 'https://swiftscan-delta.vercel.app'
	}
];
