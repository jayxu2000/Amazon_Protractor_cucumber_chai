import {ProductDetailPage} from '../pages/productDetailPage';
import {defineSupportCode} from 'cucumber';

defineSupportCode( ({When, Then, Given, setDefaultTimeout, After}) =>{

    let productDetailPage: ProductDetailPage = new ProductDetailPage();

    setDefaultTimeout(60 * 1000);

    When(/^I add selected item$/, async () => {
        await productDetailPage.clickAddToCartButton();
        if(await productDetailPage.isButtonPopOverClosePresent()){
            await productDetailPage.clickButtonPopOverClose();
        }
    });
});