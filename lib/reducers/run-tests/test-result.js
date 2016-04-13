"use strict";
var store_1 = require('../../store/store');
var Action = require('../../actions/actions');
function handleResult(result) {
    store_1.store.dispatch(Action.testComplete());
    if (result.completed) {
        store_1.store.dispatch(Action.testResult(result));
        store_1.store.dispatch(Action.pageComplete());
    }
    else if (!result.pass) {
        store_1.store.dispatch(Action.testResult(result));
    }
    else if (result.pass) {
        result.msg = "Task " + result.taskPosition + " Complete";
        store_1.store.dispatch(Action.testResult(result));
    }
}
exports.handleResult = handleResult;
;
