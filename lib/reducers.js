"use strict";
var redux_1 = require('redux');
var hints_1 = require('./modules/hints');
var page_1 = require('./modules/page');
var progress_1 = require('./modules/progress');
var setup_1 = require('./modules/setup');
var tests_1 = require('./modules/tests');
var tutorial_1 = require('./modules/tutorial');
var tutorials_1 = require('./modules/tutorials');
var core_coderoad_1 = require('core-coderoad');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: core_coderoad_1.alertReducer, checks: setup_1.checks, editor: core_coderoad_1.editorReducer, dir: core_coderoad_1.dirReducer, hintPosition: hints_1.reducer,
    packageJson: setup_1.packageJson, pagePosition: page_1.pagePosition, progress: progress_1.reducer, route: core_coderoad_1.routeReducer,
    tutorial: tutorial_1.reducer, tutorials: tutorials_1.reducer,
    taskActions: page_1.taskActions, taskPosition: tests_1.taskPosition, taskTests: page_1.taskTests, testRun: tests_1.testRun, windowToggle: core_coderoad_1.windowToggle
});
