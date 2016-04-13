"use strict";
var Type = require('../../actions/actionTypes');
var defaultPosition = {
    chapter: 0,
    page: 0
};
function positionReducer(position, action) {
    if (position === void 0) { position = defaultPosition; }
    switch (action.type) {
        case Type.SET_PAGE:
        case Type.SET_POSITION:
            return action.payload.position;
        default:
            return position;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = positionReducer;
