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
// let chai = require('chai').use(require('chai-as-promised'));
// let expect = chai.expect;
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, After }) => {
    let homePage = new homePage_1.HomePage();
    setDefaultTimeout(60 * 1000);
    Given(/^I open homepage$/, () => {
        return homePage.to();
    });
    // When(/^$/, function () {
    //
    // });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLHVDQUEyQztBQUMzQywwRUFBbUQ7QUFDbkQsK0RBQStEO0FBQy9ELDRCQUE0QjtBQUU1Qiw0QkFBaUIsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFDO0lBRTVELElBQUksUUFBUSxHQUFhLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBRXhDLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUU3QixLQUFLLENBQUMsbUJBQW1CLEVBQUU7UUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILDJCQUEyQjtJQUMzQixFQUFFO0lBQ0YsTUFBTTtJQUVOLHlDQUF5QztJQUN6QyxLQUFLLENBQUMsa0RBQWtELEVBQUUsQ0FBQyxLQUFLO1FBQzVELGlDQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLGNBQXFCO1FBQ2pFLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQzs4Q0FDc0M7SUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUlIOzs7Ozs7Ozs7Ozs7Ozs7UUFlSTtJQUVKLFNBQVM7SUFDVCw0Q0FBNEM7SUFDNUMsaUNBQWlDO0lBQ2pDLGlHQUFpRztJQUNqRyx3REFBd0Q7SUFDeEQsUUFBUTtJQUNSLElBQUk7QUFHUixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9tZVBhZ2V9IGZyb20gJy4uL3BhZ2VzL2hvbWVQYWdlJztcbmltcG9ydCB7ZGVmaW5lU3VwcG9ydENvZGV9IGZyb20gJ2N1Y3VtYmVyJztcbmltcG9ydCB7ZXhwZWN0fSBmcm9tIFwiLi4vcHJvdHJhY3Rvci5jdWN1bWJlci5jb25mXCI7XG4vLyBsZXQgY2hhaSA9IHJlcXVpcmUoJ2NoYWknKS51c2UocmVxdWlyZSgnY2hhaS1hcy1wcm9taXNlZCcpKTtcbi8vIGxldCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcblxuZGVmaW5lU3VwcG9ydENvZGUoKHtXaGVuLCBUaGVuLCBHaXZlbiwgc2V0RGVmYXVsdFRpbWVvdXQsIEFmdGVyfSkgPT4ge1xuXG4gICAgbGV0IGhvbWVQYWdlOiBIb21lUGFnZSA9IG5ldyBIb21lUGFnZSgpO1xuXG4gICAgc2V0RGVmYXVsdFRpbWVvdXQoNjAgKiAxMDAwKTtcblxuICAgIEdpdmVuKC9eSSBvcGVuIGhvbWVwYWdlJC8sICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhvbWVQYWdlLnRvKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuKC9eJC8sIGZ1bmN0aW9uICgpIHtcbiAgICAvL1xuICAgIC8vIH0pO1xuXG4gICAgLy9zZXQgXCJ0YXJnZXRcIjogXCJFUzIwMTZcIiBpbiB0c2NvbmZpZy5qc29uXG4gICAgR2l2ZW4oL15UaGUgc2hvcHBpbmcgY2FydCBoYXMgdGhlIGNvdW50IG51bWJlciBcIiguKj8pXCIkLywgKGNvdW50KSA9PiB7XG4gICAgICAgIGV4cGVjdChob21lUGFnZS5nZXRDYXJ0Q291bnRUZXh0KCkpLnRvLmV2ZW50dWFsbHkuZXF1YWwoY291bnQpO1xuICAgIH0pO1xuXG4gICAgV2hlbigvXkkgc2VhcmNoIGZvciBhIHByb2R1Y3QgXCIoLio/KVwiJC8sIGFzeW5jIChzZWFyY2hDcml0ZXJpYTpzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgaG9tZVBhZ2UuaW5wdXRTZWFyY2goc2VhcmNoQ3JpdGVyaWEpO1xuICAgICAgICAvKiAgICBcdE1wYWdlLmNob29zZU9mZmVySXRlbSgpO1xuICAgICAgICAgRFNwYWdlLmlucHV0U2VhcmNoKHNlYXJjaENyaXRlcmlhKTsqL1xuICAgIH0pO1xuXG5cblxuICAgIC8qICAgIFNjZW5hcmlvIDJcbiAgICAgQEdpdmVuKFwiXkkgYW0gYW5vdGhlciBncmVlbiBwbGFuIG1lbWJlciRcIilcbiAgICAgcHVibGljIHZvaWQgc2NlbmFyaW8yX2xvZ2luKCkge1xuICAgICBIcGFnZS5sb2dpbihcInBndWluZG9uQHRla3N5c3RlbXMuY29tXCIsIFwib2FzaVMxMjEyXCIpO1xuICAgICB9XG5cbiAgICAgQFdoZW4oXCJeSSBzZWxlY3QgXFxcIihbXlxcXCJdKilcXFwiIHRoZW4gXFxcIihbXlxcXCJdKilcXFwiIGluIHRoZSBtYWluIG1lbnUkXCIpXG4gICAgIHB1YmxpYyB2b2lkIHNlYXJjaChTdHJpbmcgY2F0ZWdvcnksIFN0cmluZyBzdWJDYXRlZ29yeSkge1xuICAgICBNcGFnZS5jaG9vc2VDYXRlZ29yeShkcml2ZXIsIGNhdGVnb3J5LCBzdWJDYXRlZ29yeSk7XG4gICAgIH1cblxuICAgICBAVGhlbihcIl5JIHNob3VsZCBzZWUgcmVzdWx0cyBzaG93aW5nIG9ubHkgZm9yIFxcXCIoW15cXFwiXSopXFxcIiRcIilcbiAgICAgcHVibGljIHZvaWQgaV9zaG91bGRfc2VlX3RoZV9vZmZlcl9hZGRlZF90b19teV9jYXJ0KFN0cmluZyBzdWJDYXRlZ29yeSkge1xuICAgICBhc3NlcnRFcXVhbHMoc3ViQ2F0ZWdvcnksU3BhZ2UuZ2V0U3ViQ2F0ZWdvcnlSZXN1bHRUZXh0KCkpO1xuICAgICBNcGFnZS5jbGlja1NpZ25PdXQoZHJpdmVyKTtcbiAgICAgfSovXG5cbiAgICAvLyBAQWZ0ZXJcbiAgICAvLyBwdWJsaWMgdm9pZCB0ZWFyRG93bihTY2VuYXJpbyBzY2VuYXJpbykge1xuICAgIC8vICAgICBpZiAoc2NlbmFyaW8uaXNGYWlsZWQoKSkge1xuICAgIC8vICAgICAgICAgYnl0ZVtdIHNjcmVlbnNob3RCeXRlcyA9ICgoVGFrZXNTY3JlZW5zaG90KSBkcml2ZXIpLmdldFNjcmVlbnNob3RBcyhPdXRwdXRUeXBlLkJZVEVTKTtcbiAgICAvLyAgICAgICAgIHNjZW5hcmlvLmVtYmVkKHNjcmVlbnNob3RCeXRlcywgXCJpbWFnZS9wbmdcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cblxufSk7Il19