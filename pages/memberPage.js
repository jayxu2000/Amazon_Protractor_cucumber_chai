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
class MemberPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$(''));
        this.pageTitle = protractor_1.$('h1');
        this.account = protractor_1.$('#ap_email');
        this.accountPassword = protractor_1.$('#ap_password');
        this.btnSignIn = protractor_1.$('#signInSubmit');
        this.signIn = (email, password) => __awaiter(this, void 0, void 0, function* () {
            this.account.sendKeys(email);
            this.accountPassword.sendKeys(password);
            this.btnSignIn.click();
        });
        this.getPageTitle = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.pageTitle.getText();
        });
    }
}
exports.MemberPage = MemberPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbWJlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBbUQ7QUFJbkQsZ0JBQXdCLFNBQVEsbUJBQVE7SUFBeEM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGNBQVMsR0FBRyxjQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFHLGNBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLGNBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxjQUFTLEdBQUcsY0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRS9CLFdBQU0sR0FBRyxDQUFPLEtBQVksRUFBRSxRQUFlO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFBLENBQUM7UUFFRixpQkFBWSxHQUFHO1lBQ1gsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUEsQ0FBQTtJQUNMLENBQUM7Q0FBQTtBQWpCRCxnQ0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHticm93c2VyLCAkLCBlbGVtZW50LCBieX0gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9wcm90cmFjdG9yLmN1Y3VtYmVyLmNvbmYnO1xuaW1wb3J0IHthc3luY30gZnJvbSBcInFcIjtcblxuZXhwb3J0IGNsYXNzIE1lbWJlclBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG4gICAgdXJsID0gJyc7XG4gICAgcGFnZUxvYWRlZCA9IHRoaXMuaW5Eb20oJCgnJykpO1xuICAgIHBhZ2VUaXRsZSA9ICQoJ2gxJyk7XG4gICAgYWNjb3VudCA9ICQoJyNhcF9lbWFpbCcpO1xuICAgIGFjY291bnRQYXNzd29yZCA9ICQoJyNhcF9wYXNzd29yZCcpO1xuICAgIGJ0blNpZ25JbiA9ICQoJyNzaWduSW5TdWJtaXQnKTtcblxuICAgIHNpZ25JbiA9IGFzeW5jIChlbWFpbDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmFjY291bnQuc2VuZEtleXMoZW1haWwpO1xuICAgICAgICB0aGlzLmFjY291bnRQYXNzd29yZC5zZW5kS2V5cyhwYXNzd29yZCk7XG4gICAgICAgIHRoaXMuYnRuU2lnbkluLmNsaWNrKCk7XG4gICAgfTtcblxuICAgIGdldFBhZ2VUaXRsZSA9IGFzeW5jICgpPT57XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBhZ2VUaXRsZS5nZXRUZXh0KCk7XG4gICAgfVxufSJdfQ==