"use strict";
var React = require('react');
var index_1 = require('../index');
var Tasks_1 = require('./Tasks');
var Hints_1 = require('./Hints');
var PageToolbar_1 = require('./PageToolbar');
var ProgressBar_1 = require('./ProgressBar');
var styles = {
    width: '100%',
    overflowY: 'scroll',
};
var Page = function (_a) {
    var page = _a.page, taskPosition = _a.taskPosition, hintPosition = _a.hintPosition, tasks = _a.tasks, testRun = _a.testRun, progress = _a.progress, pagePosition = _a.pagePosition;
    var task = taskPosition <= tasks.length ? tasks[taskPosition] : null;
    var completed = progress.pages[pagePosition];
    return (React.createElement("section", {style: styles, className: 'cr-page'}, React.createElement(index_1.ContentCard, {title: page.title, content: page.description}), React.createElement(Tasks_1.default, {tasks: tasks, taskPosition: taskPosition, testRun: testRun, completed: completed, page: page}), React.createElement(PageToolbar_1.default, {tasks: tasks, taskPosition: taskPosition}, React.createElement(Hints_1.default, {task: task, hintPosition: hintPosition}), React.createElement(ProgressBar_1.default, {taskLength: tasks.length, taskPosition: taskPosition, completed: completed}))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
