"use strict";
var _types_1 = require('../../actions/_types');
var _alert = {
    message: '',
    open: false,
    action: '',
};
var open = {
    open: true,
    pass: true,
};
var current = _alert;
function alertReducer(alert, action) {
    if (alert === void 0) { alert = _alert; }
    var statusBarAlert = document.getElementsByClassName('cr-alert-replay')[0];
    switch (action.type) {
        case _types_1.ALERT_REPLAY:
            return Object.assign({}, current, open);
        case _types_1.ALERT_TOGGLE:
            return action.payload.alert || _alert;
        case _types_1.TUTORIAL_UPDATE:
            current = Object.assign({}, {
                message: "run `npm install --save-dev " + action.payload.name + "`",
                action: 'note',
                duration: 4000,
            }, open);
            return current;
        case _types_1.TEST_RESULT:
            var result = action.payload.result;
            if (result.pass && result.change > 0) {
                statusBarAlert.style.color = '#73C990';
                current = Object.assign({}, {
                    message: result.msg,
                    duration: result.duration || 1500,
                }, open);
                return current;
            }
            else if (result.pass === false && result.change < 1) {
                statusBarAlert.style.color = '#FF4081';
                current = Object.assign({}, {
                    message: result.msg,
                    action: 'fail',
                    duration: result.duration || 2500,
                }, open);
                return current;
            }
            statusBarAlert.style.color = '#9DA5B4';
            current = Object.assign({}, {
                message: result.msg,
                action: 'note',
                duration: result.duration || 2500,
            }, open);
            return current;
        case _types_1.COMPLETE_PAGE:
            current = Object.assign({}, {
                message: "Page " + (action.payload.position.page + 1) + " Complete",
            }, open);
            return current;
        case _types_1.COMPLETE_CHAPTER:
            current = Object.assign({}, {
                message: "Chapter " + (action.payload.chapter + 1) + " Complete",
            }, open);
            return current;
        case _types_1.COMPLETE_TUTORIAL:
            current = Object.assign({}, {
                message: 'Tutorial Complete',
            }, open);
            return current;
        default:
            return alert;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = alertReducer;
