"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var Paper_1 = require('material-ui/Paper');
var Divider_1 = require('material-ui/Divider');
var content_1 = require('./content');
var tasks_1 = require('./tasks/tasks');
var hints_1 = require('./hints/hints');
var page_complete_1 = require('./complete/page-complete');
var toolbar_1 = require('./toolbar/toolbar');
var progress_bar_1 = require('./progress-bar');
var pageStyle = {
    height: '100%',
    width: '100%'
};
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        _super.apply(this, arguments);
    }
    Page.prototype.componentDidUpdate = function () {
        ReactDOM.findDOMNode(this.refs.listEnd).scrollIntoView();
    };
    Page.prototype.render = function () {
        var _a = this.props, page = _a.page, taskPosition = _a.taskPosition, hintPosition = _a.hintPosition, tasks = _a.tasks, testRun = _a.testRun;
        var currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
        var allComplete = taskPosition >= tasks.length;
        return (React.createElement(Paper_1.default, {style: pageStyle, zDepth: 1, className: 'cr-page', ref: 'page'}, React.createElement(content_1.PageContent, {page: page}), React.createElement(Divider_1.default, null), React.createElement(tasks_1.Tasks, {tasks: tasks, taskPosition: taskPosition, testRun: testRun}), React.createElement("div", {className: 'listEnd', ref: 'listEnd'}), React.createElement(page_complete_1.PageCompleteMessage, {page: page}), React.createElement(hints_1.Hints, {task: currentTask, hintPosition: hintPosition}), React.createElement(toolbar_1.PageToolbar, {tasks: tasks, taskPosition: taskPosition}, React.createElement(progress_bar_1.ProgressBar, {taskPosition: taskPosition, taskCount: tasks.length}))));
    };
    return Page;
}(React.Component));
exports.Page = Page;
