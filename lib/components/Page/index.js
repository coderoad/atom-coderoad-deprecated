"use strict";
var React = require('react');
var PageContent_1 = require('./PageContent');
var Tasks_1 = require('./Tasks');
var Hints_1 = require('./Hints');
var PageToolbar_1 = require('./PageToolbar');
var ProgressBar_1 = require('./ProgressBar');
var styles = {
    height: '100%',
    width: '100%',
    position: 'relative',
    overflowY: 'scroll',
};
exports.Page = function (_a) {
    var page = _a.page, taskPosition = _a.taskPosition, hintPosition = _a.hintPosition, tasks = _a.tasks, testRun = _a.testRun;
    var task = taskPosition <= tasks.length ? tasks[taskPosition] : null;
    var completed = page.completed;
    return (React.createElement("section", {style: styles}, React.createElement(PageContent_1.PageContent, {page: page}), React.createElement(Tasks_1.Tasks, {tasks: tasks, taskPosition: taskPosition, testRun: testRun, completed: completed, page: page}), React.createElement(PageToolbar_1.PageToolbar, {tasks: tasks, taskPosition: taskPosition}, React.createElement(Hints_1.Hints, {task: task, hintPosition: hintPosition}), React.createElement(ProgressBar_1.ProgressBar, {taskLength: tasks.length, taskPosition: taskPosition, completed: completed}))));
};
