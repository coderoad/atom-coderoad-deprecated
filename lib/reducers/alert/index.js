"use strict";
var _types_1 = require('../../actions/_types');
var _alert = {
    message: '',
    open: false,
    action: '',
};
var open = {
    open: true,
    action: 'pass',
};
var current = _alert;
function setAlert(options) {
    current = Object.assign({}, open, options);
    return current;
}
function alertReducer(alert, action) {
    if (alert === void 0) { alert = _alert; }
    var statusBarAlert = document.getElementsByClassName('cr-alert-replay')[0];
    switch (action.type) {
        case _types_1.ALERT_REPLAY:
            return setAlert(current);
        case _types_1.ALERT_TOGGLE:
            return action.payload.alert || _alert;
        case _types_1.TUTORIAL_UPDATE:
            return setAlert({
                message: "run `npm install --save-dev " + action.payload.name + "`",
                action: 'note',
                duration: 4000,
            });
        case _types_1.TEST_RESULT:
            var result = action.payload.result;
            switch (true) {
                case result.pass && result.change > 0:
                    statusBarAlert.style.color = '#73C990';
                    return setAlert({
                        message: result.msg,
                        duration: result.duration || 1500,
                    });
                case result.pass === false && result.change < 1:
                    statusBarAlert.style.color = '#FF4081';
                    return setAlert({
                        message: result.msg,
                        action: 'fail',
                        duration: result.duration || 2500,
                    });
                default:
                    statusBarAlert.style.color = '#9DA5B4';
            }
            return setAlert({
                message: result.msg,
                action: 'note',
                duration: result.duration || 2500,
            });
        case _types_1.COMPLETE_PAGE:
            return setAlert({
                message: "Page " + (action.payload.pagePosition + 1) + " Complete",
            });
        case _types_1.COMPLETE_TUTORIAL:
            return setAlert({
                message: 'Tutorial Complete',
            });
        default:
            return alert;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = alertReducer;
