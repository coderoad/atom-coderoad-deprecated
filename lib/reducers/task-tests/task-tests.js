"use strict";
var fs = require('fs');
var Type = require('../../actions/actionTypes');
function taskTestsReducer(taskTests, action) {
    if (taskTests === void 0) { taskTests = ''; }
    switch (action.type) {
        case Type.SET_PAGE:
            var tests_1 = '';
            action.payload.taskTests.forEach(function (file) {
                try {
                    var data = fs.readFileSync(file, 'utf8');
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
