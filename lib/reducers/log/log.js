"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var defaultLog = {
    message: 'EMPTY',
    open: false
};
function logReducer(log, action) {
    if (log === void 0) { log = defaultLog; }
    switch (action.type) {
        case actionTypes_1.TOGGLE_LOG:
            return {
                open: action.payload.open,
                message: log.message || ''
            };
        case actionTypes_1.LOG_MESSAGE:
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
