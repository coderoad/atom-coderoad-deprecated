"use strict";
var test_1 = require('./test');
var _types_1 = require('./_types');
var store_1 = require('../store');
function pageNext() {
    var _a = store_1.default.getState(), pagePosition = _a.pagePosition, tutorial = _a.tutorial;
    var pages = tutorial.pages;
    if (pagePosition >= pages.length - 1) {
        return { type: _types_1.ROUTE_SET, payload: { route: 'final' } };
    }
    else {
        pagePosition += 1;
        setTimeout(function () { return store_1.default.dispatch(test_1.testsLoad(pagePosition)); });
        return pageSet(pagePosition);
    }
}
exports.pageNext = pageNext;
function pageSet(pagePosition) {
    if (pagePosition === void 0) { pagePosition = 0; }
    var _a = store_1.default.getState(), dir = _a.dir, progress = _a.progress, tutorial = _a.tutorial;
    if (pagePosition >= progress.pages.length) {
        return { type: _types_1.ROUTE_SET, payload: { route: 'final' } };
    }
    return { type: _types_1.PAGE_SET, payload: { dir: dir, pagePosition: pagePosition, tutorial: tutorial, progress: progress } };
}
exports.pageSet = pageSet;
function pagePositionLoad() {
    var progress = store_1.default.getState().progress;
    return { type: _types_1.PAGE_POSITION_LOAD, payload: { progress: progress } };
}
exports.pagePositionLoad = pagePositionLoad;
function pagePositionSet(pagePosition) {
    return { type: _types_1.PAGE_POSITION_SET, payload: { pagePosition: pagePosition } };
}
exports.pagePositionSet = pagePositionSet;
