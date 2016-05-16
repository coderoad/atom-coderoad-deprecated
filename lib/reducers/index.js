"use strict";
var redux_1 = require('redux');
var devTools_toggle_1 = require('./devTools-toggle');
var dir_1 = require('./dir');
var package_json_1 = require('./package-json');
var page_1 = require('./page');
var page_position_1 = require('./page-position');
var progress_1 = require('./progress');
var tasks_1 = require('./tasks');
var task_actions_1 = require('./task-actions');
var task_tests_1 = require('./task-tests');
var alert_1 = require('../modules/alert');
var setup_1 = require('../modules/setup');
var hints_1 = require('../modules/hints');
var route_1 = require('../modules/route');
var tests_1 = require('../modules/tests');
var tutorial_1 = require('../modules/tutorial');
var tutorials_1 = require('../modules/tutorials');
var window_1 = require('../modules/window');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: alert_1.reducer, checks: setup_1.reducer, devToolsToggle: devTools_toggle_1.default, dir: dir_1.default, hintPosition: hints_1.reducer,
    packageJson: package_json_1.default, page: page_1.default, pagePosition: page_position_1.default, progress: progress_1.default, route: route_1.reducer, tasks: tasks_1.default,
    tutorial: tutorial_1.reducer, tutorials: tutorials_1.reducer,
    taskActions: task_actions_1.default, taskPosition: tests_1.taskPosition, taskTests: task_tests_1.default, testRun: tests_1.testRun, windowToggle: window_1.reducer
});
