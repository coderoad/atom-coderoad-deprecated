"use strict";
var _types_1 = require('../../actions/_types');
function hintPositionReducer(hintPosition, action) {
    if (hintPosition === void 0) { hintPosition = 0; }
    switch (action.type) {
        case _types_1.HINT_POSITION_SET:
            return action.payload.hintPosition;
        default:
            return hintPosition;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hintPositionReducer;
