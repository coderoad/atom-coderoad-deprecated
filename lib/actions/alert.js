"use strict";
var _types_1 = require('./_types');
function alertOpen(alert) {
    return function (dispatch, getState) {
        dispatch({ type: _types_1.ALERT_OPEN, payload: { alert: alert } });
    };
}
exports.alertOpen = alertOpen;
function alertReplay() {
    return { type: _types_1.ALERT_REPLAY };
}
exports.alertReplay = alertReplay;
function alertClose() {
    return { type: _types_1.ALERT_CLOSE };
}
exports.alertClose = alertClose;
