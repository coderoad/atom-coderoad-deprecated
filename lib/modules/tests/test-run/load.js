"use strict";
var config_path_1 = require('./config-path');
var fs_1 = require('fs');
function loadTaskTests(_a) {
    var dir = _a.dir, tasks = _a.tasks, tutorial = _a.tutorial, testFile = _a.testFile;
    var tests = [].concat.apply([], tasks.map(function (task) { return task.tests || []; })).reduce(function (output, file) {
        try {
            var absoluteFilePath = config_path_1.default({
                dir: dir,
                tutorial: tutorial,
                testPath: file,
            });
            output += fs_1.readFileSync(absoluteFilePath, 'utf8') + '\n';
        }
        catch (e) {
            console.log('Error reading test file', e);
        }
        return output;
    }, '');
    tutorial.config.load({ dir: dir, tests: tests, testFile: testFile });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadTaskTests;
//# sourceMappingURL=load.js.map