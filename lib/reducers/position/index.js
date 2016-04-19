"use strict";
var _types_1 = require('../../actions/_types');
var _position = {
    chapter: 0,
    page: 0
};
function positionReducer(position, action) {
    if (position === void 0) { position = _position; }
    switch (action.type) {
        case _types_1.PAGE_SET:
        case _types_1.POSITION_SET:
            return action.payload.position;
        default:
            return position;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = positionReducer;
