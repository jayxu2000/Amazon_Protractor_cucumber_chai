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
    When(/^I click sign in$/, () => __awaiter(this, void 0, void 0, function* () {
        yield homePage.clickSignIn();
    }));
    /*    Scenario 2
     @Given("^I am another green plan member$")
     public void scenario2_login() {
     Hpage.login("pguindon@teksystems.com", "oasiS1212");
     }

    // @After
    // public void tearDown(Scenario scenario) {
    //     if (scenario.isFailed()) {
    //         byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
    //         scenario.embed(screenshotBytes, "image/png");
    //     }
    // }
     */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHVDQUEyQyxDQUFBLG9DQUFvQztBQUMvRSw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6Qiw0QkFBaUIsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUM7SUFFckQsSUFBSSxRQUFRLEdBQWEsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFFeEMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtRQUN2QixNQUFNLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsd0VBQXdFO0lBQ3hFLEtBQUssQ0FBQyxrREFBa0QsRUFBRSxDQUFPLEtBQUs7UUFDbEUsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQU8sY0FBc0I7UUFDbEUsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsbUVBQW1FLEVBQUUsQ0FBTyxRQUFnQixFQUFFLFdBQW1CO1FBQ2xILE1BQU0sUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxnREFBZ0QsRUFBRSxDQUFPLFdBQW1CO1FBQzdFLE1BQU0sUUFBUSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsbUJBQW1CLEVBQUU7UUFDdEIsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUdIOzs7Ozs7Ozs7Ozs7O09BYUc7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9tZVBhZ2V9IGZyb20gJy4uL3BhZ2VzL2hvbWVQYWdlJztcbmltcG9ydCB7ZGVmaW5lU3VwcG9ydENvZGV9IGZyb20gJ2N1Y3VtYmVyJzsvL0VTNiBzeW50YXggd2hpY2ggd2lsbCB1c2UgY29tbW9uSlNcbmltcG9ydCAqIGFzIGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgKiBhcyBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcbmxldCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcblxuZGVmaW5lU3VwcG9ydENvZGUoKHtXaGVuLCBUaGVuLCBHaXZlbiwgc2V0RGVmYXVsdFRpbWVvdXR9KSA9PiB7XG5cbiAgICBsZXQgaG9tZVBhZ2U6IEhvbWVQYWdlID0gbmV3IEhvbWVQYWdlKCk7XG5cbiAgICBzZXREZWZhdWx0VGltZW91dCg2MCAqIDEwMDApO1xuXG4gICAgR2l2ZW4oL15JIG9wZW4gaG9tZXBhZ2UkLywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBob21lUGFnZS50bygpO1xuICAgIH0pO1xuXG4gICAgLy9zZXQgXCJ0YXJnZXRcIjogXCJFUzIwMTZcIiBpbiB0c2NvbmZpZy5qc29uIHNvIHRoYXQgd2UgY2FuIHVzZSBhc3luYy9hd2FpdFxuICAgIEdpdmVuKC9eVGhlIHNob3BwaW5nIGNhcnQgaGFzIHRoZSBjb3VudCBudW1iZXIgXCIoLio/KVwiJC8sIGFzeW5jIChjb3VudCkgPT4ge1xuICAgICAgICBhd2FpdCBleHBlY3QoaG9tZVBhZ2UuZ2V0Q2FydENvdW50VGV4dCgpKS50by5ldmVudHVhbGx5LmVxdWFsKGNvdW50KTtcbiAgICB9KTtcblxuICAgIFdoZW4oL15JIHNlYXJjaCBmb3IgYSBwcm9kdWN0IFwiKC4qPylcIiQvLCBhc3luYyAoc2VhcmNoQ3JpdGVyaWE6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCBob21lUGFnZS5pbnB1dFNlYXJjaChzZWFyY2hDcml0ZXJpYSk7XG4gICAgfSk7XG5cbiAgICBXaGVuKC9eSSBzZWxlY3QgQ2F0ZWdvcnkgXCIoLio/KVwiIHRoZW4gU3ViLWNhdGVnb3J5IFwiKC4qPylcIiBpbiB0aGUgbWVudSQvLCBhc3luYyAoY2F0ZWdvcnk6IHN0cmluZywgc3ViQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCBob21lUGFnZS5jaG9vc2VDYXRlZ29yeShjYXRlZ29yeSwgc3ViQ2F0ZWdvcnkpO1xuICAgIH0pO1xuXG4gICAgVGhlbigvXkkgc2hvdWxkIHNlZSByZXN1bHRzIHNob3dpbmcgb25seSBmb3IgXCIoLio/KSQvLCBhc3luYyAoc3ViQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCBob21lUGFnZS5pc1N1YkNhdGVnb3J5UGFnZVRpdGxlRXhpc3Qoc3ViQ2F0ZWdvcnkpO1xuICAgIH0pO1xuXG4gICAgV2hlbigvXkkgY2xpY2sgc2lnbiBpbiQvLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLmNsaWNrU2lnbkluKCk7XG4gICAgfSk7XG5cblxuICAgIC8qICAgIFNjZW5hcmlvIDJcbiAgICAgQEdpdmVuKFwiXkkgYW0gYW5vdGhlciBncmVlbiBwbGFuIG1lbWJlciRcIilcbiAgICAgcHVibGljIHZvaWQgc2NlbmFyaW8yX2xvZ2luKCkge1xuICAgICBIcGFnZS5sb2dpbihcInBndWluZG9uQHRla3N5c3RlbXMuY29tXCIsIFwib2FzaVMxMjEyXCIpO1xuICAgICB9XG5cbiAgICAvLyBAQWZ0ZXJcbiAgICAvLyBwdWJsaWMgdm9pZCB0ZWFyRG93bihTY2VuYXJpbyBzY2VuYXJpbykge1xuICAgIC8vICAgICBpZiAoc2NlbmFyaW8uaXNGYWlsZWQoKSkge1xuICAgIC8vICAgICAgICAgYnl0ZVtdIHNjcmVlbnNob3RCeXRlcyA9ICgoVGFrZXNTY3JlZW5zaG90KSBkcml2ZXIpLmdldFNjcmVlbnNob3RBcyhPdXRwdXRUeXBlLkJZVEVTKTtcbiAgICAvLyAgICAgICAgIHNjZW5hcmlvLmVtYmVkKHNjcmVlbnNob3RCeXRlcywgXCJpbWFnZS9wbmdcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgICovXG5cbn0pOyJdfQ==