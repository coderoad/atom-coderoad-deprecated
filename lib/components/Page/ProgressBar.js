"use strict";
var React = require('react');
var LinearProgress_1 = require('material-ui/LinearProgress');
exports.ProgressBar = function (_a) {
    var taskPosition = _a.taskPosition, taskCount = _a.taskCount;
    var progress = (taskPosition / taskCount) * 100;
    return (React.createElement(LinearProgress_1.default, {mode: 'determinate', value: progress, style: { height: '10px' }}));
};
