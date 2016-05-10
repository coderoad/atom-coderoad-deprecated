"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var index_1 = require('../../index');
var colors_1 = require('material-ui/styles/colors');
var styles = {
    backgroundColor: colors_1.cyan500,
    margin: '10px 5px',
};
var textStyles = {
    color: colors_1.grey100,
    fontSize: '1.1em'
};
var TasksComplete = function (_a) {
    var page = _a.page, completed = _a.completed;
    if (!completed || !page.onPageComplete) {
        return null;
    }
    return (React.createElement(Card_1.Card, {style: styles}, React.createElement(Card_1.CardText, null, React.createElement(index_1.Markdown, {style: textStyles}, page.onPageComplete))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TasksComplete;
