"use strict";
var fs_1 = require('fs');
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
function taskTestsReducer(taskTests, action) {
    if (taskTests === void 0) { taskTests = ''; }
    switch (action.type) {
        case _types_1.TESTS_LOAD:
            var tasks = store_1.store.getState().tasks;
            var tests = [].concat.apply([], tasks.map(function (task) { return task.tests || []; }));
            var output_1 = '';
            tests.forEach(function (file) {
                try {
                    var data = fs_1.readFileSync(file, 'utf8');
                    output_1 += data + '\n';
                }
                catch (e) {
                    console.log('Error reading test file', e);
                }
            });
            return output_1;
        default:
            return taskTests;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskTestsReducer;
