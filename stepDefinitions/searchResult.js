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
const searchResultPage_1 = require("../pages/searchResultPage");
const cucumber_1 = require("cucumber");
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout }) => {
    let searchResultPage = new searchResultPage_1.SearchResultPage();
    setDefaultTimeout(60 * 1000);
    When(/^I select the first item in list$/, () => __awaiter(this, void 0, void 0, function* () {
        yield searchResultPage.click1stResult();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsdUNBQTJDO0FBRTNDLDRCQUFpQixDQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQztJQUV0RCxJQUFJLGdCQUFnQixHQUFxQixJQUFJLG1DQUFnQixFQUFFLENBQUM7SUFFaEUsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyxtQ0FBbUMsRUFBRTtRQUN0QyxNQUFNLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VhcmNoUmVzdWx0UGFnZX0gZnJvbSAnLi4vcGFnZXMvc2VhcmNoUmVzdWx0UGFnZSc7XHJcbmltcG9ydCB7ZGVmaW5lU3VwcG9ydENvZGV9IGZyb20gJ2N1Y3VtYmVyJztcclxuXHJcbmRlZmluZVN1cHBvcnRDb2RlKCAoe1doZW4sIFRoZW4sIEdpdmVuLCBzZXREZWZhdWx0VGltZW91dH0pID0+e1xyXG5cclxuICAgIGxldCBzZWFyY2hSZXN1bHRQYWdlOiBTZWFyY2hSZXN1bHRQYWdlID0gbmV3IFNlYXJjaFJlc3VsdFBhZ2UoKTtcclxuXHJcbiAgICBzZXREZWZhdWx0VGltZW91dCg2MCAqIDEwMDApO1xyXG5cclxuICAgIFdoZW4oL15JIHNlbGVjdCB0aGUgZmlyc3QgaXRlbSBpbiBsaXN0JC8sIGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBzZWFyY2hSZXN1bHRQYWdlLmNsaWNrMXN0UmVzdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbn0pOyJdfQ==