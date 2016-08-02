"use strict";
var types_1 = require('../types');
var run_1 = require('./run');
var pageSetTimeout = 1200;
var testCompleteTimeout = 800;
var defaultTestRun = {
    running: false,
    time: performance.now(),
};
function runTest(testRun, action) {
    if (testRun === void 0) { testRun = defaultTestRun; }
    switch (action.type) {
        case types_1.TEST_RUN:
            var _a = action.payload, taskTests = _a.taskTests, dir = _a.dir, tutorial = _a.tutorial, taskPosition = _a.taskPosition;
            return {
                running: true,
                time: run_1.default(taskTests, dir, tutorial, taskPosition),
            };
        case types_1.TEST_COMPLETE:
            return {
                running: false,
                time: performance.now() + testCompleteTimeout,
            };
        case 'PAGE_SET':
            return {
                running: false,
                time: performance.now() + pageSetTimeout,
            };
        default:
            return testRun;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTest;
