"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
// const Cucumber = require("cucumber");
const cucumber_1 = require("cucumber");
// const {defineSupportCode} = require("cucumber");
const fs = require("fs");
const mkdirp = require("mkdirp");
const reporter = require("cucumber-html-reporter");
const jsonReports = process.cwd() + "/reports/json";
const htmlReports = process.cwd() + "/reports/html";
cucumber_1.defineSupportCode(function ({ After, registerListener, Before }) {
    After(function (scenarioResult) {
        const world = this;
        if (scenarioResult.isFailed()) {
            return protractor_1.browser.takeScreenshot().then(function (screenShot) {
                // screenShot is a base-64 encoded PNG
                world.attach(screenShot, 'image/png');
            });
        }
    });
    Before(function () {
        protractor_1.browser.ignoreSynchronization = true;
        this.cleanup = [];
    });
    let cucumberReporteroptions = {
        theme: "bootstrap",
        // jsonFile: targetJson,
        // output: htmlReports + "/cucumber_reporter.html",
        output: "reports/html/amazon_report.html",
        jsonDir: jsonReports,
        reportSuiteAsScenarios: true,
        storeScreenShots: true
        // launchReport: true
    };
    let logFn = string => {
        if (!fs.existsSync(jsonReports)) {
            mkdirp.sync(jsonReports);
        }
        if (!fs.existsSync(htmlReports)) {
            mkdirp.sync(htmlReports);
        }
        try {
            let randomstring = require("randomstring");
            let name = jsonReports + "/protractor_report_" + randomstring.generate() + ".json";
            fs.writeFileSync(name, string);
            // fs.writeFileSync(targetJson, string);
            reporter.generate(cucumberReporteroptions); //invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                console.log("Failed to save cucumber test results to json file.");
                console.log(err);
            }
        }
    };
    let jsonformatter = new cucumber_1.JsonFormatter({
        log: logFn
    });
    // let jsonformatter = new Cucumber.JsonFormatter({
    //     log: logFn
    // });
    registerListener(jsonformatter);
});
//# sourceMappingURL=hooks.js.map