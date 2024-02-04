
import { driver, expect } from '@wdio/globals'
import pageObject from '../pageobjects/pageObject.js'

describe('The Score Android App UI validation testing', async () => {
    it('Should do a quick test 1', async () => {
  await expect(pageObject.welcomeIcon).toBeDisplayed;
  await expect(pageObject.welcomeText).toBeDisplayed;
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