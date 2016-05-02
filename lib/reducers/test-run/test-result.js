"use strict";
var store_1 = require('../../store');
var actions_1 = require('../../actions');
function handleResult(result) {
    store_1.default.dispatch(actions_1.testComplete());
    switch (true) {
        case result.completed:
            store_1.default.dispatch(actions_1.testResult(result));
            store_1.default.dispatch(actions_1.completePage());
            break;
        case !result.pass:
            store_1.default.dispatch(actions_1.testResult(result));
            break;
        case result.pass:
            result.msg = "Task " + result.taskPosition + " Complete";
            store_1.default.dispatch(actions_1.testResult(result));
            break;
    }
}
exports.handleResult = handleResult;
;
