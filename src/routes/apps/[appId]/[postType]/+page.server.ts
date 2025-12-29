import PostLoader from '$lib/post-loader';
import type { ResolvedAppPost } from '$lib/types/resolved-types.js';

export async function load({ fetch, params }): Promise<ResolvedAppPost> {
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
		case 'changelog':
			filename = `${appId}-changelog`;
			break;
		case 'credits':
			filename = `${appId}-credits`;
			break;
		default:
			throw new Error(`Unknown post type: ${postType}`);
	}
	const post = await PostLoader.loadPost(filename);

	const appList = await PostLoader.loadAppList(fetch);
	const appMetadata = appList.find(app => app.id === appId);
	if (!appMetadata) {
		throw new Error(`Unknown app id: ${appId}`);
	}

	let bannerImageSrc: string | undefined = undefined;
	const bannerImageExists = await PostLoader.postHasBannerImage(fetch, appId);
	if (bannerImageExists) {
		bannerImageSrc = `/img/${appId}-banner.webp`;
	}

	return {
		appId,
		post,
		postType,
		bannerImageSrc,
		downloadLinks: {
			appleStoreUrl: appMetadata.appleStoreUrl,
			chromeStoreUrl: appMetadata.chromeStoreUrl,
			firefoxStoreUrl: appMetadata.firefoxStoreUrl,
			githubUrl: appMetadata.githubUrl
		}
	};
}
