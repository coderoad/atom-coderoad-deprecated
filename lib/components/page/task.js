"use strict";
var React = require('react');
var _components_1 = require('../_components');
var material_ui_1 = require('material-ui');
var colors_1 = require('material-ui/lib/styles/colors');
var iconPath = 'material-ui/lib/svg-icons/';
var Complete = require(iconPath + 'toggle/check-box');
var Incomplete = require(iconPath + 'toggle/check-box-outline-blank');
var RunningTest = require(iconPath + 'toggle/indeterminate-check-box');
function visibleTasks(tasks, taskPosition) {
    return tasks.slice(0, taskPosition + 1);
}
var TaskCheckbox = function (_a) {
    var index = _a.index, taskPosition = _a.taskPosition, runTests = _a.runTests;
    var icon = null;
    if (index < taskPosition) {
        icon = React.createElement(Complete, {color: colors_1.green500});
    }
    else if (index === taskPosition && runTests) {
        icon = React.createElement(RunningTest, {color: colors_1.orange500});
    }
    else {
        icon = React.createElement(Incomplete, null);
    }
    return React.createElement("span", {className: 'cr-task-checkbox'}, icon);
};
var TaskIndex = function (_a) {
    var index = _a.index;
    return (React.createElement("span", {className: 'cr-task-index'}, 
        index + 1, 
        "."));
};
var TaskContent = function (_a) {
    var task = _a.task;
    return (React.createElement("div", {className: 'cr-task-description'}, 
        React.createElement(_components_1.MarkdownText, {text: task.description})
    ));
};
exports.Task = function (_a) {
    var task = _a.task, taskPosition = _a.taskPosition, index = _a.index, runTests = _a.runTests;
    var taskClass = 'cr-task';
    if (index < taskPosition) {
        taskClass += ' isCompletedTask';
    }
    else if (index === taskPosition) {
        taskClass += 'isCurrentTask';
    }
    return (React.createElement(material_ui_1.ListItem, {key: index, className: taskClass}, 
        React.createElement(TaskCheckbox, {index: index, taskPosition: taskPosition, runTests: runTests}), 
        React.createElement(TaskIndex, {index: index}), 
        React.createElement(TaskContent, {task: task})));
};
exports.Tasks = function (_a) {
    var tasks = _a.tasks, taskPosition = _a.taskPosition, runTests = _a.runTests;
    var visTasks = visibleTasks(tasks, taskPosition);
    return React.createElement("div", {className: 'cr-tasks'}, visTasks.map(function (task, index) { return React.createElement(exports.Task, {key: 'task' + index, task: task, taskPosition: taskPosition, index: index, runTests: runTests}); }));
};
