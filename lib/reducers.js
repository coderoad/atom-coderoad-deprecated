"use strict";
var redux_1 = require('redux');
var alert_1 = require('./modules/alert');
var dir_1 = require('./modules/dir');
var editor_1 = require('./modules/editor');
var hints_1 = require('./modules/hints');
var page_1 = require('./modules/page');
var progress_1 = require('./modules/progress');
var route_1 = require('./modules/route');
var setup_1 = require('./modules/setup');
var tests_1 = require('./modules/tests');
var tutorial_1 = require('./modules/tutorial');
var tutorials_1 = require('./modules/tutorials');
var window_1 = require('./modules/window');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: alert_1.default, checks: setup_1.checks, editor: editor_1.reducer, dir: dir_1.default, hintPosition: hints_1.default,
    packageJson: setup_1.packageJson, pagePosition: page_1.pagePosition, progress: progress_1.default, route: route_1.reducer,
    tutorial: tutorial_1.default, tutorials: tutorials_1.default,
    taskActions: page_1.taskActions, taskPosition: tests_1.taskPosition, testRun: tests_1.testRun, window: window_1.reducer
});
//# sourceMappingURL=reducers.js.map