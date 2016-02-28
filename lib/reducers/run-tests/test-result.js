"use strict";
var _base_1 = require('../../_base');
var Action = require('../../actions/actions');
;
function handleResult(result) {
    _base_1.store.dispatch(Action.testComplete());
    if (!result.pass) {
        _base_1.store.dispatch(Action.testResult(result));
    }
    else if (result.pass) {
        result.msg = "Task " + result.taskPosition + " Complete";
        _base_1.store.dispatch(Action.pageComplete());
        _base_1.store.dispatch(Action.testResult(result));
    }
}
exports.handleResult = handleResult;
;
function handleLog(message) {
    console.log(message);
    _base_1.store.dispatch(Action.logMessage(message));
}
exports.handleLog = handleLog;
