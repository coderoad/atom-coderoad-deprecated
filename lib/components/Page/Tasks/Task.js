"use strict";
var React = require('react');
var index_1 = require('../../index');
var List_1 = require('material-ui/List');
var colors_1 = require('material-ui/styles/colors');
function getStatus(index, taskPosition, testRun) {
    switch (true) {
        case index < taskPosition:
            return colors_1.lightGreen200;
        case testRun:
            return colors_1.orange500;
        default:
            return 'inherit';
    }
}
exports.Task = function (_a) {
    var task = _a.task, taskPosition = _a.taskPosition, index = _a.index, testRun = _a.testRun;
    var backgroundColor = getStatus(index, taskPosition, testRun);
    return (React.createElement(List_1.ListItem, {key: index, className: 'cr-task', style: { backgroundColor: backgroundColor }}, React.createElement("span", {className: 'cr-task-index'}, index + 1, "."), React.createElement("div", {className: 'cr-task-description'}, React.createElement(index_1.Markdown, null, task.description))));
};
