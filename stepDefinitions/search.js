const searchPage = require('../pages/searchPage');
const {defineSupportCode} = require("cucumber");

defineSupportCode(function ({When, Then, Given, setDefaultTimeout, After}) {

    setDefaultTimeout(60 * 1000);

    When(/^$/, function () {

    });

    When(/^I select the first deal$/, function () {
        searchPage.click1stResult();
    });

    When(/^$/, function () {

    });
});