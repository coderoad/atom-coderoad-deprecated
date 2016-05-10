"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var index_1 = require('../../index');
var HintButton_1 = require('./HintButton');
var help_1 = require('material-ui/svg-icons/action/help');
var styles = {
    position: 'relative',
    margin: '5px auto 10px',
    width: '360px',
    textAlign: 'center',
};
var Hints = function (_a) {
    var task = _a.task, hintPosition = _a.hintPosition;
    var hints = task && task.hints ? task.hints : null;
    if (hintPosition < 0 || !hints || !hints.length) {
        return null;
    }
    var hint = hints[hintPosition];
    return (React.createElement(Card_1.Card, {style: styles}, React.createElement(Card_1.CardHeader, {title: 'Hints', avatar: React.createElement(help_1.default, null), actAsExpander: true, showExpandableButton: true}), React.createElement(Card_1.CardText, {className: 'cr-task-hint', expandable: true}, React.createElement(index_1.Markdown, null, hint)), hints.length > 1
        ? React.createElement(Card_1.CardActions, {style: { paddingBottom: '30px !important' }, expandable: true, className: 'cr-task-hints-actions'}, React.createElement(HintButton_1.default, {type: 'prev', label: 'Previous', hintPosition: hintPosition, hintsLength: hints.length}), React.createElement(HintButton_1.default, {type: 'next', label: 'Next', hintPosition: hintPosition, hintsLength: hints.length}))
        : null));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hints;
