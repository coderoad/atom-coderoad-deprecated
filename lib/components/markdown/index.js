"use strict";
var React = require('react');
var marked = require('marked');
var Highlights = require('highlights');
var highlighter = new Highlights({ registry: atom.grammars });
function highlight(code, lang) {
    return highlighter.highlightSync({
        fileContents: code,
        scopeName: 'source.' + (lang || 'js')
    });
}
var options = {
    breaks: true,
    gfm: true,
    highlight: highlight,
    tables: true,
    sanitize: true,
    smartLists: true,
};
function formatText(text) {
    return typeof text !== 'string'
        ? ''
        : marked(text.toString(), options);
}
;
exports.Markdown = function (_a) {
    var children = _a.children;
    return (React.createElement("span", {className: 'cr-markdown', dangerouslySetInnerHTML: { __html: formatText(children) }}));
};
