---
layout: post
title: Replies for Hacker News privacy policy
banner: /assets/img/rhn-splash.png
tags: replies-for-hn privacy-policy
---

An email address is required to purchase Replies for Hacker News. **Your email address will not be shared or messaged**. It is used only to identify your purchase if you need to restore it at some point in the future. 

Other than that, Replies for Hacker News collects no information about its users. Comments displayed in the replies page are sourced using public data through the Hacker News API. This extension has no access to any non-public information related to your Hacker News account. 

This extension also runs only on [https://news.ycombinator.com](https://news.ycombinator.com). It cannot access data on other websites.

{% include nutrition_label_explanation.html name="Replies for Hacker News" shortName="Replies" %}

### Third-party code included in Mute Chat

This code runs on your device.

- [detect-browser](https://www.npmjs.com/package/detect-browser): Small tool to check which browser is running Mute Chat so the extension can use the correct icon image. This information is not logged or shared.
- [webextension-polyfill](https://github.com/mozilla/webextension-polyfill): A Mozilla library that smoothes over differences between web browsers, allowing Mute Chat to run on all of them with the same code.
- [DayJS](https://day.js.org): A library for formatting dates.

### Third-party code used to build RHN

This code does *not* run on your device.

- [Svelte](https://svelte.dev): A framework for building fast, lightweight web apps.
- [TypeScript](https://www.typescriptlang.org): A variant of JavaScript. Helps you write safer, less crash-y code.
- [@tsconfig/svelte](https://www.npmjs.com/package/@tsconfig/svelte): Basic TypeScript configuration for Svelte.
- [esbuild](https://esbuild.github.io): Super-fast compiler that turns Svelte and TypeScript into code Safari understands.
- [esbuild-svelte](https://www.npmjs.com/package/esbuild-svelte): Lets esbuild compile Svelte files.
- [svelte-preprocess](https://www.npmjs.com/package/svelte-preprocess): Lets Svelte understand TypeScript.
- [fs-extra](https://www.npmjs.com/package/fs-extra): Helps build the extension 
- [prettier](https://www.npmjs.com/package/prettier): Automatically formats my code to look nice.
- [prettier-plugin-svelte](https://www.npmjs.com/package/prettier-plugin-svelte): Lets prettier understand Svelte.
- [sass](https://www.npmjs.com/package/sass): Lets me change the format and colors of the extension more easily
- [zip-local](https://www.npmjs.com/package/zip-local): Packages up files for submission to the Chrome Store.