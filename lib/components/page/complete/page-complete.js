"use strict";
var React = require('react');
var list_item_1 = require('material-ui/lib/lists/list-item');
var _components_1 = require('../../_components');
exports.PageCompleteMessage = function (_a) {
    var page = _a.page;
    return (React.createElement("div", {className: 'cr-page-onComplete'}, page.completed && page.onPageComplete ?
        React.createElement(list_item_1.default, {key: 'page-complete'}, React.createElement(_components_1.MarkdownText, {text: page.onPageComplete}))
        : null));
};
