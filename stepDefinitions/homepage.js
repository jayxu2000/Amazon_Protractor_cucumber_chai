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
const cucumber_1 = require("cucumber"); //ES6 syntax which will use commonJS
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, After }) => {
    let homePage = new homePage_1.HomePage();
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
        let cartNumber = yield homePage.getCartCountText();
        console.log(`In After Step, the cart number is: ${parseInt(cartNumber)}`);
        // for (let item of cartNumber) {
        //
        // }
    }));
    /*    Scenario 2
     @Given("^I am another green plan member$")
     public void scenario2_login() {
     Hpage.login("pguindon@teksystems.com", "oasiS1212");
     }
     */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHVDQUEyQyxDQUFBLG9DQUFvQztBQUMvRSw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6Qiw0QkFBaUIsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFDO0lBRTVELElBQUksUUFBUSxHQUFhLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBRXhDLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUU3QixLQUFLLENBQUMsbUJBQW1CLEVBQUU7UUFDdkIsTUFBTSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILHdFQUF3RTtJQUN4RSxLQUFLLENBQUMsa0RBQWtELEVBQUUsQ0FBTyxLQUFLO1FBQ2xFLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLGNBQXNCO1FBQ2xFLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLG1FQUFtRSxFQUFFLENBQU8sUUFBZ0IsRUFBRSxXQUFtQjtRQUNsSCxNQUFNLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsZ0RBQWdELEVBQUUsQ0FBTyxXQUFtQjtRQUM3RSxNQUFNLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1FBQ3RCLE1BQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsaUVBQWlFLEVBQUUsQ0FBTyxTQUFnQjtRQUMzRixNQUFNLE1BQU0sQ0FBRSxNQUFNLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUM7UUFDSCxJQUFJLFVBQVUsR0FBRyxNQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekUsaUNBQWlDO1FBQ2pDLEVBQUU7UUFDRixJQUFJO0lBQ1IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUdGOzs7OztPQUtHO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hvbWVQYWdlfSBmcm9tICcuLi9wYWdlcy9ob21lUGFnZSc7XG5pbXBvcnQge2RlZmluZVN1cHBvcnRDb2RlfSBmcm9tICdjdWN1bWJlcic7Ly9FUzYgc3ludGF4IHdoaWNoIHdpbGwgdXNlIGNvbW1vbkpTXG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0ICogYXMgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5sZXQgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cbmRlZmluZVN1cHBvcnRDb2RlKCh7V2hlbiwgVGhlbiwgR2l2ZW4sIHNldERlZmF1bHRUaW1lb3V0LCBBZnRlcn0pID0+IHtcblxuICAgIGxldCBob21lUGFnZTogSG9tZVBhZ2UgPSBuZXcgSG9tZVBhZ2UoKTtcblxuICAgIHNldERlZmF1bHRUaW1lb3V0KDYwICogMTAwMCk7XG5cbiAgICBHaXZlbigvXkkgb3BlbiBob21lcGFnZSQvLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLnRvKCk7XG4gICAgfSk7XG5cbiAgICAvL3NldCBcInRhcmdldFwiOiBcIkVTMjAxNlwiIGluIHRzY29uZmlnLmpzb24gc28gdGhhdCB3ZSBjYW4gdXNlIGFzeW5jL2F3YWl0XG4gICAgR2l2ZW4oL15UaGUgc2hvcHBpbmcgY2FydCBoYXMgdGhlIGNvdW50IG51bWJlciBcIiguKj8pXCIkLywgYXN5bmMgKGNvdW50KSA9PiB7XG4gICAgICAgIGF3YWl0IGV4cGVjdChob21lUGFnZS5nZXRDYXJ0Q291bnRUZXh0KCkpLnRvLmV2ZW50dWFsbHkuZXF1YWwoY291bnQpO1xuICAgIH0pO1xuXG4gICAgV2hlbigvXkkgc2VhcmNoIGZvciBhIHByb2R1Y3QgXCIoLio/KVwiJC8sIGFzeW5jIChzZWFyY2hDcml0ZXJpYTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLmlucHV0U2VhcmNoKHNlYXJjaENyaXRlcmlhKTtcbiAgICB9KTtcblxuICAgIFdoZW4oL15JIHNlbGVjdCBDYXRlZ29yeSBcIiguKj8pXCIgdGhlbiBTdWItY2F0ZWdvcnkgXCIoLio/KVwiIGluIHRoZSBtZW51JC8sIGFzeW5jIChjYXRlZ29yeTogc3RyaW5nLCBzdWJDYXRlZ29yeTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLmNob29zZUNhdGVnb3J5KGNhdGVnb3J5LCBzdWJDYXRlZ29yeSk7XG4gICAgfSk7XG5cbiAgICBUaGVuKC9eSSBzaG91bGQgc2VlIHJlc3VsdHMgc2hvd2luZyBvbmx5IGZvciBcIiguKj8pJC8sIGFzeW5jIChzdWJDYXRlZ29yeTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLmlzU3ViQ2F0ZWdvcnlQYWdlVGl0bGVFeGlzdChzdWJDYXRlZ29yeSk7XG4gICAgfSk7XG5cbiAgICBXaGVuKC9eSSBjbGljayBzaWduIGluJC8sIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgaG9tZVBhZ2UuY2xpY2tTaWduSW4oKTtcbiAgICB9KTtcblxuICAgIFRoZW4oL15JIHN1Y2Nlc3NmdWxseSBsb2dpbiBhbmQgYmUgYWJsZSB0byBzZWUgbXkgZmlyc3QgbmFtZSBcIiguKj8pXCIkLywgYXN5bmMgKGZpcnN0TmFtZTpzdHJpbmcpPT4ge1xuICAgICAgICBhd2FpdCBleHBlY3QoIGF3YWl0IGhvbWVQYWdlLmdldE1lbWJlckZpcnN0TmFtZSgpKS5pbmNsdWRlKGZpcnN0TmFtZSk7XG4gICAgfSk7XG5cbiAgICBBZnRlcihhc3luYygpPT57XG4gICAgICAgbGV0IGNhcnROdW1iZXIgPSBhd2FpdCBob21lUGFnZS5nZXRDYXJ0Q291bnRUZXh0KCk7XG4gICAgICAgY29uc29sZS5sb2coYEluIEFmdGVyIFN0ZXAsIHRoZSBjYXJ0IG51bWJlciBpczogJHtwYXJzZUludChjYXJ0TnVtYmVyKX1gKTtcbiAgICAgICAgLy8gZm9yIChsZXQgaXRlbSBvZiBjYXJ0TnVtYmVyKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIH1cbiAgICB9KVxuXG5cbiAgICAvKiAgICBTY2VuYXJpbyAyXG4gICAgIEBHaXZlbihcIl5JIGFtIGFub3RoZXIgZ3JlZW4gcGxhbiBtZW1iZXIkXCIpXG4gICAgIHB1YmxpYyB2b2lkIHNjZW5hcmlvMl9sb2dpbigpIHtcbiAgICAgSHBhZ2UubG9naW4oXCJwZ3VpbmRvbkB0ZWtzeXN0ZW1zLmNvbVwiLCBcIm9hc2lTMTIxMlwiKTtcbiAgICAgfVxuICAgICAqL1xuXG59KTsiXX0=