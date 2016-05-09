"use strict";
var _types_1 = require('./_types');
function testRun() {
    return function (dispatch, getState) {
        var _a = getState(), taskTests = _a.taskTests, dir = _a.dir, tutorial = _a.tutorial, taskPosition = _a.taskPosition;
        dispatch({
            type: _types_1.TEST_RUN, payload: { taskTests: taskTests, dir: dir, tutorial: tutorial, taskPosition: taskPosition }
        });
    };
}
exports.testRun = testRun;
function testResult(result) {
    return function (dispatch, getState) {
        var taskActions = getState().taskActions;
        dispatch({ type: _types_1.TEST_RESULT, payload: { result: result, taskActions: taskActions } });
    };
}
exports.testResult = testResult;
function testComplete() {
    return { type: _types_1.TEST_COMPLETE };
}
exports.testComplete = testComplete;
function testSave() {
    return { type: _types_1.TEST_SAVE };
}
exports.testSave = testSave;
