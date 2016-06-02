"use strict";
var redux_1 = require('redux');
var hints_1 = require('./modules/hints');
var page_1 = require('./modules/page');
var progress_1 = require('./modules/progress');
var setup_1 = require('./modules/setup');
var tests_1 = require('./modules/tests');
var tutorial_1 = require('./modules/tutorial');
var tutorials_1 = require('./modules/tutorials');
var alert_1 = require('core-coderoad/lib/alert');
var editor_1 = require('core-coderoad/lib/editor');
var route_1 = require('core-coderoad/lib/route');
var window_1 = require('core-coderoad/lib/window');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: alert_1.reducer, checks: setup_1.checks, editor: editor_1.reducer, dir: editor_1.dir, hintPosition: hints_1.reducer,
    packageJson: setup_1.packageJson, page: page_1.page, pagePosition: page_1.pagePosition, progress: progress_1.reducer, route: route_1.reducer, tasks: page_1.tasks,
    tutorial: tutorial_1.reducer, tutorials: tutorials_1.reducer,
    taskActions: page_1.taskActions, taskPosition: tests_1.taskPosition, taskTests: page_1.taskTests, testRun: tests_1.testRun, windowToggle: window_1.reducer
});
