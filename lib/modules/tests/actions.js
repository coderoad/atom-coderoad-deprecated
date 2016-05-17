"use strict";
var types_1 = require('./types');
var actions_1 = require('../../actions');
function testRun() {
    return function (dispatch, getState) {
        var _a = getState(), taskTests = _a.taskTests, dir = _a.dir, tutorial = _a.tutorial, taskPosition = _a.taskPosition;
        dispatch({
            type: types_1.TEST_RUN, payload: { taskTests: taskTests, dir: dir, tutorial: tutorial, taskPosition: taskPosition }
        });
    };
}
exports.testRun = testRun;
function testResult(result) {
    return function (dispatch, getState) {
        var _a = getState(), taskActions = _a.taskActions, progress = _a.progress, pagePosition = _a.pagePosition;
        var filter = getTestFilter(result);
        var alert = {
            message: result.msg,
            action: 'NOTE',
        };
        if (filter === 'PASS' || filter === 'FAIL') {
            dispatch(actions_1.hintPositionSet(0));
            alert = Object.assign({}, alert, {
                action: filter,
                duration: 1200,
            });
        }
        if (filter === 'FAIL' && progress.pages[pagePosition]) {
            dispatch(actions_1.progressCompletePage(false));
            alert = Object.assign({}, alert, {
                action: filter,
                duration: 2200,
            });
        }
        dispatch({ type: types_1.TEST_RESULT, payload: { result: result, taskActions: taskActions } });
        dispatch(actions_1.alertOpen(alert));
    };
}
exports.testResult = testResult;
function getTestFilter(result) {
    switch (true) {
        case result.pass && result.change > 0:
            return 'PASS';
        case result.pass === false && result.change <= 0:
            return 'FAIL';
        default:
            return 'NOTE';
    }
}
function testComplete(result) {
    return function (dispatch, getState) {
        switch (true) {
            case result.completed:
                dispatch(testResult(result));
                dispatch(actions_1.progressCompletePage());
                break;
            case !result.pass:
                dispatch(testResult(result));
                break;
            case result.pass:
                result.msg = "Task " + result.taskPosition + " Complete";
                dispatch(testResult(result));
                break;
        }
        dispatch({ type: types_1.TEST_COMPLETE });
    };
}
exports.testComplete = testComplete;
