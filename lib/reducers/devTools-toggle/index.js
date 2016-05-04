"use strict";
var _types_1 = require('../../actions/_types');
var editor_1 = require('../../atom/editor');
function devToolsToggleReducer(open, action) {
    if (open === void 0) { open = false; }
    switch (action.type) {
        case _types_1.DEVTOOLS_TOGGLE:
            editor_1.toggleDevTools();
            return !open;
        default:
            return open;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = devToolsToggleReducer;
