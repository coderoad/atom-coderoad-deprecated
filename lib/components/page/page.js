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
var _components_1 = require('../_components');
var classNames = require('classnames');
var iconPath = 'material-ui/lib/svg-icons/';
var material_ui_1 = require('material-ui');
var colors_1 = require('material-ui/lib/styles/colors');
var Complete = require(iconPath + 'toggle/check-box');
var Incomplete = require(iconPath + 'toggle/check-box-outline-blank');
var RunningTest = require(iconPath + 'toggle/indeterminate-check-box');
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
        this.state = {
            hintPos: -1,
            taskPos: 0
        };
    }
    default_1.prototype.componentDidUpdate = function () {
        var taskPosition = this.props.taskPosition;
        if (taskPosition > 0 && taskPosition < this.props.tasks.length) {
            ReactDOM.findDOMNode(this.refs['task' + taskPosition]).scrollIntoView();
        }
        if (this.state.taskPos !== taskPosition) {
            this.setState({
                hintPos: -1,
                taskPos: taskPosition
            });
        }
        else if (this.state.hintPos > -1) {
            ReactDOM.findDOMNode(this.refs['hint' + this.state.hintPos]).scrollIntoView();
        }
    };
    default_1.prototype.visibleTasks = function () {
        return this.props.tasks.slice(0, this.props.taskPosition + 1);
    };
    default_1.prototype.getIcon = function (index, position) {
        if (index < position) {
            return React.createElement(Complete, {color: colors_1.green500});
        }
        else if (index === position && this.props.runTests) {
            return React.createElement(RunningTest, {color: colors_1.orange500});
        }
        else {
            return React.createElement(Incomplete, null);
        }
    };
    default_1.prototype.displayHint = function (task) {
        if (task && task.hints && task.hints.length) {
            if (this.state.hintPos < task.hints.length - 1) {
                this.setState({ hintPos: this.state.hintPos += 1, taskPos: this.state.taskPos });
            }
        }
        else {
            this.setState({ hintPos: -1, taskPos: this.state.taskPos });
        }
    };
    default_1.prototype.hintsShown = function (task) {
        if (this.state.hintPos > -1 && task.hints && task.hints.length > 0) {
            return task.hints.slice(0, this.state.hintPos + 1);
        }
        return null;
    };
    default_1.prototype.render = function () {
        var _this = this;
        var page = this.props.page;
        var tasks = this.visibleTasks();
        var taskPosition = this.props.taskPosition;
        var currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
        var allComplete = taskPosition >= tasks.length;
        return (React.createElement(material_ui_1.Paper, {style: style, zDepth: 1, className: 'cr-page'}, React.createElement(material_ui_1.Card, null, React.createElement(material_ui_1.CardHeader, {title: page.title, subtitle: page.description}), React.createElement(material_ui_1.CardText, null, React.createElement(_components_1.MarkdownText, {text: page.explanation}))), React.createElement(material_ui_1.Divider, null), React.createElement(material_ui_1.List, {subheader: 'Tasks', className: 'cr-tasks', ref: 'tasks'}, tasks.map(function (task, index) {
            var isCurrentTask = index === taskPosition;
            var isDisabledTask = index > taskPosition;
            var isCompletedTask = index < taskPosition;
            var isFinalTask = index >= tasks.length - 1;
            var hints = _this.hintsShown(task);
            return (React.createElement("div", null, React.createElement(material_ui_1.ListItem, {ref: 'task' + index, className: classNames({
                'cr-task': true,
                'isCompletedTask': isCompletedTask,
                'isCurrentTask': isCurrentTask,
                'isDisabledTask': isDisabledTask
            })}, React.createElement("span", {className: 'cr-task-checkbox'}, _this.getIcon(index, taskPosition)), React.createElement("span", {className: 'cr-task-index'}, index + 1, "."), React.createElement("div", {className: 'cr-task-description'}, React.createElement(_components_1.MarkdownText, {text: task.description}))), isCurrentTask && hints ?
                hints.map(function (hint, indexHint) {
                    return React.createElement(material_ui_1.ListItem, {className: 'cr-task-hint', ref: 'hint' + indexHint}, React.createElement("div", {class: 'cr-task-hint-box'}, React.createElement("span", {className: 'cr-task-hint-index'}, indexHint + 1, "."), React.createElement("div", {className: 'cr-task-hint-description'}, React.createElement(_components_1.MarkdownText, {text: hint}))));
                })
                : null, isFinalTask ? null : React.createElement(material_ui_1.Divider, null)));
        })), React.createElement("section", {className: 'cr-page-toolbar'}, React.createElement(material_ui_1.LinearProgress, {mode: 'determinate', value: taskProgress(taskPosition, tasks.length), style: { height: '6px' }}), React.createElement(material_ui_1.Toolbar, null, currentTask && currentTask.hints && currentTask.hints.length ?
            React.createElement(material_ui_1.ToolbarGroup, {float: 'left'}, this.state.hintPos <= currentTask.hints.length - 2 ?
                React.createElement(material_ui_1.FlatButton, {className: 'cr-task-showHint', icon: React.createElement(InfoOutline, null), onClick: this.displayHint.bind(this, currentTask)})
                : React.createElement(material_ui_1.FlatButton, {className: 'cr-task-showHint-disabled', icon: React.createElement(Info, null), disabled: true}))
            : null, React.createElement(material_ui_1.ToolbarGroup, {float: 'right'}, allComplete ?
            React.createElement(material_ui_1.RaisedButton, {label: 'Continue', primary: true, onClick: this.props.callNextPage})
            :
                React.createElement(material_ui_1.RaisedButton, {label: 'Run', secondary: true, onClick: this.props.callRunTests}))))));
    };
    default_1 = __decorate([
        react_redux_1.connect(null, function (dispatch, state) {
            return {
                callNextPage: function () { return dispatch(Action.nextPage()); },
                callRunTests: function () { return dispatch(Action.runTests()); },
                toggleLog: function () { return dispatch(Action.toggleLog()); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], default_1);
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
