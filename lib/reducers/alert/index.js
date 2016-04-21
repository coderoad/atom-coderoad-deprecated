"use strict";
var _types_1 = require('../../actions/_types');
var _alert = {
    message: '',
    open: false,
    action: '',
};
var current = _alert;
function alertReducer(alert, action) {
    if (alert === void 0) { alert = _alert; }
    var statusBarAlert = document.getElementsByClassName('cr-alert-replay')[0];
    switch (action.type) {
        case _types_1.ALERT_REPLAY:
            return Object.assign({}, current, { open: true });
        case _types_1.ALERT_TOGGLE:
            return action.payload.alert || _alert;
        case _types_1.TEST_RESULT:
            var result = action.payload.result;
            if (result.pass && result.change > 0) {
                statusBarAlert.style.color = '#73C990';
                current = {
                    message: result.msg,
                    open: true,
                    action: 'pass',
                    duration: result.duration || 1500,
                };
                return current;
            }
            else if (result.pass === false && result.change < 1) {
                statusBarAlert.style.color = '#FF4081';
                current = {
                    message: result.msg,
                    open: true,
                    action: 'fail',
                    duration: result.duration || 2500,
                };
                return current;
            }
            statusBarAlert.style.color = '#9DA5B4';
            current = {
                message: result.msg,
                open: true,
                action: 'note',
                duration: result.duration || 2500,
            };
            return current;
        case _types_1.COMPLETE_PAGE:
            current = {
                message: "Page " + (action.payload.position.page + 1) + " Complete",
                open: true,
                action: 'pass',
            };
            return current;
        case _types_1.COMPLETE_CHAPTER:
            current = {
                message: "Chapter " + (action.payload.chapter + 1) + " Complete",
                open: true,
                action: 'pass',
            };
            return current;
        case _types_1.COMPLETE_TUTORIAL:
            current = {
                message: 'Tutorial Complete',
                open: true,
                action: 'pass',
            };
            return current;
        default:
            return alert;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = alertReducer;
