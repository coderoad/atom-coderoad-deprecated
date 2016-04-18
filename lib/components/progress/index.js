"use strict";
var React = require('react');
var index_1 = require('../index');
var classnames = require('classnames');
var Paper_1 = require('material-ui/Paper');
var List_1 = require('material-ui/List');
var Subheader_1 = require('material-ui/Subheader');
var check_box_1 = require('material-ui/svg-icons/toggle/check-box');
var ProgressPage_1 = require('./ProgressPage');
var style = {
    width: '100%',
    margin: 0
};
exports.Progress = function (_a) {
    var progress = _a.progress, position = _a.position;
    return (React.createElement(Paper_1.default, {style: style, zDepth: 1, className: 'cr-progress'}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, "Progress"), progress.chapters.map(function (chapter, chapterIndex) {
        var isActive = chapterIndex === position.chapter;
        return (React.createElement(List_1.ListItem, {key: 'c' + chapterIndex, className: classnames({
            'chapter': true,
            'isActive': isActive
        }), initiallyOpen: chapterIndex === 0, leftIcon: chapter.completed ? React.createElement(check_box_1.default, null) : null, primaryTogglesNestedList: chapterIndex === position.chapter && !chapter.completed, nestedItems: chapter.pages.map(function (page, pageIndex) {
            var itemPosition = { chapter: chapterIndex, page: pageIndex };
            return (React.createElement(ProgressPage_1.ProgressPage, {key: 'c' + chapterIndex + 'p' + pageIndex, page: page, itemPosition: itemPosition, position: position}));
        })}, React.createElement("h3", null, chapterIndex + 1, ". ", chapter.title), React.createElement("span", {className: 'chapter-description'}, React.createElement(index_1.Markdown, null, chapter.description))));
    }))));
};
