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
        this.signInAccount = protractor_1.element(protractor_1.by.xpath("//div[@id='nav-al-signin']//span[text()='Sign in']"));
        this.signInTooltip = protractor_1.element(protractor_1.by.xpath("//div[@id='nav-signin-tooltip']//span[text()='Sign in']"));
        this.userFirstNameAccount = protractor_1.$('#nav-link-yourAccount > span.nav-line-1');
        this.userFirstNameTooltip = protractor_1.$('#nav-link-accountList > span.nav-line-1');
        this.lnkSignOut = protractor_1.$('#nav-item-signout');
        this.menuDepartment = protractor_1.$('#nav-shop');
        this.subCatTitle = protractor_1.$('#merchandised-content> div > div > div > div > h1');
        this.cartSection = protractor_1.$('#nav-cart');
        this.keywordSearch = protractor_1.$('#twotabsearchtextbox');
        this.inputSearch = (searchValue) => __awaiter(this, void 0, void 0, function* () {
            yield this.keywordSearch.sendKeys(searchValue);
            yield this.keywordSearch.sendKeys("\n");
        });
        this.getCartCountText = () => __awaiter(this, void 0, void 0, function* () {
            console.log(`Current cart number is: ${yield this.labelCartCount.getText()}`);
            return yield this.labelCartCount.getText();
        });
        this.chooseCategory = (category, subCategory) => __awaiter(this, void 0, void 0, function* () {
            yield this.mouseOver(this.menuDepartment);
            let categoryElement = protractor_1.element(protractor_1.by.xpath(`//div[@id='nav-flyout-shopAll']//span[text()="${category}"]`));
            yield this.mouseOver(categoryElement);
            subCategory = subCategory.replace(/'/g, "\'");
            let subCategoryElement = protractor_1.element(protractor_1.by.xpath(`//div[@style="display: block;"]//span[text()="${subCategory}"]`));
            yield subCategoryElement.click();
        });
        this.isSubCategoryPageTitleExist = () => __awaiter(this, void 0, void 0, function* () {
            yield this.subCatTitle.isPresent();
        });
        this.clickSignIn = () => __awaiter(this, void 0, void 0, function* () {
            if (yield this.toolTipSignInAccount.isPresent()) {
                yield this.signInTooltip.click();
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
            if (yield this.toolTipSignInAccount.isPresent()) {
                yield this.mouseOver(this.toolTipSignInAccount);
            }
            else {
                yield this.mouseOver(this.menuSignInAccount);
            }
            yield this.lnkSignOut.click();
        });
        this.clickCartSection = () => __awaiter(this, void 0, void 0, function* () {
            yield this.cartSection.click();
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUFtRDtBQUNuRCwwRUFBbUQ7QUFHbkQsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsaUNBQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLHlCQUFvQixHQUFHLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztRQUN4RixrQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLENBQUM7UUFDN0YseUJBQW9CLEdBQUcsY0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDcEUseUJBQW9CLEdBQUcsY0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDcEUsZUFBVSxHQUFHLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFjLEdBQUcsY0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsY0FBQyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDckUsZ0JBQVcsR0FBRyxjQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFN0Isa0JBQWEsR0FBRyxjQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUUxQyxnQkFBVyxHQUFHLENBQU8sV0FBbUI7WUFDcEMsTUFBTSxJ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UGFnZVwiO1xuaW1wb3J0IHticm93c2VyLCAkLCBlbGVtZW50LCBieX0gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9wcm90cmFjdG9yLmN1Y3VtYmVyLmNvbmYnO1xuaW1wb3J0IHthc3luY30gZnJvbSBcInFcIjtcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHVybCA9IGNvbmZpZy5iYXNlVXJsO1xuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJyNzZWF0X21hcF9sYWJlbCcpKTtcbiAgICBsYWJlbENhcnRDb3VudCA9ICQoJyNuYXYtY2FydC1jb3VudCcpO1xuICAgIG1lbnVTaWduSW5BY2NvdW50ID0gJCgnI25hdi1saW5rLXlvdXJBY2NvdW50Jyk7XG4gICAgdG9vbFRpcFNpZ25JbkFjY291bnQgPSAkKCcjbmF2LXNpZ25pbi10b29sdGlwJyk7XG4gICAgc2lnbkluQWNjb3VudCA9IGVsZW1lbnQoYnkueHBhdGgoXCIvL2RpdltAaWQ9J25hdi1hbC1zaWduaW4nXS8vc3Bhblt0ZXh0KCk9J1NpZ24gaW4nXVwiKSk7XG4gICAgc2lnbkluVG9vbHRpcCA9IGVsZW1lbnQoYnkueHBhdGgoXCIvL2RpdltAaWQ9J25hdi1zaWduaW4tdG9vbHRpcCddLy9zcGFuW3RleHQoKT0nU2lnbiBpbiddXCIpKTtcbiAgICB1c2VyRmlyc3ROYW1lQWNjb3VudCA9ICQoJyNuYXYtbGluay15b3VyQWNjb3VudCA+IHNwYW4ubmF2LWxpbmUtMScpO1xuICAgIHVzZXJGaXJzdE5hbWVUb29sdGlwID0gJCgnI25hdi1saW5rLWFjY291bnRMaXN0ID4gc3Bhbi5uYXYtbGluZS0xJyk7XG4gICAgbG5rU2lnbk91dCA9ICQoJyNuYXYtaXRlbS1zaWdub3V0Jyk7XG4gICAgbWVudURlcGFydG1lbnQgPSAkKCcjbmF2LXNob3AnKTtcbiAgICBzdWJDYXRUaXRsZSA9ICQoJyNtZXJjaGFuZGlzZWQtY29udGVudD4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gaDEnKTtcbiAgICBjYXJ0U2VjdGlvbiA9ICQoJyNuYXYtY2FydCcpO1xuXG4gICAga2V5d29yZFNlYXJjaCA9ICQoJyN0d290YWJzZWFyY2h0ZXh0Ym94Jyk7XG5cbiAgICBpbnB1dFNlYXJjaCA9IGFzeW5jIChzZWFyY2hWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhzZWFyY2hWYWx1ZSk7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhcIlxcblwiKTtcbiAgICB9O1xuXG4gICAgZ2V0Q2FydENvdW50VGV4dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgY2FydCBudW1iZXIgaXM6ICR7YXdhaXQgdGhpcy5sYWJlbENhcnRDb3VudC5nZXRUZXh0KCl9YCk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmxhYmVsQ2FydENvdW50LmdldFRleHQoKTtcbiAgICB9O1xuXG4gICAgY2hvb3NlQ2F0ZWdvcnkgPSBhc3luYyAoY2F0ZWdvcnk6IHN0cmluZywgc3ViQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLm1vdXNlT3Zlcih0aGlzLm1lbnVEZXBhcnRtZW50KTtcbiAgICAgICAgbGV0IGNhdGVnb3J5RWxlbWVudCA9IGVsZW1lbnQoYnkueHBhdGgoYC8vZGl2W0BpZD0nbmF2LWZseW91dC1zaG9wQWxsJ10vL3NwYW5bdGV4dCgpPVwiJHtjYXRlZ29yeX1cIl1gKSk7XG4gICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKGNhdGVnb3J5RWxlbWVudCk7XG4gICAgICAgIHN1YkNhdGVnb3J5ID0gc3ViQ2F0ZWdvcnkucmVwbGFjZSgvJy9nLCBcIlxcJ1wiKTtcbiAgICAgICAgbGV0IHN1YkNhdGVnb3J5RWxlbWVudCA9IGVsZW1lbnQoYnkueHBhdGgoYC8vZGl2W0BzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiXS8vc3Bhblt0ZXh0KCk9XCIke3N1YkNhdGVnb3J5fVwiXWApKTtcbiAgICAgICAgYXdhaXQgc3ViQ2F0ZWdvcnlFbGVtZW50LmNsaWNrKCk7XG4gICAgfTtcblxuICAgIGlzU3ViQ2F0ZWdvcnlQYWdlVGl0bGVFeGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdWJDYXRUaXRsZS5pc1ByZXNlbnQoKTtcbiAgICB9XG5cbiAgICBjbGlja1NpZ25JbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYoYXdhaXQgdGhpcy50b29sVGlwU2lnbkluQWNjb3VudC5pc1ByZXNlbnQoKSl7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNpZ25JblRvb2x0aXAuY2xpY2soKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy5tZW51U2lnbkluQWNjb3VudCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNpZ25JbkFjY291bnQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRNZW1iZXJGaXJzdE5hbWUgPSBhc3luYygpPT57XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy51c2VyRmlyc3ROYW1lQWNjb3VudC5pc1ByZXNlbnQoKSk/IChhd2FpdCB0aGlzLnVzZXJGaXJzdE5hbWVBY2NvdW50LmdldFRleHQoKSk6XG4gICAgICAgICAgICAoYXdhaXQgdGhpcy51c2VyRmlyc3ROYW1lVG9vbHRpcC5nZXRUZXh0KCkpO1xuICAgIH07XG5cbiAgICBjbGlja1NpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKGF3YWl0IHRoaXMudG9vbFRpcFNpZ25JbkFjY291bnQuaXNQcmVzZW50KCkpe1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy50b29sVGlwU2lnbkluQWNjb3VudCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKHRoaXMubWVudVNpZ25JbkFjY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMubG5rU2lnbk91dC5jbGljaygpO1xuICAgIH07XG5cbiAgICBjbGlja0NhcnRTZWN0aW9uID0gYXN5bmMoKT0+e1xuICAgICAgICBhd2FpdCB0aGlzLmNhcnRTZWN0aW9uLmNsaWNrKCk7XG4gICAgfTtcblxufSJdfQ==