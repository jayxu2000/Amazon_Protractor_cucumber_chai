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
        yield expect(homePage.getCartCountText()).to.eventually.equal(count);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLGdFQUEwRDtBQUMxRCx1Q0FBMkMsQ0FBQSxvQ0FBb0M7QUFDL0UsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsNEJBQWlCLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBQztJQUU1RCxJQUFJLFFBQVEsR0FBYSxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUN4QyxJQUFJLGdCQUFnQixHQUFxQixJQUFJLG1DQUFnQixFQUFFLENBQUM7SUFFaEUsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtRQUN2QixNQUFNLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsd0VBQXdFO0lBQ3hFLEtBQUssQ0FBQyxvREFBb0QsRUFBRSxDQUFPLEtBQUs7UUFDcEUsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQU8sY0FBc0I7UUFDbEUsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsbUVBQW1FLEVBQUUsQ0FBTyxRQUFnQixFQUFFLFdBQW1CO1FBQ2xILE1BQU0sUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxpREFBaUQsRUFBRSxDQUFPLFdBQW1CO1FBQzlFLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsbUJBQW1CLEVBQUU7UUFDdEIsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxpRUFBaUUsRUFBRSxDQUFPLFNBQWlCO1FBQzVGLE1BQU0sTUFBTSxDQUFDLE1BQU0sUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQztRQUNGLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxRQUFRLENBQUMsTUFBTSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNuRixFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDbEMsTUFBTSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsTUFBTSxRQUFRLENBQUMsTUFBTSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuSCxFQUFFLENBQUMsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9tZVBhZ2V9IGZyb20gJy4uL3BhZ2VzL2hvbWVQYWdlJztcbmltcG9ydCB7U2hvcHBpbmdDYXJ0UGFnZX0gZnJvbSAnLi4vcGFnZXMvc2hvcHBpbmdDYXJ0UGFnZSdcbmltcG9ydCB7ZGVmaW5lU3VwcG9ydENvZGV9IGZyb20gJ2N1Y3VtYmVyJzsvL0VTNiBzeW50YXggd2hpY2ggd2lsbCB1c2UgY29tbW9uSlNcbmltcG9ydCAqIGFzIGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgKiBhcyBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcbmxldCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcblxuZGVmaW5lU3VwcG9ydENvZGUoKHtXaGVuLCBUaGVuLCBHaXZlbiwgc2V0RGVmYXVsdFRpbWVvdXQsIEFmdGVyfSkgPT4ge1xuXG4gICAgbGV0IGhvbWVQYWdlOiBIb21lUGFnZSA9IG5ldyBIb21lUGFnZSgpO1xuICAgIGxldCBzaG9wcGluZ0NhcnRQYWdlOiBTaG9wcGluZ0NhcnRQYWdlID0gbmV3IFNob3BwaW5nQ2FydFBhZ2UoKTtcblxuICAgIHNldERlZmF1bHRUaW1lb3V0KDYwICogMTAwMCk7XG5cbiAgICBHaXZlbigvXkkgb3BlbiBob21lcGFnZSQvLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLnRvKCk7XG4gICAgfSk7XG5cbiAgICAvL3NldCBcInRhcmdldFwiOiBcIkVTMjAxNlwiIGluIHRzY29uZmlnLmpzb24gc28gdGhhdCB3ZSBjYW4gdXNlIGFzeW5jL2F3YWl0XG4gICAgR2l2ZW4oL15UaGUgc2hvcHBpbmcgY2FydCBoYXMgdGhlIGNvdW50ZWQgbnVtYmVyIFwiKC4qPylcIiQvLCBhc3luYyAoY291bnQpID0+IHtcbiAgICAgICAgYXdhaXQgZXhwZWN0KGhvbWVQYWdlLmdldENhcnRDb3VudFRleHQoKSkudG8uZXZlbnR1YWxseS5lcXVhbChjb3VudCk7XG4gICAgfSk7XG5cbiAgICBXaGVuKC9eSSBzZWFyY2ggZm9yIGEgcHJvZHVjdCBcIiguKj8pXCIkLywgYXN5bmMgKHNlYXJjaENyaXRlcmlhOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgaG9tZVBhZ2UuaW5wdXRTZWFyY2goc2VhcmNoQ3JpdGVyaWEpO1xuICAgIH0pO1xuXG4gICAgV2hlbigvXkkgc2VsZWN0IENhdGVnb3J5IFwiKC4qPylcIiB0aGVuIFN1Yi1jYXRlZ29yeSBcIiguKj8pXCIgaW4gdGhlIG1lbnUkLywgYXN5bmMgKGNhdGVnb3J5OiBzdHJpbmcsIHN1YkNhdGVnb3J5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgaG9tZVBhZ2UuY2hvb3NlQ2F0ZWdvcnkoY2F0ZWdvcnksIHN1YkNhdGVnb3J5KTtcbiAgICB9KTtcblxuICAgIFRoZW4oL15JIHNob3VsZCBzZWUgcmVzdWx0cyBzaG93aW5nIG9ubHkgZm9yIFwiKC4qPylcIiQvLCBhc3luYyAoc3ViQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgICAgICBleHBlY3QoYXdhaXQgaG9tZVBhZ2UuZ2V0U3ViQ2F0ZWdvcnlQYWdlVGl0bGUoKSkuaW5jbHVkZShzdWJDYXRlZ29yeSk7XG4gICAgfSk7XG5cbiAgICBXaGVuKC9eSSBjbGljayBzaWduIGluJC8sIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgaG9tZVBhZ2UuY2xpY2tTaWduSW4oKTtcbiAgICB9KTtcblxuICAgIFRoZW4oL15JIHN1Y2Nlc3NmdWxseSBsb2dpbiBhbmQgYmUgYWJsZSB0byBzZWUgbXkgZmlyc3QgbmFtZSBcIiguKj8pXCIkLywgYXN5bmMgKGZpcnN0TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IGV4cGVjdChhd2FpdCBob21lUGFnZS5nZXRNZW1iZXJGaXJzdE5hbWUoKSkuaW5jbHVkZShmaXJzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgQWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudENhcnRDb3VudCA9IGF3YWl0IHBhcnNlSW50KGF3YWl0IGhvbWVQYWdlLmdldENhcnRDb3VudFRleHQoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBZnRlciB0ZXN0LCBiZWZvcmUgY2xlYW51cCwgdGhlIGNhcnQgbnVtYmVyIGlzOiAke2N1cnJlbnRDYXJ0Q291bnR9YCk7XG4gICAgICAgIGlmIChjdXJyZW50Q2FydENvdW50ICE9IDApIHtcbiAgICAgICAgICAgIGF3YWl0IGhvbWVQYWdlLmNsaWNrQ2FydFNlY3Rpb24oKTtcbiAgICAgICAgICAgIGF3YWl0IHNob3BwaW5nQ2FydFBhZ2UuY2xlYXJDYXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYEFmdGVyIHRlc3QsIGFmdGVyIGNsZWFudXAsIHRoZSBjYXJ0IG51bWJlciBpczogJHthd2FpdCBwYXJzZUludChhd2FpdCBob21lUGFnZS5nZXRDYXJ0Q291bnRUZXh0KCkpfWApO1xuICAgICAgICBpZiAoYXdhaXQgaG9tZVBhZ2UuaXNTaWduZWRJbigpKSB7XG4gICAgICAgICAgICBhd2FpdCBob21lUGFnZS5jbGlja1NpZ25PdXQoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KTsiXX0=