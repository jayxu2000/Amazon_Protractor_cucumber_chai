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
            subCategory = subCategory.replace(/'/g, "\\'");
            let subCategoryElement = protractor_1.element(protractor_1.by.xpath(`//div[@style='display: block;']//span[text()='${subCategory}']`));
            yield subCategoryElement.click();
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUFtRDtBQUNuRCwwRUFBbUQ7QUFJbkQsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsaUNBQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsY0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDN0QsZUFBVSxHQUFHLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFjLEdBQUcsY0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhDLGtCQUFhLEdBQUcsY0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFMUMsZ0JBQVcsR0FBRyxDQUFNLFdBQW1CO1lBQ25DLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUEsQ0FBQztRQUVGLHFCQUFnQixHQUFHO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FBQSxDQUFDO1FBRUYsbUJBQWMsR0FBRyxDQUFPLFFBQWdCLEVBQUUsV0FBbUI7WUFDekQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUxQyxJQUFJLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQWlELFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2RyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0csTUFBTSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUEsQ0FBQztJQUVOLENBQUM7Q0FBQTtBQS9CRCw0QkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHticm93c2VyLCAkLCBlbGVtZW50LCBieX0gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9wcm90cmFjdG9yLmN1Y3VtYmVyLmNvbmYnO1xuaW1wb3J0ICogYXMgd2FpdEhlbHBlciBmcm9tIFwiLi4vaGVscGVycy93YWl0X2hlbHBlclwiO1xuaW1wb3J0ICogYXMgUSBmcm9tICdxJztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHVybCA9IGNvbmZpZy5iYXNlVXJsO1xuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJyNzZWF0X21hcF9sYWJlbCcpKTtcbiAgICBsYWJlbENhcnRDb3VudCA9ICQoJyNuYXYtY2FydC1jb3VudCcpO1xuICAgIG1lbnVTaWduSW5BY2NvdW50ID0gJChcIiNuYXYtbGluay15b3VyQWNjb3VudFwiKTtcbiAgICB1c2VyRmlyc3ROYW1lID0gJCgnI25hdi1saW5rLXlvdXJBY2NvdW50ID4gc3Bhbi5uYXYtbGluZS0xJyk7XG4gICAgbG5rU2lnbk91dCA9ICQoJyNuYXYtaXRlbS1zaWdub3V0Jyk7XG4gICAgbWVudURlcGFydG1lbnQgPSAkKCcjbmF2LXNob3AnKTtcblxuICAgIGtleXdvcmRTZWFyY2ggPSAkKCcjdHdvdGFic2VhcmNodGV4dGJveCcpO1xuXG4gICAgaW5wdXRTZWFyY2ggPSBhc3luYyhzZWFyY2hWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhzZWFyY2hWYWx1ZSk7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhcIlxcblwiKTtcbiAgICB9O1xuXG4gICAgZ2V0Q2FydENvdW50VGV4dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGNhcnQgbnVtYmVyIGlzOiAke2F3YWl0IHRoaXMubGFiZWxDYXJ0Q291bnQuZ2V0VGV4dCgpfWApO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5sYWJlbENhcnRDb3VudC5nZXRUZXh0KCk7XG4gICAgfTtcblxuICAgIGNob29zZUNhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5OiBzdHJpbmcsIHN1YkNhdGVnb3J5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy5tZW51RGVwYXJ0bWVudCk7XG5cbiAgICAgICAgbGV0IGNhdGVnb3J5RWxlbWVudCA9IGVsZW1lbnQoYnkueHBhdGgoYC8vZGl2W0BpZD0nbmF2LWZseW91dC1zaG9wQWxsJ10vL3NwYW5bdGV4dCgpPVwiJHtjYXRlZ29yeX1cIl1gKSk7XG4gICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKGNhdGVnb3J5RWxlbWVudCk7XG4gICAgICAgIHN1YkNhdGVnb3J5ID0gc3ViQ2F0ZWdvcnkucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpO1xuICAgICAgICBsZXQgc3ViQ2F0ZWdvcnlFbGVtZW50ID0gZWxlbWVudChieS54cGF0aChgLy9kaXZbQHN0eWxlPSdkaXNwbGF5OiBibG9jazsnXS8vc3Bhblt0ZXh0KCk9JyR7c3ViQ2F0ZWdvcnl9J11gKSk7XG4gICAgICAgIGF3YWl0IHN1YkNhdGVnb3J5RWxlbWVudC5jbGljaygpO1xuICAgIH07XG5cbn0iXX0=