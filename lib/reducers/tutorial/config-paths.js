"use strict";
var path_1 = require('path');
var system_1 = require('../../services/system');
function configTestString(dir, name, config, testPath) {
    if (system_1.isWindows) {
        testPath = testPath.split('/').join('\\');
    }
    if (config.dir) {
        testPath = path_1.join(config.dir, testPath);
    }
    else {
        testPath = path_1.join(dir, 'node_modules', name, testPath);
    }
    if (config.testSuffix) {
        testPath += config.testSuffix;
    }
    return testPath;
}
function configPaths(dir, name, config, pages) {
    return pages.map(function (page) {
        page.tasks.map(function (task) {
            task.tests = task.tests.map(function (testPath) {
                if (typeof testPath === 'string') {
                    return configTestString(dir, name, config, testPath);
                }
                else {
                    console.error('Invalid task test', testPath);
                }
            });
            return task;
        });
        return page;
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configPaths;
