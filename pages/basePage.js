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
const protractor_1 = require("protractor");
class BasePage {
    constructor() {
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
        this.at = () => {
            return protractor_1.browser.wait(this.pageLoaded, this.timeout.xl);
        };
        /**
         * navigate to a page via it's `url` var
         * and verify/wait via at()
         *
         * @requires page have both `url` and `pageLoaded` properties
         */
        this.to = () => {
            protractor_1.browser.get(this.url, this.timeout.xl);
            // return this.at();
        };
        /**
         * Wrappers for expected conditions
         */
        this.isVisible = locator => {
            return protractor_1.ExpectedConditions.visibilityOf(locator);
        };
        this.isNotVisible = locator => {
            return protractor_1.ExpectedConditions.invisibilityOf(locator);
        };
        this.inDom = (locator) => __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.ExpectedConditions.presenceOf(locator);
        });
        this.notInDom = locator => {
            return protractor_1.ExpectedConditions.stalenessOf(locator);
        };
        this.isClickable = locator => {
            return protractor_1.ExpectedConditions.elementToBeClickable(locator);
        };
        this.hasText = (locator, text) => {
            return protractor_1.ExpectedConditions.textToBePresentInElement(locator, text);
        };
        this.and = arrayOfFunctions => {
            return protractor_1.ExpectedConditions.and(arrayOfFunctions);
        };
        this.titleIs = title => {
            return protractor_1.ExpectedConditions.titleIs(title);
        };
        this.waitForJs = () => {
            return protractor_1.browser.wait(function () {
                return protractor_1.browser.executeScript('return document.readyState==="complete"');
            }, this.timeout.xl);
        };
        this.doubleClick = element => {
            protractor_1.browser.actions().doubleClick(element).perform();
        };
        this.isElementPresent = element => {
            let present = protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(element), 5 * 1000, 'Element is not present').then(() => {
                return true;
            }).catch(err => {
                return false;
            });
            return present;
        };
        this.mouseOver = (locator) => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(500);
            yield protractor_1.browser.actions().mouseMove(locator).perform();
            yield protractor_1.browser.sleep(500);
        });
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=basePage.js.map