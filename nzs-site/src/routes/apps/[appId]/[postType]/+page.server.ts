import PostLoader from '$lib/post-loader';
import type { ResolvedAppPost } from '$lib/types/resolved-types.js';
import AppList from '$lib/assets/json/app-list.json';
import type { NZSAppList } from '$lib/types/app-list.js';
import fs from 'fs/promises';
import path from 'path';

export async function load({ params }): Promise<ResolvedAppPost> {
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

	const appMetadata = (AppList as NZSAppList).find(app => app.id === appId);
	if (!appMetadata) {
		throw new Error(`Unknown app id: ${appId}`);
	}

	let bannerImageSrc: string | undefined = undefined;
	const bannerImageExists = await fs
		.access(path.resolve('src/lib/assets/img', `${appId}-banner.png`))
		.then(() => true)
		.catch(() => false);
	if (bannerImageExists) {
		bannerImageSrc = `/src/lib/assets/img/${appId}-banner.png`;
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
