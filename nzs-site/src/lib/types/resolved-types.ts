export type ResolvedPost = {
  postType: 'about' | 'privacy' | 'support' | 'changelog';
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