import {ProductDetailPage} from '../pages/productDetailPage';
import {defineSupportCode} from 'cucumber';
import {HomePage} from '../pages/homePage';

defineSupportCode(function ({When, Then, Given, setDefaultTimeout, After}) {

    let productDetailPage: ProductDetailPage = new ProductDetailPage();

    setDefaultTimeout(60 * 1000);

    When(/^I add selected item$/, function () {
        productDetailPage.clickAddToCartButton();
        /*    	expectedOfferTitle = Opage.getOfferTitle();
         Opage.clickButItNowButton();*/
    });
});