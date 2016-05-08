"use strict";
var _types_1 = require('../../actions/_types');
function pagePositionReducer(pagePosition, action) {
    if (pagePosition === void 0) { pagePosition = 0; }
    switch (action.type) {
        case _types_1.PAGE_POSITION_LOAD:
            var pages = action.payload.progress.pages;
            var firstFail = pages.indexOf(false);
            return firstFail < 0 ? pages.length - 1 : firstFail;
        case _types_1.PAGE_SET:
        case _types_1.PAGE_POSITION_SET:
            return action.payload.pagePosition;
        default:
            return pagePosition;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pagePositionReducer;
