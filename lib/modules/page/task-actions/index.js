"use strict";
var types_1 = require('../types');
var handle_actions_1 = require('./handle-actions');
var taskPositionTracker = 0;
function taskActionsReducer(t, action) {
    if (t === void 0) { t = []; }
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
            var _b = action.payload, taskActions = _b.taskActions, result = _b.result;
            var nextTaskPosition = result.taskPosition;
            var times = nextTaskPosition - taskPositionTracker;
            if (times > 0) {
                for (var i = 0; i < times; i++) {
                    handle_actions_1.default(actions);
                }
                taskPositionTracker = nextTaskPosition;
            }
            return taskActions;
        default:
            return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskActionsReducer;
