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
        this.clickAddToCartButton = () => __awaiter(this, void 0, void 0, function* () {
            yield this.buttonAddToCart.click();
        });
    }
}
exports.ProductDetailPage = ProductDetailPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0RGV0YWlsUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDJDQUE2QjtBQUs3Qix1QkFBK0IsU0FBUSxtQkFBUTtJQUEvQzs7UUFDSSxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0Isb0JBQWUsR0FBRyxjQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUUzQyx5QkFBb0IsR0FBRztZQUNuQixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUFBLENBQUM7SUFFTixDQUFDO0NBQUE7QUFURCw4Q0FTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuL2Jhc2VQYWdlXCI7XG5pbXBvcnQgeyR9IGZyb20gXCJwcm90cmFjdG9yXCI7XG5pbXBvcnQgKiBhcyB3YWl0SGVscGVyIGZyb20gXCIuLi9oZWxwZXJzL3dhaXRfaGVscGVyXCI7XG5pbXBvcnQgKiBhcyBRIGZyb20gJ3EnO1xuaW1wb3J0IHthc3luY30gZnJvbSBcInFcIjtcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxQYWdlIGV4dGVuZHMgQmFzZVBhZ2V7XG4gICAgdXJsID0gJyc7XG4gICAgcGFnZUxvYWRlZCA9IHRoaXMuaW5Eb20oJCgnJykpO1xuICAgIGJ1dHRvbkFkZFRvQ2FydCA9ICQoJyNhZGQtdG8tY2FydC1idXR0b24nKTtcblxuICAgIGNsaWNrQWRkVG9DYXJ0QnV0dG9uID0gYXN5bmMgKCk9PntcbiAgICAgICAgYXdhaXQgdGhpcy5idXR0b25BZGRUb0NhcnQuY2xpY2soKTtcbiAgICB9O1xuXG59Il19