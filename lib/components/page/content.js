"use strict";
var React = require('react');
var _components_1 = require('../_components');
var material_ui_1 = require('material-ui');
function default_1(_a) {
    var page = _a.page;
    return (React.createElement(material_ui_1.Card, null, React.createElement(material_ui_1.CardHeader, {title: page.title}), React.createElement(material_ui_1.CardText, null, React.createElement(_components_1.MarkdownText, {text: page.description}))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
