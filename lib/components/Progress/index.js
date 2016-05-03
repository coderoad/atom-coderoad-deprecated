"use strict";
var React = require('react');
var Paper_1 = require('material-ui/Paper');
var List_1 = require('material-ui/List');
var Subheader_1 = require('material-ui/Subheader');
var ProgressPage_1 = require('./ProgressPage');
var pageStyle = {
    width: '100%',
};
var listStyle = {
    margin: '5px',
};
exports.Progress = function (_a) {
    var progress = _a.progress, pagePosition = _a.pagePosition, info = _a.info, tutorial = _a.tutorial;
    return (React.createElement(Paper_1.default, {style: pageStyle}, React.createElement(List_1.List, {style: listStyle}, React.createElement(Subheader_1.default, null, info.name), tutorial.pages.map(function (page, index) { return (React.createElement(ProgressPage_1.ProgressPage, {key: index, index: index, page: page, pagePosition: pagePosition, progress: progress})); }))));
};
