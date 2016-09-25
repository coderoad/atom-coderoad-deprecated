"use strict";
var types_1 = require('../types');
var load_1 = require('./load');
var run_1 = require('./run');
var pageSetTimeout = 300;
var testCompleteTimeout = 700;
var defaultTestRun = {
    running: false,
    time: performance.now(),
    error: false,
};
function runTest(testRun, action) {
    if (testRun === void 0) { testRun = defaultTestRun; }
    switch (action.type) {
        case types_1.TEST_LOAD:
            load_1.default(action.payload);
            return {
                running: false,
                time: performance.now() + pageSetTimeout,
                error: false,
            };
        case types_1.TEST_RUN:
            return {
                running: true,
                time: run_1.default(action.payload),
                error: false,
            };
        case types_1.TEST_COMPLETE:
            return {
                running: false,
                time: performance.now() + testCompleteTimeout,
                error: action.payload.error || false,
            };
        default:
            return testRun;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTest;
//# sourceMappingURL=index.js.map