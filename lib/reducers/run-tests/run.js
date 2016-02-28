"use strict";
var test_result_1 = require('./test-result');
var _base_1 = require('../../_base');
function runTaskTests(setup) {
    var tests = _base_1.store.getState().taskTests;
    if (tests && tests.length) {
        var config = global.coderoad;
        config.taskPosition = _base_1.store.getState().taskPosition;
        global.coderoad.runner(tests, config, test_result_1.handleResult, test_result_1.handleLog);
    }
    return true;
}
exports.runTaskTests = runTaskTests;
