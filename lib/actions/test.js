"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
function testRun() {
    return { type: _types_1.TEST_RUN };
}
exports.testRun = testRun;
function testResult(result) {
    var actions = store_1.default.getState().taskActions;
    return { type: _types_1.TEST_RESULT, payload: { result: result, actions: actions } };
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
function testsLoad(pagePosition) {
    var _a = store_1.default.getState(), tasks = _a.tasks, progress = _a.progress;
    return { type: _types_1.TESTS_LOAD, payload: { pagePosition: pagePosition, tasks: tasks, progress: progress } };
}
exports.testsLoad = testsLoad;
