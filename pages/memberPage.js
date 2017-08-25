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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbWJlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBNkI7QUFFN0IsZ0JBQXdCLFNBQVEsbUJBQVE7SUFBeEM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGNBQVMsR0FBRyxjQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFHLGNBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLGNBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxjQUFTLEdBQUcsY0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRS9CLFdBQU0sR0FBRyxDQUFPLEtBQVksRUFBRSxRQUFlO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFBLENBQUM7UUFFRixpQkFBWSxHQUFHO1lBQ1gsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUEsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQWxCRCxnQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xyXG5pbXBvcnQgeyR9IGZyb20gXCJwcm90cmFjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVtYmVyUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcclxuICAgIHVybCA9ICcnO1xyXG4gICAgcGFnZUxvYWRlZCA9IHRoaXMuaW5Eb20oJCgnJykpO1xyXG4gICAgcGFnZVRpdGxlID0gJCgnaDEnKTtcclxuICAgIGFjY291bnQgPSAkKCcjYXBfZW1haWwnKTtcclxuICAgIGFjY291bnRQYXNzd29yZCA9ICQoJyNhcF9wYXNzd29yZCcpO1xyXG4gICAgYnRuU2lnbkluID0gJCgnI3NpZ25JblN1Ym1pdCcpO1xyXG5cclxuICAgIHNpZ25JbiA9IGFzeW5jIChlbWFpbDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZykgPT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5zZW5kS2V5cyhlbWFpbCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50UGFzc3dvcmQuc2VuZEtleXMocGFzc3dvcmQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYnRuU2lnbkluLmNsaWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFBhZ2VUaXRsZSA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucGFnZVRpdGxlLmdldFRleHQoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=