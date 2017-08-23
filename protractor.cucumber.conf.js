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
    specs: ["features/*/*.feature"],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQStEO0FBQy9ELGtFQUFrRTtBQUNsRSwyQ0FBMkM7QUFFM0MsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFCLElBQUksWUFBWSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEtBQUs7SUFDcEIsTUFBTSxFQUFFO1FBQ0osV0FBVyxFQUFFLFFBQVE7UUFDckIsY0FBYyxFQUFFLElBQUk7UUFDcEIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFFRCxPQUFPLEVBQUU7UUFDTCxXQUFXLEVBQUUsU0FBUztRQUN0QixjQUFjLEVBQUUsSUFBSTtRQUNwQixZQUFZLEVBQUUsQ0FBQztLQUNsQjtDQUNKLENBQUM7QUFFUyxRQUFBLE1BQU0sR0FBVztJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUMsc0JBQXNCLENBQUM7SUFDL0IsbUNBQW1DO0lBQ25DLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNiLG1CQUFtQjtJQUNuQixZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQyxzQkFBc0I7WUFDNUIsa0JBQWtCLENBQUM7UUFDdkIsSUFBSSxFQUFFLFFBQVE7S0FDakI7SUFFRCxvQkFBb0IsRUFBRTtRQUNsQixJQUFJLGNBQWMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyRCxJQUFJLFFBQVEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLG9FQUFvRTtRQUNwRSwyQkFBMkI7UUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNkLE1BQU0sRUFBRTthQUNSLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxnSUFBZ0k7SUFDaEksYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFO1FBQ1AsK0NBQStDO1FBQy9DLHNGQUFzRjtRQUN0RixVQUFVLENBQUM7WUFDUCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQztvQkFDSCxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUMvQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXO2lCQUNwQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVTtnQkFDZixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvdHJhY3RvciBjb25maWd1cmF0aW9uIGZpbGUsIHNlZSBsaW5rIGZvciBtb3JlIGluZm9ybWF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yL2Jsb2IvbWFzdGVyL2xpYi9jb25maWcudHNcbmltcG9ydCB7YnJvd3NlciwgQ29uZmlnfSBmcm9tIFwicHJvdHJhY3RvclwiO1xuXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5sZXQgY2FwYWJpbGl0aWVzID0ge1xuICAgIGRpcmVjdENvbm5lY3Q6IGZhbHNlLFxuICAgIGNocm9tZToge1xuICAgICAgICBicm93c2VyTmFtZTogJ2Nocm9tZScsXG4gICAgICAgIHNoYXJkVGVzdEZpbGVzOiB0cnVlLFxuICAgICAgICBtYXhJbnN0YW5jZXM6IDFcbiAgICB9LFxuXG4gICAgZmlyZWZveDoge1xuICAgICAgICBicm93c2VyTmFtZTogJ2ZpcmVmb3gnLFxuICAgICAgICBzaGFyZFRlc3RGaWxlczogdHJ1ZSxcbiAgICAgICAgbWF4SW5zdGFuY2VzOiAyXG4gICAgfVxufTtcblxuZXhwb3J0IGxldCBjb25maWc6IENvbmZpZyA9IHtcbiAgICBhbGxTY3JpcHRzVGltZW91dDogMTEwMDAsXG4gICAgYmFzZVVybDogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jYS8nLFxuICAgIGZyYW1ld29yazogXCJjdXN0b21cIixcbiAgICBmcmFtZXdvcmtQYXRoOiByZXF1aXJlLnJlc29sdmUoXCJwcm90cmFjdG9yLWN1Y3VtYmVyLWZyYW1ld29ya1wiKSxcbiAgICBzcGVjczogW1wiZmVhdHVyZXMvKi8qLmZlYXR1cmVcIl0sXG4gICAgLy8gc3BlY3M6IFtcImZlYXR1cmVzLyovKi5mZWF0dXJlXCJdLFxuICAgIGV4Y2x1ZGU6IFtcIlwiXSxcbiAgICAvLyBub0dsb2JhbHM6IHRydWUsXG4gICAgY3VjdW1iZXJPcHRzOiB7XG4gICAgICAgIHN0cmljdDogdHJ1ZSxcbiAgICAgICAgZm9ybWF0OiBbXCJwcmV0dHlcIl0sXG4gICAgICAgIHJlcXVpcmU6IFtcInN0ZXBEZWZpbml0aW9ucy8qLmpzXCIsXG4gICAgICAgICAgICAnc3VwcG9ydC9ob29rcy5qcyddLFxuICAgICAgICB0YWdzOiAnQHNtb2tlJ1xuICAgIH0sXG5cbiAgICBnZXRNdWx0aUNhcGFiaWxpdGllczogKCk9PiB7XG4gICAgICAgIGxldCBicm93c2Vyc19wYXJhbSA9IGNhcGFiaWxpdGllcy5jaHJvbWUuYnJvd3Nlck5hbWU7XG4gICAgICAgIGxldCBicm93c2VycyA9IGJyb3dzZXJzX3BhcmFtLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgLy8gVXNpbmcgbG9kYXNoIG9wZW4gc2VsZWN0IHRoZSBrZXlzIGluIGBjYXBhYmlsaXRpZXNgIGNvcnJlc3BvbmRpbmdcbiAgICAgICAgLy8gb3BlbiB0aGUgYnJvd3NlcnMgcGFyYW0uXG4gICAgICAgIHJldHVybiBfKGNhcGFiaWxpdGllcylcbiAgICAgICAgICAgIC5waWNrKGJyb3dzZXJzKVxuICAgICAgICAgICAgLnZhbHVlcygpXG4gICAgICAgICAgICAudmFsdWUoKTtcbiAgICB9LFxuICAgIC8vIHNlbGVuaXVtQWRkcmVzczogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDQ0NC93ZC9odWInLCAvLyB1bmNvbW1lbnQgdGhpcyBsaW5lIHRvIHJ1biBwcm90cmFjdG9yIHRlc3RzIG9uIHN0YW5kYWxvbmUgc2VsZW5pdW0gc2VydmVyXG4gICAgZGlyZWN0Q29ubmVjdDogdHJ1ZSwgLy8gdW5jb21tZW50IHRoaXMgbGluZSB0byBydW4gcHJvdHJhY3RvciBkaXJlY3RseSBpbiBicm93c2VyIGFuZCBub3Qgb24gc2VsZW5pdW0gc2VydmVyXG4gICAgb25QcmVwYXJlOiAoKT0+IHtcbiAgICAgICAgLy8gYnJvd3Nlci5kcml2ZXIubWFuYWdlKCkud2luZG93KCkubWF4aW1pemUoKTtcbiAgICAgICAgLy8gdGhpcyBjb21tYW5kIGRvZXNuJ3Qgd29yaywgdXNpbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiB0byBtYXhpbWl6ZSBicm93c2VyIHdpbmRvdy5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIGJyb3dzZXIuZHJpdmVyLmV4ZWN1dGVTY3JpcHQoKCk9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdDphbnkpPT4ge1xuICAgICAgICAgICAgICAgIGJyb3dzZXIuZHJpdmVyLm1hbmFnZSgpLndpbmRvdygpLnNldFNpemUocmVzdWx0LndpZHRoLCByZXN1bHQuaGVpZ2h0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuIl19