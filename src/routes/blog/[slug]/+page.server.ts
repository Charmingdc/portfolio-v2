import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getItem, type ContentItem } from 'skriplet';

type BlogPostData = {
	title: string;
	description: string;
	date: string;
	order: number;
	tags?: string[];
};

type BlogPostItem = Omit<ContentItem, 'data'> & { data: BlogPostData };

export const load: PageServerLoad = async ({ params }) => {
	const item: ContentItem | null = await getItem('blog', params.slug);

	if (!item) throw error(404);

	const post: BlogPostItem = { ...item, data: item.data as BlogPostData };

	return { post };
};
