"use strict";
var Type = require('../../actions/actionTypes');
var defaultWarning = {
    key: 'loading',
    title: 'Loading',
    click: null,
    text: ''
};
function warningReducer(warning, action) {
    if (warning === void 0) { warning = defaultWarning; }
    switch (action.type) {
        case Type.SETUP_WARNING:
            return action.payload.warning;
        default:
            return warning;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = warningReducer;
