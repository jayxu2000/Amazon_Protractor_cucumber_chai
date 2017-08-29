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
class ShoppingCartPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$(''));
        this.pageTitle = protractor_1.$('h1');
        this.allDeleteCheckbox = protractor_1.$$('input[value="Delete"]');
        this.clearCart = () => __awaiter(this, void 0, void 0, function* () {
            let totalDeleteCheckboxes = yield this.allDeleteCheckbox.count();
            for (let i = totalDeleteCheckboxes; i > 0; i--) {
                let deleteElement = protractor_1.element(protractor_1.by.xpath("(//input[@value='Delete'])[" + i + "]"));
                yield deleteElement.click();
                yield protractor_1.browser.sleep(500);
            }
        });
    }
}
exports.ShoppingCartPage = ShoppingCartPage;
//# sourceMappingURL=shoppingCartPage.js.map