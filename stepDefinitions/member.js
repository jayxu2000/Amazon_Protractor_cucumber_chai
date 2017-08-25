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
    When(/^I sign in as account "(.*?)" with password "(.*?)"$/, (account, password) => __awaiter(this, void 0, void 0, function* () {
        yield memberPage.signIn(account, password);
    }));
    Then(/^the "(.*?)" page displays$/, (pageTitle) => __awaiter(this, void 0, void 0, function* () {
        yield expect(memberPage.getPageTitle()).to.eventually.include(pageTitle);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsdUNBQTJDO0FBQzNDLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLDRCQUFpQixDQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUM7SUFFN0QsSUFBSSxVQUFVLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFFOUMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyxzREFBc0QsRUFBRSxDQUFPLE9BQWMsRUFBRSxRQUFlO1FBQy9GLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFPLFNBQVM7UUFDaEQsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW1iZXJQYWdlfSBmcm9tICcuLi9wYWdlcy9tZW1iZXJQYWdlJztcbmltcG9ydCB7ZGVmaW5lU3VwcG9ydENvZGV9IGZyb20gJ2N1Y3VtYmVyJztcbmltcG9ydCAqIGFzIGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgKiBhcyBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcbmxldCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcblxuZGVmaW5lU3VwcG9ydENvZGUoICh7V2hlbiwgVGhlbiwgR2l2ZW4sIHNldERlZmF1bHRUaW1lb3V0LCBBZnRlcn0pID0+e1xuXG4gICAgbGV0IG1lbWJlclBhZ2U6IE1lbWJlclBhZ2UgPSBuZXcgTWVtYmVyUGFnZSgpO1xuXG4gICAgc2V0RGVmYXVsdFRpbWVvdXQoNjAgKiAxMDAwKTtcblxuICAgIFdoZW4oL15JIHNpZ24gaW4gYXMgYWNjb3VudCBcIiguKj8pXCIgd2l0aCBwYXNzd29yZCBcIiguKj8pXCIkLywgYXN5bmMgKGFjY291bnQ6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcpPT4ge1xuICAgICAgICBhd2FpdCBtZW1iZXJQYWdlLnNpZ25JbihhY2NvdW50LCBwYXNzd29yZCk7XG4gICAgfSk7XG5cbiAgICBUaGVuKC9edGhlIFwiKC4qPylcIiBwYWdlIGRpc3BsYXlzJC8sIGFzeW5jIChwYWdlVGl0bGUpPT4ge1xuICAgICAgICBhd2FpdCBleHBlY3QobWVtYmVyUGFnZS5nZXRQYWdlVGl0bGUoKSkudG8uZXZlbnR1YWxseS5pbmNsdWRlKHBhZ2VUaXRsZSk7XG4gICAgfSk7XG5cbn0pOyJdfQ==