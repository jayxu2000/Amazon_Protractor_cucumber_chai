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
        this.userFirstNameAccount = protractor_1.$$('#nav-link-yourAccount > span.nav-line-1');
        this.userFirstNameTooltip = protractor_1.$$('#nav-link-accountList > span.nav-line-1');
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
            (yield this.userFirstNameAccount.isPresent()) ? (yield this.userFirstNameAccount.getText()) :
                (yield this.userFirstNameTooltip.getText());
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUF1RDtBQUN2RCwwRUFBbUQ7QUFFbkQsY0FBc0IsU0FBUSxtQkFBUTtJQUF0Qzs7UUFDSSxRQUFHLEdBQUcsaUNBQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLHlCQUFvQixHQUFHLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztRQUN4RixrQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLENBQUM7UUFDN0YseUJBQW9CLEdBQUcsZUFBRSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckUseUJBQW9CLEdBQUcsZUFBRSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckUsZUFBVSxHQUFHLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFjLEdBQUcsY0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsY0FBQyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFFckUsa0JBQWEsR0FBRyxjQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUUxQyxnQkFBVyxHQUFHLENBQU8sV0FBbUI7WUFDcEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQSxDQUFDO1FBRUYscUJBQWdCLEdBQUc7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFBLENBQUM7UUFFRixtQkFBYyxHQUFHLENBQU8sUUFBZ0IsRUFBRSxXQUFtQjtZQUN6RCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzFDLElBQUksZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxrQkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQWlELFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RyxNQUFNLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQSxDQUFDO1FBRUYsZ0NBQTJCLEdBQUcsQ0FBTyxLQUFhO1lBQzlDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUEsQ0FBQTtRQUVELGdCQUFXLEdBQUc7WUFDVixFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQzVDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQyxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsQ0FBQztRQUNMLENBQUMsQ0FBQSxDQUFBO1FBRUQsdUJBQWtCLEdBQUc7WUFDakIsQ0FBQyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RGLENBQUMsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUEsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQXJERCw0QkFxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHticm93c2VyLCAkLCBlbGVtZW50LCBieSwgJCR9IGZyb20gXCJwcm90cmFjdG9yXCI7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vcHJvdHJhY3Rvci5jdWN1bWJlci5jb25mJztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHVybCA9IGNvbmZpZy5iYXNlVXJsO1xuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJyNzZWF0X21hcF9sYWJlbCcpKTtcbiAgICBsYWJlbENhcnRDb3VudCA9ICQoJyNuYXYtY2FydC1jb3VudCcpO1xuICAgIG1lbnVTaWduSW5BY2NvdW50ID0gJCgnI25hdi1saW5rLXlvdXJBY2NvdW50Jyk7XG4gICAgdG9vbFRpcFNpZ25JbkFjY291bnQgPSAkKCcjbmF2LXNpZ25pbi10b29sdGlwJyk7XG4gICAgc2lnbkluQWNjb3VudCA9IGVsZW1lbnQoYnkueHBhdGgoXCIvL2RpdltAaWQ9J25hdi1hbC1zaWduaW4nXS8vc3Bhblt0ZXh0KCk9J1NpZ24gaW4nXVwiKSk7XG4gICAgc2lnbkluVG9vbHRpcCA9IGVsZW1lbnQoYnkueHBhdGgoXCIvL2RpdltAaWQ9J25hdi1zaWduaW4tdG9vbHRpcCddLy9zcGFuW3RleHQoKT0nU2lnbiBpbiddXCIpKTtcbiAgICB1c2VyRmlyc3ROYW1lQWNjb3VudCA9ICQkKCcjbmF2LWxpbmsteW91ckFjY291bnQgPiBzcGFuLm5hdi1saW5lLTEnKTtcbiAgICB1c2VyRmlyc3ROYW1lVG9vbHRpcCA9ICQkKCcjbmF2LWxpbmstYWNjb3VudExpc3QgPiBzcGFuLm5hdi1saW5lLTEnKTtcbiAgICBsbmtTaWduT3V0ID0gJCgnI25hdi1pdGVtLXNpZ25vdXQnKTtcbiAgICBtZW51RGVwYXJ0bWVudCA9ICQoJyNuYXYtc2hvcCcpO1xuICAgIHN1YkNhdFRpdGxlID0gJCgnI21lcmNoYW5kaXNlZC1jb250ZW50PiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBoMScpO1xuXG4gICAga2V5d29yZFNlYXJjaCA9ICQoJyN0d290YWJzZWFyY2h0ZXh0Ym94Jyk7XG5cbiAgICBpbnB1dFNlYXJjaCA9IGFzeW5jIChzZWFyY2hWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhzZWFyY2hWYWx1ZSk7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhcIlxcblwiKTtcbiAgICB9O1xuXG4gICAgZ2V0Q2FydENvdW50VGV4dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGNhcnQgbnVtYmVyIGlzOiAke2F3YWl0IHRoaXMubGFiZWxDYXJ0Q291bnQuZ2V0VGV4dCgpfWApO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5sYWJlbENhcnRDb3VudC5nZXRUZXh0KCk7XG4gICAgfTtcblxuICAgIGNob29zZUNhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5OiBzdHJpbmcsIHN1YkNhdGVnb3J5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5tb3VzZU92ZXIodGhpcy5tZW51RGVwYXJ0bWVudCk7XG4gICAgICAgIGxldCBjYXRlZ29yeUVsZW1lbnQgPSBlbGVtZW50KGJ5LnhwYXRoKGAvL2RpdltAaWQ9J25hdi1mbHlvdXQtc2hvcEFsbCddLy9zcGFuW3RleHQoKT1cIiR7Y2F0ZWdvcnl9XCJdYCkpO1xuICAgICAgICBhd2FpdCB0aGlzLm1vdXNlT3ZlcihjYXRlZ29yeUVsZW1lbnQpO1xuICAgICAgICBzdWJDYXRlZ29yeSA9IHN1YkNhdGVnb3J5LnJlcGxhY2UoLycvZywgXCJcXCdcIik7XG4gICAgICAgIGxldCBzdWJDYXRlZ29yeUVsZW1lbnQgPSBlbGVtZW50KGJ5LnhwYXRoKGAvL2RpdltAc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIl0vL3NwYW5bdGV4dCgpPVwiJHtzdWJDYXRlZ29yeX1cIl1gKSk7XG4gICAgICAgIGF3YWl0IHN1YkNhdGVnb3J5RWxlbWVudC5jbGljaygpO1xuICAgIH07XG5cbiAgICBpc1N1YkNhdGVnb3J5UGFnZVRpdGxlRXhpc3QgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnN1YkNhdFRpdGxlLmlzUHJlc2VudCgpO1xuICAgIH1cblxuICAgIGNsaWNrU2lnbkluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZihhd2FpdCB0aGlzLnRvb2xUaXBTaWduSW5BY2NvdW50LmlzUHJlc2VudCgpKXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2lnbkluVG9vbHRpcC5jbGljaygpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm1vdXNlT3Zlcih0aGlzLm1lbnVTaWduSW5BY2NvdW50KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2lnbkluQWNjb3VudC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWVtYmVyRmlyc3ROYW1lID0gYXN5bmMoKT0+e1xuICAgICAgICAoYXdhaXQgdGhpcy51c2VyRmlyc3ROYW1lQWNjb3VudC5pc1ByZXNlbnQoKSk/IChhd2FpdCB0aGlzLnVzZXJGaXJzdE5hbWVBY2NvdW50LmdldFRleHQoKSk6XG4gICAgICAgICAgICAoYXdhaXQgdGhpcy51c2VyRmlyc3ROYW1lVG9vbHRpcC5nZXRUZXh0KCkpO1xuICAgIH1cblxufSJdfQ==