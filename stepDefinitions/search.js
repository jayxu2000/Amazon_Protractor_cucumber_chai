const searchPage = require('../pages/searchPage');
const {defineSupportCode} = require("cucumber");

defineSupportCode(function ({When, Then, Given, setDefaultTimeout, After}) {

    setDefaultTimeout(60 * 1000);

    When(/^$/, function () {

    });

    When(/^I select the first item in list$/, function () {
        searchPage.click1stResult();
    });

    When(/^I add selected item$/, function () {
        Ppage.clickAddToCartButton();
        /*    	expectedOfferTitle = Opage.getOfferTitle();
         Opage.clickButItNowButton();*/
    });

    When(/^$/, function () {

    });
});