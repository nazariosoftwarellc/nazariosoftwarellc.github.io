export type ResolvedPost = {
  appId: string;
  post: string;
  downloadLinks: {
    appleStoreUrl?: string;
    chromeStoreUrl?: string;
    firefoxStoreUrl?: string;
    githubUrl?: string;
  }
};