"use strict";
var test_result_1 = require('./test-result');
var store_1 = require('../../store/store');
var fs = require('fs');
var path = require('path');
var parse_loaders_1 = require('./parse-loaders');
function runTaskTests(setup) {
    var tests = store_1.store.getState().taskTests;
    if (tests && tests.length) {
        var config = window.coderoad;
        config.taskPosition = store_1.store.getState().taskPosition;
        var output = parse_loaders_1.default(tests, window.coderoad.suffix);
        var target = path.join(window.coderoad.tutorialDir || window.coderoad.dir, "_tmp." + window.coderoad.suffix);
        fs.writeFileSync(target, output, 'utf8');
        window.coderoad.runner(target, config, test_result_1.handleResult);
    }
    return true;
}
exports.runTaskTests = runTaskTests;
