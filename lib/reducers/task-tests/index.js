"use strict";
var fs_1 = require('fs');
var _types_1 = require('../../actions/_types');
function taskTestsReducer(taskTests, action) {
    if (taskTests === void 0) { taskTests = ''; }
    switch (action.type) {
        case _types_1.PAGE_SET:
            var tests_1 = '';
            action.payload.taskTests.forEach(function (file) {
                try {
                    var data = fs_1.readFileSync(file, 'utf8');
                    tests_1 += data + '\n';
                }
                catch (e) {
                    console.log('Error reading test file', e);
                }
            });
            return tests_1;
        default:
            return taskTests;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskTestsReducer;
