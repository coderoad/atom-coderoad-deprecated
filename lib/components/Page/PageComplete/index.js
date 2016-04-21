"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var index_1 = require('../../index');
var colors_1 = require('material-ui/styles/colors');
var styles = {
    backgroundColor: colors_1.cyan500,
    position: 'fixed',
    bottom: '20px',
    padding: '10px 15px 30px',
    right: '0px',
    margin: '0',
    width: '400px',
};
exports.PageComplete = function (_a) {
    var page = _a.page;
    return (React.createElement("div", {className: 'cr-page-onComplete'}, page.completed && page.onPageComplete
        ? React.createElement(Card_1.Card, {style: styles}, React.createElement(Card_1.CardText, null, React.createElement(index_1.Markdown, null, page.onPageComplete)))
        : null));
};
