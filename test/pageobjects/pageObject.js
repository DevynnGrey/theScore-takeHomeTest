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