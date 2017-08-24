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
        this.keywordSearch = protractor_1.$('#twotabsearchtextbox');
        this.inputSearch = (searchValue) => __awaiter(this, void 0, void 0, function* () {
            yield this.keywordSearch.sendKeys(searchValue);
            yield this.keywordSearch.sendKeys("\n");
        });
        this.getCartCountText = () => __awaiter(this, void 0, void 0, function* () {
            console.log(`cart number is: ${yield this.labelCartCount.getText()}`);
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
        this.isSubCategoryPageTitleExist = (title) => __awaiter(this, void 0, void 0, function* () {
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
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUF1RDtBQUN2RCwwRUFBbUQ7QUFHbkQsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsaUNBQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLHlCQUFvQixHQUFHLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztRQUN4RixrQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLENBQUM7UUFDN0YseUJBQW9CLEdBQUcsY0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDcEUseUJBQW9CLEdBQUcsY0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDcEUsZUFBVSxHQUFHLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFjLEdBQUcsY0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsY0FBQyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFFckUsa0JBQWEsR0FBRyxjQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUUxQyxnQkFBVyxHQUFHLENBQU8sV0FBbUI7WUFDcEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQSxDQUFDO1FBRUYscUJBQWdCLEdBQUc7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFBLENBQUM7UUFFRixtQkFBYyxHQUFHLENBQU8sUUFBZ0IsRUFBRSxXQUFtQjtZQUN6RCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzFDLElBQUksZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxrQkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQWlELFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RyxNQUFNLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQSxDQUFDO1FBRUYsZ0NBQTJCLEdBQUcsQ0FBTyxLQUFhO1lBQzlDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUEsQ0FBQTtRQUVELGdCQUFXLEdBQUc7WUFDVixFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQzVDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQyxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsQ0FBQztRQUNMLENBQUMsQ0FBQSxDQUFDO1FBRUYsdUJBQWtCLEdBQUc7WUFDakIsTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3RixDQUFDLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFBLENBQUM7UUFFRixpQkFBWSxHQUFHO1lBQ1gsRUFBRSxDQUFBLENBQUMsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUM1QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNILE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQSxDQUFDO0lBRU4sQ0FBQztDQUFBO0FBOURELDRCQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuL2Jhc2VQYWdlXCI7XG5pbXBvcnQge2Jyb3dzZXIsICQsIGVsZW1lbnQsIGJ5LCAkJH0gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9wcm90cmFjdG9yLmN1Y3VtYmVyLmNvbmYnO1xuaW1wb3J0IHthc3luY30gZnJvbSBcInFcIjtcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHVybCA9IGNvbmZpZy5iYXNlVXJsO1xuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJyNzZWF0X21hcF9sYWJlbCcpKTtcbiAgICBsYWJlbENhcnRDb3VudCA9ICQoJyNuYXYtY2FydC1jb3VudCcpO1xuICAgIG1lbnVTaWduSW5BY2NvdW50ID0gJCgnI25hdi1saW5rLXlvdXJBY2NvdW50Jyk7XG4gICAgdG9vbFRpcFNpZ25JbkFjY291bnQgPSAkKCcjbmF2LXNpZ25pbi10b29sdGlwJyk7XG4gICAgc2lnbkluQWNjb3VudCA9IGVsZW1lbnQoYnkueHBhdGgoXCIvL2RpdltAaWQ9J25hdi1hbC1zaWduaW4nXS8vc3Bhblt0ZXh0KCk9J1NpZ24gaW4nXVwiKSk7XG4gICAgc2lnbkluVG9vbHRpcCA9IGVsZW1lbnQoYnkueHBhdGgoXCIvL2RpdltAaWQ9J25hdi1zaWduaW4tdG9vbHRpcCddLy9zcGFuW3RleHQoKT0nU2lnbiBpbiddXCIpKTtcbiAgICB1c2VyRmlyc3ROYW1lQWNjb3VudCA9ICQoJyNuYXYtbGluay15b3VyQWNjb3VudCA+IHNwYW4ubmF2LWxpbmUtMScpO1xuICAgIHVzZXJGaXJzdE5hbWVUb29sdGlwID0gJCgnI25hdi1saW5rLWFjY291bnRMaXN0ID4gc3Bhbi5uYXYtbGluZS0xJyk7XG4gICAgbG5rU2lnbk91dCA9ICQoJyNuYXYtaXRlbS1zaWdub3V0Jyk7XG4gICAgbWVudURlcGFydG1lbnQgPSAkKCcjbmF2LXNob3AnKTtcbiAgICBzdWJDYXRUaXRsZSA9ICQoJyNtZXJjaGFuZGlzZWQtY29udGVudD4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gaDEnKTtcblxuICAgIGtleXdvcmRTZWFyY2ggPSAkKCcjdHdvdGFic2VhcmNodGV4dGJveCcpO1xuXG4gICAgaW5wdXRTZWFyY2ggPSBhc3luYyAoc2VhcmNoVmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmtleXdvcmRTZWFyY2guc2VuZEtleXMoc2VhcmNoVmFsdWUpO1xuICAgICAgICBhd2FpdCB0aGlzLmtleXdvcmRTZWFyY2guc2VuZEtleXMoXCJcXG5cIik7XG4gICAgfTtcblxuICAgIGdldENhcnRDb3VudFRleHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjYXJ0IG51bWJlciBpczogJHthd2FpdCB0aGlzLmxhYmVsQ2FydENvdW50LmdldFRleHQoKX1gKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubGFiZWxDYXJ0Q291bnQuZ2V0VGV4dCgpO1xuICAgIH07XG5cbiAgICBjaG9vc2VDYXRlZ29yeSA9IGFzeW5jIChjYXRlZ29yeTogc3RyaW5nLCBzdWJDYXRlZ29yeTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKHRoaXMubWVudURlcGFydG1lbnQpO1xuICAgICAgICBsZXQgY2F0ZWdvcnlFbGVtZW50ID0gZWxlbWVudChieS54cGF0aChgLy9kaXZbQGlkPSduYXYtZmx5b3V0LXNob3BBbGwnXS8vc3Bhblt0ZXh0KCk9XCIke2NhdGVnb3J5fVwiXWApKTtcbiAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIoY2F0ZWdvcnlFbGVtZW50KTtcbiAgICAgICAgc3ViQ2F0ZWdvcnkgPSBzdWJDYXRlZ29yeS5yZXBsYWNlKC8nL2csIFwiXFwnXCIpO1xuICAgICAgICBsZXQgc3ViQ2F0ZWdvcnlFbGVtZW50ID0gZWxlbWVudChieS54cGF0aChgLy9kaXZbQHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCJdLy9zcGFuW3RleHQoKT1cIiR7c3ViQ2F0ZWdvcnl9XCJdYCkpO1xuICAgICAgICBhd2FpdCBzdWJDYXRlZ29yeUVsZW1lbnQuY2xpY2soKTtcbiAgICB9O1xuXG4gICAgaXNTdWJDYXRlZ29yeVBhZ2VUaXRsZUV4aXN0ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdWJDYXRUaXRsZS5pc1ByZXNlbnQoKTtcbiAgICB9XG5cbiAgICBjbGlja1NpZ25JbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYoYXdhaXQgdGhpcy50b29sVGlwU2lnbkluQWNjb3VudC5pc1ByZXNlbnQoKSl7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNpZ25JblRvb2x0aXAuY2xpY2soKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy5tZW51U2lnbkluQWNjb3VudCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNpZ25JbkFjY291bnQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRNZW1iZXJGaXJzdE5hbWUgPSBhc3luYygpPT57XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy51c2VyRmlyc3ROYW1lQWNjb3VudC5pc1ByZXNlbnQoKSk/IChhd2FpdCB0aGlzLnVzZXJGaXJzdE5hbWVBY2NvdW50LmdldFRleHQoKSk6XG4gICAgICAgICAgICAoYXdhaXQgdGhpcy51c2VyRmlyc3ROYW1lVG9vbHRpcC5nZXRUZXh0KCkpO1xuICAgIH07XG5cbiAgICBjbGlja1NpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKGF3YWl0IHRoaXMudG9vbFRpcFNpZ25JbkFjY291bnQuaXNQcmVzZW50KCkpe1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy50b29sVGlwU2lnbkluQWNjb3VudCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKHRoaXMubWVudVNpZ25JbkFjY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMubG5rU2lnbk91dC5jbGljaygpO1xuICAgIH07XG5cbn0iXX0=