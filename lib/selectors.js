"use strict";
var reselect_1 = require('reselect');
exports.pageSelector = function (state) { return state.tutorial.pages[state.pagePosition]; };
exports.tasksSelector = reselect_1.createSelector(exports.pageSelector, function (page) { return page.tasks; });
exports.configSelector = function (state) { return state.packageJson.config; };
