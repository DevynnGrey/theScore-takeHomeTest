# The Score UI Test Automation Example
Project built on Appium to show coding techniques and proficiency.

# Quick Start (if you have all prerequisites installed)
Clone the repo using your favorite tool. For this project, I started with using the `git` cli, however I moved to GitHub Desktop to test it out since I have not used it before (I had only used SourceTree as a git GUI). It works pretty well, and I highly recommend it!

Once cloned, run `npm install` to install all necessary package files for running the tests. After install, simply run `npm run wdio` with your Android Studio instance running to kick off the tests. You'll need to make sure that you have the `Pixel 7 Pro API 34` device installed otherwise you will need to update the Appium capabilities in the `wdio.conf.js` file with your preferred emulator. The test automation will kick off and navigate through the basic steps to get to the main landing page, going to a team page, then using the Android device 'back' button to return back to the landing screen.

***Note: Please make sure that the Pixel 7 Pro Api 34 emulator is running so that the tests can execute properly.***

# Need to install everything, including Node? Start here!
Never used Node, or do not have it installed? Need to install Java on your Mac? Here are the steps to install core dependencies, if needed.

## Installing Node
Node is an open-source JavaScript environment which is used to run the code in this repo. If you need to install Node, the easiest, most effective way to get up and running quickly is to go to the [Node Download Page](https://nodejs.org/en/download/current) and select the installer for your specific machine. The package installer will install Node and NPM (Node Package Manager), both of which are needed to get going with this suite.

## Installing Java (for Mac)
The way that I went about installing Java was to use `brew` on the terminal command line, which is pretty intuitive and has a ton of support online. I followed the following steps to ensure that `brew` was up to date and able to install Java properly:
1. Run the `brew doctor` command, which will make sure that `brew` is installed and set up properly. You may need to install `xcode` command line tools or other Mac-specific dependencies, and `brew doctor` will help walk you through those issues.
2. Install the specific version of Java that you need (in this case, I'll be using `openJDK` to install Java 17) by running `brew install openjdk@17`. This will install the OpenJDK Java source files/libraries into your local Mac library.
3. To link your OpenJDK install with the necessary system folder, run the command `sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk` which will ensure that you are able to run Java anywhere. You can verify that Java is installed properly by running `java --version`.

***Stuck on a step here? Check out this SO post, which will help you triage the openJDk install options, including different Apple silicone types and more: [How to install Java 17](https://stackoverflow.com/questions/69875335/macos-how-to-install-java-17)***

## Installing WebdriverIO
WebdriverIO was my choice of automation framework for this homework, since it has well-documented integrations and solutions for not just Appium, but other tools such as BrowserStack and Slack, making scaling up test automation for this project very easy. WebdriverIO has a great CLI tool for getting everything installed easily and to the specifications that you want; to install in an existing project folder, simply run `npm init wdio@latest .`. If you clone my core project, you won't need to do this, as I've got everything set up already, so you could just run `npm install` and be fine. If, however, you would like to install it in a different folder or set up a new project using it, you would run `npm init wdio@latest ./path/to/your/project` and it will start up the CLI for you.

## Installing Appium
So there are a few ways to install Appium (especially with the intent to pair it with Node). If you follow the official Appium docs, which are listed [here](https://appium.io/docs/en/2.0/quickstart/install/), you can simply run `npm i --location=global appium` which will install Appium globally on your machine. You can validate that it is installed by running `appium`, which will either show you that it is installed or throw an error if something is missing.

WHat I've found, however, is that using `Appium Installer` is ***much*** easier to use for installing and even has an Appium doctor mode to validate/fix any errors that you may encounter while you are doing all of the file/folder system linking. To install, run `npm install -g appium-installer` then use on the command line by typing `appium-installer`. It will walk you through a step-by-step questionairre on the command line to make sure that you install Appium in the correct way for your needs.

## Installing Android Studio and opening the .apk file
If you need to install Android Studio, then you can go to their main page located [here](https://developer.android.com/studio) which will allow you to download the latest version for your OS. For me, I downloaded `Android Studio Hedgehog`, which was super simple to install and get running locally.

Once installed, you can now open the .apk file for The Score, which I downloaded online. The file name is `theScore_ Sports News & Scores_24.1.0_Apkpure.apk` and it is found in the main folder of my repo, which makes it easy to find and open. Once you have it opened, some of metadata that you need for setting up test automation is found in the `AndroidManifest.xml` file (such as `package` and the current Android version name, if you want to test against different Android versions).

## Appium Inspector
I downloaded [Appium Inspector](https://appium.github.io/appium-inspector/2023.12/) which will allow you to attach onto a running Appium session and inspect all components of the application. It's kind of a pain in the ass to use it while trying to actively work on/triage test automation, since it can get itself into a weird state when you start and stop the emulator session a ton and you need to refresh the screen constantly to see the latest view, but it gave me exactly what I was looking for in terms of selector names and paths.

# Decision Matrix

## Webdriver IO
I chose to go with WebdriverIO as my UI test automation framework since I have worked with it a decent amount recently and it has been a minute since I have done native Kotlin development. Luckily it has a pretty amazing following who have created a ton of plugins and hooks for it, which helped me get up to speed quickly for this project.

## What about the code?
The code is a fairly straightforward implementation, and I had to use xpath for pretty much all of my selectors since WDIO is not happy with trying to use ID/CSS locators at the moment. I might go back and troubleshoot that later, but for now it seems to be working well. There are a few instances where there are no unique accessibility IDs at all (mostly the major app views/landing pages, and Appium Inspector will definitely call them out to you), so sticking with xpath keeps it consistent at least. In the future, I would like to move on to unique IDs since they tend to be a bit more flexible.

There are two folders in the test folder, one for Page Objects and the other is for the tests themselves. I'll probably pull these apart a bit more, as I would like to have certain data (mostly text translation strings and content) be in a JSON or raw JS module, which would lead to a more data-driven approach to this project. At least that way, you can update strings in one area without having to go in and update every single file.

## A more dynamic, data-driven approach for the future
I touch on this in the `pageObject.js` file, but the way that WebdriverIO structures their selectors is not ideal (for me, at least). While yes, you have to instantiate the `$` for selectors no matter what, creating methods for every single one is a bit sub-optimal. In the future, I would recommend abstracting them out into vanilla `.js` files, which would allow for better maintenance and scalability. An example of this would be as follows:

Example "pageObject.js" file:
```
const landingPage = {
    selector1: '#exampleID',
    selector2: '#exampleID2'
}

const icons = {
    testIcon1: '#icon1',
    testIcon2: '#icon2'
}

export default { landingPage, icons }
```
Example "userTest_one.js" file:
```
import * from './pageObject.js'

describe('This is an example test block', async ()=> {
    It('Should now use a new page object structure', async () => {
        await expect(landingPage.selector1).toBeDisplayed
    })
    It('Should find selctor2 on the landing page then print its text', async () => {
        await expect(landingPage.selector2).then((res)=> {
            console.log(res.getText())
        })
    })
    It('Should do a ternary check on which logo is visible for A/B testing', async () => {
        await expect(icons.testIcon1).toBeDisplayed ? expect(icons.testIcon2).toBeDisplayed : console.log('No icons have been found')
    })
})
```

Another way to make the selectors more dynamic, especially when dealing with an array of multiple items with the same selector (such as the linear layout rows) would be converting them to an array. I didn't do it in the code example since I wanted to keep it simple and functional (and WDIO can be a pain with selectors sometimes), but I wanted to showcase where I would start with this implementation since it could be very handy in the future.

Example "pageObject2.js" file:
```
const multipleRowObject = {
    selector: '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fivemobile.thescore:id/recyclerView"]/android.widget.LinearLayout'
}

export default { multipleRowObject }
```
Example "userTest_two.js" file:
```
import { multipleRowObject } from './pageObject2.js'

describe('This is another example test block', async ()=> {
    It('Loop through an array and log each items text to the console', async () => {
        multipleRowObject.forEach(item => {
            console.log(item.getText())
        })
    })
})
```

***Note:*** ***I am aware that there is a bug with this code in terms of location services. Since I had them on while writing this test, it puts the Seattle Seahawks to the top of the recommended teams. I will be pushing an update over the weekend to ensure that the tests are more robust and not tied to the Seahawks.***
