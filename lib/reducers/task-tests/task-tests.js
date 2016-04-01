'use strict';
var path = require('path');
var Type = require('../../actions/actionTypes');
var loader_1 = require('./loader');
function taskTestsReducer(taskTests, action) {
    if (taskTests === void 0) { taskTests = ''; }
    switch (action.type) {
        case Type.SET_PAGE:
            var target = path.join(window.coderoad.tutorialDir || window.coderoad.dir, "_tmpTests" + window.coderoad.suffix);
            loader_1.default(target, action.payload.taskTests);
            return target;
        default:
            return taskTests;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskTestsReducer;
