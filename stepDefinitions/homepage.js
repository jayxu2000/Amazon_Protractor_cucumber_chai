"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var homePage_1 = require("../pages/homePage");
var cucumber_1 = require("cucumber");
// const {defineSupportCode} = require("cucumber");
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
cucumber_1.defineSupportCode(function (_a) {
    var When = _a.When, Then = _a.Then, Given = _a.Given, setDefaultTimeout = _a.setDefaultTimeout, After = _a.After;
    var homePage = new homePage_1.HomePage();
    setDefaultTimeout(60 * 1000);
    Given(/^I open home page$/, function () {
        return homePage.to();
    });
    When(/^$/, function () {
    });
    Given(/^The shopping cart has the count number "(.*?)"$/, function (count) {
        expect(homePage.getCartCountText()).to.eventually.equal(count);
    });
    When(/^I search for a product "(.*?)"$/, function (searchCriteria) {
        homePage.inputSearch(searchCriteria);
        /*    	Mpage.chooseOfferItem();
         DSpage.inputSearch(searchCriteria);*/
    });
    When(/^I select the first item in list$/, function () {
        homePage;
    });
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
