"use strict";
var Type = require('../../actions/actionTypes');
var defaultTasks = [{
        title: '',
        description: '',
        completed: false,
        tests: [],
        hints: [],
        actions: []
    }];
function tasksReducer(tasks, action) {
    if (tasks === void 0) { tasks = defaultTasks; }
    switch (action.type) {
        case Type.SET_PAGE:
            return action.payload.tasks;
        default:
            return tasks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tasksReducer;
