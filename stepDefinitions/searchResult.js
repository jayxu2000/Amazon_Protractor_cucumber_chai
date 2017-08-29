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
//# sourceMappingURL=searchResult.js.map