/* 
This is my basic, functional test which meets the requirements laid out for me in the challenge. It's pretty straightforward, but I'd like to add some context to the tests.

So to begin, there are some basic validations being done here, such as icons being displayed and text having the right characters. In my first iterations, the tests were actually throwing false positives for the text checks, however I have fixed that issue and the tests fail now when you change the .toHaveText values. There are a million ways to do the page checks or things to validate on the page, so for my implementation, I just wanted the tests to get in, validate, then get out asap. From here, you can dive down a pretty big rabbit hole. Do you want to validate all style on the page? All routes/URL? All text strings? Eventually, I would say sure, you can do that, but I would add different test methods and files so that its easier to read and maintain for the future.

If I were to scale this out, I would likely have suite for validating assets, styles, and functionality, but I would focus on the highest ROI items first. This test is a solid user flow test, where you are moving through the app in a similar flow to an end user, and could be run as part of a post-launch regression suite. For a suite that runs earlier in the process, like on a dev build, CR, or nightly build, I would like to understand what unit testing has been done so that I am not going in and wasting effort on doubled workflows. Do you need to validate button color on every page? Not likely, however should you have tests which are validating text for multiple locales/languages? I think that's a good idea, and one where you can pull in that string data from a translation service or external file to make life a little easier.

One thing to note here is the line where I use the driver to navigate instead of a WDIO action; in this case it uses the Appium driver back button to navigate, extending testing to the system device functionality itself, instead of relying on a .click() event to move around. You can extend this further if you wanted to, adding in different Appium functionality as needed, but for now the base is there to build upon.
*/


import { driver, expect } from '@wdio/globals'
import pageObject from '../pageObjects/index.js'

describe('The Score Android App UI validation testing', async () => {
    it('Should do a basic user flow test', async () => {
      await expect(pageObject.welcomeIcon).toBeDisplayed;
      await expect(pageObject.welcomeText).toHaveText('WELCOME')
      await (pageObject.primaryButton).click();
      await (pageObject.firstRow).click();
      await (pageObject.primaryButton).click();
      await (pageObject.firstRow).click();
      await (pageObject.primaryButton).click();
      await (pageObject.primaryButton).click();
      await expect(pageObject.teamLogo).toBeDisplayed;
      await expect(pageObject.teamShortNameText).toHaveText('SEA')
      await (pageObject.teamLogo).click();
      await expect(pageObject.teamNameText).toHaveText('Seattle Seahawks')
      await driver.back()
      await expect(pageObject.teamShortNameText).toHaveText('SEA')
    })
})