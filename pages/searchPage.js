const basePage = require('./basePage.js');
const Q = require('q');

let SearchPage = function () {
    this.searchbox = $('#search_text');
    this.searchResult = $('md-option:nth-child(1)');
    this.popupContainer = $('md-dialog-container');
    this.nameField = $('md-dialog-container md-input-container:nth-of-type(1) input');
    this.seatNumberField = $('md-dialog-container md-input-container:nth-of-type(2) input');
    this.allProjects = $$('md-option');
    this.cancelButton = $('md-dialog-container button:nth-of-type(1)');
    this.okButton = $('md-dialog-container button:nth-of-type(2)');
    this.seatNumberInput = $('input[placeholder="Seat Number"]');
    this.seatNumberErrorContainer = $('md-dialog-container span[class=warningLabel]');
    this.confirmationPopup = $('md-dialog-container div[class=confirmationDialog]');
    this.cancelConfirmationButton = $('md-dialog-container div[class=confirmationDialog] button:nth-of-type(1)');
    this.confirmationButton = $('md-dialog-container div[class=confirmationDialog] button:nth-of-type(2)');

    this.clickSearchBox = function () {
        this.searchbox.click();
    };

    this.typeNameToSearchBox = function (name) {
        this.searchbox.sendKeys(name);
    };

    this.clickFoundResult = function () {
        this.searchResult.click();
    };

    this.isPopupPresent = function () {
        let EC = protractor.ExpectedConditions;
        let present = browser.wait(EC.visibilityOf(this.popupContainer), 5 * 1000, 'Popup is not present').then(function () {
            return true;
        }).catch(function (err) {
            return false;
        });
        return present;
    };

    this.isConfirmationPopupPresent = function () {
        let EC = protractor.ExpectedConditions;
        let present = browser.wait(EC.visibilityOf(this.confirmationPopup), 5 * 1000, 'Popup is not present').then(function () {
            return true;
        }).catch(function (err) {
            return false;
        });
        return present;
    };

    this.isPopupGone = function () {
        let EC = protractor.ExpectedConditions;
        return browser.wait(EC.invisibilityOf(this.popupContainer), 5 * 1000, 'Popup is still present').then(function () {
            return true;
        }).catch(function (err) {
            return false;
        });
    };

    this.isNameNonEditable = function () {
        let state = this.nameField.getAttribute('disabled').then(function (value) {
            return value === 'true';
        });
        return state;
    };

    this.isSeatNumberNonEditable = function () {
        let state = this.seatNumberField.getAttribute('disabled').then(function (value) {
            return value === 'true';
        });
        return state;
    };

    this.clickSelectProject = function () {
        element(by.css('md-dialog-container md-select')).click();
    };

    this.isDropdownAlphabeticallyOrdered = function () {
        let self = this;

        this.clickSelectProject();

        let isProjectsSorted = this.getProjectListWithMap().then(function (res) {
            return self.isSorted(res);
        });
        return isProjectsSorted;
    };

    this.isSorted = function (arr) {
        let len = arr.length - 1;
        for (let i = 0; i < len; ++i) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    };

    /**
     * This method is doing the same thing as getProjectListWithMap.
     * Either of them can be used.
     * @returns {Promise}
     */
    this.getProjectListWithQ = function () {
        let self = this;
        return new Promise(function (resolve) {
            self.allProjects.then(function (arr) {
                let promises = [];
                for (let i = 0; i < arr.length; i++) {
                    self.waitForJs();
                    promises.push(arr[i].getText());
                }

                Q.all(promises).done(function (arrayOfTexts) {
                    resolve(arrayOfTexts)
                });
            });
        });
    };

    /**
     * This method is doing the same thing as getProjectListWithQ.
     * Either of them can be used.
     * the map method will return a deferred that will resolve with the values in an array
     * @returns {Promise}
     */
    this.getProjectListWithMap = function () {
        let self = this;
        return new Promise(function (resolve) {
            let options = self.allProjects.map(function (elm) {
                self.waitForJs();
                return elm.getText();
            });

            options.then(function (arrayOfTexts) {
                resolve(arrayOfTexts);
            });
        });
    };

    this.countProjectOptions = function () {
        return this.allProjects.count();
    };

    this.chooseNewProject = function () {
        let self = this;
        return new Promise(function (resolve) {
            self.allProjects.then(function (arr) {
                let promises = [];
                for (let i = 0; i < arr.length; i++) {
                    self.waitForJs();
                    let el = arr[i].getAttribute('aria-selected').then(function (aria) {
                        if (aria === 'true') {
                            if (i <= (arr.length - 2)) {
                                return arr[i + 1]
                            } else {
                                return arr[i - 1]
                            }
                        }
                    });
                    promises.push(el);
                }

                Q.all(promises).then(function (arrayOfObj) {
                    for (let i = 0; i < arrayOfObj.length; i++) {
                        if (arrayOfObj[i]) {
                            resolve(arrayOfObj[i]);
                            break;
                        }
                    }
                });
            });
        });
    };

    this.assignNewProject = function () {
        this.clickSelectProject();

        return this.chooseNewProject().then(function (newProject) {
            newProject.click();
            return newProject.getText();
        }).then(function (projectName) {
            /**
             * \( : match an opening parentheses
             * ( : begin capturing group
             * [^)]+: match one or more non ) characters
             * ) : end capturing group
             * \) : match closing parentheses
             */
            let regExp = /\(([^)]+)\)/;
            let matches = regExp.exec(projectName);
            let projectAbbreviation = matches[1];
            return projectAbbreviation;
        })
    };

    this.clickSaveButton = function () {
        this.okButton.click();
        this.waitForJs();
    };

    this.clickCancelButton = function () {
        this.cancelButton.click();
    };

    this.clickCancelOnConfirmationPopup = function () {
        this.cancelConfirmationButton.click();
    };

    this.clickConfirmOnConfirmationPopup = function () {
        this.confirmationButton.click();
    };

    this.typeSeatNumber = function (seatNumber) {
        let self = this;
        this.seatNumberInput.clear().then(function () {
            self.seatNumberInput.sendKeys(seatNumber).then(function () {
            });
        })
    };

    this.getSeatNumberErrorMessage = function () {
        this.waitForJs();
        return this.seatNumberErrorContainer.getText().then(function (text) {
            return text;
        })
    };
};

SearchPage.prototype = basePage;
module.exports = new SearchPage();
