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
class MemberPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$(''));
        this.pageTitle = protractor_1.$('h1');
        this.account = protractor_1.$('#ap_email');
        this.accountPassword = protractor_1.$('#ap_password');
        this.btnSignIn = protractor_1.$('#signInSubmit');
        this.signIn = (email, password) => __awaiter(this, void 0, void 0, function* () {
            yield this.account.sendKeys(email);
            yield this.accountPassword.sendKeys(password);
            yield this.btnSignIn.click();
        });
        this.getPageTitle = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.pageTitle.getText();
        });
    }
}
exports.MemberPage = MemberPage;
//# sourceMappingURL=memberPage.js.map