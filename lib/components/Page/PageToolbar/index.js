"use strict";
var React = require('react');
var Toolbar_1 = require('material-ui/Toolbar');
var index_1 = require('../../index');
var styles = {
    zIndex: '5',
    position: 'relative',
    bottom: '0px',
    right: '0px',
    height: '60px',
    width: '400px',
    margin: '0px',
};
exports.PageToolbar = function (_a) {
    var tasks = _a.tasks, taskPosition = _a.taskPosition, children = _a.children;
    return (React.createElement("section", {styles: styles}, children, React.createElement(Toolbar_1.Toolbar, null, React.createElement(Toolbar_1.ToolbarGroup, {float: 'left'}, React.createElement(index_1.ToggleDevTools, null)), React.createElement(Toolbar_1.ToolbarGroup, {float: 'right'}, taskPosition >= tasks.length ?
        React.createElement(index_1.Continue, null) : React.createElement(index_1.Save, null)))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.PageToolbar;
