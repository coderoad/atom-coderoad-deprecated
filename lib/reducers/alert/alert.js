"use strict";
var Type = require('../../actions/actionTypes');
var defaultAlert = {
    message: '',
    open: false,
    action: '',
    duration: 0
};
var current = defaultAlert;
function alertReducer(alert, action) {
    if (alert === void 0) { alert = defaultAlert; }
    var statusBarAlert = document.getElementsByClassName('cr-alert-replay')[0];
    switch (action.type) {
        case Type.REPLAY_ALERT:
            return {
                open: true,
                message: current.message,
                action: current.action,
                duration: 2000
            };
        case Type.TOGGLE_ALERT:
            return action.payload.alert || defaultAlert;
        case Type.TEST_RESULT:
            var result = action.payload.result;
            if (result.pass && result.change > 0) {
                statusBarAlert.style.color = '#73C990';
                return {
                    message: result.msg,
                    open: true,
                    action: 'pass',
                    duration: result.duration || 1500
                };
            }
            else if (result.pass === false && result.change < 1) {
                statusBarAlert.style.color = '#FF4081';
                return {
                    message: result.msg,
                    open: true,
                    action: 'fail',
                    duration: result.duration || 2500
                };
            }
            statusBarAlert.style.color = '#9DA5B4';
            return {
                message: result.msg,
                open: true,
                action: 'note',
                duration: result.duration || 2500
            };
        case Type.PAGE_COMPLETE:
            return {
                message: "Page " + (action.payload.position.page + 1) + " Complete",
                open: true,
                action: 'pass',
                duration: 2000
            };
        case Type.CHAPTER_COMPLETE:
            return {
                message: "Chapter " + (action.payload.chapter + 1) + " Complete",
                open: true,
                action: 'pass',
                duration: 2000
            };
        case Type.PROJECT_COMPLETE:
            return {
                message: 'Tutorial Complete',
                open: true,
                action: 'pass',
                duration: 2000
            };
        default:
            return alert;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = alertReducer;
