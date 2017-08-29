"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const homePage_1 = require("../pages/homePage");
const shoppingCartPage_1 = require("../pages/shoppingCartPage");
const cucumber_1 = require("cucumber"); //ES6 syntax which will use commonJS
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, After }) => {
    let homePage = new homePage_1.HomePage();
    let shoppingCartPage = new shoppingCartPage_1.ShoppingCartPage();
    setDefaultTimeout(60 * 1000);
    Given(/^I open homepage$/, () => __awaiter(this, void 0, void 0, function* () {
        yield homePage.to();
    }));
    //set "target": "ES2016" in tsconfig.json so that we can use async/await
    Given(/^The shopping cart has the counted number "(.*?)"$/, (count) => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield homePage.getCartCountText()).equal(count);
    }));
    When(/^I search for a product "(.*?)"$/, (searchCriteria) => __awaiter(this, void 0, void 0, function* () {
        yield homePage.inputSearch(searchCriteria);
    }));
    When(/^I select Category "(.*?)" then Sub-category "(.*?)" in the menu$/, (category, subCategory) => __awaiter(this, void 0, void 0, function* () {
        yield homePage.chooseCategory(category, subCategory);
    }));
    Then(/^I should see results showing only for "(.*?)"$/, (subCategory) => __awaiter(this, void 0, void 0, function* () {
        expect(yield homePage.getSubCategoryPageTitle()).include(subCategory);
    }));
    When(/^I click sign in$/, () => __awaiter(this, void 0, void 0, function* () {
        yield homePage.clickSignIn();
    }));
    Then(/^I successfully login and be able to see my first name "(.*?)"$/, (firstName) => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield homePage.getMemberFirstName()).include(firstName);
    }));
    After(() => __awaiter(this, void 0, void 0, function* () {
        let currentCartCount = yield parseInt(yield homePage.getCartCountText());
        console.log(`After test, before cleanup, the cart number is: ${currentCartCount}`);
        if (currentCartCount != 0) {
            yield homePage.clickCartSection();
            yield shoppingCartPage.clearCart();
        }
        console.log(`After test, after cleanup, the cart number is: ${yield parseInt(yield homePage.getCartCountText())}`);
        if (yield homePage.isSignedIn()) {
            yield homePage.clickSignOut();
        }
    }));
});
//# sourceMappingURL=homepage.js.map