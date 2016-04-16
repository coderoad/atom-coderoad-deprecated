"use strict";
var redux_1 = require('redux');
var tutorial_info_1 = require('./tutorial-info/tutorial-info');
var route_1 = require('./route/route');
var progress_1 = require('./progress/progress');
var position_1 = require('./position/position');
var page_1 = require('./page/page');
var tasks_1 = require('./tasks/tasks');
var task_position_1 = require('./task-position/task-position');
var hint_position_1 = require('./hint-position/hint-position');
var task_tests_1 = require('./task-tests/task-tests');
var alert_1 = require('./alert/alert');
var run_tests_1 = require('./run-tests/run-tests');
var editor_actions_1 = require('./editor-actions/editor-actions');
var tutorials_1 = require('./tutorials/tutorials');
var log_1 = require('./log/log');
var checks_1 = require('./checks/checks');
var globals_1 = require('./globals/globals');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    globals: globals_1.default, tutorialInfo: tutorial_info_1.default, route: route_1.default, progress: progress_1.default, position: position_1.default,
    page: page_1.default, tasks: tasks_1.default, taskPosition: task_position_1.default, hintPosition: hint_position_1.default,
    taskTests: task_tests_1.default, alert: alert_1.default, runTests: run_tests_1.default, editorActions: editor_actions_1.default,
    tutorials: tutorials_1.default, log: log_1.default, checks: checks_1.default
});
