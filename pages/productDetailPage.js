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
class ProductDetailPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$(''));
        this.buttonAddToCart = protractor_1.$('#add-to-cart-button');
        this.buttonPopOverClose = protractor_1.$('button[data-action=a-popover-close]');
        this.clickAddToCartButton = () => __awaiter(this, void 0, void 0, function* () {
            yield this.buttonAddToCart.click();
        });
        this.isButtonPopOverClosePresent = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.buttonPopOverClose.isPresent();
        });
        this.clickButtonPopOverClose = () => __awaiter(this, void 0, void 0, function* () {
            yield this.buttonPopOverClose.click();
        });
    }
}
exports.ProductDetailPage = ProductDetailPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0RGV0YWlsUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUE2QjtBQUs3Qix1QkFBK0IsU0FBUSxtQkFBUTtJQUEvQzs7UUFDSSxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0Isb0JBQWUsR0FBRyxjQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMzQyx1QkFBa0IsR0FBRyxjQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUU5RCx5QkFBb0IsR0FBRztZQUNuQixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUFBLENBQUM7UUFFRixnQ0FBMkIsR0FBRztZQUMxQixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFBLENBQUE7UUFFRCw0QkFBdUIsR0FBRztZQUN0QixNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUEsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQWxCRCw4Q0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHskfSBmcm9tIFwicHJvdHJhY3RvclwiO1xuaW1wb3J0ICogYXMgd2FpdEhlbHBlciBmcm9tIFwiLi4vaGVscGVycy93YWl0X2hlbHBlclwiO1xuaW1wb3J0ICogYXMgUSBmcm9tICdxJztcbmltcG9ydCB7YXN5bmN9IGZyb20gXCJxXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsUGFnZSBleHRlbmRzIEJhc2VQYWdle1xuICAgIHVybCA9ICcnO1xuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJycpKTtcbiAgICBidXR0b25BZGRUb0NhcnQgPSAkKCcjYWRkLXRvLWNhcnQtYnV0dG9uJyk7XG4gICAgYnV0dG9uUG9wT3ZlckNsb3NlID0gJCgnYnV0dG9uW2RhdGEtYWN0aW9uPWEtcG9wb3Zlci1jbG9zZV0nKTtcblxuICAgIGNsaWNrQWRkVG9DYXJ0QnV0dG9uID0gYXN5bmMgKCk9PntcbiAgICAgICAgYXdhaXQgdGhpcy5idXR0b25BZGRUb0NhcnQuY2xpY2soKTtcbiAgICB9O1xuXG4gICAgaXNCdXR0b25Qb3BPdmVyQ2xvc2VQcmVzZW50ID0gYXN5bmMgKCk9PntcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYnV0dG9uUG9wT3ZlckNsb3NlLmlzUHJlc2VudCgpO1xuICAgIH1cblxuICAgIGNsaWNrQnV0dG9uUG9wT3ZlckNsb3NlID0gYXN5bmMgKCk9PntcbiAgICAgICAgYXdhaXQgdGhpcy5idXR0b25Qb3BPdmVyQ2xvc2UuY2xpY2soKTtcbiAgICB9XG5cbn0iXX0=