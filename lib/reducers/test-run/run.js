"use strict";
var test_result_1 = require('./test-result');
var fs_1 = require('fs');
var path_1 = require('path');
var parse_loaders_1 = require('./parse-loaders');
function runTaskTests(taskTests, dir, tutorial, taskPosition) {
    var tests = taskTests;
    if (tests && tests.length) {
        var tutorialConfig = tutorial.config;
        var output = parse_loaders_1.default(tests, tutorialConfig.testSuffix, tutorial, dir);
        var target = path_1.join(tutorialConfig.dir || dir, ".tmp" + tutorialConfig.testSuffix);
        fs_1.writeFileSync(target, output, 'utf8');
        var config = {
            dir: dir,
            tutorialDir: tutorialConfig.dir,
            taskPosition: taskPosition
        };
        tutorialConfig.run(target, config, test_result_1.handleResult);
    }
    return true;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTaskTests;
