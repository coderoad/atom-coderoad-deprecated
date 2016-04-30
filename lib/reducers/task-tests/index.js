"use strict";
var fs_1 = require('fs');
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
function taskTestsReducer(taskTests, action) {
    if (taskTests === void 0) { taskTests = ''; }
    switch (action.type) {
        case _types_1.TESTS_LOAD:
            return [].concat.apply([], store_1.default.getState().tasks.map(function (task) { return task.tests || []; })).reduce(function (output, file) {
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
