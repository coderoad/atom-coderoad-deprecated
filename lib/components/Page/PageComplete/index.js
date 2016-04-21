"use strict";
var React = require('react');
var List_1 = require('material-ui/List');
var index_1 = require('../../index');
exports.PageComplete = function (_a) {
    var page = _a.page;
    return (React.createElement("div", {className: 'cr-page-onComplete'}, page.completed && page.onPageComplete
        ? React.createElement(List_1.ListItem, {key: 'page-complete'}, React.createElement(index_1.Markdown, null, page.onPageComplete))
        : null));
};
