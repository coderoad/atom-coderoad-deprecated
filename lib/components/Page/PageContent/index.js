"use strict";
var React = require('react');
var index_1 = require('../../index');
var Card_1 = require('material-ui/Card');
var styles = {
    margin: '5px'
};
var PageContent = function (_a) {
    var page = _a.page;
    return (React.createElement(Card_1.Card, {style: styles}, React.createElement(Card_1.CardHeader, {title: page.title}), React.createElement(Card_1.CardText, null, React.createElement(index_1.Markdown, null, page.description))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageContent;
