import {BasePage} from "./basePage";
import {$} from "protractor";

export class ProductDetailPage extends BasePage{
    url = '';
    pageLoaded = this.inDom($(''));
    buttonAddToCart = $('#add-to-cart-button');
    buttonPopOverClose = $('button[data-action=a-popover-close]');

    clickAddToCartButton = async ()=>{
        await this.buttonAddToCart.click();
    };

    isButtonPopOverClosePresent = async ()=>{
        return await this.buttonPopOverClose.isPresent();
    }

    clickButtonPopOverClose = async ()=>{
        await this.buttonPopOverClose.click();
    }

}