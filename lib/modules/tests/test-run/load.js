"use strict";
var fs_1 = require('fs');
function loadTaskTests(_a) {
    var dir = _a.dir, tasks = _a.tasks, load = _a.load, testFile = _a.testFile;
    var tests = [].concat.apply([], tasks.map(function (task) { return task.tests || []; })).reduce(function (output, file) {
        try {
            output += fs_1.readFileSync(file, 'utf8') + '\n';
        }
        catch (e) {
            console.log('Error reading test file', e);
        }
        return output;
    }, '');
    load({ dir: dir, tests: tests, testFile: testFile });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadTaskTests;
