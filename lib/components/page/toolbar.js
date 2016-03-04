"use strict";
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
var react_redux_1 = require('react-redux');
var Action = require('../../actions/actions');
var material_ui_1 = require('material-ui');
var editor_1 = require('../../atom/editor');
var ProgressBar = function (_a) {
    var progress = _a.progress;
    return React.createElement(material_ui_1.LinearProgress, {mode: 'determinate', value: progress, style: { height: '10px' }});
};
function taskProgress(current, max) {
    return (current / max) * 100;
}
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.apply(this, arguments);
    }
    default_1.prototype.render = function () {
        var _a = this.props, tasks = _a.tasks, taskPosition = _a.taskPosition, hintPosition = _a.hintPosition, callNextPage = _a.callNextPage, callRunTests = _a.callRunTests, showHint = _a.showHint;
        var currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
        var progress = taskProgress(taskPosition, tasks.length);
        var allComplete = taskPosition >= tasks.length;
        return (React.createElement("section", {className: 'cr-page-toolbar'}, React.createElement(ProgressBar, {progress: progress}), React.createElement(material_ui_1.Toolbar, null, React.createElement(material_ui_1.ToolbarGroup, {float: 'right'}, allComplete ?
            React.createElement(material_ui_1.RaisedButton, {label: 'Continue', primary: true, onTouchTap: callNextPage})
            :
                React.createElement(material_ui_1.RaisedButton, {label: 'Save', secondary: true, onTouchTap: callRunTests})))));
    };
    default_1 = __decorate([
        react_redux_1.connect(null, function (dispatch, state) {
            return {
                callNextPage: function () { return dispatch(Action.nextPage()); },
                callSave: function () { return editor_1.save(); },
                toggleLog: function () { return dispatch(Action.toggleLog()); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], default_1);
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
