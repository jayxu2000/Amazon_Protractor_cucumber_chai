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
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCx1Q0FBMkM7QUFFM0MsNEJBQWlCLENBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBQztJQUU3RCxJQUFJLGlCQUFpQixHQUFzQixJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFFbkUsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtRQUMxQixNQUFNLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDL0MsRUFBRSxDQUFBLENBQUMsTUFBTSxpQkFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUN0RCxNQUFNLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDdEQsQ0FBQztJQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZHVjdERldGFpbFBhZ2V9IGZyb20gJy4uL3BhZ2VzL3Byb2R1Y3REZXRhaWxQYWdlJztcclxuaW1wb3J0IHtkZWZpbmVTdXBwb3J0Q29kZX0gZnJvbSAnY3VjdW1iZXInO1xyXG5cclxuZGVmaW5lU3VwcG9ydENvZGUoICh7V2hlbiwgVGhlbiwgR2l2ZW4sIHNldERlZmF1bHRUaW1lb3V0LCBBZnRlcn0pID0+e1xyXG5cclxuICAgIGxldCBwcm9kdWN0RGV0YWlsUGFnZTogUHJvZHVjdERldGFpbFBhZ2UgPSBuZXcgUHJvZHVjdERldGFpbFBhZ2UoKTtcclxuXHJcbiAgICBzZXREZWZhdWx0VGltZW91dCg2MCAqIDEwMDApO1xyXG5cclxuICAgIFdoZW4oL15JIGFkZCBzZWxlY3RlZCBpdGVtJC8sIGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBwcm9kdWN0RGV0YWlsUGFnZS5jbGlja0FkZFRvQ2FydEJ1dHRvbigpO1xyXG4gICAgICAgIGlmKGF3YWl0IHByb2R1Y3REZXRhaWxQYWdlLmlzQnV0dG9uUG9wT3ZlckNsb3NlUHJlc2VudCgpKXtcclxuICAgICAgICAgICAgYXdhaXQgcHJvZHVjdERldGFpbFBhZ2UuY2xpY2tCdXR0b25Qb3BPdmVyQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7Il19