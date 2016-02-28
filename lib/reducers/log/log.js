"use strict";
var Type = require('../../actions/actionTypes');
var defaultLog = {
    message: 'EMPTY',
    open: false
};
function logReducer(log, action) {
    if (log === void 0) { log = defaultLog; }
    switch (action.type) {
        case Type.TOGGLE_LOG:
            return {
                open: action.payload.open,
                message: log.message || ''
            };
        case Type.LOG_MESSAGE:
            return {
                open: true,
                message: action.payload.message
            };
        default:
            return log;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = logReducer;
