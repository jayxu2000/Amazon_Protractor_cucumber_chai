const basePage = require('./basePage.js');
import {BasePage} from './basePage.js';
let waitHelper = require('../helpers/wait_helper');
let q = require('q');

class HomePage {
    url = '';
    labelCartCount = $("#nav-cart-count");
    menuSignInAccount = $("#nav-link-yourAccount");
    userFirstName = $("#nav-link-yourAccount > span.nav-line-1");
    lnkSignOut = $("#nav-item-signout");
    menuDepartment = $("#nav-shop");
    keywordSearch = $("#twotabsearchtextbox");

    inputSearch = searchValue:string => {
    keywordSearch.sendKeys(searchValue);
    keywordSearch.sendKeys(Keys.ENTER);
    TestUtils.waitTime();
    };
}

export = HomePage;