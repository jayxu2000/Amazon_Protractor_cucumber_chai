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
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, Before }) => {
    let homePage = new homePage_1.HomePage();
    setDefaultTimeout(60 * 1000);
    ///^I open homepage$/,
    Before(() => __awaiter(this, void 0, void 0, function* () {
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
    // When(/^I select Category "(.*?)" then Sub-category "(.*?)" in the menu$/, async(category, subCategory)=>{
    //     await
    // }
    //
    // Then(/^I should see results showing only for "(.*?)$/, async(subCategory)=>{
    //     await
    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHVDQUEyQyxDQUFBLG9DQUFvQztBQUMvRSw2QkFBNkI7QUFDN0IsbURBQW1EO0FBRW5ELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6Qiw0QkFBaUIsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFDO0lBRTdELElBQUksUUFBUSxHQUFhLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBRXhDLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUU3QixzQkFBc0I7SUFDdEIsTUFBTSxDQUFFO1FBQ0osTUFBTSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILHdFQUF3RTtJQUN4RSxLQUFLLENBQUMsa0RBQWtELEVBQUUsQ0FBTyxLQUFLO1FBQ2xFLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLGNBQXFCO1FBQ2pFLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQzs4Q0FDc0M7SUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILDRHQUE0RztJQUM1RyxZQUFZO0lBQ1osSUFBSTtJQUNKLEVBQUU7SUFDRiwrRUFBK0U7SUFDL0UsWUFBWTtJQUNaLElBQUk7SUFFSjs7Ozs7Ozs7Ozs7Ozs7O1FBZUk7SUFFSixTQUFTO0lBQ1QsNENBQTRDO0lBQzVDLGlDQUFpQztJQUNqQyxpR0FBaUc7SUFDakcsd0RBQXdEO0lBQ3hELFFBQVE7SUFDUixJQUFJO0FBR1IsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hvbWVQYWdlfSBmcm9tICcuLi9wYWdlcy9ob21lUGFnZSc7XG5pbXBvcnQge2RlZmluZVN1cHBvcnRDb2RlfSBmcm9tICdjdWN1bWJlcic7Ly9FUzYgc3ludGF4IHdoaWNoIHdpbGwgdXNlIGNvbW1vbkpTXG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0ICogYXMgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQge2FzeW5jfSBmcm9tIFwicVwiO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xubGV0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xuXG5kZWZpbmVTdXBwb3J0Q29kZSgoe1doZW4sIFRoZW4sIEdpdmVuLCBzZXREZWZhdWx0VGltZW91dCwgQmVmb3JlfSkgPT4ge1xuXG4gICAgbGV0IGhvbWVQYWdlOiBIb21lUGFnZSA9IG5ldyBIb21lUGFnZSgpO1xuXG4gICAgc2V0RGVmYXVsdFRpbWVvdXQoNjAgKiAxMDAwKTtcblxuICAgIC8vL15JIG9wZW4gaG9tZXBhZ2UkLyxcbiAgICBCZWZvcmUoIGFzeW5jKCkgPT4ge1xuICAgICAgICBhd2FpdCBob21lUGFnZS50bygpO1xuICAgIH0pO1xuXG4gICAgLy9zZXQgXCJ0YXJnZXRcIjogXCJFUzIwMTZcIiBpbiB0c2NvbmZpZy5qc29uIHNvIHRoYXQgd2UgY2FuIHVzZSBhc3luYy9hd2FpdFxuICAgIEdpdmVuKC9eVGhlIHNob3BwaW5nIGNhcnQgaGFzIHRoZSBjb3VudCBudW1iZXIgXCIoLio/KVwiJC8sIGFzeW5jIChjb3VudCkgPT4ge1xuICAgICAgICBhd2FpdCBleHBlY3QoaG9tZVBhZ2UuZ2V0Q2FydENvdW50VGV4dCgpKS50by5ldmVudHVhbGx5LmVxdWFsKGNvdW50KTtcbiAgICB9KTtcblxuICAgIFdoZW4oL15JIHNlYXJjaCBmb3IgYSBwcm9kdWN0IFwiKC4qPylcIiQvLCBhc3luYyAoc2VhcmNoQ3JpdGVyaWE6c3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IGhvbWVQYWdlLmlucHV0U2VhcmNoKHNlYXJjaENyaXRlcmlhKTtcbiAgICAgICAgLyogICAgXHRNcGFnZS5jaG9vc2VPZmZlckl0ZW0oKTtcbiAgICAgICAgIERTcGFnZS5pbnB1dFNlYXJjaChzZWFyY2hDcml0ZXJpYSk7Ki9cbiAgICB9KTtcblxuICAgIC8vIFdoZW4oL15JIHNlbGVjdCBDYXRlZ29yeSBcIiguKj8pXCIgdGhlbiBTdWItY2F0ZWdvcnkgXCIoLio/KVwiIGluIHRoZSBtZW51JC8sIGFzeW5jKGNhdGVnb3J5LCBzdWJDYXRlZ29yeSk9PntcbiAgICAvLyAgICAgYXdhaXRcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBUaGVuKC9eSSBzaG91bGQgc2VlIHJlc3VsdHMgc2hvd2luZyBvbmx5IGZvciBcIiguKj8pJC8sIGFzeW5jKHN1YkNhdGVnb3J5KT0+e1xuICAgIC8vICAgICBhd2FpdFxuICAgIC8vIH1cblxuICAgIC8qICAgIFNjZW5hcmlvIDJcbiAgICAgQEdpdmVuKFwiXkkgYW0gYW5vdGhlciBncmVlbiBwbGFuIG1lbWJlciRcIilcbiAgICAgcHVibGljIHZvaWQgc2NlbmFyaW8yX2xvZ2luKCkge1xuICAgICBIcGFnZS5sb2dpbihcInBndWluZG9uQHRla3N5c3RlbXMuY29tXCIsIFwib2FzaVMxMjEyXCIpO1xuICAgICB9XG5cbiAgICAgQFdoZW4oXCJeSSBzZWxlY3QgXFxcIihbXlxcXCJdKilcXFwiIHRoZW4gXFxcIihbXlxcXCJdKilcXFwiIGluIHRoZSBtYWluIG1lbnUkXCIpXG4gICAgIHB1YmxpYyB2b2lkIHNlYXJjaChTdHJpbmcgY2F0ZWdvcnksIFN0cmluZyBzdWJDYXRlZ29yeSkge1xuICAgICBNcGFnZS5jaG9vc2VDYXRlZ29yeShkcml2ZXIsIGNhdGVnb3J5LCBzdWJDYXRlZ29yeSk7XG4gICAgIH1cblxuICAgICBAVGhlbihcIl5JIHNob3VsZCBzZWUgcmVzdWx0cyBzaG93aW5nIG9ubHkgZm9yIFxcXCIoW15cXFwiXSopXFxcIiRcIilcbiAgICAgcHVibGljIHZvaWQgaV9zaG91bGRfc2VlX3RoZV9vZmZlcl9hZGRlZF90b19teV9jYXJ0KFN0cmluZyBzdWJDYXRlZ29yeSkge1xuICAgICBhc3NlcnRFcXVhbHMoc3ViQ2F0ZWdvcnksU3BhZ2UuZ2V0U3ViQ2F0ZWdvcnlSZXN1bHRUZXh0KCkpO1xuICAgICBNcGFnZS5jbGlja1NpZ25PdXQoZHJpdmVyKTtcbiAgICAgfSovXG5cbiAgICAvLyBAQWZ0ZXJcbiAgICAvLyBwdWJsaWMgdm9pZCB0ZWFyRG93bihTY2VuYXJpbyBzY2VuYXJpbykge1xuICAgIC8vICAgICBpZiAoc2NlbmFyaW8uaXNGYWlsZWQoKSkge1xuICAgIC8vICAgICAgICAgYnl0ZVtdIHNjcmVlbnNob3RCeXRlcyA9ICgoVGFrZXNTY3JlZW5zaG90KSBkcml2ZXIpLmdldFNjcmVlbnNob3RBcyhPdXRwdXRUeXBlLkJZVEVTKTtcbiAgICAvLyAgICAgICAgIHNjZW5hcmlvLmVtYmVkKHNjcmVlbnNob3RCeXRlcywgXCJpbWFnZS9wbmdcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cblxufSk7Il19