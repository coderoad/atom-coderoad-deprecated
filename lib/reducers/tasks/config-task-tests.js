"use strict";
var path_1 = require('path');
var system_1 = require('../../services/system');
function configTestString(dir, tutorial, config, name, testPath) {
    if (system_1.isWindows) {
        testPath = testPath.split('/').join('\\');
    }
    if (tutorial && tutorial.config.dir) {
        testPath = path_1.join(tutorial.config.dir, testPath);
    }
    else {
        testPath = path_1.join(dir, 'node_modules', name, testPath);
    }
    if (tutorial.config.testSuffix) {
        testPath += tutorial.config.testSuffix;
    }
    return testPath;
}
function configTaskTests(dir, tutorial, tasks) {
    var config = tutorial.config, name = tutorial.name;
    return !tasks ? [] : tasks.map(function (task) {
        if (task.tests) {
            task.tests = task.tests.map(function (testPath) {
                if (typeof testPath === 'string') {
                    return configTestString(dir, tutorial, config, name, testPath);
                }
                else {
                    console.error('Invalid task test', testPath);
                }
            });
        }
        return task;
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configTaskTests;
