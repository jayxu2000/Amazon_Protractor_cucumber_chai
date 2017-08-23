import {BasePage} from "./basePage";
import {browser, $, element, by} from "protractor";
import {config} from '../protractor.cucumber.conf';

export class HomePage extends BasePage {
    url = config.baseUrl;
    pageLoaded = this.inDom($('#seat_map_label'));
    labelCartCount = $('#nav-cart-count');
    menuSignInAccount = $('#nav-link-yourAccount');
    accountListSection = $('#nav-link-accountList');
    signIn = element(by.xpath("//div[@id='nav-al-signin']//span[text()='Sign in']"));
    userFirstName = $('#nav-link-yourAccount > span.nav-line-1');
    lnkSignOut = $('#nav-item-signout');
    menuDepartment = $('#nav-shop');
    subCatTitle = $('#merchandised-content> div > div > div > div > h1');

    keywordSearch = $('#twotabsearchtextbox');

    inputSearch = async (searchValue: string) => {
        await this.keywordSearch.sendKeys(searchValue);
        await this.keywordSearch.sendKeys("\n");
    };

    getCartCountText = async () => {
        console.log(`cart number is: ${await this.labelCartCount.getText()}`);
        return await this.labelCartCount.getText();
    };

    chooseCategory = async (category: string, subCategory: string) => {
        await this.mouseOver(this.menuDepartment);

        let categoryElement = element(by.xpath(`//div[@id='nav-flyout-shopAll']//span[text()="${category}"]`));
        await this.mouseOver(categoryElement);
        subCategory = subCategory.replace(/'/g, "\'");
        let subCategoryElement = element(by.xpath(`//div[@style="display: block;"]//span[text()="${subCategory}"]`));
        await subCategoryElement.click();
    };

    isSubCategoryPageTitleExist = async (title: string) => {
        await this.subCatTitle.isPresent();
    }

    clickSignIn = async () => {
        await this.mouseOver(this.accountListSection);
        await this.signIn.click();
    }

}