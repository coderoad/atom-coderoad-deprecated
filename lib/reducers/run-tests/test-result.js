"use strict";
var store_1 = require('../../store/store');
var actions_1 = require('../../actions/actions');
function handleResult(result) {
    store_1.store.dispatch(actions_1.testComplete());
    if (result.completed) {
        store_1.store.dispatch(actions_1.testResult(result));
        store_1.store.dispatch(actions_1.pageComplete());
    }
    else if (!result.pass) {
        store_1.store.dispatch(actions_1.testResult(result));
    }
    else if (result.pass) {
        result.msg = "Task " + result.taskPosition + " Complete";
        store_1.store.dispatch(actions_1.testResult(result));
    }
}
exports.handleResult = handleResult;
;
