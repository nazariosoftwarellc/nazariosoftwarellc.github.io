export type AppRelease = {
	version: string;
	pubDate: Date;
	headingId: string;
};

export type AppUpdateHistory = {
	name: string;
	releases: AppRelease[];
};

type IntermediateAppRelease = {
	version: string;
	pubDate: string | Date;
	headingId: string;
};

type IntermediateAppUpdateHistory = {
	name: string;
	releases: IntermediateAppRelease[];
};

const histories: Record<string, IntermediateAppUpdateHistory> = {
	'better-times': {
		name: 'Better Times',
		releases: [
			{
				version: '1.0.3',
				pubDate: '2026-10-02',
				headingId: '103oct22026'
			},
			{
				version: '1.0.2',
				pubDate: '2026-10-02',
				headingId: '102oct22026'
			}
		]
	}
};

Object.values(histories).forEach(history => {
	history.releases.forEach(release => {
		release.pubDate = new Date(release.pubDate);
	});
});

export const appUpdateHistories = histories as Record<string, AppUpdateHistory>;
