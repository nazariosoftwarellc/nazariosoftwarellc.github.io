import type { RequestHandler } from './$types';
import { create } from 'xmlbuilder2';

// prettier-ignore
export const GET: RequestHandler = ({ params, url }) => {
	const appName = 'Better Times';
	const appUrl = `${url.origin}/apps/${params.appId}`;
	const siteUrl = url.origin;
	const xml = create({ version: '1.0', encoding: 'utf-8' })
		.ele('rss', {
			version: '2.0',
			'xmlns:sparkle': 'http://www.andymatuschak.org/xml-namespaces/sparkle'
		})
			.ele('channel')
				.ele('title')
					.txt(`${appName} Updates`)
				.up()
				.ele('link')
					.txt(appUrl)
				.up()
				.ele('description')
					.txt(`Software updates for ${params.appId}.`)
				.up()
				.ele('language')
					.txt('en')
				.up()
				.ele('item')
					.ele('title')
						.txt('Version 1.0.1')
					.up()
					.ele('link')
						.txt(`${siteUrl}/apps/${params.appId}/releases/1.0.1.zip`)
					.up()
					.ele('sparkle:version')
						.txt('1.0.1')
					.up()
		.doc()
		.end({ prettyPrint: true });

	return new Response(xml, {
		headers: {
			'content-type': 'application/xml; charset=utf-8'
		}
	});
};
