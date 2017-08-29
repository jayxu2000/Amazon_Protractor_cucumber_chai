import {BasePage} from "./basePage";
import {$, element, by, browser} from "protractor";
import {config} from '../protractor.cucumber.conf';

export class HomePage extends BasePage {
    url = config.baseUrl;
    pageLoaded = this.inDom($('#seat_map_label'));
    labelCartCount = $('#nav-cart-count');
    menuSignInAccount = $('#nav-link-yourAccount');
    toolTipSignInAccount = $('#nav-signin-tooltip');
    menuSignOut = $('#nav-link-accountList');
    signInAccount = element(by.xpath("//div[@id='nav-al-signin']//span[text()='Sign in']"));
    signInTooltip = element(by.xpath("//div[@id='nav-signin-tooltip']//span[text()='Sign in']"));
    userFirstNameAccount = $('#nav-link-yourAccount > span.nav-line-1');
    userFirstNameTooltip = $('#nav-link-accountList > span.nav-line-1');
    lnkSignOut = $('#nav-item-signout');
    menuDepartment = $('#nav-shop');
    subCatTitle = $('h1');

    keywordSearch = $('#twotabsearchtextbox');

    inputSearch = async (searchValue: string) => {
        await this.keywordSearch.sendKeys(searchValue);
        await this.keywordSearch.sendKeys("\n");
    };

    getCartCountText = async () => {
        // await browser.sleep(500);
        return await this.labelCartCount.getText();
    };

    chooseCategory = async (category: string, subCategory: string) => {
        await this.mouseOver(this.menuDepartment);
        let categoryElement = element(by.xpath(`//div[@id="nav-flyout-shopAll"]//span[text()="${category}"]`));
        await this.mouseOver(categoryElement);
        let subCategoryElement = element(by.xpath(`//div[@style="display: block;"]//span[text()="${await subCategory.replace(/'/g, "\'")}"]`));
        await subCategoryElement.click();
    };

    getSubCategoryPageTitle = async () => {
        return await this.subCatTitle.getText();
    }

    clickSignIn = async () => {
        if (await this.toolTipSignInAccount.isPresent()) {
            await this.signInTooltip.click();
        }
        else if(this.menuSignOut.isPresent()){
            await this.mouseOver(this.menuSignOut);
            await this.signInAccount.click();
        }
        else {
            await this.mouseOver(this.menuSignInAccount);
            await this.signInAccount.click();
        }
    };

    getMemberFirstName = async () => {
        return (await this.userFirstNameAccount.isPresent()) ? (await this.userFirstNameAccount.getText()) :
            (await this.userFirstNameTooltip.getText());
    };

    clickSignOut = async () => {
        if (await this.menuSignInAccount.isPresent()) {
            await this.mouseOver(this.menuSignInAccount);
        } else {
            await this.mouseOver(this.menuSignOut);
        }
        await this.lnkSignOut.click();
    };

    isSignedIn = async () => {
        return await ((await this.getMemberFirstName()) == `Hello. Sign in`) ? false : true;
    }

    clickCartSection = async () => {
        await this.labelCartCount.click();
    };

}