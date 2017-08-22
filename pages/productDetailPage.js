"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basePage_1 = require("./basePage");
const protractor_1 = require("protractor");
class ProductDetailPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$(''));
    }
}
exports.ProductDetailPage = ProductDetailPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0RGV0YWlsUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFvQztBQUNwQywyQ0FBNkI7QUFJN0IsdUJBQStCLFNBQVEsbUJBQVE7SUFBL0M7O1FBQ0ksUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRW5DLENBQUM7Q0FBQTtBQUpELDhDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4vYmFzZVBhZ2VcIjtcclxuaW1wb3J0IHskfSBmcm9tIFwicHJvdHJhY3RvclwiO1xyXG5pbXBvcnQgKiBhcyB3YWl0SGVscGVyIGZyb20gXCIuLi9oZWxwZXJzL3dhaXRfaGVscGVyXCI7XHJcbmltcG9ydCAqIGFzIFEgZnJvbSAncSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZXtcclxuICAgIHVybCA9ICcnO1xyXG4gICAgcGFnZUxvYWRlZCA9IHRoaXMuaW5Eb20oJCgnJykpO1xyXG5cclxufSJdfQ==