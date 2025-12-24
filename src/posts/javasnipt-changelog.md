## JavaSnipt Changelog

### iOS

#### 2.0.1 (2024)

- Fixes a bug where sites added from the share extension did not appear in the app until the app was restarted

#### 2.0.0 (2024)

JavaSnipt has been completely rewritten to be faster and more reliable! New features include:

- Search
- Sorting domains by name or date modified
- New, more reliable interface for adding and removing sites from Safari
- The date a site was last modified is now visible in the iPhone app

#### 1.2.6 (2023)

- Fixes bug where JavaSnipt accidentally blocked browser UI like SSL warnings (thanks to GitHub user [dontcrash](https://github.com/dontcrash) for reporting!)
- Fixes bug where the **Add Domain** field was not cleared on entering a new domain

#### 1.2.5 (2022)

- If you open the JavaSnipt app, the button to allow JS only on listed sites is more explicit

#### 1.2.4 (2022)

- Fixes a bug where sharing to JavaSnipt would not open the share window
- The share window more reliably reflects whether you have added a site

The share window opens more slowly so JavaSnipt can fully load your data. Incomplete data was causing a lot of crashes previously.

#### 1.2.3 (2022)

- Fixes a bug where adding a site on one device would not block JS on another. Now, as soon as your data syncs over iCloud or you open JavaSnipt, your targeted sites will be correctly blocked in Safari.

#### 1.2.2 (2021)

The directions to enable JavaSnipt have been updated.

If you could not enable JavaSnipt before, go to the **Settings** app → **Safari** → **Extensions** and tap the switch next to JavaSnipt.

#### 1.2.1 (2021)

Fixes a bug where the share extension would not appear on iOS 14.0. The app now requires 14.1.

#### 1.2.0 (2021)

- Stores your data locally if you do not have iCloud enabled
- If you enable iCloud later, your data is copied into iCloud
- Links to [help documentation](/apps/javasnipt/support) when showing a warning
- Displays **Updated At** timestamps on iPad
- Fixes crash when removing the last site saved to JavaSnipt
- Fixes a bug where adding `www.(domain).com` from the share extension would add it twice if it was previously saved as `(domain).com`

#### 1.1.0 (2021)

- Fixes an issue where adding a site from the share extension would not affect saved sites
- Fixes a bug where the app would tell you the blocker was disabled when it was enabled
- You can now tap sites in the main JavaSnipt app to edit them
- Disables autocorrection when entering sites in the main JavaSnipt app
- Adding sites in the main JavaSnipt app no longer requires as much precision. E.x. to block JS on `example.org`, you can write `www.example.org` or `example.org`
- Changes **+** button to **Save** to clarify what the button does
- Share popup will tell you if the blocker is disabled

### macOS

#### 1.4.2 (November 2025)

- Adds links to [other Nazario Software apps](/). Check them out!

#### 1.4.1 (2024)

- Minor bug fixes with the share extension

#### 1.4.0 (2024)

- Adds **About** screen
- Left and right arrows navigate onboarding

#### 1.3.3 (2023)

- Fixes bug where JavaSnipt accidentally blocked browser UI like SSL warnings (thanks to GitHub user [dontcrash](https://github.com/dontcrash) for reporting!)
- Fixes bug where extension alert `!` icons were offset
- Fixes bug where deleting the only row could crash the app

#### 1.3.2 (2022)

- Buttons to block JS on listed sites or allow it on listed sites are more explicit
- Cells no longer have a dark background when editing a site in light mode

#### 1.3.1 (2022)

- Fixes a bug where adding a site on one device would not block JS on another. Now, as soon as your data syncs over iCloud or you open JavaSnipt, your targeted sites will be correctly blocked in Safari.

#### 1.3.0 (2021)

- JavaSnipt is now compatible with AppleScript. See the [Support page](/apps/javasnipt/support) for details.

#### 1.2.0 (2021)

- Stores your data locally if you do not have iCloud enabled
- If you enable iCloud later, your data is copied into iCloud
- Links to help documentation when showing a warning
- Fixes crash when removing the last site saved to JavaSnipt
- Fixes a bug where adding `www.(domain).com` from the **JavaSnipt UI** extension would add it twice if it was previously saved as `(domain).com`
- Fixes a bug where a graphic in the initial onboarding would not appear

#### 1.1.3 (2021)

- When adding a new row, the table scrolls that new row into view
- Touch Bar buttons have labels when customizing them under **View** → **Customize Touch Bar...**

#### 1.1.1 (2021)

- Adds a **Delete** button to the toolbar for faster deleting of sites (shortcut: `Cmd-Delete`). This option is also in the menu bar under **File** → **Delete**
- Adds accessibility labels to toolbar buttons
- Adding sites in the main JavaSnipt app no longer requires as much precision. E.x. To block JS on example.org, you can write www.example.org or example.org
- The "Last Modified" column uses more space to prevent longer dates from overflowing to two lines