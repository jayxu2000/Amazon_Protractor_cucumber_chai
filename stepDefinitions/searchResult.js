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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTJEO0FBQzNELHVDQUEyQztBQUUzQyw0QkFBaUIsQ0FBQyxVQUFVLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFDO0lBRXJFLElBQUksZ0JBQWdCLEdBQXFCLElBQUksbUNBQWdCLEVBQUUsQ0FBQztJQUVoRSxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFFN0IsSUFBSSxDQUFDLElBQUksRUFBRTtJQUVYLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLG1DQUFtQyxFQUFFO1FBQ3RDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLGdDQUFnQztRQUNoQzt1Q0FDK0I7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsSUFBSSxFQUFFO0lBRVgsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VhcmNoUmVzdWx0UGFnZX0gZnJvbSAnLi4vcGFnZXMvc2VhcmNoUmVzdWx0UGFnZSc7XHJcbmltcG9ydCB7ZGVmaW5lU3VwcG9ydENvZGV9IGZyb20gJ2N1Y3VtYmVyJztcclxuXHJcbmRlZmluZVN1cHBvcnRDb2RlKGZ1bmN0aW9uICh7V2hlbiwgVGhlbiwgR2l2ZW4sIHNldERlZmF1bHRUaW1lb3V0LCBBZnRlcn0pIHtcclxuXHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0UGFnZTogU2VhcmNoUmVzdWx0UGFnZSA9IG5ldyBTZWFyY2hSZXN1bHRQYWdlKCk7XHJcblxyXG4gICAgc2V0RGVmYXVsdFRpbWVvdXQoNjAgKiAxMDAwKTtcclxuXHJcbiAgICBXaGVuKC9eJC8sIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBXaGVuKC9eSSBzZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gbGlzdCQvLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VhcmNoUmVzdWx0UGFnZS5jbGljazFzdFJlc3VsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgV2hlbigvXkkgYWRkIHNlbGVjdGVkIGl0ZW0kLywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFBwYWdlLmNsaWNrQWRkVG9DYXJ0QnV0dG9uKCk7XHJcbiAgICAgICAgLyogICAgXHRleHBlY3RlZE9mZmVyVGl0bGUgPSBPcGFnZS5nZXRPZmZlclRpdGxlKCk7XHJcbiAgICAgICAgIE9wYWdlLmNsaWNrQnV0SXROb3dCdXR0b24oKTsqL1xyXG4gICAgfSk7XHJcblxyXG4gICAgV2hlbigvXiQvLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSk7XHJcbn0pOyJdfQ==