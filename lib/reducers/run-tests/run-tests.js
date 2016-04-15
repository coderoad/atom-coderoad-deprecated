"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var run_1 = require('./run');
var pageTimeout = 2000;
var previous = new Date().getTime();
function runTestReducer(runTests, action) {
    if (runTests === void 0) { runTests = false; }
    switch (action.type) {
        case actionTypes_1.RUN_TESTS:
            var current = new Date().getTime();
            if (current - previous > pageTimeout) {
                previous = current;
                return run_1.runTaskTests();
            }
            return false;
        case actionTypes_1.TEST_COMPLETE:
            return false;
        case actionTypes_1.SET_PAGE:
            previous = new Date().getTime();
            return false;
        default:
            return runTests;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTestReducer;
