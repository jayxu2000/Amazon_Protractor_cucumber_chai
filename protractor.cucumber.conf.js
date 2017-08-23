"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const protractor_1 = require("protractor");
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
        let browsers_param = capabilities.chrome.browserName;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQStEO0FBQy9ELGtFQUFrRTtBQUNsRSwyQ0FBMkM7QUFFM0MsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFCLElBQUksWUFBWSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEtBQUs7SUFDcEIsTUFBTSxFQUFFO1FBQ0osV0FBVyxFQUFFLFFBQVE7UUFDckIsY0FBYyxFQUFFLElBQUk7UUFDcEIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFFRCxPQUFPLEVBQUU7UUFDTCxXQUFXLEVBQUUsU0FBUztRQUN0QixjQUFjLEVBQUUsSUFBSTtRQUNwQixZQUFZLEVBQUUsQ0FBQztLQUNsQjtDQUNKLENBQUM7QUFFUyxRQUFBLE1BQU0sR0FBVztJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUMsZ0RBQWdELENBQUM7SUFDekQsbUNBQW1DO0lBQ25DLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNiLG1CQUFtQjtJQUNuQixZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQyxzQkFBc0I7WUFDNUIsa0JBQWtCLENBQUM7S0FDMUI7SUFFRCxvQkFBb0IsRUFBRTtRQUNsQixJQUFJLGNBQWMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyRCxJQUFJLFFBQVEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLG9FQUFvRTtRQUNwRSwyQkFBMkI7UUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNkLE1BQU0sRUFBRTthQUNSLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxnSUFBZ0k7SUFDaEksYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFO1FBQ1AsK0NBQStDO1FBQy9DLHNGQUFzRjtRQUN0RixVQUFVLENBQUM7WUFDUCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQztvQkFDSCxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUMvQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXO2lCQUNwQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVTtnQkFDZixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvdHJhY3RvciBjb25maWd1cmF0aW9uIGZpbGUsIHNlZSBsaW5rIGZvciBtb3JlIGluZm9ybWF0aW9uXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3IvYmxvYi9tYXN0ZXIvbGliL2NvbmZpZy50c1xyXG5pbXBvcnQge2Jyb3dzZXIsIENvbmZpZ30gZnJvbSBcInByb3RyYWN0b3JcIjtcclxuXHJcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcblxyXG5sZXQgY2FwYWJpbGl0aWVzID0ge1xyXG4gICAgZGlyZWN0Q29ubmVjdDogZmFsc2UsXHJcbiAgICBjaHJvbWU6IHtcclxuICAgICAgICBicm93c2VyTmFtZTogJ2Nocm9tZScsXHJcbiAgICAgICAgc2hhcmRUZXN0RmlsZXM6IHRydWUsXHJcbiAgICAgICAgbWF4SW5zdGFuY2VzOiAxXHJcbiAgICB9LFxyXG5cclxuICAgIGZpcmVmb3g6IHtcclxuICAgICAgICBicm93c2VyTmFtZTogJ2ZpcmVmb3gnLFxyXG4gICAgICAgIHNoYXJkVGVzdEZpbGVzOiB0cnVlLFxyXG4gICAgICAgIG1heEluc3RhbmNlczogMlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBjb25maWc6IENvbmZpZyA9IHtcclxuICAgIGFsbFNjcmlwdHNUaW1lb3V0OiAxMTAwMCxcclxuICAgIGJhc2VVcmw6ICdodHRwczovL3d3dy5hbWF6b24uY2EvJyxcclxuICAgIGZyYW1ld29yazogXCJjdXN0b21cIixcclxuICAgIGZyYW1ld29ya1BhdGg6IHJlcXVpcmUucmVzb2x2ZShcInByb3RyYWN0b3ItY3VjdW1iZXItZnJhbWV3b3JrXCIpLFxyXG4gICAgc3BlY3M6IFtcImZlYXR1cmVzLyovMDFfQW1hem9uX09mZmVyX0FkZF90b19DYXJ0LmZlYXR1cmVcIl0sXHJcbiAgICAvLyBzcGVjczogW1wiZmVhdHVyZXMvKi8qLmZlYXR1cmVcIl0sXHJcbiAgICBleGNsdWRlOiBbXCJcIl0sXHJcbiAgICAvLyBub0dsb2JhbHM6IHRydWUsXHJcbiAgICBjdWN1bWJlck9wdHM6IHtcclxuICAgICAgICBzdHJpY3Q6IHRydWUsXHJcbiAgICAgICAgZm9ybWF0OiBbXCJwcmV0dHlcIl0sXHJcbiAgICAgICAgcmVxdWlyZTogW1wic3RlcERlZmluaXRpb25zLyouanNcIixcclxuICAgICAgICAgICAgJ3N1cHBvcnQvaG9va3MuanMnXVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRNdWx0aUNhcGFiaWxpdGllczogKCk9PiB7XHJcbiAgICAgICAgbGV0IGJyb3dzZXJzX3BhcmFtID0gY2FwYWJpbGl0aWVzLmNocm9tZS5icm93c2VyTmFtZTtcclxuICAgICAgICBsZXQgYnJvd3NlcnMgPSBicm93c2Vyc19wYXJhbS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAvLyBVc2luZyBsb2Rhc2ggb3BlbiBzZWxlY3QgdGhlIGtleXMgaW4gYGNhcGFiaWxpdGllc2AgY29ycmVzcG9uZGluZ1xyXG4gICAgICAgIC8vIG9wZW4gdGhlIGJyb3dzZXJzIHBhcmFtLlxyXG4gICAgICAgIHJldHVybiBfKGNhcGFiaWxpdGllcylcclxuICAgICAgICAgICAgLnBpY2soYnJvd3NlcnMpXHJcbiAgICAgICAgICAgIC52YWx1ZXMoKVxyXG4gICAgICAgICAgICAudmFsdWUoKTtcclxuICAgIH0sXHJcbiAgICAvLyBzZWxlbml1bUFkZHJlc3M6ICdodHRwOi8vbG9jYWxob3N0OjQ0NDQvd2QvaHViJywgLy8gdW5jb21tZW50IHRoaXMgbGluZSB0byBydW4gcHJvdHJhY3RvciB0ZXN0cyBvbiBzdGFuZGFsb25lIHNlbGVuaXVtIHNlcnZlclxyXG4gICAgZGlyZWN0Q29ubmVjdDogdHJ1ZSwgLy8gdW5jb21tZW50IHRoaXMgbGluZSB0byBydW4gcHJvdHJhY3RvciBkaXJlY3RseSBpbiBicm93c2VyIGFuZCBub3Qgb24gc2VsZW5pdW0gc2VydmVyXHJcbiAgICBvblByZXBhcmU6ICgpPT4ge1xyXG4gICAgICAgIC8vIGJyb3dzZXIuZHJpdmVyLm1hbmFnZSgpLndpbmRvdygpLm1heGltaXplKCk7XHJcbiAgICAgICAgLy8gdGhpcyBjb21tYW5kIGRvZXNuJ3Qgd29yaywgdXNpbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiB0byBtYXhpbWl6ZSBicm93c2VyIHdpbmRvdy5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICBicm93c2VyLmRyaXZlci5leGVjdXRlU2NyaXB0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0OmFueSk9PiB7XHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmRyaXZlci5tYW5hZ2UoKS53aW5kb3coKS5zZXRTaXplKHJlc3VsdC53aWR0aCwgcmVzdWx0LmhlaWdodCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG4iXX0=