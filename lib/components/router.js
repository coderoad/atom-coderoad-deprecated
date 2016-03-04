"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var _components_1 = require('./_components');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.apply(this, arguments);
    }
    default_1.prototype.chooseRoute = function (state) {
        switch (state.route) {
            case 'page':
                return React.createElement(_components_1.Page, {page: state.page, tasks: state.tasks, taskPosition: state.taskPosition, hintPosition: state.hintPosition, editorActions: state.editorActions, runTests: state.runTests, log: state.log});
            case 'progress':
                return React.createElement(_components_1.Progress, {progress: state.progress, position: state.position});
            case 'projects':
                return React.createElement(_components_1.Projects, {tutorials: state.tutorials});
            default:
                throw 'Error: Route not found.';
        }
    };
    default_1.prototype.render = function () {
        var state = this.props.state;
        return (React.createElement(ReactCSSTransitionGroup, {transitionName: 'route', transitionEnterTimeout: 500, transitionLeaveTimeout: 300}, this.chooseRoute(state)));
    };
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
