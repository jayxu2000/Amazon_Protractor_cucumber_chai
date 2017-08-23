import {BasePage} from "./basePage";
import {browser, $, element, by} from "protractor";
import {config} from '../protractor.cucumber.conf';
import * as waitHelper from "../helpers/wait_helper";
import * as Q from 'q';

export class HomePage extends BasePage {
    url = config.baseUrl;
    pageLoaded = this.inDom($('#seat_map_label'));
    labelCartCount = $('#nav-cart-count');
    menuSignInAccount = $("#nav-link-yourAccount");
    userFirstName = $('#nav-link-yourAccount > span.nav-line-1');
    lnkSignOut = $('#nav-item-signout');
    menuDepartment = $('#nav-shop');

    keywordSearch = $('#twotabsearchtextbox');

    inputSearch = async(searchValue: string) => {
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
        subCategory = subCategory.replace(/'/g, "\\'");
        let subCategoryElement = element(by.xpath(`//div[@style='display: block;']//span[text()='${subCategory}']`));
        await subCategoryElement.click();
    };

}