import PostLoader from '$lib/post-loader';
import type { ResolvedPost } from '$lib/types/resolved-types.js';
import AppList from '$lib/assets/json/app-list.json';
import type { NZSAppList } from '$lib/types/app-list.js';

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
	const appMetadata = (AppList as NZSAppList).find(app => app.id === appId);
	if (!appMetadata) {
		throw new Error(`Unknown app id: ${appId}`);
	}
	return {
		appId,
		post,
		downloadLinks: {
			appleStoreUrl: appMetadata.appleStoreUrl,
			chromeStoreUrl: appMetadata.chromeStoreUrl,
			firefoxStoreUrl: appMetadata.firefoxStoreUrl,
			githubUrl: appMetadata.githubUrl
		}
	};
}
