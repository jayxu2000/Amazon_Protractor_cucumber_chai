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
        this.clickSignIn = () => __awaiter(this, void 0, void 0, function* () {
            if (yield this.toolTipSignInAccount.isPresent()) {
                yield this.mouseOver(this.toolTipSignInAccount);
                yield this.signInTooltip.click();
            }
            else {
                yield this.mouseOver(this.menuSignInAccount);
                yield this.signInAccount.click();
            }
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUFtRDtBQUNuRCwwRUFBbUQ7QUFFbkQsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsaUNBQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLHlCQUFvQixHQUFHLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztRQUN4RixrQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLENBQUM7UUFDN0Ysa0JBQWEsR0FBRyxjQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUM3RCxlQUFVLEdBQUcsY0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDcEMsbUJBQWMsR0FBRyxjQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxjQUFDLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUVyRSxrQkFBYSxHQUFHLGNBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTFDLGdCQUFXLEdBQUcsQ0FBTyxXQUFtQjtZQUNwQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFBLENBQUM7UUFFRixxQkFBZ0IsR0FBRztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEUsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUEsQ0FBQztRQUVGLG1CQUFjLEdBQUcsQ0FBTyxRQUFnQixFQUFFLFdBQW1CO1lBQ3pELE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDMUMsSUFBSSxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3RDLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5QyxJQUFJLGtCQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdHLE1BQU0sa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFBLENBQUM7UUFFRixnQ0FBMkIsR0FBRyxDQUFPLEtBQWE7WUFDOUMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQSxDQUFBO1FBRUQsZ0JBQVcsR0FBRztZQUNWLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDNUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNILE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JDLENBQUM7UUFDTCxDQUFDLENBQUEsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQWhERCw0QkFnREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHticm93c2VyLCAkLCBlbGVtZW50LCBieX0gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9wcm90cmFjdG9yLmN1Y3VtYmVyLmNvbmYnO1xuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG4gICAgdXJsID0gY29uZmlnLmJhc2VVcmw7XG4gICAgcGFnZUxvYWRlZCA9IHRoaXMuaW5Eb20oJCgnI3NlYXRfbWFwX2xhYmVsJykpO1xuICAgIGxhYmVsQ2FydENvdW50ID0gJCgnI25hdi1jYXJ0LWNvdW50Jyk7XG4gICAgbWVudVNpZ25JbkFjY291bnQgPSAkKCcjbmF2LWxpbmsteW91ckFjY291bnQnKTtcbiAgICB0b29sVGlwU2lnbkluQWNjb3VudCA9ICQoJyNuYXYtc2lnbmluLXRvb2x0aXAnKTtcbiAgICBzaWduSW5BY2NvdW50ID0gZWxlbWVudChieS54cGF0aChcIi8vZGl2W0BpZD0nbmF2LWFsLXNpZ25pbiddLy9zcGFuW3RleHQoKT0nU2lnbiBpbiddXCIpKTtcbiAgICBzaWduSW5Ub29sdGlwID0gZWxlbWVudChieS54cGF0aChcIi8vZGl2W0BpZD0nbmF2LXNpZ25pbi10b29sdGlwJ10vL3NwYW5bdGV4dCgpPSdTaWduIGluJ11cIikpO1xuICAgIHVzZXJGaXJzdE5hbWUgPSAkKCcjbmF2LWxpbmsteW91ckFjY291bnQgPiBzcGFuLm5hdi1saW5lLTEnKTtcbiAgICBsbmtTaWduT3V0ID0gJCgnI25hdi1pdGVtLXNpZ25vdXQnKTtcbiAgICBtZW51RGVwYXJ0bWVudCA9ICQoJyNuYXYtc2hvcCcpO1xuICAgIHN1YkNhdFRpdGxlID0gJCgnI21lcmNoYW5kaXNlZC1jb250ZW50PiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBoMScpO1xuXG4gICAga2V5d29yZFNlYXJjaCA9ICQoJyN0d290YWJzZWFyY2h0ZXh0Ym94Jyk7XG5cbiAgICBpbnB1dFNlYXJjaCA9IGFzeW5jIChzZWFyY2hWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhzZWFyY2hWYWx1ZSk7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhcIlxcblwiKTtcbiAgICB9O1xuXG4gICAgZ2V0Q2FydENvdW50VGV4dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGNhcnQgbnVtYmVyIGlzOiAke2F3YWl0IHRoaXMubGFiZWxDYXJ0Q291bnQuZ2V0VGV4dCgpfWApO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5sYWJlbENhcnRDb3VudC5nZXRUZXh0KCk7XG4gICAgfTtcblxuICAgIGNob29zZUNhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5OiBzdHJpbmcsIHN1YkNhdGVnb3J5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy5tZW51RGVwYXJ0bWVudCk7XG4gICAgICAgIGxldCBjYXRlZ29yeUVsZW1lbnQgPSBlbGVtZW50KGJ5LnhwYXRoKGAvL2RpdltAaWQ9J25hdi1mbHlvdXQtc2hvcEFsbCddLy9zcGFuW3RleHQoKT1cIiR7Y2F0ZWdvcnl9XCJdYCkpO1xuICAgICAgICBhd2FpdCB0aGlzLm1vdXNlT3ZlcihjYXRlZ29yeUVsZW1lbnQpO1xuICAgICAgICBzdWJDYXRlZ29yeSA9IHN1YkNhdGVnb3J5LnJlcGxhY2UoLycvZywgXCJcXCdcIik7XG4gICAgICAgIGxldCBzdWJDYXRlZ29yeUVsZW1lbnQgPSBlbGVtZW50KGJ5LnhwYXRoKGAvL2RpdltAc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIl0vL3NwYW5bdGV4dCgpPVwiJHtzdWJDYXRlZ29yeX1cIl1gKSk7XG4gICAgICAgIGF3YWl0IHN1YkNhdGVnb3J5RWxlbWVudC5jbGljaygpO1xuICAgIH07XG5cbiAgICBpc1N1YkNhdGVnb3J5UGFnZVRpdGxlRXhpc3QgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnN1YkNhdFRpdGxlLmlzUHJlc2VudCgpO1xuICAgIH1cblxuICAgIGNsaWNrU2lnbkluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZihhd2FpdCB0aGlzLnRvb2xUaXBTaWduSW5BY2NvdW50LmlzUHJlc2VudCgpKXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKHRoaXMudG9vbFRpcFNpZ25JbkFjY291bnQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zaWduSW5Ub29sdGlwLmNsaWNrKCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubW91c2VPdmVyKHRoaXMubWVudVNpZ25JbkFjY291bnQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zaWduSW5BY2NvdW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=