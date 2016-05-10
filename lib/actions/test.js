"use strict";
var _types_1 = require('./_types');
var hint_1 = require('./hint');
var progress_1 = require('./progress');
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
        var _a = getState(), taskActions = _a.taskActions, progress = _a.progress, pagePosition = _a.pagePosition;
        var filter = getTestFilter(result);
        if (filter === 'PASS' || filter === 'FAIL') {
            dispatch(hint_1.hintPositionSet(0));
        }
        if (filter === 'FAIL' && progress.pages[pagePosition]) {
            dispatch(progress_1.completePage(false));
        }
        dispatch({ type: _types_1.TEST_RESULT, payload: { result: result, taskActions: taskActions }, filter: filter });
    };
}
exports.testResult = testResult;
function getTestFilter(result) {
    switch (true) {
        case result.pass && result.change > 0:
            return 'PASS';
        case result.pass === false && result.change < 1:
            return 'FAIL';
        default:
            return 'NOTE';
    }
}
function testComplete() {
    return { type: _types_1.TEST_COMPLETE };
}
exports.testComplete = testComplete;
function testSave() {
    return { type: _types_1.TEST_SAVE };
}
exports.testSave = testSave;
