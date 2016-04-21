"use strict";
var React = require('react');
var index_1 = require('../../index');
var styles = {
    display: 'block',
    height: '33px',
    width: '100%',
    padding: '10px',
    textAlign: 'center',
};
exports.Chapter = function (_a) {
    var chapter = _a.chapter;
    return (React.createElement("section", {styles: styles}, React.createElement(index_1.Markdown, null, chapter.title)));
};
