"use strict";
var React = require('react');
var Paper_1 = require('material-ui/Paper');
var List_1 = require('material-ui/List');
var Subheader_1 = require('material-ui/Subheader');
var ProgressChapter_1 = require('./ProgressChapter');
var pageStyle = {
    width: '100%',
    margin: '0px',
};
exports.Progress = function (_a) {
    var progress = _a.progress, position = _a.position, info = _a.info, tutorial = _a.tutorial;
    return (React.createElement(Paper_1.default, {style: pageStyle}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, info.name), tutorial.chapters.map(function (chapter, chapterIndex) { return (React.createElement(ProgressChapter_1.ProgressChapter, {key: chapterIndex, chapter: chapter, chapterIndex: chapterIndex, position: position, progress: progress})); }))));
};
