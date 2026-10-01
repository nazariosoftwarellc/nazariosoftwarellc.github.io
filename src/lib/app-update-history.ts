export type AppRelease = {
	version: string;
};

export type AppUpdateHistory = {
	name: string;
	releases: AppRelease[];
};

export const appUpdateHistories: Record<string, AppUpdateHistory> = {
	'better-times': {
		name: 'Better Times',
		releases: [{ version: '1.0.1' }]
	}
};
