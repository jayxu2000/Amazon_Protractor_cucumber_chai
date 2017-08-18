"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage = /** @class */ (function () {
    function BasePage() {
        var _this = this;
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
        /**
         * wait and verify that a page is loaded
         * @returns {promise}
         * @requires a page to include `pageLoaded` method
         */
        this.at = function () {
            return protractor_1.browser.wait(_this.pageLoaded, _this.timeout.xl);
        };
        /**
         * navigate to a page via it's `url` var
         * and verify/wait via at()
         *
         * @requires page have both `url` and `pageLoaded` properties
         */
        this.to = function () {
            protractor_1.browser.get(_this.url, _this.timeout.xl);
            return _this.at();
        };
        /**
         * Wrappers for expected conditions
         */
        this.isVisible = function (locator) {
            return protractor_1.ExpectedConditions.visibilityOf(locator);
        };
        this.isNotVisible = function (locator) {
            return protractor_1.ExpectedConditions.invisibilityOf(locator);
        };
        this.inDom = function (locator) {
            console.log("loaded " + protractor_1.ExpectedConditions.presenceOf(locator));
            return protractor_1.ExpectedConditions.presenceOf(locator);
        };
        this.notInDom = function (locator) {
            return protractor_1.ExpectedConditions.stalenessOf(locator);
        };
        this.isClickable = function (locator) {
            return protractor_1.ExpectedConditions.elementToBeClickable(locator);
        };
        this.hasText = function (locator, text) {
            return protractor_1.ExpectedConditions.textToBePresentInElement(locator, text);
        };
        this.and = function (arrayOfFunctions) {
            return protractor_1.ExpectedConditions.and(arrayOfFunctions);
        };
        this.titleIs = function (title) {
            return protractor_1.ExpectedConditions.titleIs(title);
        };
        this.waitForJs = function () {
            return protractor_1.browser.wait(function () {
                return protractor_1.browser.executeScript('return document.readyState==="complete"');
            }, _this.timeout.xl);
        };
        this.doubleClick = function (element) {
            protractor_1.browser.actions().doubleClick(element).perform();
        };
        this.isElementPresent = function (element) {
            var present = protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(element), 5 * 1000, 'Element is not present').then(function () {
                return true;
            }).catch(function (err) {
                return false;
            });
            return present;
        };
    }
    return BasePage;
}());
exports.BasePage = BasePage;
