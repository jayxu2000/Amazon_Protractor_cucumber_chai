"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basePage_1 = require("./basePage");
const protractor_1 = require("protractor");
class SearchResultPage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = '';
        this.pageLoaded = this.inDom(protractor_1.$(''));
        this.click1stResult = () => {
        };
    }
}
exports.SearchResultPage = SearchResultPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUmVzdWx0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaFJlc3VsdFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBb0M7QUFDcEMsMkNBQTZCO0FBSTdCLHNCQUE4QixTQUFRLG1CQUFRO0lBQTlDOztRQUNJLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxlQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUvQixtQkFBYyxHQUFHO1FBRWpCLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FBQTtBQVBELDRDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4vYmFzZVBhZ2VcIjtcclxuaW1wb3J0IHskfSBmcm9tIFwicHJvdHJhY3RvclwiO1xyXG5pbXBvcnQgKiBhcyB3YWl0SGVscGVyIGZyb20gXCIuLi9oZWxwZXJzL3dhaXRfaGVscGVyXCI7XHJcbmltcG9ydCAqIGFzIFEgZnJvbSAncSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0UGFnZSBleHRlbmRzIEJhc2VQYWdle1xyXG4gICAgdXJsID0gJyc7XHJcbiAgICBwYWdlTG9hZGVkID0gdGhpcy5pbkRvbSgkKCcnKSk7XHJcblxyXG4gICAgY2xpY2sxc3RSZXN1bHQgPSAoKT0+e1xyXG5cclxuICAgIH07XHJcbn0iXX0=