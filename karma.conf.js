// for karma-webpack
var webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({

        basePath: ".",

        exclude: [
            // This file is only used by Webpack.
            // If this file is not excluded, "require is not defined".
            "angular1/index.ts"
        ],

        files: [
            // Don't list angular files here, karma-angular should find them
            // by referencing package.json.

            // module definitions
            "angular1/**/*_module.ts",

            // app code
            "angular1/**/*_component.ts",

            // don't include e.g. _controller.ts, on pain of:
            // 'Module not found: Error: a dependency to an entry point is not allowed'

            // test code
            "angular1/**/*_spec.ts",

            // test fixtures
            "angular1/fixtures/**/*.json"
        ],

        preprocessors: {
            // for karma-webpack
            // if webpack is set up with ts-loader, shouldn't need
            // karma-typescript, but other arrangements would have to be made
            // e.g. for coverage reporting.
            "**/*.ts": ["webpack"],

            // for karma-typescript, not using webpack, therefore having to
            // resolve things like not knowing what "require" means
            // "**/*.ts": ["karma-typescript"],

            // for karma-fixture
            "**/*.html": ["html2js"],
            "**/*.json": ["json_fixtures"]
        },

        // for karma-webpack
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },

        // for karma-fixture
        jsonFixturesPreprocessor: {
            variableName: "__json__"
        },

        autoWatch: true,

        frameworks: [
            // for karma-angular
            // must be before mocha/chai in the frameworks array, or
            // angular-mocks won't expose all its methods.
            "angular",

            // for karma-mocha
            // more detailed console report output
            "mocha",

            // for karma-chai
            // bring in name definitions from chai
            "chai",

            // for karma-fixture
            // directly use fixture files in tests
            "fixture"

            // for karma-typescript
            // "karma-typescript"
        ],

        // replace karma's /debug.html with mocha's HTML report
        client: {
            mocha: {
                reporter: "html"
            }
        },

        reporters: [
            // for karma-mocha-reporter, aka frameworks.mocha
            "mocha",

            // for karma-typescript
            // "karma-typescript"
        ],

        browsers: [
            "Chrome",
            "Firefox"
        ]

    });
};
