"use strict";
var types_1 = require('./types');
exports.colors = {
    PASS: '#73C990',
    FAIL: '#FF4081',
    NOTE: '#9DA5B4',
};
exports._alert = {
    message: '',
    open: false,
    action: 'NOTE',
    duration: 1500,
    color: exports.colors.NOTE
};
var open = {
    open: true,
    action: 'NOTE',
    duration: 1500
};
var current = exports._alert;
function setAlert(a) {
    a.color = exports.colors[a.action] || exports.colors.NOTE;
    var statusBarAlert = document.getElementsByClassName('cr-alert-replay')[0];
    statusBarAlert.style.color = a.color;
    current = a;
    return Object.assign({}, open, a);
}
function alert(alert, action) {
    if (alert === void 0) { alert = exports._alert; }
    switch (action.type) {
        case types_1.ALERT_REPLAY:
            return setAlert(current);
        case types_1.ALERT_OPEN:
            return setAlert(action.payload.alert);
        case types_1.ALERT_CLOSE:
            return Object.assign({}, alert, { open: false });
        default:
            return alert;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = alert;
//# sourceMappingURL=index.js.map