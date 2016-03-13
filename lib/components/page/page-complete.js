"use strict";
var React = require('react');
var material_ui_1 = require('material-ui');
var _components_1 = require('../_components');
exports.PageCompleteMessage = function (_a) {
    var page = _a.page;
    return (React.createElement("div", {className: 'cr-page-onComplete'}, page.completed && page.onPageComplete ?
        React.createElement(material_ui_1.ListItem, {key: 'page-complete'}, React.createElement(_components_1.MarkdownText, {text: page.onPageComplete}))
        : null));
};
