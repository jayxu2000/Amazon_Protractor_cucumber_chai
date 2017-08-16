const homePage = require('../pages/homePage');
const {defineSupportCode} = require("cucumber");

defineSupportCode(function ({When, Then, Given, setDefaultTimeout, After}) {

    setDefaultTimeout(60 * 1000);

    Then(/^The label "(.*?)" is displayed for the drop-down$/, function (text) {
        return expect(homePage.getLocationDropdownTitleText()).to.eventually.equal(text);
    });

    Given(/^I open home page$/, function () {
        return homePage.to();
    });

    Given(/^In-transit is expanded$/, function () {
        return homePage.clickInTransit();
    });

    Given(/^"(.*?)" location is displayed$/, function (location) {
        return expect(homePage.isLocationDisplayed(location)).to.eventually.be.true;
    });

    Then(/^"(.*?)" is default selected value$/, function (location) {
        return expect(homePage.getLocationItemText()).to.eventually.equal(location);
    });

    When(/^I select "(.*?)" in combobox$/, function (location) {
        homePage.selectLocationInDropdown(location);
    });

    Then(/^"(.*?)" location is selected value$/, function (location) {
        return expect(homePage.getLocationItemText()).to.eventually.equal(location);
    });

    Then(/^Employee displays name in format lastname, firstname, like "(.*?)" , "(.*?)"$/, function (lastname, firstname) {
        return expect(homePage.isEmployeePresent(lastname, firstname)).to.eventually.be.true;
    });

    Then(/^The seat "(.*?)" corresponds to an employee's assigned project name "(.*?)" is correct$/, function (seatNumber, projectName) {
        return expect(homePage.getProjNameBaseOnSeatNr(seatNumber)).to.eventually.equal(projectName);
    });

    Then(/^The seat "(.*?)" corresponds to an employee's assigned project color "(.*?)" is correct$/, function (seatNumber, projectColor) {
        return expect(homePage.getSeatColorOnSeatNr(seatNumber)).to.eventually.include(projectColor);
    });

    Then(/^The seat number "(.*?)" of the Employee "(.*?)" , "(.*?)" is correct$/, function (seatNumber, lastName, firstName) {
        return expect(homePage.getSeatNrBaseOnEmployeeName(lastName, firstName)).to.eventually.include(seatNumber);
    });

    Then(/^Desk number "(.*?)" need to be displayed on empty desk$/, function (seatNumber) {
        let classAttributeValue = "empty";
        return expect(homePage.verifySpecificSeatNrIsEmptySeat(seatNumber)).to.eventually.include(classAttributeValue);
    });

    Then(/^Empty desks with desk number "(.*?)" is displayed with blank square$/, function (seatNumber) {
        let StyleAttributeValue = "svg";
        return expect(homePage.verifySpecificSeatNrDisplayBlankSquare(seatNumber)).to.eventually.include(StyleAttributeValue);
    });

    Then(/^the In Transit bar is collapsed by default$/, function () {
        return expect(homePage.verifyInTransitBarCollapsed()).to.eventually.include("100px");
    });

    When(/^click on the In Transit bar$/, function () {
        homePage.inTransitBar.click();
    });

    Then(/^the In Transit bar is not collapsed$/, function () {
        return expect(homePage.verifyInTransitBarCollapsed()).to.eventually.include("210px");
    });


    //=================================================================================================================================

    When(/^$/, function () {

    });

    Given(/^I am a guest user$/, function () {
       this.cartCount = homePage.getCartCountText();
    });

    When(/^I search for an offer "(.*?)"$/, function (searchCriteria) {
        homePage.inputSearch(searchCriteria);
        /*    	Mpage.chooseOfferItem();
         DSpage.inputSearch(searchCriteria);*/
    });

    @When("^I add select purchase$")
    public void i_add_select_purchase() {
        Ppage.clickAddToCartButton();
        /*    	expectedOfferTitle = Opage.getOfferTitle();
         Opage.clickButItNowButton();*/
    }

    @Then("^I should see the offer added to my cart$")
    public void i_should_see_the_offer_added_to_my_cart() {
        assertEquals(Integer.parseInt(cartCount)+1, Integer.parseInt(Hpage.getCartCountText()));
//    	Mpage.clickSignOut(driver);
    }

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