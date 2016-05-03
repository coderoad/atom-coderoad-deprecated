"use strict";
var React = require('react');
var index_1 = require('../../index');
var taskCheckbox_1 = require('./taskCheckbox');
var List_1 = require('material-ui/List');
var colors_1 = require('material-ui/styles/colors');
var styles = {
    margin: '5px',
    padding: '5px',
    position: 'relative'
};
var indexStyles = {
    position: 'absolute',
    top: '20px',
    left: '45px',
};
var descriptionStyles = {
    backgroundColor: 'inherit',
    paddingTop: '-10px',
    paddingLeft: '55px',
    fontSize: '14px',
    lineHeight: '1.6',
};
function getStatus(index, taskPosition, testRun) {
    return index < taskPosition ? colors_1.lightGreen200 : 'inherit';
}
var Task = function (_a) {
    var task = _a.task, taskPosition = _a.taskPosition, index = _a.index, testRun = _a.testRun;
    var backgroundColor = getStatus(index, taskPosition, testRun);
    var isCurrentTask = taskPosition === index;
    return (React.createElement(List_1.ListItem, {key: index, style: Object.assign({}, styles, { backgroundColor: backgroundColor })}, taskCheckbox_1.default(isCurrentTask, testRun), React.createElement("span", {style: indexStyles}, index + 1, "."), React.createElement("div", {style: descriptionStyles}, React.createElement(index_1.Markdown, null, task.description))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Task;
