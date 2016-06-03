"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var index_1 = require('../../index');
var colors_1 = require('material-ui/styles/colors');
var styles = {
    card: {
        backgroundColor: colors_1.cyan500,
        margin: '10px 5px',
    },
    text: {
        color: colors_1.grey100,
        fontSize: '1.1em'
    },
};
var TasksComplete = function (_a) {
    var page = _a.page, completed = _a.completed;
    if (!completed || !page.onPageComplete) {
        return null;
    }
    return (React.createElement(Card_1.Card, {style: styles.card}, React.createElement(Card_1.CardText, null, React.createElement(index_1.Markdown, {style: styles.text}, page.onPageComplete))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TasksComplete;
