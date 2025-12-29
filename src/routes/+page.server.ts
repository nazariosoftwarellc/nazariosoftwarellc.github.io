import PostLoader from '$lib/post-loader.js';
import type { NZSAppList } from '$lib/types/app-list';
import type { ResolvedAppList } from '$lib/types/resolved-types';

export const prerender = true;

export async function load({ fetch }): Promise<ResolvedAppList> {
	const appList: NZSAppList = await PostLoader.loadAppList(fetch);
	return { appList };
}
