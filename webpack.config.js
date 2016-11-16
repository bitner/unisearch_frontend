// Node module used for utilities in this file, e.g. path.resolve
var path = require("path");

// Grab a reference to webpack for e.g. ProvidePlugin or UglifyJsPlugin
var webpack = require("webpack");

// Used to copy certain files to the build output.
var CopyWebpackPlugin = require('copy-webpack-plugin');

// Used to autogenerate an HTML file which includes the bundle.
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        // index.ts is basically a manifest of files for Webpack to crawl.
        "bundle": "./angular1/index.ts",

        // Build a separate bundle file for dependencies that won't be obtained
        // e.g. using <script> tags which reference a CDN, or by directly
        // copying files into the build directory and including them with
        // <script> tags.
        // The key is the name of the file to write.
        // (If this name collides with a dependency name like 'angular', the
        // result may be confusing, so don't do that.)
        // The value must be an array (to avoid the following -
        // 'Error: a dependency to an entry point is not allowed').
        // Values in the array are module names to resolve, as by require()
        "vendor": [
            "angular"
        ]
    },

    // Write output to `dist/bundle.js`.
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },

    // Also write a source map to `dist/bundle.js.map`.
    // This is used for debugging, to relate locations in the bundle file to
    // locations in original source files. Needed when 'transpiling'.
    // (BTW: 'source-map' produces a map file but doesn't work in FF < 50.)
    devtool: "source-map",

    resolve: {
        // Filename extensions used to resolve modules.
        // Setting this overrides Webpack's default.
        extensions: [
            // Without this empty string, you can't require filenames specified
            // WITH their extension.
            "",
            // Webpack
            ".webpack.js",
            ".web.js",
            // JavaScript
            ".js",
            // TypeScript via ts-loader
            ".ts",
            ".tsx",
            // JSON fixtures via CopyWebpackPlugin
            ".json"
        ]
    },
    module: {
        loaders: [
            // TypeScript via ts-loader
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    plugins: [
        // Automagically require angular when its name is used as a free
        // variable.
        // If angular is not separated out somehow, it adds 1.2 megs to the
        // bundle.js, so it's probably best either to use CopyWebPackPlugin to
        // copy it directly to the build directory, or to make a separate
        // bundle with it - if it is not provided e.g. by a CDN
        // new webpack.ProvidePlugin({
        //     'angular': 'angular'
        // }),

        new CopyWebpackPlugin(
            [
                // Copy our angular templates
                {
                    "context": "angular1",
                    "from": "**/*.html"
                },

                // Copy our JSON fixtures
                {
                    "context": "angular1",
                    "from": "**/*.json"
                }
            ],

            // Do not copy any matched files from node_modules though
            {
                ignore: [
                    "**/node_modules/**/*"
                ]
            }
        ),

        // Autogenerate an HTML file good for local testing
        new HtmlWebpackPlugin({
            title: "Unisearch Dev",
            // Use template to provide the markup Angular needs
            template: "./angular1/index.html",
            // Inject tags for including bundle at the bottom of the body
            inject: "body",
            // Use hashes for cache busting
            hash: true,
            // Include error output (this is only for dev anyway).
            showErrors: true
        }),

        // Ensure split between main bundle.js and vendor.js bundle
        new webpack.optimize.CommonsChunkPlugin(
            "vendor",
            "vendor.bundle.js"
        ),

        new webpack.optimize.UglifyJsPlugin({
            // mangle: true (the default) breaks angular in vendor.js:
            // "Error: [$injector:unpr] Unknown provider: eProvider <- e ...
            mangle: false,

            comments: false,
            warning: false
        })

    ]
};
