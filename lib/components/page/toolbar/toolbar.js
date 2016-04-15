"use strict";
var React = require('react');
var Toolbar_1 = require('material-ui/Toolbar');
var progress_bar_1 = require('./progress-bar');
var buttons_1 = require('./buttons');
exports.PageToolbar = function (_a) {
    var tasks = _a.tasks, taskPosition = _a.taskPosition;
    return (React.createElement("section", {className: 'cr-page-toolbar'}, React.createElement(progress_bar_1.ProgressBar, {taskPosition: taskPosition, taskCount: tasks.length}), React.createElement(Toolbar_1.Toolbar, null, React.createElement(Toolbar_1.ToolbarGroup, {float: 'left'}, React.createElement(buttons_1.ToggleLog, null)), React.createElement(Toolbar_1.ToolbarGroup, {float: 'right'}, taskPosition >= tasks.length ?
        React.createElement(buttons_1.Continue, null) : React.createElement(buttons_1.Save, null)))));
};
