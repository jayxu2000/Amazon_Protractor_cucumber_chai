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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0RGV0YWlsUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUE2QjtBQUU3Qix1QkFBK0IsU0FBUSxtQkFBUTtJQUEvQzs7UUFDSSxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0Isb0JBQWUsR0FBRyxjQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMzQyx1QkFBa0IsR0FBRyxjQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUU5RCx5QkFBb0IsR0FBRztZQUNuQixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUFBLENBQUM7UUFFRixnQ0FBMkIsR0FBRztZQUMxQixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFBLENBQUE7UUFFRCw0QkFBdUIsR0FBRztZQUN0QixNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUEsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQWxCRCw4Q0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHskfSBmcm9tIFwicHJvdHJhY3RvclwiO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZXtcbiAgICB1cmwgPSAnJztcbiAgICBwYWdlTG9hZGVkID0gdGhpcy5pbkRvbSgkKCcnKSk7XG4gICAgYnV0dG9uQWRkVG9DYXJ0ID0gJCgnI2FkZC10by1jYXJ0LWJ1dHRvbicpO1xuICAgIGJ1dHRvblBvcE92ZXJDbG9zZSA9ICQoJ2J1dHRvbltkYXRhLWFjdGlvbj1hLXBvcG92ZXItY2xvc2VdJyk7XG5cbiAgICBjbGlja0FkZFRvQ2FydEJ1dHRvbiA9IGFzeW5jICgpPT57XG4gICAgICAgIGF3YWl0IHRoaXMuYnV0dG9uQWRkVG9DYXJ0LmNsaWNrKCk7XG4gICAgfTtcblxuICAgIGlzQnV0dG9uUG9wT3ZlckNsb3NlUHJlc2VudCA9IGFzeW5jICgpPT57XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmJ1dHRvblBvcE92ZXJDbG9zZS5pc1ByZXNlbnQoKTtcbiAgICB9XG5cbiAgICBjbGlja0J1dHRvblBvcE92ZXJDbG9zZSA9IGFzeW5jICgpPT57XG4gICAgICAgIGF3YWl0IHRoaXMuYnV0dG9uUG9wT3ZlckNsb3NlLmNsaWNrKCk7XG4gICAgfVxuXG59Il19