"use strict";
var React = require('react');
var _components_1 = require('../_components');
var card_1 = require('material-ui/lib/card/card');
var card_header_1 = require('material-ui/lib/card/card-header');
var card_text_1 = require('material-ui/lib/card/card-text');
function default_1(_a) {
    var page = _a.page;
    return (React.createElement(card_1.default, null, React.createElement(card_header_1.default, {title: page.title}), React.createElement(card_text_1.default, null, React.createElement(_components_1.MarkdownText, {text: page.description}))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
