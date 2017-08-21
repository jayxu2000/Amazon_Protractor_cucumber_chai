// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
import {browser, Config} from "protractor";

// let chai = require("chai");
// let chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
let _ = require('lodash');

declare var expect: any;


let capabilities = {
    directConnect: false,
    chrome: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1
    },

    firefox: {
        browserName: 'firefox',
        shardTestFiles: true,
        maxInstances: 2
    }
};

export let config: Config = {
// exports.config = {
    allScriptsTimeout: 11000,
    baseUrl: 'https://www.amazon.ca/',
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["features/*/01_Amazon_Offer_Add_to_Cart.feature"],
    // specs: ["features/*/*.feature"],
    exclude: [""],
    // noGlobals: true,
    cucumberOpts: {
        strict: true,
        format: ["pretty"],
        require: ["stepDefinitions/*.js",
            'support/hooks.js']
    },
    getMultiCapabilities: ()=> {
        let browsers_param = this.params.browsers || capabilities.chrome.browserName;
        let browsers = browsers_param.split(',');

        // Using lodash open select the keys in `capabilities` corresponding
        // open the browsers param.
        return _(capabilities)
            .pick(browsers)
            .values()
            .value();
    },
    // seleniumAddress: 'http://localhost:4444/wd/hub', // uncomment this line to run protractor tests on standalone selenium server
    directConnect: true, // uncomment this line to run protractor directly in browser and not on selenium server
    onPrepare: ()=> {
        let chai = require("chai");
        let chaiAsPromised = require("chai-as-promised");
        chai.use(chaiAsPromised);
        expect = chai.expect;
        // browser.driver.manage().window().maximize();
        // this command doesn't work, using the following function to maximize browser window.
        setTimeout(()=> {
            browser.driver.executeScript(()=> {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            }).then((result:any)=> {
                browser.driver.manage().window().setSize(result.width, result.height);
            });
        });
    }
};
