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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbWJlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBbUQ7QUFHbkQsZ0JBQXdCLFNBQVEsbUJBQVE7SUFBeEM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGNBQVMsR0FBRyxjQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFHLGNBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLGNBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxjQUFTLEdBQUcsY0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRS9CLFdBQU0sR0FBRyxDQUFPLEtBQVksRUFBRSxRQUFlO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFBLENBQUM7UUFFRixpQkFBWSxHQUFHO1lBQ1gsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUEsQ0FBQTtJQUdMLENBQUM7Q0FBQTtBQW5CRCxnQ0FtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHticm93c2VyLCAkLCBlbGVtZW50LCBieX0gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7YXN5bmN9IGZyb20gXCJxXCI7XG5cbmV4cG9ydCBjbGFzcyBNZW1iZXJQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHVybCA9ICcnO1xuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJycpKTtcbiAgICBwYWdlVGl0bGUgPSAkKCdoMScpO1xuICAgIGFjY291bnQgPSAkKCcjYXBfZW1haWwnKTtcbiAgICBhY2NvdW50UGFzc3dvcmQgPSAkKCcjYXBfcGFzc3dvcmQnKTtcbiAgICBidG5TaWduSW4gPSAkKCcjc2lnbkluU3VibWl0Jyk7XG5cbiAgICBzaWduSW4gPSBhc3luYyAoZW1haWw6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5hY2NvdW50LnNlbmRLZXlzKGVtYWlsKTtcbiAgICAgICAgdGhpcy5hY2NvdW50UGFzc3dvcmQuc2VuZEtleXMocGFzc3dvcmQpO1xuICAgICAgICB0aGlzLmJ0blNpZ25Jbi5jbGljaygpO1xuICAgIH07XG5cbiAgICBnZXRQYWdlVGl0bGUgPSBhc3luYyAoKT0+e1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5wYWdlVGl0bGUuZ2V0VGV4dCgpO1xuICAgIH1cblxuXG59Il19