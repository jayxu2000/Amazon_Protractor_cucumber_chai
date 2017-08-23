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
            yield protractor_1.browser.actions().mouseMove(locator).perform();
        });
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQTZEO0FBSTdEO0lBQUE7UUFJSTs7V0FFRztRQUNILFlBQU8sR0FBRztZQUNOLElBQUksRUFBRSxHQUFHO1lBQ1QsR0FBRyxFQUFFLElBQUk7WUFDVCxHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxJQUFJO1lBQ1QsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsS0FBSztTQUNmLENBQUM7UUFFRjs7OztXQUlHO1FBRUgsT0FBRSxHQUFHO1lBQ0QsTUFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUM7UUFFRjs7Ozs7V0FLRztRQUNILE9BQUUsR0FBRztZQUNELG9CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QyxvQkFBb0I7UUFDeEIsQ0FBQyxDQUFDO1FBRUY7O1dBRUc7UUFFSCxjQUFTLEdBQUcsT0FBTztZQUNmLE1BQU0sQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7UUFFRixpQkFBWSxHQUFHLE9BQU87WUFDbEIsTUFBTSxDQUFDLCtCQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQUVGLFVBQUssR0FBRyxDQUFPLE9BQU87WUFDbEIsTUFBTSxDQUFDLE1BQU0sK0JBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFBLENBQUM7UUFFRixhQUFRLEdBQUcsT0FBTztZQUNkLE1BQU0sQ0FBQywrQkFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHLE9BQU87WUFDakIsTUFBTSxDQUFDLCtCQUFFLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO1FBRUYsWUFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUk7WUFDcEIsTUFBTSxDQUFDLCtCQUFFLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQztRQUVGLFFBQUcsR0FBRyxnQkFBZ0I7WUFDbEIsTUFBTSxDQUFDLCtCQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO1FBRUYsWUFBTyxHQUFHLEtBQUs7WUFDWCxNQUFNLENBQUMsK0JBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1IsTUFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNoQixNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUM1RSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHLE9BQU87WUFDakIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO1FBRUYscUJBQWdCLEdBQUcsT0FBTztZQUN0QixJQUFJLE9BQU8sR0FBRyxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxRixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxHQUFHO2dCQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRyxDQUFNLE9BQU87WUFDckIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6RCxDQUFDLENBQUEsQ0FBQTtJQUNMLENBQUM7Q0FBQTtBQS9GRCw0QkErRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jyb3dzZXIsIEV4cGVjdGVkQ29uZGl0aW9ucyBhcyBFQ30gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7cHJvbWlzZX0gZnJvbSBcInNlbGVuaXVtLXdlYmRyaXZlclwiO1xuaW1wb3J0IHthc3luY30gZnJvbSBcInFcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQYWdlIHtcblxuICAgIGFic3RyYWN0IHVybDogc3RyaW5nO1xuICAgIGFic3RyYWN0IHBhZ2VMb2FkZWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiB3cmFwIHRoaXMudGltZW91dC4gKG1zKSBpbiB0LXNoaXJ0IHNpemVzXG4gICAgICovXG4gICAgdGltZW91dCA9IHtcbiAgICAgICAgJ3hzJzogNDIwLFxuICAgICAgICAncyc6IDEwMDAsXG4gICAgICAgICdtJzogMjAwMCxcbiAgICAgICAgJ2wnOiA1MDAwLFxuICAgICAgICAneGwnOiA5MDAwLFxuICAgICAgICAneHhsJzogMTUwMDBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogd2FpdCBhbmQgdmVyaWZ5IHRoYXQgYSBwYWdlIGlzIGxvYWRlZFxuICAgICAqIEByZXR1cm5zIHtwcm9taXNlfVxuICAgICAqIEByZXF1aXJlcyBhIHBhZ2UgdG8gaW5jbHVkZSBgcGFnZUxvYWRlZGAgbWV0aG9kXG4gICAgICovXG5cbiAgICBhdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIud2FpdCh0aGlzLnBhZ2VMb2FkZWQsIHRoaXMudGltZW91dC54bCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIG5hdmlnYXRlIHRvIGEgcGFnZSB2aWEgaXQncyBgdXJsYCB2YXJcbiAgICAgKiBhbmQgdmVyaWZ5L3dhaXQgdmlhIGF0KClcbiAgICAgKlxuICAgICAqIEByZXF1aXJlcyBwYWdlIGhhdmUgYm90aCBgdXJsYCBhbmQgYHBhZ2VMb2FkZWRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICB0byA9ICgpID0+e1xuICAgICAgICBicm93c2VyLmdldCh0aGlzLnVybCwgdGhpcy50aW1lb3V0LnhsKTtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuYXQoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JhcHBlcnMgZm9yIGV4cGVjdGVkIGNvbmRpdGlvbnNcbiAgICAgKi9cblxuICAgIGlzVmlzaWJsZSA9IGxvY2F0b3IgPT4ge1xuICAgICAgICByZXR1cm4gRUMudmlzaWJpbGl0eU9mKGxvY2F0b3IpO1xuICAgIH07XG5cbiAgICBpc05vdFZpc2libGUgPSBsb2NhdG9yID0+IHtcbiAgICAgICAgcmV0dXJuIEVDLmludmlzaWJpbGl0eU9mKGxvY2F0b3IpO1xuICAgIH07XG5cbiAgICBpbkRvbSA9IGFzeW5jIChsb2NhdG9yKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBFQy5wcmVzZW5jZU9mKGxvY2F0b3IpO1xuICAgIH07XG5cbiAgICBub3RJbkRvbSA9IGxvY2F0b3IgPT4ge1xuICAgICAgICByZXR1cm4gRUMuc3RhbGVuZXNzT2YobG9jYXRvcik7XG4gICAgfTtcblxuICAgIGlzQ2xpY2thYmxlID0gbG9jYXRvciA9PiB7XG4gICAgICAgIHJldHVybiBFQy5lbGVtZW50VG9CZUNsaWNrYWJsZShsb2NhdG9yKTtcbiAgICB9O1xuXG4gICAgaGFzVGV4dCA9IChsb2NhdG9yLCB0ZXh0KSA9PiB7XG4gICAgICAgIHJldHVybiBFQy50ZXh0VG9CZVByZXNlbnRJbkVsZW1lbnQobG9jYXRvciwgdGV4dCk7XG4gICAgfTtcblxuICAgIGFuZCA9IGFycmF5T2ZGdW5jdGlvbnMgPT4ge1xuICAgICAgICByZXR1cm4gRUMuYW5kKGFycmF5T2ZGdW5jdGlvbnMpO1xuICAgIH07XG5cbiAgICB0aXRsZUlzID0gdGl0bGUgPT4ge1xuICAgICAgICByZXR1cm4gRUMudGl0bGVJcyh0aXRsZSk7XG4gICAgfTtcblxuICAgIHdhaXRGb3JKcyA9ICgpPT4ge1xuICAgICAgICByZXR1cm4gYnJvd3Nlci53YWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBicm93c2VyLmV4ZWN1dGVTY3JpcHQoJ3JldHVybiBkb2N1bWVudC5yZWFkeVN0YXRlPT09XCJjb21wbGV0ZVwiJyk7XG4gICAgICAgIH0sIHRoaXMudGltZW91dC54bCk7XG4gICAgfTtcblxuICAgIGRvdWJsZUNsaWNrID0gZWxlbWVudCA9PiB7XG4gICAgICAgIGJyb3dzZXIuYWN0aW9ucygpLmRvdWJsZUNsaWNrKGVsZW1lbnQpLnBlcmZvcm0oKTtcbiAgICB9O1xuXG4gICAgaXNFbGVtZW50UHJlc2VudCA9IGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgcHJlc2VudCA9IGJyb3dzZXIud2FpdChFQy52aXNpYmlsaXR5T2YoZWxlbWVudCksIDUgKiAxMDAwLCAnRWxlbWVudCBpcyBub3QgcHJlc2VudCcpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByZXNlbnQ7XG4gICAgfTtcblxuICAgIG1vdXNlT3ZlciA9IGFzeW5jKGxvY2F0b3IpPT57XG4gICAgICAgIGF3YWl0IGJyb3dzZXIuYWN0aW9ucygpLm1vdXNlTW92ZShsb2NhdG9yKS5wZXJmb3JtKCk7XG4gICAgfVxufSJdfQ==