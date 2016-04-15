"use strict";
var React = require('react');
var _components_1 = require('../_components');
var Card_1 = require('material-ui/Card');
exports.PageContent = function (_a) {
    var page = _a.page;
    return (React.createElement(Card_1.Card, null, React.createElement(Card_1.CardHeader, {title: page.title}), React.createElement(Card_1.CardText, null, React.createElement(_components_1.Markdown, null, page.description))));
};
