---
layout: post
heading: Autofill Email Codes privacy policy
banner: /assets/img/aec-banner.png
tags: aec privacy-policy
---

Autofill Email Codes does not collect any data about its users. 

AEC checks only your most recently received email messages for login codes. It then displays those codes in the browser extension window. 

The app does not store any information from your email whatsoever. It does not share any information from your email with any third parties. It does not use your information for any purpose other than displaying possible autofill codes. 

When you grant AEC permission to access your email, it stores an access token in your browser's storage. 

* If your browser syncs data between desktop and mobile, the token will be synced as well. No third party can access it.
* It is only used to check your emails for login codes.
* It is never shared. 

The app's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. 

{% include nutrition_label_explanation.html name="Autofill Email Codes" shortName="AEC" %}

### Third-party code included in AEC

This code runs on your device.

- [React](https://react.dev): A framework that builds the UI displayed in the AEC popup
- [react-hotkeys-hook](https://www.npmjs.com/package/react-hotkeys-hook): Adds keyboard shortcuts to AEC
- [DayJS](https://day.js.org): Formats dates so AEC can check just today's emails for login codes
- [js-base64](https://www.npmjs.com/package/js-base64): Lets AEC read emails returned from Gmail
- [linkedom](https://www.npmjs.com/package/linkedom): Lets AEC search through emails for codes
- [ramda](https://www.npmjs.com/package/ramda): Helps AEC filter duplicate codes

### Third-party code used to build AEC

This code does *not* run on your device. 

**The app**

- [TypeScript](https://www.typescriptlang.org): A variant of JavaScript. Helps me write safer, less crash-y code.
- [esbuild](https://esbuild.github.io): Super-fast compiler that turns React and TypeScript into code Safari understands.
- [prettier](https://www.npmjs.com/package/prettier): Automatically formats my code to look nice.

### Icons

* Toolbar envelope icon by Ralf Schmitzer from the [Noun Project](https://thenounproject.com/browse/icons/term/envelope/)