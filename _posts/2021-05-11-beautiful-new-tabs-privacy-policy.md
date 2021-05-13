---
layout: post
heading: Beautiful New Tabs privacy policy
banner: /assets/img/bnt-3.png
tags: bnt privacy-policy
---

Beautiful New Tabs does not collect any data about its users.

BNT uses your provided location to load weather data. This information is cached locally on your computer so it can be loaded when you open a new tab. It is not stored or logged anywhere else. [^1]

[^1]: For nerds: It's in `localStorage`.

BNT also stores your image search query locally on your computer so new images can be loaded when you open a new tab. This is also not stored or logged anywhere else.

## Code Nutrition Label

You shouldn't have to worry Beautiful New Tabs is using some privacy-sucking SDK. You should know what code goes into your apps.

Generally speaking, there are two kinds of third-party code used by apps: those used inside the app, and those used to build the app. 

Code used in the app is included with BNT's code and will run on your device. For example, if an app shows ads from Facebook, it might include the Facebook SDK (BNT does neither).

Then there's code used to build the app, which is *not* included with BNT. It only runs on my computer when I make a new version of the app.

Third-party code included in BNT:

- None

Third-party code used to build BNT:

- [Svelte](https://svelte.dev)
- [esbuild](https://esbuild.github.io)
- [TypeScript](https://www.typescriptlang.org)
- [@tsconfig/svelte](https://www.npmjs.com/package/@tsconfig/svelte)
- [esbuild-svelte](https://www.npmjs.com/package/esbuild-svelte)
- [svelte-check](https://www.npmjs.com/package/svelte-check)
- [svelte-preprocess](https://www.npmjs.com/package/svelte-preprocess)
- [tslib](https://www.npmjs.com/package/tslib)