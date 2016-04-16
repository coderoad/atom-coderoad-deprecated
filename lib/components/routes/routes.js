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
    Routes.prototype.render = function () {
        var _a = this.props.state, page = _a.page, tasks = _a.tasks, taskPosition = _a.taskPosition, hintPosition = _a.hintPosition, editorActions = _a.editorActions, testRun = _a.testRun, log = _a.log, progress = _a.progress, position = _a.position, checks = _a.checks, tutorials = _a.tutorials, route = _a.route;
        switch (route) {
            case 'page':
                return React.createElement(_components_1.Page, {page: page, tasks: tasks, taskPosition: taskPosition, hintPosition: hintPosition, editorActions: editorActions, testRun: testRun});
            case 'progress':
                return React.createElement(_components_1.Progress, {progress: progress, position: position});
            case 'start':
                return React.createElement(_components_1.Start, {checks: checks});
            case 'tutorials':
                return React.createElement(_components_1.Tutorials, {tutorials: tutorials});
            case 'final':
                return React.createElement(_components_1.FinalPage, null);
            default:
                throw 'Error: Route not found.';
        }
    };
    return Routes;
}(React.Component));
exports.Routes = Routes;
