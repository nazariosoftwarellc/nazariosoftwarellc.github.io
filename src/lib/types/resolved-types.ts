import type { NZSAppList } from './app-list';

export type ResolvedPost = {
	post: string;
};

export type ResolvedAppPost = ResolvedPost & {
	postType: 'about' | 'privacy' | 'support' | 'changelog' | 'credits';
	appId: string;
	bannerImageSrc?: string;
	downloadLinks: {
		appleStoreUrl?: string;
		chromeStoreUrl?: string;
		firefoxStoreUrl?: string;
		githubUrl?: string;
	};
};

export type ResolvedAppList = {
	appList: NZSAppList;
};
