'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var ReactDOM = require('react-dom');
var react_redux_1 = require('react-redux');
var Action = require('../../actions/actions');
var iconPath = 'material-ui/lib/svg-icons/';
var _components_1 = require('../_components');
var material_ui_1 = require('material-ui');
var colors_1 = require('material-ui/lib/styles/colors');
var classnames = require('classnames');
var Complete = require(iconPath + 'toggle/check-box');
var Incomplete = require(iconPath + 'toggle/check-box-outline-blank');
var RunningTest = require(iconPath + 'toggle/indeterminate-check-box');
function hintsShown(task, hintPos) {
    if (hintPos > -1 && task.hints && task.hints.length > 0) {
        return task.hints.slice(0, hintPos + 1);
    }
    return null;
}
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
    return (React.createElement("span", {className: 'cr-task-checkbox'}, icon));
};
var material_ui_2 = require('material-ui');
var content_1 = require('./content');
var Info = require(iconPath + 'action/info');
var InfoOutline = require(iconPath + 'action/info-outline');
var style = {
    height: '100%',
    width: '100%'
};
function taskProgress(current, max) {
    return (current / max) * 100;
}
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.call(this);
    }
    default_1.prototype.componentDidUpdate = function () {
        var _a = this.props, taskPosition = _a.taskPosition, hintPosition = _a.hintPosition, tasks = _a.tasks, page = _a.page;
        if (taskPosition > 0 && taskPosition < tasks.length) {
            ReactDOM.findDOMNode(this.refs.listEnd).scrollIntoView();
        }
        if (hintPosition > -1) {
            ReactDOM.findDOMNode(this.refs.listEnd).scrollIntoView();
        }
        else if (page.completed && page.onPageComplete) {
            ReactDOM.findDOMNode(this.refs.listEnd).scrollIntoView();
        }
    };
    default_1.prototype.displayHint = function (task) {
        var hintPosition = this.props.hintPosition;
        if (task && task.hints && task.hints.length) {
            if (hintPosition < task.hints.length - 1) {
                this.props.showHint(hintPosition + 1);
            }
        }
        else {
            this.props.showHint(-1);
        }
    };
    default_1.prototype.render = function () {
        var _this = this;
        var _a = this.props, page = _a.page, taskPosition = _a.taskPosition, hintPosition = _a.hintPosition;
        var tasks = visibleTasks(this.props.tasks, taskPosition);
        var currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
        var allComplete = taskPosition >= tasks.length;
        return (React.createElement(material_ui_2.Paper, {style: style, zDepth: 1, className: 'cr-page'}, React.createElement(content_1.default, {page: page}), React.createElement(material_ui_1.Divider, null), React.createElement(material_ui_1.List, {subheader: 'Tasks', className: 'cr-tasks', ref: 'tasks'}, tasks.map(function (task, index) {
            var isCurrentTask = index === taskPosition;
            var isDisabledTask = index > taskPosition;
            var isCompletedTask = index < taskPosition;
            var isFinalTask = index >= tasks.length - 1;
            var hints = hintsShown(task, hintPosition);
            return (React.createElement("div", null, React.createElement(material_ui_1.ListItem, {ref: 'task' + index, className: classnames({
                'cr-task': true,
                'isCompletedTask': isCompletedTask,
                'isCurrentTask': isCurrentTask,
                'isDisabledTask': isDisabledTask
            })}, React.createElement(TaskCheckbox, {index: index, taskPosition: taskPosition, runTests: _this.props.runTests}), React.createElement("span", {className: 'cr-task-index'}, index + 1, "."), React.createElement("div", {className: 'cr-task-description'}, React.createElement(_components_1.MarkdownText, {text: task.description}))), isCurrentTask && hints ?
                hints.map(function (hint, indexHint) {
                    return React.createElement(material_ui_1.ListItem, {className: 'cr-task-hint', ref: 'hint' + indexHint}, React.createElement("div", {class: 'cr-task-hint-box'}, React.createElement("span", {className: 'cr-task-hint-index'}, indexHint + 1, "."), React.createElement("div", {className: 'cr-task-hint-description'}, React.createElement(_components_1.MarkdownText, {text: hint}))));
                })
                : null, isFinalTask ? null : React.createElement(material_ui_1.Divider, null)));
        }), page.completed && !!page.onPageComplete ? React.createElement(material_ui_1.ListItem, {className: 'cr-task-onComplete', ref: 'onPageComplete'}, React.createElement("div", {className: 'cr-task-onComplete-description'}, React.createElement(_components_1.MarkdownText, {text: page.onPageComplete}))) : null, React.createElement("div", {ref: 'listEnd'})), React.createElement("section", {className: 'cr-page-toolbar'}, React.createElement(material_ui_2.LinearProgress, {mode: 'determinate', value: taskProgress(taskPosition, tasks.length), style: { height: '6px' }}), React.createElement(material_ui_2.Toolbar, null, currentTask && currentTask.hints && currentTask.hints.length ?
            React.createElement(material_ui_2.ToolbarGroup, {float: 'left'}, hintPosition <= currentTask.hints.length - 2 ?
                React.createElement(material_ui_2.FlatButton, {className: 'cr-task-showHint', icon: React.createElement(InfoOutline, null), onClick: this.displayHint.bind(this, currentTask)})
                : React.createElement(material_ui_2.FlatButton, {className: 'cr-task-showHint-disabled', icon: React.createElement(Info, null), disabled: true}))
            : null, React.createElement(material_ui_2.ToolbarGroup, {float: 'right'}, allComplete ?
            React.createElement(material_ui_2.RaisedButton, {label: 'Continue', primary: true, onClick: this.props.callNextPage})
            :
                React.createElement(material_ui_2.RaisedButton, {label: 'Run', secondary: true, onClick: this.props.callRunTests}))))));
    };
    default_1 = __decorate([
        react_redux_1.connect(null, function (dispatch, state) {
            return {
                callNextPage: function () { return dispatch(Action.nextPage()); },
                callRunTests: function () { return dispatch(Action.runTests()); },
                toggleLog: function () { return dispatch(Action.toggleLog()); },
                showHint: function (newHintPos) { return dispatch(Action.setHintPosition(newHintPos)); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], default_1);
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
