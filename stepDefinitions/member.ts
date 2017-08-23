import {MemberPage} from '../pages/memberPage';
import {defineSupportCode} from 'cucumber';
import {async} from "q";

defineSupportCode( ({When, Then, Given, setDefaultTimeout, After}) =>{

    let memberPage: MemberPage = new MemberPage();

    setDefaultTimeout(60 * 1000);

    When(/^$/, async (account:string, password:string)=> {
        await memberPage.signIn(account, password);
    });
});