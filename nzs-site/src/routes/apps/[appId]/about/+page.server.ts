import PostLoader from '$lib/post-loader';
import type { ResolvedPost } from '$lib/types/resolved-types.js';

export async function load({ params }): Promise<ResolvedPost> {
	const { appId } = params;
	const post = await PostLoader.loadPost(`about-${appId}`);
	return { appId, post };
}