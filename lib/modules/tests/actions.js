"use strict";
var actions_1 = require('../../actions');
var testName_1 = require('./test-run/testName');
var types_1 = require('./types');
function testLoad() {
    return function (dispatch, getState) {
        var _a = getState(), dir = _a.dir, pagePosition = _a.pagePosition, tutorial = _a.tutorial;
        var tasks = tutorial.pages[pagePosition].tasks || [];
        var testFile = testName_1.default({ tutorial: tutorial, pagePosition: pagePosition });
        dispatch({
            type: types_1.TEST_LOAD, payload: {
                dir: dir,
                tasks: tasks,
                tutorial: tutorial,
                testFile: testFile,
            }
        });
    };
}
exports.testLoad = testLoad;
function testRun() {
    return function (dispatch, getState) {
        var timeSinceLastTestRun = performance.now() - getState().testRun.time;
        if (timeSinceLastTestRun < 1000) {
            return;
        }
        var _a = getState(), dir = _a.dir, tutorial = _a.tutorial, taskPosition = _a.taskPosition, pagePosition = _a.pagePosition;
        var tasks = tutorial.pages[pagePosition].tasks;
        var hasTasks = tasks && tasks.length > 0;
        var testFile = testName_1.default({ tutorial: tutorial, pagePosition: pagePosition });
        dispatch({
            type: types_1.TEST_RUN,
            payload: { hasTasks: hasTasks, dir: dir, tutorial: tutorial, taskPosition: taskPosition, testFile: testFile }
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
                duration: result.msg && result.msg.length ?
                    (result.msg.length * 50) + 1000 : 2000
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
    return function (dispatch) {
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
            default:
                return;
        }
        dispatch({ type: types_1.TEST_COMPLETE, payload: { error: result.error } });
    };
}
exports.testComplete = testComplete;
//# sourceMappingURL=actions.js.map