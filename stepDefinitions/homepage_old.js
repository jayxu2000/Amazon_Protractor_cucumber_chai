import {browser} from 'protractor';
import {defineSupportCode} from 'cucumber';
import {HomePage} from '../pages/homePage';
// const homePage = require('../pages/homePage');
// const {defineSupportCode} = require("cucumber");

defineSupportCode(function ({When, Then, Given, setDefaultTimeout, After}) {

    let homePage: HomePage = new HomePage();

    setDefaultTimeout(60 * 1000);

    Given(/^I open home page$/, function () {
        return homePage.to();
    });

    Given(/^"(.*?)" location is displayed$/, function (location) {
        return expect(homePage.isLocationDisplayed(location)).to.eventually.be.true;
    });


    //=================================================================================================================================

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