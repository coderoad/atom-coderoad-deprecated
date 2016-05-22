"use strict";
var types_1 = require('../types');
var handle_actions_1 = require('./handle-actions');
var taskPositionTracker = 0;
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
            taskPositionTracker = 0;
            handle_actions_1.default(actions);
            return actions;
        case 'TEST_RESULT':
            actions = action.payload.taskActions || [];
            var nextTaskPosition = action.payload.result.taskPosition;
            var times = nextTaskPosition - taskPositionTracker;
            if (times > 0) {
                for (var i = 0; i < times; i++) {
                    handle_actions_1.default(actions);
                }
                taskPositionTracker = nextTaskPosition;
            }
            return actions;
        default:
            return taskActions;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskActionsReducer;
