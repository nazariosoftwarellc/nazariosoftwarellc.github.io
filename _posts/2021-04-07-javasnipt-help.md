---
layout: post
heading: Get help with JavaSnipt
banner: /assets/img/javasnipt-icon.png
tags: javasnipt help
---

If you need help with JavaSnipt, please send an email describing the exact problem and steps that made the problem occur to nazariosoftwarellc at gmail dot com and I will do my best to help.

## FAQs

### Can I block specific scripts? 

As of now, no. This is the most commonly requested feature. Apple offers a pretty limited set of options for Safari content blockers, so I will investigate to see whether this is possible.

### Does JavaSnipt support Apple Silicon natively?

Yes! JavaSnipt is 100% native to iOS and macOS. The Mac app supports Apple Silicon and Intel. 

JavaSnipt for iOS is 100% [SwiftUI](https://developer.apple.com/documentation/swiftui/). The macOS app is half SwiftUI, half [AppKit](https://developer.apple.com/documentation/appkit/).

### How do I delete a site from JavaSnipt?

**iOS, in Safari:** Visit the site you wish to remove. Tap Share → JavaSnipt. You will see a popup asking if you want to allow or block JavaScript on that website. Tap OK and refresh. 

**iOS, in JavaSnipt**: Swipe on the site from right to left or tap Edit, then the (-) icon next to the site you wish to remove. 

**macOS, in Safari**: Visit the site you wish to remove. Click the {} icon in the toolbar. Click the button in the dropdown (if the site is currently in JavaSnipt, this button will be green). Click the refresh icon to reload the page. 

**macOS, in JavaSnipt**: Click on the site you wish to remove. Press Cmd-Delete or File → Delete from the menu bar. If you wish to undo this, use Cmd-Z or Edit → Undo. You can select multiple sites for deletion by holding down Shift or Command and clicking on multiple rows.

## Known issues

### JavaSnipt icon does not appear in iOS share menu

This [appears to be an iOS bug](https://developer.apple.com/forums/thread/662671). I can see it happen on iOS 14.4 in the Simulator but cannot fix it. My workaround is to close and re-open the share sheet - JavaSnipt appears the second time. 

### JavaSnipt UI extension for macOS allows users to add sites with the JavaSnipt blocker extension disabled (FB9080144)

Unfortunately, [macOS Safari extensions cannot tell if a content blocker is enabled](https://stackoverflow.com/questions/50481113/how-to-get-the-stateenabled-disabled-of-safari-content-blocker-app-extension-f). I can personally verify this bug.

{% include app_store_link.html marginTop=true %}