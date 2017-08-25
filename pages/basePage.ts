import {browser, ExpectedConditions as EC} from "protractor";
import {promise} from "selenium-webdriver";
import {async} from "q";

export abstract class BasePage {

    abstract url: string;
    abstract pageLoaded: any;
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

    at = () => {
        return browser.wait(this.pageLoaded, this.timeout.xl);
    };

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via at()
     *
     * @requires page have both `url` and `pageLoaded` properties
     */
    to = () => {
        browser.get(this.url, this.timeout.xl);
        // return this.at();
    };

    /**
     * Wrappers for expected conditions
     */

    isVisible = locator => {
        return EC.visibilityOf(locator);
    };

    isNotVisible = locator => {
        return EC.invisibilityOf(locator);
    };

    inDom = async (locator) => {
        return await EC.presenceOf(locator);
    };

    notInDom = locator => {
        return EC.stalenessOf(locator);
    };

    isClickable = locator => {
        return EC.elementToBeClickable(locator);
    };

    hasText = (locator, text) => {
        return EC.textToBePresentInElement(locator, text);
    };

    and = arrayOfFunctions => {
        return EC.and(arrayOfFunctions);
    };

    titleIs = title => {
        return EC.titleIs(title);
    };

    waitForJs = () => {
        return browser.wait(function () {
            return browser.executeScript('return document.readyState==="complete"');
        }, this.timeout.xl);
    };

    doubleClick = element => {
        browser.actions().doubleClick(element).perform();
    };

    isElementPresent = element => {
        let present = browser.wait(EC.visibilityOf(element), 5 * 1000, 'Element is not present').then(() => {
            return true;
        }).catch(err => {
            return false;
        });
        return present;
    };

    mouseOver = async (locator) => {
        await browser.sleep(500);
        await browser.actions().mouseMove(locator).perform();
        await browser.sleep(500);
    }
}