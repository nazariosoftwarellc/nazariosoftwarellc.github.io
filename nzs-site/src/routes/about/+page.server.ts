import PostLoader from '$lib/post-loader';
import type { ResolvedPost } from '$lib/types/resolved-types';

export async function load(): Promise<ResolvedPost> {
  const post = await PostLoader.loadPost('about');
  return { post };
}