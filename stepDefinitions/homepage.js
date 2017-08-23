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
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout }) => {
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
    /*    Scenario 2
     @Given("^I am another green plan member$")
     public void scenario2_login() {
     Hpage.login("pguindon@teksystems.com", "oasiS1212");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHVDQUEyQyxDQUFBLG9DQUFvQztBQUMvRSw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6Qiw0QkFBaUIsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUM7SUFFckQsSUFBSSxRQUFRLEdBQWEsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFFeEMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtRQUN2QixNQUFNLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsd0VBQXdFO0lBQ3hFLEtBQUssQ0FBQyxrREFBa0QsRUFBRSxDQUFPLEtBQUs7UUFDbEUsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQU8sY0FBcUI7UUFDakUsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsbUVBQW1FLEVBQUUsQ0FBTSxRQUFlLEVBQUUsV0FBa0I7UUFDL0csTUFBTSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLGdEQUFnRCxFQUFFLENBQU0sV0FBa0I7UUFDM0UsTUFBTSxRQUFRLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVIOzs7Ozs7Ozs7O1FBVUk7SUFFSixTQUFTO0lBQ1QsNENBQTRDO0lBQzVDLGlDQUFpQztJQUNqQyxpR0FBaUc7SUFDakcsd0RBQXdEO0lBQ3hELFFBQVE7SUFDUixJQUFJO0FBR1IsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hvbWVQYWdlfSBmcm9tICcuLi9wYWdlcy9ob21lUGFnZSc7XG5pbXBvcnQge2RlZmluZVN1cHBvcnRDb2RlfSBmcm9tICdjdWN1bWJlcic7Ly9FUzYgc3ludGF4IHdoaWNoIHdpbGwgdXNlIGNvbW1vbkpTXG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0ICogYXMgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5sZXQgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cbmRlZmluZVN1cHBvcnRDb2RlKCh7V2hlbiwgVGhlbiwgR2l2ZW4sIHNldERlZmF1bHRUaW1lb3V0fSkgPT4ge1xuXG4gICAgbGV0IGhvbWVQYWdlOiBIb21lUGFnZSA9IG5ldyBIb21lUGFnZSgpO1xuXG4gICAgc2V0RGVmYXVsdFRpbWVvdXQoNjAgKiAxMDAwKTtcblxuICAgIEdpdmVuKC9eSSBvcGVuIGhvbWVwYWdlJC8sIGFzeW5jKCkgPT4ge1xuICAgICAgICBhd2FpdCBob21lUGFnZS50bygpO1xuICAgIH0pO1xuXG4gICAgLy9zZXQgXCJ0YXJnZXRcIjogXCJFUzIwMTZcIiBpbiB0c2NvbmZpZy5qc29uIHNvIHRoYXQgd2UgY2FuIHVzZSBhc3luYy9hd2FpdFxuICAgIEdpdmVuKC9eVGhlIHNob3BwaW5nIGNhcnQgaGFzIHRoZSBjb3VudCBudW1iZXIgXCIoLio/KVwiJC8sIGFzeW5jIChjb3VudCkgPT4ge1xuICAgICAgICBhd2FpdCBleHBlY3QoaG9tZVBhZ2UuZ2V0Q2FydENvdW50VGV4dCgpKS50by5ldmVudHVhbGx5LmVxdWFsKGNvdW50KTtcbiAgICB9KTtcblxuICAgIFdoZW4oL15JIHNlYXJjaCBmb3IgYSBwcm9kdWN0IFwiKC4qPylcIiQvLCBhc3luYyAoc2VhcmNoQ3JpdGVyaWE6c3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLmlucHV0U2VhcmNoKHNlYXJjaENyaXRlcmlhKTtcbiAgICB9KTtcblxuICAgIFdoZW4oL15JIHNlbGVjdCBDYXRlZ29yeSBcIiguKj8pXCIgdGhlbiBTdWItY2F0ZWdvcnkgXCIoLio/KVwiIGluIHRoZSBtZW51JC8sIGFzeW5jKGNhdGVnb3J5OnN0cmluZywgc3ViQ2F0ZWdvcnk6c3RyaW5nKT0+e1xuICAgICAgICBhd2FpdCBob21lUGFnZS5jaG9vc2VDYXRlZ29yeShjYXRlZ29yeSwgc3ViQ2F0ZWdvcnkpO1xuICAgIH0pO1xuXG4gICAgVGhlbigvXkkgc2hvdWxkIHNlZSByZXN1bHRzIHNob3dpbmcgb25seSBmb3IgXCIoLio/KSQvLCBhc3luYyhzdWJDYXRlZ29yeTpzdHJpbmcpPT57XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLmlzU3ViQ2F0ZWdvcnlQYWdlVGl0bGVFeGlzdChzdWJDYXRlZ29yeSk7XG4gICAgfSk7XG5cbiAgICAvKiAgICBTY2VuYXJpbyAyXG4gICAgIEBHaXZlbihcIl5JIGFtIGFub3RoZXIgZ3JlZW4gcGxhbiBtZW1iZXIkXCIpXG4gICAgIHB1YmxpYyB2b2lkIHNjZW5hcmlvMl9sb2dpbigpIHtcbiAgICAgSHBhZ2UubG9naW4oXCJwZ3VpbmRvbkB0ZWtzeXN0ZW1zLmNvbVwiLCBcIm9hc2lTMTIxMlwiKTtcbiAgICAgfVxuXG4gICAgIEBUaGVuKFwiXkkgc2hvdWxkIHNlZSByZXN1bHRzIHNob3dpbmcgb25seSBmb3IgXFxcIihbXlxcXCJdKilcXFwiJFwiKVxuICAgICBwdWJsaWMgdm9pZCBpX3Nob3VsZF9zZWVfdGhlX29mZmVyX2FkZGVkX3RvX215X2NhcnQoU3RyaW5nIHN1YkNhdGVnb3J5KSB7XG4gICAgIGFzc2VydEVxdWFscyhzdWJDYXRlZ29yeSxTcGFnZS5nZXRTdWJDYXRlZ29yeVJlc3VsdFRleHQoKSk7XG4gICAgIE1wYWdlLmNsaWNrU2lnbk91dChkcml2ZXIpO1xuICAgICB9Ki9cblxuICAgIC8vIEBBZnRlclxuICAgIC8vIHB1YmxpYyB2b2lkIHRlYXJEb3duKFNjZW5hcmlvIHNjZW5hcmlvKSB7XG4gICAgLy8gICAgIGlmIChzY2VuYXJpby5pc0ZhaWxlZCgpKSB7XG4gICAgLy8gICAgICAgICBieXRlW10gc2NyZWVuc2hvdEJ5dGVzID0gKChUYWtlc1NjcmVlbnNob3QpIGRyaXZlcikuZ2V0U2NyZWVuc2hvdEFzKE91dHB1dFR5cGUuQllURVMpO1xuICAgIC8vICAgICAgICAgc2NlbmFyaW8uZW1iZWQoc2NyZWVuc2hvdEJ5dGVzLCBcImltYWdlL3BuZ1wiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuXG59KTsiXX0=