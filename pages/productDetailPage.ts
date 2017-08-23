import {BasePage} from "./basePage";
import {$} from "protractor";
import * as waitHelper from "../helpers/wait_helper";
import * as Q from 'q';
import {async} from "q";

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