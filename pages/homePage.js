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
const protractor_cucumber_conf_1 = require("../protractor.cucumber.conf");
class HomePage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = protractor_cucumber_conf_1.config.baseUrl;
        this.pageLoaded = this.inDom(protractor_1.$('#seat_map_label'));
        this.labelCartCount = protractor_1.$('#nav-cart-count');
        this.menuSignInAccount = protractor_1.$('#nav-link-yourAccount');
        this.toolTipSignInAccount = protractor_1.$('#nav-signin-tooltip');
        this.menuSignOut = protractor_1.$('#nav-link-accountList');
        this.signInAccount = protractor_1.element(protractor_1.by.xpath("//div[@id='nav-al-signin']//span[text()='Sign in']"));
        this.signInTooltip = protractor_1.element(protractor_1.by.xpath("//div[@id='nav-signin-tooltip']//span[text()='Sign in']"));
        this.userFirstNameAccount = protractor_1.$('#nav-link-yourAccount > span.nav-line-1');
        this.userFirstNameTooltip = protractor_1.$('#nav-link-accountList > span.nav-line-1');
        this.lnkSignOut = protractor_1.$('#nav-item-signout');
        this.menuDepartment = protractor_1.$('#nav-shop');
        this.subCatTitle = protractor_1.$('h1');
        this.keywordSearch = protractor_1.$('#twotabsearchtextbox');
        this.inputSearch = (searchValue) => __awaiter(this, void 0, void 0, function* () {
            yield this.keywordSearch.sendKeys(searchValue);
            yield this.keywordSearch.sendKeys("\n");
        });
        this.getCartCountText = () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(500);
            return yield this.labelCartCount.getText();
        });
        this.chooseCategory = (category, subCategory) => __awaiter(this, void 0, void 0, function* () {
            yield this.mouseOver(this.menuDepartment);
            let categoryElement = protractor_1.element(protractor_1.by.xpath(`//div[@id="nav-flyout-shopAll"]//span[text()="${category}"]`));
            yield this.mouseOver(categoryElement);
            let subCategoryElement = protractor_1.element(protractor_1.by.xpath(`//div[@style="display: block;"]//span[text()="${yield subCategory.replace(/'/g, "\'")}"]`));
            yield subCategoryElement.click();
        });
        this.getSubCategoryPageTitle = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.subCatTitle.getText();
        });
        this.clickSignIn = () => __awaiter(this, void 0, void 0, function* () {
            if (yield this.toolTipSignInAccount.isPresent()) {
                yield this.signInTooltip.click();
            }
            else if (this.menuSignOut.isPresent()) {
                yield this.mouseOver(this.menuSignOut);
                yield this.signInAccount.click();
            }
            else {
                yield this.mouseOver(this.menuSignInAccount);
                yield this.signInAccount.click();
            }
        });
        this.getMemberFirstName = () => __awaiter(this, void 0, void 0, function* () {
            return (yield this.userFirstNameAccount.isPresent()) ? (yield this.userFirstNameAccount.getText()) :
                (yield this.userFirstNameTooltip.getText());
        });
        this.clickSignOut = () => __awaiter(this, void 0, void 0, function* () {
            if (yield this.menuSignInAccount.isPresent()) {
                yield this.mouseOver(this.menuSignInAccount);
            }
            else {
                yield this.mouseOver(this.menuSignOut);
            }
            yield this.lnkSignOut.click();
        });
        this.isSignedIn = () => __awaiter(this, void 0, void 0, function* () {
            return (yield ((yield this.getMemberFirstName()) == `Hello. Sign in`)) ? false : true;
        });
        this.clickCartSection = () => __awaiter(this, void 0, void 0, function* () {
            yield this.labelCartCount.click();
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=homePage.js.map