"use strict";
var _types_1 = require('../../actions/_types');
function hintPositionReducer(hintPosition, action) {
    if (hintPosition === void 0) { hintPosition = 0; }
    switch (action.type) {
        case _types_1.PAGE_SET:
            return 0;
        case _types_1.TEST_RESULT:
            if (action.payload.result.change !== 0) {
                return 0;
            }
            return hintPosition;
        case _types_1.HINT_POSITION_SET:
            return action.payload.hintPosition;
        default:
            return hintPosition;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hintPositionReducer;
