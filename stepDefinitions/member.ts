import {MemberPage} from '../pages/memberPage';
import {defineSupportCode} from 'cucumber';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
let expect = chai.expect;

defineSupportCode( ({When, Then, Given, setDefaultTimeout, After}) =>{

    let memberPage: MemberPage = new MemberPage();

    setDefaultTimeout(60 * 1000);

    When(/^I sign in as account "(.*?)" with password "(.*?)"$/, async (account:string, password:string)=> {
        await memberPage.signIn(account, password);
    });

    Then(/^the "(.*?)" page displays$/, async (pageTitle)=> {
        await expect(memberPage.getPageTitle()).to.eventually.include(pageTitle);
    });






});