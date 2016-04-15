"use strict";
var React = require('react');
var _components_1 = require('../_components');
var card_1 = require('material-ui/lib/card/card');
var card_header_1 = require('material-ui/lib/card/card-header');
var card_text_1 = require('material-ui/lib/card/card-text');
exports.PageContent = function (_a) {
    var page = _a.page;
    return (React.createElement(card_1.default, null, React.createElement(card_header_1.default, {title: page.title}), React.createElement(card_text_1.default, null, React.createElement(_components_1.Markdown, null, page.description))));
};
