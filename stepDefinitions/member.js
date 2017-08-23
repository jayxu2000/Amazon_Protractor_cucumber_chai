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
const memberPage_1 = require("../pages/memberPage");
const cucumber_1 = require("cucumber");
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, After }) => {
    let memberPage = new memberPage_1.MemberPage();
    setDefaultTimeout(60 * 1000);
    When(/^$/, (account, password) => __awaiter(this, void 0, void 0, function* () {
        yield memberPage.signIn(account, password);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsdUNBQTJDO0FBRzNDLDRCQUFpQixDQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUM7SUFFN0QsSUFBSSxVQUFVLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFFOUMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBTyxPQUFjLEVBQUUsUUFBZTtRQUM3QyxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVtYmVyUGFnZX0gZnJvbSAnLi4vcGFnZXMvbWVtYmVyUGFnZSc7XG5pbXBvcnQge2RlZmluZVN1cHBvcnRDb2RlfSBmcm9tICdjdWN1bWJlcic7XG5pbXBvcnQge2FzeW5jfSBmcm9tIFwicVwiO1xuXG5kZWZpbmVTdXBwb3J0Q29kZSggKHtXaGVuLCBUaGVuLCBHaXZlbiwgc2V0RGVmYXVsdFRpbWVvdXQsIEFmdGVyfSkgPT57XG5cbiAgICBsZXQgbWVtYmVyUGFnZTogTWVtYmVyUGFnZSA9IG5ldyBNZW1iZXJQYWdlKCk7XG5cbiAgICBzZXREZWZhdWx0VGltZW91dCg2MCAqIDEwMDApO1xuXG4gICAgV2hlbigvXiQvLCBhc3luYyAoYWNjb3VudDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZyk9PiB7XG4gICAgICAgIGF3YWl0IG1lbWJlclBhZ2Uuc2lnbkluKGFjY291bnQsIHBhc3N3b3JkKTtcbiAgICB9KTtcbn0pOyJdfQ==