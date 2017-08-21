"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basePage_1 = require("./basePage");
const protractor_1 = require("protractor");
const protractor_cucumber_conf_1 = require("../protractor.cucumber.conf");
class HomePage extends basePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.url = protractor_cucumber_conf_1.config.baseUrl;
        this.pageLoaded = this.inDom(protractor_1.$('#seat_map_label'));
        this.labelCartCount = protractor_1.$("#nav-cart-count");
        this.menuSignInAccount = protractor_1.$("#nav-link-yourAccount");
        this.userFirstName = protractor_1.$("#nav-link-yourAccount > span.nav-line-1");
        this.lnkSignOut = protractor_1.$("#nav-item-signout");
        this.menuDepartment = protractor_1.$("#nav-shop");
        this.keywordSearch = protractor_1.$("#twotabsearchtextbox");
        this.inputSearch = (searchValue) => {
            this.keywordSearch.sendKeys(searchValue);
            this.keywordSearch.sendKeys("\n");
        };
        this.getCartCountText = () => {
            this.labelCartCount.getText().then(value => {
                console.log(`cart number is ${value}`);
            });
            return this.labelCartCount.getText();
        };
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFvQztBQUNwQywyQ0FBNkI7QUFDN0IsMEVBQXFEO0FBSXJELGNBQXNCLFNBQVEsbUJBQVE7SUFBdEM7O1FBQ0ksUUFBRyxHQUFHLGlDQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDOUMsbUJBQWMsR0FBRyxjQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0QyxzQkFBaUIsR0FBRyxjQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMvQyxrQkFBYSxHQUFHLGNBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQzdELGVBQVUsR0FBRyxjQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNwQyxtQkFBYyxHQUFHLGNBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxrQkFBYSxHQUFHLGNBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTFDLGdCQUFXLEdBQUcsQ0FBQyxXQUFrQjtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUM7UUFFRixxQkFBZ0IsR0FBRztZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDMUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUE7SUFHTCxDQUFDO0NBQUE7QUF2QkQsNEJBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4vYmFzZVBhZ2VcIjtcbmltcG9ydCB7JH0gZnJvbSBcInByb3RyYWN0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL3Byb3RyYWN0b3IuY3VjdW1iZXIuY29uZic7XG5pbXBvcnQgKiBhcyB3YWl0SGVscGVyIGZyb20gXCIuLi9oZWxwZXJzL3dhaXRfaGVscGVyXCI7XG5pbXBvcnQgKiBhcyBRIGZyb20gJ3EnO1xuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBCYXNlUGFnZXtcbiAgICB1cmwgPSBjb25maWcuYmFzZVVybDtcbiAgICBwYWdlTG9hZGVkID0gdGhpcy5pbkRvbSgkKCcjc2VhdF9tYXBfbGFiZWwnKSk7XG4gICAgbGFiZWxDYXJ0Q291bnQgPSAkKFwiI25hdi1jYXJ0LWNvdW50XCIpO1xuICAgIG1lbnVTaWduSW5BY2NvdW50ID0gJChcIiNuYXYtbGluay15b3VyQWNjb3VudFwiKTtcbiAgICB1c2VyRmlyc3ROYW1lID0gJChcIiNuYXYtbGluay15b3VyQWNjb3VudCA+IHNwYW4ubmF2LWxpbmUtMVwiKTtcbiAgICBsbmtTaWduT3V0ID0gJChcIiNuYXYtaXRlbS1zaWdub3V0XCIpO1xuICAgIG1lbnVEZXBhcnRtZW50ID0gJChcIiNuYXYtc2hvcFwiKTtcbiAgICBrZXl3b3JkU2VhcmNoID0gJChcIiN0d290YWJzZWFyY2h0ZXh0Ym94XCIpO1xuXG4gICAgaW5wdXRTZWFyY2ggPSAoc2VhcmNoVmFsdWU6c3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhzZWFyY2hWYWx1ZSk7XG4gICAgICAgIHRoaXMua2V5d29yZFNlYXJjaC5zZW5kS2V5cyhcIlxcblwiKTtcbiAgICB9O1xuXG4gICAgZ2V0Q2FydENvdW50VGV4dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5sYWJlbENhcnRDb3VudC5nZXRUZXh0KCkudGhlbih2YWx1ZT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGNhcnQgbnVtYmVyIGlzICR7dmFsdWV9YClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsQ2FydENvdW50LmdldFRleHQoKTtcbiAgICB9XG5cblxufSJdfQ==