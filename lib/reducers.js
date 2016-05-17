"use strict";
var redux_1 = require('redux');
var alert_1 = require('./modules/alert');
var setup_1 = require('./modules/setup');
var hints_1 = require('./modules/hints');
var page_1 = require('./modules/page');
var progress_1 = require('./modules/progress');
var route_1 = require('./modules/route');
var tests_1 = require('./modules/tests');
var tutorial_1 = require('./modules/tutorial');
var tutorials_1 = require('./modules/tutorials');
var window_1 = require('./modules/window');
var editor_1 = require('./modules/editor');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: alert_1.reducer, checks: setup_1.reducer, editor: editor_1.reducer, dir: editor_1.dir, hintPosition: hints_1.reducer,
    packageJson: setup_1.packageJson, page: page_1.page, pagePosition: page_1.pagePosition, progress: progress_1.reducer, route: route_1.reducer, tasks: page_1.tasks,
    tutorial: tutorial_1.reducer, tutorials: tutorials_1.reducer,
    taskActions: page_1.taskActions, taskPosition: tests_1.taskPosition, taskTests: page_1.taskTests, testRun: tests_1.testRun, windowToggle: window_1.reducer
});
