"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
function testRun() {
    return { type: _types_1.TEST_RUN };
}
exports.testRun = testRun;
function testResult(result) {
    var actions = store_1.store.getState().editorActions;
    return { type: _types_1.TEST_RESULT, payload: { result: result, actions: actions } };
}
exports.testResult = testResult;
function testComplete() {
    return { type: _types_1.TEST_COMPLETE };
}
exports.testComplete = testComplete;
