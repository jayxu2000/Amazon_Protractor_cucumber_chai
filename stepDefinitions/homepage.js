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
        /*    	Mpage.chooseOfferItem();
         DSpage.inputSearch(searchCriteria);*/
    }));
    /*    Scenario 2
     @Given("^I am another green plan member$")
     public void scenario2_login() {
     Hpage.login("pguindon@teksystems.com", "oasiS1212");
     }

     @When("^I select \"([^\"]*)\" then \"([^\"]*)\" in the main menu$")
     public void search(String category, String subCategory) {
     Mpage.chooseCategory(driver, category, subCategory);
     }

     @Then("^I should see results showing only for \"([^\"]*)\"$")
     public void i_should_see_the_offer_added_to_my_cart(String subCategory) {
     assertEquals(subCategory,Spage.getSubCategoryResultText());
     Mpage.clickSignOut(driver);
     }*/
    // @After
    // public void tearDown(Scenario scenario) {
    //     if (scenario.isFailed()) {
    //         byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
    //         scenario.embed(screenshotBytes, "image/png");
    //     }
    // }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHVDQUEyQyxDQUFBLG9DQUFvQztBQUMvRSw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6Qiw0QkFBaUIsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFDO0lBRTVELElBQUksUUFBUSxHQUFhLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBRXhDLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUU3QixLQUFLLENBQUMsbUJBQW1CLEVBQUU7UUFDdkIsTUFBTSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILHdFQUF3RTtJQUN4RSxLQUFLLENBQUMsa0RBQWtELEVBQUUsQ0FBTyxLQUFLO1FBQ2xFLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLGNBQXFCO1FBQ2pFLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQzs4Q0FDc0M7SUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUlIOzs7Ozs7Ozs7Ozs7Ozs7UUFlSTtJQUVKLFNBQVM7SUFDVCw0Q0FBNEM7SUFDNUMsaUNBQWlDO0lBQ2pDLGlHQUFpRztJQUNqRyx3REFBd0Q7SUFDeEQsUUFBUTtJQUNSLElBQUk7QUFHUixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9tZVBhZ2V9IGZyb20gJy4uL3BhZ2VzL2hvbWVQYWdlJztcbmltcG9ydCB7ZGVmaW5lU3VwcG9ydENvZGV9IGZyb20gJ2N1Y3VtYmVyJzsvL0VTNiBzeW50YXggd2hpY2ggd2lsbCB1c2UgY29tbW9uSlNcbmltcG9ydCAqIGFzIGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgKiBhcyBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcbmxldCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcblxuZGVmaW5lU3VwcG9ydENvZGUoKHtXaGVuLCBUaGVuLCBHaXZlbiwgc2V0RGVmYXVsdFRpbWVvdXQsIEFmdGVyfSkgPT4ge1xuXG4gICAgbGV0IGhvbWVQYWdlOiBIb21lUGFnZSA9IG5ldyBIb21lUGFnZSgpO1xuXG4gICAgc2V0RGVmYXVsdFRpbWVvdXQoNjAgKiAxMDAwKTtcblxuICAgIEdpdmVuKC9eSSBvcGVuIGhvbWVwYWdlJC8sIGFzeW5jKCkgPT4ge1xuICAgICAgICBhd2FpdCBob21lUGFnZS50bygpO1xuICAgIH0pO1xuXG4gICAgLy9zZXQgXCJ0YXJnZXRcIjogXCJFUzIwMTZcIiBpbiB0c2NvbmZpZy5qc29uIHNvIHRoYXQgd2UgY2FuIHVzZSBhc3luYy9hd2FpdFxuICAgIEdpdmVuKC9eVGhlIHNob3BwaW5nIGNhcnQgaGFzIHRoZSBjb3VudCBudW1iZXIgXCIoLio/KVwiJC8sIGFzeW5jIChjb3VudCkgPT4ge1xuICAgICAgICBhd2FpdCBleHBlY3QoaG9tZVBhZ2UuZ2V0Q2FydENvdW50VGV4dCgpKS50by5ldmVudHVhbGx5LmVxdWFsKGNvdW50KTtcbiAgICB9KTtcblxuICAgIFdoZW4oL15JIHNlYXJjaCBmb3IgYSBwcm9kdWN0IFwiKC4qPylcIiQvLCBhc3luYyAoc2VhcmNoQ3JpdGVyaWE6c3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLmlucHV0U2VhcmNoKHNlYXJjaENyaXRlcmlhKTtcbiAgICAgICAgLyogICAgXHRNcGFnZS5jaG9vc2VPZmZlckl0ZW0oKTtcbiAgICAgICAgIERTcGFnZS5pbnB1dFNlYXJjaChzZWFyY2hDcml0ZXJpYSk7Ki9cbiAgICB9KTtcblxuXG5cbiAgICAvKiAgICBTY2VuYXJpbyAyXG4gICAgIEBHaXZlbihcIl5JIGFtIGFub3RoZXIgZ3JlZW4gcGxhbiBtZW1iZXIkXCIpXG4gICAgIHB1YmxpYyB2b2lkIHNjZW5hcmlvMl9sb2dpbigpIHtcbiAgICAgSHBhZ2UubG9naW4oXCJwZ3VpbmRvbkB0ZWtzeXN0ZW1zLmNvbVwiLCBcIm9hc2lTMTIxMlwiKTtcbiAgICAgfVxuXG4gICAgIEBXaGVuKFwiXkkgc2VsZWN0IFxcXCIoW15cXFwiXSopXFxcIiB0aGVuIFxcXCIoW15cXFwiXSopXFxcIiBpbiB0aGUgbWFpbiBtZW51JFwiKVxuICAgICBwdWJsaWMgdm9pZCBzZWFyY2goU3RyaW5nIGNhdGVnb3J5LCBTdHJpbmcgc3ViQ2F0ZWdvcnkpIHtcbiAgICAgTXBhZ2UuY2hvb3NlQ2F0ZWdvcnkoZHJpdmVyLCBjYXRlZ29yeSwgc3ViQ2F0ZWdvcnkpO1xuICAgICB9XG5cbiAgICAgQFRoZW4oXCJeSSBzaG91bGQgc2VlIHJlc3VsdHMgc2hvd2luZyBvbmx5IGZvciBcXFwiKFteXFxcIl0qKVxcXCIkXCIpXG4gICAgIHB1YmxpYyB2b2lkIGlfc2hvdWxkX3NlZV90aGVfb2ZmZXJfYWRkZWRfdG9fbXlfY2FydChTdHJpbmcgc3ViQ2F0ZWdvcnkpIHtcbiAgICAgYXNzZXJ0RXF1YWxzKHN1YkNhdGVnb3J5LFNwYWdlLmdldFN1YkNhdGVnb3J5UmVzdWx0VGV4dCgpKTtcbiAgICAgTXBhZ2UuY2xpY2tTaWduT3V0KGRyaXZlcik7XG4gICAgIH0qL1xuXG4gICAgLy8gQEFmdGVyXG4gICAgLy8gcHVibGljIHZvaWQgdGVhckRvd24oU2NlbmFyaW8gc2NlbmFyaW8pIHtcbiAgICAvLyAgICAgaWYgKHNjZW5hcmlvLmlzRmFpbGVkKCkpIHtcbiAgICAvLyAgICAgICAgIGJ5dGVbXSBzY3JlZW5zaG90Qnl0ZXMgPSAoKFRha2VzU2NyZWVuc2hvdCkgZHJpdmVyKS5nZXRTY3JlZW5zaG90QXMoT3V0cHV0VHlwZS5CWVRFUyk7XG4gICAgLy8gICAgICAgICBzY2VuYXJpby5lbWJlZChzY3JlZW5zaG90Qnl0ZXMsIFwiaW1hZ2UvcG5nXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG5cbn0pOyJdfQ==