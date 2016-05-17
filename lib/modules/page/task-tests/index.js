"use strict";
var fs_1 = require('fs');
var types_1 = require('../types');
function taskTestsReducer(taskTests, action) {
    if (taskTests === void 0) { taskTests = ''; }
    switch (action.type) {
        case types_1.PAGE_SET:
            var _a = action.payload, tutorial = _a.tutorial, tasks = _a.tasks;
            return [].concat.apply([], tasks.map(function (task) { return task.tests || []; })).reduce(function (output, file) {
                try {
                    output += fs_1.readFileSync(file, 'utf8') + '\n';
                }
                catch (e) {
                    console.log('Error reading test file', e);
                }
                return output;
            }, '');
        default:
            return taskTests;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskTestsReducer;
