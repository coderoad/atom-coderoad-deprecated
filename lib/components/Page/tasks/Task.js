"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _this = this;
var React = require('react');
var index_1 = require('../../index');
var TaskCheckbox_1 = require('./TaskCheckbox');
var List_1 = require('material-ui/List');
exports.Task = function (_a) {
    var task = _a.task, taskPosition = _a.taskPosition, index = _a.index, testRun = _a.testRun;
    var isCompleted = index < taskPosition;
    return (React.createElement(List_1.ListItem, {key: index, className: 'cr-task', style: { backgroundColor: isCompleted ? '#c8e6c9' : 'inherit' }}, React.createElement(TaskCheckbox_1.TaskCheckbox, __assign({}, _this.props)), React.createElement("span", {className: 'cr-task-index'}, index + 1, "."), React.createElement("div", {className: 'cr-task-description'}, React.createElement(index_1.Markdown, null, task.description))));
};
