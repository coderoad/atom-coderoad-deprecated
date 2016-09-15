"use strict";
var reselect_1 = require('reselect');
var page_1 = require('./page');
exports.tasksSelector = reselect_1.createSelector(page_1.pageSelector, function (page) { return page.tasks; });
exports.currentTaskSelector = reselect_1.createSelector(exports.tasksSelector, function (state) { return state.taskPosition; }, function (tasks, taskPosition) { return tasks.length && taskPosition <= tasks.length - 1 ?
    tasks[taskPosition] : null; });
exports.taskByIndexSelector = reselect_1.createSelector(exports.tasksSelector, function (state, props) { return props.index; }, function (tasks, index) { return tasks[index]; });
exports.visibleTasksSelector = reselect_1.createSelector(exports.tasksSelector, function (state) { return state.taskPosition; }, function (tasks, taskPosition) { return tasks.slice(0, taskPosition + 1); });
exports.taskProgressSelector = reselect_1.createSelector(exports.tasksSelector, function (state) { return state.taskPosition; }, function (tasks, taskPosition) { return (taskPosition / tasks.length) * 100; });
