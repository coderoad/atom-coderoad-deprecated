"use strict";
var handle_result_1 = require('./handle-result');
function runTaskTests(_a) {
    var taskTests = _a.taskTests, dir = _a.dir, tutorial = _a.tutorial, taskPosition = _a.taskPosition, testFile = _a.testFile;
    if (taskTests && taskTests.length) {
        tutorial.config.run({ dir: dir, taskPosition: taskPosition, handleResult: handle_result_1.default, testFile: testFile });
    }
    return performance.now();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTaskTests;
