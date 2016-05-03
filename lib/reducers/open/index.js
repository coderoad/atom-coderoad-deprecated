"use strict";
var _types_1 = require('../../actions/_types');
function openReducer(open, action) {
    if (open === void 0) { open = false; }
    switch (action.type) {
        case _types_1.WINDOW_TOGGLE:
            return !open;
        default:
            return open;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = openReducer;
