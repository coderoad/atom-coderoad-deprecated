"use strict";
var _types_1 = require('../../actions/_types');
var _alert = {
    message: '',
    open: false,
    action: 'note',
    duration: 1500,
};
var open = {
    open: true,
    action: 'note',
    duration: 1500
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
            return setAlert(action.payload.alert || _alert);
        case _types_1.TUTORIAL_UPDATE:
            return setAlert({
                message: "run `npm install --save-dev " + action.payload.name + "`",
                duration: 4000,
            });
        case _types_1.TEST_RESULT:
            var result = action.payload.result;
            switch (action.filter) {
                case 'PASS':
                    return setAlert({
                        message: result.msg,
                        action: 'pass',
                        duration: result.duration || 1200,
                    }, '#73C990');
                case 'FAIL':
                    return setAlert({
                        message: result.msg,
                        action: 'fail',
                        duration: result.duration || 2200,
                    }, '#FF4081');
            }
            return setAlert({
                message: result.msg,
                duration: result.duration || 2200,
            }, '#9DA5B4');
        default:
            return alert;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = alertReducer;
