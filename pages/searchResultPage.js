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
const basePage_1 = require("./basePage");
const protractor_1 = require("protractor");
class SearchResultPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$('#s-result-info-bar'));
        this.firstSearchResult = protractor_1.$('li>div>div.a-fixed-left-grid>div>div');
        this.click1stResult = () => __awaiter(this, void 0, void 0, function* () {
            yield this.firstSearchResult.click();
        });
    }
}
exports.SearchResultPage = SearchResultPage;
//# sourceMappingURL=searchResultPage.js.map