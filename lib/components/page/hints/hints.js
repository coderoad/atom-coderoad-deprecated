"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var _components_1 = require('../../_components');
var buttons_1 = require('./buttons');
var help_1 = require('material-ui/svg-icons/action/help');
exports.Hints = function (_a) {
    var task = _a.task, hintPosition = _a.hintPosition;
    var hints = task && task.hints ? task.hints : null;
    if (hintPosition < 0 || !hints || !hints.length) {
        return null;
    }
    var hint = hints[hintPosition];
    return (React.createElement(Card_1.Card, {className: 'cr-task-hints'}, React.createElement(Card_1.CardHeader, {title: 'Hints', avatar: React.createElement(help_1.default, null), actAsExpander: true, showExpandableButton: true}), React.createElement(Card_1.CardText, {className: 'cr-task-hint', expandable: true}, React.createElement(_components_1.Markdown, null, hint)), React.createElement(Card_1.CardActions, {expandable: true}, React.createElement(buttons_1.HintButton, {label: 'Previous', hintPosition: hintPosition, hintsLength: hints.length, direction: -1}), React.createElement(buttons_1.HintButton, {label: 'Next', hintPosition: hintPosition, hintsLength: hints.length, direction: 1}))));
};
