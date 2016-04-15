"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var defaultTasks = [{
        description: '',
        completed: false,
        tests: [],
        hints: [],
        actions: []
    }];
function tasksReducer(tasks, action) {
    if (tasks === void 0) { tasks = defaultTasks; }
    switch (action.type) {
        case actionTypes_1.SET_PAGE:
            return action.payload.tasks;
        default:
            return tasks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tasksReducer;
