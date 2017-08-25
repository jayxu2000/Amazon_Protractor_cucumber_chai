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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsdUNBQTJDO0FBQzNDLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLDRCQUFpQixDQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUM7SUFFN0QsSUFBSSxVQUFVLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFFOUMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyxzREFBc0QsRUFBRSxDQUFPLE9BQWMsRUFBRSxRQUFlO1FBQy9GLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFPLFNBQVM7UUFDaEQsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW1iZXJQYWdlfSBmcm9tICcuLi9wYWdlcy9tZW1iZXJQYWdlJztcclxuaW1wb3J0IHtkZWZpbmVTdXBwb3J0Q29kZX0gZnJvbSAnY3VjdW1iZXInO1xyXG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gJ2NoYWknO1xyXG5pbXBvcnQgKiBhcyBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcclxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xyXG5sZXQgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XHJcblxyXG5kZWZpbmVTdXBwb3J0Q29kZSggKHtXaGVuLCBUaGVuLCBHaXZlbiwgc2V0RGVmYXVsdFRpbWVvdXQsIEFmdGVyfSkgPT57XHJcblxyXG4gICAgbGV0IG1lbWJlclBhZ2U6IE1lbWJlclBhZ2UgPSBuZXcgTWVtYmVyUGFnZSgpO1xyXG5cclxuICAgIHNldERlZmF1bHRUaW1lb3V0KDYwICogMTAwMCk7XHJcblxyXG4gICAgV2hlbigvXkkgc2lnbiBpbiBhcyBhY2NvdW50IFwiKC4qPylcIiB3aXRoIHBhc3N3b3JkIFwiKC4qPylcIiQvLCBhc3luYyAoYWNjb3VudDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZyk9PiB7XHJcbiAgICAgICAgYXdhaXQgbWVtYmVyUGFnZS5zaWduSW4oYWNjb3VudCwgcGFzc3dvcmQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgVGhlbigvXnRoZSBcIiguKj8pXCIgcGFnZSBkaXNwbGF5cyQvLCBhc3luYyAocGFnZVRpdGxlKT0+IHtcclxuICAgICAgICBhd2FpdCBleHBlY3QobWVtYmVyUGFnZS5nZXRQYWdlVGl0bGUoKSkudG8uZXZlbnR1YWxseS5pbmNsdWRlKHBhZ2VUaXRsZSk7XHJcbiAgICB9KTtcclxuXHJcbn0pOyJdfQ==