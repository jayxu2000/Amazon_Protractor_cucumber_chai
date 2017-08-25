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
class ShoppingCartPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$(''));
        this.pageTitle = protractor_1.$('h1');
        this.allDeleteCheckbox = protractor_1.$$('input[value="Delete"]');
        this.clearCart = () => __awaiter(this, void 0, void 0, function* () {
            let totalDeleteCheckboxes = yield this.allDeleteCheckbox.count();
            for (let i = totalDeleteCheckboxes; i > 0; i--) {
                let deleteElement = protractor_1.element(protractor_1.by.xpath("(//input[@value='Delete'])[" + i + "]"));
                yield deleteElement.click();
                yield protractor_1.browser.sleep(500);
            }
        });
    }
}
exports.ShoppingCartPage = ShoppingCartPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmdDYXJ0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob3BwaW5nQ2FydFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBdUQ7QUFFdkQsc0JBQThCLFNBQVEsbUJBQVE7SUFBOUM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGNBQVMsR0FBRyxjQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsc0JBQWlCLEdBQUcsZUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFFL0MsY0FBUyxHQUFHO1lBQ1IsSUFBSSxxQkFBcUIsR0FBVSxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4RSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3hDLElBQUksYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsR0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsTUFBTSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUMsQ0FBQSxDQUFBO0lBQ0wsQ0FBQztDQUFBO0FBZEQsNENBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xyXG5pbXBvcnQgeyQsIGVsZW1lbnQsIGJ5LCAkJCwgYnJvd3Nlcn0gZnJvbSBcInByb3RyYWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0NhcnRQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xyXG4gICAgdXJsID0gJyc7XHJcbiAgICBwYWdlTG9hZGVkID0gdGhpcy5pbkRvbSgkKCcnKSk7XHJcbiAgICBwYWdlVGl0bGUgPSAkKCdoMScpO1xyXG4gICAgYWxsRGVsZXRlQ2hlY2tib3ggPSAkJCgnaW5wdXRbdmFsdWU9XCJEZWxldGVcIl0nKVxyXG5cclxuICAgIGNsZWFyQ2FydCA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgbGV0IHRvdGFsRGVsZXRlQ2hlY2tib3hlczpudW1iZXIgPSBhd2FpdCB0aGlzLmFsbERlbGV0ZUNoZWNrYm94LmNvdW50KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaT10b3RhbERlbGV0ZUNoZWNrYm94ZXM7IGk+MDsgaS0tKXtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZUVsZW1lbnQgPSBlbGVtZW50KGJ5LnhwYXRoKFwiKC8vaW5wdXRbQHZhbHVlPSdEZWxldGUnXSlbXCIraStcIl1cIikpO1xyXG4gICAgICAgICAgICBhd2FpdCBkZWxldGVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGJyb3dzZXIuc2xlZXAoNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=