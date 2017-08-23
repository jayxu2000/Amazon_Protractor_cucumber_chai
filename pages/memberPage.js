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
        this.account = protractor_1.$('#ap_email');
        this.accountPassword = protractor_1.$('#ap_password');
        this.btnSignIn = protractor_1.$('#signInSubmit');
        this.signIn = (email, password) => __awaiter(this, void 0, void 0, function* () {
            this.account.sendKeys(email);
            this.accountPassword.sendKeys(password);
            this.btnSignIn.click();
        });
    }
}
exports.MemberPage = MemberPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbWJlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBbUQ7QUFHbkQsZ0JBQXdCLFNBQVEsbUJBQVE7SUFBeEM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRS9CLFlBQU8sR0FBRyxjQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsb0JBQWUsR0FBRyxjQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEMsY0FBUyxHQUFHLGNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUUvQixXQUFNLEdBQUcsQ0FBTyxLQUFZLEVBQUUsUUFBZTtZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQSxDQUFDO0lBQ04sQ0FBQztDQUFBO0FBYkQsZ0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHticm93c2VyLCAkLCBlbGVtZW50LCBieX0gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9wcm90cmFjdG9yLmN1Y3VtYmVyLmNvbmYnO1xuXG5leHBvcnQgY2xhc3MgTWVtYmVyUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICB1cmwgPSAnJztcbiAgICBwYWdlTG9hZGVkID0gdGhpcy5pbkRvbSgkKCcnKSk7XG5cbiAgICBhY2NvdW50ID0gJCgnI2FwX2VtYWlsJyk7XG4gICAgYWNjb3VudFBhc3N3b3JkID0gJCgnI2FwX3Bhc3N3b3JkJyk7XG4gICAgYnRuU2lnbkluID0gJCgnI3NpZ25JblN1Ym1pdCcpO1xuXG4gICAgc2lnbkluID0gYXN5bmMgKGVtYWlsOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuYWNjb3VudC5zZW5kS2V5cyhlbWFpbCk7XG4gICAgICAgIHRoaXMuYWNjb3VudFBhc3N3b3JkLnNlbmRLZXlzKHBhc3N3b3JkKTtcbiAgICAgICAgdGhpcy5idG5TaWduSW4uY2xpY2soKTtcbiAgICB9O1xufSJdfQ==