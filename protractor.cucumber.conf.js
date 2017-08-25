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
        // tags: '@Regression'
        tags: '@smoke or @Regression'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdHJhY3Rvci5jdWN1bWJlci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQStEO0FBQy9ELGtFQUFrRTtBQUNsRSwyQ0FBMkM7QUFFM0MsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFCLElBQUksWUFBWSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEtBQUs7SUFDcEIsTUFBTSxFQUFFO1FBQ0osV0FBVyxFQUFFLFFBQVE7UUFDckIsY0FBYyxFQUFFLElBQUk7UUFDcEIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFFRCxPQUFPLEVBQUU7UUFDTCxXQUFXLEVBQUUsU0FBUztRQUN0QixjQUFjLEVBQUUsSUFBSTtRQUNwQixZQUFZLEVBQUUsQ0FBQztLQUNsQjtDQUNKLENBQUM7QUFFUyxRQUFBLE1BQU0sR0FBVztJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsZ0VBQWdFO0lBQ2hFLDBEQUEwRDtJQUMxRCxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztJQUMvQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDYixtQkFBbUI7SUFDbkIsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDbEIsT0FBTyxFQUFFLENBQUMsc0JBQXNCO1lBQzVCLGtCQUFrQixDQUFDO1FBQ3ZCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsSUFBSSxFQUFFLHVCQUF1QjtLQUNoQztJQUVELG9CQUFvQixFQUFFO1FBQ2xCLElBQUksY0FBYyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JELElBQUksUUFBUSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekMsb0VBQW9FO1FBQ3BFLDJCQUEyQjtRQUMzQixNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQzthQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2QsTUFBTSxFQUFFO2FBQ1IsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELGdJQUFnSTtJQUNoSSxhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUU7UUFDUCwrQ0FBK0M7UUFDL0Msc0ZBQXNGO1FBQ3RGLFVBQVUsQ0FBQztZQUNQLG9CQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDekIsTUFBTSxDQUFDO29CQUNILEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVU7b0JBQy9CLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVc7aUJBQ3BDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFVO2dCQUNmLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcm90cmFjdG9yIGNvbmZpZ3VyYXRpb24gZmlsZSwgc2VlIGxpbmsgZm9yIG1vcmUgaW5mb3JtYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3IvYmxvYi9tYXN0ZXIvbGliL2NvbmZpZy50c1xuaW1wb3J0IHticm93c2VyLCBDb25maWd9IGZyb20gXCJwcm90cmFjdG9yXCI7XG5cbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmxldCBjYXBhYmlsaXRpZXMgPSB7XG4gICAgZGlyZWN0Q29ubmVjdDogZmFsc2UsXG4gICAgY2hyb21lOiB7XG4gICAgICAgIGJyb3dzZXJOYW1lOiAnY2hyb21lJyxcbiAgICAgICAgc2hhcmRUZXN0RmlsZXM6IHRydWUsXG4gICAgICAgIG1heEluc3RhbmNlczogMVxuICAgIH0sXG5cbiAgICBmaXJlZm94OiB7XG4gICAgICAgIGJyb3dzZXJOYW1lOiAnZmlyZWZveCcsXG4gICAgICAgIHNoYXJkVGVzdEZpbGVzOiB0cnVlLFxuICAgICAgICBtYXhJbnN0YW5jZXM6IDJcbiAgICB9XG59O1xuXG5leHBvcnQgbGV0IGNvbmZpZzogQ29uZmlnID0ge1xuICAgIGFsbFNjcmlwdHNUaW1lb3V0OiAxMTAwMCxcbiAgICBiYXNlVXJsOiAnaHR0cHM6Ly93d3cuYW1hem9uLmNhLycsXG4gICAgZnJhbWV3b3JrOiBcImN1c3RvbVwiLFxuICAgIGZyYW1ld29ya1BhdGg6IHJlcXVpcmUucmVzb2x2ZShcInByb3RyYWN0b3ItY3VjdW1iZXItZnJhbWV3b3JrXCIpLFxuICAgIC8vIHNwZWNzOiBbXCJmZWF0dXJlcy8qL1RDMDFfYW1hem9uX3VzZXJfbG9naW5fYW5kX291dC5mZWF0dXJlXCJdLFxuICAgIC8vIHNwZWNzOiBbXCJmZWF0dXJlcy8qL1RDMDJfQW1hem9uX3Byb2R1Y3RfdGVzdC5mZWF0dXJlXCJdLFxuICAgIHNwZWNzOiBbXCJmZWF0dXJlcy8qLyouZmVhdHVyZVwiXSxcbiAgICBleGNsdWRlOiBbXCJcIl0sXG4gICAgLy8gbm9HbG9iYWxzOiB0cnVlLFxuICAgIGN1Y3VtYmVyT3B0czoge1xuICAgICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICAgIGZvcm1hdDogW1wicHJldHR5XCJdLFxuICAgICAgICByZXF1aXJlOiBbXCJzdGVwRGVmaW5pdGlvbnMvKi5qc1wiLFxuICAgICAgICAgICAgJ3N1cHBvcnQvaG9va3MuanMnXSxcbiAgICAgICAgLy8gdGFnczogJ0BzbW9rZSdcbiAgICAgICAgLy8gdGFnczogJ0BSZWdyZXNzaW9uJ1xuICAgICAgICB0YWdzOiAnQHNtb2tlIG9yIEBSZWdyZXNzaW9uJ1xuICAgIH0sXG5cbiAgICBnZXRNdWx0aUNhcGFiaWxpdGllczogKCk9PiB7XG4gICAgICAgIGxldCBicm93c2Vyc19wYXJhbSA9IGNhcGFiaWxpdGllcy5jaHJvbWUuYnJvd3Nlck5hbWU7XG4gICAgICAgIGxldCBicm93c2VycyA9IGJyb3dzZXJzX3BhcmFtLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgLy8gVXNpbmcgbG9kYXNoIG9wZW4gc2VsZWN0IHRoZSBrZXlzIGluIGBjYXBhYmlsaXRpZXNgIGNvcnJlc3BvbmRpbmdcbiAgICAgICAgLy8gb3BlbiB0aGUgYnJvd3NlcnMgcGFyYW0uXG4gICAgICAgIHJldHVybiBfKGNhcGFiaWxpdGllcylcbiAgICAgICAgICAgIC5waWNrKGJyb3dzZXJzKVxuICAgICAgICAgICAgLnZhbHVlcygpXG4gICAgICAgICAgICAudmFsdWUoKTtcbiAgICB9LFxuICAgIC8vIHNlbGVuaXVtQWRkcmVzczogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDQ0NC93ZC9odWInLCAvLyB1bmNvbW1lbnQgdGhpcyBsaW5lIHRvIHJ1biBwcm90cmFjdG9yIHRlc3RzIG9uIHN0YW5kYWxvbmUgc2VsZW5pdW0gc2VydmVyXG4gICAgZGlyZWN0Q29ubmVjdDogdHJ1ZSwgLy8gdW5jb21tZW50IHRoaXMgbGluZSB0byBydW4gcHJvdHJhY3RvciBkaXJlY3RseSBpbiBicm93c2VyIGFuZCBub3Qgb24gc2VsZW5pdW0gc2VydmVyXG4gICAgb25QcmVwYXJlOiAoKT0+IHtcbiAgICAgICAgLy8gYnJvd3Nlci5kcml2ZXIubWFuYWdlKCkud2luZG93KCkubWF4aW1pemUoKTtcbiAgICAgICAgLy8gdGhpcyBjb21tYW5kIGRvZXNuJ3Qgd29yaywgdXNpbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiB0byBtYXhpbWl6ZSBicm93c2VyIHdpbmRvdy5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIGJyb3dzZXIuZHJpdmVyLmV4ZWN1dGVTY3JpcHQoKCk9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdDphbnkpPT4ge1xuICAgICAgICAgICAgICAgIGJyb3dzZXIuZHJpdmVyLm1hbmFnZSgpLndpbmRvdygpLnNldFNpemUocmVzdWx0LndpZHRoLCByZXN1bHQuaGVpZ2h0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuIl19