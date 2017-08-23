import {HomePage} from '../pages/homePage';
import {defineSupportCode} from 'cucumber';//ES6 syntax which will use commonJS
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {async} from "q";
chai.use(chaiAsPromised);
let expect = chai.expect;

defineSupportCode(({When, Then, Given, setDefaultTimeout, Before}) => {

    let homePage: HomePage = new HomePage();

    setDefaultTimeout(60 * 1000);

    ///^I open homepage$/,
    Before( async() => {
        await homePage.to();
    });

    //set "target": "ES2016" in tsconfig.json so that we can use async/await
    Given(/^The shopping cart has the count number "(.*?)"$/, async (count) => {
        await expect(homePage.getCartCountText()).to.eventually.equal(count);
    });

    When(/^I search for a product "(.*?)"$/, async (searchCriteria:string) => {
        await homePage.inputSearch(searchCriteria);
        /*    	Mpage.chooseOfferItem();
         DSpage.inputSearch(searchCriteria);*/
    });

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