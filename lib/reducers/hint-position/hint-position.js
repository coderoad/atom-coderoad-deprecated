"use strict";
var Type = require('../../actions/actionTypes');
function hintPositionReducer(hintPosition, action) {
    if (hintPosition === void 0) { hintPosition = 0; }
    switch (action.type) {
        case Type.SET_PAGE:
            return 0;
        case Type.TEST_RESULT:
            if (action.payload.result.change !== 0) {
                return 0;
            }
            return hintPosition;
        case Type.SET_HINT_POSITION:
            return action.payload.hintPosition;
        default:
            return hintPosition;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hintPositionReducer;
