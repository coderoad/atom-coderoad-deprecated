"use strict";
var _types_1 = require('../../actions/_types');
var defaultLog = {
    message: 'EMPTY',
    open: false
};
function logReducer(log, action) {
    if (log === void 0) { log = defaultLog; }
    switch (action.type) {
        case _types_1.LOG_TOGGLE:
            return {
                open: action.payload.open,
                message: log.message || ''
            };
        case _types_1.LOG_MESSAGE:
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
