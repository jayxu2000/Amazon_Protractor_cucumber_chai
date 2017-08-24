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
    specs: ["features/*/TC02_Amazon_product_test.feature"],
    // specs: ["features/*/*.feature"],
    exclude: [""],
    // noGlobals: true,
    cucumberOpts: {
        strict: true,
        format: ["pretty"],
        require: ["stepDefinitions/*.js",
            'support/hooks.js'],
        tags: '@smoke'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQStEO0FBQy9ELGtFQUFrRTtBQUNsRSwyQ0FBMkM7QUFFM0MsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFCLElBQUksWUFBWSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEtBQUs7SUFDcEIsTUFBTSxFQUFFO1FBQ0osV0FBVyxFQUFFLFFBQVE7UUFDckIsY0FBYyxFQUFFLElBQUk7UUFDcEIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFFRCxPQUFPLEVBQUU7UUFDTCxXQUFXLEVBQUUsU0FBUztRQUN0QixjQUFjLEVBQUUsSUFBSTtRQUNwQixZQUFZLEVBQUUsQ0FBQztLQUNsQjtDQUNKLENBQUM7QUFFUyxRQUFBLE1BQU0sR0FBVztJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUMsNkNBQTZDLENBQUM7SUFDdEQsbUNBQW1DO0lBQ25DLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNiLG1CQUFtQjtJQUNuQixZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQyxzQkFBc0I7WUFDNUIsa0JBQWtCLENBQUM7UUFDdkIsSUFBSSxFQUFFLFFBQVE7S0FDakI7SUFFRCxvQkFBb0IsRUFBRTtRQUNsQixJQUFJLGNBQWMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyRCxJQUFJLFFBQVEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLG9FQUFvRTtRQUNwRSwyQkFBMkI7UUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNkLE1BQU0sRUFBRTthQUNSLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxnSUFBZ0k7SUFDaEksYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFO1FBQ1AsK0NBQStDO1FBQy9DLHNGQUFzRjtRQUN0RixVQUFVLENBQUM7WUFDUCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQztvQkFDSCxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUMvQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXO2lCQUNwQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVTtnQkFDZixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvdHJhY3RvciBjb25maWd1cmF0aW9uIGZpbGUsIHNlZSBsaW5rIGZvciBtb3JlIGluZm9ybWF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yL2Jsb2IvbWFzdGVyL2xpYi9jb25maWcudHNcbmltcG9ydCB7YnJvd3NlciwgQ29uZmlnfSBmcm9tIFwicHJvdHJhY3RvclwiO1xuXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5sZXQgY2FwYWJpbGl0aWVzID0ge1xuICAgIGRpcmVjdENvbm5lY3Q6IGZhbHNlLFxuICAgIGNocm9tZToge1xuICAgICAgICBicm93c2VyTmFtZTogJ2Nocm9tZScsXG4gICAgICAgIHNoYXJkVGVzdEZpbGVzOiB0cnVlLFxuICAgICAgICBtYXhJbnN0YW5jZXM6IDFcbiAgICB9LFxuXG4gICAgZmlyZWZveDoge1xuICAgICAgICBicm93c2VyTmFtZTogJ2ZpcmVmb3gnLFxuICAgICAgICBzaGFyZFRlc3RGaWxlczogdHJ1ZSxcbiAgICAgICAgbWF4SW5zdGFuY2VzOiAyXG4gICAgfVxufTtcblxuZXhwb3J0IGxldCBjb25maWc6IENvbmZpZyA9IHtcbiAgICBhbGxTY3JpcHRzVGltZW91dDogMTEwMDAsXG4gICAgYmFzZVVybDogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jYS8nLFxuICAgIGZyYW1ld29yazogXCJjdXN0b21cIixcbiAgICBmcmFtZXdvcmtQYXRoOiByZXF1aXJlLnJlc29sdmUoXCJwcm90cmFjdG9yLWN1Y3VtYmVyLWZyYW1ld29ya1wiKSxcbiAgICBzcGVjczogW1wiZmVhdHVyZXMvKi9UQzAyX0FtYXpvbl9wcm9kdWN0X3Rlc3QuZmVhdHVyZVwiXSxcbiAgICAvLyBzcGVjczogW1wiZmVhdHVyZXMvKi8qLmZlYXR1cmVcIl0sXG4gICAgZXhjbHVkZTogW1wiXCJdLFxuICAgIC8vIG5vR2xvYmFsczogdHJ1ZSxcbiAgICBjdWN1bWJlck9wdHM6IHtcbiAgICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgICBmb3JtYXQ6IFtcInByZXR0eVwiXSxcbiAgICAgICAgcmVxdWlyZTogW1wic3RlcERlZmluaXRpb25zLyouanNcIixcbiAgICAgICAgICAgICdzdXBwb3J0L2hvb2tzLmpzJ10sXG4gICAgICAgIHRhZ3M6ICdAc21va2UnXG4gICAgfSxcblxuICAgIGdldE11bHRpQ2FwYWJpbGl0aWVzOiAoKT0+IHtcbiAgICAgICAgbGV0IGJyb3dzZXJzX3BhcmFtID0gY2FwYWJpbGl0aWVzLmNocm9tZS5icm93c2VyTmFtZTtcbiAgICAgICAgbGV0IGJyb3dzZXJzID0gYnJvd3NlcnNfcGFyYW0uc3BsaXQoJywnKTtcblxuICAgICAgICAvLyBVc2luZyBsb2Rhc2ggb3BlbiBzZWxlY3QgdGhlIGtleXMgaW4gYGNhcGFiaWxpdGllc2AgY29ycmVzcG9uZGluZ1xuICAgICAgICAvLyBvcGVuIHRoZSBicm93c2VycyBwYXJhbS5cbiAgICAgICAgcmV0dXJuIF8oY2FwYWJpbGl0aWVzKVxuICAgICAgICAgICAgLnBpY2soYnJvd3NlcnMpXG4gICAgICAgICAgICAudmFsdWVzKClcbiAgICAgICAgICAgIC52YWx1ZSgpO1xuICAgIH0sXG4gICAgLy8gc2VsZW5pdW1BZGRyZXNzOiAnaHR0cDovL2xvY2FsaG9zdDo0NDQ0L3dkL2h1YicsIC8vIHVuY29tbWVudCB0aGlzIGxpbmUgdG8gcnVuIHByb3RyYWN0b3IgdGVzdHMgb24gc3RhbmRhbG9uZSBzZWxlbml1bSBzZXJ2ZXJcbiAgICBkaXJlY3RDb25uZWN0OiB0cnVlLCAvLyB1bmNvbW1lbnQgdGhpcyBsaW5lIHRvIHJ1biBwcm90cmFjdG9yIGRpcmVjdGx5IGluIGJyb3dzZXIgYW5kIG5vdCBvbiBzZWxlbml1bSBzZXJ2ZXJcbiAgICBvblByZXBhcmU6ICgpPT4ge1xuICAgICAgICAvLyBicm93c2VyLmRyaXZlci5tYW5hZ2UoKS53aW5kb3coKS5tYXhpbWl6ZSgpO1xuICAgICAgICAvLyB0aGlzIGNvbW1hbmQgZG9lc24ndCB3b3JrLCB1c2luZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uIHRvIG1heGltaXplIGJyb3dzZXIgd2luZG93LlxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgYnJvd3Nlci5kcml2ZXIuZXhlY3V0ZVNjcmlwdCgoKT0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0OmFueSk9PiB7XG4gICAgICAgICAgICAgICAgYnJvd3Nlci5kcml2ZXIubWFuYWdlKCkud2luZG93KCkuc2V0U2l6ZShyZXN1bHQud2lkdGgsIHJlc3VsdC5oZWlnaHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iXX0=