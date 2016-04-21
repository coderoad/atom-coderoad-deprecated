"use strict";
var store_1 = require('../store');
var _types_1 = require('./_types');
function alertToggle(alert) {
    var isOpen = store_1.store.getState().alert.open;
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
    return {
        payload: { alert: alert },
        type: _types_1.ALERT_TOGGLE,
    };
}
exports.alertToggle = alertToggle;
function alertReplay() {
    return { type: _types_1.ALERT_REPLAY };
}
exports.alertReplay = alertReplay;
