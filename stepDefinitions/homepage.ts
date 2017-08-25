import {HomePage} from '../pages/homePage';
import {ShoppingCartPage} from '../pages/shoppingCartPage'
import {defineSupportCode} from 'cucumber';//ES6 syntax which will use commonJS
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
let expect = chai.expect;

defineSupportCode(({When, Then, Given, setDefaultTimeout, After}) => {

    let homePage: HomePage = new HomePage();
    let shoppingCartPage: ShoppingCartPage = new ShoppingCartPage();

    setDefaultTimeout(60 * 1000);

    Given(/^I open homepage$/, async () => {
        await homePage.to();
    });

    //set "target": "ES2016" in tsconfig.json so that we can use async/await
    Given(/^The shopping cart has the counted number "(.*?)"$/, async (count) => {
        await expect(homePage.getCartCountText()).to.eventually.equal(count);
    });

    When(/^I search for a product "(.*?)"$/, async (searchCriteria: string) => {
        await homePage.inputSearch(searchCriteria);
    });

    When(/^I select Category "(.*?)" then Sub-category "(.*?)" in the menu$/, async (category: string, subCategory: string) => {
        await homePage.chooseCategory(category, subCategory);
    });

    Then(/^I should see results showing only for "(.*?)"$/, async (subCategory: string) => {
        expect(await homePage.getSubCategoryPageTitle()).include(subCategory);
    });

    When(/^I click sign in$/, async () => {
        await homePage.clickSignIn();
    });

    Then(/^I successfully login and be able to see my first name "(.*?)"$/, async (firstName: string) => {
        await expect(await homePage.getMemberFirstName()).include(firstName);
    });

    After(async () => {
        let currentCartCount = await parseInt(await homePage.getCartCountText());
        console.log(`After test, before cleanup, the cart number is: ${currentCartCount}`);
        if (currentCartCount != 0) {
            await homePage.clickCartSection();
            await shoppingCartPage.clearCart();
        }
        console.log(`After test, after cleanup, the cart number is: ${await parseInt(await homePage.getCartCountText())}`);
        if (await homePage.isSignedIn()) {
            await homePage.clickSignOut();
        }
    })
});