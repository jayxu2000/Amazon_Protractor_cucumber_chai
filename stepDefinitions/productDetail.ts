import {ProductDetailPage} from '../pages/productDetailPage';
import {defineSupportCode} from 'cucumber';

defineSupportCode(function ({When, Then, Given, setDefaultTimeout, After}) {

    let productDetailPage: ProductDetailPage = new ProductDetailPage();

    setDefaultTimeout(60 * 1000);

});