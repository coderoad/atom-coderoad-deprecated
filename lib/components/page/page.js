"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var paper_1 = require('material-ui/lib/paper');
var divider_1 = require('material-ui/lib/divider');
var content_1 = require('./content');
var task_1 = require('./task/task');
var hint_1 = require('./hint/hint');
var page_complete_1 = require('./complete/page-complete');
var toolbar_1 = require('./toolbar/toolbar');
var pageStyle = {
    height: '100%',
    width: '100%'
};
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.call(this);
    }
    default_1.prototype.componentDidUpdate = function () {
        ReactDOM.findDOMNode(this.refs.listEnd).scrollIntoView();
    };
    default_1.prototype.render = function () {
        var _a = this.props, page = _a.page, taskPosition = _a.taskPosition, hintPosition = _a.hintPosition, tasks = _a.tasks, runTests = _a.runTests;
        var currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
        var allComplete = taskPosition >= tasks.length;
        return (React.createElement(paper_1.default, {style: pageStyle, zDepth: 1, className: 'cr-page', ref: 'page'}, React.createElement(content_1.PageContent, {page: page}), React.createElement(divider_1.default, null), React.createElement(task_1.Tasks, {tasks: tasks, taskPosition: taskPosition, runTests: runTests}), React.createElement("div", {className: 'listEnd', ref: 'listEnd'}), React.createElement(hint_1.default, {task: currentTask, hintPosition: hintPosition}), React.createElement(page_complete_1.PageCompleteMessage, {page: page}), React.createElement(toolbar_1.default, {tasks: tasks, taskPosition: taskPosition})));
    };
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
