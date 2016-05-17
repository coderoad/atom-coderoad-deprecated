"use strict";
var types_1 = require('../types');
var run_1 = require('./run');
var pageTimeout = 800;
var previous = new Date().getTime();
function runTest(testRun, action) {
    if (testRun === void 0) { testRun = false; }
    switch (action.type) {
        case types_1.TEST_RUN:
            var current = new Date().getTime();
            if (current - previous > pageTimeout) {
                previous = current;
                var _a = action.payload, taskTests = _a.taskTests, dir = _a.dir, tutorial = _a.tutorial, taskPosition = _a.taskPosition;
                return run_1.default(taskTests, dir, tutorial, taskPosition);
            }
            return false;
        case types_1.TEST_COMPLETE:
            return false;
        case 'PAGE_SET':
            previous = new Date().getTime();
            return false;
        default:
            return testRun;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTest;
