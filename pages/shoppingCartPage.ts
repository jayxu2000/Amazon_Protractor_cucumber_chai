import {BasePage} from "./basePage";
import {$, element, by, $$, browser} from "protractor";

export class ShoppingCartPage extends BasePage {
    url = '';
    pageLoaded = this.inDom($(''));
    pageTitle = $('h1');
    allDeleteCheckbox = $$('input[value="Delete"]')

    clearCart = async ()=>{
        let totalDeleteCheckboxes:number = await this.allDeleteCheckbox.count();
        for (let i=totalDeleteCheckboxes; i>0; i--){
            let deleteElement = element(by.xpath("(//input[@value='Delete'])["+i+"]"));
            await deleteElement.click();
            await browser.sleep(500);
        }
    }
}