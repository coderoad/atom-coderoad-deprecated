"use strict";
var React = require('react');
var List_1 = require('material-ui/List');
var Card_1 = require('material-ui/Card');
var Subheader_1 = require('material-ui/Subheader');
var Task_1 = require('./Task');
var colors_1 = require('material-ui/styles/colors');
function visibleTasks(tasks, taskPosition) {
    return tasks.slice(0, taskPosition + 1);
}
exports.Tasks = function (_a) {
    var tasks = _a.tasks, taskPosition = _a.taskPosition, testRun = _a.testRun, completed = _a.completed;
    var visTasks = visibleTasks(tasks, taskPosition);
    var bg = completed ? colors_1.lightGreen200 : 'white';
    return (React.createElement(Card_1.Card, {style: { margin: '10px 5px', backGroundColor: bg }}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, "Tasks"), visTasks.map(function (task, index) { return (React.createElement(Task_1.Task, {key: index, index: index, task: task, taskPosition: taskPosition, testRun: testRun})); }))));
};
