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
const productDetailPage_1 = require("../pages/productDetailPage");
const cucumber_1 = require("cucumber");
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, After }) => {
    let productDetailPage = new productDetailPage_1.ProductDetailPage();
    setDefaultTimeout(60 * 1000);
    When(/^I add selected item$/, () => __awaiter(this, void 0, void 0, function* () {
        yield productDetailPage.clickAddToCartButton();
        if (yield productDetailPage.isButtonPopOverClosePresent()) {
            yield productDetailPage.clickButtonPopOverClose();
        }
        /*    	expectedOfferTitle = Opage.getOfferTitle();
         Opage.clickButItNowButton();*/
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCx1Q0FBMkM7QUFFM0MsNEJBQWlCLENBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBQztJQUU3RCxJQUFJLGlCQUFpQixHQUFzQixJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFFbkUsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtRQUMxQixNQUFNLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDL0MsRUFBRSxDQUFBLENBQUMsTUFBTSxpQkFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUN0RCxNQUFNLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDdEQsQ0FBQztRQUNEO3VDQUMrQjtJQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2R1Y3REZXRhaWxQYWdlfSBmcm9tICcuLi9wYWdlcy9wcm9kdWN0RGV0YWlsUGFnZSc7XG5pbXBvcnQge2RlZmluZVN1cHBvcnRDb2RlfSBmcm9tICdjdWN1bWJlcic7XG5cbmRlZmluZVN1cHBvcnRDb2RlKCAoe1doZW4sIFRoZW4sIEdpdmVuLCBzZXREZWZhdWx0VGltZW91dCwgQWZ0ZXJ9KSA9PntcblxuICAgIGxldCBwcm9kdWN0RGV0YWlsUGFnZTogUHJvZHVjdERldGFpbFBhZ2UgPSBuZXcgUHJvZHVjdERldGFpbFBhZ2UoKTtcblxuICAgIHNldERlZmF1bHRUaW1lb3V0KDYwICogMTAwMCk7XG5cbiAgICBXaGVuKC9eSSBhZGQgc2VsZWN0ZWQgaXRlbSQvLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHByb2R1Y3REZXRhaWxQYWdlLmNsaWNrQWRkVG9DYXJ0QnV0dG9uKCk7XG4gICAgICAgIGlmKGF3YWl0IHByb2R1Y3REZXRhaWxQYWdlLmlzQnV0dG9uUG9wT3ZlckNsb3NlUHJlc2VudCgpKXtcbiAgICAgICAgICAgIGF3YWl0IHByb2R1Y3REZXRhaWxQYWdlLmNsaWNrQnV0dG9uUG9wT3ZlckNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLyogICAgXHRleHBlY3RlZE9mZmVyVGl0bGUgPSBPcGFnZS5nZXRPZmZlclRpdGxlKCk7XG4gICAgICAgICBPcGFnZS5jbGlja0J1dEl0Tm93QnV0dG9uKCk7Ki9cbiAgICB9KTtcbn0pOyJdfQ==