"use strict";
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
            return this.at();
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
        this.inDom = locator => {
            console.log(`loaded ${protractor_1.ExpectedConditions.presenceOf(locator)}`);
            return protractor_1.ExpectedConditions.presenceOf(locator);
        };
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
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2RDtBQUc3RDtJQUFBO1FBSUk7O1dBRUc7UUFDSCxZQUFPLEdBQUc7WUFDTixJQUFJLEVBQUUsR0FBRztZQUNULEdBQUcsRUFBRSxJQUFJO1lBQ1QsR0FBRyxFQUFFLElBQUk7WUFDVCxHQUFHLEVBQUUsSUFBSTtZQUNULElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBRUY7Ozs7V0FJRztRQUVILE9BQUUsR0FBRztZQUNELE1BQU0sQ0FBQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDO1FBRUY7Ozs7O1dBS0c7UUFDSCxPQUFFLEdBQUc7WUFDRCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRjs7V0FFRztRQUVILGNBQVMsR0FBRyxPQUFPO1lBQ2YsTUFBTSxDQUFDLCtCQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztRQUVGLGlCQUFZLEdBQUcsT0FBTztZQUNsQixNQUFNLENBQUMsK0JBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO1FBRUYsVUFBSyxHQUFHLE9BQU87WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsK0JBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQy9DLE1BQU0sQ0FBQywrQkFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFFRixhQUFRLEdBQUcsT0FBTztZQUNkLE1BQU0sQ0FBQywrQkFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHLE9BQU87WUFDakIsTUFBTSxDQUFDLCtCQUFFLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO1FBRUYsWUFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUk7WUFDcEIsTUFBTSxDQUFDLCtCQUFFLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQztRQUVGLFFBQUcsR0FBRyxnQkFBZ0I7WUFDbEIsTUFBTSxDQUFDLCtCQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO1FBRUYsWUFBTyxHQUFHLEtBQUs7WUFDWCxNQUFNLENBQUMsK0JBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1IsTUFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNoQixNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUM1RSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHLE9BQU87WUFDakIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO1FBRUYscUJBQWdCLEdBQUcsT0FBTztZQUN0QixJQUFJLE9BQU8sR0FBRyxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxRixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxHQUFHO2dCQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FBQTtBQTVGRCw0QkE0RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jyb3dzZXIsIEV4cGVjdGVkQ29uZGl0aW9ucyBhcyBFQ30gZnJvbSBcInByb3RyYWN0b3JcIjtcclxuaW1wb3J0IHtwcm9taXNlfSBmcm9tIFwic2VsZW5pdW0td2ViZHJpdmVyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVBhZ2Uge1xyXG5cclxuICAgIGFic3RyYWN0IHVybDogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgcGFnZUxvYWRlZDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiB3cmFwIHRoaXMudGltZW91dC4gKG1zKSBpbiB0LXNoaXJ0IHNpemVzXHJcbiAgICAgKi9cclxuICAgIHRpbWVvdXQgPSB7XHJcbiAgICAgICAgJ3hzJzogNDIwLFxyXG4gICAgICAgICdzJzogMTAwMCxcclxuICAgICAgICAnbSc6IDIwMDAsXHJcbiAgICAgICAgJ2wnOiA1MDAwLFxyXG4gICAgICAgICd4bCc6IDkwMDAsXHJcbiAgICAgICAgJ3h4bCc6IDE1MDAwXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogd2FpdCBhbmQgdmVyaWZ5IHRoYXQgYSBwYWdlIGlzIGxvYWRlZFxyXG4gICAgICogQHJldHVybnMge3Byb21pc2V9XHJcbiAgICAgKiBAcmVxdWlyZXMgYSBwYWdlIHRvIGluY2x1ZGUgYHBhZ2VMb2FkZWRgIG1ldGhvZFxyXG4gICAgICovXHJcblxyXG4gICAgYXQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIud2FpdCh0aGlzLnBhZ2VMb2FkZWQsIHRoaXMudGltZW91dC54bCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogbmF2aWdhdGUgdG8gYSBwYWdlIHZpYSBpdCdzIGB1cmxgIHZhclxyXG4gICAgICogYW5kIHZlcmlmeS93YWl0IHZpYSBhdCgpXHJcbiAgICAgKlxyXG4gICAgICogQHJlcXVpcmVzIHBhZ2UgaGF2ZSBib3RoIGB1cmxgIGFuZCBgcGFnZUxvYWRlZGAgcHJvcGVydGllc1xyXG4gICAgICovXHJcbiAgICB0byA9ICgpID0+e1xyXG4gICAgICAgIGJyb3dzZXIuZ2V0KHRoaXMudXJsLCB0aGlzLnRpbWVvdXQueGwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JhcHBlcnMgZm9yIGV4cGVjdGVkIGNvbmRpdGlvbnNcclxuICAgICAqL1xyXG5cclxuICAgIGlzVmlzaWJsZSA9IGxvY2F0b3IgPT4ge1xyXG4gICAgICAgIHJldHVybiBFQy52aXNpYmlsaXR5T2YobG9jYXRvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGlzTm90VmlzaWJsZSA9IGxvY2F0b3IgPT4ge1xyXG4gICAgICAgIHJldHVybiBFQy5pbnZpc2liaWxpdHlPZihsb2NhdG9yKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5Eb20gPSBsb2NhdG9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgbG9hZGVkICR7RUMucHJlc2VuY2VPZihsb2NhdG9yKX1gKVxyXG4gICAgICAgIHJldHVybiBFQy5wcmVzZW5jZU9mKGxvY2F0b3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBub3RJbkRvbSA9IGxvY2F0b3IgPT4ge1xyXG4gICAgICAgIHJldHVybiBFQy5zdGFsZW5lc3NPZihsb2NhdG9yKTtcclxuICAgIH07XHJcblxyXG4gICAgaXNDbGlja2FibGUgPSBsb2NhdG9yID0+IHtcclxuICAgICAgICByZXR1cm4gRUMuZWxlbWVudFRvQmVDbGlja2FibGUobG9jYXRvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhc1RleHQgPSAobG9jYXRvciwgdGV4dCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBFQy50ZXh0VG9CZVByZXNlbnRJbkVsZW1lbnQobG9jYXRvciwgdGV4dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFuZCA9IGFycmF5T2ZGdW5jdGlvbnMgPT4ge1xyXG4gICAgICAgIHJldHVybiBFQy5hbmQoYXJyYXlPZkZ1bmN0aW9ucyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRpdGxlSXMgPSB0aXRsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEVDLnRpdGxlSXModGl0bGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3YWl0Rm9ySnMgPSAoKT0+IHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci53YWl0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyb3dzZXIuZXhlY3V0ZVNjcmlwdCgncmV0dXJuIGRvY3VtZW50LnJlYWR5U3RhdGU9PT1cImNvbXBsZXRlXCInKTtcclxuICAgICAgICB9LCB0aGlzLnRpbWVvdXQueGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb3VibGVDbGljayA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGJyb3dzZXIuYWN0aW9ucygpLmRvdWJsZUNsaWNrKGVsZW1lbnQpLnBlcmZvcm0oKTtcclxuICAgIH07XHJcblxyXG4gICAgaXNFbGVtZW50UHJlc2VudCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGxldCBwcmVzZW50ID0gYnJvd3Nlci53YWl0KEVDLnZpc2liaWxpdHlPZihlbGVtZW50KSwgNSAqIDEwMDAsICdFbGVtZW50IGlzIG5vdCBwcmVzZW50JykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pLmNhdGNoKCBlcnIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByZXNlbnQ7XHJcbiAgICB9O1xyXG59Il19