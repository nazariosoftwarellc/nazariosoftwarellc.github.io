import { error } from '@sveltejs/kit';
import { appUpdateHistories } from '$lib/app-update-history';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, platform, url }) => {
	const updateHistory = appUpdateHistories[params.appId];
	const release = updateHistory?.releases.find(candidate => candidate.version === params.version);

	if (!release) {
		throw error(404, 'Release not found');
	}

	const assetUrl = new URL(`/releases/${params.appId}/${release.version}.zip`, url);
	let response = await platform?.env.ASSETS.fetch(assetUrl);
	if (!response?.ok) {
		response = await fetch(assetUrl);
	}

	if (!response.ok) {
		throw error(404, 'Release file not found');
	}

	return response;
};
