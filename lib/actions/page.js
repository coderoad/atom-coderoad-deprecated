"use strict";
var test_1 = require('./test');
var _types_1 = require('./_types');
var store_1 = require('../store');
function pageNext() {
    var pagePosition = store_1.default.getState().pagePosition;
    var pages = store_1.default.getState().tutorial.pages;
    if (pagePosition >= pages.length - 1) {
        return {
            payload: { route: 'final' },
            type: _types_1.ROUTE_SET,
        };
    }
    else {
        pagePosition = pagePosition + 1;
        store_1.default.dispatch(test_1.testsLoad(pagePosition));
        return {
            payload: { pagePosition: pagePosition },
            type: _types_1.PAGE_SET,
        };
    }
}
exports.pageNext = pageNext;
function pageSet(pagePosition) {
    if (pagePosition === void 0) { pagePosition = 0; }
    if (store_1.default.getState().progress.pages[pagePosition]) {
        return {
            payload: { route: 'final' },
            type: _types_1.ROUTE_SET,
        };
    }
    return {
        payload: { pagePosition: pagePosition },
        type: _types_1.PAGE_SET,
    };
}
exports.pageSet = pageSet;
function pagePositionLoad() {
    return { type: _types_1.PAGE_POSITION_LOAD };
}
exports.pagePositionLoad = pagePositionLoad;
function pagePositionSet(pagePosition) {
    return {
        payload: { pagePosition: pagePosition },
        type: _types_1.PAGE_POSITION_SET,
    };
}
exports.pagePositionSet = pagePositionSet;
