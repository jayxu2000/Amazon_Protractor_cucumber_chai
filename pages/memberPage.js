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
            yield this.account.sendKeys(email);
            yield this.accountPassword.sendKeys(password);
            yield this.btnSignIn.click();
        });
        this.getPageTitle = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.pageTitle.getText();
        });
    }
}
exports.MemberPage = MemberPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbWJlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBbUQ7QUFHbkQsZ0JBQXdCLFNBQVEsbUJBQVE7SUFBeEM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGNBQVMsR0FBRyxjQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFHLGNBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLGNBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxjQUFTLEdBQUcsY0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRS9CLFdBQU0sR0FBRyxDQUFPLEtBQVksRUFBRSxRQUFlO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFBLENBQUM7UUFFRixpQkFBWSxHQUFHO1lBQ1gsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUEsQ0FBQTtJQUdMLENBQUM7Q0FBQTtBQW5CRCxnQ0FtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xyXG5pbXBvcnQge2Jyb3dzZXIsICQsIGVsZW1lbnQsIGJ5fSBmcm9tIFwicHJvdHJhY3RvclwiO1xyXG5pbXBvcnQge2FzeW5jfSBmcm9tIFwicVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbWJlclBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XHJcbiAgICB1cmwgPSAnJztcclxuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJycpKTtcclxuICAgIHBhZ2VUaXRsZSA9ICQoJ2gxJyk7XHJcbiAgICBhY2NvdW50ID0gJCgnI2FwX2VtYWlsJyk7XHJcbiAgICBhY2NvdW50UGFzc3dvcmQgPSAkKCcjYXBfcGFzc3dvcmQnKTtcclxuICAgIGJ0blNpZ25JbiA9ICQoJyNzaWduSW5TdWJtaXQnKTtcclxuXHJcbiAgICBzaWduSW4gPSBhc3luYyAoZW1haWw6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcpID0+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuc2VuZEtleXMoZW1haWwpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudFBhc3N3b3JkLnNlbmRLZXlzKHBhc3N3b3JkKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmJ0blNpZ25Jbi5jbGljaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRQYWdlVGl0bGUgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBhZ2VUaXRsZS5nZXRUZXh0KCk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==