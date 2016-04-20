"use strict";
var React = require('react');
var index_1 = require('../../index');
var TaskCheckbox_1 = require('./TaskCheckbox');
var List_1 = require('material-ui/List');
exports.Task = function (_a) {
    var task = _a.task, taskPosition = _a.taskPosition, index = _a.index, testRun = _a.testRun;
    var isCompleted = index < taskPosition;
    return (React.createElement(List_1.ListItem, {key: index, className: 'cr-task', style: { backgroundColor: isCompleted ? '#c8e6c9' : 'inherit' }}, React.createElement(TaskCheckbox_1.TaskCheckbox, {taskPosition: taskPosition, index: index, testRun: testRun}), React.createElement("span", {className: 'cr-task-index'}, index + 1, "."), React.createElement("div", {className: 'cr-task-description'}, React.createElement(index_1.Markdown, null, task.description))));
};
