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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQTZEO0FBSTdEO0lBQUE7UUFJSTs7V0FFRztRQUNILFlBQU8sR0FBRztZQUNOLElBQUksRUFBRSxHQUFHO1lBQ1QsR0FBRyxFQUFFLElBQUk7WUFDVCxHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxJQUFJO1lBQ1QsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsS0FBSztTQUNmLENBQUM7UUFFRjs7OztXQUlHO1FBRUgsT0FBRSxHQUFHO1lBQ0QsTUFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUM7UUFFRjs7Ozs7V0FLRztRQUNILE9BQUUsR0FBRztZQUNELG9CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QyxvQkFBb0I7UUFDeEIsQ0FBQyxDQUFDO1FBRUY7O1dBRUc7UUFFSCxjQUFTLEdBQUcsT0FBTztZQUNmLE1BQU0sQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7UUFFRixpQkFBWSxHQUFHLE9BQU87WUFDbEIsTUFBTSxDQUFDLCtCQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQUVGLFVBQUssR0FBRyxDQUFPLE9BQU87WUFDbEIsTUFBTSxDQUFDLE1BQU0sK0JBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFBLENBQUM7UUFFRixhQUFRLEdBQUcsT0FBTztZQUNkLE1BQU0sQ0FBQywrQkFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHLE9BQU87WUFDakIsTUFBTSxDQUFDLCtCQUFFLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO1FBRUYsWUFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUk7WUFDcEIsTUFBTSxDQUFDLCtCQUFFLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQztRQUVGLFFBQUcsR0FBRyxnQkFBZ0I7WUFDbEIsTUFBTSxDQUFDLCtCQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO1FBRUYsWUFBTyxHQUFHLEtBQUs7WUFDWCxNQUFNLENBQUMsK0JBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1IsTUFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNoQixNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUM1RSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHLE9BQU87WUFDakIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO1FBRUYscUJBQWdCLEdBQUcsT0FBTztZQUN0QixJQUFJLE9BQU8sR0FBRyxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxRixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHO2dCQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRyxDQUFPLE9BQU87WUFDdEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFqR0QsNEJBaUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHticm93c2VyLCBFeHBlY3RlZENvbmRpdGlvbnMgYXMgRUN9IGZyb20gXCJwcm90cmFjdG9yXCI7XHJcbmltcG9ydCB7cHJvbWlzZX0gZnJvbSBcInNlbGVuaXVtLXdlYmRyaXZlclwiO1xyXG5pbXBvcnQge2FzeW5jfSBmcm9tIFwicVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQYWdlIHtcclxuXHJcbiAgICBhYnN0cmFjdCB1cmw6IHN0cmluZztcclxuICAgIGFic3RyYWN0IHBhZ2VMb2FkZWQ6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogd3JhcCB0aGlzLnRpbWVvdXQuIChtcykgaW4gdC1zaGlydCBzaXplc1xyXG4gICAgICovXHJcbiAgICB0aW1lb3V0ID0ge1xyXG4gICAgICAgICd4cyc6IDQyMCxcclxuICAgICAgICAncyc6IDEwMDAsXHJcbiAgICAgICAgJ20nOiAyMDAwLFxyXG4gICAgICAgICdsJzogNTAwMCxcclxuICAgICAgICAneGwnOiA5MDAwLFxyXG4gICAgICAgICd4eGwnOiAxNTAwMFxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHdhaXQgYW5kIHZlcmlmeSB0aGF0IGEgcGFnZSBpcyBsb2FkZWRcclxuICAgICAqIEByZXR1cm5zIHtwcm9taXNlfVxyXG4gICAgICogQHJlcXVpcmVzIGEgcGFnZSB0byBpbmNsdWRlIGBwYWdlTG9hZGVkYCBtZXRob2RcclxuICAgICAqL1xyXG5cclxuICAgIGF0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLndhaXQodGhpcy5wYWdlTG9hZGVkLCB0aGlzLnRpbWVvdXQueGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIG5hdmlnYXRlIHRvIGEgcGFnZSB2aWEgaXQncyBgdXJsYCB2YXJcclxuICAgICAqIGFuZCB2ZXJpZnkvd2FpdCB2aWEgYXQoKVxyXG4gICAgICpcclxuICAgICAqIEByZXF1aXJlcyBwYWdlIGhhdmUgYm90aCBgdXJsYCBhbmQgYHBhZ2VMb2FkZWRgIHByb3BlcnRpZXNcclxuICAgICAqL1xyXG4gICAgdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgYnJvd3Nlci5nZXQodGhpcy51cmwsIHRoaXMudGltZW91dC54bCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuYXQoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwcGVycyBmb3IgZXhwZWN0ZWQgY29uZGl0aW9uc1xyXG4gICAgICovXHJcblxyXG4gICAgaXNWaXNpYmxlID0gbG9jYXRvciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEVDLnZpc2liaWxpdHlPZihsb2NhdG9yKTtcclxuICAgIH07XHJcblxyXG4gICAgaXNOb3RWaXNpYmxlID0gbG9jYXRvciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEVDLmludmlzaWJpbGl0eU9mKGxvY2F0b3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbkRvbSA9IGFzeW5jIChsb2NhdG9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IEVDLnByZXNlbmNlT2YobG9jYXRvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIG5vdEluRG9tID0gbG9jYXRvciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEVDLnN0YWxlbmVzc09mKGxvY2F0b3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpc0NsaWNrYWJsZSA9IGxvY2F0b3IgPT4ge1xyXG4gICAgICAgIHJldHVybiBFQy5lbGVtZW50VG9CZUNsaWNrYWJsZShsb2NhdG9yKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFzVGV4dCA9IChsb2NhdG9yLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEVDLnRleHRUb0JlUHJlc2VudEluRWxlbWVudChsb2NhdG9yLCB0ZXh0KTtcclxuICAgIH07XHJcblxyXG4gICAgYW5kID0gYXJyYXlPZkZ1bmN0aW9ucyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEVDLmFuZChhcnJheU9mRnVuY3Rpb25zKTtcclxuICAgIH07XHJcblxyXG4gICAgdGl0bGVJcyA9IHRpdGxlID0+IHtcclxuICAgICAgICByZXR1cm4gRUMudGl0bGVJcyh0aXRsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdhaXRGb3JKcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci53YWl0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyb3dzZXIuZXhlY3V0ZVNjcmlwdCgncmV0dXJuIGRvY3VtZW50LnJlYWR5U3RhdGU9PT1cImNvbXBsZXRlXCInKTtcclxuICAgICAgICB9LCB0aGlzLnRpbWVvdXQueGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb3VibGVDbGljayA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGJyb3dzZXIuYWN0aW9ucygpLmRvdWJsZUNsaWNrKGVsZW1lbnQpLnBlcmZvcm0oKTtcclxuICAgIH07XHJcblxyXG4gICAgaXNFbGVtZW50UHJlc2VudCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGxldCBwcmVzZW50ID0gYnJvd3Nlci53YWl0KEVDLnZpc2liaWxpdHlPZihlbGVtZW50KSwgNSAqIDEwMDAsICdFbGVtZW50IGlzIG5vdCBwcmVzZW50JykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJlc2VudDtcclxuICAgIH07XHJcblxyXG4gICAgbW91c2VPdmVyID0gYXN5bmMgKGxvY2F0b3IpID0+IHtcclxuICAgICAgICBhd2FpdCBicm93c2VyLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgYXdhaXQgYnJvd3Nlci5hY3Rpb25zKCkubW91c2VNb3ZlKGxvY2F0b3IpLnBlcmZvcm0oKTtcclxuICAgICAgICBhd2FpdCBicm93c2VyLnNsZWVwKDUwMCk7XHJcbiAgICB9XHJcbn0iXX0=