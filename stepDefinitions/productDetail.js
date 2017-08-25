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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCx1Q0FBMkM7QUFFM0MsNEJBQWlCLENBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBQztJQUU3RCxJQUFJLGlCQUFpQixHQUFzQixJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFFbkUsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtRQUMxQixNQUFNLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDL0MsRUFBRSxDQUFBLENBQUMsTUFBTSxpQkFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUN0RCxNQUFNLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDdEQsQ0FBQztRQUNEO3VDQUMrQjtJQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2R1Y3REZXRhaWxQYWdlfSBmcm9tICcuLi9wYWdlcy9wcm9kdWN0RGV0YWlsUGFnZSc7XHJcbmltcG9ydCB7ZGVmaW5lU3VwcG9ydENvZGV9IGZyb20gJ2N1Y3VtYmVyJztcclxuXHJcbmRlZmluZVN1cHBvcnRDb2RlKCAoe1doZW4sIFRoZW4sIEdpdmVuLCBzZXREZWZhdWx0VGltZW91dCwgQWZ0ZXJ9KSA9PntcclxuXHJcbiAgICBsZXQgcHJvZHVjdERldGFpbFBhZ2U6IFByb2R1Y3REZXRhaWxQYWdlID0gbmV3IFByb2R1Y3REZXRhaWxQYWdlKCk7XHJcblxyXG4gICAgc2V0RGVmYXVsdFRpbWVvdXQoNjAgKiAxMDAwKTtcclxuXHJcbiAgICBXaGVuKC9eSSBhZGQgc2VsZWN0ZWQgaXRlbSQvLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgcHJvZHVjdERldGFpbFBhZ2UuY2xpY2tBZGRUb0NhcnRCdXR0b24oKTtcclxuICAgICAgICBpZihhd2FpdCBwcm9kdWN0RGV0YWlsUGFnZS5pc0J1dHRvblBvcE92ZXJDbG9zZVByZXNlbnQoKSl7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb2R1Y3REZXRhaWxQYWdlLmNsaWNrQnV0dG9uUG9wT3ZlckNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qICAgIFx0ZXhwZWN0ZWRPZmZlclRpdGxlID0gT3BhZ2UuZ2V0T2ZmZXJUaXRsZSgpO1xyXG4gICAgICAgICBPcGFnZS5jbGlja0J1dEl0Tm93QnV0dG9uKCk7Ki9cclxuICAgIH0pO1xyXG59KTsiXX0=