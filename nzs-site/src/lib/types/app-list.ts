export type NZSAppList = Array<{
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  appleStoreUrl?: string;
  chromeStoreUrl?: string;
  firefoxStoreUrl?: string;
  githubUrl?: string;
}>