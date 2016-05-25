"use strict";
var parse_loaders_1 = require('./parse-loaders');
var handle_result_1 = require('./handle-result');
function runTaskTests(taskTests, dir, tutorial, taskPosition) {
    var tests = taskTests;
    if (tests && tests.length) {
        var tutorialConfig = tutorial.config;
        var output = parse_loaders_1.default(tests, tutorialConfig.testSuffix, tutorial, dir);
        var config = {
            dir: dir,
            tutorialDir: tutorialConfig.dir,
            taskPosition: taskPosition
        };
        tutorialConfig.run(output, config, handle_result_1.default);
    }
    return true;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTaskTests;
