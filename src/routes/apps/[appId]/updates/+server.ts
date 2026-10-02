import { error } from '@sveltejs/kit';
import { appUpdateHistories } from '$lib/app-update-history';
import type { RequestHandler } from './$types';
import { create } from 'xmlbuilder2';

export const GET: RequestHandler = ({ params, url }) => {
	const updateHistory = appUpdateHistories[params.appId];
	if (!updateHistory) {
		throw error(404, 'No update feed is available for this app');
	}

	const appUrl = `${url.origin}/apps/${params.appId}`;
	const channel = create({ version: '1.0', encoding: 'utf-8' })
		.ele('rss', {
			version: '2.0',
			'xmlns:sparkle': 'http://www.andymatuschak.org/xml-namespaces/sparkle'
		})
		.ele('channel');

	channel.ele('title').txt(`${updateHistory.name} Updates`).up();
	channel.ele('link').txt(appUrl).up();
	channel.ele('description').txt(`Software updates for ${updateHistory.name}.`).up();
	channel.ele('language').txt('en').up();

	for (const release of updateHistory.releases) {
		const releaseUrl = `${appUrl}/releases/${release.version}.zip`;

		const item = channel.ele('item');
		item.ele('title').txt(`Version ${release.version}`).up();
		item.ele('link').txt(appUrl).up();
		item.ele('sparkle:version').txt(release.version).up();
		item.ele('sparkle:releaseNotesLink').txt(`${appUrl}/changelog`).up();
		item.ele('pubDate').txt(release.pubDate.toDateString()).up();
		item
			.ele('enclosure', {
				url: releaseUrl,
				'sparkle:version': release.version,
				type: 'application/octet-stream'
			})
			.up();
	}

	const xml = channel.doc().end({ prettyPrint: true });

	return new Response(xml, {
		headers: {
			'content-type': 'application/xml; charset=utf-8'
		}
	});
};
