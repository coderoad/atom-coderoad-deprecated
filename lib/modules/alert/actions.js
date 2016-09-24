"use strict";
var types_1 = require('./types');
function alertOpen(alert) {
    return { type: types_1.ALERT_OPEN, payload: { alert: alert } };
}
exports.alertOpen = alertOpen;
function alertReplay() {
    return { type: types_1.ALERT_REPLAY };
}
exports.alertReplay = alertReplay;
function alertClose() {
    return { type: types_1.ALERT_CLOSE };
}
exports.alertClose = alertClose;
//# sourceMappingURL=actions.js.map