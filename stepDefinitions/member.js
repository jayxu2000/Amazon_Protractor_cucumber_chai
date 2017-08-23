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
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, After }) => {
    let memberPage = new memberPage_1.MemberPage();
    setDefaultTimeout(60 * 1000);
    When(/^$/, (account, password) => __awaiter(this, void 0, void 0, function* () {
        yield memberPage.signIn(account, password);
    }));
    Then(/^the "(.*?)" page displays$/, (pageTitle) => __awaiter(this, void 0, void 0, function* () {
        yield expect(memberPage.getPageTitle()).to.eventually.contain(pageTitle);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsdUNBQTJDO0FBQzNDLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLDRCQUFpQixDQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUM7SUFFN0QsSUFBSSxVQUFVLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFFOUMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBTyxPQUFjLEVBQUUsUUFBZTtRQUM3QyxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBTyxTQUFTO1FBQ2hELE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVtYmVyUGFnZX0gZnJvbSAnLi4vcGFnZXMvbWVtYmVyUGFnZSc7XG5pbXBvcnQge2RlZmluZVN1cHBvcnRDb2RlfSBmcm9tICdjdWN1bWJlcic7XG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0ICogYXMgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5sZXQgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cbmRlZmluZVN1cHBvcnRDb2RlKCAoe1doZW4sIFRoZW4sIEdpdmVuLCBzZXREZWZhdWx0VGltZW91dCwgQWZ0ZXJ9KSA9PntcblxuICAgIGxldCBtZW1iZXJQYWdlOiBNZW1iZXJQYWdlID0gbmV3IE1lbWJlclBhZ2UoKTtcblxuICAgIHNldERlZmF1bHRUaW1lb3V0KDYwICogMTAwMCk7XG5cbiAgICBXaGVuKC9eJC8sIGFzeW5jIChhY2NvdW50OnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKT0+IHtcbiAgICAgICAgYXdhaXQgbWVtYmVyUGFnZS5zaWduSW4oYWNjb3VudCwgcGFzc3dvcmQpO1xuICAgIH0pO1xuXG4gICAgVGhlbigvXnRoZSBcIiguKj8pXCIgcGFnZSBkaXNwbGF5cyQvLCBhc3luYyAocGFnZVRpdGxlKT0+IHtcbiAgICAgICAgYXdhaXQgZXhwZWN0KG1lbWJlclBhZ2UuZ2V0UGFnZVRpdGxlKCkpLnRvLmV2ZW50dWFsbHkuY29udGFpbihwYWdlVGl0bGUpO1xuICAgIH0pO1xuXG5cbn0pOyJdfQ==