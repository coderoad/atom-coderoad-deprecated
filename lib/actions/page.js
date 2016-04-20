"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
function pageNext() {
    var position = store_1.store.getState().position;
    return { type: _types_1.PAGE_NEXT, payload: { position: position } };
}
exports.pageNext = pageNext;
function pageSet(position) {
    if (position === void 0) { position = { chapter: 0, page: 0 }; }
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
