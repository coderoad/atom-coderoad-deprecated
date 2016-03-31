'use strict';
var path = require('path');
var Type = require('../../actions/actionTypes');
var concat_tests_1 = require('./concat-tests');
function taskTestsReducer(taskTests, action) {
    if (taskTests === void 0) { taskTests = ''; }
    switch (action.type) {
        case Type.SET_PAGE:
            var target = path.join(window.coderoad.tutorialDir || window.coderoad.dir, ".tmp" + window.coderoad.suffix);
            return concat_tests_1.concatTests(target, action.payload.taskTests);
        default:
            return taskTests;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskTestsReducer;
