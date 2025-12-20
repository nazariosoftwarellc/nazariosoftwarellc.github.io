import PostLoader from '$lib/post-loader';
import type { ResolvedPost } from '$lib/types/resolved-types.js';

export async function load({ params }): Promise<ResolvedPost> {
	const { appId, postType } = params;
	let filename: string;
	switch (postType) {
		case 'about':
			filename = `${appId}-about`;
			break;
		case 'privacy':
			filename = `${appId}-privacy-policy`;
			break;
		case 'support':
			filename = `${appId}-help`;
			break;
		default:
			throw new Error(`Unknown post type: ${postType}`);
	}
	const post = await PostLoader.loadPost(filename);
	return { appId, post };
}