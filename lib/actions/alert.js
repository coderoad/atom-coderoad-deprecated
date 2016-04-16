"use strict";
var store_1 = require('../store/store');
var actionTypes_1 = require('./actionTypes');
function toggleAlert(alert) {
    var isOpen = store_1.store.getState().alert.open;
    if (!alert) {
        alert = { message: '', action: '', open: false };
    }
    else {
        alert = Object.assign({}, { open: !isOpen }, alert);
    }
    return { type: actionTypes_1.TOGGLE_ALERT, payload: { alert: alert } };
}
exports.toggleAlert = toggleAlert;
function replayAlert() {
    return { type: actionTypes_1.REPLAY_ALERT };
}
exports.replayAlert = replayAlert;
