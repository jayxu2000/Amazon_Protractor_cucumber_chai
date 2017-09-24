"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const protractor_1 = require("protractor");
let _ = require('lodash');
let capabilities = {
    directConnect: false,
    //chrome, firefox, android... are the names of the capability instances
    chrome: {
        name: 'chrome',
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        seleniumAddress: 'http://localhost:4444/wd/hub'
    },
    firefox: {
        name: 'firefox',
        browserName: 'firefox',
        shardTestFiles: true,
        maxInstances: 2,
        seleniumAddress: 'http://localhost:4444/wd/hub'
    },
    android: {
        name: 'android',
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        'appium-version': '1.7.0',
        platformName: "Android",
        deviceName: 'Android Emulator',
        seleniumAddress: 'http://localhost:4723/wd/hub'
    }
};
exports.config = {
    allScriptsTimeout: 11000,
    baseUrl: 'https://www.amazon.ca/',
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    // specs: ["features/*/TC01_amazon_user_login_and_out.feature"],
    // specs: ["features/*/TC02_Amazon_product_test.feature"],
    specs: ["features/*/*.feature"],
    exclude: [""],
    // noGlobals: true,
    cucumberOpts: {
        strict: true,
        format: ["pretty"],
        require: ["stepDefinitions/*.js",
            'support/hooks.js'],
        // tags: '@smoke'
        tags: '@Regression'
        // tags: '@smoke or @Regression'
    },
    getMultiCapabilities: () => {
        /***
         * it need to offer the info of test capability instance
         * here user can pick the capability option from object 'capabilities' above
         * or use information called from CLI, like: protractor ... --params.browser="chrome,firefox,android"*
         */
        // let name_param = this.params.name || capabilities.chrome.name;
        let name_param = capabilities.chrome.name;
        let instanceName = name_param.split(',');
        // Using lodash open select the keys in `capabilities` corresponding
        // to the browsers param.
        return _(capabilities)
            .pick(instanceName)
            .values()
            .value();
    },
    /***
     * directConnect:
     * this line to run protractor directly in browser and not on selenium server - chrome by default
     * seleniumAddress:
     * this line to run protractor tests on standalone selenium server
     *  when you need to run other broswers like, ff, safari, you need use only seleniumAddress only.
     *  Note: if users want to run in specific cases, for instance, appium/mobile test need port number: 4723, we will
     *  define the seleniumAddress: separately in capability instances, instead of applying this property here as common
     *  place
     */
    // seleniumAddress: 'http://localhost:4723/wd/hub',
    // directConnect: true,
    onPrepare: () => {
        // let globals = require('protractor/globals');
        // browser.driver.manage().window().maximize();
        // this command doesn't work, using the following function to maximize browser window.
        setTimeout(() => {
            protractor_1.browser.driver.executeScript(() => {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            }).then((result) => {
                protractor_1.browser.driver.manage().window().setSize(result.width, result.height);
            });
        });
    }
};
//# sourceMappingURL=protractor.cucumber.conf.js.map