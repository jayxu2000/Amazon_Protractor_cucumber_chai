let BasePage = function () {
    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */
    this.at = function () {
        return browser.wait(this.pageLoaded(), this.timeout.xl);
    };

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via at()
     *
     * @requires page have both `url` and `pageLoaded` properties
     */
    this.to = function () {
        browser.get(this.url, this.timeout.xl);
        return this.at();
    };

    /**
     * Wrappers for expected conditions
     */
    const EC = protractor.ExpectedConditions;

    this.isVisible = function (locator) {
        return EC.visibilityOf(locator);
    };

    this.isNotVisible = function (locator) {
        return EC.invisibilityOf(locator);
    };

    this.inDom = function (locator) {
        console.log("loaded " + EC.presenceOf(locator))
        return EC.presenceOf(locator);
    };

    this.notInDom = function (locator) {
        return EC.stalenessOf(locator);
    };

    this.isClickable = function (locator) {
        return EC.elementToBeClickable(locator);
    };

    this.hasText = function (locator, text) {
        return EC.textToBePresentInElement(locator, text);
    };

    this.and = function (arrayOfFunctions) {
        return EC.and(arrayOfFunctions);
    };

    this.titleIs = function (title) {
        return EC.titleIs(title);
    };

    this.waitForJs = function () {
        return browser.wait(function () {
            return browser.executeScript('return document.readyState==="complete"');
        }, this.timeout.xl);
    };

    /**
     * wrap this.timeout. (ms) in t-shirt sizes
     */
    this.timeout = {
        'xs': 420,
        's': 1000,
        'm': 2000,
        'l': 5000,
        'xl': 9000,
        'xxl': 15000
    };

    this.doubleClick = function (element) {
        browser.actions().doubleClick(element).perform();
    }

    this.isElementPresent = function (element) {
        let EC = protractor.ExpectedConditions;
        let present = browser.wait(EC.visibilityOf(element), 5 * 1000, 'Element is not present').then(function () {
            return true;
        }).catch(function (err) {
            return false;
        });
        return present;
    };

};
module.exports = new BasePage();
