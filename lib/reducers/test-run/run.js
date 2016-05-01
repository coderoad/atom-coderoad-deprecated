"use strict";
var test_result_1 = require('./test-result');
var store_1 = require('../../store');
var fs_1 = require('fs');
var path_1 = require('path');
var parse_loaders_1 = require('./parse-loaders');
function runTaskTests(setup) {
    var tests = store_1.default.getState().taskTests;
    if (tests && tests.length) {
        var dir = store_1.default.getState().dir;
        var tutorialConfig = store_1.default.getState().tutorial.config;
        var output = parse_loaders_1.default(tests, tutorialConfig.testSuffix);
        var target = path_1.join(tutorialConfig.dir || dir, ".tmp" + tutorialConfig.testSuffix);
        fs_1.writeFileSync(target, output, 'utf8');
        var config = {
            dir: dir,
            tutorialDir: tutorialConfig.dir,
            taskPosition: store_1.default.getState().taskPosition
        };
        tutorialConfig.run(target, config, test_result_1.handleResult);
    }
    return true;
}
exports.runTaskTests = runTaskTests;
