"use strict";
var reselect_1 = require('reselect');
exports.pageSelector = function (state) { return state.tutorial.pages[state.pagePosition]; };
exports.tasksSelector = reselect_1.createSelector(exports.pageSelector, function (page) { return page.tasks; });
exports.taskPositionSelector = function (state) { return state.taskPosition; };
exports.pageCompletedSelector = function (state) { return state.progress.pages[state.pagePosition]; };
exports.taskSelector = function (state) { return reselect_1.createSelector(exports.tasksSelector, function (tasks) {
    return (tasks.length <= tasks.length ? exports.tasksSelector(state)[state.taskPosition] : null);
}); };
exports.visibleTasksSelector = function (state) { return reselect_1.createSelector(exports.tasksSelector, function (tasks) {
    console.log(tasks);
    return tasks.slice(0, state.taskPosition + 1);
}); };
exports.taskProgressSelector = function (state) { return reselect_1.createSelector(exports.tasksSelector, function (tasks) { return (state.taskPosition / tasks.length) * 100; }); };
exports.configSelector = function (state) { return state.packageJson.config; };
