/* 
DESCRIPTION
So this is the vanilla formatting for how WebdriverIO would like to define selectors and export them in a Page Model fashion, and to be honest, it's not my favorite simply due to the fact that you have to do so many predefined functions (especially with all of the get/return calls). The $ is needed by WDIO to indicate that the element is considered to be a selector, similair to how TesCafe needs the t object to do something similar.

I have a detailed explanation on how I would expand this in the future located in the readme.md file, but for the intent/purpose of this exercise, this formatting/implementation is 100% functional.
*/


import { $ } from '@wdio/globals'

class pageObject {
    get landingPage() { 
        return $('//androidx.viewpager.widget.ViewPager[@resource-id="com.fivemobile.thescore:id/viewPager"]')
    }
    get welcomeIcon () {
        return $('//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/icon_welcome"]')
    }
    get welcomeText() {
        return $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/txt_welcome"]')
    }
    get primaryButton() {
        return $('//android.view.ViewGroup[@resource-id="com.fivemobile.thescore:id/btn_primary"]')
    }
    get firstRow() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fivemobile.thescore:id/recyclerView"]/android.widget.LinearLayout[1]')
    }
    get denyButton() {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]')
    }
    get teamLogo() {
        return $('//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/icon_team_logo"]')
    }
    get teamShortNameText() {
        return $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/label" and @text="SEA"]')
    }
    get teamNameText() {
        return $$('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/team_name"]')
    }
}

export default new pageObject();