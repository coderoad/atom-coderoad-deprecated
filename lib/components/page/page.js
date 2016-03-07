"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var material_ui_1 = require('material-ui');
var content_1 = require('./content');
var task_1 = require('./task');
var hint_1 = require('./hint');
var page_complete_1 = require('./page-complete');
var toolbar_1 = require('./toolbar');
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
        return (React.createElement(material_ui_1.Paper, {style: pageStyle, zDepth: 1, className: 'cr-page'}, React.createElement(content_1.default, {page: page}), React.createElement(material_ui_1.Divider, null), React.createElement(task_1.Tasks, {tasks: tasks, taskPosition: taskPosition, runTests: runTests}), React.createElement(hint_1.default, {task: currentTask, hintPosition: hintPosition}), React.createElement(page_complete_1.PageCompleteMessage, {page: page}), React.createElement("div", {ref: 'listEnd'}), React.createElement(toolbar_1.default, {tasks: tasks, taskPosition: taskPosition})));
    };
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
