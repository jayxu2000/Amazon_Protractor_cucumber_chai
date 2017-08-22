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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQStEO0FBQy9ELGtFQUFrRTtBQUNsRSwyQ0FBMkM7QUFFM0MsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFCLElBQUksWUFBWSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEtBQUs7SUFDcEIsTUFBTSxFQUFFO1FBQ0osV0FBVyxFQUFFLFFBQVE7UUFDckIsY0FBYyxFQUFFLElBQUk7UUFDcEIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFFRCxPQUFPLEVBQUU7UUFDTCxXQUFXLEVBQUUsU0FBUztRQUN0QixjQUFjLEVBQUUsSUFBSTtRQUNwQixZQUFZLEVBQUUsQ0FBQztLQUNsQjtDQUNKLENBQUM7QUFFUyxRQUFBLE1BQU0sR0FBVztJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUMsZ0RBQWdELENBQUM7SUFDekQsbUNBQW1DO0lBQ25DLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNiLG1CQUFtQjtJQUNuQixZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQyxzQkFBc0I7WUFDNUIsa0JBQWtCLENBQUM7S0FDMUI7SUFFRCxvQkFBb0IsRUFBRTtRQUNsQixJQUFJLGNBQWMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyRCxJQUFJLFFBQVEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLG9FQUFvRTtRQUNwRSwyQkFBMkI7UUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNkLE1BQU0sRUFBRTthQUNSLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxnSUFBZ0k7SUFDaEksYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFO1FBQ1AsK0NBQStDO1FBQy9DLHNGQUFzRjtRQUN0RixVQUFVLENBQUM7WUFDUCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQztvQkFDSCxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUMvQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXO2lCQUNwQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVTtnQkFDZixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvdHJhY3RvciBjb25maWd1cmF0aW9uIGZpbGUsIHNlZSBsaW5rIGZvciBtb3JlIGluZm9ybWF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yL2Jsb2IvbWFzdGVyL2xpYi9jb25maWcudHNcbmltcG9ydCB7YnJvd3NlciwgQ29uZmlnfSBmcm9tIFwicHJvdHJhY3RvclwiO1xuXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5sZXQgY2FwYWJpbGl0aWVzID0ge1xuICAgIGRpcmVjdENvbm5lY3Q6IGZhbHNlLFxuICAgIGNocm9tZToge1xuICAgICAgICBicm93c2VyTmFtZTogJ2Nocm9tZScsXG4gICAgICAgIHNoYXJkVGVzdEZpbGVzOiB0cnVlLFxuICAgICAgICBtYXhJbnN0YW5jZXM6IDFcbiAgICB9LFxuXG4gICAgZmlyZWZveDoge1xuICAgICAgICBicm93c2VyTmFtZTogJ2ZpcmVmb3gnLFxuICAgICAgICBzaGFyZFRlc3RGaWxlczogdHJ1ZSxcbiAgICAgICAgbWF4SW5zdGFuY2VzOiAyXG4gICAgfVxufTtcblxuZXhwb3J0IGxldCBjb25maWc6IENvbmZpZyA9IHtcbiAgICBhbGxTY3JpcHRzVGltZW91dDogMTEwMDAsXG4gICAgYmFzZVVybDogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jYS8nLFxuICAgIGZyYW1ld29yazogXCJjdXN0b21cIixcbiAgICBmcmFtZXdvcmtQYXRoOiByZXF1aXJlLnJlc29sdmUoXCJwcm90cmFjdG9yLWN1Y3VtYmVyLWZyYW1ld29ya1wiKSxcbiAgICBzcGVjczogW1wiZmVhdHVyZXMvKi8wMV9BbWF6b25fT2ZmZXJfQWRkX3RvX0NhcnQuZmVhdHVyZVwiXSxcbiAgICAvLyBzcGVjczogW1wiZmVhdHVyZXMvKi8qLmZlYXR1cmVcIl0sXG4gICAgZXhjbHVkZTogW1wiXCJdLFxuICAgIC8vIG5vR2xvYmFsczogdHJ1ZSxcbiAgICBjdWN1bWJlck9wdHM6IHtcbiAgICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgICBmb3JtYXQ6IFtcInByZXR0eVwiXSxcbiAgICAgICAgcmVxdWlyZTogW1wic3RlcERlZmluaXRpb25zLyouanNcIixcbiAgICAgICAgICAgICdzdXBwb3J0L2hvb2tzLmpzJ11cbiAgICB9LFxuXG4gICAgZ2V0TXVsdGlDYXBhYmlsaXRpZXM6ICgpPT4ge1xuICAgICAgICBsZXQgYnJvd3NlcnNfcGFyYW0gPSBjYXBhYmlsaXRpZXMuY2hyb21lLmJyb3dzZXJOYW1lO1xuICAgICAgICBsZXQgYnJvd3NlcnMgPSBicm93c2Vyc19wYXJhbS5zcGxpdCgnLCcpO1xuXG4gICAgICAgIC8vIFVzaW5nIGxvZGFzaCBvcGVuIHNlbGVjdCB0aGUga2V5cyBpbiBgY2FwYWJpbGl0aWVzYCBjb3JyZXNwb25kaW5nXG4gICAgICAgIC8vIG9wZW4gdGhlIGJyb3dzZXJzIHBhcmFtLlxuICAgICAgICByZXR1cm4gXyhjYXBhYmlsaXRpZXMpXG4gICAgICAgICAgICAucGljayhicm93c2VycylcbiAgICAgICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAgICAgLnZhbHVlKCk7XG4gICAgfSxcbiAgICAvLyBzZWxlbml1bUFkZHJlc3M6ICdodHRwOi8vbG9jYWxob3N0OjQ0NDQvd2QvaHViJywgLy8gdW5jb21tZW50IHRoaXMgbGluZSB0byBydW4gcHJvdHJhY3RvciB0ZXN0cyBvbiBzdGFuZGFsb25lIHNlbGVuaXVtIHNlcnZlclxuICAgIGRpcmVjdENvbm5lY3Q6IHRydWUsIC8vIHVuY29tbWVudCB0aGlzIGxpbmUgdG8gcnVuIHByb3RyYWN0b3IgZGlyZWN0bHkgaW4gYnJvd3NlciBhbmQgbm90IG9uIHNlbGVuaXVtIHNlcnZlclxuICAgIG9uUHJlcGFyZTogKCk9PiB7XG4gICAgICAgIC8vIGJyb3dzZXIuZHJpdmVyLm1hbmFnZSgpLndpbmRvdygpLm1heGltaXplKCk7XG4gICAgICAgIC8vIHRoaXMgY29tbWFuZCBkb2Vzbid0IHdvcmssIHVzaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gdG8gbWF4aW1pemUgYnJvd3NlciB3aW5kb3cuXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICBicm93c2VyLmRyaXZlci5leGVjdXRlU2NyaXB0KCgpPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQ6YW55KT0+IHtcbiAgICAgICAgICAgICAgICBicm93c2VyLmRyaXZlci5tYW5hZ2UoKS53aW5kb3coKS5zZXRTaXplKHJlc3VsdC53aWR0aCwgcmVzdWx0LmhlaWdodCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiJdfQ==