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
const memberPage_1 = require("../pages/memberPage");
const cucumber_1 = require("cucumber");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, After }) => {
    let memberPage = new memberPage_1.MemberPage();
    setDefaultTimeout(60 * 1000);
    When(/^I sign in as account "(.*?)" with password "(.*?)"$/, (account, password) => __awaiter(this, void 0, void 0, function* () {
        yield memberPage.signIn(account, password);
    }));
    Then(/^the "(.*?)" page displays$/, (pageTitle) => __awaiter(this, void 0, void 0, function* () {
        yield expect(memberPage.getPageTitle()).to.eventually.include(pageTitle);
    }));
});
//# sourceMappingURL=member.js.map