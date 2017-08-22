import {BasePage} from "./basePage";
import {$} from "protractor";
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
    }


}