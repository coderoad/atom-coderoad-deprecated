"use strict";
var _types_1 = require('../../actions/_types');
var config_task_tests_1 = require('./config-task-tests');
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
            var _a = action.payload, dir = _a.dir, tutorial = _a.tutorial, pagePosition = _a.pagePosition;
            return config_task_tests_1.default(dir, tutorial, tutorial.pages[pagePosition].tasks || []);
        default:
            return tasks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tasksReducer;
