"use strict";
var actionTypes_1 = require('./actionTypes');
var store_1 = require('../store/store');
function showHint() {
    return { type: actionTypes_1.HINT_SHOW };
}
exports.showHint = showHint;
function runTests() {
    return { type: actionTypes_1.TEST_RUN };
}
exports.runTests = runTests;
function testResult(result) {
    var actions = store_1.store.getState().editorActions;
    return { type: actionTypes_1.TEST_RESULT, payload: { result: result, actions: actions } };
}
exports.testResult = testResult;
function testComplete() {
    return { type: actionTypes_1.TEST_COMPLETE };
}
exports.testComplete = testComplete;
function setHintPosition(hintPosition) {
    return { type: actionTypes_1.HINT_POSITION_SET, payload: { hintPosition: hintPosition } };
}
exports.setHintPosition = setHintPosition;
