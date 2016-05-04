"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
function testRun() {
    return { type: _types_1.TEST_RUN };
}
exports.testRun = testRun;
function testResult(result) {
    var actions = store_1.default.getState().taskActions;
    return {
        payload: { result: result, actions: actions },
        type: _types_1.TEST_RESULT,
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
function testsLoad(pagePosition) {
    return { type: _types_1.TESTS_LOAD, payload: { pagePosition: pagePosition } };
}
exports.testsLoad = testsLoad;
