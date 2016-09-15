"use strict";
exports.pageSelector = function (state) { return state.tutorial.pages[state.pagePosition]; };
exports.pageCompletedSelector = function (state) { return state.progress.pages[state.pagePosition]; };
