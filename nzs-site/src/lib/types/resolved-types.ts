export type ResolvedPost = {
  appId: string;
  post: string;
  bannerImageSrc?: string;
  downloadLinks: {
    appleStoreUrl?: string;
    chromeStoreUrl?: string;
    firefoxStoreUrl?: string;
    githubUrl?: string;
  }
};