export type AppRelease = {
	version: string;
	pubDate: Date;
	headingId: string;
};

export type AppUpdateHistory = {
	name: string;
	releases: AppRelease[];
};

export const appUpdateHistories: Record<string, AppUpdateHistory> = {
	'better-times': {
		name: 'Better Times',
		releases: [
			{
				version: '1.0.2',
				pubDate: new Date(),
				headingId: '102oct22026'
			}
		]
	}
};
