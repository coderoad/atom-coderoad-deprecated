"use strict";
var _types_1 = require('./_types');
function alertToggle(alert, filter) {
    return function (dispatch, getState) {
        dispatch({ type: _types_1.ALERT_TOGGLE, payload: { alert: alert }, filter: filter });
    };
}
exports.alertToggle = alertToggle;
function alertReplay() {
    return { type: _types_1.ALERT_REPLAY };
}
exports.alertReplay = alertReplay;
