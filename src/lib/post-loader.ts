import { asset } from '$app/paths';
import showdown from 'showdown';
import type { NZSAppList } from './types/app-list';

const converter = new showdown.Converter({ splitAdjacentBlockquotes: true });

class PostLoader {
	static async loadPost(name: string) {
		const files = import.meta.glob('../posts/*.md', {
			as: 'raw'
		});
		const markdown = await files[`../posts/${name}.md`]();
		return converter.makeHtml(markdown);
	}

	static async loadAppList(svelteFetch: typeof fetch): Promise<NZSAppList> {
		const appListJsonUrl = asset('/json/app-list.json');
		const response = await svelteFetch(appListJsonUrl);
		if (!response.ok) {
			throw new Error('Failed to fetch app list');
		}
		return await response.json();
	}

	static async postHasBannerImage(svelteFetch: typeof fetch, appId: string): Promise<boolean> {
		try {
			const response = await svelteFetch(asset(`/img/${appId}-banner.webp`), {
				method: 'HEAD'
			});
			return response.ok;
		} catch {
			return false;
		}
	}

	static getPostFilenameFromType(appId: string, postType: string): string {
		switch (postType) {
			case 'about':
				return `${appId}-about`;
			case 'privacy':
				return `${appId}-privacy-policy`;
			case 'support':
				return `${appId}-help`;
			case 'changelog':
				return `${appId}-changelog`;
			case 'credits':
				return `${appId}-credits`;
			default:
				throw new Error(`Unknown post type: ${postType}`);
		}
	}
}

export default PostLoader;
