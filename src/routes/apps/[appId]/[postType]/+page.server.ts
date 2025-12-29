import PostLoader from '$lib/post-loader';
import type { ResolvedAppPost } from '$lib/types/resolved-types.js';

export async function load({ fetch, params }): Promise<ResolvedAppPost> {
	const { appId, postType } = params;
	const postFilename = PostLoader.getPostFilenameFromType(appId, postType);
	const post = await PostLoader.loadPost(postFilename);

	const appList = await PostLoader.loadAppList(fetch);
	const appMetadata = appList.find(app => app.id === appId);
	if (!appMetadata) {
		throw new Error(`Unknown app id: ${appId}`);
	}

	const appName = appMetadata.name;

	let bannerImageSrc: string | undefined = undefined;
	const bannerImageExists = await PostLoader.postHasBannerImage(fetch, appId);
	if (bannerImageExists) {
		bannerImageSrc = `/img/${appId}-banner.webp`;
	}

	return {
		appId,
		appName,
		post,
		// getPostFilenameFromType crashes if postType is invalid, so we can assert it's valid here
		postType: postType as ResolvedAppPost['postType'],
		bannerImageSrc,
		downloadLinks: {
			appleStoreUrl: appMetadata.appleStoreUrl,
			chromeStoreUrl: appMetadata.chromeStoreUrl,
			firefoxStoreUrl: appMetadata.firefoxStoreUrl,
			githubUrl: appMetadata.githubUrl
		}
	};
}
