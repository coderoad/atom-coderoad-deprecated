"use strict";
var types_1 = require('./types');
function windowReducer(open, action) {
    if (open === void 0) { open = false; }
    switch (action.type) {
        case types_1.QUIT:
            return false;
        case types_1.WINDOW_TOGGLE:
            return !open;
        default:
            return open;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = windowReducer;
//# sourceMappingURL=reducer.js.map