"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var List_1 = require('material-ui/List');
var Card_1 = require('material-ui/Card');
var Subheader_1 = require('material-ui/Subheader');
var Task_1 = require('../Task');
var colors_1 = require('material-ui/styles/colors');
var TasksComplete_1 = require('../TasksComplete');
function visibleTasks(tasks, taskPosition) {
    return tasks.slice(0, taskPosition + 1);
}
var margin = '10px 5px';
var Tasks = (function (_super) {
    __extends(Tasks, _super);
    function Tasks() {
        _super.apply(this, arguments);
    }
    Tasks.prototype.componentDidUpdate = function () {
        ReactDOM.findDOMNode(this.refs.listEnd).scrollIntoView();
    };
    Tasks.prototype.render = function () {
        var _a = this.props, tasks = _a.tasks, taskPosition = _a.taskPosition, testRun = _a.testRun, completed = _a.completed, page = _a.page;
        var visTasks = visibleTasks(tasks, taskPosition);
        var backgroundColor = completed ? colors_1.lightGreen200 : 'white';
        return (React.createElement("div", null, React.createElement(Card_1.Card, {style: { backgroundColor: backgroundColor, margin: margin }}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, "Tasks"), visTasks.map(function (task, index) { return (React.createElement(Task_1.default, {key: index, index: index, task: task, taskPosition: taskPosition, testRun: testRun})); }))), React.createElement(TasksComplete_1.default, {page: page, completed: completed}), React.createElement("div", {ref: 'listEnd'})));
    };
    return Tasks;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tasks;
