"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var basePage_1 = require("./basePage");
var protractor_1 = require("protractor");
var SearchResultPage = /** @class */ (function (_super) {
    __extends(SearchResultPage, _super);
    function SearchResultPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '';
        _this.pageLoaded = _this.inDom(protractor_1.$(''));
        _this.click1stResult = function () {
        };
        return _this;
    }
    return SearchResultPage;
}(basePage_1.BasePage));
exports.SearchResultPage = SearchResultPage;