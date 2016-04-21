"use strict";
var React = require('react');
var Toolbar_1 = require('material-ui/Toolbar');
var ToggleLog_1 = require('./ToggleLog');
var Save_1 = require('./Save');
var Continue_1 = require('./Continue');
exports.PageToolbar = function (_a) {
    var tasks = _a.tasks, taskPosition = _a.taskPosition, children = _a.children;
    return (React.createElement("section", {className: 'cr-page-toolbar'}, children, React.createElement(Toolbar_1.Toolbar, null, React.createElement(Toolbar_1.ToolbarGroup, {float: 'left'}, React.createElement(ToggleLog_1.ToggleLog, null)), React.createElement(Toolbar_1.ToolbarGroup, {float: 'right'}, taskPosition >= tasks.length ?
        React.createElement(Continue_1.Continue, null) : React.createElement(Save_1.Save, null)))));
};
