"use strict";
var Type = require('../../actions/actionTypes');
var defaultHint = {
    position: 0
};
function hintReducer(hint, action) {
    if (hint === void 0) { hint = defaultHint; }
    switch (action.type) {
        case Type.SET_PAGE:
            return {
                position: 0
            };
        case Type.TEST_RESULT:
            if (action.payload.result.change !== 0) {
                return {
                    position: 0
                };
            }
            return hint;
        case Type.SET_HINT_POSITION:
            return {
                position: action.payload.hintPosition
            };
        default:
            return hint;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hintReducer;
