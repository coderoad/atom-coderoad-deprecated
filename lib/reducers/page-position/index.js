"use strict";
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
function pagePositionReducer(pagePosition, action) {
    if (pagePosition === void 0) { pagePosition = 0; }
    switch (action.type) {
        case _types_1.PAGE_POSITION_LOAD:
            var pages = store_1.default.getState().progress.pages;
            var firstFail = pages.indexOf(function (x) { return !x; });
            return firstFail > 0 ? firstFail : pages.length - 1;
        case _types_1.PAGE_SET:
        case _types_1.PAGE_POSITION_SET:
            return action.payload.pagePosition;
        default:
            return pagePosition;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pagePositionReducer;
