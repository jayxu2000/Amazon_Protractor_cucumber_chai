// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var _ = require('lodash');

var capabilities = {
    directConnect: false,
    chrome: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    },

    firefox: {
        browserName: 'firefox',
        shardTestFiles: true,
        maxInstances: 2
    }
};

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/specs/sprint1_9.js'
    ],
    baseUrl: 'http://qcvdevmicsp01:8080/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {
        }
    },
    getMultiCapabilities: function () {
        var browsers_param = this.params.browsers || capabilities.chrome.browserName;
        var browsers = browsers_param.split(',');

        // Using lodash open select the keys in `capabilities` corresponding
        // open the browsers param.
        return _(capabilities)
            .pick(browsers)
            .values()
            .value();
    },
    // seleniumAddress: 'http://localhost:4444/wd/hub', // uncomment this line to run protractor tests on standalone selenium server
    directConnect: true, // uncomment this line to run protractor directly in browser and not on selenium server
    onPrepare: function () {
        // var AllureReporter = require('jasmine-allure-reporter');
        // jasmine.getEnv().addReporter(new AllureReporter({
        //     resultsDir: './node_modules/jasmine-allure-reporter/allure-results'
        // }));
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
        // jasmine.getEnv().afterEach(function (done) {
        //     browser.takeScreenshot().then(function (png) {
        //         allure.createAttachment('Screenshot', function () {
        //             return new Buffer(png, 'base64')
        //         }, 'image/png')();
        //         done();
        //     })
        // });

        // Cteate xml file for protractor-html-reporter
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports',
            filePrefix: 'xmlresults'
        }));
        var fs = require('fs-extra');

        // create an empty folder for screenshots
        fs.emptyDir('./reports/screenshots/', function (err) {
            if(err) console.log(err);
        });

        // take a snapshot on error
        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('./reports/screenshots/' + browserName + '-' + result.fullName+ '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    },
    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');

            var HTMLReport = require('protractor-html-reporter');

            testConfig = {
                reportTitle: 'Test Execution Report',
                outputPath: './reports',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from('reports/xmlresults.xml', testConfig);
        });
    }
};
