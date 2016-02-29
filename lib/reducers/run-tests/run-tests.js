"use strict";
var Type = require('../../actions/actionTypes');
var run_1 = require('./run');
var pageTimeout = 2000;
var previous = new Date().getTime();
function runTestReducer(runTests, action) {
    if (runTests === void 0) { runTests = false; }
    switch (action.type) {
        case Type.RUN_TESTS:
            var current = new Date().getTime();
            if (current - previous > pageTimeout) {
                previous = current;
                return run_1.runTaskTests();
            }
            else {
                return false;
            }
        case Type.TEST_COMPLETE:
            return false;
        case Type.SET_PAGE:
            previous = new Date().getTime();
            return false;
        default:
            return runTests;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTestReducer;
