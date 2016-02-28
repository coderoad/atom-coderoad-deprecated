"use strict";
var Type = require('../../actions/actionTypes');
function tutorialsReducer(tutorials, action) {
    if (tutorials === void 0) { tutorials = []; }
    switch (action.type) {
        case Type.LOAD_TUTORIALS:
            return action.payload.tutorials;
        default:
            return tutorials;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialsReducer;
