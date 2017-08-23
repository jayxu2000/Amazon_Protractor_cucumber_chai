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
    }
    chooseCategory(category, subCategory) {
        this.menuDepartment.click();
        /*		String xpathCategory = "//span[@class = 'categories_tab--member' and contains(text(), '" + category + "')]";
         driver.findElement(By.xpath(xpathCategory)).click();
         driver.findElement(By.xpath(xpathCategory + "/following-sibling::ul/li/a[contains(text(),'" + subCategory + "')]")).click();*/
    }
    ;
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUE2QjtBQUM3QiwwRUFBbUQ7QUFJbkQsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsaUNBQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsY0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDN0QsZUFBVSxHQUFHLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFjLEdBQUcsY0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsY0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFMUMsZ0JBQVcsR0FBRyxDQUFNLFdBQW1CO1lBQ25DLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUEsQ0FBQztRQUVGLHFCQUFnQixHQUFHO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FBQSxDQUFDO0lBU04sQ0FBQztJQVBHLGNBQWMsQ0FBQyxRQUFnQixFQUFFLFdBQW1CO1FBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUI7O3VJQUUrSDtJQUNuSSxDQUFDO0lBQUEsQ0FBQztDQUVMO0FBM0JELDRCQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuL2Jhc2VQYWdlXCI7XG5pbXBvcnQgeyR9IGZyb20gXCJwcm90cmFjdG9yXCI7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vcHJvdHJhY3Rvci5jdWN1bWJlci5jb25mJztcbmltcG9ydCAqIGFzIHdhaXRIZWxwZXIgZnJvbSBcIi4uL2hlbHBlcnMvd2FpdF9oZWxwZXJcIjtcbmltcG9ydCAqIGFzIFEgZnJvbSAncSc7XG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICB1cmwgPSBjb25maWcuYmFzZVVybDtcbiAgICBwYWdlTG9hZGVkID0gdGhpcy5pbkRvbSgkKCcjc2VhdF9tYXBfbGFiZWwnKSk7XG4gICAgbGFiZWxDYXJ0Q291bnQgPSAkKCcjbmF2LWNhcnQtY291bnQnKTtcbiAgICBtZW51U2lnbkluQWNjb3VudCA9ICQoXCIjbmF2LWxpbmsteW91ckFjY291bnRcIik7XG4gICAgdXNlckZpcnN0TmFtZSA9ICQoJyNuYXYtbGluay15b3VyQWNjb3VudCA+IHNwYW4ubmF2LWxpbmUtMScpO1xuICAgIGxua1NpZ25PdXQgPSAkKCcjbmF2LWl0ZW0tc2lnbm91dCcpO1xuICAgIG1lbnVEZXBhcnRtZW50ID0gJCgnI25hdi1zaG9wJyk7XG4gICAga2V5d29yZFNlYXJjaCA9ICQoJyN0d290YWJzZWFyY2h0ZXh0Ym94Jyk7XG5cbiAgICBpbnB1dFNlYXJjaCA9IGFzeW5jKHNlYXJjaFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5rZXl3b3JkU2VhcmNoLnNlbmRLZXlzKHNlYXJjaFZhbHVlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5rZXl3b3JkU2VhcmNoLnNlbmRLZXlzKFwiXFxuXCIpO1xuICAgIH07XG5cbiAgICBnZXRDYXJ0Q291bnRUZXh0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2FydCBudW1iZXIgaXM6ICR7YXdhaXQgdGhpcy5sYWJlbENhcnRDb3VudC5nZXRUZXh0KCl9YCk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmxhYmVsQ2FydENvdW50LmdldFRleHQoKTtcbiAgICB9O1xuXG4gICAgY2hvb3NlQ2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZywgc3ViQ2F0ZWdvcnk6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1lbnVEZXBhcnRtZW50LmNsaWNrKCk7XG4gICAgICAgIC8qXHRcdFN0cmluZyB4cGF0aENhdGVnb3J5ID0gXCIvL3NwYW5bQGNsYXNzID0gJ2NhdGVnb3JpZXNfdGFiLS1tZW1iZXInIGFuZCBjb250YWlucyh0ZXh0KCksICdcIiArIGNhdGVnb3J5ICsgXCInKV1cIjtcbiAgICAgICAgIGRyaXZlci5maW5kRWxlbWVudChCeS54cGF0aCh4cGF0aENhdGVnb3J5KSkuY2xpY2soKTtcbiAgICAgICAgIGRyaXZlci5maW5kRWxlbWVudChCeS54cGF0aCh4cGF0aENhdGVnb3J5ICsgXCIvZm9sbG93aW5nLXNpYmxpbmc6OnVsL2xpL2FbY29udGFpbnModGV4dCgpLCdcIiArIHN1YkNhdGVnb3J5ICsgXCInKV1cIikpLmNsaWNrKCk7Ki9cbiAgICB9O1xuXG59Il19