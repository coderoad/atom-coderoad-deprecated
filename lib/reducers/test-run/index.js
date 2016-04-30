"use strict";
var _types_1 = require('../../actions/_types');
var run_1 = require('./run');
var pageTimeout = 800;
var previous = new Date().getTime();
function runTestReducer(testRun, action) {
    if (testRun === void 0) { testRun = false; }
    switch (action.type) {
        case _types_1.TEST_RUN:
            var current = new Date().getTime();
            if (current - previous > pageTimeout) {
                previous = current;
                return run_1.runTaskTests();
            }
            return false;
        case _types_1.TEST_COMPLETE:
            return false;
        case _types_1.PAGE_SET:
            previous = new Date().getTime();
            return false;
        default:
            return testRun;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTestReducer;
