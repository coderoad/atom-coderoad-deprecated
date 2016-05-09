"use strict";
var redux_1 = require('redux');
var coderoad_core_1 = require('coderoad-core');
var checks_1 = require('./checks');
var devTools_toggle_1 = require('./devTools-toggle');
var dir_1 = require('./dir');
var hint_position_1 = require('./hint-position');
var progress_1 = require('./progress');
var task_actions_1 = require('./task-actions');
var task_position_1 = require('./task-position');
var task_tests_1 = require('./task-tests');
var test_run_1 = require('./test-run');
var window_toggle_1 = require('./window-toggle');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers(Object.assign({}, {
    checks: checks_1.default, devToolsToggle: devTools_toggle_1.default, dir: dir_1.default, hintPosition: hint_position_1.default, progress: progress_1.default,
    taskActions: task_actions_1.default, taskPosition: task_position_1.default, taskTests: task_tests_1.default, testRun: test_run_1.default, windowToggle: window_toggle_1.default
}, coderoad_core_1.reducers));
