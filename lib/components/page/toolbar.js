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
var linear_progress_1 = require('material-ui/lib/linear-progress');
var toolbar_1 = require('material-ui/lib/toolbar/toolbar');
var toolbar_group_1 = require('material-ui/lib/toolbar/toolbar-group');
var raised_button_1 = require('material-ui/lib/raised-button');
var flat_button_1 = require('material-ui/lib/flat-button');
var editor_1 = require('../../atom/editor');
var actions_1 = require('../../atom/actions');
var Code = require('material-ui/lib/svg-icons/action/code');
var ProgressBar = function (_a) {
    var progress = _a.progress;
    return React.createElement(linear_progress_1.default, {mode: 'determinate', value: progress, style: { height: '10px' }});
};
function taskProgress(current, max) {
    return (current / max) * 100;
}
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.apply(this, arguments);
    }
    default_1.prototype.getButton = function () {
        var _a = this.props, callNextPage = _a.callNextPage, showHint = _a.showHint, taskPosition = _a.taskPosition, tasks = _a.tasks;
        switch (true) {
            case taskPosition >= tasks.length:
                return React.createElement(raised_button_1.default, {label: 'Continue', primary: true, onTouchTap: callNextPage});
            default:
                return React.createElement(raised_button_1.default, {label: 'Save', secondary: true, onTouchTap: editor_1.save});
        }
    };
    default_1.prototype.render = function () {
        var _a = this.props, tasks = _a.tasks, taskPosition = _a.taskPosition;
        var progress = taskProgress(taskPosition, tasks.length);
        return (React.createElement("section", {className: 'cr-page-toolbar'}, React.createElement(ProgressBar, {progress: progress}), React.createElement(toolbar_1.default, null, React.createElement(toolbar_group_1.default, {float: 'left'}, React.createElement(flat_button_1.default, {icon: React.createElement(Code, null), onTouchTap: actions_1.toggleDevTools})), React.createElement(toolbar_group_1.default, {float: 'right'}, this.getButton()))));
    };
    default_1 = __decorate([
        react_redux_1.connect(null, function (dispatch, state) {
            return {
                callNextPage: function () { return dispatch(Action.nextPage()); },
                toggleLog: function () { return dispatch(Action.toggleLog()); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], default_1);
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
