"use strict";
var React = require('react');
var material_ui_1 = require('material-ui');
var _components_1 = require('../_components');
function hintsShown(task, hintPosition) {
    if (hintPosition > -1 && task.hints && task.hints.length > 0) {
        return task.hints.slice(0, hintPosition + 1);
    }
    return null;
}
exports.TaskHint = function (_a) {
    var hint = _a.hint, index = _a.index;
    return (React.createElement(material_ui_1.ListItem, {className: 'cr-task-hint', key: 'hint' + index}, React.createElement("div", {class: 'cr-task-hint-box'}, React.createElement("span", {className: 'cr-task-hint-index'}, index + 1, "."), React.createElement("div", {className: 'cr-task-hint-description'}, React.createElement(_components_1.MarkdownText, {text: hint})))));
};
exports.TaskHints = function (_a) {
    var task = _a.task, hintPosition = _a.hintPosition;
    var hints = hintsShown(task, hintPosition);
    return (React.createElement("div", {className: 'cr-task-hints'}, hints ? hints.map(function (hint, index) { return React.createElement(exports.TaskHint, {hint: hint, index: index}); }) : null));
};
