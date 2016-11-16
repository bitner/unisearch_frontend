// This file is given as an entry point to Webpack, meaning that Webpack crawls
// this file for require statements to find out what to include in the bundle
// it builds.

// angular is intended for inclusion in 'vendor.js' using CommonsChunkPlugin.
import * as angular from "angular";

// the rest are for 'bundle.js'.
import "./unisearch_module.ts";
import "./unisearch_component.ts";
import "./text_filter/text_filter_module.ts";
import "./text_filter/text_filter_component.ts";
import "./order/order_module.ts";
import "./order/order_component.ts";
import "./pager/pager_module.ts";
import "./pager/pager_component.ts";
import "./results/results_module.ts";
import "./results/results_component.ts";
