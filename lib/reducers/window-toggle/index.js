"use strict";
var _types_1 = require('../../actions/_types');
var subscriptions_1 = require('../../atom/subscriptions');
function windowToggleReducer(open, action) {
    if (open === void 0) { open = false; }
    switch (action.type) {
        case _types_1.WINDOW_TOGGLE:
            return !open;
        case _types_1.QUIT:
            subscriptions_1.onDeactivate();
            return false;
        default:
            return open;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = windowToggleReducer;
