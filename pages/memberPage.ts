import {BasePage} from "./basePage";
import {browser, $, element, by} from "protractor";
import {config} from '../protractor.cucumber.conf';

export class MemberPage extends BasePage {
    url = '';
    pageLoaded = this.inDom($(''));

    account = $('#ap_email');
    accountPassword = $('#ap_password');
    btnSignIn = $('#signInSubmit');

    signIn = async (email:string, password:string) => {
        this.account.sendKeys(email);
        this.accountPassword.sendKeys(password);
        this.btnSignIn.click();
    };
}