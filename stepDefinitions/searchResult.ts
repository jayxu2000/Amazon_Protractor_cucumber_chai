import {SearchResultPage} from '../pages/searchResultPage';
import {defineSupportCode} from 'cucumber';
import {browser} from "protractor";


defineSupportCode(function ({When, Then, Given, setDefaultTimeout, After}) {

    let searchResultPage: SearchResultPage = new SearchResultPage();

    setDefaultTimeout(60 * 1000);

    When(/^I select the first item in list$/, async () => {
        await searchResultPage.click1stResult();
    });

    When(/^$/, function () {

    });
});