import { error } from '@sveltejs/kit';
import { SITE_DATA } from '$lib/data/site-data';

export function load({ params }) {
	const project = SITE_DATA.projects.find((p) => p.slug === params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
}
