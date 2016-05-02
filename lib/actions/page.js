"use strict";
var test_1 = require('./test');
var _types_1 = require('./_types');
var store_1 = require('../store');
var _position = {
    page: 0,
};
function pageNext() {
    var position = null;
    var page = store_1.default.getState().position.page;
    var pages = store_1.default.getState().tutorial.pages;
    if (page < pages.length - 1) {
        store_1.default.dispatch(test_1.testsLoad());
        position = {
            page: page + 1,
        };
    }
    else {
        return {
            payload: { route: 'final' },
            type: _types_1.ROUTE_SET,
        };
    }
    return {
        payload: { position: position },
        type: _types_1.PAGE_SET,
    };
}
exports.pageNext = pageNext;
function pageSet(position) {
    if (position === void 0) { position = _position; }
    if (position.completed) {
        return {
            payload: { route: 'final' },
            type: _types_1.ROUTE_SET,
        };
    }
    return {
        payload: { position: position },
        type: _types_1.PAGE_SET,
    };
}
exports.pageSet = pageSet;
