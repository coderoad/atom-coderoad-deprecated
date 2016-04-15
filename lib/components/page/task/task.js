"use strict";
var React = require('react');
var _components_1 = require('../../_components');
var List_1 = require('material-ui/List');
var Subheader_1 = require('material-ui/Subheader');
var colors_1 = require('material-ui/styles/colors');
var check_box_1 = require('material-ui/svg-icons/toggle/check-box');
var check_box_outline_blank_1 = require('material-ui/svg-icons/toggle/check-box-outline-blank');
var indeterminate_check_box_1 = require('material-ui/svg-icons/toggle/indeterminate-check-box');
function visibleTasks(tasks, taskPosition) {
    return tasks.slice(0, taskPosition + 1);
}
var TaskCheckbox = function (_a) {
    var index = _a.index, taskPosition = _a.taskPosition, runTests = _a.runTests;
    var icon = null;
    if (index < taskPosition) {
        icon = React.createElement(check_box_1.default, {color: colors_1.green500});
    }
    else if (index === taskPosition && runTests) {
        icon = React.createElement(indeterminate_check_box_1.default, {color: colors_1.orange500});
    }
    else {
        icon = React.createElement(check_box_outline_blank_1.default, null);
    }
    return React.createElement("span", {className: 'cr-task-checkbox'}, icon);
};
var TaskIndex = function (_a) {
    var index = _a.index;
    return (React.createElement("span", {className: 'cr-task-index'}, index + 1, "."));
};
var TaskContent = function (_a) {
    var task = _a.task;
    return (React.createElement("div", {className: 'cr-task-description'}, React.createElement(_components_1.Markdown, null, task.description)));
};
exports.Task = function (_a) {
    var task = _a.task, taskPosition = _a.taskPosition, index = _a.index, runTests = _a.runTests;
    var isCompleted = index < taskPosition;
    return (React.createElement(List_1.ListItem, {key: index, className: 'cr-task', style: { backgroundColor: isCompleted ? '#c8e6c9' : 'inherit' }}, React.createElement(TaskCheckbox, {index: index, taskPosition: taskPosition, runTests: runTests}), React.createElement(TaskIndex, {index: index}), React.createElement(TaskContent, {task: task})));
};
exports.Tasks = function (_a) {
    var tasks = _a.tasks, taskPosition = _a.taskPosition, runTests = _a.runTests;
    var visTasks = visibleTasks(tasks, taskPosition);
    return React.createElement(List_1.List, {className: 'cr-tasks'}, React.createElement(Subheader_1.default, null, "Tasks"), visTasks.map(function (task, index) { return React.createElement(exports.Task, {key: index, task: task, taskPosition: taskPosition, index: index, runTests: runTests}); }));
};
