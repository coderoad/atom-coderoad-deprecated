"use strict";
var _types_1 = require('./_types');
function alertToggle(alert) {
    return function (dispatch, getState) {
        var isOpen = getState().alert.open;
        if (!alert) {
            alert = {
                action: '',
                message: '',
                open: false,
            };
        }
        else {
            alert = Object.assign({}, { open: !isOpen }, alert);
        }
        dispatch({ type: _types_1.ALERT_TOGGLE, payload: { alert: alert } });
    };
}
exports.alertToggle = alertToggle;
function alertReplay() {
    return { type: _types_1.ALERT_REPLAY };
}
exports.alertReplay = alertReplay;
