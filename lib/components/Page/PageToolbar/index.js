"use strict";
var React = require('react');
var Toolbar_1 = require('material-ui/Toolbar');
var ToggleLog_1 = require('./ToggleLog');
var Save_1 = require('./Save');
var Continue_1 = require('./Continue');
var styles = {
    zIndex: '1000',
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    height: '60px',
    width: '400px',
};
exports.PageToolbar = function (_a) {
    var tasks = _a.tasks, taskPosition = _a.taskPosition, children = _a.children;
    return (React.createElement("section", {styles: styles}, children, React.createElement(Toolbar_1.Toolbar, null, React.createElement(Toolbar_1.ToolbarGroup, {float: 'left'}, React.createElement(ToggleLog_1.ToggleLog, null)), React.createElement(Toolbar_1.ToolbarGroup, {float: 'right'}, taskPosition >= tasks.length ?
        React.createElement(Continue_1.Continue, null) : React.createElement(Save_1.Save, null)))));
};
