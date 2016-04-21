"use strict";
var React = require('react');
var Paper_1 = require('material-ui/Paper');
var List_1 = require('material-ui/List');
var Subheader_1 = require('material-ui/Subheader');
var ProgressChapter_1 = require('./ProgressChapter');
var pageStyle = {
    width: '100%',
    margin: 0,
};
exports.Progress = function (_a) {
    var progress = _a.progress, position = _a.position, info = _a.info;
    return (React.createElement(Paper_1.default, {className: 'cr-progress', style: pageStyle, zDepth: 1}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, info.title), progress.chapters.map(function (chapter, chapterIndex) { return (React.createElement(ProgressChapter_1.ProgressChapter, {chapter: chapter, chapterIndex: chapterIndex, position: position})); }))));
};
