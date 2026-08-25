import { json } from '@sveltejs/kit';

const appIDs = ['AU576FY884.com.nazariosoftware.Better-Times'];

export function GET() {
	return json(
		{
			applinks: {
				details: [
					{
						appIDs,
						components: [
							{
								'/': '/apps/better-times/purchase',
								comment: 'Open the Better Times purchase window'
							}
						]
					}
				]
			}
		},
		{
			headers: {
				'cache-control': 'public, max-age=3600'
			}
		}
	);
}
