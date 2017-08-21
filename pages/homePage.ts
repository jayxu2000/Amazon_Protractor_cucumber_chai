import {BasePage} from "./basePage";
import {$} from "protractor";
import { config } from '../protractor.cucumber.conf';
import * as waitHelper from "../helpers/wait_helper";
import * as Q from 'q';

export class HomePage extends BasePage{
    url = config.baseUrl;
    pageLoaded = this.inDom($('#seat_map_label'));
    labelCartCount = $("#nav-cart-count");
    menuSignInAccount = $("#nav-link-yourAccount");
    userFirstName = $("#nav-link-yourAccount > span.nav-line-1");
    lnkSignOut = $("#nav-item-signout");
    menuDepartment = $("#nav-shop");
    keywordSearch = $("#twotabsearchtextbox");

    inputSearch = (searchValue:string) => {
        this.keywordSearch.sendKeys(searchValue);
        this.keywordSearch.sendKeys("\n");
    };

    getCartCountText = () => {
        this.labelCartCount.getText().then(value=>{
            console.log(`cart number is ${value}`)
        });
        return this.labelCartCount.getText();
    }


}