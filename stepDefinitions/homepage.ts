import {browser} from 'protractor';
import {HomePage} from '../pages/homePage';
import {defineSupportCode} from 'cucumber';
// const {defineSupportCode} = require("cucumber");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(({When, Then, Given, setDefaultTimeout, After}) => {

    let homePage: HomePage = new HomePage();

    setDefaultTimeout(60 * 1000);

    Given(/^I open home page$/, () => {
        return homePage.to();
    });

    When(/^$/, function () {

    });

    Given(/^The shopping cart has the count number "(.*?)"$/, (count) => {
        expect(homePage.getCartCountText()).to.eventually.equal(count);
    });

    When(/^I search for a product "(.*?)"$/, (searchCriteria:string) => {
        homePage.inputSearch(searchCriteria);
        /*    	Mpage.chooseOfferItem();
         DSpage.inputSearch(searchCriteria);*/
    });

    When(/^I select the first item in list$/, () => {
        homePage
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