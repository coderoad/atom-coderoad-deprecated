"use strict";
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
var config_task_tests_1 = require('../task-tests/config-task-tests');
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
            var page = action.payload.position.page;
            return config_task_tests_1.configTaskTests(store_1.default.getState().tutorial.pages[page].tasks || []);
        default:
            return tasks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tasksReducer;
