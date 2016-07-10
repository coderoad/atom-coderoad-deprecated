"use strict";
var handle_result_1 = require('./handle-result');
var parse_loaders_1 = require('./parse-loaders');
function runTaskTests(taskTests, dir, tutorial, taskPosition) {
    var tests = taskTests;
    if (tests && tests.length) {
        var tutorialConfig = tutorial.config;
        var testString = parse_loaders_1.default(tests, tutorialConfig.testSuffix, tutorial, dir);
        var config = {
            dir: dir,
            tutorialDir: tutorialConfig.dir,
            taskPosition: taskPosition
        };
        tutorialConfig.run({ testString: testString, config: config, handleResult: handle_result_1.default });
    }
    return true;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTaskTests;
