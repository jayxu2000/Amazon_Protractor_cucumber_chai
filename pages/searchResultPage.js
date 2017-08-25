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
class SearchResultPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$('#s-result-info-bar'));
        this.firstSearchResult = protractor_1.$('li>div>div.a-fixed-left-grid>div>div');
        this.click1stResult = () => __awaiter(this, void 0, void 0, function* () {
            yield this.firstSearchResult.click();
        });
    }
}
exports.SearchResultPage = SearchResultPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUmVzdWx0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaFJlc3VsdFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBNkI7QUFFN0Isc0JBQThCLFNBQVEsbUJBQVE7SUFBOUM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDakQsc0JBQWlCLEdBQUksY0FBQyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFFL0QsbUJBQWMsR0FBRztZQUNiLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQSxDQUFDO0lBQ04sQ0FBQztDQUFBO0FBUkQsNENBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHskfSBmcm9tIFwicHJvdHJhY3RvclwiO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0UGFnZSBleHRlbmRzIEJhc2VQYWdle1xuICAgIHVybCA9ICcnO1xuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJyNzLXJlc3VsdC1pbmZvLWJhcicpKTtcbiAgICBmaXJzdFNlYXJjaFJlc3VsdCA9ICAkKCdsaT5kaXY+ZGl2LmEtZml4ZWQtbGVmdC1ncmlkPmRpdj5kaXYnKTtcblxuICAgIGNsaWNrMXN0UmVzdWx0ID0gYXN5bmMoKT0+e1xuICAgICAgICBhd2FpdCB0aGlzLmZpcnN0U2VhcmNoUmVzdWx0LmNsaWNrKCk7XG4gICAgfTtcbn0iXX0=