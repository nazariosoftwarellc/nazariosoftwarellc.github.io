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

## Source Code Nutrition Label

You shouldn't have to worry Beautiful New Tabs is using some privacy-sucking third-party library. You should know what code goes into your apps.

Generally speaking, there are two kinds of third-party code used by apps: those used inside the app, and those used to build the app. 

Code used in the app is included with BNT's code and will run on your device. For example, if an app shows ads from Facebook, it might include the Facebook SDK (BNT does neither).

Then there's code used to build the app, which is *not* included with BNT. It only runs on my computer when I make a new version of the app. I can't list every piece of software that goes into building BNT (what am I going to do, list macOS?), but I can list important third-party code that directly helps build the app. 

### Third-party code included in BNT

This code runs on your device.

- None

### Third-party code used to build BNT 

This code does *not* run on your device.

**The app**

- [Svelte](https://svelte.dev): A framework for building fast, lightweight web apps.
- [TypeScript](https://www.typescriptlang.org): A variant of JavaScript. Helps you write safer, less crash-y code.
- [@tsconfig/svelte](https://www.npmjs.com/package/@tsconfig/svelte): Basic TypeScript configuration for Svelte.
- [tslib](https://www.npmjs.com/package/tslib): Library of TypeScript helper functions.
- [esbuild](https://esbuild.github.io): Super-fast compiler that turns Svelte and TypeScript into code Safari understands.
- [esbuild-svelte](https://www.npmjs.com/package/esbuild-svelte): Lets esbuild compile Svelte files.
- [svelte-preprocess](https://www.npmjs.com/package/svelte-preprocess): Lets Svelte understand TypeScript.

**Code quality**

- [eslint](https://www.npmjs.com/package/eslint): Code-quality checker for TypeScript.
- [eslint-config-google](https://www.npmjs.com/package/eslint-config-google): Tells eslint to make my code conform to Google's house style.
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier): Stops eslint from conflicting with prettier.
- [eslint-plugin-svelte3](https://www.npmjs.com/package/eslint-plugin-svelte3): Lets eslint understand Svelte components.
- [prettier](https://www.npmjs.com/package/prettier): Automatically formats TypeScript to look nice.
- [prettier-plugin-svelte](https://www.npmjs.com/package/prettier-plugin-svelte): Lets prettier understand Svelte.
- [SwiftLint](https://github.com/realm/SwiftLint): Code-quality checker for Swift.
- [SwiftFormat](https://github.com/nicklockwood/SwiftFormat): Automatically formats Swift to look nice.

**Testing**

- [Jest](https://jestjs.io): Tests the parts that make up the new tab page.
- [ts-jest](https://www.npmjs.com/package/ts-jest): Lets me write tests in TypeScript instead of JavaScript.
- [@types/jest](https://www.npmjs.com/package/@types/jest): Lets TypeScript understand Jest.
- [svelte-jester](https://www.npmjs.com/package/svelte-jester): Lets Jest understand Svelte components.
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom): Helps me pick out parts of the page when writing tests.
- [@testing-library/svelte](https://www.npmjs.com/package/@testing-library/svelte): Helps instantiate Svelte components in tests.
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event): Simulates user actions in tests.

---