const basePage = require('./basePage.js');
let waitHelper = require('../helpers/wait_helper');
let q = require('q');

let HomePage = function () {
    this.url = '';
    this.pageLoaded = this.inDom($('#seat_map_label'));
    this.locationNameDropDownTitle = $('#seat_map_label span[class*=placeholder]');
    this.selectedLocationItem = $('#seat_map_label span.mat-select-value span.mat-select-value-text');
    this.firstLocationOptionInDropdown = $('#md-option-0');
    this.secondLocationOptionInDropdown = $('#md-option-1');
    this.chevronDown = $('#seat_map_label div.mat-select-trigger');
    this.inTransitBar = $('div.inTransitHeader');
    this.officeSeatsContainer = $('div.officeSeats');
    this.firstSeat = $('app-seats div[class=officeSeats] app-seat:nth-of-type(1)');

    this.selectLocationInDropdown = function (item) {
        this.chevronDown.click();

        switch (item) {
            case 'Maisonneuve':
                this.secondLocationOptionInDropdown.click();
                break;
            case "McGill College":
                this.firstLocationOptionInDropdown.click();
                break;
            default:
                throw new Error(item + " is not correct location")
        }
    };

    this.getLocationDropdownTitleText = function () {
        return this.locationNameDropDownTitle.getText();
    };

    this.getLocationItemText = function () {
        return this.selectedLocationItem.getText();
    };

    this.isEmployeePresent = function (lastname, firstname) {
        return element(by.xpath('//div[@class="capitalize"][div[contains(text(), "' + firstname + '")] and div[contains(text(), "' + lastname + ',")]]'))
            .isPresent();
    };

    this.getProjNameBaseOnSeatNr = function (seatNumber) {
        let projNameElement = element(by.xpath('//div[@class="seat-card-content"][div[normalize-space(text()) = "' + seatNumber
            + '"]]//div[@class="capitalize seat-card-project"]'));
        browser.wait(this.inDom(projNameElement), this.timeout.l);
        return projNameElement.getText();
    };

    this.getSeatColorOnSeatNr = function (seatNumber) {
        let seatCardElement = element(by.xpath('//div[@class="seat-card-content"][div[normalize-space(text()) = "' + seatNumber
            + '"]]'));
        browser.wait(this.inDom(seatCardElement), this.timeout.l);
        return seatCardElement.getAttribute("style");
    };

    this.getSeatNrBaseOnEmployeeName = function (lastname, firstname) {
        let seatNrElement = element(by.xpath('//div[div/div[contains(text(), "' + firstname + '")] and ' +
            'div/div[contains(text(), "' + lastname + ',")]]//following-sibling::div[@class="seat-card-number"]'));
        browser.wait(this.inDom(seatNrElement), this.timeout.l);
        return seatNrElement.getText();
    };

    this.verifySpecificSeatNrIsEmptySeat = function (seatNumber) {
        let seatCardElement = element(by.xpath('//div[contains(@class, "seat-card-content")][div[normalize-space(text()) = "' + seatNumber + '"]]'));
        browser.wait(this.inDom(seatCardElement), this.timeout.l);
        return seatCardElement.getAttribute("class");
    };

    this.verifySpecificSeatNrDisplayBlankSquare = function (seatNumber) {
        let seatCardElement = element(by.xpath('//div[contains(@class, "seat-card-content")][div[normalize-space(text()) = "' + seatNumber + '"]]'));
        browser.wait(this.inDom(seatCardElement), this.timeout.l);
        seatCardElement.getCssValue('background-image').then(function (css) {
            console.log("style : " + css);
        });
        return seatCardElement.getCssValue('background-image');
    };

    this.clickInTransit = function () {
        let arrow = element(by.xpath("//i[@class='material-icons arrow']"));
        arrow.click();
    };

    this.verifyInTransitBarCollapsed = function () {
        browser.wait(this.inDom(this.officeSeatsContainer), this.timeout.m);
        return this.officeSeatsContainer.getAttribute("style");
    };

    this.isLocationDisplayed = function (location) {
        let self = this;
        let seat;
        switch (location) {
            case "McGill College":
                seat = "1";
                break;
            case "Maisonneuve":
                seat = '101';
                break;
            default:
                throw new Error(location + " is not correct location name");
        }

        return browser.wait(waitHelper.seatHasSeatNumber(self.firstSeat, seat), 2000).then(function () {
            return true;
        }).catch(function () {
            console.error("Seat should have seat number " + seat);
            return false;
        });
    }
};

HomePage.prototype = basePage;
module.exports = new HomePage();
