import {BasePage} from "./basePage";
import {browser, $, element, by} from "protractor";
import {async} from "q";

export class MemberPage extends BasePage {
    url = '';
    pageLoaded = this.inDom($(''));
    pageTitle = $('h1');
    account = $('#ap_email');
    accountPassword = $('#ap_password');
    btnSignIn = $('#signInSubmit');

    signIn = async (email:string, password:string) => {
        await this.account.sendKeys(email);
        await this.accountPassword.sendKeys(password);
        await this.btnSignIn.click();
    };

    getPageTitle = async ()=>{
        return await this.pageTitle.getText();
    }


}