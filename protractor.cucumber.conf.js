"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const protractor_1 = require("protractor");
// let chai = require("chai");
// let chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
let _ = require('lodash');
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
exports.config = {
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
    getMultiCapabilities: () => {
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
    directConnect: true,
    onPrepare: () => {
        let chai = require("chai");
        let chaiAsPromised = require("chai-as-promised");
        chai.use(chaiAsPromised);
        expect = chai.expect;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQStEO0FBQy9ELGtFQUFrRTtBQUNsRSwyQ0FBMkM7QUFFM0MsOEJBQThCO0FBQzlCLG9EQUFvRDtBQUNwRCw0QkFBNEI7QUFDNUIsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBSzFCLElBQUksWUFBWSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEtBQUs7SUFDcEIsTUFBTSxFQUFFO1FBQ0osV0FBVyxFQUFFLFFBQVE7UUFDckIsY0FBYyxFQUFFLElBQUk7UUFDcEIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFFRCxPQUFPLEVBQUU7UUFDTCxXQUFXLEVBQUUsU0FBUztRQUN0QixjQUFjLEVBQUUsSUFBSTtRQUNwQixZQUFZLEVBQUUsQ0FBQztLQUNsQjtDQUNKLENBQUM7QUFFUyxRQUFBLE1BQU0sR0FBVztJQUM1QixxQkFBcUI7SUFDakIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixPQUFPLEVBQUUsd0JBQXdCO0lBQ2pDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELEtBQUssRUFBRSxDQUFDLGdEQUFnRCxDQUFDO0lBQ3pELG1DQUFtQztJQUNuQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDYixtQkFBbUI7SUFDbkIsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDbEIsT0FBTyxFQUFFLENBQUMsc0JBQXNCO1lBQzVCLGtCQUFrQixDQUFDO0tBQzFCO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDbEIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDN0UsSUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV6QyxvRUFBb0U7UUFDcEUsMkJBQTJCO1FBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDZCxNQUFNLEVBQUU7YUFDUixLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0QsZ0lBQWdJO0lBQ2hJLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRztRQUNSLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLCtDQUErQztRQUMvQyxzRkFBc0Y7UUFDdEYsVUFBVSxDQUFDO1lBQ1Asb0JBQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUN6QixNQUFNLENBQUM7b0JBQ0gsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVTtvQkFDL0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVztpQkFDcEMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVU7Z0JBQ2Ysb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFByb3RyYWN0b3IgY29uZmlndXJhdGlvbiBmaWxlLCBzZWUgbGluayBmb3IgbW9yZSBpbmZvcm1hdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3Rvci9ibG9iL21hc3Rlci9saWIvY29uZmlnLnRzXG5pbXBvcnQge2Jyb3dzZXIsIENvbmZpZ30gZnJvbSBcInByb3RyYWN0b3JcIjtcblxuLy8gbGV0IGNoYWkgPSByZXF1aXJlKFwiY2hhaVwiKTtcbi8vIGxldCBjaGFpQXNQcm9taXNlZCA9IHJlcXVpcmUoXCJjaGFpLWFzLXByb21pc2VkXCIpO1xuLy8gY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuZGVjbGFyZSB2YXIgZXhwZWN0OiBhbnk7XG5cblxubGV0IGNhcGFiaWxpdGllcyA9IHtcbiAgICBkaXJlY3RDb25uZWN0OiBmYWxzZSxcbiAgICBjaHJvbWU6IHtcbiAgICAgICAgYnJvd3Nlck5hbWU6ICdjaHJvbWUnLFxuICAgICAgICBzaGFyZFRlc3RGaWxlczogdHJ1ZSxcbiAgICAgICAgbWF4SW5zdGFuY2VzOiAxXG4gICAgfSxcblxuICAgIGZpcmVmb3g6IHtcbiAgICAgICAgYnJvd3Nlck5hbWU6ICdmaXJlZm94JyxcbiAgICAgICAgc2hhcmRUZXN0RmlsZXM6IHRydWUsXG4gICAgICAgIG1heEluc3RhbmNlczogMlxuICAgIH1cbn07XG5cbmV4cG9ydCBsZXQgY29uZmlnOiBDb25maWcgPSB7XG4vLyBleHBvcnRzLmNvbmZpZyA9IHtcbiAgICBhbGxTY3JpcHRzVGltZW91dDogMTEwMDAsXG4gICAgYmFzZVVybDogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jYS8nLFxuICAgIGZyYW1ld29yazogXCJjdXN0b21cIixcbiAgICBmcmFtZXdvcmtQYXRoOiByZXF1aXJlLnJlc29sdmUoXCJwcm90cmFjdG9yLWN1Y3VtYmVyLWZyYW1ld29ya1wiKSxcbiAgICBzcGVjczogW1wiZmVhdHVyZXMvKi8wMV9BbWF6b25fT2ZmZXJfQWRkX3RvX0NhcnQuZmVhdHVyZVwiXSxcbiAgICAvLyBzcGVjczogW1wiZmVhdHVyZXMvKi8qLmZlYXR1cmVcIl0sXG4gICAgZXhjbHVkZTogW1wiXCJdLFxuICAgIC8vIG5vR2xvYmFsczogdHJ1ZSxcbiAgICBjdWN1bWJlck9wdHM6IHtcbiAgICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgICBmb3JtYXQ6IFtcInByZXR0eVwiXSxcbiAgICAgICAgcmVxdWlyZTogW1wic3RlcERlZmluaXRpb25zLyouanNcIixcbiAgICAgICAgICAgICdzdXBwb3J0L2hvb2tzLmpzJ11cbiAgICB9LFxuICAgIGdldE11bHRpQ2FwYWJpbGl0aWVzOiAoKT0+IHtcbiAgICAgICAgbGV0IGJyb3dzZXJzX3BhcmFtID0gdGhpcy5wYXJhbXMuYnJvd3NlcnMgfHwgY2FwYWJpbGl0aWVzLmNocm9tZS5icm93c2VyTmFtZTtcbiAgICAgICAgbGV0IGJyb3dzZXJzID0gYnJvd3NlcnNfcGFyYW0uc3BsaXQoJywnKTtcblxuICAgICAgICAvLyBVc2luZyBsb2Rhc2ggb3BlbiBzZWxlY3QgdGhlIGtleXMgaW4gYGNhcGFiaWxpdGllc2AgY29ycmVzcG9uZGluZ1xuICAgICAgICAvLyBvcGVuIHRoZSBicm93c2VycyBwYXJhbS5cbiAgICAgICAgcmV0dXJuIF8oY2FwYWJpbGl0aWVzKVxuICAgICAgICAgICAgLnBpY2soYnJvd3NlcnMpXG4gICAgICAgICAgICAudmFsdWVzKClcbiAgICAgICAgICAgIC52YWx1ZSgpO1xuICAgIH0sXG4gICAgLy8gc2VsZW5pdW1BZGRyZXNzOiAnaHR0cDovL2xvY2FsaG9zdDo0NDQ0L3dkL2h1YicsIC8vIHVuY29tbWVudCB0aGlzIGxpbmUgdG8gcnVuIHByb3RyYWN0b3IgdGVzdHMgb24gc3RhbmRhbG9uZSBzZWxlbml1bSBzZXJ2ZXJcbiAgICBkaXJlY3RDb25uZWN0OiB0cnVlLCAvLyB1bmNvbW1lbnQgdGhpcyBsaW5lIHRvIHJ1biBwcm90cmFjdG9yIGRpcmVjdGx5IGluIGJyb3dzZXIgYW5kIG5vdCBvbiBzZWxlbml1bSBzZXJ2ZXJcbiAgICBvblByZXBhcmU6ICAoKT0+IHtcbiAgICAgICAgbGV0IGNoYWkgPSByZXF1aXJlKFwiY2hhaVwiKTtcbiAgICAgICAgbGV0IGNoYWlBc1Byb21pc2VkID0gcmVxdWlyZShcImNoYWktYXMtcHJvbWlzZWRcIik7XG4gICAgICAgIGNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcbiAgICAgICAgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG4gICAgICAgIC8vIGJyb3dzZXIuZHJpdmVyLm1hbmFnZSgpLndpbmRvdygpLm1heGltaXplKCk7XG4gICAgICAgIC8vIHRoaXMgY29tbWFuZCBkb2Vzbid0IHdvcmssIHVzaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gdG8gbWF4aW1pemUgYnJvd3NlciB3aW5kb3cuXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICBicm93c2VyLmRyaXZlci5leGVjdXRlU2NyaXB0KCgpPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQ6YW55KT0+IHtcbiAgICAgICAgICAgICAgICBicm93c2VyLmRyaXZlci5tYW5hZ2UoKS53aW5kb3coKS5zZXRTaXplKHJlc3VsdC53aWR0aCwgcmVzdWx0LmhlaWdodCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiJdfQ==