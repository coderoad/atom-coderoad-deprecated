"use strict";
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
var _position = {
    page: 0,
};
function positionReducer(position, action) {
    if (position === void 0) { position = _position; }
    switch (action.type) {
        case _types_1.POSITION_LOAD:
            var pages = store_1.default.getState().progress.pages;
            var page = pages.indexOf(function (x) { return !x; });
            if (page < 0) {
                page = pages.length - 1;
            }
            return { page: page };
        case _types_1.PAGE_SET:
        case _types_1.POSITION_SET:
            return action.payload.position;
        default:
            return position;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = positionReducer;
