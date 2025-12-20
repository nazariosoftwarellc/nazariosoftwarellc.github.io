## Get help with JavaSnipt

If you need help with JavaSnipt, please send an email describing the exact problem and steps that made the problem occur to [nazariosoftwarellc@gmail.com](mailto:nazariosoftwarellc+js@gmail.com).

### FAQs

#### This weird bit of JS snuck through

Websites can run JavaScript one of two ways  They can build it into the page or load it in an external file. Almost everyone loads their JS externally, and that is what JavaSnipt blocks. Unfortunately, Apple does not let third-party content blockers block JS built into the page 😩. 

The good news is again, 99.99999% of sites load their JS in blockable external files. Also, the worst JavaScript abuses, like autoplaying video and obnoxious ads, are external files.  

JavaScript runs in Safari… but adding a site to JavaSnipt means the browser will (almost) never get any JS to run. 

I use JavaSnipt myself every day and I promise it really catches 99.99999% of JS.

#### Can I block specific scripts? 

Unfortunately, no. Apple offers a pretty limited set of options for Safari content blockers.

#### How do I enable the JavaSnipt content blocker?

**macOS**: Open the JavaSnipt app. Click the red ! and click the button in the popover to open Safari's extension settings. Check the box next to "JavaSnipt Blocker."

**iOS**: Open the iOS Settings app. Tap Safari → Extensions and tap the toggle to the right of JavaSnipt. If you are on iOS 14 or below, go to iOS Settings → Safari → Content Blockers.

#### Can I block JavaScript on all sites *except* the ones I want?

Yes! Open the JavaSnipt app and tap "Allow JS on Listed Sites." JavaScript will not run on any site except those listed in JavaSnipt.

If you tap "Block JS on Listed Sites," JavaSnipt will block JS on the listed sites. 

#### How do I enable iCloud to sync between my devices?

You must be signed into iCloud on the device using JavaSnipt in order to sync your targeted sites between devices. Use [Apple's walkthrough](https://support.apple.com/en-us/HT208681) to set up iCloud.

If JavaSnipt cannot store your sites in iCloud, it will store them locally. When you sign into iCloud, JavaSnipt will copy your locally stored sites into iCloud and stop tracking sites locally. 

#### How do I delete a site from JavaSnipt?

**iOS, in Safari:** Visit the site you wish to remove. Tap Share → JavaSnipt. You will see a popup asking if you want to allow or block JavaScript on that website. Tap OK and refresh. 

**iOS, in JavaSnipt**: Swipe on the site from right to left or tap Edit, then the (-) icon next to the site you wish to remove. 

**macOS, in Safari**: Visit the site you wish to remove. Click the {} icon in the toolbar. Click the button in the dropdown (if the site is currently in JavaSnipt, this button will be green). Click the refresh icon to reload the page. 

**macOS, in JavaSnipt**: Click on the site you wish to remove. Press Cmd-Delete or File → Delete from the menu bar. If you wish to undo this, use Cmd-Z or Edit → Undo. You can select multiple sites for deletion by holding down Shift or Command and clicking on multiple rows.

#### Can you support older OSes?

JavaSnipt uses SwiftUI features introduced in macOS Big Sur and iOS 13, respectively. My AppKit and UIKit skills are not good enough to backport them to older OSes 😅.

#### Can I use this with AppleScript?

Yes!

```applescript
tell application "JavaSnipt" to add site "example.org"
tell application "JavaSnipt" to delete site "example.org"
tell application "JavaSnipt" to block JS on targeted sites
tell application "JavaSnipt" to allow JS only on targeted sites

tell application "JavaSnipt"
	set sites to fetch sites
end tell

repeat with site from 1 to length of sites
	log site
end repeat

tell application JavaSnipt to quit
```

### Known issues

#### The JavaSnipt icon doesn't appear in Mac Safari on Sierra

1. Disable the JavaSnipt UI extension
2. Enable JavaSnipt UI on all sites
3. Enable JavaSnipt UI

#### JavaSnipt icon does not appear in iOS share menu

This [appears to be an iOS bug](https://developer.apple.com/forums/thread/662671), something Apple has to fix. Try these fixes in order:

- Close and re-open the share sheet
- Update to the latest version of JavaSnipt and your device to iOS / iPadOS 14.1 or higher
- Reboot your phone (😖 I know, I know)
- [Email me for help](mailto:nazariosoftwarellc+js@gmail.com)

#### JavaSnipt UI extension for macOS allows users to add sites with the JavaSnipt blocker extension disabled (FB9080144)

Unfortunately, [macOS Safari extensions cannot tell if a content blocker is enabled](https://stackoverflow.com/questions/50481113/how-to-get-the-stateenabled-disabled-of-safari-content-blocker-app-extension-f). I can personally verify this bug.
