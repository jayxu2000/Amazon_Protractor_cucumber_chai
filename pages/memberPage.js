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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbWJlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBNkI7QUFFN0IsZ0JBQXdCLFNBQVEsbUJBQVE7SUFBeEM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGNBQVMsR0FBRyxjQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFHLGNBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLGNBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxjQUFTLEdBQUcsY0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRS9CLFdBQU0sR0FBRyxDQUFPLEtBQVksRUFBRSxRQUFlO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFBLENBQUM7UUFFRixpQkFBWSxHQUFHO1lBQ1gsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUEsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQWxCRCxnQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHskfSBmcm9tIFwicHJvdHJhY3RvclwiO1xuXG5leHBvcnQgY2xhc3MgTWVtYmVyUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICB1cmwgPSAnJztcbiAgICBwYWdlTG9hZGVkID0gdGhpcy5pbkRvbSgkKCcnKSk7XG4gICAgcGFnZVRpdGxlID0gJCgnaDEnKTtcbiAgICBhY2NvdW50ID0gJCgnI2FwX2VtYWlsJyk7XG4gICAgYWNjb3VudFBhc3N3b3JkID0gJCgnI2FwX3Bhc3N3b3JkJyk7XG4gICAgYnRuU2lnbkluID0gJCgnI3NpZ25JblN1Ym1pdCcpO1xuXG4gICAgc2lnbkluID0gYXN5bmMgKGVtYWlsOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5zZW5kS2V5cyhlbWFpbCk7XG4gICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudFBhc3N3b3JkLnNlbmRLZXlzKHBhc3N3b3JkKTtcbiAgICAgICAgYXdhaXQgdGhpcy5idG5TaWduSW4uY2xpY2soKTtcbiAgICB9O1xuXG4gICAgZ2V0UGFnZVRpdGxlID0gYXN5bmMgKCk9PntcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucGFnZVRpdGxlLmdldFRleHQoKTtcbiAgICB9XG5cbn0iXX0=