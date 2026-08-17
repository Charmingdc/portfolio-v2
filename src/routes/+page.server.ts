import type { PageServerLoad } from './$types';
import { getCollection, type Collection } from 'skriplet';

export const load: PageServerLoad = async () => {
	const collection: Collection | null = await getCollection('blog');

	return {
		posts: collection?.items ?? []
	};
};
