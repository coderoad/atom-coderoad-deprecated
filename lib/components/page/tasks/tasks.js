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
var _components_1 = require('../../_components');
var List_1 = require('material-ui/List');
var Card_1 = require('material-ui/Card');
var Subheader_1 = require('material-ui/Subheader');
var colors_1 = require('material-ui/styles/colors');
var check_box_1 = require('material-ui/svg-icons/toggle/check-box');
var check_box_outline_blank_1 = require('material-ui/svg-icons/toggle/check-box-outline-blank');
var indeterminate_check_box_1 = require('material-ui/svg-icons/toggle/indeterminate-check-box');
function visibleTasks(tasks, taskPosition) {
    return tasks.slice(0, taskPosition + 1);
}
var TaskCheckbox = function (_a) {
    var index = _a.index, taskPosition = _a.taskPosition, testRun = _a.testRun;
    var icon = null;
    if (index < taskPosition) {
        icon = React.createElement(check_box_1.default, {color: colors_1.green500});
    }
    else if (index === taskPosition && testRun) {
        icon = React.createElement(indeterminate_check_box_1.default, {color: colors_1.orange500});
    }
    else {
        icon = React.createElement(check_box_outline_blank_1.default, null);
    }
    return React.createElement("span", {className: 'cr-task-checkbox'}, icon);
};
exports.Task = function (_a) {
    var task = _a.task, taskPosition = _a.taskPosition, index = _a.index, testRun = _a.testRun;
    var isCompleted = index < taskPosition;
    return (React.createElement(List_1.ListItem, {key: index, className: 'cr-task', style: { backgroundColor: isCompleted ? '#c8e6c9' : 'inherit' }}, React.createElement(TaskCheckbox, __assign({}, _this.props)), React.createElement("span", {className: 'cr-task-index'}, index + 1, "."), React.createElement("div", {className: 'cr-task-description'}, React.createElement(_components_1.Markdown, null, task.description))));
};
exports.Tasks = function (_a) {
    var tasks = _a.tasks, taskPosition = _a.taskPosition, testRun = _a.testRun;
    var visTasks = visibleTasks(tasks, taskPosition);
    return React.createElement(Card_1.Card, {className: 'cr-tasks'}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, "Tasks"), visTasks.map(function (task, index) { return React.createElement(exports.Task, {key: index, index: index, task: task, taskPosition: taskPosition, testRun: testRun}); })));
};
