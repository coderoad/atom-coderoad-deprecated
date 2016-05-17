"use strict";
var types_1 = require('../types');
function pagePosition(pagePosition, action) {
    if (pagePosition === void 0) { pagePosition = 0; }
    switch (action.type) {
        case types_1.PAGE_SET:
            return action.payload.pagePosition;
        default:
            return pagePosition;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pagePosition;
