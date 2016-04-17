"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require('react');
var ReactDOM = require('react-dom');
var content_1 = require('./content');
var tasks_1 = require('./tasks/tasks');
var hints_1 = require('./hints/hints');
var page_complete_1 = require('./complete/page-complete');
var PageToolbar_1 = require('./PageToolbar');
var ProgressBar_1 = require('./ProgressBar');
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
        var task = taskPosition <= tasks.length ? tasks[taskPosition] : null;
        var allComplete = taskPosition >= tasks.length;
        return (React.createElement("section", {className: 'cr-page'}, React.createElement(content_1.PageContent, __assign({}, this.props)), React.createElement(tasks_1.Tasks, __assign({}, this.props)), React.createElement("div", {className: 'listEnd', ref: 'listEnd'}), React.createElement(page_complete_1.PageCompleteMessage, {page: page}), React.createElement(hints_1.Hints, {task: task, hintPosition: hintPosition}), React.createElement(PageToolbar_1.PageToolbar, __assign({}, this.props), React.createElement(ProgressBar_1.ProgressBar, {taskPosition: taskPosition, taskCount: tasks.length}))));
    };
    return Page;
}(React.Component));
exports.Page = Page;
