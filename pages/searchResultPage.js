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
        this.firstSearchResult = protractor_1.$('#result_1>div>div.a-fixed-left-grid>div>div');
        this.click1stResult = () => __awaiter(this, void 0, void 0, function* () {
            yield this.firstSearchResult.click();
        });
    }
}
exports.SearchResultPage = SearchResultPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUmVzdWx0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaFJlc3VsdFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBNkI7QUFJN0Isc0JBQThCLFNBQVEsbUJBQVE7SUFBOUM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDakQsc0JBQWlCLEdBQUksY0FBQyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFFdEUsbUJBQWMsR0FBRztZQUNiLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQSxDQUFDO0lBQ04sQ0FBQztDQUFBO0FBUkQsNENBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xyXG5pbXBvcnQgeyR9IGZyb20gXCJwcm90cmFjdG9yXCI7XHJcbmltcG9ydCAqIGFzIHdhaXRIZWxwZXIgZnJvbSBcIi4uL2hlbHBlcnMvd2FpdF9oZWxwZXJcIjtcclxuaW1wb3J0ICogYXMgUSBmcm9tICdxJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRQYWdlIGV4dGVuZHMgQmFzZVBhZ2V7XHJcbiAgICB1cmwgPSAnJztcclxuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJyNzLXJlc3VsdC1pbmZvLWJhcicpKTtcclxuICAgIGZpcnN0U2VhcmNoUmVzdWx0ID0gICQoJyNyZXN1bHRfMT5kaXY+ZGl2LmEtZml4ZWQtbGVmdC1ncmlkPmRpdj5kaXYnKTtcclxuXHJcbiAgICBjbGljazFzdFJlc3VsdCA9IGFzeW5jKCk9PntcclxuICAgICAgICBhd2FpdCB0aGlzLmZpcnN0U2VhcmNoUmVzdWx0LmNsaWNrKCk7XHJcbiAgICB9O1xyXG59Il19