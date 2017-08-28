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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUEwQztBQUMxQywwRUFBbUQ7QUFFbkQsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsaUNBQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLHlCQUFvQixHQUFHLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELGdCQUFXLEdBQUcsY0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekMsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxDQUFDO1FBQ3hGLGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsQ0FBQztRQUM3Rix5QkFBb0IsR0FBRyxjQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNwRSx5QkFBb0IsR0FBRyxjQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNwRSxlQUFVLEdBQUcsY0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDcEMsbUJBQWMsR0FBRyxjQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxjQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsa0JBQWEsR0FBRyxjQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUUxQyxnQkFBVyxHQUFHLENBQU8sV0FBbUI7WUFDcEMsTUFBTSxJ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QWtCLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN4RixDQUFDLENBQUEsQ0FBQTtRQUVELHFCQUFnQixHQUFHO1lBQ2YsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLENBQUMsQ0FBQSxDQUFDO0lBRU4sQ0FBQztDQUFBO0FBMUVELDRCQTBFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuL2Jhc2VQYWdlXCI7XG5pbXBvcnQgeyQsIGVsZW1lbnQsIGJ5fSBmcm9tIFwicHJvdHJhY3RvclwiO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL3Byb3RyYWN0b3IuY3VjdW1iZXIuY29uZic7XG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICB1cmwgPSBjb25maWcuYmFzZVVybDtcbiAgICBwYWdlTG9hZGVkID0gdGhpcy5pbkRvbSgkKCcjc2VhdF9tYXBfbGFiZWwnKSk7XG4gICAgbGFiZWxDYXJ0Q291bnQgPSAkKCcjbmF2LWNhcnQtY291bnQnKTtcbiAgICBtZW51U2lnbkluQWNjb3VudCA9ICQoJyNuYXYtbGluay15b3VyQWNjb3VudCcpO1xuICAgIHRvb2xUaXBTaWduSW5BY2NvdW50ID0gJCgnI25hdi1zaWduaW4tdG9vbHRpcCcpO1xuICAgIG1lbnVTaWduT3V0ID0gJCgnI25hdi1saW5rLWFjY291bnRMaXN0Jyk7XG4gICAgc2lnbkluQWNjb3VudCA9IGVsZW1lbnQoYnkueHBhdGgoXCIvL2RpdltAaWQ9J25hdi1hbC1zaWduaW4nXS8vc3Bhblt0ZXh0KCk9J1NpZ24gaW4nXVwiKSk7XG4gICAgc2lnbkluVG9vbHRpcCA9IGVsZW1lbnQoYnkueHBhdGgoXCIvL2RpdltAaWQ9J25hdi1zaWduaW4tdG9vbHRpcCddLy9zcGFuW3RleHQoKT0nU2lnbiBpbiddXCIpKTtcbiAgICB1c2VyRmlyc3ROYW1lQWNjb3VudCA9ICQoJyNuYXYtbGluay15b3VyQWNjb3VudCA+IHNwYW4ubmF2LWxpbmUtMScpO1xuICAgIHVzZXJGaXJzdE5hbWVUb29sdGlwID0gJCgnI25hdi1saW5rLWFjY291bnRMaXN0ID4gc3Bhbi5uYXYtbGluZS0xJyk7XG4gICAgbG5rU2lnbk91dCA9ICQoJyNuYXYtaXRlbS1zaWdub3V0Jyk7XG4gICAgbWVudURlcGFydG1lbnQgPSAkKCcjbmF2LXNob3AnKTtcbiAgICBzdWJDYXRUaXRsZSA9ICQoJ2gxJyk7XG5cbiAgICBrZXl3b3JkU2VhcmNoID0gJCgnI3R3b3RhYnNlYXJjaHRleHRib3gnKTtcblxuICAgIGlucHV0U2VhcmNoID0gYXN5bmMgKHNlYXJjaFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5rZXl3b3JkU2VhcmNoLnNlbmRLZXlzKHNlYXJjaFZhbHVlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5rZXl3b3JkU2VhcmNoLnNlbmRLZXlzKFwiXFxuXCIpO1xuICAgIH07XG5cbiAgICBnZXRDYXJ0Q291bnRUZXh0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5sYWJlbENhcnRDb3VudC5nZXRUZXh0KCk7XG4gICAgfTtcblxuICAgIGNob29zZUNhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5OiBzdHJpbmcsIHN1YkNhdGVnb3J5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy5tZW51RGVwYXJ0bWVudCk7XG4gICAgICAgIGxldCBjYXRlZ29yeUVsZW1lbnQgPSBlbGVtZW50KGJ5LnhwYXRoKGAvL2RpdltAaWQ9XCJuYXYtZmx5b3V0LXNob3BBbGxcIl0vL3NwYW5bdGV4dCgpPVwiJHtjYXRlZ29yeX1cIl1gKSk7XG4gICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKGNhdGVnb3J5RWxlbWVudCk7XG4gICAgICAgIGxldCBzdWJDYXRlZ29yeUVsZW1lbnQgPSBlbGVtZW50KGJ5LnhwYXRoKGAvL2RpdltAc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIl0vL3NwYW5bdGV4dCgpPVwiJHthd2FpdCBzdWJDYXRlZ29yeS5yZXBsYWNlKC8nL2csIFwiXFwnXCIpfVwiXWApKTtcbiAgICAgICAgYXdhaXQgc3ViQ2F0ZWdvcnlFbGVtZW50LmNsaWNrKCk7XG4gICAgfTtcblxuICAgIGdldFN1YkNhdGVnb3J5UGFnZVRpdGxlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdWJDYXRUaXRsZS5nZXRUZXh0KCk7XG4gICAgfVxuXG4gICAgY2xpY2tTaWduSW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChhd2FpdCB0aGlzLnRvb2xUaXBTaWduSW5BY2NvdW50LmlzUHJlc2VudCgpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNpZ25JblRvb2x0aXAuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMubWVudVNpZ25PdXQuaXNQcmVzZW50KCkpe1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy5tZW51U2lnbk91dCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNpZ25JbkFjY291bnQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKHRoaXMubWVudVNpZ25JbkFjY291bnQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zaWduSW5BY2NvdW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0TWVtYmVyRmlyc3ROYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMudXNlckZpcnN0TmFtZUFjY291bnQuaXNQcmVzZW50KCkpID8gKGF3YWl0IHRoaXMudXNlckZpcnN0TmFtZUFjY291bnQuZ2V0VGV4dCgpKSA6XG4gICAgICAgICAgICAoYXdhaXQgdGhpcy51c2VyRmlyc3ROYW1lVG9vbHRpcC5nZXRUZXh0KCkpO1xuICAgIH07XG5cbiAgICBjbGlja1NpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChhd2FpdCB0aGlzLm1lbnVTaWduSW5BY2NvdW50LmlzUHJlc2VudCgpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm1vdXNlT3Zlcih0aGlzLm1lbnVTaWduSW5BY2NvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKHRoaXMubWVudVNpZ25PdXQpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMubG5rU2lnbk91dC5jbGljaygpO1xuICAgIH07XG5cbiAgICBpc1NpZ25lZEluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgKChhd2FpdCB0aGlzLmdldE1lbWJlckZpcnN0TmFtZSgpKSA9PSBgSGVsbG8uIFNpZ24gaW5gKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICBjbGlja0NhcnRTZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmxhYmVsQ2FydENvdW50LmNsaWNrKCk7XG4gICAgfTtcblxufSJdfQ==