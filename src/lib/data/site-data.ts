import { PROJECTS, type Project } from './projects-list';

interface SiteData {
	name: string;
	githubUsername: string;
	intro: string;
	about: string[];
	tools: string[];
	interest: string[];
	projects: Project[];
}

export const SITE_DATA: SiteData = {
	name: 'Adebayo Muis',
	githubUsername: 'Charmingdc',
	intro:
		'Frontend Engineer, obsessed with building fast and optimized user interfaces that are not just beautiful but connect with users on every click and scroll.',
	about: [
		'I enjoy building interfaces that feel fast, intuitive, and alive. I’m fascinated by how things work and enjoy turning ideas into real, functional experiences.',
		'With a background in technology and ongoing studies in mechatronics, I approach problems from first principles, exploring how software and hardware interact to create seamless experiences.',
		'I thrive on challenges that let me blend design, engineering, and creativity. Whether it’s refining a user flow, experimenting with a small interaction, or building a tool that solves a specific problem, I focus on crafting experiences that feel deliberate and satisfying.',
		'Right now, I’m honing my skills on micro-interactions and deepening my understanding of what makes interfaces genuinely captivating and enjoyable to use.',
		'This site is a space to share the work I’ve built, experiments I’ve explored,   and ideas that drive me — a glimpse into how I think, create, and approach the intersection of design and technology.'
	],
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
	interest: [
		'Beyond building and designing interfaces, I enjoy reading books on self-improvement, communication, and programming. I’m always looking to improve my skills, write cleaner code, and understand people better.',
		'I also love creating art with pencil and paper. The process of turning an idea into a tangible drawing is both challenging and deeply satisfying, and it often inspires how I approach design and coding.'
	],
	projects: PROJECTS
};
