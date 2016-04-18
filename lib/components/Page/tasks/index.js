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
var List_1 = require('material-ui/List');
var Card_1 = require('material-ui/Card');
var Subheader_1 = require('material-ui/Subheader');
var Task_1 = require('./Task');
function visibleTasks(tasks, taskPosition) {
    return tasks.slice(0, taskPosition + 1);
}
exports.Tasks = function (_a) {
    var tasks = _a.tasks, taskPosition = _a.taskPosition, testRun = _a.testRun;
    var visTasks = visibleTasks(tasks, taskPosition);
    return (React.createElement(Card_1.Card, {className: 'cr-tasks'}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, "Tasks"), visTasks.map(function (task, index) { return (React.createElement(Task_1.Task, __assign({key: index, index: index, task: task}, _this.props))); }))));
};
