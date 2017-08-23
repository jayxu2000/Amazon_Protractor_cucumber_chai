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
        this.menuSignInAccount = protractor_1.$("#nav-link-yourAccount");
        this.userFirstName = protractor_1.$('#nav-link-yourAccount > span.nav-line-1');
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
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUFtRDtBQUNuRCwwRUFBbUQ7QUFLbkQsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsaUNBQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsY0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDN0QsZUFBVSxHQUFHLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFjLEdBQUcsY0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsY0FBQyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFFckUsa0JBQWEsR0FBRyxjQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUUxQyxnQkFBVyxHQUFHLENBQU8sV0FBbUI7WUFDcEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQSxDQUFDO1FBRUYscUJBQWdCLEdBQUc7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFBLENBQUM7UUFFRixtQkFBYyxHQUFHLENBQU8sUUFBZ0IsRUFBRSxXQUFtQjtZQUN6RCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTFDLElBQUksZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxrQkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQWlELFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RyxNQUFNLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQSxDQUFDO1FBRUYsZ0NBQTJCLEdBQUcsQ0FBTyxLQUFhO1lBQzlDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUEsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQXBDRCw0QkFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHticm93c2VyLCAkLCBlbGVtZW50LCBieX0gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9wcm90cmFjdG9yLmN1Y3VtYmVyLmNvbmYnO1xuaW1wb3J0ICogYXMgd2FpdEhlbHBlciBmcm9tIFwiLi4vaGVscGVycy93YWl0X2hlbHBlclwiO1xuaW1wb3J0ICogYXMgUSBmcm9tICdxJztcbmltcG9ydCB7YXN5bmN9IGZyb20gXCJxXCI7XG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICB1cmwgPSBjb25maWcuYmFzZVVybDtcbiAgICBwYWdlTG9hZGVkID0gdGhpcy5pbkRvbSgkKCcjc2VhdF9tYXBfbGFiZWwnKSk7XG4gICAgbGFiZWxDYXJ0Q291bnQgPSAkKCcjbmF2LWNhcnQtY291bnQnKTtcbiAgICBtZW51U2lnbkluQWNjb3VudCA9ICQoXCIjbmF2LWxpbmsteW91ckFjY291bnRcIik7XG4gICAgdXNlckZpcnN0TmFtZSA9ICQoJyNuYXYtbGluay15b3VyQWNjb3VudCA+IHNwYW4ubmF2LWxpbmUtMScpO1xuICAgIGxua1NpZ25PdXQgPSAkKCcjbmF2LWl0ZW0tc2lnbm91dCcpO1xuICAgIG1lbnVEZXBhcnRtZW50ID0gJCgnI25hdi1zaG9wJyk7XG4gICAgc3ViQ2F0VGl0bGUgPSAkKCcjbWVyY2hhbmRpc2VkLWNvbnRlbnQ+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGgxJyk7XG5cbiAgICBrZXl3b3JkU2VhcmNoID0gJCgnI3R3b3RhYnNlYXJjaHRleHRib3gnKTtcblxuICAgIGlucHV0U2VhcmNoID0gYXN5bmMgKHNlYXJjaFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5rZXl3b3JkU2VhcmNoLnNlbmRLZXlzKHNlYXJjaFZhbHVlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5rZXl3b3JkU2VhcmNoLnNlbmRLZXlzKFwiXFxuXCIpO1xuICAgIH07XG5cbiAgICBnZXRDYXJ0Q291bnRUZXh0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2FydCBudW1iZXIgaXM6ICR7YXdhaXQgdGhpcy5sYWJlbENhcnRDb3VudC5nZXRUZXh0KCl9YCk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmxhYmVsQ2FydENvdW50LmdldFRleHQoKTtcbiAgICB9O1xuXG4gICAgY2hvb3NlQ2F0ZWdvcnkgPSBhc3luYyAoY2F0ZWdvcnk6IHN0cmluZywgc3ViQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLm1vdXNlT3Zlcih0aGlzLm1lbnVEZXBhcnRtZW50KTtcblxuICAgICAgICBsZXQgY2F0ZWdvcnlFbGVtZW50ID0gZWxlbWVudChieS54cGF0aChgLy9kaXZbQGlkPSduYXYtZmx5b3V0LXNob3BBbGwnXS8vc3Bhblt0ZXh0KCk9XCIke2NhdGVnb3J5fVwiXWApKTtcbiAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIoY2F0ZWdvcnlFbGVtZW50KTtcbiAgICAgICAgc3ViQ2F0ZWdvcnkgPSBzdWJDYXRlZ29yeS5yZXBsYWNlKC8nL2csIFwiXFwnXCIpO1xuICAgICAgICBsZXQgc3ViQ2F0ZWdvcnlFbGVtZW50ID0gZWxlbWVudChieS54cGF0aChgLy9kaXZbQHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCJdLy9zcGFuW3RleHQoKT1cIiR7c3ViQ2F0ZWdvcnl9XCJdYCkpO1xuICAgICAgICBhd2FpdCBzdWJDYXRlZ29yeUVsZW1lbnQuY2xpY2soKTtcbiAgICB9O1xuXG4gICAgaXNTdWJDYXRlZ29yeVBhZ2VUaXRsZUV4aXN0ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdWJDYXRUaXRsZS5pc1ByZXNlbnQoKTtcbiAgICB9XG5cbn0iXX0=