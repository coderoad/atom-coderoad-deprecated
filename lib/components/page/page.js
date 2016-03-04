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
var material_ui_1 = require('material-ui');
var Complete = require(iconPath + 'toggle/check-box');
var Incomplete = require(iconPath + 'toggle/check-box-outline-blank');
var RunningTest = require(iconPath + 'toggle/indeterminate-check-box');
var material_ui_2 = require('material-ui');
var content_1 = require('./content');
var task_1 = require('./task');
var hint_1 = require('./hint');
var page_complete_1 = require('./page-complete');
var toolbar_1 = require('./toolbar');
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
        ReactDOM.findDOMNode(this.refs.listEnd).scrollIntoView();
    };
    default_1.prototype.render = function () {
        var _a = this.props, page = _a.page, taskPosition = _a.taskPosition, hintPosition = _a.hintPosition, tasks = _a.tasks, runTests = _a.runTests;
        var currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
        var allComplete = taskPosition >= tasks.length;
        return (React.createElement(material_ui_2.Paper, {style: style, zDepth: 1, className: 'cr-page'}, 
            React.createElement(content_1.default, {page: page}), 
            React.createElement(material_ui_1.Divider, null), 
            React.createElement(material_ui_1.List, {subheader: 'Tasks', className: 'cr-page-list', ref: 'tasks'}, 
                React.createElement(task_1.Tasks, {tasks: tasks, taskPosition: taskPosition, runTests: runTests}), 
                React.createElement(hint_1.TaskHints, {task: currentTask, hintPosition: hintPosition}), 
                React.createElement(page_complete_1.PageCompleteMessage, {page: page}), 
                React.createElement("div", {ref: 'listEnd'})), 
            React.createElement(toolbar_1.default, {tasks: tasks, taskPosition: taskPosition, hintPosition: hintPosition})));
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
