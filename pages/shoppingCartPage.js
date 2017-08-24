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
            }
        });
    }
}
exports.ShoppingCartPage = ShoppingCartPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmdDYXJ0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob3BwaW5nQ2FydFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQywyQ0FBOEM7QUFFOUMsc0JBQThCLFNBQVEsbUJBQVE7SUFBOUM7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGNBQVMsR0FBRyxjQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsc0JBQWlCLEdBQUcsZUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFFL0MsY0FBUyxHQUFHO1lBQ1IsSUFBSSxxQkFBcUIsR0FBVSxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4RSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3hDLElBQUksYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsR0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsTUFBTSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBQSxDQUFBO0lBQ0wsQ0FBQztDQUFBO0FBYkQsNENBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi9iYXNlUGFnZVwiO1xuaW1wb3J0IHskLCBlbGVtZW50LCBieSwgJCR9IGZyb20gXCJwcm90cmFjdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0NhcnRQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIHVybCA9ICcnO1xuICAgIHBhZ2VMb2FkZWQgPSB0aGlzLmluRG9tKCQoJycpKTtcbiAgICBwYWdlVGl0bGUgPSAkKCdoMScpO1xuICAgIGFsbERlbGV0ZUNoZWNrYm94ID0gJCQoJ2lucHV0W3ZhbHVlPVwiRGVsZXRlXCJdJylcblxuICAgIGNsZWFyQ2FydCA9IGFzeW5jICgpPT57XG4gICAgICAgIGxldCB0b3RhbERlbGV0ZUNoZWNrYm94ZXM6bnVtYmVyID0gYXdhaXQgdGhpcy5hbGxEZWxldGVDaGVja2JveC5jb3VudCgpO1xuICAgICAgICBmb3IgKGxldCBpPXRvdGFsRGVsZXRlQ2hlY2tib3hlczsgaT4wOyBpLS0pe1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUVsZW1lbnQgPSBlbGVtZW50KGJ5LnhwYXRoKFwiKC8vaW5wdXRbQHZhbHVlPSdEZWxldGUnXSlbXCIraStcIl1cIikpO1xuICAgICAgICAgICAgYXdhaXQgZGVsZXRlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==