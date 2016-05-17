"use strict";
var types_1 = require('../types');
var editor_1 = require('../../editor/editor');
function handleTaskActions(actions) {
    var next = actions.shift();
    if (next && next.length) {
        next.reduce(function (total, curr) {
            return total.then(function () { return editor_1.default(curr); });
        }, Promise.resolve());
    }
}
var taskTracker = 0;
function taskActionsReducer(taskActions, action) {
    if (taskActions === void 0) { taskActions = []; }
    var actions = null;
    switch (action.type) {
        case types_1.PAGE_SET:
            var _a = action.payload, tasks = _a.tasks, pagePosition = _a.pagePosition, progress = _a.progress;
            var isCompleted = progress.pages[pagePosition];
            if (!isCompleted) {
                actions = tasks.map(function (task) { return task.actions || []; });
            }
            else {
                actions = tasks.map(function (task) {
                    return task.actions.filter(function (a) { return !!a.match(/^open/); });
                });
            }
            taskTracker = 0;
            handleTaskActions(actions);
            return actions;
        case 'TEST_RESULT':
            actions = action.payload.taskActions || [];
            var nextTaskPosition = action.payload.result.taskPosition;
            var times = nextTaskPosition - taskTracker;
            if (times > 0) {
                for (var i = 0; i < times; i++) {
                    handleTaskActions(actions);
                }
                taskTracker = nextTaskPosition;
            }
            return actions;
        default:
            return taskActions;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskActionsReducer;
