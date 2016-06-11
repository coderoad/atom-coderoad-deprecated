"use strict";
var React = require('react');
var LinearProgress_1 = require('material-ui/LinearProgress');
var style = {
    height: '10px',
    position: 'relative',
    margin: '0px',
};
var ProgressBar = function (_a) {
    var taskProgress = _a.taskProgress, completed = _a.completed;
    if (completed) {
        return null;
    }
    return (React.createElement(LinearProgress_1.default, {mode: 'determinate', value: taskProgress, style: style}));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressBar;
