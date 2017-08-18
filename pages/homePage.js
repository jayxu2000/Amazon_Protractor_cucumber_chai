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
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '';
        _this.pageLoaded = _this.inDom(protractor_1.$('#seat_map_label'));
        _this.labelCartCount = protractor_1.$("#nav-cart-count");
        _this.menuSignInAccount = protractor_1.$("#nav-link-yourAccount");
        _this.userFirstName = protractor_1.$("#nav-link-yourAccount > span.nav-line-1");
        _this.lnkSignOut = protractor_1.$("#nav-item-signout");
        _this.menuDepartment = protractor_1.$("#nav-shop");
        _this.keywordSearch = protractor_1.$("#twotabsearchtextbox");
        _this.inputSearch = function (searchValue) {
            _this.keywordSearch.sendKeys(searchValue);
            _this.keywordSearch.sendKeys("\n");
        };
        _this.getCartCountText = function () {
            return _this.labelCartCount.getText();
        };
        return _this;
    }
    return HomePage;
}(basePage_1.BasePage));
exports.HomePage = HomePage;
