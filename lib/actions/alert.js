"use strict";
var store_1 = require('../store/store');
var Type = require('./actionTypes');
var _ = require('lodash');
function toggleAlert(alert) {
    var isOpen = store_1.store.getState().alert.open;
    if (!alert) {
        alert = { message: '', action: '', open: false };
    }
    else {
        alert = _.assign(alert, { open: !isOpen });
    }
    return { type: Type.TOGGLE_ALERT, payload: { alert: alert } };
}
exports.toggleAlert = toggleAlert;
function replayAlert() {
    return { type: Type.REPLAY_ALERT };
}
exports.replayAlert = replayAlert;
