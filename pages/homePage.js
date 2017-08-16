"use strict";
var basePage = require('./basePage.js');
var waitHelper = require('../helpers/wait_helper');
var q = require('q');
var HomePage = (function () {
    function HomePage() {
        this.url = '';
        this.labelCartCount = $("#nav-cart-count");
        this.menuSignInAccount = $("#nav-link-yourAccount");
        this.userFirstName = $("#nav-link-yourAccount > span.nav-line-1");
        this.lnkSignOut = $("#nav-item-signout");
        this.menuDepartment = $("#nav-shop");
        this.keywordSearch = $("#twotabsearchtextbox");
        this.inputSearch = searchValue;
    }
    return HomePage;
}());
(function (string) {
    keywordSearch.sendKeys(searchValue);
    keywordSearch.sendKeys(Keys.ENTER);
    TestUtils.waitTime();
});
module.exports = HomePage;
