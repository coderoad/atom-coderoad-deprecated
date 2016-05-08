"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
function testRun() {
    var _a = store_1.default.getState(), taskTests = _a.taskTests, dir = _a.dir, tutorial = _a.tutorial, taskPosition = _a.taskPosition;
    return { type: _types_1.TEST_RUN, payload: { taskTests: taskTests, dir: dir, tutorial: tutorial, taskPosition: taskPosition } };
}
exports.testRun = testRun;
function testResult(result) {
    var taskActions = store_1.default.getState().taskActions;
    return { type: _types_1.TEST_RESULT, payload: { result: result, taskActions: taskActions } };
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
    var _a = store_1.default.getState(), tasks = _a.tasks, progress = _a.progress, tutorial = _a.tutorial, dir = _a.dir;
    return { type: _types_1.TESTS_LOAD, payload: {
            pagePosition: pagePosition, tasks: tasks, progress: progress, tutorial: tutorial, dir: dir
        } };
}
exports.testsLoad = testsLoad;
