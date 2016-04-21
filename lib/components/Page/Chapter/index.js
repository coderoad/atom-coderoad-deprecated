"use strict";
var React = require('react');
var index_1 = require('../../index');
exports.Chapter = function (_a) {
    var chapter = _a.chapter;
    return (React.createElement("section", {className: 'cr-chapter'}, React.createElement(index_1.Markdown, null, chapter.title)));
};
