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
const cucumber_1 = require("cucumber");
const protractor_cucumber_conf_1 = require("../protractor.cucumber.conf");
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, After }) => {
    let homePage = new homePage_1.HomePage();
    setDefaultTimeout(60 * 1000);
    Given(/^I open homepage$/, () => {
        return homePage.to();
    });
    //set "target": "ES2016" in tsconfig.json
    Given(/^The shopping cart has the count number "(.*?)"$/, (count) => {
        protractor_cucumber_conf_1.expect(homePage.getCartCountText()).to.eventually.equal(count);
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHVDQUEyQztBQUMzQywwRUFBbUQ7QUFFbkQsNEJBQWlCLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBQztJQUU1RCxJQUFJLFFBQVEsR0FBYSxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUV4QyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFFN0IsS0FBSyxDQUFDLG1CQUFtQixFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCx5Q0FBeUM7SUFDekMsS0FBSyxDQUFDLGtEQUFrRCxFQUFFLENBQUMsS0FBSztRQUM1RCxpQ0FBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBTyxjQUFxQjtRQUNqRSxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0M7OENBQ3NDO0lBQzFDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFJSDs7Ozs7Ozs7Ozs7Ozs7O1FBZUk7SUFFSixTQUFTO0lBQ1QsNENBQTRDO0lBQzVDLGlDQUFpQztJQUNqQyxpR0FBaUc7SUFDakcsd0RBQXdEO0lBQ3hELFFBQVE7SUFDUixJQUFJO0FBR1IsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hvbWVQYWdlfSBmcm9tICcuLi9wYWdlcy9ob21lUGFnZSc7XG5pbXBvcnQge2RlZmluZVN1cHBvcnRDb2RlfSBmcm9tICdjdWN1bWJlcic7XG5pbXBvcnQge2V4cGVjdH0gZnJvbSBcIi4uL3Byb3RyYWN0b3IuY3VjdW1iZXIuY29uZlwiO1xuXG5kZWZpbmVTdXBwb3J0Q29kZSgoe1doZW4sIFRoZW4sIEdpdmVuLCBzZXREZWZhdWx0VGltZW91dCwgQWZ0ZXJ9KSA9PiB7XG5cbiAgICBsZXQgaG9tZVBhZ2U6IEhvbWVQYWdlID0gbmV3IEhvbWVQYWdlKCk7XG5cbiAgICBzZXREZWZhdWx0VGltZW91dCg2MCAqIDEwMDApO1xuXG4gICAgR2l2ZW4oL15JIG9wZW4gaG9tZXBhZ2UkLywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gaG9tZVBhZ2UudG8oKTtcbiAgICB9KTtcblxuICAgIC8vc2V0IFwidGFyZ2V0XCI6IFwiRVMyMDE2XCIgaW4gdHNjb25maWcuanNvblxuICAgIEdpdmVuKC9eVGhlIHNob3BwaW5nIGNhcnQgaGFzIHRoZSBjb3VudCBudW1iZXIgXCIoLio/KVwiJC8sIChjb3VudCkgPT4ge1xuICAgICAgICBleHBlY3QoaG9tZVBhZ2UuZ2V0Q2FydENvdW50VGV4dCgpKS50by5ldmVudHVhbGx5LmVxdWFsKGNvdW50KTtcbiAgICB9KTtcblxuICAgIFdoZW4oL15JIHNlYXJjaCBmb3IgYSBwcm9kdWN0IFwiKC4qPylcIiQvLCBhc3luYyAoc2VhcmNoQ3JpdGVyaWE6c3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLmlucHV0U2VhcmNoKHNlYXJjaENyaXRlcmlhKTtcbiAgICAgICAgLyogICAgXHRNcGFnZS5jaG9vc2VPZmZlckl0ZW0oKTtcbiAgICAgICAgIERTcGFnZS5pbnB1dFNlYXJjaChzZWFyY2hDcml0ZXJpYSk7Ki9cbiAgICB9KTtcblxuXG5cbiAgICAvKiAgICBTY2VuYXJpbyAyXG4gICAgIEBHaXZlbihcIl5JIGFtIGFub3RoZXIgZ3JlZW4gcGxhbiBtZW1iZXIkXCIpXG4gICAgIHB1YmxpYyB2b2lkIHNjZW5hcmlvMl9sb2dpbigpIHtcbiAgICAgSHBhZ2UubG9naW4oXCJwZ3VpbmRvbkB0ZWtzeXN0ZW1zLmNvbVwiLCBcIm9hc2lTMTIxMlwiKTtcbiAgICAgfVxuXG4gICAgIEBXaGVuKFwiXkkgc2VsZWN0IFxcXCIoW15cXFwiXSopXFxcIiB0aGVuIFxcXCIoW15cXFwiXSopXFxcIiBpbiB0aGUgbWFpbiBtZW51JFwiKVxuICAgICBwdWJsaWMgdm9pZCBzZWFyY2goU3RyaW5nIGNhdGVnb3J5LCBTdHJpbmcgc3ViQ2F0ZWdvcnkpIHtcbiAgICAgTXBhZ2UuY2hvb3NlQ2F0ZWdvcnkoZHJpdmVyLCBjYXRlZ29yeSwgc3ViQ2F0ZWdvcnkpO1xuICAgICB9XG5cbiAgICAgQFRoZW4oXCJeSSBzaG91bGQgc2VlIHJlc3VsdHMgc2hvd2luZyBvbmx5IGZvciBcXFwiKFteXFxcIl0qKVxcXCIkXCIpXG4gICAgIHB1YmxpYyB2b2lkIGlfc2hvdWxkX3NlZV90aGVfb2ZmZXJfYWRkZWRfdG9fbXlfY2FydChTdHJpbmcgc3ViQ2F0ZWdvcnkpIHtcbiAgICAgYXNzZXJ0RXF1YWxzKHN1YkNhdGVnb3J5LFNwYWdlLmdldFN1YkNhdGVnb3J5UmVzdWx0VGV4dCgpKTtcbiAgICAgTXBhZ2UuY2xpY2tTaWduT3V0KGRyaXZlcik7XG4gICAgIH0qL1xuXG4gICAgLy8gQEFmdGVyXG4gICAgLy8gcHVibGljIHZvaWQgdGVhckRvd24oU2NlbmFyaW8gc2NlbmFyaW8pIHtcbiAgICAvLyAgICAgaWYgKHNjZW5hcmlvLmlzRmFpbGVkKCkpIHtcbiAgICAvLyAgICAgICAgIGJ5dGVbXSBzY3JlZW5zaG90Qnl0ZXMgPSAoKFRha2VzU2NyZWVuc2hvdCkgZHJpdmVyKS5nZXRTY3JlZW5zaG90QXMoT3V0cHV0VHlwZS5CWVRFUyk7XG4gICAgLy8gICAgICAgICBzY2VuYXJpby5lbWJlZChzY3JlZW5zaG90Qnl0ZXMsIFwiaW1hZ2UvcG5nXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG5cbn0pOyJdfQ==