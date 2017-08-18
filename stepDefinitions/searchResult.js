"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var searchResultPage_1 = require("../pages/searchResultPage");
var cucumber_1 = require("cucumber");
cucumber_1.defineSupportCode(function (_a) {
    var When = _a.When, Then = _a.Then, Given = _a.Given, setDefaultTimeout = _a.setDefaultTimeout, After = _a.After;
    var searchResultPage = new searchResultPage_1.SearchResultPage();
    setDefaultTimeout(60 * 1000);
    When(/^$/, function () {
    });
    When(/^I select the first item in list$/, function () {
        searchResultPage.click1stResult();
    });
    When(/^I add selected item$/, function () {
        // Ppage.clickAddToCartButton();
        /*    	expectedOfferTitle = Opage.getOfferTitle();
         Opage.clickButItNowButton();*/
    });
    When(/^$/, function () {
    });
});
