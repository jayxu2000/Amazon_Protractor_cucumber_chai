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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUEwQztBQUMxQywwRUFBbUQ7QUFFbkQsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsaUNBQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLHlCQUFvQixHQUFHLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELGdCQUFXLEdBQUcsY0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekMsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxDQUFDO1FBQ3hGLGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsQ0FBQztRQUM3Rix5QkFBb0IsR0FBRyxjQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNwRSx5QkFBb0IsR0FBRyxjQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNwRSxlQUFVLEdBQUcsY0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDcEMsbUJBQWMsR0FBRyxjQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxjQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsa0JBQWEsR0FBRyxjQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUUxQyxnQkFBVyxHQUFHLENBQU8sV0FBbUI7WUFDcEMsTUFBTSxJ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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4vYmFzZVBhZ2VcIjtcbmltcG9ydCB7JCwgZWxlbWVudCwgYnl9IGZyb20gXCJwcm90cmFjdG9yXCI7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vcHJvdHJhY3Rvci5jdWN1bWJlci5jb25mJztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHVybCA9IGNvbmZpZy5iYXNlVXJsO1xuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJyNzZWF0X21hcF9sYWJlbCcpKTtcbiAgICBsYWJlbENhcnRDb3VudCA9ICQoJyNuYXYtY2FydC1jb3VudCcpO1xuICAgIG1lbnVTaWduSW5BY2NvdW50ID0gJCgnI25hdi1saW5rLXlvdXJBY2NvdW50Jyk7XG4gICAgdG9vbFRpcFNpZ25JbkFjY291bnQgPSAkKCcjbmF2LXNpZ25pbi10b29sdGlwJyk7XG4gICAgbWVudVNpZ25PdXQgPSAkKCcjbmF2LWxpbmstYWNjb3VudExpc3QnKTtcbiAgICBzaWduSW5BY2NvdW50ID0gZWxlbWVudChieS54cGF0aChcIi8vZGl2W0BpZD0nbmF2LWFsLXNpZ25pbiddLy9zcGFuW3RleHQoKT0nU2lnbiBpbiddXCIpKTtcbiAgICBzaWduSW5Ub29sdGlwID0gZWxlbWVudChieS54cGF0aChcIi8vZGl2W0BpZD0nbmF2LXNpZ25pbi10b29sdGlwJ10vL3NwYW5bdGV4dCgpPSdTaWduIGluJ11cIikpO1xuICAgIHVzZXJGaXJzdE5hbWVBY2NvdW50ID0gJCgnI25hdi1saW5rLXlvdXJBY2NvdW50ID4gc3Bhbi5uYXYtbGluZS0xJyk7XG4gICAgdXNlckZpcnN0TmFtZVRvb2x0aXAgPSAkKCcjbmF2LWxpbmstYWNjb3VudExpc3QgPiBzcGFuLm5hdi1saW5lLTEnKTtcbiAgICBsbmtTaWduT3V0ID0gJCgnI25hdi1pdGVtLXNpZ25vdXQnKTtcbiAgICBtZW51RGVwYXJ0bWVudCA9ICQoJyNuYXYtc2hvcCcpO1xuICAgIHN1YkNhdFRpdGxlID0gJCgnaDEnKTtcblxuICAgIGtleXdvcmRTZWFyY2ggPSAkKCcjdHdvdGFic2VhcmNodGV4dGJveCcpO1xuXG4gICAgaW5wdXRTZWFyY2ggPSBhc3luYyAoc2VhcmNoVmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmtleXdvcmRTZWFyY2guc2VuZEtleXMoc2VhcmNoVmFsdWUpO1xuICAgICAgICBhd2FpdCB0aGlzLmtleXdvcmRTZWFyY2guc2VuZEtleXMoXCJcXG5cIik7XG4gICAgfTtcblxuICAgIGdldENhcnRDb3VudFRleHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmxhYmVsQ2FydENvdW50LmdldFRleHQoKTtcbiAgICB9O1xuXG4gICAgY2hvb3NlQ2F0ZWdvcnkgPSBhc3luYyAoY2F0ZWdvcnk6IHN0cmluZywgc3ViQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLm1vdXNlT3Zlcih0aGlzLm1lbnVEZXBhcnRtZW50KTtcbiAgICAgICAgbGV0IGNhdGVnb3J5RWxlbWVudCA9IGVsZW1lbnQoYnkueHBhdGgoYC8vZGl2W0BpZD1cIm5hdi1mbHlvdXQtc2hvcEFsbFwiXS8vc3Bhblt0ZXh0KCk9XCIke2NhdGVnb3J5fVwiXWApKTtcbiAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIoY2F0ZWdvcnlFbGVtZW50KTtcbiAgICAgICAgbGV0IHN1YkNhdGVnb3J5RWxlbWVudCA9IGVsZW1lbnQoYnkueHBhdGgoYC8vZGl2W0BzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiXS8vc3Bhblt0ZXh0KCk9XCIke2F3YWl0IHN1YkNhdGVnb3J5LnJlcGxhY2UoLycvZywgXCJcXCdcIil9XCJdYCkpO1xuICAgICAgICBhd2FpdCBzdWJDYXRlZ29yeUVsZW1lbnQuY2xpY2soKTtcbiAgICB9O1xuXG4gICAgZ2V0U3ViQ2F0ZWdvcnlQYWdlVGl0bGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN1YkNhdFRpdGxlLmdldFRleHQoKTtcbiAgICB9XG5cbiAgICBjbGlja1NpZ25JbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMudG9vbFRpcFNpZ25JbkFjY291bnQuaXNQcmVzZW50KCkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2lnbkluVG9vbHRpcC5jbGljaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy5tZW51U2lnbkluQWNjb3VudCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNpZ25JbkFjY291bnQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRNZW1iZXJGaXJzdE5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy51c2VyRmlyc3ROYW1lQWNjb3VudC5pc1ByZXNlbnQoKSkgPyAoYXdhaXQgdGhpcy51c2VyRmlyc3ROYW1lQWNjb3VudC5nZXRUZXh0KCkpIDpcbiAgICAgICAgICAgIChhd2FpdCB0aGlzLnVzZXJGaXJzdE5hbWVUb29sdGlwLmdldFRleHQoKSk7XG4gICAgfTtcblxuICAgIGNsaWNrU2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMubWVudVNpZ25JbkFjY291bnQuaXNQcmVzZW50KCkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKHRoaXMubWVudVNpZ25JbkFjY291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy5tZW51U2lnbk91dCk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5sbmtTaWduT3V0LmNsaWNrKCk7XG4gICAgfTtcblxuICAgIGlzU2lnbmVkSW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCAoKGF3YWl0IHRoaXMuZ2V0TWVtYmVyRmlyc3ROYW1lKCkpID09IGBIZWxsby4gU2lnbiBpbmApID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIGNsaWNrQ2FydFNlY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMubGFiZWxDYXJ0Q291bnQuY2xpY2soKTtcbiAgICB9O1xuXG59Il19