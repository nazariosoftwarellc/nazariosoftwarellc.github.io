import type { RequestHandler } from './$types';
import { create } from 'xmlbuilder2';

export const GET: RequestHandler = ({ params, url }) => {
	const appName = `${params.appId} updates`;
	const appUrl = `${url.origin}/apps/${params.appId}`;
	const xml = create({ version: '1.0', encoding: 'utf-8' })
		.ele('rss', {
			version: '2.0',
			'xmlns:sparkle': 'http://www.andymatuschak.org/xml-namespaces/sparkle'
		})
		.ele('channel')
		.ele('title')
		.txt(appName)
		.up()
		.ele('link')
		.txt(appUrl)
		.up()
		.ele('description')
		.txt(`Software updates for ${params.appId}.`)
		.doc()
		.end({ prettyPrint: true });

	return new Response(xml, {
		headers: {
			'content-type': 'application/xml; charset=utf-8'
		}
	});
};
