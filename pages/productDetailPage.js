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
class ProductDetailPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$(''));
        this.buttonAddToCart = protractor_1.$('#add-to-cart-button');
        this.buttonPopOverClose = protractor_1.$('button[data-action=a-popover-close]');
        this.clickAddToCartButton = () => __awaiter(this, void 0, void 0, function* () {
            yield this.buttonAddToCart.click();
        });
        this.isButtonPopOverClosePresent = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.buttonPopOverClose.isPresent();
        });
        this.clickButtonPopOverClose = () => __awaiter(this, void 0, void 0, function* () {
            yield this.buttonPopOverClose.click();
        });
    }
}
exports.ProductDetailPage = ProductDetailPage;
//# sourceMappingURL=productDetailPage.js.map