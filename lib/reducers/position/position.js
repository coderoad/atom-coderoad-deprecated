"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var defaultPosition = {
    chapter: 0,
    page: 0
};
function positionReducer(position, action) {
    if (position === void 0) { position = defaultPosition; }
    switch (action.type) {
        case actionTypes_1.SET_PAGE:
        case actionTypes_1.SET_POSITION:
            return action.payload.position;
        default:
            return position;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = positionReducer;
