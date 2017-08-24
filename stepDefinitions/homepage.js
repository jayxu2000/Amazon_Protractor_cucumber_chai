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
    Given(/^The shopping cart has the count number "(.*?)"$/, (count) => __awaiter(this, void 0, void 0, function* () {
        yield expect(homePage.getCartCountText()).to.eventually.equal(count);
    }));
    When(/^I search for a product "(.*?)"$/, (searchCriteria) => __awaiter(this, void 0, void 0, function* () {
        yield homePage.inputSearch(searchCriteria);
    }));
    When(/^I select Category "(.*?)" then Sub-category "(.*?)" in the menu$/, (category, subCategory) => __awaiter(this, void 0, void 0, function* () {
        yield homePage.chooseCategory(category, subCategory);
    }));
    Then(/^I should see results showing only for "(.*?)$/, (subCategory) => __awaiter(this, void 0, void 0, function* () {
        yield homePage.isSubCategoryPageTitleExist(subCategory);
    }));
    When(/^I click sign in$/, () => __awaiter(this, void 0, void 0, function* () {
        yield homePage.clickSignIn();
    }));
    Then(/^I successfully login and be able to see my first name "(.*?)"$/, (firstName) => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield homePage.getMemberFirstName()).include(firstName);
    }));
    After(() => __awaiter(this, void 0, void 0, function* () {
        console.log(`In After Step, before clean the cart number is: ${parseInt(yield homePage.getCartCountText())}`);
        if (parseInt(yield homePage.getCartCountText()) != 0) {
            yield homePage.clickCartSection();
            yield shoppingCartPage.clearCart();
        }
        console.log(`In After Step, after clean, the cart number is: ${parseInt(yield homePage.getCartCountText())}`);
    }));
    /*    Scenario 2
     @Given("^I am another green plan member$")
     public void scenario2_login() {
     Hpage.login("pguindon@teksystems.com", "oasiS1212");
     }
     */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLGdFQUEwRDtBQUMxRCx1Q0FBMkMsQ0FBQSxvQ0FBb0M7QUFDL0UsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsNEJBQWlCLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBQztJQUU1RCxJQUFJLFFBQVEsR0FBYSxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUN4QyxJQUFJLGdCQUFnQixHQUFxQixJQUFJLG1DQUFnQixFQUFFLENBQUM7SUFFaEUsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtRQUN2QixNQUFNLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsd0VBQXdFO0lBQ3hFLEtBQUssQ0FBQyxrREFBa0QsRUFBRSxDQUFPLEtBQUs7UUFDbEUsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQU8sY0FBc0I7UUFDbEUsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsbUVBQW1FLEVBQUUsQ0FBTyxRQUFnQixFQUFFLFdBQW1CO1FBQ2xILE1BQU0sUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxnREFBZ0QsRUFBRSxDQUFPLFdBQW1CO1FBQzdFLE1BQU0sUUFBUSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsbUJBQW1CLEVBQUU7UUFDdEIsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxpRUFBaUUsRUFBRSxDQUFPLFNBQWdCO1FBQzNGLE1BQU0sTUFBTSxDQUFFLE1BQU0sUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELFFBQVEsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNqRCxNQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELFFBQVEsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xILENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRjs7Ozs7T0FLRztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIb21lUGFnZX0gZnJvbSAnLi4vcGFnZXMvaG9tZVBhZ2UnO1xuaW1wb3J0IHtTaG9wcGluZ0NhcnRQYWdlfSBmcm9tICcuLi9wYWdlcy9zaG9wcGluZ0NhcnRQYWdlJ1xuaW1wb3J0IHtkZWZpbmVTdXBwb3J0Q29kZX0gZnJvbSAnY3VjdW1iZXInOy8vRVM2IHN5bnRheCB3aGljaCB3aWxsIHVzZSBjb21tb25KU1xuaW1wb3J0ICogYXMgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCAqIGFzIGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xubGV0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xuXG5kZWZpbmVTdXBwb3J0Q29kZSgoe1doZW4sIFRoZW4sIEdpdmVuLCBzZXREZWZhdWx0VGltZW91dCwgQWZ0ZXJ9KSA9PiB7XG5cbiAgICBsZXQgaG9tZVBhZ2U6IEhvbWVQYWdlID0gbmV3IEhvbWVQYWdlKCk7XG4gICAgbGV0IHNob3BwaW5nQ2FydFBhZ2U6IFNob3BwaW5nQ2FydFBhZ2UgPSBuZXcgU2hvcHBpbmdDYXJ0UGFnZSgpO1xuXG4gICAgc2V0RGVmYXVsdFRpbWVvdXQoNjAgKiAxMDAwKTtcblxuICAgIEdpdmVuKC9eSSBvcGVuIGhvbWVwYWdlJC8sIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgaG9tZVBhZ2UudG8oKTtcbiAgICB9KTtcblxuICAgIC8vc2V0IFwidGFyZ2V0XCI6IFwiRVMyMDE2XCIgaW4gdHNjb25maWcuanNvbiBzbyB0aGF0IHdlIGNhbiB1c2UgYXN5bmMvYXdhaXRcbiAgICBHaXZlbigvXlRoZSBzaG9wcGluZyBjYXJ0IGhhcyB0aGUgY291bnQgbnVtYmVyIFwiKC4qPylcIiQvLCBhc3luYyAoY291bnQpID0+IHtcbiAgICAgICAgYXdhaXQgZXhwZWN0KGhvbWVQYWdlLmdldENhcnRDb3VudFRleHQoKSkudG8uZXZlbnR1YWxseS5lcXVhbChjb3VudCk7XG4gICAgfSk7XG5cbiAgICBXaGVuKC9eSSBzZWFyY2ggZm9yIGEgcHJvZHVjdCBcIiguKj8pXCIkLywgYXN5bmMgKHNlYXJjaENyaXRlcmlhOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgaG9tZVBhZ2UuaW5wdXRTZWFyY2goc2VhcmNoQ3JpdGVyaWEpO1xuICAgIH0pO1xuXG4gICAgV2hlbigvXkkgc2VsZWN0IENhdGVnb3J5IFwiKC4qPylcIiB0aGVuIFN1Yi1jYXRlZ29yeSBcIiguKj8pXCIgaW4gdGhlIG1lbnUkLywgYXN5bmMgKGNhdGVnb3J5OiBzdHJpbmcsIHN1YkNhdGVnb3J5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgaG9tZVBhZ2UuY2hvb3NlQ2F0ZWdvcnkoY2F0ZWdvcnksIHN1YkNhdGVnb3J5KTtcbiAgICB9KTtcblxuICAgIFRoZW4oL15JIHNob3VsZCBzZWUgcmVzdWx0cyBzaG93aW5nIG9ubHkgZm9yIFwiKC4qPykkLywgYXN5bmMgKHN1YkNhdGVnb3J5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgaG9tZVBhZ2UuaXNTdWJDYXRlZ29yeVBhZ2VUaXRsZUV4aXN0KHN1YkNhdGVnb3J5KTtcbiAgICB9KTtcblxuICAgIFdoZW4oL15JIGNsaWNrIHNpZ24gaW4kLywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBob21lUGFnZS5jbGlja1NpZ25JbigpO1xuICAgIH0pO1xuXG4gICAgVGhlbigvXkkgc3VjY2Vzc2Z1bGx5IGxvZ2luIGFuZCBiZSBhYmxlIHRvIHNlZSBteSBmaXJzdCBuYW1lIFwiKC4qPylcIiQvLCBhc3luYyAoZmlyc3ROYW1lOnN0cmluZyk9PiB7XG4gICAgICAgIGF3YWl0IGV4cGVjdCggYXdhaXQgaG9tZVBhZ2UuZ2V0TWVtYmVyRmlyc3ROYW1lKCkpLmluY2x1ZGUoZmlyc3ROYW1lKTtcbiAgICB9KTtcblxuICAgIEFmdGVyKGFzeW5jKCk9PntcbiAgICAgICBjb25zb2xlLmxvZyhgSW4gQWZ0ZXIgU3RlcCwgYmVmb3JlIGNsZWFuIHRoZSBjYXJ0IG51bWJlciBpczogJHtwYXJzZUludChhd2FpdCBob21lUGFnZS5nZXRDYXJ0Q291bnRUZXh0KCkpfWApO1xuICAgICAgIGlmIChwYXJzZUludChhd2FpdCBob21lUGFnZS5nZXRDYXJ0Q291bnRUZXh0KCkpIT0gMCl7XG4gICAgICAgICAgIGF3YWl0IGhvbWVQYWdlLmNsaWNrQ2FydFNlY3Rpb24oKTtcbiAgICAgICAgICAgYXdhaXQgc2hvcHBpbmdDYXJ0UGFnZS5jbGVhckNhcnQoKTtcbiAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBJbiBBZnRlciBTdGVwLCBhZnRlciBjbGVhbiwgdGhlIGNhcnQgbnVtYmVyIGlzOiAke3BhcnNlSW50KGF3YWl0IGhvbWVQYWdlLmdldENhcnRDb3VudFRleHQoKSl9YCk7XG4gICAgfSlcblxuICAgIC8qICAgIFNjZW5hcmlvIDJcbiAgICAgQEdpdmVuKFwiXkkgYW0gYW5vdGhlciBncmVlbiBwbGFuIG1lbWJlciRcIilcbiAgICAgcHVibGljIHZvaWQgc2NlbmFyaW8yX2xvZ2luKCkge1xuICAgICBIcGFnZS5sb2dpbihcInBndWluZG9uQHRla3N5c3RlbXMuY29tXCIsIFwib2FzaVMxMjEyXCIpO1xuICAgICB9XG4gICAgICovXG5cbn0pOyJdfQ==