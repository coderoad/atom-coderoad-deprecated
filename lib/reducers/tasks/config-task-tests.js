"use strict";
var path_1 = require('path');
var store_1 = require('../../store');
function configTestString(config, name, testPath) {
    if (window.coderoad.win) {
        testPath = testPath.split('/').join('\\');
    }
    var tutorial = store_1.store.getState().tutorial;
    if (tutorial && tutorial.config.dir) {
        testPath = path_1.join(tutorial.config.dir, testPath);
    }
    else {
        testPath = path_1.join(window.coderoad.dir, 'node_modules', name, testPath);
    }
    if (tutorial.config.testSuffix) {
        testPath += tutorial.config.testSuffix;
    }
    return testPath;
}
function configTaskTests(tasks) {
    var _a = store_1.store.getState().tutorial, config = _a.config, name = _a.name;
    return !tasks ? [] : tasks.map(function (task) {
        if (task.tests) {
            task.tests = task.tests.map(function (testPath) {
                if (typeof testPath === 'string') {
                    return configTestString(config, name, testPath);
                }
                else {
                    console.error('Invalid task test', testPath);
                }
            });
        }
        return task;
    });
}
exports.configTaskTests = configTaskTests;
