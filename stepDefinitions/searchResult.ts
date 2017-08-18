import {SearchResultPage} from '../pages/searchResultPage';
import {defineSupportCode} from 'cucumber';

defineSupportCode(function ({When, Then, Given, setDefaultTimeout, After}) {

    let searchResultPage: SearchResultPage = new SearchResultPage();

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