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
cucumber_1.defineSupportCode(function ({ When, Then, Given, setDefaultTimeout, After }) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCx1Q0FBMkM7QUFJM0MsNEJBQWlCLENBQUMsVUFBVSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBQztJQUVyRSxJQUFJLGlCQUFpQixHQUFzQixJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFFbkUsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtRQUMxQixNQUFNLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDL0MsRUFBRSxDQUFBLENBQUMsTUFBTSxpQkFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUN0RCxNQUFNLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDdEQsQ0FBQztRQUNEO3VDQUMrQjtJQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2R1Y3REZXRhaWxQYWdlfSBmcm9tICcuLi9wYWdlcy9wcm9kdWN0RGV0YWlsUGFnZSc7XG5pbXBvcnQge2RlZmluZVN1cHBvcnRDb2RlfSBmcm9tICdjdWN1bWJlcic7XG5pbXBvcnQge0hvbWVQYWdlfSBmcm9tICcuLi9wYWdlcy9ob21lUGFnZSc7XG5pbXBvcnQge2FzeW5jfSBmcm9tIFwicVwiO1xuXG5kZWZpbmVTdXBwb3J0Q29kZShmdW5jdGlvbiAoe1doZW4sIFRoZW4sIEdpdmVuLCBzZXREZWZhdWx0VGltZW91dCwgQWZ0ZXJ9KSB7XG5cbiAgICBsZXQgcHJvZHVjdERldGFpbFBhZ2U6IFByb2R1Y3REZXRhaWxQYWdlID0gbmV3IFByb2R1Y3REZXRhaWxQYWdlKCk7XG5cbiAgICBzZXREZWZhdWx0VGltZW91dCg2MCAqIDEwMDApO1xuXG4gICAgV2hlbigvXkkgYWRkIHNlbGVjdGVkIGl0ZW0kLywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBwcm9kdWN0RGV0YWlsUGFnZS5jbGlja0FkZFRvQ2FydEJ1dHRvbigpO1xuICAgICAgICBpZihhd2FpdCBwcm9kdWN0RGV0YWlsUGFnZS5pc0J1dHRvblBvcE92ZXJDbG9zZVByZXNlbnQoKSl7XG4gICAgICAgICAgICBhd2FpdCBwcm9kdWN0RGV0YWlsUGFnZS5jbGlja0J1dHRvblBvcE92ZXJDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8qICAgIFx0ZXhwZWN0ZWRPZmZlclRpdGxlID0gT3BhZ2UuZ2V0T2ZmZXJUaXRsZSgpO1xuICAgICAgICAgT3BhZ2UuY2xpY2tCdXRJdE5vd0J1dHRvbigpOyovXG4gICAgfSk7XG59KTsiXX0=