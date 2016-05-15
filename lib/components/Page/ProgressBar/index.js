"use strict";
var React = require('react');
var LinearProgress_1 = require('material-ui/LinearProgress');
var style = {
    height: '10px',
    position: 'relative',
    margin: '0px',
};
var ProgressBar = function (_a) {
    var taskPosition = _a.taskPosition, taskLength = _a.taskLength, completed = _a.completed;
    var progress = (taskPosition / taskLength) * 100;
    if (completed) {
        return null;
    }
    return (React.createElement(LinearProgress_1.default, {mode: 'determinate', value: progress, style: style}));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressBar;
