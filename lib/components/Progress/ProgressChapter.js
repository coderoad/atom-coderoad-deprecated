"use strict";
var React = require('react');
var classnames = require('classnames');
var List_1 = require('material-ui/List');
var ProgressPage_1 = require('./ProgressPage');
var progressIcon_1 = require('./progressIcon');
var index_1 = require('../index');
exports.ProgressChapter = function (_a) {
    var chapter = _a.chapter, chapterIndex = _a.chapterIndex, position = _a.position;
    var isActive = chapterIndex === position.chapter;
    return (React.createElement(List_1.ListItem, {key: 'c' + chapterIndex, className: classnames({
        'chapter': true,
        'isActive': isActive
    }), initiallyOpen: chapterIndex === 0, leftIcon: progressIcon_1.progressIcon(chapter.completed), primaryTogglesNestedList: chapterIndex === position.chapter && !chapter.completed, nestedItems: chapter.pages.map(function (page, pageIndex) { return (React.createElement(ProgressPage_1.ProgressPage, {key: 'c' + chapterIndex + 'p' + pageIndex, pageIndex: pageIndex, page: page, chapterIndex: chapterIndex, position: position})); })}, React.createElement("h3", null, chapterIndex + 1, ". ", chapter.title), React.createElement("span", {className: 'chapter-description'}, React.createElement(index_1.Markdown, null, chapter.description))));
};
