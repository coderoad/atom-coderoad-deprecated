"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var _components_1 = require('../_components');
var Routes = (function (_super) {
    __extends(Routes, _super);
    function Routes() {
        _super.apply(this, arguments);
    }
    Routes.prototype.chooseRoute = function (state) {
        switch (state.route) {
            case 'page':
                return React.createElement(_components_1.Page, {page: state.page, tasks: state.tasks, taskPosition: state.taskPosition, hintPosition: state.hintPosition, editorActions: state.editorActions, runTests: state.runTests, log: state.log});
            case 'progress':
                return React.createElement(_components_1.Progress, {progress: state.progress, position: state.position});
            case 'start':
                return React.createElement(_components_1.Start, {checks: state.checks});
            case 'tutorials':
                return React.createElement(_components_1.Tutorials, {tutorials: state.tutorials});
            case 'final':
                return React.createElement(_components_1.FinalPage, null);
            default:
                throw 'Error: Route not found.';
        }
    };
    Routes.prototype.render = function () {
        var state = this.props.state;
        return (React.createElement("div", null, this.chooseRoute(state)));
    };
    return Routes;
}(React.Component));
exports.Routes = Routes;
