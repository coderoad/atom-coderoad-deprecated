"use strict";
var Type = require('./actionTypes');
var Action = require('./actions');
var _base_1 = require('../_base');
function checkPageComplete(taskPosition) {
    var taskLength = _base_1.store.getState().taskTests.length;
    if (taskPosition > taskLength) {
        _base_1.store.dispatch(Action.pageComplete());
    }
}
function setTaskPosition(taskPosition) {
    var currentTaskPosition = _base_1.store.getState().taskPosition;
    if (currentTaskPosition === taskPosition) {
        return { type: Type.NULL };
    }
    checkPageComplete(taskPosition);
    return { type: Type.SET_TASK_POSITION, payload: { taskPosition: taskPosition } };
}
exports.setTaskPosition = setTaskPosition;
function showHint() {
    return { type: Type.SHOW_HINT };
}
exports.showHint = showHint;
function runTests() {
    return { type: Type.RUN_TESTS };
}
exports.runTests = runTests;
function testResult(result) {
    var actions = _base_1.store.getState().editorActions;
    return { type: Type.TEST_RESULT, payload: { result: result, actions: actions } };
}
exports.testResult = testResult;
function testComplete() {
    return { type: Type.TEST_COMPLETE };
}
exports.testComplete = testComplete;
