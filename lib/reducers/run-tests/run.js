"use strict";
var test_result_1 = require('./test-result');
var _base_1 = require('../../_base');
var fs = require('fs');
var path = require('path');
var parse_loaders_1 = require('./parse-loaders');
function runTaskTests(setup) {
    var testFile = _base_1.store.getState().taskTests;
    if (testFile) {
        var config = window.coderoad;
        config.taskPosition = _base_1.store.getState().taskPosition;
        var fileType = testFile.substr(testFile.lastIndexOf('.') + 1, testFile.length) || null;
        var tests = fs.readFileSync(testFile, 'utf8');
        var output = parse_loaders_1.default(tests, fileType);
        var target = path.join(window.coderoad.tutorialDir || window.coderoad.dir, "_tmp" + window.coderoad.suffix);
        fs.writeFileSync(target, output, 'utf8');
        window.coderoad.runner(target, config, test_result_1.handleResult);
    }
    return true;
}
exports.runTaskTests = runTaskTests;
