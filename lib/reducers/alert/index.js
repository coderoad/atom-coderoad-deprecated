"use strict";
var _types_1 = require('../../actions/_types');
var _alert = {
    message: '',
    open: false,
    action: 'NOTE',
    duration: 1500,
};
var open = {
    open: true,
    action: 'NOTE',
    duration: 1500
};
var colors = {
    PASS: '#73C990',
    FAIL: '#FF4081',
    NOTE: '#9DA5B4',
};
var current = _alert;
function setAlert(options, color) {
    if (color) {
        var statusBarAlert = document.getElementsByClassName('cr-alert-replay')[0];
        statusBarAlert.style.color = color;
    }
    current = Object.assign({}, open, options);
    return current;
}
function alertReducer(alert, action) {
    if (alert === void 0) { alert = _alert; }
    switch (action.type) {
        case _types_1.ALERT_REPLAY:
            return setAlert(current);
        case _types_1.ALERT_TOGGLE:
            var a = action.payload.alert;
            if (!a) {
                return _alert;
            }
            return setAlert(a, colors[a.action] || colors.NOTE);
        default:
            return alert;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = alertReducer;
