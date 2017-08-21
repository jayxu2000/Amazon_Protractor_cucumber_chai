"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchResultPage_1 = require("../pages/searchResultPage");
const cucumber_1 = require("cucumber");
cucumber_1.defineSupportCode(function ({ When, Then, Given, setDefaultTimeout, After }) {
    let searchResultPage = new searchResultPage_1.SearchResultPage();
    setDefaultTimeout(60 * 1000);
    When(/^$/, function () {
    });
    When(/^I select the first item in list$/, function () {
        searchResultPage.click1stResult();
    });
    When(/^I add selected item$/, function () {
        // Ppage.clickAddToCartButton();
        /*    	expectedOfferTitle = Opage.getOfferTitle();
         Opage.clickButItNowButton();*/
    });
    When(/^$/, function () {
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTJEO0FBQzNELHVDQUEyQztBQUUzQyw0QkFBaUIsQ0FBQyxVQUFVLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFDO0lBRXJFLElBQUksZ0JBQWdCLEdBQXFCLElBQUksbUNBQWdCLEVBQUUsQ0FBQztJQUVoRSxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFFN0IsSUFBSSxDQUFDLElBQUksRUFBRTtJQUVYLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLG1DQUFtQyxFQUFFO1FBQ3RDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLGdDQUFnQztRQUNoQzt1Q0FDK0I7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsSUFBSSxFQUFFO0lBRVgsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VhcmNoUmVzdWx0UGFnZX0gZnJvbSAnLi4vcGFnZXMvc2VhcmNoUmVzdWx0UGFnZSc7XG5pbXBvcnQge2RlZmluZVN1cHBvcnRDb2RlfSBmcm9tICdjdWN1bWJlcic7XG5cbmRlZmluZVN1cHBvcnRDb2RlKGZ1bmN0aW9uICh7V2hlbiwgVGhlbiwgR2l2ZW4sIHNldERlZmF1bHRUaW1lb3V0LCBBZnRlcn0pIHtcblxuICAgIGxldCBzZWFyY2hSZXN1bHRQYWdlOiBTZWFyY2hSZXN1bHRQYWdlID0gbmV3IFNlYXJjaFJlc3VsdFBhZ2UoKTtcblxuICAgIHNldERlZmF1bHRUaW1lb3V0KDYwICogMTAwMCk7XG5cbiAgICBXaGVuKC9eJC8sIGZ1bmN0aW9uICgpIHtcblxuICAgIH0pO1xuXG4gICAgV2hlbigvXkkgc2VsZWN0IHRoZSBmaXJzdCBpdGVtIGluIGxpc3QkLywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWFyY2hSZXN1bHRQYWdlLmNsaWNrMXN0UmVzdWx0KCk7XG4gICAgfSk7XG5cbiAgICBXaGVuKC9eSSBhZGQgc2VsZWN0ZWQgaXRlbSQvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFBwYWdlLmNsaWNrQWRkVG9DYXJ0QnV0dG9uKCk7XG4gICAgICAgIC8qICAgIFx0ZXhwZWN0ZWRPZmZlclRpdGxlID0gT3BhZ2UuZ2V0T2ZmZXJUaXRsZSgpO1xuICAgICAgICAgT3BhZ2UuY2xpY2tCdXRJdE5vd0J1dHRvbigpOyovXG4gICAgfSk7XG5cbiAgICBXaGVuKC9eJC8sIGZ1bmN0aW9uICgpIHtcblxuICAgIH0pO1xufSk7Il19