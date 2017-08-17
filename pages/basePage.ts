import {browser, ExpectedConditions as EC} from "protractor";

class BasePage {

    /**
     * wrap this.timeout. (ms) in t-shirt sizes
     */
    timeout = {
        'xs': 420,
        's': 1000,
        'm': 2000,
        'l': 5000,
        'xl': 9000,
        'xxl': 15000
    };

    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */
    at = ()=> {
        return browser.wait(this.pageLoaded(), this.timeout.xl);
    };

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via at()
     *
     * @requires page have both `url` and `pageLoaded` properties
     */
    to = () =>{
        browser.get(this.url, this.timeout.xl);
        return this.at();
    };

    /**
     * Wrappers for expected conditions
     */

    isVisible = function (locator) {
        return EC.visibilityOf(locator);
    };

    isNotVisible = function (locator) {
        return EC.invisibilityOf(locator);
    };

    inDom = function (locator) {
        console.log("loaded " + EC.presenceOf(locator))
        return EC.presenceOf(locator);
    };

    notInDom = function (locator) {
        return EC.stalenessOf(locator);
    };

    isClickable = function (locator) {
        return EC.elementToBeClickable(locator);
    };

    hasText = function (locator, text) {
        return EC.textToBePresentInElement(locator, text);
    };

    and = function (arrayOfFunctions) {
        return EC.and(arrayOfFunctions);
    };

    titleIs = function (title) {
        return EC.titleIs(title);
    };

    waitForJs = function () {
        return browser.wait(function () {
            return browser.executeScript('return document.readyState==="complete"');
        }, this.timeout.xl);
    };

    doubleClick = function (element) {
        browser.actions().doubleClick(element).perform();
    }

    isElementPresent = function (element) {
        let present = browser.wait(EC.visibilityOf(element), 5 * 1000, 'Element is not present').then(function () {
            return true;
        }).catch(function (err) {
            return false;
        });
        return present;
    };
}

export = BasePage;
