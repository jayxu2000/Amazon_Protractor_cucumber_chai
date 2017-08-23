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
const searchResultPage_1 = require("../pages/searchResultPage");
const cucumber_1 = require("cucumber");
cucumber_1.defineSupportCode(({ When, Then, Given, setDefaultTimeout, After }) => {
    let searchResultPage = new searchResultPage_1.SearchResultPage();
    setDefaultTimeout(60 * 1000);
    When(/^I select the first item in list$/, () => __awaiter(this, void 0, void 0, function* () {
        yield searchResultPage.click1stResult();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsdUNBQTJDO0FBSTNDLDRCQUFpQixDQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUM7SUFFN0QsSUFBSSxnQkFBZ0IsR0FBcUIsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0lBRWhFLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUU3QixJQUFJLENBQUMsbUNBQW1DLEVBQUU7UUFDdEMsTUFBTSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlYXJjaFJlc3VsdFBhZ2V9IGZyb20gJy4uL3BhZ2VzL3NlYXJjaFJlc3VsdFBhZ2UnO1xuaW1wb3J0IHtkZWZpbmVTdXBwb3J0Q29kZX0gZnJvbSAnY3VjdW1iZXInO1xuaW1wb3J0IHticm93c2VyfSBmcm9tIFwicHJvdHJhY3RvclwiO1xuXG5cbmRlZmluZVN1cHBvcnRDb2RlKCAoe1doZW4sIFRoZW4sIEdpdmVuLCBzZXREZWZhdWx0VGltZW91dCwgQWZ0ZXJ9KSA9PntcblxuICAgIGxldCBzZWFyY2hSZXN1bHRQYWdlOiBTZWFyY2hSZXN1bHRQYWdlID0gbmV3IFNlYXJjaFJlc3VsdFBhZ2UoKTtcblxuICAgIHNldERlZmF1bHRUaW1lb3V0KDYwICogMTAwMCk7XG5cbiAgICBXaGVuKC9eSSBzZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gbGlzdCQvLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHNlYXJjaFJlc3VsdFBhZ2UuY2xpY2sxc3RSZXN1bHQoKTtcbiAgICB9KTtcblxufSk7Il19