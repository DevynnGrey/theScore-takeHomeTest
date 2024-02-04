# The Score UI Test Automation Example
Project built on Appium to show coding techniques and proficiency.

# Quick Start
Clone the repo using your favorite tool. For this project, I had started with git using the cli, however I moved to GitHub Desktop to test it out since I have not used it before (I had only used SourceTree as a git GUI). It works pretty well, and I highly recommend it!

Once cloned, run `npm install` to install all necessary package files for running the tests. After install, simply run `npm run wdio` with your Android Studio instance running to kick off the tests. You'll need to make sure that you have the `Pixel 7 Pro API 34` device installed otherwise you will need to update the Appium capabilities in the `wdio.conf.js` file with your preferred emulator. The test automation will kick off and navigate through the basic steps to get to the main landing page, going to a team page, then using the Android device 'back' button to return back to the landing screen.

# Tools Used

## Appium
The go-to mobile device test automation framework. Can be used by multiple technologies, and in my case, I chose WebdriverIO as the test runner. It's been a minute since I've used it, and learning that Appium Desktop was deprecated was a fun curveball to deal with.

## Webdriver IO
I chose to go with Webdriver IO as my UI test automation framework since I have worked with it a decent amount recently and it has been a minute since I have done native Kotlin development. Luckily it has a pretty amazing following who have created a ton of plugins and hooks for it, which helped me get up to speed quickly for this project.

***Note: Fun fact, the majority of tools and learning out in the industry right now uses an implementation or tools that have been deprecated, so working backward to untagle that mess was a fun adventure, not gonna lie.***

## What about the code?
The code is a fairly straightforward implementation, and I had to use xpath for pretty much all of my selectors since WDIO is not happy with trying to use ID/CSS locators at the moment. I might go back and troubleshoot that later, but for now it seems to be working well. There are a few instances where there are no IDs at all (mostly the major app views/landing pages), so sticking with xpath keeps it consistent at least. In the future, I would like to move on to unique IDs since they tend to be a bit more flexible.

There are two folders in the test folder, one for Page Objects and the other is for the tests themselves. I'll probably pull these apart a bit more, as I would like to have certain data (mostly text strings and content) be in a JSON or page object file, which would lead to a more data-driven approach to this project. At least that way, you can update strings in one area without having to go in and update every single file (right now it's....okay, but not scalable at all for the future).

## Appium Inspector
I downloaded a tool called `Appium Inspector` which will allow you to latch on to a running Android session and inspect all components of the application. It's kind of a pain in the ass to use it while trying to actively work on/triage test automation, since it can get itself into a weird state when you start and stop the emulator session a ton. I tried to go in and grab all of the selectors that I need in bunches to mitigate that issue, and I might do some more research to figure out a better, more scalable solution in the future.