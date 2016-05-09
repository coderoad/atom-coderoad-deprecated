"use strict";
var _types_1 = require('../../actions/_types');
var _tasks = [{
        actions: [],
        completed: false,
        description: '',
        hints: [],
        tests: [],
    }];
function tasksReducer(tasks, action) {
    if (tasks === void 0) { tasks = _tasks; }
    switch (action.type) {
        case _types_1.PAGE_SET:
            return action.payload.tasks;
        default:
            return tasks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tasksReducer;
